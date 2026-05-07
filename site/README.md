# Unlimited Cities — Communication website

Communication website for **Unlimited Cities**, the open-source urban-planning tool built around the **In-Situ Collage** method, developed and shared internationally by the **Open Urbanism Foundation** (Geneva, Switzerland).

This is a working V1, in English only — French / German / Italian / Spanish to follow.

## Stack

- **[Astro 6](https://astro.build/)** — static site, file-based routing
- **[Tailwind v4](https://tailwindcss.com/)** — design tokens via `@theme`
- **[motion](https://motion.dev/)** (formerly framer-motion) + **React** islands — page transitions, scroll reveals, magnetic links, animated counters
- **TypeScript strict**

Visual identity: pure black & white, Swiss/architect typography, Inter (200–800) + IBM Plex Mono (400–700), 12-column asymmetric grid.

## Sitemap

| Route | Page |
|---|---|
| `/` | Home — 8 chapters |
| `/process` | The 7-phase process |
| `/cases` | 10 city projects |
| `/research` | 4 research-driven evolutions |
| `/foundation` | Open Urbanism Foundation |
| `/cases/[slug]` | 14 dynamic case-detail pages |

## Develop

```bash
pnpm install
pnpm dev          # → http://localhost:4321
pnpm build        # → ./dist
pnpm preview      # serve ./dist locally
```

## Deploy

The site is auto-deployed to GitHub Pages via `.github/workflows/deploy.yml` on every push to `main`.

The workflow sets `PUBLIC_SITE` + `PUBLIC_BASE` env vars so all internal links are prefixed correctly. For local dev, `astro.config.mjs` defaults to `base: '/'`.

## Project structure

```
src/
├── components/
│   ├── animations/         # React islands: PageTransition, Reveal, Stagger, Counter,
│   │                       # MagneticLink, AnimatedHero, DrawRule
│   ├── Header.astro
│   ├── Footer.astro
│   └── CaseCard.astro
├── data/
│   └── cases.ts            # the 14 documented cases
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── process.astro
│   ├── cases.astro
│   ├── research.astro
│   ├── foundation.astro
│   └── cases/[slug].astro
├── styles/
│   └── global.css          # design tokens
└── utils/
    └── link.ts             # base-aware URL helper
```

## Hard rules (do not break)

1. **Single user journey** for everyone — no persona pages.
2. Proper names kept verbatim: **Multigination**, **In-Situ Collage**, **Free Space**, **Unlimited Cities**.
3. **Open Urbanism Foundation** stays in English in every language version.
4. Headline figure: **30+ territories**. The number 14 only appears where the cases are listed concretely.
5. EN is the source-of-truth language.

## License

Site code: TBD by the foundation. The tool itself is **CC BY-SA 4.0** (process) + **GNU AGPLv3** (platform).

---

Built for the Open Urbanism Foundation, Geneva. Contact: [contact@openurbanism.ch](mailto:contact@openurbanism.ch)
