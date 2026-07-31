# Concise Landing Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the long, abstract Sanjay landing page with a short page that explains the product in one screenful of ideas and leads visitors to the waitlist.

**Architecture:** Keep the existing Next.js shell, waitlist form, API, analytics, and Convex storage. Replace the marketing components and visual CSS with five focused sections: hero, one workday example, three benefits, privacy, and waitlist.

**Tech Stack:** Next.js 16, React 19, TypeScript, CSS, Convex.

## Global Constraints

- Primary action: join the private beta waitlist.
- Describe Sanjay as a private, voice-first personal AI assistant for daily work.
- Do not claim planned integrations or on-device features are already shipped.
- Use plain language and concrete daily-work examples.
- Remove the dark futuristic dashboard style, ornamental grids, numbered cards, signal diagrams, and repeated calls to action.

---

### Task 1: Replace the page narrative

**Files:**
- Modify: `components/hero.tsx`
- Modify: `components/sections.tsx`
- Modify: `components/navigation.tsx`
- Modify: `components/footer.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `WaitlistForm` and `TrackedLink`.
- Produces: `DailyExampleSection`, `BenefitsSection`, `PrivacySection`, and `WaitlistSection` React components.

- [ ] Rewrite the hero with the headline “Your daily work, remembered and ready when you need it.”
- [ ] Add one concrete workday example that moves from a meeting request to a useful brief and follow-up.
- [ ] Reduce the benefit story to remember, prepare, and follow through.
- [ ] State the planned privacy model in three short points without presenting it as finished.
- [ ] Keep only navigation links to example, privacy, and waitlist.

### Task 2: Replace the visual system

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

**Interfaces:**
- Consumes: the class names emitted by Task 1.
- Produces: responsive styles for widths from 390px through 1440px.

- [ ] Use paper `#F4F2EC`, ink `#18202A`, muted `#667085`, cobalt `#2457F5`, and pale blue `#E7EDFF`.
- [ ] Use IBM Plex Sans for display and body roles and IBM Plex Mono only for small status text.
- [ ] Make the workday transcript the single visual signature; remove decorative signal-map styling.
- [ ] Keep visible keyboard focus and stack every multi-column layout below 760px.

### Task 3: Verify and publish

**Files:**
- Modify only files that fail verification.

**Interfaces:**
- Consumes: the redesigned page and existing waitlist API.
- Produces: a checked production deployment.

- [ ] Run `npm run lint`, `npm run typecheck`, `npm run build`, and `npm audit --omit=dev`.
- [ ] Capture desktop and mobile screenshots and check clarity, overflow, form usability, and section count.
- [ ] Commit the redesign, push `main`, deploy to Vercel production, and confirm `/` plus `/api/waitlist` respond correctly.
