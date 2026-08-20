import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { Button } from "@/components/button";
import { HeroMedia } from "@/components/hero-media";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { ArticleCard } from "@/components/article-card";
import { getProjects, getServices, getProducts, getPosts, getSiteSettings } from "@/lib/api";

export default async function Home() {
  const [projects, services, products, blogPosts, siteConfig] = await Promise.all([getProjects(), getServices(), getProducts(), getPosts(), getSiteSettings()]);
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy"><img className="hero-avatar" src={siteConfig.avatar.src} alt={siteConfig.avatar.alt} />
            <div className="availability"><span className="status-dot" /> {siteConfig.availability}</div>
            <p className="eyebrow">Independent digital studio</p>
            <h1>Build with clarity.<br /><em>Ship with character.</em></h1>
            <p className="hero-lede">Coralz is the personal digital home of a builder making thoughtful products, polished interfaces, and useful things for the web.</p>
            <div className="hero-actions"><Button href="/projects">Explore the work</Button><Button href="/about" variant="secondary">A little about me</Button></div>
            <div className="hero-note"><span>01</span><p>Design-led frontend foundations, prepared for the backend that comes next.</p></div>
          </div>
          <HeroMedia />
        </div>
      </section>

      <section className="intro-strip">
        <div className="container intro-strip__grid">
          <span className="section-index">01 / The practice</span>
          <p>I work at the intersection of <strong>product thinking, visual design, and frontend engineering</strong> — making digital experiences feel considered from the first click to the last detail.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Selected work" title="Projects with a point of view">
            <Button href="/projects" variant="text">View all projects</Button>
          </SectionHeading>
          <div className="project-grid">{projects.map((project, i) => <ProjectCard key={project.slug} project={project} featured={i === 0} />)}</div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container service-split">
          <div><p className="eyebrow">What I can help with</p><h2>From a sharp idea to a shipped interface.</h2><p className="body-large">A small, focused practice for brands and products that value craft, speed, and a clear point of view.</p><Button href="/services">Explore services</Button></div>
          <div className="service-list">{services.map((service, i) => <Link key={service.slug} href="/services" className="service-row"><span>0{i+1}</span><div><h3>{service.name}</h3><p>{service.description}</p></div><ArrowUpRight /></Link>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Small things, thoughtfully made" title="Products & resources"><Button href="/products" variant="text">Browse products</Button></SectionHeading>
          <div className="product-grid">{products.map((product) => <Link key={product.slug} href={`/products/${product.slug}`} className="product-tile"><div className="product-tile__top"><span>{product.type}</span><span>{product.availability}</span></div><h3>{product.name}</h3><p>{product.description}</p><strong>{product.price}</strong></Link>)}</div>
        </div>
      </section>

      <section className="section section--compact">
        <div className="container">
          <SectionHeading eyebrow="From the notebook" title="Latest writing"><Button href="/blog" variant="text">Read the journal</Button></SectionHeading>
          <div className="article-grid">{blogPosts.map(post => <ArticleCard key={post.slug} post={post} />)}</div>
        </div>
      </section>

      <section className="cta-band"><div className="container cta-band__inner"><div><p className="eyebrow">Have something worth making?</p><h2>Let’s give it a clear shape.</h2></div><Button href="/contact">Start a conversation</Button></div></section>
    </>
  );
}
