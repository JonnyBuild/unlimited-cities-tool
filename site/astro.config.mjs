// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// Default to root for local dev. The CI workflow overrides PUBLIC_SITE /
// PUBLIC_BASE to deploy to GitHub Pages under /unlimited-cities-tool.
const SITE = process.env.PUBLIC_SITE ?? 'http://localhost:4321';
const BASE = process.env.PUBLIC_BASE ?? '/';

export default defineConfig({
  site: SITE,
  base: BASE,

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});