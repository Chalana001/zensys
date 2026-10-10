# Decisions and open items

## Confirmed

| Topic | Decision |
| --- | --- |
| Main conversion | Book a demo. |
| POS audience | Grocery shop and Food City owners. |
| GMS audience | Garage owners and service managers. |
| Launch language | English. |
| Responsive support | Both products and all public pages must work on mobile. |
| Demo/contact destination | Email `founder@zensys.lk`; public phone/WhatsApp `0755589764`. |
| Form email provider | Brevo transactional email API; sender domain/address and API key still need configuration. |
| POS offline behavior | Sales continue offline and sync later; purchasing and item pages require a connection. |
| POS purchase imagery | Exclude purchase workflow from marketing images. |
| GMS visuals | Use dashboard, active job cards, and job-card details. |
| Tutorials | Add a static Tutorials page with a “coming soon” message; add videos later. |
| Launch content management | No manual admin backend/CMS for products, images, or videos at launch. |
| Future direction | A manual backend may be added later for product and media management. |
| AI | Planned, not started; exclude from current product claims. |
| Stack | React/Next.js App Router, TypeScript, Tailwind CSS, CSS-based interactions; Vercel proposed for hosting. |
| Screenshot handling | Do not serve original product captures publicly until their names, email addresses, phone numbers, vehicle plates, and customer/sales details have been removed. |

## Assumptions to confirm before publishing

- Sri Lanka is the initial SEO market; `.lk` and the described customer audience suggest this, but it was not explicitly confirmed.
- GMS feature list is intended to describe the available product, but live/demo readiness still needs confirmation.
- The demo form emails the lead and then offers a WhatsApp button. Automatic WhatsApp messages are not part of the flow.
- A lightweight server-side email handler is acceptable for lead delivery; this is separate from the deferred content admin backend.
- The supplied product screenshots are approved for public display after private data is checked/redacted.

## Founder content needed before final copy

- Company story, mission, and support promise for About.
- Confirmed GMS availability and exact live feature set.
- Confirm whether the five POS users represent five people, five shops, or another measure; keep this out of marketing until verified.
- Confirm service geography and any public company address before local structured data is added.
- Configure Brevo API key and a sender address/domain verified in Brevo; complete a real form-delivery check before launch.
- Confirm production hosting account during implementation.
