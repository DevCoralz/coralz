import Link from "next/link";
import { getProducts } from "@/lib/api";

export default async function ProductsPage() {
  const products = await getProducts();
  return <div className="page"><section className="page-hero"><div className="container"><p className="eyebrow">Products</p><h1>Useful digital things, made to be used.</h1><p className="hero-lede">The storefront foundation supports digital products, software, templates, resources, and future purchase states without implementing payments yet.</p></div></section>
    <section className="section"><div className="container"><div className="product-grid product-grid--large">{products.map(p => <Link href={`/products/${p.slug}`} className="product-card" key={p.slug}><div className="product-card__visual"><span>{p.type}</span><b>{p.name.slice(0, 1)}</b></div><div className="product-card__body"><div className="article-meta"><span>{p.availability}</span><span>{p.price}</span></div><h2>{p.name}</h2><p>{p.description}</p><span className="inline-link">View product →</span></div></Link>)}</div></div></section>
  </div>;
}
