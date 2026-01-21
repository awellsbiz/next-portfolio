1) Core Color Tokens (Dark Mode)
Root / Page
--bg-root: #0A0A0B
Near-black, slightly cool


Used only for the page background



2) Surface Tokens (Cards, Rail, Utilities)
These are the most important tokens.
Card Base (Primary)
--surface-card: #141416
The fuzzy dark gray you noticed


Slight blue bias (prevents brown/green cast)


Used for all bento cards


Raised / Interactive Card
--surface-card-hover: #18181B
Very subtle lift


Used on hover / focus / active states only


Utility / Rail Cards
--surface-utility: #161618
Slightly lighter than card base


Keeps the rail visually distinct without breaking harmony



3) Border & Edge Definition
--border-subtle: rgba(255,255,255,0.06)
--border-faint:  rgba(255,255,255,0.03)
Usage rules
Borders define structure, not shadows


Always 1px


Never change opacity per component



4) Grain / Noise Overlay Token
This is not optional — it’s part of the surface system.
--surface-noise-opacity: 0.03
Applied as:
SVG noise OR repeating PNG


Monochrome


On surfaces only, never text or images



5) Text Tokens
Primary Text
--text-primary: #F4F4F5
Secondary Text
--text-secondary: #A1A1AA
Muted / Label Text
--text-muted: #71717A
Disabled / Low Priority
--text-disabled: #52525B
Rules
Never lower opacity on text


Always switch tokens instead



6) Accent Tokens (Extremely Restrained)
This UI is not accent-driven.
Primary Accent
--accent-primary: #EDEDED
Used for:
Small icons


Inline emphasis


Minimal CTAs


Accent Surface (rare)
--accent-surface: #1F1F22
Hard rule
Accent must never dominate a card


Accent is for interaction, not decoration



7) Shadow / Depth Tokens (Inset Only)
--shadow-inset-1:
  inset 0 1px 0 rgba(255,255,255,0.04),
  inset 0 0 0 1px rgba(255,255,255,0.02);
Rules
No drop shadows


No elevation stacking


Depth is implied, not explicit



8) Canonical Surface Recipe (What Cards Actually Use)
A bento card =
background: var(--surface-card)
+ noise overlay @ 3%
+ inset border highlight
+ subtle border
Nothing more.

9) Absolute Hard Rules (Non-Negotiable)
No pure black (#000)


No gradients


No glassmorphism


No per-component colors


No opacity hacks


All surfaces must map to a token


Grain is subtle or it’s wrong


10) Light Mode (Deferred but Compatible)
Light mode will invert surface hierarchy


Same noise concept


Same border logic


Same accent


Do not redesign tokens for light mode separately.

If you want next, we can:
Map these directly into Tailwind config


Create surface utility classes


Or design the light-mode inversion cleanly
