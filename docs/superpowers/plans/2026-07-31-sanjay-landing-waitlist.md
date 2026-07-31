# Sanjay Landing Page and Waitlist Implementation Plan

> **For agentic workers:** Implement and verify each task in order. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a polished public landing page that explains Sanjay clearly and collects qualified early users through a real, accessible waitlist flow.

**Architecture:** Keep the marketing page mostly server-rendered and isolate interactivity in small client components. Submit waitlist data to a Next.js route with shared Zod validation and a server-only Supabase adapter; when credentials are absent in development, return an explicit configuration response without pretending data was stored.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, Zod, Supabase REST API.

## Global Constraints

- Brand: Sanjay; laptop-first, private, voice-first, on-device assistant for multi-role technical professionals.
- Primary action: Join the Waitlist; qualification is optional and follows successful signup.
- Product state: early access and in development; planned features must not read as shipped.
- Data writes happen on the server; secrets never enter the browser bundle.
- No pricing, fake proof, generic AI claims, or unnecessary component library.

---

### Task 1: Foundation, validation, and storage

**Files:** `package.json`, `lib/validation.ts`, `lib/waitlist.ts`, `app/api/waitlist/route.ts`, `.env.example`

- [ ] Add Zod and define typed signup and qualification schemas.
- [ ] Implement a server-only Supabase adapter with duplicate-email handling.
- [ ] Return clear API states for saved, duplicate, invalid, unconfigured, and failed submissions.
- [ ] Document environment variables without exposing the service-role key.

### Task 2: Waitlist experience and analytics hooks

**Files:** `components/waitlist-form.tsx`, `lib/analytics.ts`

- [ ] Build the required two-field signup form with accessible labels, validation, loading, error, duplicate, and success states.
- [ ] Reveal an optional qualification step only after primary signup succeeds.
- [ ] Add provider-neutral analytics events for all requested conversion actions.

### Task 3: Landing page content and visual system

**Files:** `app/page.tsx`, `components/landing-page.tsx`, `components/navigation.tsx`, `components/hero.tsx`, `components/sections.tsx`, `components/footer.tsx`, `app/globals.css`

- [ ] Replace the Convex demo with the complete twelve-section narrative.
- [ ] Create a restrained near-black visual system with editorial typography, indigo signal lines, privacy-green status details, and the local signal map hero.
- [ ] Use honest labels for planned and exploring capabilities.
- [ ] Make navigation, CTAs, diagrams, conversation cards, and forms responsive and keyboard accessible.

### Task 4: Metadata, documentation, and verification

**Files:** `app/layout.tsx`, `app/icon.svg`, `README.md`, `next.config.ts`

- [ ] Add title, description, Open Graph, Twitter, robots, favicon, and SoftwareApplication structured data.
- [ ] Document local development, Supabase table SQL, environment setup, development fallback, and Vercel deployment.
- [ ] Run ESLint, TypeScript checking, and a production build; fix every error.
- [ ] Test the page in a browser at desktop and mobile widths and verify the waitlist states.
