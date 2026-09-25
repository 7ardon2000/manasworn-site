import type { CSSProperties } from "react";

import hero from "@/content/hero.json";

type Box = { left: number; top: number; width: number; height: number };
const at = (b: Box): CSSProperties => ({
  left: `${b.left}%`,
  top: `${b.top}%`,
  width: `${b.width}%`,
  height: `${b.height}%`,
});

// Fixed pseudo-random sparkles so the server render and every visit match.
const sparkles = Array.from({ length: 28 }, (_, i) => {
  const r = (n: number) => ((Math.sin(i * 12.9898 + n * 78.233) * 43758.5453) % 1 + 1) % 1;
  return {
    left: `${4 + r(1) * 92}%`,
    top: `${18 + r(2) * 74}%`,
    size: `${2 + r(3) * 3}px`,
    duration: `${5 + r(4) * 6}s`,
    delay: `${-r(5) * 11}s`,
    colour: r(6) > 0.7 ? "#c8a2ff" : "#9cc4ff",
  };
});

/** The three classes on the cover background, with the spells and sparkles moving (layers built by scripts/hero.py). */
export function HeroArt() {
  return (
    <div className="hero-art relative aspect-[2876/1620] h-full shrink-0 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_14%,#000_86%,transparent)]">
      <svg aria-hidden className="absolute size-0">
        <filter id="hero-flame" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.018 0.045" numOctaves="2" seed="3">
            <animate attributeName="baseFrequency" dur="7s" values="0.018 0.045;0.024 0.06;0.018 0.045" repeatCount="indefinite" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="9" />
        </filter>
      </svg>
      <img src="/assets/hero/base.jpg" alt="" width={2876} height={1620} className="absolute inset-0 size-full" />
      <img src="/assets/hero/fx.jpg" alt="" className="hero-stars absolute inset-0 size-full mix-blend-screen" />
      <img src="/assets/hero/mage-magic.png" alt="" className="hero-flame absolute" style={at(hero["mage-magic"])} />
      <img src="/assets/hero/magic-skull.png" alt="" className="hero-orb absolute" style={at(hero["magic-skull"])} />
      {sparkles.map((s, i) => (
        <span
          key={i}
          aria-hidden
          className="hero-sparkle absolute rounded-full"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            background: s.colour,
            boxShadow: `0 0 6px 1px ${s.colour}`,
            animationDuration: s.duration,
            animationDelay: s.delay,
          }}
        />
      ))}
    </div>
  );
}
