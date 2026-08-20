import { ProjectBrowser } from "@/components/project-browser";
import { getProjects } from "@/lib/api";

export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Projects</p>
          <h1>Selected work, experiments, and systems.</h1>
          <p className="hero-lede">A considered archive of products and interfaces, with enough structure to grow into a CMS-driven case-study library.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <ProjectBrowser projects={projects} />
        </div>
      </section>
    </div>
  );
}
