import type { Metadata } from "next";
import { PageHeading } from "@/components/PageHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy notice",
  description: "How ZenSys Solutions handles information submitted through its website forms.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="container page-hero">
      <PageHeading eyebrow="Privacy" title="A clear note about your information.">
        <p>This notice describes what happens when you send ZenSys Solutions a demo request or contact message through this website.</p>
      </PageHeading>
      <div className="privacy-copy">
        <section>
          <h2>Information you provide</h2>
          <p>Our forms may ask for your name, business name, email address, phone or WhatsApp number, product of interest, inquiry topic, and message.</p>
        </section>
        <section>
          <h2>How we use it</h2>
          <p>We use the details you submit to respond to your question, discuss a product, arrange a demonstration, or follow up on a support inquiry. Please do not include passwords, payment-card details, or other sensitive information in a form message.</p>
        </section>
        <section>
          <h2>Email delivery and storage</h2>
          <p>When form delivery is configured, your submission is sent to <a href={`mailto:${site.email}`}>{site.email}</a> using Brevo for email delivery. The website does not save form submissions to its own application database. Once delivered, the message may remain in the recipient’s email inbox.</p>
        </section>
        <section>
          <h2>WhatsApp links</h2>
          <p>WhatsApp links open a conversation with a prepared message. Nothing is sent through WhatsApp unless you choose to send it. WhatsApp handles information you send there under its own terms and privacy practices.</p>
        </section>
        <section>
          <h2>Questions or requests</h2>
          <p>To ask about a message you sent or request that we review or remove it from our inbox, contact <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
        </section>
        <p className="privacy-updated">Last updated: 10 October 2026</p>
      </div>
    </section>
  );
}
