"use client";

import { useState } from "react";

export function ShareActions() {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch { setCopied(false); }
  }
  function share(target: "x" | "linkedin") {
    const url = encodeURIComponent(window.location.href);
    const destination = target === "x" ? `https://x.com/intent/post?url=${url}` : `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    window.open(destination, "_blank", "noopener,noreferrer");
  }
  return <div className="share-row"><span>Share</span><button type="button" onClick={copy}>{copied ? "Copied" : "Copy link"}</button><button type="button" onClick={() => share("x")}>X</button><button type="button" onClick={() => share("linkedin")}>LinkedIn</button></div>;
}
