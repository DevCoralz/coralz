import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/button";
import { ProjectCard } from "@/components/project-card";
import { getProjects, getProject } from "@/lib/api";


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = await getProject(slug);
  return item ? { title: `${item.title} — Project`, description: item.summary } : { title: "Not found" };
}

export async function generateStaticParams() { const projects = await getProjects(); return projects.map((p) => ({ slug: p.slug })); }

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProject(slug);
  const projects = await getProjects();
  if (!project) notFound();
  const related = projects.filter(p => p.slug !== project.slug).slice(0, 2);
  return <div className="page"><section className={`case-hero visual--${project.accent}`}><div className="container case-hero__inner"><p className="eyebrow">{project.eyebrow} · {project.year}</p><h1>{project.title}</h1><p className="hero-lede">{project.summary}</p><div className="case-hero__orb" /></div></section>
    <section className="section"><div className="container case-layout"><article className="case-content"><h2>Overview</h2><p className="body-large">{project.description}</p><div className="case-block"><h3>Problem</h3><p>{project.challenge}</p></div><div className="case-block"><h3>Solution</h3><p>{project.solution}</p></div><div className="case-block"><h3>Results</h3><ul className="check-list">{project.results.map(x => <li key={x}>✓ {x}</li>)}</ul></div><div className="case-block"><h3>Features</h3><div className="case-feature-grid">{project.features.map((x, i) => <div key={x}><span>0{i+1}</span><strong>{x}</strong></div>)}</div></div>
<div className="case-block"><h3>Visual notes</h3><div className="case-gallery"><div className="case-shot case-shot--large">Interface overview</div><div className="case-shot">Detail view</div><div className="case-shot">System state</div></div></div>
<div className="case-block"><h3>Architecture</h3><div className="tag-cloud">{project.architecture.map(x => <span key={x}>{x}</span>)}</div></div>
<div className="case-block"><h3>Links</h3><div className="case-links">{project.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div></div></article><aside className="case-aside"><div><span className="eyebrow">Status</span><strong>{project.status}</strong></div><div><span className="eyebrow">Technologies</span><div className="tag-cloud">{project.tags.map(x => <span key={x}>{x}</span>)}</div></div><div><span className="eyebrow">Key features</span><ul>{project.features.map(x => <li key={x}>{x}</li>)}</ul></div><Button href="/contact">Discuss a project</Button></aside></div></section>
    <section className="section section--tint"><div className="container"><div className="section-heading"><div><p className="eyebrow">Keep exploring</p><h2>Related projects</h2></div></div><div className="project-grid">{related.map(p => <ProjectCard key={p.slug} project={p} />)}</div></div></section>
  </div>;
}
