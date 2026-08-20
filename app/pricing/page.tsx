import Link from "next/link";
import { CheckIcon } from "@/components/icons";
import { getServices } from "@/lib/api";

export default async function PricingPage() {
  const services = await getServices();
  return <div className="page"><section className="page-hero"><div className="container"><p className="eyebrow">Pricing</p><h1>Simple starting points, room for the real scope.</h1><p className="hero-lede">All figures are typed frontend configuration for now. They can be replaced by backend pricing later without changing the cards.</p></div></section>
    <section className="section"><div className="container"><div className="pricing-grid">{services.map((s, i) => <article className={`pricing-card ${i === 1 ? "pricing-card--featured" : ""}`} key={s.slug}><span className="pricing-number">0{i+1}</span><h2>{s.name}</h2><p>{s.description}</p><div className="price-line"><strong>{s.price}</strong></div><ul>{s.features.map(f => <li key={f}><CheckIcon />{f}</li>)}</ul><Link href="/contact" className="button button--secondary">Choose a starting point</Link></article>)}</div></div></section>
    <section className="section section--tint"><div className="container"><p className="eyebrow">Compare</p><div className="comparison"><div><span>Responsive UI</span><b>Included</b><b>Included</b><b>Included</b></div><div><span>Design system</span><b>Core</b><b>Full</b><b>Focused</b></div><div><span>CMS/API boundary</span><b>Ready</b><b>Ready</b><b>Ready</b></div></div></div></section>
  </div>;
}
