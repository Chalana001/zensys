# Website implementation plan

The app foundation, shared layout, launch routes, lead handler, metadata, CSS direction, and anonymized product screenshots are implemented. Remaining launch work includes verified sender configuration, founder-approved company copy, final product-claim review, and deployment setup. The marketing site does not need a content-management system.

## Phase 1 — Project foundation

1. **Done:** Confirm the workspace and retain supplied originals; use anonymized derivatives in `public/`.
2. **Done:** Create a React/Next.js App Router project with TypeScript and Tailwind CSS.
3. **Done:** Establish the global layout, visual system, responsive spacing, accessible focus states, and shared header/footer.
4. **Done:** Add typed site content and screenshot references for consistent product pages.

## Phase 2 — Public pages

1. **Done:** Home with company summary, POS/GMS entry points, and demo calls to action.
2. **Done:** POS page with anonymized billing, dashboard, and report screenshots; no purchase-workflow image; offline limitations explained.
3. **Done:** GMS page with anonymized dashboard, active jobs, and job-card screenshots.
4. **Done:** About and Contact pages; founder should review draft company-story copy.
5. **Done:** `/tutorials` with POS and GMS sections and a “coming soon” state. Video management remains out of launch scope.
6. **Done:** Privacy notice describing form data flow and linked from the footer and forms.

## Phase 3 — Lead capture

1. **Done:** `/demo` form with product selection and contact details.
2. **Implemented, configuration pending:** Server-side handler sends requests to `founder@zensys.lk` through Brevo when credentials are configured.
3. **Done:** Confirmation state links to WhatsApp without implying automatic WhatsApp delivery.
4. **Done:** Contact form reuses the handler and marks inquiry type.
5. **Done:** Server-side validation, honeypot, and environment-based email configuration; no lead database.

## Phase 4 — Search and sharing

1. **Done:** Unique title and description metadata for public routes.
2. **Done:** Canonicals, social metadata/image, icon, `robots.txt`, and sitemap for `zensys.lk`.
3. **Deferred:** Add organization/local-business structured data after company address and service area are confirmed.
4. **Done:** Descriptive screenshot alt text.
5. **Pending account access:** Verify the domain in Google Search Console and submit the sitemap.

## Phase 5 — Launch preparation

- Configure the production host, domain, HTTPS, and required email environment variables.
- Review responsive layouts and reduced-motion behavior.
- Confirm all public images have permission and contain no unredacted private details.
- Confirm demo and contact email delivery, success messaging, and WhatsApp links.
- Confirm the GMS feature list and product availability before publishing claims.
- Review page copy, metadata, favicon, social previews, and sitemap before launch.

## Later scope

After launch, a manually managed backend may be added for products, product images, and tutorial videos. Keep the launch site content organized so a future backend can supply the same page data without requiring an early CMS or database.
