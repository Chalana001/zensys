import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/PageHeading";
import { ProductImage } from "@/components/ProductImage";
import { productImages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Garage management system for jobs and vehicles",
  description: "See how ZenSys GMS connects garage jobs, customer vehicles, service history, spare parts, mechanics, and payments.",
  alternates: { canonical: "/gms" },
};

export default function GmsPage() {
  return (
    <>
      <section className="container page-hero product-hero"><PageHeading eyebrow="GMS / Garage management" title="Every vehicle. Every job. One history."><p>ZenSys GMS connects customer and vehicle records to job cards, service and payment history, compatible spare parts, and the people doing the work.</p></PageHeading><div className="hero-actions"><Link className="button" href="/demo?product=GMS">Book a GMS demo <span aria-hidden="true">→</span></Link><Link className="button-link" href="#workflow">Explore the workflow <span aria-hidden="true">↓</span></Link></div><div className="page-image"><ProductImage src={productImages.gms.dashboard} alt="ZenSys Garage Management System dashboard" caption="Garage overview dashboard" priority /></div></section>
      <section className="section section-white" id="workflow"><div className="container"><div className="section-head"><div><p className="eyebrow">From customer to job card</p><h2>Keep each vehicle’s work connected.</h2><p>A customer can have multiple vehicles, each with its own profile. Follow service, spare-part, and payment history alongside the customer’s sales and payments.</p></div></div><div className="split-section"><ProductImage src={productImages.gms.activeJobs} alt="ZenSys GMS active job cards" caption="Active job cards" /><div className="split-copy"><h3>Jobs, services, and people in one flow.</h3><p>Manage service jobs and shifts, assign mechanics, then review a mechanic’s service history from their profile.</p><ul className="feature-list"><li>Job cards and service management</li><li>Mechanic assignments and history</li><li>Shift and staff management</li><li>Salary and advance tracking</li><li>Billing and barcode printing</li><li>Reports and promotion messages</li></ul></div></div></div></section>
      <section className="section"><div className="container split-section reverse"><ProductImage src={productImages.gms.jobCard} alt="ZenSys GMS job card details" caption="Job card details" /><div className="split-copy"><p className="eyebrow">Spare parts by vehicle</p><h2>Find parts that fit the vehicle.</h2><p>Link spare parts with vehicle models, then filter the parts list by model. It helps a cashier or service team find likely-fit parts without relying on one person to remember every match.</p><p>Customer and vehicle profiles keep the job, service, parts, and payment records together.</p></div></div></section>
      <section className="section section-white"><div className="container"><div className="section-head"><div><p className="eyebrow">Inside ZenSys GMS</p><h2>Three views of the garage workflow.</h2></div></div><div className="product-gallery"><ProductImage src={productImages.gms.dashboard} alt="ZenSys GMS dashboard overview" caption="Dashboard" /><ProductImage src={productImages.gms.activeJobs} alt="ZenSys GMS list of active job cards" caption="Active job cards" /><ProductImage src={productImages.gms.jobCard} alt="ZenSys GMS job card details" caption="Job card details" /></div></div></section>
      <section className="section"><div className="container cta-band"><div><p className="eyebrow">For garage owners and service managers</p><h2>See a garage workflow in ZenSys GMS.</h2><p>Tell us how your garage works and we’ll arrange a walkthrough.</p></div><Link className="button" href="/demo?product=GMS">Book a GMS demo <span aria-hidden="true">→</span></Link></div></section>
    </>
  );
}
