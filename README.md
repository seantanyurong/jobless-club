# Jobless Club

The landing page for [The Jobless Club](https://www.tiktok.com/@thejoblessclub?_t=8oeLDQhDjdm) — just 3 Singaporean boys trying to make 30k MMR so they can retire in the mountains of Thailand.

It introduces the team and showcases the products we're building, with live revenue and traction numbers pulled in for some of them. As featured on [CNA Money Mind](https://www.channelnewsasia.com/watch/money-mind-2026/jobless-club-5789621).

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Stripe](https://stripe.com/) — for live revenue figures

## Getting Started

Install dependencies:

```bash
npm install
```

Create a `.env.local` file with the Stripe API keys used to fetch live revenue (see [Environment Variables](#environment-variables)):

```bash
KSS_STRIPE_API_KEY=sk_live_...
THE100CLUB_STRIPE_API_KEY=sk_live_...
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result. The page auto-updates as you edit `app/page.tsx`.

## Scripts

| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Build for production         |
| `npm run start` | Run the production build     |
| `npm run lint`  | Run ESLint                   |

## Environment Variables

Live revenue is fetched per business from Stripe. Each business needs its own API key:

| Variable                    | Used for                    |
| --------------------------- | --------------------------- |
| `KSS_STRIPE_API_KEY`        | Knife Sharpening SG revenue |
| `THE100CLUB_STRIPE_API_KEY` | The 100 Club revenue        |

These are defined in `lib/stripe.ts` and read via the `requireEnv` helper in `lib/env.ts`, which throws if a key is missing.

## Revenue API

`GET /api/stripe/revenue?business=<key>` returns the net revenue (in cents) for a business by summing its Stripe balance transactions.

- `business` must be one of the keys defined in `lib/stripe.ts` (`kss`, `the100club`).
- Responses are cached for 5 minutes (ISR-style via `unstable_cache`, plus a `Cache-Control` header).

The `<Revenue />` client component (`app/revenue.tsx`) consumes this endpoint to display figures on the page.

## Project Structure

```
app/
  api/stripe/revenue/route.ts   Revenue endpoint
  page.tsx                      Landing page
  revenue.tsx                   Revenue display component
  layout.tsx                    Root layout
lib/
  stripe.ts                     Stripe clients per business
  env.ts                        Env var helper
public/images/                  Logos, team photos, drawings
```

## Deploy

Deployed on [Vercel](https://vercel.com/).
