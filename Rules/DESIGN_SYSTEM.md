# DESIGN_SYSTEM.md
# Nikhil Shah — Portfolio Design System

---

## 1. Core Philosophy

**The Concept:** Old government documents meets editorial design. Pages that look like they were printed, filed, and slightly forgotten.

**Three words:** minimal, detailed, seriously playful

**Emotional goal:** The portfolio should feel like reading someone's actual work — not a sales pitch. Quiet confidence. The work does the talking.

**Anti-goals:**
- No loading animations, no particle effects, no scroll-triggered explosions
- No interactive toys that distract from the work (no pong, no clocks)
- No generic SaaS-looking layouts (no hero sections with gradient blobs)
- No heavy JS frameworks — site must load fast on a slow Indian mobile connection

---

## 2. Visual References

- **arjunmakesthings.github.io** — tone, restraint, how the writing carries the work
- **setwrite.in** — editorial feel, text-first layout

---

## 3. Design Tokens

### Typography
- **Body:** Open Sans, 13px, line-height 1.7
- **Headings:** BBH Bogle (Google Fonts), bold display
- **Tags / meta / labels:** Open Sans, 10–11px, semi-bold
- **Writing style:** lowercase by default, no unnecessary caps

### Color Palette
- **Paper / card:** `#ffffff` (pure white)
- **Primary text:** `#1a1a1a` (deep charcoal)
- **Secondary / links:** `#555555`
- **Dark accent:** `#000000` (used for active indicator & emphasis)
- **Text shadow:** none (clean, crisp modern rendering)

### Spacing
- Card max-width: 550px (index), 800px (case studies)
- Card padding: 0 45px desktop, 0 18–20px mobile
- Section gap: 50px desktop, 16px mobile
- Cards have left/right margin on mobile (14px) so background peeks through

### Shadows
- Cards: `box-shadow: 4px 6px 18px rgba(0,0,0,0.10), 1px 2px 4px rgba(0,0,0,0.06)`

---

## 4. Interaction Rules

- **Hover:** underline on links only — no color shifts, no transforms
- **Animations:** none. zero.
- **Transitions:** none unless absolutely necessary
- **Buttons:** text links styled with `font-size: 9px, font-weight: 600` — no button shapes

---

## 5. Page Structure Pattern

Every page follows the same stack:
1. Nav (shared via `Fn.js`)
2. Section cards (`.paper` or `.project-card` or `.project-card-casestudy`)
3. Footer

Case study pages use `.project-card-casestudy` (max-width 800px, wider for images).

---

## 6. Image Rules

- Hero images: `aspect-ratio: 16/9`, `object-fit: cover`
- Ghar-style full width: `aspect-ratio: 3/2`, `object-fit: cover`
- 2-col grid: `.lattuchulha` — `50% 50%`
- 3-col grid: `.grid3` — `33% 33% 33%`
- All images: `width: 100%` inside their container
