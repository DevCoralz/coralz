import Link from "next/link";
import { Project } from "@/lib/types";
import { ArrowUpRight } from "./icons";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article className={`project-card ${featured ? "project-card--featured" : ""}`}>
      <Link href={`/projects/${project.slug}`} className={`project-visual visual--${project.accent}`}>
        <span className="visual-kicker">{project.eyebrow}</span>
        <span className="visual-number">{project.year}</span>
        <span className="visual-orb" />
      </Link>
      <div className="project-card__body">
        <div className="project-card__meta"><span>{project.status}</span><span>{project.tags.slice(0, 2).join(" · ")}</span></div>
        <h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3>
        <p>{project.summary}</p>
        <Link className="inline-link" href={`/projects/${project.slug}`}>View case study <ArrowUpRight /></Link>
      </div>
    </article>
  );
}
