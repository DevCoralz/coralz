"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import type { Project } from "@/lib/types";

export function ProjectScene({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frame = 0;

    const update = () => {
      const rect = element.getBoundingClientRect();
      const viewport = window.innerHeight;
      const progress = (viewport - rect.top) / (viewport + rect.height);
      const clamped = Math.max(0, Math.min(1, progress));
      element.style.setProperty("--scene-progress", String(clamped));
      frame = requestAnimationFrame(update);
    };

    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <article ref={ref} className="project-scene">
      <div className="project-scene__meta">
        <span>0{index + 1}</span>
        <span>{project.category}</span>
        <span>{project.year}</span>
      </div>

      <Link href={`/projects/${project.slug}`} className="project-scene__frame">
        <div className="project-scene__media">
          {project.image ? (
            <Image
              src={project.image.src}
              alt={project.image.alt}
              fill
              sizes="(max-width: 900px) 100vw, 90vw"
              className="project-scene__image"
            />
          ) : null}
          <div className="project-scene__veil" />
          <div className="project-scene__grid" />
          <span className="project-scene__cursor">VIEW CASE ↗</span>
        </div>

        <div className="project-scene__copy">
          <p>{project.description}</p>
          <h2>{project.name}</h2>
          <span>{project.category}</span>
        </div>
      </Link>
    </article>
  );
}
