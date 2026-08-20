import Link from "next/link";
import { Post } from "@/lib/types";

export function ArticleCard({ post }: { post: Post }) {
  return (
    <article className="article-card">
      <Link href={`/blog/${post.slug}`} className="article-cover"><img src={post.cover} alt="" /></Link>
      <div className="article-meta"><span>{post.category}</span><span>{post.readingTime}</span></div>
      <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
      <p>{post.excerpt}</p>
      <div className="article-date">{post.date}</div>
    </article>
  );
}
