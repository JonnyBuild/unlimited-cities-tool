/* The 14 documented cases — source: CLAUDE.md §3 + UC-4-In-Real-Life.txt
   IMPORTANT: "Multigination" is intentional, never correct. */

export type Chapter = 'city' | 'research';

export type CaseStudy = {
  slug: string;
  chapter: Chapter;
  city: string;
  country: string;
  flag: string;
  year?: string;
  theme: string;
  oneLiner: string;
  participants?: string;
  commissioner?: string;
};

export const cases: CaseStudy[] = [
  /* ───── Chapter A — City projects (10) ───── */
  {
    slug: 'lian-meng',
    chapter: 'city',
    city: 'Lian Meng',
    country: 'China',
    flag: '🇨🇳',
    theme: 'Village revitalisation',
    oneLiner:
      'Reweaving identity in a Chinese village facing rural exodus and accelerated modernisation.',
    commissioner: 'Local township',
  },
  {
    slug: 'wenshan-taipei',
    chapter: 'city',
    city: 'Wenshan, Taipei',
    country: 'Taiwan',
    flag: '🇹🇼',
    theme: 'Inclusive urban transition',
    oneLiner:
      'Engaging diverse communities of a Taipei district in a shared transition vision.',
  },
  {
    slug: 'anieres',
    chapter: 'city',
    city: 'Anières',
    country: 'Switzerland',
    flag: '🇨🇭',
    theme: 'Village identity & densification',
    oneLiner:
      'A lakeside Genevan village rethinks density without losing its skin.',
  },
  {
    slug: 'vernier-libellules',
    chapter: 'city',
    city: 'Vernier — Libellules',
    country: 'Switzerland',
    flag: '🇨🇭',
    theme: 'Greening & participatory programming',
    oneLiner:
      'Re-greening a postwar housing estate through residents’ own programming.',
  },
  {
    slug: 'montpellier-pompignane',
    chapter: 'city',
    city: 'Montpellier — Pompignane',
    country: 'France',
    flag: '🇫🇷',
    theme: 'Urban requalification',
    oneLiner:
      'Reimagining a fragmented industrial fringe with the people who already work there.',
    commissioner: 'City of Montpellier',
  },
  {
    slug: 'rennes',
    chapter: 'city',
    city: 'Rennes',
    country: 'France',
    flag: '🇫🇷',
    theme: 'TGV station rehabilitation',
    oneLiner: 'Public dialogue around a major railway-station redevelopment.',
  },
  {
    slug: 'grenoble',
    chapter: 'city',
    city: 'Grenoble',
    country: 'France',
    flag: '🇫🇷',
    theme: 'Bus network revival',
    oneLiner: 'Reviving the Chrono bus network through citizen-tested itineraries.',
  },
  {
    slug: 'free-space-geneva',
    chapter: 'city',
    city: 'Anières & Geneva lakefront',
    country: 'Switzerland',
    flag: '🇨🇭',
    theme: 'Free Space — active mobility',
    oneLiner:
      'Reclaiming the Geneva lakefront for active, gentle, year-round mobility.',
  },
  {
    slug: 'vernier-transition-income',
    chapter: 'city',
    city: 'Vernier',
    country: 'Switzerland',
    flag: '🇨🇭',
    theme: 'Transition Income',
    oneLiner:
      'Listening to vulnerable people in the design of a local transition income.',
  },
  {
    slug: 'paris-bastille',
    chapter: 'city',
    city: 'Paris — Bastille',
    country: 'France',
    flag: '🇫🇷',
    theme: 'Futur en Seine — first public prototype',
    oneLiner:
      'Where Unlimited Cities first met the public — Place de la Bastille.',
  },

  /* ───── Chapter B — Research & Evolution (4) ───── */
  {
    slug: 'quito-interlace',
    chapter: 'research',
    city: 'Quito',
    country: 'Ecuador',
    flag: '🇪🇨',
    theme: 'INTERLACE — nature-based solutions',
    oneLiner:
      'European research on urban nature, tested in the high valleys of Ecuador.',
  },
  {
    slug: 'winterthur-gruze',
    chapter: 'research',
    city: 'Winterthur — Grüze Plus',
    country: 'Switzerland',
    flag: '🇨🇭',
    theme: 'Multigination Research — urban transition',
    oneLiner:
      'A railway district reinvented across generations — the Multigination story.',
  },
  {
    slug: 'aguascalientes',
    chapter: 'research',
    city: 'Aguascalientes',
    country: 'Mexico',
    flag: '🇲🇽',
    theme: 'Urban psychogeography',
    oneLiner:
      'Mapping the emotional geography of a Mexican city — a new feature for the tool.',
  },
  {
    slug: 'world-gamification',
    chapter: 'research',
    city: 'WORLD',
    country: 'All deployments',
    flag: '🌍',
    theme: 'Engagement by gamification',
    oneLiner:
      'Game mechanics added to the platform — applied to every project.',
  },
];

export const cityCases = cases.filter((c) => c.chapter === 'city');
export const researchCases = cases.filter((c) => c.chapter === 'research');
