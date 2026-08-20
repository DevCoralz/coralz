"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/lib/types";

export function ProjectBrowser({ projects }: { projects: Project[] }) {
  const categories = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => projects.filter((project) => {
    const matchesCategory = category === "All" || project.tags.includes(category);
    const haystack = `${project.title} ${project.summary} ${project.tags.join(" ")}`.toLowerCase();
    return matchesCategory && haystack.includes(query.toLowerCase().trim());
  }), [category, projects, query]);

  return (
    <>
      <div className="filter-bar" aria-label="Project filters">
        <span className="filter-label">Browse</span>
        <div className="filter-tabs" role="tablist" aria-label="Project categories">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={category === item}
              className={category === item ? "is-active" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <label className="filter-input">
          <span className="sr-only">Search projects</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects" />
        </label>
      </div>
      <p className="filter-result" aria-live="polite">{filtered.length} {filtered.length === 1 ? "project" : "projects"} shown</p>
      {filtered.length ? (
        <div className="project-grid project-grid--archive">{filtered.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
      ) : (
        <div className="empty-state"><span>Nothing matched.</span><p>Try another search or clear the category filter.</p><button className="button button--secondary" type="button" onClick={() => { setCategory("All"); setQuery(""); }}>Clear filters</button></div>
      )}
    </>
  );
}
