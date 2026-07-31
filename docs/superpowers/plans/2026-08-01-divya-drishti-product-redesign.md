# Divya Drishti Product Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the complete Sanjay waitlist page so the interface itself explains voice orchestration across approved software.

**Architecture:** Keep the working Next.js, waitlist form, API, and Convex backend. Replace every marketing section with a product-specific visual layer connected by one Drishti line: voice command, software context, coordinated output, taste learning, permission boundary, and beta signup.

**Tech Stack:** Next.js 16, React 19, TypeScript, CSS, Convex.

## Global Constraints

- Sanjay is inspired by the Mahabharata character Sanjay and his Divya Drishti.
- The modern product meaning is one private view across approved software, controlled by voice.
- Do not imply that software can listen while the computer is physically asleep.
- Do not present planned integrations or on-device behavior as already shipped.
- Present the digital work twin as user-controlled, editable, and resettable—not as a copy of someone’s identity.
- Keep the page concise and keep the existing waitlist flow unchanged.

---

### Task 1: Rebuild the product narrative

**Files:**
- Modify: `components/hero.tsx`
- Modify: `components/sections.tsx`
- Modify: `components/navigation.tsx`
- Modify: `components/footer.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `TrackedLink` and `WaitlistForm`.
- Produces: `DivyaDrishtiSection`, `OrchestrationSection`, `TasteLearningSection`, `PrivacySection`, and `WaitlistSection`.

- [ ] Make the hero show one voice command activating Meet, Mail, Calendar, Docs, and GitHub context.
- [ ] Explain the name through a short Divya Drishti section without turning mythology into decoration.
- [ ] Show how one command becomes a brief, draft, reminder, and approved action.
- [ ] Show approved corrections and routines becoming an editable taste profile and adapted output.
- [ ] Show the permission boundary as a visible product state.

### Task 2: Build one connected visual system

**Files:**
- Modify: `app/globals.css`

**Interfaces:**
- Consumes: all class names from Task 1.
- Produces: responsive visual behavior from 390px to 1440px.

- [ ] Use vellum `#F5F0E6`, ink `#161B22`, indigo `#2638C4`, saffron `#E48632`, and mist `#E5E8F8`.
- [ ] Connect sections with a single Drishti line rather than repeated cards and borders.
- [ ] Animate voice activation, context arrival, and action readiness as one sequence.
- [ ] Disable animation for reduced-motion users and stack the system diagram on mobile.

### Task 3: Verify and deploy

**Files:**
- Modify only files that fail verification.

**Interfaces:**
- Consumes: the full redesign.
- Produces: a checked production release.

- [ ] Run lint, typecheck, build, and production dependency audit.
- [ ] Inspect desktop and mobile screenshots for clarity, overflow, and visual continuity.
- [ ] Commit, push `main`, deploy through Vercel, and verify the live headline and waitlist API.
