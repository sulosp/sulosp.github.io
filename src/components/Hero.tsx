"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import HeroText from "./HeroText";

const heroLines = ["CRAFTING", "DIGITAL", "EXPERIENCES"];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const body = bodyRef.current;
    const scroll = scrollRef.current;
    if (!section || !body || !scroll) return;

    const lines = section.querySelectorAll<HTMLElement>(".hero-text-inner");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      if (reducedMotion) {
        gsap.set([lines, body, scroll], { opacity: 1, y: 0, yPercent: 0 });
        return;
      }

      const run = () => {
        gsap.set(lines, { yPercent: 105, opacity: 0 });

        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

        tl.to(
          lines,
          { yPercent: 0, opacity: 1, stagger: 0.13, duration: 1.15 },
          0.25,
        );
        tl.fromTo(
          body,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.85 },
          0.65,
        );
        tl.fromTo(scroll, { opacity: 0 }, { opacity: 1, duration: 0.6 }, 1.05);
      };

      document.fonts.ready.then(run);
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-x relative flex min-h-dvh flex-col items-center justify-center pt-28 pb-20 sm:pt-32 sm:pb-24 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32"
    >
      <div className="hero-glow" aria-hidden="true" />

      <div className="relative z-10 flex w-full flex-col items-center text-center">
        <div className="hero-text-group w-full px-[clamp(0rem,1vw,0.5rem)]">
          <HeroText lines={heroLines} />
        </div>

        <p
          ref={bodyRef}
          className="mx-auto mt-8 max-w-sm px-2 text-sm leading-relaxed text-muted sm:mt-12 sm:max-w-md sm:px-0 md:mt-16 md:max-w-lg md:text-base"
        >
          I design interfaces that feel inevitable — blending research, motion,
          and craft to build products people love to use.
        </p>
      </div>

      <div
        ref={scrollRef}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 sm:bottom-8 sm:gap-3 md:bottom-10"
      >
        <span className="text-[10px] tracking-[0.3em] text-faint uppercase">
          Scroll
        </span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
