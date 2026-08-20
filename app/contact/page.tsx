import { ContactForm } from "@/components/contact-form";
import { getSiteSettings } from "@/lib/api";

export default async function ContactPage() {
  const siteConfig = await getSiteSettings();
  return <div className="page"><section className="page-hero"><div className="container"><p className="eyebrow">Contact</p><h1>Bring the messy version. We can find the shape together.</h1><p className="hero-lede">Project inquiries, services, partnerships, products, or a good idea that is not quite formed yet.</p></div></section>
    <section className="section"><div className="container contact-grid"><div><p className="eyebrow">Say hello</p><a className="contact-email" href="mailto:hello@example.com">hello@example.com</a><div className="contact-notes"><p><strong>Typical response</strong><br />Within 1–2 business days.</p><p><strong>Availability</strong><br />{siteConfig.availability}.</p><p><strong>Inquiries</strong><br />Projects · services · business · products</p></div></div><ContactForm /></div></section>
  </div>;
}
