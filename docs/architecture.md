# Website architecture

## Status and constraints

Implementation is in progress in the Next.js App Router. The site is a public marketing site, not the POS/GMS application. It does not need authentication, a product database, or a content admin at launch. The real product screenshots are held outside `public/` until identifying fields are removed.

## Stack

- React and Next.js App Router for page rendering, routing, metadata, and sitemap conventions.
- TypeScript for route, form, and content contracts.
- Tailwind CSS for shared responsive styling.
- CSS transitions for small interactions; respect the user's reduced-motion preference and avoid animation-only client components.
- A Next.js Route Handler for lead submission and transactional email delivery.
- Vercel is the proposed hosting target; confirm the account and domain setup during implementation.

## Route modules

| Route | Rendering/content approach |
| --- | --- |
| `/` | Mostly static company landing page. |
| `/pos` | Static product content and optimized local screenshots. |
| `/gms` | Static product content and optimized local screenshots. |
| `/about` | Static, founder-reviewed company story. |
| `/contact` | Static contact details plus inquiry form. |
| `/demo` | Static form page; submission crosses the lead-handler seam. |
| `/tutorials` | Static empty state; future video entries can replace the placeholder. |
| `/privacy` | Static notice describing website form data flow. |
| `/api/leads` | Server-side validation and email delivery for demo/contact submissions. |

## Module map

- **Site shell:** header, footer, navigation, page container, and global metadata defaults.
- **Product content:** typed POS and GMS page data, including headings, feature groups, and asset references. Keep product claims in one place rather than duplicating them across page sections.
- **Product presentation:** reusable visual patterns for feature groups and screenshots, while allowing POS and GMS pages to tell their distinct workflows.
- **Lead submission:** one small server-side module that accepts a validated `demo` or `contact` submission, formats the email, and returns a success or failure result. Its interface includes the form kind, validated fields, and delivery outcome.
- **Email delivery:** Brevo transactional email API. Keep provider-specific code inside the lead-submission implementation; do not add a provider abstraction until a second provider or delivery channel is actually needed.
- **WhatsApp contact:** a client-visible click-to-chat URL with encoded context. The user explicitly clicks it; the site does not silently open WhatsApp or send a message.

## Lead data flow

```text
Demo/contact form
  -> browser-side required-field feedback
  -> POST /api/leads
  -> server validates and rate/spam checks
  -> email provider sends to founder@zensys.lk
  -> success confirmation + WhatsApp link
```

Do not return success if email delivery fails. Keep provider credentials in deployment environment variables. Avoid persisting submissions in a database during launch; operational retention can be reconsidered later.

## Rendering and search

Render public product and company content into crawlable HTML. Keep client-side JavaScript limited to interactive controls and animations. Define metadata per page, add canonical URLs, generate `robots.txt` and sitemap files, and optimize supplied images using Next.js image handling where appropriate.

## Asset organization

The current assets live in the project root and `product images/`. During app setup, copy or move them into a public directory with stable, descriptive paths; do not rename or discard originals until references are verified. See [content and assets](content-and-assets.md) for the present inventory.

## Future extension seam

Products, screenshots, and tutorial entries should be kept in structured content modules. Later, a manual backend can become the source for those entries while leaving page presentation and routes intact. Do not add a database, authentication, admin UI, or CMS to the launch implementation.
