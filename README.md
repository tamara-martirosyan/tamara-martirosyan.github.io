# tamara-martirosyan.github.io

Personal portfolio for **Tamara Martirosyan** — Senior Frontend Engineer (Yerevan, Armenia).

Live site: [https://tamara-martirosyan.github.io](https://tamara-martirosyan.github.io)

Includes selected work case studies (TeamWorker.ai, DITAToo Web, Kust Reader), experience, focus areas, and contact.

## Stack

- Next.js 16 (App Router, static export)
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn/ui

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local Next.js server |
| `npm run build` | Production build; static files go to `out/` |
| `npm run start` | Serve the production build locally |
| `npm run lint` | ESLint (max warnings = 0) |
| `npm run typecheck` | TypeScript (`tsc --noEmit`) |
| `npm run check` | Lint + typecheck |

## Deploy

Push to `main`. GitHub Actions builds the static export and deploys to GitHub Pages (artifact from `out/`).

In the repo settings, set **Pages → Source** to **GitHub Actions**.

Node.js 20 is used in CI.
