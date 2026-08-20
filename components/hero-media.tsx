import Image from "next/image";
import { siteConfig } from "@/lib/data";

export function HeroMedia() {
  return (
    <div className="hero-media" aria-label={siteConfig.heroMedia.alt}>
      <div className="hero-media__grid" />
      <Image src={siteConfig.heroMedia.src} alt={siteConfig.heroMedia.alt} fill priority sizes="(max-width: 900px) 100vw, 46vw" />
      <div className="hero-media__caption"><span className="status-dot" /> Available for selected work</div>
    </div>
  );
}
