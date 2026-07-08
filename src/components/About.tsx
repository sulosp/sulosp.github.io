"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  "User Research",
  "Wireframing",
  "Prototyping",
  "Design Systems",
  "Interaction Design",
  "Visual Design",
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll(".reveal");
    elements.forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          delay: i * 0.08,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
          },
        },
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-x section-y relative"
    >
      <div className="mx-auto grid max-w-7xl gap-10 sm:gap-14 md:grid-cols-2 md:gap-16 lg:gap-24">
        <div className="reveal">
          <span className="mb-3 block text-[10px] tracking-[0.25em] text-muted uppercase sm:mb-4 sm:text-xs sm:tracking-[0.3em]">
            About
          </span>
          <h2 className="font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Designing with intention &amp; empathy
          </h2>
        </div>

        <div className="reveal flex flex-col gap-5 sm:gap-6 md:gap-8">
          <p className="text-sm leading-relaxed text-subtle sm:text-base md:text-lg">
            I&apos;m Sulochana — a UI/UX designer with 7+ years of experience shaping
            digital products for startups and established brands. I believe great
            design lives at the intersection of clarity, beauty, and human
            understanding.
          </p>
          <p className="text-sm leading-relaxed text-subtle sm:text-base md:text-lg">
            From early-stage discovery to polished design systems, I partner
            with teams to turn complex problems into intuitive experiences that
            resonate.
          </p>

          <div className="flex flex-wrap gap-2 pt-2 sm:gap-3 sm:pt-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border px-3 py-1.5 text-[11px] tracking-wide text-muted sm:px-4 sm:py-2 sm:text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
