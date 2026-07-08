"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import HeroText from "./HeroText";

const heroLines = ["CRAFTING", "DIGITAL", "EXPERIENCES"];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const subtitle = subtitleRef.current;
    const body = bodyRef.current;
    const scroll = scrollRef.current;
    if (!section || !subtitle || !body || !scroll) return;

    const lines = section.querySelectorAll<HTMLElement>(".hero-text-inner");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      if (reducedMotion) {
        gsap.set([subtitle, lines, body, scroll], { opacity: 1, y: 0, yPercent: 0 });
        return;
      }

      const run = () => {
        gsap.set(lines, { yPercent: 105, opacity: 0 });

        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

        tl.fromTo(
          subtitle,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          0.25,
        );
        tl.to(
          lines,
          { yPercent: 0, opacity: 1, stagger: 0.13, duration: 1.15 },
          0.45,
        );
        tl.fromTo(
          body,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.85 },
          0.85,
        );
        tl.fromTo(scroll, { opacity: 0 }, { opacity: 1, duration: 0.6 }, 1.25);
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

      <div className="relative z-10 flex w-full max-w-7xl flex-col items-center text-center">
        <p
          ref={subtitleRef}
          className="mb-6 max-w-xs text-[10px] font-medium tracking-[0.2em] text-subtle uppercase sm:mb-8 sm:max-w-none sm:text-xs sm:tracking-[0.3em] md:mb-12 md:tracking-[0.35em]"
        >
          UI / UX Designer — Based in Berlin
        </p>

        <div className="hero-text-group w-full px-[clamp(0rem,1vw,0.5rem)]">
          {heroLines.map((line, i) => (
            <HeroText
              key={line}
              text={line}
              className={i < heroLines.length - 1 ? "mb-1 sm:mb-2 md:mb-4" : ""}
            />
          ))}
        </div>

        <p
          ref={bodyRef}
          className="mt-8 max-w-sm px-2 text-sm leading-relaxed text-muted sm:mt-12 sm:max-w-md sm:px-0 md:mt-16 md:max-w-lg md:text-base"
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
