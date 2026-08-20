"use client";

import { useMemo, useState } from "react";
import { ArticleCard } from "@/components/article-card";
import type { Post } from "@/lib/types";

export function BlogBrowser({ posts }: { posts: Post[] }) {
  const categories = ["All", ...Array.from(new Set(posts.map((post) => post.category)))];
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => posts.filter((post) => {
    const matchesCategory = category === "All" || post.category === category;
    const haystack = `${post.title} ${post.excerpt} ${post.tags.join(" ")}`.toLowerCase();
    return matchesCategory && haystack.includes(query.toLowerCase().trim());
  }), [category, posts, query]);

  return (
    <>
      <div className="filter-bar" aria-label="Article filters">
        <span className="filter-label">Browse</span>
        <div className="filter-tabs" role="tablist" aria-label="Article categories">
          {categories.map((item) => (
            <button key={item} type="button" role="tab" aria-selected={category === item} className={category === item ? "is-active" : ""} onClick={() => setCategory(item)}>{item}</button>
          ))}
        </div>
        <label className="filter-input">
          <span className="sr-only">Search articles</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search notes" />
        </label>
      </div>
      <p className="filter-result" aria-live="polite">{filtered.length} {filtered.length === 1 ? "note" : "notes"} shown</p>
      {filtered.length ? (
        <div className="article-grid article-grid--archive">{filtered.map((post) => <ArticleCard key={post.slug} post={post} />)}</div>
      ) : (
        <div className="empty-state"><span>No notes found.</span><p>Try a different keyword or category.</p><button className="button button--secondary" type="button" onClick={() => { setCategory("All"); setQuery(""); }}>Clear filters</button></div>
      )}
    </>
  );
}
