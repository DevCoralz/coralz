import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { Magnetic } from "@/components/premium-motion";
import { ProjectScene } from "@/components/project-scene";
import { DepthCard } from "@/components/depth-card";
import { FluidCanvas } from "@/components/fluid-canvas";
import { VelocityText } from "@/components/velocity-text";
import { Button } from "@/components/button";
import { HeroMedia } from "@/components/hero-media";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { ArticleCard } from "@/components/article-card";
import {
  getPosts,
  getProducts,
  getProjects,
  getServices,
  getSiteSettings,
} from "@/lib/api";

export default async function Home() {
  const [projects, services, products, blogPosts, siteConfig] = await Promise.all([
    getProjects(),
    getServices(),
    getProducts(),
    getPosts(),
    getSiteSettings(),
  ]);

  return (
    <>
      <section className="hero">
        <div className="hero-noise" aria-hidden="true" />
        <FluidCanvas />
        <div className="container hero-grid">
          <Reveal className="hero-copy">
            <div className="hero-identity">
              <div className="hero-avatar-wrap">
                <img
                  className="hero-avatar"
                  src={siteConfig.avatar.src}
                  alt={siteConfig.avatar.alt}
                />
                <span className="hero-avatar-ring" aria-hidden="true" />
              </div>
              <div>
                <p className="eyebrow">Independent digital studio</p>
                <div className="availability">
                  <span className="status-dot" />
                  {siteConfig.availability}
                </div>
              </div>
            </div>

            <h1>
              Digital work
              <br />
              <em>with presence.</em>
            </h1>

            <p className="hero-lede">
              Coralz is a personal digital home for products, polished
              interfaces, experiments, and useful things for the web.
            </p>

            <div className="hero-actions">
              <Magnetic><Button href="/projects">Explore the work</Button></Magnetic>
              <Magnetic><Button href="/about" variant="secondary">
                A little about me
              </Button>
            </div>

            <div className="hero-note">
              <span>SCROLL</span>
              <p>Move around. The interface responds to you.</p>
              <span className="scroll-line" aria-hidden="true" />
            </div>
          </Reveal>

          <Reveal className="hero-media-wrap" delay={120}>
            <HeroMedia />
          </Reveal>
        </div>
      </section>

      <Reveal>
        <section className="intro-strip">
          <div className="container intro-strip__grid">
            <span className="section-index">01 / The practice</span>
            <p>
              I work at the intersection of{" "}
              <strong>product thinking, visual design, and frontend engineering</strong>{" "}
              — making digital experiences feel considered from the first click
              to the last detail.
            </p>
          </div>
        </section>
      </Reveal>

      <section className="section section--work">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Selected work"
              title="Projects with a point of view"
            >
              <Button href="/projects" variant="text">
                View all projects
              </Button>
            </SectionHeading>
          </Reveal>

          <div className="project-scenes">
            {projects.map((project, index) => (
              <ProjectScene key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Reveal>
        <section className="statement-band">
          <div className="container statement-band__inner">
            <p className="eyebrow">02 / Design principle</p>
            <h2>
              Make it feel
              <br />
              <em>inevitable.</em>
            </h2>
            <p>
              Every motion, surface, transition, and word should make the next
              interaction feel natural.
            </p>
          </div>
        </section>
      </Reveal>

      <section className="section section--tint">
        <div className="container service-split">
          <Reveal>
            <p className="eyebrow">What I can help with</p>
            <h2>From a sharp idea to a shipped interface.</h2>
            <p className="body-large">
              A small, focused practice for brands and products that value
              craft, speed, and a clear point of view.
            </p>
            <Button href="/services">Explore services</Button>
          </Reveal>

          <Reveal delay={100}>
            <div className="service-list">
              {services.map((service, index) => (
                <Link key={service.slug} href="/services" className="service-row">
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                  </div>
                  <ArrowUpRight />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Small things, thoughtfully made"
              title="Products & resources"
            >
              <Button href="/products" variant="text">
                Browse products
              </Button>
            </SectionHeading>
          </Reveal>

          <div className="product-grid">
            {products.map((product, index) => (
              <Reveal key={product.slug} delay={index * 80}>
                <Link
                  href={`/products/${product.slug}`}
                  className="product-tile"
                >
                  <div className="product-tile__top">
                    <span>{product.type}</span>
                    <span>{product.availability}</span>
                  </div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <strong>{product.price}</strong>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--compact">
        <div className="container">
          <Reveal>
            <SectionHeading eyebrow="From the notebook" title="Latest writing">
              <Button href="/blog" variant="text">
                Read the journal
              </Button>
            </SectionHeading>
          </Reveal>

          <div className="article-grid">
            {blogPosts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 90}>
                <ArticleCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Reveal>
        <section className="cta-band">
          <div className="container cta-band__inner">
            <div>
              <p className="eyebrow">Have something worth making?</p>
              <h2>Let’s give it a clear shape.</h2>
            </div>
            <Button href="/contact">Start a conversation</Button>
          </div>
        </section>
      </Reveal>
    </>
  );
}
