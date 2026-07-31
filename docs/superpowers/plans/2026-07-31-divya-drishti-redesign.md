# Divya Drishti Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Rebuild the Sanjay waitlist landing page around the approved “Divya Drishti” concept while preserving the current signup, qualification, analytics, accessibility, and backend behavior.

**Architecture:** Keep the existing Next.js component boundaries and server API. Replace the visual system in `app/globals.css`, rebuild the hero’s diagram as lightweight HTML/CSS, update navigation and waitlist language, and leave form state and validation logic intact.

**Tech Stack:** Next.js 16, React 19, TypeScript, CSS, existing Zod/Supabase waitlist API.

## Global Constraints

- Use Monsoon Ink `#101820`, Deep Neel `#17324a`, River Slate `#61727a`, Moon Milk `#e8e1d3`, Signal Kesar `#f28c28`, and Tamra `#9a5b3a`.
- No purple gradients, glowing AI orbs, glass cards, stock mythology, ornamental gold, or literal Mahabharata imagery.
- Keep the existing waitlist stages, validation, API payloads, analytics events, metadata, and semantic section IDs.
- Support mobile, keyboard focus, and reduced-motion preferences.
- Keep the page lightweight; use CSS geometry rather than image or animation libraries.

---

### Task 1: Divya Drishti hero and navigation

**Files:**

- Modify: `components/navigation.tsx`
- Modify: `components/hero.tsx`
- Modify: `app/layout.tsx`

**Interfaces:**

- Consumes: `TrackedLink` and existing page anchors.
- Produces: `Navigation` and `Hero` with unchanged exports.

- [x] **Step 1:** Replace the existing orb-style signal map with a field-of-sight instrument that labels Meeting, Draft, Project, Reminder, and Message.
- [x] **Step 2:** Update the headline to “See the whole day. Speak the next move.” and keep the privacy/on-device claim explicit.
- [x] **Step 3:** Rename waitlist actions to “Enter the first circle” without changing their `#waitlist` destination or analytics events.
- [x] **Step 4:** Replace the generic display font with a more editorial font pairing loaded through `next/font`.

### Task 2: Full-page visual system

**Files:**

- Modify: `app/globals.css`
- Modify: `components/footer.tsx`

**Interfaces:**

- Consumes: Existing component class names and semantic markup.
- Produces: Responsive desktop/mobile styling with visible focus and reduced motion.

- [x] **Step 1:** Implement the six-color token system and engraved hairline treatment.
- [x] **Step 2:** Style the hero’s saffron sightline as the page’s only strong animation.
- [x] **Step 3:** Restyle all content sections as calm observation fields and ledgers while keeping hierarchy readable.
- [x] **Step 4:** Add mobile layouts at 900px and 640px and disable nonessential motion under `prefers-reduced-motion`.

### Task 3: Waitlist transmission ledger

**Files:**

- Modify: `components/sections.tsx`
- Modify: `components/waitlist-form.tsx`

**Interfaces:**

- Consumes: Existing `WaitlistForm` state machine and `postWaitlist` API helper.
- Produces: The same form behavior in the approved ledger presentation.

- [x] **Step 1:** Reframe the waitlist section as a private transmission ledger with clear access language.
- [x] **Step 2:** Update visible submit copy to “Request early access” while preserving form names, validation, submission handlers, and success stages.
- [x] **Step 3:** Keep errors direct and accessible through existing `role="alert"` and `aria-*` connections.

### Task 4: Verification

**Files:**

- Verify: all modified files.

**Interfaces:**

- Consumes: Production build and local server.
- Produces: Tested desktop and mobile landing page.

- [x] **Step 1:** Run `npm run lint` and expect exit code 0.
- [x] **Step 2:** Run `npx tsc --noEmit --incremental false` and expect exit code 0.
- [x] **Step 3:** Run `npm run build` and expect exit code 0.
- [x] **Step 4:** Open the production page in a browser, inspect desktop and mobile screenshots, and test empty-form validation plus configured/unconfigured server behavior.
