import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { PageHeading } from "@/components/PageHeading";
import { site, whatsappHref } from "@/lib/site";

export const metadata: Metadata = { title: "Contact ZenSys Solutions", description: "Contact ZenSys Solutions about POS, garage management, sales, or support.", alternates: { canonical: "/contact" } };

export default function ContactPage() {
  return (
    <>
      <section className="container page-hero contact-hero">
        <PageHeading eyebrow="Contact" title="Talk with the ZenSys team."><p>Ask about a product, arrange a demo, or send a support question.</p></PageHeading>
      </section>
      <section className="section">
        <div className="container contact-layout">
          <div className="contact-details">
            <div className="contact-item"><span>Email</span><a href={`mailto:${site.email}`}>{site.email}</a></div>
            <div className="contact-item"><span>Phone</span><a href={`tel:${site.phoneInternational}`}>{site.phoneDisplay}</a></div>
            <div className="contact-item"><span>WhatsApp</span><a href={whatsappHref("Hello ZenSys, I have a question.")} target="_blank" rel="noreferrer">Message ZenSys on WhatsApp ↗</a></div>
          </div>
          <LeadForm kind="contact" />
        </div>
      </section>
    </>
  );
}
