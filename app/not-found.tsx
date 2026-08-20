import Link from "next/link";

export default function NotFound() {
  return <div className="not-found"><div><p className="eyebrow">404</p><h1>That page wandered off.</h1><p>The route exists in the design system, but this particular resource does not.</p><Link className="button button--primary" href="/">Back home →</Link></div></div>;
}
