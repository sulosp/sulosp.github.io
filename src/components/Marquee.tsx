"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const text = "DESIGN · CREATE · INNOVATE · CRAFT · ";

export default function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const width = track.scrollWidth / 2;

    gsap.to(track, {
      x: -width,
      duration: 20,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <div className="overflow-hidden border-y border-border py-5 sm:py-6 md:py-8">
      <div ref={trackRef} className="marquee-track flex w-max">
        <span className="marquee-text px-3 sm:px-4">{text.repeat(4)}</span>
        <span className="marquee-text px-3 sm:px-4" aria-hidden="true">
          {text.repeat(4)}
        </span>
      </div>
    </div>
  );
}
