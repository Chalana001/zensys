import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/PageHeading";

export const metadata: Metadata = { title: "Product tutorials", description: "Step-by-step ZenSys POS and Garage Management System tutorials will be added here.", alternates: { canonical: "/tutorials" }, robots: { index: false, follow: true } };

export default function TutorialsPage() {
  return <section className="container page-hero"><PageHeading eyebrow="Tutorials" title="Learn the product, step by step."><p>We’re preparing short videos to help POS and GMS teams get familiar with their workflows. Tutorials will be added here soon.</p></PageHeading><div className="section-tight"><article className="tutorial-panel"><div><p className="eyebrow">01 / POS</p><h2>Shop operations</h2></div><div><p>Guides for billing, stock, reports, promotions, and everyday shop tasks will be added here.</p><span className="coming-soon">Tutorial videos coming soon</span></div></article><article className="tutorial-panel"><div><p className="eyebrow">02 / GMS</p><h2>Garage workflows</h2></div><div><p>Guides for job cards, vehicle records, spare parts, mechanics, and service history will be added here.</p><span className="coming-soon">Tutorial videos coming soon</span></div></article></div><div className="section-tight"><Link className="button-link" href="/demo">Need a walkthrough now? Book a demo <span aria-hidden="true">→</span></Link></div></section>;
}
