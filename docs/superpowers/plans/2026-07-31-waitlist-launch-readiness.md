# Waitlist Launch Readiness Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the Sanjay waitlist safe to publish and prove that a real signup reaches the production database.

**Architecture:** Keep the existing Next.js API route and use the existing Convex deployment for storage. Add automated request tests around validation and storage failures, verify the rendered page at desktop and mobile sizes, then deploy only after the production deployment and environment variables are configured.

**Tech Stack:** Next.js 16, React 19, TypeScript, Zod, Convex, Vercel.

## Global Constraints

- Never commit `.env.local` or a Convex deploy key to Git.
- Do not claim a signup succeeded unless Supabase saved it or reported a duplicate email.
- A launch is complete only after one real signup and one duplicate signup are verified in production.

---

### Task 1: Local request verification

**Files:**
- Modify: `package.json`
- Create: `lib/validation.test.ts`
- Create: `app/api/waitlist/route.test.ts`

**Interfaces:**
- Consumes: `waitlistSignupSchema` and `POST(request: Request)`.
- Produces: repeatable tests for valid, invalid, and unconfigured requests.

- [ ] Add the Node test runner used by the project and a `test` script.
- [ ] Test valid signup input, invalid email, missing privacy confirmation, and optional qualification input.
- [ ] Test that malformed requests return 400 and missing server configuration returns 503.
- [ ] Run `npm test`, `npm run lint`, and `npm run typecheck` and require zero failures.

### Task 2: Browser and accessibility verification

**Files:**
- Modify only files that fail a browser or accessibility check.

**Interfaces:**
- Consumes: `/`, `/api/waitlist`, and the two-stage `WaitlistForm` flow.
- Produces: a usable page at mobile and desktop widths.

- [ ] Start the production build locally and confirm `/` returns HTTP 200.
- [ ] Check the page at 390px and 1440px widths for clipping, unreadable text, and broken controls.
- [ ] Use only the keyboard to reach navigation, the signup fields, privacy checkbox, and submit button.
- [ ] Submit invalid values and confirm each error is visible and connected to its field.

### Task 3: Convex production storage

**Files:**
- Verify: `.env.example`
- Verify: `README.md`

**Interfaces:**
- Consumes: `CONVEX_DEPLOY_KEY`, `NEXT_PUBLIC_CONVEX_URL`, and the `waitlist` table.
- Produces: a deployed Convex backend for the waitlist.

- [ ] Deploy `convex/schema.ts` and `convex/waitlist.ts` with `npx convex dev --once`.
- [ ] Confirm `.env.local` contains `NEXT_PUBLIC_CONVEX_URL`; never commit that file.
- [ ] Submit one test email locally and confirm its row appears in the Convex dashboard.
- [ ] Submit the same email again and confirm the page reports that it is already saved.

### Task 4: Version control and deployment

**Files:**
- Verify: `.gitignore`
- Verify: `next.config.ts`

**Interfaces:**
- Consumes: the verified project and private environment values.
- Produces: a public Vercel deployment tied to a Git repository.

- [ ] Confirm `.env.local`, `.next`, and `node_modules` are ignored by Git.
- [ ] Create the first commit containing only project source and documentation.
- [ ] Push the repository to GitHub and import it into Vercel.
- [ ] Add `CONVEX_DEPLOY_KEY` and `NEXT_PUBLIC_SITE_URL` to Vercel Production and Preview settings.
- [ ] Deploy and require a successful Vercel production build.

### Task 5: Production proof

**Files:**
- Modify documentation only if the production behavior differs from it.

**Interfaces:**
- Consumes: the deployed URL and Convex table.
- Produces: evidence that the waitlist is accepting and retaining signups.

- [ ] Open the deployed page on a phone and desktop browser.
- [ ] Submit one new waitlist signup and confirm the row in Convex.
- [ ] Complete the optional workflow form and confirm the same row is updated.
- [ ] Repeat the signup and confirm duplicate handling works without creating another row.
- [ ] Confirm the Convex deploy key is absent from browser source and network responses.
