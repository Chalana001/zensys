import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/PageHeading";

export const metadata: Metadata = { title: "About ZenSys Solutions", description: "Learn about ZenSys Solutions and its software for shops and garages.", alternates: { canonical: "/about" } };

export default function AboutPage() {
  return <section className="container page-hero"><PageHeading eyebrow="About ZenSys" title="Software shaped around the work businesses do every day."><p>ZenSys Solutions builds business software for shop and garage teams. Our focus is to make everyday operations easier to follow, from sales and stock to jobs, vehicles, and service history.</p></PageHeading><div className="section about-layout"><aside className="about-aside"><p className="eyebrow">Our focus</p><p>Useful workflows. Clear records. Support that stays connected to the business.</p></aside><div className="about-copy"><h2>Built for practical work.</h2><p>Retail shops and garages handle many small but important tasks every day. ZenSys brings those tasks into systems designed for the people who run them.</p><p>Our POS combines billing with shop-management capabilities. Our Garage Management System links customers, vehicles, jobs, service records, parts, staff, and payments.</p><p>We work with businesses to understand how their operations run and configure the system around those needs. As the product and company story develop, this page can be expanded with the founder’s story and the team’s mission.</p><Link className="button" href="/demo">Meet us for a demo <span aria-hidden="true">→</span></Link></div></div></section>;
}
