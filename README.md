# fardinahsan.dev

Personal portfolio of Fardin Ahsan, AI-first full stack engineer. Single page, Next.js 14 App Router, Tailwind CSS, TypeScript. Deployed on Vercel.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # ESLint (next/core-web-vitals)
```

## Where things live

| Path | What |
|---|---|
| `app/layout.tsx` | Fonts (Inter, Fraunces, JetBrains Mono), metadata, Open Graph, JSON-LD, Google Tag Manager |
| `app/page.tsx` | Section order |
| `app/globals.css` | Tailwind layers and the shared component classes (`.eyebrow`, `.btn-*`, `.link`, `.chip`, `.section`) |
| `tailwind.config.js` | Design tokens: `paper`, `ink`, `line`, `accent` colours, shadows, `max-w-site` |
| `lib/data.ts` | All copy and content: projects, services, experience, testimonials, FAQ, videos, facts |
| `lib/structured-data.tsx` | Person, WebSite and ItemList schemas |
| `components/` | One file per section |
| `public/images/` | Portrait, project screenshots, client logos |
| `public/og-image.png` | 1200x630 social preview |

## Editing content

Almost everything is in `lib/data.ts`. Add a project, testimonial or FAQ there and the section renders it. Set `siteConfig.resumeUrl` to a PDF path in `public/` to show the résumé buttons.

Testimonials accept an optional `source: { label, url }`; when present the card shows a "Verified on …" link.

## Conventions

- Colours and fonts only through Tailwind tokens. No raw hex in components.
- Transitions name their property (`transition-colors`, `transition-transform`). Never `transition-all`.
- Every interactive element has a `:focus-visible` ring and an `:active` state.
- Animations respect `prefers-reduced-motion`.
- Body text 15px or larger, labels 12px or larger.
