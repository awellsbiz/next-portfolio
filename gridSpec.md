# Grid System Specification — Authoritative

> This document is the **final authority** on layout structure.
> No implementation may deviate from this spec without Architect approval.

---

## 1. Global Container

| Property | Value |
|----------|-------|
| Max width | 92rem |
| Side padding | 2rem |
| Usable content width | 88rem |

---

## 2. Primary Layout Split

| Zone | Width |
|------|-------|
| Primary bento area | 66.5rem |
| Utility rail | 19.5rem |
| Inter-section gap | 1.75rem |

**Rule:** Primary area and rail are independent layout systems. Never merge them into one grid.

---

## 3. Primary Bento Grid

### Structure

| Property | Value |
|----------|-------|
| Grid type | 4 columns |
| Column widths | Fluid (equal fraction) |
| Column gap | 1.75rem |
| Row gap | 1.75rem |
| Row height | 32.125rem (locked) |

**Hard rule:** All primary rows share the same height. Content adapts to grid — grid does not adapt to content.

### Card Spans

#### Row 1
| Card | Span |
|------|------|
| Hero | 2 columns |
| Image 1 | 1 column |
| Image 2 | 1 column |

#### Row 2
| Card | Span |
|------|------|
| Portrait | 1.25 columns |
| About | 1.75 columns |
| Feature image | 1 column |

**Rule:** Implement via explicit grid placement. Fractional spans are intentional.

#### Row 3
| Card | Span |
|------|------|
| Newsletter | 2.1 columns |
| Stack | 1.1 columns |
| Toggle | 0.8 columns |

**Rule:** Fractional spans are intentional. Do not round them.

---

## 4. Utility Rail

### Layout

| Property | Value |
|----------|-------|
| System | Vertical flex stack |
| Vertical gap | 1.75rem |
| Icon cluster internal gap | 1.2rem |

### Card Heights

| Card | Height |
|------|--------|
| Social icons | Content-driven |
| Resources | 38.8rem |
| Bottom CTA | 42.6rem |

**Rule:** Rail cards do not align to primary row heights. Visual rhythm takes precedence over grid alignment.

---

## 5. Card System (Universal)

| Property | Value |
|----------|-------|
| Padding | 1.5rem |
| Border radius | 1.25rem |

**Rules:**
- No card may exceed its assigned row height
- No internal scrolling

---

## 6. Measurement Rules (Non-Negotiable)

- Use `rem` only (except 1px borders if needed)
- No `vh` for layout
- No auto rows
- No Masonry
- No Flexbox for page-level layout (Grid only for primary area)
- No Grid for utility rail (Flexbox only)

---

## 7. Structural Hard Rules

1. Grid consistency beats symmetry
2. Fractional spans are allowed — visual balance is the goal
3. Rail ≠ Grid — never merge systems
4. Rows are sacred — content adapts, grid does not
5. Spacing hierarchy:
   - Major separation: 1.75rem
   - Minor separation: 1.2rem
6. If a card doesn't fit, the content is wrong — not the grid

---

## 8. Mobile Grid System

### Viewport & Container

| Property | Value |
|----------|-------|
| Max width | 100% |
| Horizontal padding | 1rem |
| Usable content width | calc(100% - 2rem) |

**Rule:** Mobile is a single-column document, not a grid.

### Layout Model

| Property | Value |
|----------|-------|
| System | Vertical stack |
| Column count | 1 |
| Flow | Top → bottom |

**Rule:** No side-by-side content on mobile.

### Vertical Rhythm

| Context | Gap |
|---------|-----|
| Between cards | 1rem |
| Section breaks | 1.5rem |

### Card System (Mobile)

| Property | Value |
|----------|-------|
| Width | 100% |
| Padding | 1.25rem |
| Border radius | 1.25rem |
| Min height | None (content-driven) |
| Max height | None (except images) |

### Image Rules

| Property | Value |
|----------|-------|
| Aspect ratio | Preserved |
| Max height | 18rem |
| Object fit | Cover |

**Rule:** Never crop faces or primary content.

### Component Order (Locked)

1. Hero
2. About
3. Primary work image
4. Secondary work images (one per card)
5. Resources
6. Stack
7. Theme toggle
8. Contact / CTA
9. Social links (last)

**Rule:** Do not reorder for aesthetics — order is narrative.

### Mobile Hard Rules

- No `vh`
- No `sticky`
- No scroll containers
- No grids
- One idea per card
- Spacing > decoration
- If dense, remove content — never reduce spacing

---
## Styling System (Authoritative)

- **Styling framework:** Tailwind CSS
- All styling must be expressed via Tailwind utilities or Tailwind tokens
- Raw CSS is allowed **only** for:
  - noise / grain overlays
  - keyframes
  - browser-level resets
- No inline styles
- No ad-hoc CSS classes outside Tailwind
- No per-component CSS files unless approved by Architect

## Authority Statement

> The system exists to reduce decision-making.
> If a decision must be made repeatedly, the system is incomplete.

This spec is final. Implementation agents execute against this contract.
