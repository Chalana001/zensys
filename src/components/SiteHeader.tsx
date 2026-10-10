import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/pos", label: "POS" },
  { href: "/gms", label: "GMS" },
  { href: "/about", label: "About" },
  { href: "/tutorials", label: "Tutorials" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="ZenSys Solutions home">
          <Image src="/images/brand/zensys-mark.png" alt="" width={48} height={48} priority />
          <span className="brand-type"><span>Zen<b>Sys</b></span><small>Solutions</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          <Link className="button button-small" href="/demo">Book a demo</Link>
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Open navigation"><span /><span /></summary>
          <nav aria-label="Mobile navigation">
            {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
            <Link className="button" href="/demo">Book a demo</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
