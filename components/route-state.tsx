export function RouteLoading({ label = "Loading" }: { label?: string }) {
  return <div className="route-state" role="status" aria-live="polite"><span className="skeleton skeleton--wide" /><span className="skeleton skeleton--title" /><span className="skeleton skeleton--line" /><span className="skeleton skeleton--line skeleton--short" /><span className="route-state__label">{label}…</span></div>;
}

export function RouteError({ title = "Something needs another look.", onRetry }: { title?: string; onRetry?: () => void }) {
  return <div className="route-state route-state--error" role="alert"><p className="eyebrow">Unexpected error</p><h1>{title}</h1><p>The interface is still here, but this content could not be prepared.</p>{onRetry && <button className="button button--secondary" type="button" onClick={onRetry}>Try again</button>}</div>;
}
