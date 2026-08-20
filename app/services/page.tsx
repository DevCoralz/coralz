import { Button } from "@/components/button";
import { CheckIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { getServices } from "@/lib/api";
import { getPricingFaq } from "@/lib/api";

export default async function ServicesPage() {
  const [services, pricingFaq] = await Promise.all([getServices(), getPricingFaq()]);
  return <div className="page"><section className="page-hero"><div className="container"><p className="eyebrow">Services</p><h1>Useful expertise, packaged without the agency fog.</h1><p className="hero-lede">Clear scopes, typed pricing data, and a frontend that can later consume real availability and pricing from the backend.</p></div></section>
    <section className="section"><div className="container"><div className="service-cards">{services.map((s, i) => <article className={`service-card ${i === 1 ? "service-card--featured" : ""}`} key={s.slug}><div className="service-card__top"><span>0{i+1}</span><span>{s.status}</span></div><h2>{s.name}</h2><p>{s.description}</p><strong>{s.price}</strong><small>{s.delivery}</small><ul>{s.features.map(f => <li key={f}><CheckIcon />{f}</li>)}</ul><Button href="/contact">Enquire</Button></article>)}</div></div></section>
    <section className="section section--tint"><div className="container narrow"><SectionHeading eyebrow="Questions" title="Before we start" />{pricingFaq.map(item => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></section>
  </div>;
}
