import { NextResponse } from "next/server";
import { stripeAll, Business } from "@/lib/stripe";
import { unstable_cache, revalidateTag } from "next/cache";

const isBusiness = (k: string): k is Business => k in stripeAll;

async function getRevenueAllRaw(business: Business) {
  let total = 0;
  const stripe = stripeAll[business];
  const typeCounts: Record<string, number> = {};

  for await (const txn of stripe.balanceTransactions.list({
    limit: 100
  })) {
    // Count transaction types for debugging
    typeCounts[txn.type] = (typeCounts[txn.type] || 0) + 1;

    // Sum all positive revenue transactions
    if (txn.type === 'charge' || txn.type === 'payment') {
      total += txn.net;
    }
  }

  console.log(`[${business}] Transaction types:`, typeCounts);
  console.log(`[${business}] Total revenue (net):`, total);

  return total;
}

// Create a per-business cached call with ISR-style revalidation.
// Key includes the business; tag enables manual invalidation.
function getRevenueAllCached(business: Business) {
  return unstable_cache(
    () => getRevenueAllRaw(business),
    ["revenue", business],                     // cache key
    { revalidate: 300, tags: [`revenue:${business}`] } // 5 minutes
  )();
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const businessParam = searchParams.get("business");

  if (!businessParam || !isBusiness(businessParam)) {
    return NextResponse.json(
      { error: "Invalid or missing ?business. Use one of: " + Object.keys(stripeAll).join(", ") },
      { status: 400 }
    );
  }

  const cents = await getRevenueAllCached(businessParam);
  return NextResponse.json(
    { revenue: cents },
    {
      headers: {
        "Cache-Control": "s-maxage=300, stale-while-revalidate=60"
      }
    }
  );
}