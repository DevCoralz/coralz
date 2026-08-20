# Coralz end-to-end / hand-trace QA

This QA pass follows the uploaded Coralz brief: multi-page architecture, premium light UI, royal-blue design system, reusable typed data, backend separation, dynamic-route states, accessibility, responsiveness, and an exportable complete ZIP. fileciteturn4file0

## 1. Static source checks — PASS

- [x] Required routes exist: `/`, `/about`, `/projects`, `/projects/[slug]`, `/services`, `/products`, `/products/[slug]`, `/pricing`, `/blog`, `/blog/[slug]`, `/tools`, `/contact`. fileciteturn4file6
- [x] Dynamic project/product/blog pages provide `generateStaticParams`, `generateMetadata`, and `notFound()`.
- [x] Local TypeScript/TSX source was syntax-transpiled with TypeScript 5.8.3 with zero diagnostics.
- [x] All `@/` local imports resolve to files in the package.
- [x] No backend route handlers, database code, authentication, or payment implementation exists.
- [x] Typed mock content is separated behind `lib/api/`, with the requested getter boundary (`getProjects`, `getProject`, `getPosts`, `getPost`, `getProducts`, `getProduct`, `getServices`, `getSiteSettings`). fileciteturn4file2
- [x] `NEXT_PUBLIC_API_URL` and `NEXT_PUBLIC_SITE_URL` are provided through `.env.example`.
- [x] Dockerfile and `.dockerignore` are included.
- [x] Sitemap and robots route architecture exists.
- [x] Loading and error boundaries exist for the major routes and dynamic detail routes.
- [x] Global reduced-motion handling exists. fileciteturn4file1

## 2. Route-by-route hand trace — PASS

### `/`
- Hero exposes Coralz identity, professional statement, primary/secondary CTAs, avatar placeholder, animated/replaceable hero media, availability indicator, and social-ready data.
- Selected projects link to `/projects` and individual case studies.
- Services link to `/services`.
- Products link to `/products/[slug]`.
- Latest writing links to `/blog/[slug]`.
- Final CTA links to `/contact`.
- Shared navigation/footer remain present.

### `/about`
- Profile/avatar, story, current direction, journey timeline, principles, values, skills/technology tags, and CTA are present.
- Profile media is read from site settings rather than embedded business content.

### `/projects`
- Category tabs change the displayed collection.
- Search input filters title/summary/tags.
- Result count updates through `aria-live`.
- Empty state can be reached by a non-matching query.
- Clear filters restores the full collection.
- Project cards navigate to real dynamic routes.

### `/projects/[slug]`
- Valid mock slugs resolve to case studies.
- Case study includes hero, overview, problem, solution, features, visual notes, results, architecture, technology tags, links, status, and related projects.
- Invalid slug reaches `notFound()`.
- Related projects provide another dynamic-route navigation path.
- Metadata is generated from the project record.

### `/services`
- Service cards expose name, description, starting price, delivery, status, feature list, and CTA.
- CTA reaches `/contact`.
- FAQ uses native accessible `<details>` disclosure.
- Pricing/FAQ content is retrieved through the API abstraction.

### `/products`
- Product cards expose type, availability, price, description, and detail navigation.
- Each detail route is real and dynamic.

### `/products/[slug]`
- Detail exposes product type, availability, description, price/compare-at price, features, and purchase/waitlist UI.
- Purchase interaction opens a clear frontend-only checkout boundary instead of pretending payment works.
- Invalid slug reaches `notFound()`.
- Metadata is generated from product data.

### `/pricing`
- Service package cards expose prices and features from typed data.
- Comparison section is present.
- CTAs reach `/contact`.
- Pricing data remains replaceable through the data/API boundary.

### `/blog`
- Featured article is presented separately from the archive.
- Category tabs filter articles.
- Search filters title/excerpt/tags.
- Empty state and clear-filter path are reachable.
- Result count is announced with `aria-live`.
- Cards navigate to dynamic article pages.

### `/blog/[slug]`
- Article exposes title, category, reading time, date, cover, body, and related notes.
- Share controls support copy-link plus X/LinkedIn actions.
- Copy state changes to `Copied`.
- Invalid slug reaches `notFound()`.
- Metadata is generated from the article record.

### `/tools`
- Future tools area has a deliberate placeholder rather than pretending unfinished tools are implemented.
- Tool records come through the frontend API abstraction.
- Notify CTA reaches `/contact`.

### `/contact`
- Contact form has browser-level required/email validation plus explicit frontend validation handling.
- State machine covers `idle → loading → success`.
- Mock error path is reachable with `error@example.com` and exposes retry.
- Success state exposes “Send another” and returns to idle.
- No backend request is made.

### `/privacy` and `/terms`
- Legal routes exist so footer links do not lead to dead routes.
- Content explicitly remains placeholder rather than inventing legal claims.

## 3. Shared navigation hand trace — PASS

- Desktop links cover Home, About, Projects, Services, Products, Pricing, Blog, and Contact.
- Current route receives an active visual/ARIA state.
- Mobile menu opens/closes with an accessible toggle.
- Escape closes the mobile menu.
- Route changes close the menu.
- Body scroll is locked while the mobile menu is open.
- Focus-visible styling is defined globally.

## 4. Responsive/accessibility hand trace — PASS by source inspection

- Layouts include mobile breakpoints rather than only shrinking desktop grids.
- Mobile navigation is a dedicated experience.
- Interactive filters use buttons and `aria-selected`.
- Dynamic result counts use `aria-live`.
- Error/success states use `role="alert"` / `role="status"`.
- Form controls have labels and autocomplete where appropriate.
- Reduced-motion media query disables non-essential motion. fileciteturn4file1
- Semantic links/buttons/details are used for primary interactions.

## 5. Design-system hand trace — PASS

The global CSS defines shared tokens for royal blue, ink, muted text, borders, paper/white surfaces, shadows, radius, and max width. The UI avoids a dark-by-default treatment, excessive gradients, excessive glass effects, and excessive animation, matching the supplied brief. fileciteturn4file7

## 6. Production-build limitation — NOT CLAIMED AS PASS

A real `npm run build` could not be executed in this environment because the npm registry/cache is unavailable and the project dependencies are not installed. `npm install --offline` confirmed the required packages are not cached.

Therefore:
- [x] Source syntax check passed.
- [x] Static route/import/state hand trace passed.
- [ ] Actual Next.js production build — blocked by unavailable dependency installation.
- [ ] Real browser click-through — not available in this environment.

The ZIP is therefore packaged as the **latest complete source state**, without falsely labeling an unrun browser/build check as successful.

## Ship note

The requested frontend foundation is complete at source level and the hand-trace pass has been completed. The remaining environment-dependent gate is to run `npm install`, `npm run typecheck`, `npm run build`, and the browser smoke pass in a networked/CI environment.
