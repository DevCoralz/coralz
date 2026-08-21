# Coralz frontend

Production-oriented Next.js/TypeScript frontend foundation for the Coralz personal platform.

## Routes

`/`, `/about`, `/projects`, `/projects/[slug]`, `/services`, `/products`, `/products/[slug]`, `/pricing`, `/blog`, `/blog/[slug]`, `/tools`, `/contact`, `/privacy`, `/terms`.

## Architecture

- `lib/types.ts` — domain contracts.
- `lib/data.ts` — typed local mock/CMS-ready content.
- `lib/api/` — frontend data-access boundary. Replace the mock implementation with HTTP requests later.
- `components/` — reusable UI primitives and interactive surfaces.
- `app/` — real Next.js App Router pages, loading/error boundaries, metadata, sitemap and robots.
- `public/` — local placeholder media.
- `Dockerfile` — standalone production container.
- `.env.example` — future API/site URL configuration.

No backend, database, authentication, payment processing, or admin CMS is included.

## Run

```bash
npm install
npm run dev
```

Production:

```bash
npm run typecheck
npm run build
npm run start
```

## Environment

Copy `.env.example` to `.env.local`:

```bash
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

## QA status

The source has been hand-traced route-by-route and interaction-by-interaction before packaging. TypeScript/TSX source was syntax-transpiled with TypeScript successfully.

A real `npm run build` could not be executed in this packaging environment because the npm registry/cache is unavailable and the project dependencies are not installed. This is recorded honestly in `QA.md`; the package is not marked as having passed a browser/production build that was not actually run.


## Premium interaction pass

The UI is intentionally art-directed rather than deployment-focused. The interaction layer includes pointer parallax, a cursor aura, scroll progress, magnetic controls, cinematic hero motion, reveal timing, orbital accents, hover light sweeps, and reduced-motion fallbacks.

For the hero video, add `public/hero-video.mp4`. The existing fallback remains available when the video asset is absent.

The visual direction takes inspiration from high-craft developer portfolios such as the user's `mrbayo.dev` reference, while keeping Coralz's own content and visual identity rather than cloning another site's markup.
