# Mahmoud Heshmat — portfolio

A static Astro + TypeScript portfolio with Tailwind CSS 4 through the official Vite plugin. Includes a responsive homepage with freelance experience before selected projects, a three-section Meridian case study, email, LinkedIn and GitHub contact paths, résumé downloads, and custom 404. Fonts are self-hosted; the only client script controls the mobile navigation. No backend, credentials, analytics, or external font requests are required.

## Local development

Use Node **24.19.0** (pinned in `.node-version`) and npm. From the repository root:

```sh
npm ci
npm run dev
```

Astro prints the local development address. Use `npm run check` for Astro/TypeScript diagnostics, `npm run build` for static output in `dist/`, and `npm run preview` to serve that production build. Preview requires a prior build.

In the restricted Codex cloud workspace, the home directory is not writable. Use these environment overrides before the same commands:

```sh
export npm_config_cache=/workspace/.cache/npm
export ASTRO_TELEMETRY_DISABLED=1
cd /workspace/portfolio
npm ci
npm run check
npm run build
npm run dev
```

These are local tooling settings, not website runtime variables. Existing checkouts are already isolated; no additional Git worktree is needed.

## Browser checks

```sh
npm run build
npx playwright install chromium  # only if a supported browser is not already installed
npm test
```

Tests start a production preview on port 4321; stop any existing process on that port first. The configuration uses `/usr/bin/chromium` when present, otherwise Playwright’s installed Chromium. Set `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` only to override that choice. On Linux, Playwright may require system libraries (`npx playwright install --with-deps chromium` on a machine where you have installation permission).

The suite covers 320, 390, 768 and 1440 px layouts, horizontal overflow, all three pages, WCAG A/AA automated axe checks, internal links and fragments, keyboard/skip-link operation, mobile navigation/escape/resize, no-JavaScript navigation, reduced motion, metadata, console errors, missing-page responses, résumé download bytes and contact destinations, and editorial-document exclusion. Screenshots and failure traces go to ignored `test-results/`. Automated checks do not establish complete accessibility compliance or a performance score.

## Cloudflare Pages

This is **static output**; a Cloudflare adapter, Worker, database, server functions and runtime secrets are unnecessary. Nothing has been published automatically.

When you choose to deploy, create a **Pages** project with the Git repository and use:

| Setting | Value |
| --- | --- |
| Framework preset | Astro |
| Repository root | `/` (the project is at the repository root) |
| Production branch | `main` |
| Build command | `npm run check && npm run build` |
| Build output directory | `dist` |
| Node version | `24.19.0` via `.node-version`; optionally set `NODE_VERSION=24.19.0` in Pages settings |
| Build environment | `SITE_URL`: the actual HTTPS origin of your chosen domain or assigned Pages address |
| Optional build environment | `ASTRO_TELEMETRY_DISABLED=1` |

Cloudflare installs npm dependencies using the lockfile. For manual builds, use `npm ci` first. Upload only `dist/` if using Pages direct upload. `public/_headers` supplies security and immutable asset-cache headers. The generated top-level `404.html` gives Pages a real 404 response instead of SPA fallback; deep links use static directory routes.

Current Astro documentation recommends Workers for new Cloudflare projects; Pages still supports this plain static `dist/` output and is the requested target. No Workers-only adapter is used.

### Domain and SEO

Set `SITE_URL` to the real public **HTTPS origin**, with no subpath, query or fragment, in the build environment, then rebuild. Do not put an invented domain in source. It controls canonical links, absolute Open Graph URLs, the sitemap integration and the sitemap entry in `robots.txt`. With no URL, those absolute links and the sitemap are intentionally omitted; the app remains fully functional locally. Placeholder and loopback origins are rejected.

Use the same production `SITE_URL` in production builds; decide separately whether preview deployments should canonicalize to production or have indexing disabled through deployment settings. Setting an environment variable after a build cannot update static metadata; rebuild it.

## Editing

- `src/data/portfolio.ts`: typed profile introduction, projects, expertise, experience, certifications, case-study facts, contacts and résumé registry.
- `src/pages/index.astro`: homepage sections in the requested order.
- `src/pages/work/meridian.astro`: detailed engineering case study. Add another route only when supported content is sufficient.
- `src/components/`: shared section headings and arrow icons.
- `src/layouts/Layout.astro`: navigation, metadata, footer and progressively enhanced mobile menu.
- `src/styles/global.css`: design tokens, typography and responsive layouts; Tailwind utilities are available everywhere.
- `public/`: shipped static files. Keep only public material here.
- `docs/content-evidence.md`: unpublished claim register and factual discrepancies. This is outside the site output, but visible to anyone with repository access.

The owner-supplied AI Engineer and Data Engineer PDFs are stored unchanged under `public/resumes/` and registered in the typed `resumes` array. The AI Engineer version appears in the hero; both versions appear in Contact. To replace them, inspect the new documents and record factual or recency discrepancies in the evidence register. Browser tests verify both HTTP responses and actual downloaded bytes. The owner-supplied email and LinkedIn URL are registered in `contact`.

## Missing inputs and factual review

- Both résumé PDFs and email/LinkedIn details were supplied and added on 26 October 2026. Each role has one supplied version; neither PDF contains an explicit revision date.
- The latest owner edits explicitly add client scale/runtime metrics, a TensorFlow classifier with a logistic-regression baseline, Llama 3 labels, RAGAS factual consistency, deployment timing, streaming churn work, and six certificates. These are owner/resumé-sourced claims, not independently reproduced results.
- The new Data Engineer title differs from Data Analyst in both unchanged PDFs. The latest TensorFlow account also differs from the XGBoost experiment described in the AI résumé. These differences are recorded in the evidence register.
- LinkedIn could not be fetched because the environment proxy denied the connection (HTTP 403). The site uses the supplied profile URL and owner-provided certificate details without claiming independent LinkedIn verification.
- No actual site URL, certification verification asset, or verified live-demo URL supplied.
- Meridian’s current README is a RAG delivery roadmap; `core.py` uses keyword categorization. The current TensorFlow/RAG, deployment and Prophet evaluation results are owner-reported, not independently reproduced.
- Multi-Agent documentation/configuration differs from the supplied model and retrieval stack. Its entry uses inspected customer-support orchestration scope, with résumé-sourced retrieval tools and no extra case-study route.
- Client delivery details and certification are owner-provided. No client names, screenshots, verification URLs or official badges were invented. Credential IDs and supplied issue dates are displayed as text; IBM has no date because none was supplied.

See the evidence register for exact inspected commits, source paths, and review actions. These content gaps do not block local site development. The owner authorized pushing the portfolio and supplied assets to repository `main`. A website deployment has not been performed by this task.
