"use client";

import { useState, type FormEvent } from "react";
import { site, whatsappHref } from "@/lib/site";

type LeadKind = "demo" | "contact";

export function LeadForm({ kind = "demo", productDefault }: { kind?: LeadKind; productDefault?: "POS" | "GMS" | "Both" }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const isDemo = kind === "demo";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, kind }),
      });
      if (!response.ok) throw new Error("Lead submission failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    const message = isDemo
      ? "Hello ZenSys, I have sent a demo request through your website."
      : "Hello ZenSys, I have sent an inquiry through your website.";
    return (
      <div className="form-success" role="status">
        <span className="success-mark" aria-hidden="true">✓</span>
        <h2>{isDemo ? "Your demo request is on its way." : "Your message is on its way."}</h2>
        <p>We’ll follow up by email. If you prefer, you can start a WhatsApp conversation now.</p>
        <a className="button" href={whatsappHref(message)} target="_blank" rel="noreferrer">Continue on WhatsApp <span aria-hidden="true">↗</span></a>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <div className="form-intro"><h2>{isDemo ? "Tell us about your business" : "Send us a message"}</h2><p>We’ll get back to you at the email or phone number you provide.</p></div>
      <div className="form-grid">
        <label>Contact name<input name="name" autoComplete="name" required maxLength={100} /></label>
        <label>Business name<input name="business" autoComplete="organization" required maxLength={120} /></label>
        <label>Email address<input name="email" type="email" autoComplete="email" required maxLength={200} /></label>
        <label>Phone or WhatsApp<input name="phone" type="tel" autoComplete="tel" required maxLength={40} /></label>
        {isDemo ? <label>Which product?<select name="product" defaultValue={productDefault ?? ""} required><option value="" disabled>Select a product</option><option value="POS">POS system</option><option value="GMS">Garage Management System</option><option value="Both">Both systems</option></select></label> : <label>What is this about?<select name="topic" defaultValue="Sales inquiry"><option>Sales inquiry</option><option>Support question</option><option>Other</option></select></label>}
        <label className="form-message">{isDemo ? "Anything we should know? (optional)" : "Message"}<textarea name="message" rows={4} maxLength={2000} required={!isDemo} /></label>
      </div>
      <label className="honeypot" aria-hidden="true">Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
      {status === "error" ? <p className="form-error" role="alert">We couldn’t send your request right now. Please email <a href={`mailto:${site.email}`}>{site.email}</a> or contact us on WhatsApp.</p> : null}
      <div className="form-submit"><button className="button" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : isDemo ? "Request a demo" : "Send message"}<span aria-hidden="true">→</span></button><p>Or email us at <a href={`mailto:${site.email}`}>{site.email}</a>.</p><p className="form-privacy-note">We use these details to respond to your request. <a href="/privacy">Read our privacy notice</a>.</p></div>
    </form>
  );
}
