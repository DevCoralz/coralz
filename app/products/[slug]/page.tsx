import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PurchaseButton } from "@/components/purchase-button";
import { CheckIcon } from "@/components/icons";
import { getProducts, getProduct } from "@/lib/api";


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = await getProduct(slug);
  return item ? { title: `${item.name} — Product`, description: item.description } : { title: "Not found" };
}

export async function generateStaticParams() { const products = await getProducts(); return products.map((p) => ({ slug: p.slug })); }

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();
  return <div className="page"><section className="product-detail"><div className="container product-detail__grid"><div className="product-detail__visual"><span>{product.type}</span><b>{product.name.slice(0, 1)}</b></div><div><p className="eyebrow">{product.availability}</p><h1>{product.name}</h1><p className="hero-lede">{product.description}</p><div className="price-line"><strong>{product.price}</strong>{product.compareAt && <del>{product.compareAt}</del>}</div><PurchaseButton available={product.availability === "Available"} /><ul className="check-list product-features">{product.features.map(f => <li key={f}><CheckIcon /> {f}</li>)}</ul><p className="muted-note">Purchase UI is intentionally frontend-only. A future checkout adapter can connect this state to the backend/payment layer.</p></div></div></section></div>;
}
