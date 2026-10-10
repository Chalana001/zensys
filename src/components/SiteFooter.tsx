import Link from "next/link";
import { site, whatsappHref } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand-block">
          <Link className="footer-wordmark" href="/">ZenSys<span>Solutions</span></Link>
          <p>Software for the businesses that keep everyday life moving.</p>
        </div>
        <div>
          <p className="footer-label">Explore</p>
          <div className="footer-links">
            <Link href="/pos">POS system</Link><Link href="/gms">Garage management</Link>
            <Link href="/tutorials">Tutorials</Link><Link href="/about">About ZenSys</Link>
          </div>
        </div>
        <div>
          <p className="footer-label">Talk to us</p>
          <div className="footer-links">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={`tel:${site.phoneInternational}`}>{site.phoneDisplay}</a>
            <a href={whatsappHref("Hello ZenSys, I would like to learn more.")} target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} ZenSys Solutions</span><div className="footer-legal-links"><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link></div></div>
    </footer>
  );
}
