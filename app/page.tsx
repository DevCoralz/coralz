'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { AnimatedAvatar } from '@/components/animated-avatar';
import { HeroMedia } from '@/components/hero-media';
import { siteConfig } from '@/lib/data';

export default function Home() {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, margin: '-100px' });
  
  const springY = useSpring(0, { stiffness: 100, damping: 20 });
  const opacity = useTransform(springY, [0, 1], [0, 1]);
  const scale = useTransform(springY, [0, 1], [0.95, 1]);

  useEffect(() => {
    if (isInView) {
      springY.set(1);
    }
  }, [isInView, springY]);

  return (
    <div className="page">
      {/* Video Background */}
      <div className="video-bg">
        <video autoPlay loop muted playsInline>
          <source src="https://assets.mixkit.co/videos/preview/mixkit-dark-abstract-network-connections-27612-large.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Floating Orbs */}
      <div className="float-element float-element--1" />
      <div className="float-element float-element--2" />

      {/* Nav */}
      <nav className="nav">
        <div className="nav__logo">Coralz</div>
        <div className="nav__links">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="/contact" className="btn-primary" style={{ padding: '10px 20px', fontSize: '13px' }}>
          Let&apos;s Talk
        </a>
      </nav>

      {/* Hero */}
      <section className="hero" ref={heroRef}>
        <motion.div 
          className="hero__content"
          style={{ opacity, scale }}
        >
          <div className="hero__eyebrow">Independent Digital Studio</div>
          
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
            <AnimatedAvatar src={siteConfig.avatar.src} alt={siteConfig.avatar.alt} />
          </div>

          <h1>
            Build with clarity.<br />
            <em>Ship with character.</em>
          </h1>
          
          <p className="hero__subtitle">
            Coralz is the personal digital home of a builder making thoughtful products, polished interfaces, and useful things for the web.
          </p>
          
          <div className="hero__actions">
            <a href="#work" className="btn-primary">
              Explore the Work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 2l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#about" className="btn-secondary">
              About Me
            </a>
          </div>
        </motion.div>

        <HeroMedia />
      </section>

      {/* Intro Strip */}
      <section className="section" style={{ padding: '40px 0' }}>
        <div className="container">
          <div className="glass-card" style={{ padding: '40px 60px', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="section__eyebrow">The Practice</div>
            </div>
            <p style={{ fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 600, lineHeight: 1.3 }}>
              I work at the intersection of <span style={{ color: 'var(--accent)' }}>product thinking</span>, visual design, and frontend engineering — making digital experiences feel considered from the first click.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section" id="work">
        <div className="container">
          <div className="section__header">
            <div className="section__eyebrow">Selected Work</div>
            <h2>Projects with a point of view</h2>
          </div>
          
          <div className="grid grid--3">
            {[
              { title: 'Atlas Workspace', tag: 'Product System', desc: 'A calm operating layer for turning scattered work into a visible system.', color: '#6366f1' },
              { title: 'Signal Notes', tag: 'Knowledge Product', desc: 'An editorial notes surface for ideas that deserve more than a bookmark.', color: '#a855f7' },
              { title: 'Studio Commerce', tag: 'Commerce Foundation', desc: 'A premium storefront shell designed before the payment layer exists.', color: '#22c55e' }
            ].map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <div className="project-card">
                  <div className="project-card__visual" style={{ background: `linear-gradient(135deg, ${project.color}22 0%, ${project.color}44 100%)` }}>
                    <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center' }}>
                      <div style={{ fontSize: '64px', opacity: 0.3 }}>{['🎯', '📝', '🛒'][i]}</div>
                    </div>
                  </div>
                  <div className="project-card__content">
                    <div className="project-card__tag">{project.tag}</div>
                    <h3>{project.title}</h3>
                    <p>{project.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section" id="services" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div className="section__header">
            <div className="section__eyebrow">What I Can Help With</div>
            <h2>From a sharp idea to a shipped interface</h2>
          </div>
          
          <div className="grid grid--3">
            {[
              { num: '01', title: 'Product Builds', desc: 'Design and frontend engineering for thoughtful digital products.' },
              { num: '02', title: 'Brand Websites', desc: 'Distinctive web experiences for people and businesses that need more than a template.' },
              { num: '03', title: 'Frontend Sprint', desc: 'A focused implementation sprint to turn an existing product direction into a polished interface.' }
            ].map((service, i) => (
              <motion.div
                key={service.num}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="service-card">
                  <div className="service-card__number">{service.num}</div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Have something worth making?
        </motion.h2>
        <p>Let&apos;s give it a clear shape.</p>
        <a href="/contact" className="btn-primary" style={{ padding: '18px 40px', fontSize: '16px' }}>
          Start a Conversation
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 2l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div>© 2026 Coralz. All rights reserved.</div>
        <div style={{ display: 'flex', gap: '24px' }}>
          <a href="#">Twitter</a>
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
