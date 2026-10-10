# ZenSys Solutions website

The Next.js website scaffold and launch pages are implemented. Brand assets and product screenshots are supplied in this workspace; public product images are anonymized copies, while originals remain private.

## Project documents

- [Website plan](docs/website-plan.md) — goals, audiences, page map, and product scope.
- [Implementation plan](docs/implementation-plan.md) — build phases and launch sequence.
- [Architecture](docs/architecture.md) — proposed app structure, data flow, forms, and future extension points.
- [Design direction](docs/design-system.md) — visual principles based on the supplied logo.
- [Content and assets](docs/content-and-assets.md) — approved product claims and supplied image inventory.
- [SEO plan](docs/seo-plan.md) — technical and content work for launch.
- [Decisions and open items](docs/decisions.md) — confirmed decisions, assumptions, and launch gates.

## Stack

React with Next.js App Router and TypeScript, Tailwind CSS, and CSS-based micro-interactions. The launch site is content-first and has no product/catalogue admin backend. A server-side form handler sends demo and contact requests by email once Brevo credentials are configured.

## Run locally

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env.local` and configure a Brevo API key plus a sender address verified in Brevo before expecting form delivery to work.
3. Start the app with `npm run dev` and open `http://localhost:3000`.

## Brand and product assets

Brand files are in the project root. Source product screenshots are under `product images/`; unredacted review copies are in `assets-pending-redaction/`. Anonymized POS and GMS images are under `public/images/`. See [content and assets](docs/content-and-assets.md) for the asset inventory and privacy notes.
