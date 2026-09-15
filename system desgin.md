# LAMSA — Dark Mode Color System

A luxury dark theme for the LAMSA Home Furniture admin dashboard.
Direction: **warm charcoal ground + copper / rose-gold accent** taken from the logo gradient.
Dark mode is class-based (`darkMode: 'class'` — already configured), so every token below is the `dark:` counterpart of the existing light palette.

Rule of the system: **surfaces are neutral and near-black, copper is an accent only.** Copper appears on active states, key numbers, primary actions and hairline dividers — never as a large background fill.

---

## 1. Surfaces (neutral warm charcoal)

Elevation is expressed by getting *lighter*, never by shadow alone. Shadows on dark are almost invisible, so each level steps ~2–4% in lightness.

| Token | Hex | Role |
|---|---|---|
| `bg/base` | `#0B0C0F` | App background (behind everything, sidebar gutter) |
| `bg/sunken` | `#08090B` | Wells: table body behind rows, scroll areas, code/empty states |
| `surface/1` | `#12141A` | Default card, panel, sidebar, navbar |
| `surface/2` | `#181B22` | Raised: table header, popover, dropdown, collapse body |
| `surface/3` | `#1F232B` | Highest: modal, drawer, tooltip, input field |
| `surface/hover` | `#22262F` | Row / list-item / icon-button hover |
| `surface/active` | `#282D37` | Pressed and selected rows |

> Never pure `#000000` — it makes copper look muddy and kills the elevation ladder.

## 2. Borders & dividers

| Token | Hex | Role |
|---|---|---|
| `border/subtle` | `rgba(255,255,255,0.06)` | Card outlines, table row separators |
| `border/default` | `#262B34` | Inputs, buttons, chips at rest |
| `border/strong` | `#343A45` | Input hover, dividers that must read at a glance |
| `border/accent` | `rgba(201,129,86,0.45)` | Focus ring, active nav item, selected card |

## 3. Text (on `surface/1`)

| Token | Hex | Contrast | Role |
|---|---|---|---|
| `text/primary` | `#F5F1EA` | 16.5:1 | Headings, KPI values, table primary cell |
| `text/secondary` | `#B9B2A8` | 8.8:1 | Body copy, descriptions, secondary cells |
| `text/muted` | `#8A8378` | 5.1:1 | Labels, captions, table headers, meta |
| `text/disabled` | `#5C574F` | 2.6:1 | Disabled controls only — never real content |
| `text/inverse` | `#14100C` | — | Text sitting on a copper fill |

`text/primary` is a warm off-white, not `#FFFFFF` — pure white on dark halates and reads cheap.

## 4. Copper accent (brand)

Sampled from the logo's rose-gold gradient (light `#E8B58F` → deep `#8C5533`).

| Token | Hex | Contrast on `#12141A` | Role |
|---|---|---|---|
| `copper/200` | `#F0CDAF` | 12.6:1 | Accent text at small sizes, active nav label |
| `copper/300` | `#E8B58F` | 10.1:1 | Icons, links, hover of accent text |
| `copper/400` | `#D99B70` | 8.0:1 | Link hover, chart primary series |
| `copper/500` | `#C98156` | 6.0:1 | **Primary accent** — buttons, active tab, focus |
| `copper/600` | `#A8653F` | 3.8:1 | Primary button hover / pressed |
| `copper/700` | `#7E4A2D` | — | Accent fills behind text, progress track fill |
| `copper/900` | `#2A1B12` | — | Tinted accent background (selected row, badge) |

Premium gradient — use sparingly (logo lockup, one hero KPI, sign-in panel):

```css
--gradient-copper: linear-gradient(135deg, #F0CDAF 0%, #C98156 48%, #8C5533 100%);
```

Ambient glow for a focused card (replaces drop shadow on dark):

```css
--glow-copper: 0 0 0 1px rgba(201,129,86,0.25), 0 18px 48px -24px rgba(201,129,86,0.35);
```

## 5. Semantic colors

Dark mode needs *desaturated, lightened* status hues. Each has a foreground, a tinted background and a border.

| Status | Foreground | Background | Border |
|---|---|---|---|
| Success / Delivered | `#4ADE9B` | `rgba(74,222,155,0.10)` | `rgba(74,222,155,0.24)` |
| Warning / Pending | `#F5B544` | `rgba(245,181,68,0.10)` | `rgba(245,181,68,0.24)` |
| Danger / Cancelled | `#F87171` | `rgba(248,113,113,0.10)` | `rgba(248,113,113,0.24)` |
| Info / Processing | `#5FA8F5` | `rgba(95,168,245,0.10)` | `rgba(95,168,245,0.24)` |
| Neutral / Draft | `#9CA3AF` | `rgba(156,163,175,0.10)` | `rgba(156,163,175,0.22)` |

Order-status mapping used across Dashboard / Orders:

| Status | Foreground |
|---|---|
| PENDING | `#F5B544` |
| PROCESSING | `#5FA8F5` |
| CONFIRMED | `#3FD3B0` |
| SHIPPED | `#A78BFA` |
| DELIVERED | `#4ADE9B` |
| CANCELLED | `#F87171` |

## 6. Data visualisation

Copper-led, then cool neutrals so the brand stays dominant.

`#C98156` · `#E8B58F` · `#A78BFA` · `#5FA8F5` · `#4ADE9B` · `#F5B544` · `#8A8378`

Grid lines `rgba(255,255,255,0.06)` · axis labels `#8A8378`.

## 7. Component mapping

| Component | Background | Border | Text | Accent |
|---|---|---|---|---|
| App shell | `bg/base` | — | `text/secondary` | — |
| Sidebar | `surface/1` | `border/subtle` | `text/muted` | active item: `copper/200` text on `copper/900` fill + 2px `copper/500` rail |
| Navbar | `surface/1` @ 80% + blur | `border/subtle` | `text/secondary` | — |
| Card / StatCard | `surface/1` | `border/subtle` | value `text/primary`, desc `text/muted` | 3px left rail in the card's semantic hue |
| Table header | `surface/2` | `border/default` bottom | `text/muted`, uppercase | — |
| Table row | transparent on `bg/sunken` | `border/subtle` bottom | `text/secondary` | hover `surface/hover` |
| Input | `surface/3` | `border/default` → hover `border/strong` → focus `copper/500` + `border/accent` ring | `text/primary`, placeholder `text/disabled` | — |
| Primary button | `copper/500` → hover `copper/600` | none | `text/inverse` | — |
| Secondary button | transparent | `border/default` | `text/secondary` | hover `surface/hover` |
| Ghost / icon button | transparent | none | `text/muted` | hover `surface/hover` + `text/primary` |
| Modal / Drawer | `surface/3` | `border/default` | — | overlay `rgba(6,7,9,0.72)` + 8px blur |
| Badge / chip | semantic background | semantic border | semantic foreground | — |
| Skeleton | `surface/2` | — | shimmer `rgba(255,255,255,0.05)` | — |
| Scrollbar | thumb `#2A2F3A` → hover `#3A404C` | — | — | — |

## 8. Tailwind config

Drop into `theme.extend.colors` — keeps the existing `brand` / `surface` keys working and adds the dark scale.

```js
colors: {
  brand: {
    50:'#FDFBF7', 100:'#F7F4EF', 200:'#E5DEC9',
    300:'#D88D68', 500:'#B67352', 700:'#7A6E67',
    800:'#2A2E38', 900:'#1F2229', 950:'#16181D',
  },
  copper: {
    200:'#F0CDAF', 300:'#E8B58F', 400:'#D99B70',
    500:'#C98156', 600:'#A8653F', 700:'#7E4A2D', 900:'#2A1B12',
  },
  ink: {
    950:'#08090B', 900:'#0B0C0F', 800:'#12141A', 700:'#181B22',
    600:'#1F232B', 500:'#22262F', 400:'#282D37', 300:'#343A45',
  },
  content: {
    primary:'#F5F1EA', secondary:'#B9B2A8',
    muted:'#8A8378', disabled:'#5C574F', inverse:'#14100C',
  },
  state: {
    success:'#4ADE9B', warning:'#F5B544',
    danger:'#F87171', info:'#5FA8F5',
    confirmed:'#3FD3B0', shipped:'#A78BFA',
  },
}
```

## 9. CSS variables

Single source of truth — put in `index.css` so non-Tailwind CSS (charts, scrollbars, third-party) uses the same values.

```css
:root {
  --bg-base:#FAFAF8; --bg-sunken:#F7F4EF;
  --surface-1:#FFFFFF; --surface-2:#FDFBF7; --surface-3:#FFFFFF;
  --surface-hover:#F7F4EF; --surface-active:#F0EBE1;
  --border-subtle:rgba(16,18,22,0.08); --border-default:#E5DEC9;
  --border-strong:#D6CDB6; --border-accent:rgba(182,115,82,0.45);
  --text-primary:#16181D; --text-secondary:#4B5158;
  --text-muted:#7A6E67; --text-disabled:#AFA69B; --text-inverse:#FFFFFF;
  --accent:#B67352; --accent-hover:#9A5E41; --accent-subtle:#FFF1E6;
}

.dark {
  --bg-base:#0B0C0F; --bg-sunken:#08090B;
  --surface-1:#12141A; --surface-2:#181B22; --surface-3:#1F232B;
  --surface-hover:#22262F; --surface-active:#282D37;
  --border-subtle:rgba(255,255,255,0.06); --border-default:#262B34;
  --border-strong:#343A45; --border-accent:rgba(201,129,86,0.45);
  --text-primary:#F5F1EA; --text-secondary:#B9B2A8;
  --text-muted:#8A8378; --text-disabled:#5C574F; --text-inverse:#14100C;
  --accent:#C98156; --accent-hover:#A8653F; --accent-subtle:#2A1B12;
}
```

## 10. Rules

1. **Two surface colors per screen, maximum three.** More elevation levels than that and the hierarchy collapses.
2. **Copper is ≤10% of any screen.** One primary action, active nav, key numbers. A copper-flooded dashboard stops feeling expensive.
3. **Body text ≥ 4.5:1, headings ≥ 3:1.** Never use `text/disabled` for content the user must read.
4. **Don't reuse light-mode hues.** Light-mode `brand/300 #D88D68` and every saturated status color must swap to the dark-tuned values in §5.
5. **No pure black, no pure white, no shadow-only elevation.**
6. **Images get a guard:** photos and product shots on dark take `filter: brightness(0.92)` plus a `border/subtle` outline so they don't float.
7. **Migrate the hardcoded hexes.** `dark:bg-[#16181D]`, `dark:text-[#9CA3AF]`, `dark:border-[#2A2E38]` scattered in `UserTable`, `EditUserModal`, `UserRow` etc. map to `surface/1`, `text/muted`, `border/default`.
