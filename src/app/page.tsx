import Link from "next/link";
import { ProductImage } from "@/components/ProductImage";
import { productImages } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="container hero hero-centered">
        <div className="hero-copy">
          <div className="hero-rule" aria-hidden="true" />
          <p className="eyebrow">ZenSys Solutions · POS and garage management</p>
          <h1>Systems for shops and garages.</h1>
          <p>POS for grocery and Food City owners. GMS for garage teams. Built around the work that happens every day.</p>
          <div className="hero-actions"><Link className="button" href="/demo">Book a demo <span aria-hidden="true">→</span></Link><Link className="button-link" href="#products">Explore the systems <span aria-hidden="true">↓</span></Link></div>
        </div>
      </section>

      <section className="container section-tight"><div className="proof-strip"><span>Shop billing and operations</span><span>Garage jobs and service</span><span>Made for daily workflows</span></div></section>

      <section className="section" id="products">
        <div className="container">
          <div className="section-head"><div><p className="eyebrow">Two systems, one team</p><h2>Choose the system built for your work.</h2><p>Explore shop management for grocery and Food City owners, or a connected workflow for garage teams.</p></div><Link className="button-link" href="/demo">Talk to ZenSys <span aria-hidden="true">→</span></Link></div>
          <div className="product-pair">
            <article><span className="product-number">01 / RETAIL</span><h3>POS plus shop management.</h3><p>Fast billing, stock workflows, branches, reports, promotions, and loyalty options for grocery and Food City owners.</p><Link className="button-link" href="/pos">Explore POS <span aria-hidden="true">→</span></Link></article>
            <article><span className="product-number">02 / AUTOMOTIVE</span><h3>Garage work, connected.</h3><p>Link jobs, customers, vehicles, compatible spare parts, service history, staff, and payments in one garage system.</p><Link className="button-link" href="/gms">Explore GMS <span aria-hidden="true">→</span></Link></article>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container split-section">
          <div className="split-copy"><p className="eyebrow">POS / Shop operations</p><h2>Keep sales moving, even when the connection drops.</h2><p>ZenSys POS supports offline sales and syncs them when the connection returns. Stock and purchasing workflows are available when you’re online.</p><Link className="button-link" href="/pos">See how POS works <span aria-hidden="true">→</span></Link></div>
          <ProductImage src={productImages.pos.dashboard} alt="ZenSys POS dashboard showing shop operations" caption="Shop activity and reports in one view" />
        </div>
      </section>

      <section className="section">
        <div className="container split-section reverse">
          <ProductImage src={productImages.gms.activeJobs} alt="ZenSys GMS active job cards screen" caption="Active garage jobs at a glance" />
          <div className="split-copy"><p className="eyebrow">GMS / Garage operations</p><h2>Follow every job from vehicle to service history.</h2><p>Keep customer and vehicle records connected to jobs, service and payment history, spare parts, and the mechanics doing the work.</p><Link className="button-link" href="/gms">See how GMS works <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>

      <section className="section section-white"><div className="container cta-band"><div><p className="eyebrow">Start a conversation</p><h2>See how ZenSys fits your business.</h2><p>Tell us whether you’re looking at POS, GMS, or both. We’ll arrange a conversation around your needs.</p></div><Link className="button" href="/demo">Book a demo <span aria-hidden="true">→</span></Link></div></section>
    </>
  );
}
