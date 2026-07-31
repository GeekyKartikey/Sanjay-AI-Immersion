# Sanjay Interaction and Responsive Pass Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Make the Divya Drishti landing page meaningfully interactive and adaptive from 360px phones through wide desktop screens.

**Architecture:** Keep static sections server-rendered. Add two small client components: a mobile navigation disclosure and an interactive field-of-sight command selector; use CSS scroll-snap rails for dense card groups on phones instead of stacking every card into a very long page.

**Tech Stack:** Next.js 16, React 19, TypeScript, CSS, existing browser analytics.

## Global Constraints

- Preserve the approved Divya Drishti visual identity and waitlist behavior.
- Interactions must explain the product: selecting a work signal changes the command and local action shown by the sight instrument.
- No animation library or heavy client bundle.
- Mobile navigation must be keyboard accessible and expose `aria-expanded` state.
- Layouts must work at 360, 768, 1024, and 1440 CSS pixels with no document overflow.
- Reduced-motion users receive immediate state changes without looping motion.

---

### Task 1: Interactive field of sight

**Files:**

- Create: `components/interactive-sight.tsx`
- Modify: `components/hero.tsx`
- Modify: `app/globals.css`

**Interfaces:**

- Consumes: `SightSignal` objects with `label`, `command`, and `result` strings.
- Produces: `InteractiveSight` with clickable signal buttons, a live command readout, and an `aria-live` result.

- [x] **Step 1:** Create a client component with one selected signal index and button-event state changes.
- [x] **Step 2:** Render the command and local result inside the instrument so every click demonstrates a real Sanjay workflow.
- [x] **Step 3:** Style hover, focus, selected, and reduced-motion states without adding a dependency.

### Task 2: Adaptive navigation

**Files:**

- Modify: `components/navigation.tsx`
- Modify: `app/globals.css`

**Interfaces:**

- Consumes: existing section anchor IDs.
- Produces: desktop navigation plus an accessible phone/tablet menu using native `details` and `summary` behavior.

- [x] **Step 1:** Add a mobile menu trigger with a visible label and four section links.
- [x] **Step 2:** Style the menu as a full-width transmission index below the header.
- [x] **Step 3:** Keep the waitlist action visible without crushing the wordmark.

### Task 3: Responsive content rails

**Files:**

- Modify: `app/globals.css`

**Interfaces:**

- Consumes: existing card grids.
- Produces: multi-column desktop grids, two-column tablet grids, and swipeable phone rails.

- [x] **Step 1:** Convert long mobile card stacks into horizontal scroll-snap rails with visible next-card edges.
- [x] **Step 2:** Make the flow and privacy diagrams readable at tablet and phone sizes.
- [x] **Step 3:** Use fluid spacing and type sizes to avoid oversized dead space on short laptop screens.

### Task 4: Verification

**Files:**

- Verify: all modified files.

**Interfaces:**

- Consumes: production build and local server.
- Produces: tested interactive responsive page.

- [x] **Step 1:** Run lint, type checking, and production build; all must exit 0.
- [x] **Step 2:** Verify signal selection and mobile navigation in the browser.
- [x] **Step 3:** Audit 360, 768, 1024, and 1440 widths for overflow and browser errors.
- [x] **Step 4:** Re-test empty waitlist validation and leave the normal desktop page open.
