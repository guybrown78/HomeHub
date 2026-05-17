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
