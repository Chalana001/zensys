import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { PageHeading } from "@/components/PageHeading";

export const metadata: Metadata = { title: "Book a product demo", description: "Request a ZenSys POS or Garage Management System demo for your business.", alternates: { canonical: "/demo" } };

export default async function DemoPage({ searchParams }: { searchParams: Promise<{ product?: string }> }) {
  const { product } = await searchParams;
  const productDefault = product === "POS" || product === "GMS" || product === "Both" ? product : undefined;

  return (
    <>
      <section className="container page-hero contact-hero">
        <PageHeading eyebrow="Book a demo" title="Let’s start with your business."><p>Choose POS, GMS, or both. We’ll follow up by email, and you can continue the conversation on WhatsApp.</p></PageHeading>
      </section>
      <section className="section">
        <div className="container contact-layout">
          <div className="contact-details">
            <div className="contact-item"><span>What happens next</span><p>We’ll review your request and contact you to arrange a walkthrough.</p></div>
            <div className="contact-item"><span>Email</span><a href="mailto:founder@zensys.lk">founder@zensys.lk</a></div>
            <div className="contact-item"><span>Phone / WhatsApp</span><a href="tel:+94755589764">075 558 9764</a></div>
          </div>
          <LeadForm productDefault={productDefault} />
        </div>
      </section>
    </>
  );
}
