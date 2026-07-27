# Flyrinzo Landing Page

Marketing landing page for [Flyrinzo](https://www.flyrinzo.com), a Canadian AI marketing platform for small businesses (social media scheduling, AI content creation, templates, analytics, and a business community).

Built with Next.js (App Router) and statically exported.

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router, static export)
- [React 19](https://react.dev)
- [Tailwind CSS 4](https://tailwindcss.com)
- TypeScript

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. Pages live in `app/`, and edits hot-reload.

## Project Structure

```
app/                  Routes (page.tsx, layout.tsx per route)
  contact-us/
  data-deletion/
  privacy/
  terms/
  components/         Route-scoped components (e.g. StructuredData)
components/           Shared page sections (Hero, Features, Navbar, Footer, etc.)
public/               Static assets (images, icons, sitemap, robots.txt)
```

## Scripts

| Command                    | Description                                      |
| --------------------------- | ------------------------------------------------ |
| `npm run dev`               | Start the dev server                             |
| `npm run build`             | Build and statically export the site to `out/`   |
| `npm run start`             | Serve the production build                       |
| `npm run lint`               | Run ESLint                                        |
| `npm run convert-images`    | Convert listed PNGs in `public/` to WebP (`convert-to-webp.js`) |
| `npm run generate-favicons` | Regenerate favicon assets (`generate-favicons.js`) |

## Static Export

This project is configured for static export (`next.config.ts`: `output: 'export'`, unoptimized images, trailing slashes). Running `npm run build` produces a fully static site in `out/`, which can be deployed to any static host.

## Deployment

The easiest way to deploy is via [Vercel](https://vercel.com/new). See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for other options.
