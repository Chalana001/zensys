import Link from "next/link";

export default function NotFound() {
  return <section className="container page-hero"><p className="eyebrow">404 / Not found</p><h1>This page isn’t here.</h1><p>Try the home page or explore a ZenSys product.</p><div className="hero-actions"><Link className="button" href="/">Go home</Link><Link className="button-link" href="/pos">Explore POS <span aria-hidden="true">→</span></Link></div></section>;
}
