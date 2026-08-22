# Meridian — Enterprise B2B SaaS Website System

A premium, production-ready website system for B2B SaaS, enterprise software, DevTools, infrastructure, and operations platforms. Built in the visual language of Linear × Vercel × Stripe: generous white space, sharp typography, hairline borders, minimal color, and data-dense product UI.

**Every product screenshot is real, code-built UI** — dashboards, data tables, charts, activity feeds — not images. Fully themeable and editable.

## Stack

- [Next.js 15](https://nextjs.org) (App Router, static export-ready)
- [Tailwind CSS v4](https://tailwindcss.com)
- TypeScript
- Geist Sans / Geist Mono via [`geist`](https://vercel.com/font)
- [Lucide](https://lucide.dev) icons
- Zero runtime dependencies beyond React/Next. No paid services.

## Quickstart

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Pages

| Route | Description |
| --- | --- |
| `/` | Home — hero, logo wall, problem, platform tabs, metrics, capabilities, integrations, security band, case study teaser, CTA |
| `/platform` | Plan · Monitor · Analyze · Optimize pillars with product mocks + architecture diagram |
| `/solutions` | Solutions by team/function |
| `/industries` | Vertical solutions with KPI proof points |
| `/features` | Bento feature grid with embedded product UI |
| `/integrations` | Filterable integration grid + API/code panels |
| `/security` | Compliance, infrastructure, access control, audit logs |
| `/customers` | Customer index + quote wall |
| `/customers/[slug]` | Long-form case studies (Before → Implementation → Results) |
| `/pricing` | Plans + full enterprise comparison table + FAQ |
| `/resources` | Guides & webinars hub |
| `/blog`, `/blog/[slug]` | Blog index + 5 long-form posts |
| `/about` | Story, timeline, leadership |
| `/contact` | Demo request form |
| `/legal/terms`, `/legal/privacy` | Legal boilerplate |
| `404` | Branded not-found |

## Customization

| What | Where |
| --- | --- |
| Brand name, URLs, emails | `src/lib/site.ts` |
| All copy/data (plans, case studies, posts, industries…) | `src/lib/data.ts` |
| Colors, fonts, radii, keyframes | `src/app/globals.css` (`@theme` tokens) |
| Product mock screens | `src/components/product-ui/mocks.tsx` |
| Navigation & footer links | `src/components/site-header.tsx`, `site-footer.tsx` |

### Recolor in one place

All colors flow through Tailwind tokens in `globals.css`. Change `--color-accent` to rebrand every accent across the site.

### Set your domain

Set `NEXT_PUBLIC_SITE_URL` (used for canonical/OG URLs), or edit the fallback in `src/lib/site.ts`.

## Deploy to Vercel

```bash
npm i -g vercel
vercel link
vercel deploy --prod
```

Or push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new).

---

© Meridian Systems, Inc. Commercial template — all rights reserved.
