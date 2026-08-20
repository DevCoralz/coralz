import { BlogBrowser } from "@/components/blog-browser";
import { getPosts } from "@/lib/api";

export default async function BlogPage() {
  const blogPosts = await getPosts();
  const featured = blogPosts[0];
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Journal</p>
          <h1>Notes on building, design, and the web.</h1>
          <p className="hero-lede">An editorial archive prepared for categories, tags, search, pagination, reading time, and a future CMS.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <article className="featured-article">
            <div className="featured-article__visual"><img src={featured.cover} alt="" /></div>
            <div className="featured-article__copy">
              <p className="eyebrow">Featured · {featured.category}</p>
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <a className="inline-link" href={`/blog/${featured.slug}`}>Read the feature →</a>
            </div>
          </article>
        </div>
      </section>
      <section className="section section--compact">
        <div className="container"><BlogBrowser posts={blogPosts} /></div>
      </section>
    </div>
  );
}
