"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const canHover = window.matchMedia("(hover: hover)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || reduced) return;

    const xDot = gsap.quickTo(dot, "x", { duration: 0.16, ease: "power3.out" });
    const yDot = gsap.quickTo(dot, "y", { duration: 0.16, ease: "power3.out" });
    const xRing = gsap.quickTo(ring, "x", { duration: 0.38, ease: "power3.out" });
    const yRing = gsap.quickTo(ring, "y", { duration: 0.38, ease: "power3.out" });

    const move = (event: MouseEvent) => {
      xDot(event.clientX);
      yDot(event.clientY);
      xRing(event.clientX);
      yRing(event.clientY);
    };

    const onOver = (event: MouseEvent) => {
      const hit = (event.target as Element | null)?.closest("a, button, [data-cursor]");
      if (hit) {
        gsap.to(ring, { scale: 1.85, opacity: 0.45, duration: 0.28 });
        gsap.to(dot, { scale: 0.45, duration: 0.28 });
      }
    };

    const onOut = (event: MouseEvent) => {
      const hit = (event.target as Element | null)?.closest("a, button, [data-cursor]");
      if (hit) {
        gsap.to(ring, { scale: 1, opacity: 1, duration: 0.28 });
        gsap.to(dot, { scale: 1, duration: 0.28 });
      }
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
