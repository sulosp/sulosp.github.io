"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects, type Project } from "@/data/site";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function GalleryMedia({ project }: { project: Project }) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt=""
        fill
        className="object-cover"
        sizes="80vw"
      />
    );
  }

  return (
    <div className="flex h-full flex-col justify-end p-6">
      <p className="text-[1.65rem] leading-tight font-medium tracking-[-0.03em]">{project.title}</p>
    </div>
  );
}

export default function WorkGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);

        gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            start: "top top",
            end: () => `+=${distance()}`,
          },
        });

        track.querySelectorAll("img").forEach((img) => {
          if (!img.complete) {
            img.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
          }
        });

        requestAnimationFrame(() => ScrollTrigger.refresh());
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="work-gallery relative h-screen overflow-hidden"
      aria-label="Selected work"
    >
      <div
        ref={trackRef}
        className="work-gallery-track flex h-full w-max items-center gap-6 pr-[clamp(1.5rem,5.5vw,6rem)] pl-[clamp(1.5rem,5.5vw,6rem)] will-change-transform md:gap-10"
      >
        <div className="flex h-[70vh] w-[min(78vw,28rem)] shrink-0 flex-col justify-end pb-2">
          <p className="text-[13px] tracking-[0.18em] text-muted uppercase">Work</p>
          <h2 className="mt-4 max-w-[12ch] text-[clamp(1.85rem,4vw,3.15rem)] leading-[1.16] font-medium tracking-[-0.035em]">
            A few projects I am proud of.
          </h2>
          <a
            href="/work"
            className="mt-8 inline-flex w-fit text-[13.5px] text-subtle hover:text-foreground"
          >
            View all work →
          </a>
        </div>

        {projects.map((project) => {
          const card = (
            <>
              <div className="media-frame media-hover relative h-[70vh] w-full overflow-hidden">
                <GalleryMedia project={project} />
              </div>
              <div className="mt-4 flex items-end justify-between gap-4">
                <h3 className="shrink-0 text-[17px] font-semibold tracking-[-0.02em]">{project.title}</h3>
                <p className="text-right text-[12px] leading-5 tracking-[0.04em] text-faint uppercase">
                  {project.tools.join(" · ")}
                </p>
              </div>
            </>
          );

          return (
            <article
              key={project.title}
              data-cursor
              className="w-[min(78vw,680px)] shrink-0"
            >
              {project.slug ? (
                <a href={`/work/${project.slug}`} className="block">
                  {card}
                </a>
              ) : (
                card
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
