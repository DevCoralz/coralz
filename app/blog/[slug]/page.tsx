import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/article-card";
import { ShareActions } from "@/components/share-actions";
import { getPosts, getPost } from "@/lib/api";


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = await getPost(slug);
  return item ? { title: item.title, description: item.excerpt } : { title: "Not found" };
}

export async function generateStaticParams() { const blogPosts = await getPosts(); return blogPosts.map((p) => ({ slug: p.slug })); }

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  const blogPosts = await getPosts();
  if (!post) notFound();
  return <div className="page"><article className="article-page"><header className="article-page__head"><p className="eyebrow">{post.category} · {post.readingTime}</p><h1>{post.title}</h1><p className="hero-lede">{post.excerpt}</p><div className="article-meta"><span>Coralz</span><span>{post.date}</span></div></header><div className="article-page__cover"><img src={post.cover} alt="" /></div><div className="article-page__body">{post.body.map((p, i) => <p key={i}>{p}</p>)}<ShareActions /></div></article><section className="section section--tint"><div className="container"><p className="eyebrow">Keep reading</p><h2>Related notes</h2><div className="article-grid">{blogPosts.filter(p => p.slug !== post.slug).map(p => <ArticleCard key={p.slug} post={p} />)}</div></div></section></div>;
}
