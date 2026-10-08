"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const lines = ["I craft easy,", "human-centric", "digital experiences."];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const inners = sectionRef.current?.querySelectorAll(".hero-line-inner");
        const rest = sectionRef.current?.querySelectorAll(".hero-fade");
        if (!inners) return;

        gsap.set(inners, { yPercent: 110 });
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.to(inners, { yPercent: 0, duration: 1.05, stagger: 0.1 }, 0.15);
        if (rest) {
          tl.fromTo(
            rest,
            { y: 18, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 },
            0.45,
          );
        }
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="hero-section section-x pb-16 md:pb-20">
      <div className="content text-center">
        <h1 className="mx-auto text-[clamp(2.1rem,5.6vw,4.6rem)] leading-[1.16] font-medium tracking-[-0.035em]">
          {lines.map((line) => (
            <span key={line} className="block overflow-hidden py-[0.08em]">
              <span className="hero-line-inner block">{line}</span>
            </span>
          ))}
        </h1>

        <p className="hero-fade mx-auto mt-8 max-w-xl text-[15px] leading-7 text-muted sm:mt-10 sm:text-base sm:leading-8">
          Finding the balance between aesthetic beauty and technical performance. I
          create future-proof identities, scalable systems and human-friendly digital
          products.
        </p>
      </div>
    </section>
  );
}
