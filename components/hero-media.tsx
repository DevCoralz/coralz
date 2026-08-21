'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';

export function HeroMedia() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 1.1]));

  return (
    <motion.div
      ref={ref}
      className="hero-media"
      style={{ y, scale }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-media__video"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connections-27611-large.mp4" type="video/mp4" />
      </video>
      <div className="hero-media__grid" />
      <div className="hero-media__caption">Coralz Studio</div>
    </motion.div>
  );
}
