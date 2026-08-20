import { Button } from "@/components/button";
import { getTools } from "@/lib/api";

export default async function ToolsPage() {
  const tools = await getTools();
  return <div className="page"><section className="page-hero"><div className="container"><p className="eyebrow">Tools & experiments</p><h1>A workshop for useful curiosities.</h1><p className="hero-lede">A prepared space for AI tools, developer utilities, experiments, and focused software. The route is ready before the tools arrive.</p></div></section>
    <section className="section"><div className="container tool-list">{tools.map((tool) => <article key={tool.name}><span>{tool.number}</span><div><p className="eyebrow">{tool.status}</p><h2>{tool.name}</h2><p>{tool.description}</p></div><Button href="/contact" variant="text">Notify me</Button></article>)}</div></section>
    <section className="section section--tint"><div className="container narrow"><p className="eyebrow">Architecture</p><h2>Built to become a real tools area.</h2><p className="body-large">Future tool records can arrive from the same backend boundary as projects and products, while individual tools can become their own routes without restructuring the public shell.</p></div></section>
  </div>;
}
