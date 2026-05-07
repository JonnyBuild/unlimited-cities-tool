# Unlimited Cities Tool

Monorepo for the **Unlimited Cities** ecosystem, by the **Open Urbanism Foundation** (Geneva, Switzerland).

> Unlimited Cities is a free, open-source urban-planning tool built around the **In-Situ Collage** method. Recognised by UN-Habitat, deployed in more than 30 territories.

## What's inside

| Folder | What it is |
|---|---|
| [`site/`](./site) | Communication website (Astro · Tailwind · React + motion). Auto-deployed to GitHub Pages. |
| _More to come_ | Other landing pages and tooling will live as sibling folders. |

## Live preview

Every push to `main` that touches `site/**` triggers the GitHub Actions workflow at [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml), which builds the Astro site and publishes it to GitHub Pages.

→ **<https://JonnyBuild.github.io/unlimited-cities-tool/>**

## Local development

```bash
cd site
pnpm install
pnpm dev          # http://localhost:4321
pnpm build        # ./dist
pnpm preview      # serve the built site
```

For full project context (visual charter, hard rules, the 14 cases, content sources), see [`site/README.md`](./site/README.md).

## License

Site code: TBD by the foundation.
The Unlimited Cities tool itself: **CC BY-SA 4.0** (process) + **GNU AGPLv3** (platform).

---

Contact the foundation: [contact@openurbanism.ch](mailto:contact@openurbanism.ch) · Geneva, Switzerland.
