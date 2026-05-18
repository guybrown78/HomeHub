# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build
npm run lint     # ESLint via next lint
```

No test suite is configured.

## Architecture

This is a **Next.js 14 (App Router) marketing/landing page** for HomeHub, a property management and tenant engagement SaaS. It was bootstrapped from the Tailwind Plus "Pocket" template.

### Route structure

- `src/app/layout.tsx` — root layout; loads Google Fonts (Rubik), mounts `<GoogleAnalytics>` globally
- `src/app/(main)/` — main marketing site wrapped in `Layout` (Header + Footer)
  - `page.tsx` — homepage: `Hero → PrimaryFeatures → Register`
  - `about/` — about page
  - `contact/` — contact page
  - `landlords/` — landlords feature page
  - `residents/` — residents feature page
  - `platform/` — platform overview page
  - `partners/` — partners page
  - `resources/` — resources page
  - `policies/privacy/` — privacy policy page
  - `design-system/` — design system reference page (internal; linked subtly in footer)
- `src/app/(auth)/` — login and register pages using `AuthLayout`
- `src/app/demo/` — standalone demo page

### Key integration: Airtable registration

`Register.tsx` is a client component that POSTs form data to `POST /api/register`. The API route (`src/app/api/register/route.ts`) runs server-side, validates input, then writes to Airtable. Credentials (`AIRTABLE_PERSONAL_ACCESS_TOKEN`, `AIRTABLE_BASE`) are server-only env vars in `.env.local` — never prefixed with `NEXT_PUBLIC_`. The target table is `homeHubRegister` with fields: `FirstName`, `LastName`, `Email`, `Role`, `SentDate`.

### Analytics

`GoogleAnalytics.jsx` loads both GA4 (`G-66VYYXLD36`) and Google Ads (`AW-18100994958`) tags with consent defaulting to `analytics_storage: 'denied'`. Page-view tracking on navigation is handled by `GoogleAnalyticsPageTracker.jsx` + `src/libs/gtagHelper.js`.

---

## Design System

The design system is documented live at `/design-system`. It covers colours, typography, icons, buttons, cards, forms, callouts, and illustration style. Use it as the reference before building any new page or component.

### Styling

Tailwind CSS v4 with PostCSS. Config lives entirely in `src/styles/tailwind.css` via the `@theme` directive — **there is no `tailwind.config.js`** for token definitions. The `tailwind.config.ts` at the root is only used for the `@tailwindcss/typography` plugin. The `@/` path alias maps to `src/`. Prettier is configured with `prettier-plugin-tailwindcss` for automatic class sorting.

### Colour tokens

All colours are defined in `src/styles/tailwind.css` under `@theme`. **Never use `violet-*` Tailwind classes** — the project uses `brand-*` and `accent-*` instead.

#### Brand palette (purple, `#361B64` at 950)

```
bg-brand-50  bg-brand-100  bg-brand-200  bg-brand-300  bg-brand-400
bg-brand-500  bg-brand-600  bg-brand-700  bg-brand-800  bg-brand-900  bg-brand-950
```

`brand-950` = `#361B64` (exact Figma value). Use `text-brand-*` and `border-brand-*` equivalents for text and borders.

#### Accent palette (amber-yellow, `#FFCC5B` at 400)

```
bg-accent-50  bg-accent-100  bg-accent-200  bg-accent-300  bg-accent-400
bg-accent-500  bg-accent-600  bg-accent-700  bg-accent-800  bg-accent-900  bg-accent-950
```

`accent-400` = `#FFCC5B` (exact Figma value). Use `fill-accent-400`, `text-accent-*` etc. as needed.

#### Semantic tokens (prefer these for all UI work)

| Token | Utility class | Default value | Purpose |
|---|---|---|---|
| `--color-page` | `bg-page` | `#F1F1F1` | Root `<html>` background (Figma surface gray) |
| `--color-bg` | `bg-bg` | white | Default section background |
| `--color-bg-muted` | `bg-bg-muted` | `#F1F1F1` | Alternating / muted section background |
| `--color-card` | `bg-card` | white | Card background |
| `--color-card-muted` | `bg-card-muted` | off-white | Muted / secondary card background |
| `--color-fg` | `text-fg` | near-black | Primary body text |
| `--color-fg-muted` | `text-fg-muted` | gray-600 | Secondary / supporting text |
| `--color-fg-subtle` | `text-fg-subtle` | gray-400 | Tertiary text, placeholders |
| `--color-border` | `border-border` | gray-200 | Default border |
| `--color-border-strong` | `border-border-strong` | gray-300 | Emphasized border |
| `--color-primary` | `bg-primary` | `#361B64` | Primary CTA button background |
| `--color-primary-fg` | `text-primary-fg` | white | Text on primary surface |
| `--color-secondary` | `bg-secondary` | `#FFCC5B` | Accent / secondary CTA background |
| `--color-secondary-fg` | `text-secondary-fg` | `#361B64` | Text on accent surface |

### Section theming (`data-theme`)

Apply `data-theme` to any wrapper element to override semantic tokens for that section and all its children. This means `text-fg`, `bg-card`, `border-border` etc. automatically adapt — no need to write surface-specific overrides for individual children.

```tsx
<section data-theme="brand">
  <p className="text-fg-muted">This will render in white/65% on the dark purple surface.</p>
</section>
```

| Theme | Background | Use for |
|---|---|---|
| `data-theme="brand"` | `#361B64` (brand-950) | Dark purple sections (e.g. footer, hero CTAs) |
| `data-theme="accent"` | `#FFCC5B` (accent-400) | Yellow highlight sections |
| `data-theme="brand-light"` | brand-50 | Light purple tinted sections |

### Typography

Font: **Rubik** (loaded via Google Fonts in `src/app/layout.tsx`). Available weights 300–700. Set as `--font-sans` in the theme.

Type scale: `text-xs` through `text-9xl` with custom line-heights defined in `@theme`.

### Icons

Use **Lucide icons** from `react-icons/lu` (already installed, no new dependency needed). Import pattern:

```tsx
import { LuBell, LuHouse, LuSettings } from 'react-icons/lu'

<LuBell className="size-5" />
```

Standard sizes: `size-4` (16px), `size-5` (20px), `size-6` (24px), `size-8` (32px). Always stroke-style — never fill icons for UI actions. Do not mix icon libraries.

### Illustration style

Flat-colour cartoon with bold outline strokes, objects placed on soft pastel blob/pill backgrounds. Blob colours: `brand-100` (purple tint) or `accent-100` (yellow tint). Source from unDraw or Storyset — must match the bold-outline, flat-colour style. See the `/design-system` page for live examples.

---

## Component conventions

All shared UI lives in `src/components/`. Primitive layout components (`Container`, `Button`, `Fields`, `PhoneFrame`) are reused across the marketing sections.

### Button

`src/components/Button.tsx` — renders a `<button>` or `<Link>` depending on whether `href` is set.

```tsx
<Button>Primary (default)</Button>
<Button color="violet">Also primary</Button>         {/* violet alias not used — use default */}
<Button variant="outline">Outline</Button>
<Button href="/page">Link button</Button>
```

Variants: `solid` (default) and `outline`. Default colour: `violet` (maps to `brand-950`). All buttons include `cursor-pointer` and `items-center gap-2` for icon alignment.

### Section component

`src/components/Section.tsx` — use this for every content section on every page.

```tsx
<Section first className="bg-brand-950 py-20 sm:py-32">
  {/* hero content */}
</Section>

<Section className="bg-bg-muted py-16 sm:py-24">
  {/* feature content */}
</Section>
```

---

## Stacked card section effect

Every page uses a **stacked card** visual pattern: sections have large rounded top corners and each section physically overlaps the one above it, so the rounded corner arc sits inside the previous section's colour zone — giving the impression of layered cards.

**How it works:**
- Every `<Section>` gets `rounded-t-5xl` (= `2.5rem` border-radius, defined in `@theme` as `--radius-5xl`).
- Without `first`: adds `-mt-10` (= `2.5rem` negative margin), pulling the section up by exactly the border-radius amount so the arc overlaps into the previous section's colour zone.
- With `first`: no negative margin — used on the opening (hero) section of each page so it doesn't pull into the header.

**Rules to follow when adding new pages or sections:**
- Always use `<Section first>` on the hero (first section) of a page.
- Always use `<Section>` (no `first`) on every subsequent section.
- Always set an explicit background colour on every `<Section>` — without one the section is transparent and the stacking breaks. Prefer semantic tokens (`bg-bg`, `bg-bg-muted`, `bg-brand-950`) over raw palette values.
- Cards or panels that sit inside a `bg-bg-muted` section should have explicit `bg-card` so they stand out.
- The `CtaPanel` and `Footer` in `Layout.tsx` extend this same pattern at the layout level — do not add `-mt-10` to those manually.
