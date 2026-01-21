1) Global Container
Max width: 92rem


Side padding: 2rem


Outer content width (usable): 88rem



2) Primary Layout Split
Primary bento area: ~66.5rem


Utility rail: ~19.5rem


Inter-section gap: 1.75rem


Rule: Primary area and rail are independent layout systems. Never force them into one grid.

3) Primary Bento Grid (Corrected)
Structure
Grid type: 4 columns


Column widths: fluid (equal fraction)


Column gap: 1.75rem


Row gap: 1.75rem


Row height: 32.125rem (locked)


Hard rule: All primary rows share the same height. Do not auto-size rows.

Card Spans (Exact)
Row 1
Hero: spans 2 columns


Image 1: spans 1 column


Image 2: spans 1 column


Row 2
Portrait: spans 1.25 columns


About: spans 1.75 columns


Feature image: spans 1 column


Implement via explicit grid placement (not integer spans).
Row 3
Newsletter: spans 2.1 columns


Stack: spans 1.1 columns


Toggle: spans 0.8 columns


Rule: Fractional spans are intentional. Do not “round” them.

4) Utility Rail (Right Side)
Layout
System: vertical flex stack


Vertical gap (default): 1.75rem


Icon cluster internal gap: 1.2rem (intentionally tighter)


Card Heights
Resources: 38.8rem


Bottom CTA: 42.6rem (taller than primary row by design)


Rule: Rail cards do not align to primary row heights. Visual rhythm > grid alignment.

5) Card System (Universal)
Padding: 1.5rem


Radius: 1.25rem


No card may exceed its assigned row height


No internal scrolling



6) Measurement Rules (Non-Negotiable)
Use rem only (except 1px borders if needed)


No vh for layout


No auto rows


No Masonry


No Flexbox for page layout (components only)



7) Structural Hard Rules (Senior-Level)
Grid consistency beats symmetry


Fractional spans are allowed; visual balance is the goal


Rail ≠ Grid — never merge systems


Rows are sacred — content adapts, grid does not


Spacing hierarchy:


Major separation: 1.75rem


Minor separation: 1.2rem


If a card doesn’t fit, the content is wrong — not the grid



If you want, next we lock color + surface tokens against this system.

Mobile Grid System — Final (Authoritative)

1) Viewport & Container
Max width: 100%


Horizontal padding: 1rem


Usable content width: calc(100% - 2rem)


Rule: Mobile is a single-column document, not a grid.

2) Layout Model
System: vertical stack


Column count: 1


Flow: top → bottom


No side-by-side content



3) Vertical Rhythm (Critical)
Global vertical gap between cards: 1rem


Section breaks (hero → about, about → work): 1.5rem


Rule: Vertical rhythm replaces horizontal grid discipline on mobile.

4) Card System (Mobile)
Card width: 100%


Card padding: 1.25rem


Card radius: 1.25rem


Min height: none (content-driven)


Max height: none (except images)



5) Image Rules
Aspect ratio: preserved


Max height: 18rem


Object fit: cover


Never crop faces or primary content


Rule: Images scale down, never dominate the viewport.

6) Typography Constraints (Layout-Relevant)
Hero title max lines: 2


Supporting text max lines: 3


About text: no more than 4 visible lines


Rule: Long-form content does not belong on the homepage in mobile.

7) Component Order (Locked)
Hero


About


Primary work image


Secondary work images (one per card)


Resources


Stack


Theme toggle


Contact / CTA


Social links (last)


Rule: Do not reorder for aesthetics — order is narrative.

8) Utility Behavior
Theme toggle: inline card, full width


Social icons: horizontal row inside a single card


No floating buttons


No overlays



9) Measurement Rules (Non-Negotiable)
Units: rem only


No vh


No sticky


No scroll containers


No grids on mobile



10) Hard Mobile Rules (Senior-Level)
Mobile is a reading experience, not a dashboard


One idea per card


Spacing > decoration


If it feels dense, remove content — never reduce spacing


Desktop complexity must collapse cleanly, not shrink
