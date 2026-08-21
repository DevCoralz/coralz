import Link from "next/link";
import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div>
            <Link className="brand" href="/"><span className="brand-mark">C</span><span>Coralz</span></Link>
            <p className="footer-copy">A thoughtful digital home for products, projects, ideas, and useful tools.</p>
          </div>
          <div className="footer-links">
            <div><p className="footer-label">Explore</p><Link href="/about">About</Link><Link href="/projects">Projects</Link><Link href="/services">Services</Link><Link href="/products">Products</Link><Link href="/pricing">Pricing</Link></div>
            <div><p className="footer-label">Read</p><Link href="/blog">Blog</Link><Link href="/tools">Tools</Link><Link href="/contact">Contact</Link></div>
            <div><p className="footer-label">Social</p>{siteConfig.socials.map(s => <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>)}</div>
          </div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Coralz</span><span>Built as a frontend foundation.</span><span className="footer-legal"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></span></div>
      </div>
    </footer>
  );
}
