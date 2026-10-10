import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/PageHeading";
import { ProductImage } from "@/components/ProductImage";
import { productImages } from "@/lib/site";

export const metadata: Metadata = {
  title: "POS and shop management for grocery stores",
  description: "Explore ZenSys POS for grocery and Food City owners: billing, stock, branches, reports, promotions, loyalty, and offline sales.",
  alternates: { canonical: "/pos" },
};

const everydayFeatures = ["Fast billing", "Branch management", "Shift management", "Receipt customization", "Scale connection", "Credit management"];
const stockFeatures = ["Items and stock", "Goods received notes (GRN)", "Barcode printing", "Expiry-date management", "Purchase workflows", "Sales predictions"];
const ownerFeatures = ["30+ reports", "Scheduled email reports", "Notifications", "Item and category promotions", "Customer-specific promotions", "Loyalty options"];

export default function PosPage() {
  return (
    <>
      <section className="container page-hero product-hero"><PageHeading eyebrow="POS / Shop management" title="Fast billing. A clearer view of your shop."><p>ZenSys POS is designed for grocery and Food City owners who need a clear view of sales, stock, branches, and the work happening at the counter.</p></PageHeading><div className="hero-actions"><Link className="button" href="/demo?product=POS">Book a POS demo <span aria-hidden="true">→</span></Link><Link className="button-link" href="#capabilities">Explore capabilities <span aria-hidden="true">↓</span></Link></div><div className="page-image"><ProductImage src={productImages.pos.billingSidebar} alt="ZenSys POS billing screen in light mode with its navigation sidebar" caption="POS billing screen · light mode" priority /></div></section>
      <section className="section section-white"><div className="container split-section"><div className="split-copy"><p className="eyebrow">At the counter</p><h2>Designed to keep billing straightforward.</h2><p>Move through everyday sales with a clear billing screen, configurable receipts, barcode printing, and connected scales.</p><ul className="feature-list">{everydayFeatures.map((item) => <li key={item}>{item}</li>)}</ul></div><ProductImage src={productImages.pos.billingDark} alt="ZenSys POS billing screen in dark mode" caption="The same POS workflow, shown in dark mode" /></div></section>
      <section className="section" id="capabilities"><div className="container"><div className="section-head"><div><p className="eyebrow">Shop operations</p><h2>See the moving parts of the business.</h2><p>Connect the daily sales flow with stock, reporting, and customer engagement features.</p></div></div><div className="feature-columns"><article><h3>Items and stock</h3><p>Manage items, stock and goods received notes, with barcode printing and expiry-date controls.</p></article><article><h3>Reports and planning</h3><p>Review more than 30 reports, schedule reports to the owner’s inbox, and use sales predictions.</p></article><article><h3>Promotions and loyalty</h3><p>Set promotions by item, category, or customer, and offer loyalty options when configured.</p></article></div><div className="offline-note"><div><strong>Offline sales</strong><p>Sales can continue when the connection drops and sync after it returns. Purchasing and item pages require an internet connection.</p></div></div></div></section>
      <section className="section section-white"><div className="container"><div className="section-head"><div><p className="eyebrow">Product views</p><h2>Real screens from ZenSys POS.</h2></div><Link className="button-link" href="/demo?product=POS">Request a walkthrough <span aria-hidden="true">→</span></Link></div><div className="product-gallery"><ProductImage src={productImages.pos.dashboard} alt="ZenSys POS business dashboard" caption="Shop dashboard" /><ProductImage src={productImages.pos.report} alt="A report view in ZenSys POS" caption="Report view" /></div></div></section>
      <section className="section"><div className="container cta-band"><div><p className="eyebrow">For grocery and Food City owners</p><h2>Walk through the POS system with us.</h2><p>Tell us about your shop and we’ll arrange a product demo.</p></div><Link className="button" href="/demo?product=POS">Book a POS demo <span aria-hidden="true">→</span></Link></div></section>
    </>
  );
}
