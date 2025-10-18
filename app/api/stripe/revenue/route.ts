import { NextResponse } from "next/server";
import { stripeAll, Business } from "@/lib/stripe";
import { unstable_cache, revalidateTag } from "next/cache";

const isBusiness = (k: string): k is Business => k in stripeAll;

async function getRevenueAllRaw(business: Business) {
  let total = 0;
  const stripe = stripeAll[business];

  for await (const charge of stripe.charges.list({ limit: 100 })) {
    if (charge.status === "succeeded") {
      total += charge.amount - (charge.amount_refunded || 0);
    }
  }
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