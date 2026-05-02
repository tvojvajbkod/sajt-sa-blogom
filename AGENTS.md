# O projektu

Ovo je fajl o projektu gde ćemo kreirati sajt sa blogom


## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test framework is configured yet.

## Architecture

This is a **Next.js 16** blog site using the **App Router** (`src/app/`).

- `src/app/layout.tsx` — root layout with Geist fonts and global CSS
- `src/app/page.tsx` — home page
- `src/app/globals.css` — global styles (Tailwind base)
- `public/` — static assets

**Path alias:** `@/*` maps to `src/*`.

**Styling:** Tailwind CSS v4 via PostCSS (`postcss.config.mjs`). No `tailwind.config.ts` — v4 uses CSS-based configuration.

**TypeScript:** strict mode enabled, `moduleResolution: bundler`.
