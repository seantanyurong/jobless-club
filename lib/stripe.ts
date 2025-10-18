import Stripe from "stripe";
import { requireEnv } from "@/lib/env";

export const stripeAll = {
  kss: new Stripe(requireEnv("KSS_STRIPE_API_KEY")),
  the100club: new Stripe(requireEnv("THE100CLUB_STRIPE_API_KEY")),
} as const;

export type Business = keyof typeof stripeAll;
