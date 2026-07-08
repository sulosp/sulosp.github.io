"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Aurora Finance",
    category: "Product Design",
    year: "2025",
    color: "#1a1a2e",
    accent: "#e94560",
  },
  {
    title: "Solace Health",
    category: "UX Research & UI",
    year: "2025",
    color: "#0f3460",
    accent: "#53d8c6",
  },
  {
    title: "Forma Studio",
    category: "Brand & Web Design",
    year: "2024",
    color: "#2b2d42",
    accent: "#f4a261",
  },
  {
    title: "Nexus Platform",
    category: "Design System",
    year: "2024",
    color: "#1b263b",
    accent: "#778da9",
  },
];

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const grid = gridRef.current;
    if (!section || !heading || !grid) return;

    gsap.fromTo(
      heading,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heading,
          start: "top 85%",
        },
      },
    );

    const cards = grid.querySelectorAll(".work-card");
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        },
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="section-x section-y relative"
    >
      <div className="mx-auto max-w-7xl">
        <div
          ref={headingRef}
          className="mb-12 flex items-end justify-between sm:mb-16 md:mb-24 lg:mb-32"
        >
          <div>
            <span className="mb-3 block text-[10px] tracking-[0.25em] text-muted uppercase sm:mb-4 sm:text-xs sm:tracking-[0.3em]">
              Selected Work
            </span>
            <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Projects
            </h2>
          </div>
          <span className="text-xs text-faint sm:text-sm md:text-base">04</span>
        </div>

        <div
          ref={gridRef}
          className="grid gap-4 sm:gap-6 md:grid-cols-2 md:gap-8"
        >
          {projects.map((project) => (
            <article
              key={project.title}
              className="work-card group relative overflow-hidden rounded-xl sm:rounded-2xl"
              style={{ backgroundColor: project.color }}
            >
              <div className="flex aspect-[4/3] flex-col justify-between p-5 sm:p-7 md:p-8 lg:p-10">
                <div className="flex items-start justify-between gap-4">
                  <span
                    className="inline-block rounded-full px-2.5 py-1 text-[9px] tracking-[0.12em] uppercase sm:px-3 sm:text-[10px] sm:tracking-[0.15em]"
                    style={{
                      backgroundColor: `${project.accent}20`,
                      color: project.accent,
                    }}
                  >
                    {project.category}
                  </span>
                  <span className="shrink-0 text-[10px] text-white/30 sm:text-xs">
                    {project.year}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-xl font-medium tracking-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-2xl md:text-3xl">
                    {project.title}
                  </h3>
                  <div
                    className="mt-3 h-px w-0 transition-all duration-500 group-hover:w-full sm:mt-4"
                    style={{ backgroundColor: project.accent }}
                  />
                </div>
              </div>

              <div
                className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40 sm:h-40 sm:w-40"
                style={{ backgroundColor: project.accent }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
