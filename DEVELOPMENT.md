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
  - `policies/privacy/` — privacy policy page
- `src/app/(auth)/` — login and register pages using `AuthLayout`
- `src/app/demo/` — standalone demo page

### Key integration: Airtable registration

`Register.tsx` is a client component that POSTs form data to `POST /api/register`. The API route (`src/app/api/register/route.ts`) runs server-side, validates input, then writes to Airtable. Credentials (`AIRTABLE_PERSONAL_ACCESS_TOKEN`, `AIRTABLE_BASE`) are server-only env vars in `.env.local` — never prefixed with `NEXT_PUBLIC_`. The target table is `homeHubRegister` with fields: `FirstName`, `LastName`, `Email`, `Role`, `SentDate`.

### Analytics

`GoogleAnalytics.jsx` loads both GA4 (`G-66VYYXLD36`) and Google Ads (`AW-18100994958`) tags with consent defaulting to `analytics_storage: 'denied'`. Page-view tracking on navigation is handled by `GoogleAnalyticsPageTracker.jsx` + `src/libs/gtagHelper.js`.

### Styling

Tailwind CSS v4 with PostCSS. The `tailwind.config.ts` at the root is only used for the `@tailwindcss/typography` plugin config. The `@/` path alias maps to `src/`. Prettier is configured with `prettier-plugin-tailwindcss` for automatic class sorting.

### Component conventions

All shared UI lives in `src/components/`. Primitive layout components (`Container`, `Button`, `Fields`, `PhoneFrame`) are reused across the marketing sections. `AppDemo.tsx` / `AppScreen.tsx` render the animated phone mockup shown in the hero.

### Stacked card section effect

Every page uses a **stacked card** visual pattern: sections have large rounded top corners and each section physically overlaps the one above it, so the rounded corner arc sits inside the previous section's colour zone — giving the impression of layered cards.

This is implemented via `src/components/Section.tsx`:

```tsx
<Section first className="bg-violet-950 py-20 sm:py-32">
  {/* hero content */}
</Section>

<Section className="bg-gray-50 py-16 sm:py-24">
  {/* feature content */}
</Section>
```

**How it works:**
- Every `<Section>` gets `rounded-t-5xl` (= `2.5rem` border-radius, defined in `@theme` as `--radius-5xl`).
- Without `first`: adds `-mt-10` (= `2.5rem` negative margin), pulling the section up by exactly the border-radius amount so the arc overlaps into the previous section's colour zone.
- With `first`: no negative margin — used on the opening (hero) section of each page so it doesn't pull into the header.

**Rules to follow when adding new pages or sections:**
- Always use `<Section first>` on the hero (first section) of a page.
- Always use `<Section>` (no `first`) on every subsequent section.
- Always set an explicit background colour (`bg-violet-950`, `bg-gray-50`, `bg-amber-300`, etc.) on every `<Section>` — without one the section is transparent and the stacking breaks.
- Cards or panels that sit inside a `bg-gray-50` section should have explicit `bg-white` so they stand out.
- The `CtaPanel` and `Footer` in `Layout.tsx` extend this same pattern at the layout level — do not add `-mt-10` to those manually.
