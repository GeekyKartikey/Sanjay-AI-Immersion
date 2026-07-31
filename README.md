# Sanjay

The public landing page and early-access waitlist for Sanjay, a private, voice-first, on-device personal AI assistant.

## Run locally

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The existing `npm run dev` command starts both Convex and Next.js because this project was scaffolded with Convex. The landing page itself does not require Convex.

## Configure waitlist storage

Waitlist submissions are stored in Convex. Run:

```bash
npx convex dev
```

Sign in when prompted and select or create the project. Convex writes the development deployment URL to `.env.local` as `NEXT_PUBLIC_CONVEX_URL`; that file is ignored by Git. Set `NEXT_PUBLIC_SITE_URL=http://localhost:3000` there for local metadata.

The `waitlist` table and its email index are defined in `convex/schema.ts`. Signup and qualification writes live in `convex/waitlist.ts`. The API returns a temporary-unavailable message when the Convex URL is missing; it never claims an unsaved submission succeeded.

## Waitlist API

`POST /api/waitlist` supports two actions:

- `signup`: validates and stores first name, email, and referral source. Existing email addresses are handled as already joined.
- `qualify`: updates optional role, operating system, problem, tools, interview interest, and first-task answers after signup.

Validation is shared between browser and server with Zod. The Next.js API calls Convex through `lib/waitlist.ts`, and Convex validates the mutation again before writing.

## Analytics

`lib/analytics.ts` emits named browser events through both a `sanjay:analytics` custom event and `window.dataLayer` when present. No analytics provider is installed. PostHog, Plausible, or another provider can be connected later without changing page components.

## Verify

```bash
npm run lint
npm run typecheck
npm run build
```

## Deploy to Vercel

1. Push this repository to GitHub and import it into Vercel.
2. Create a Convex production deploy key and add it to Vercel as `CONVEX_DEPLOY_KEY`.
3. `vercel.json` deploys the Convex backend before each Vercel build. Metadata uses Vercel's production URL automatically; set `NEXT_PUBLIC_SITE_URL` only when using a custom domain.
4. Deploy and test one waitlist signup plus one duplicate email.

The Convex build step provides `NEXT_PUBLIC_CONVEX_URL` for the deployed environment.
