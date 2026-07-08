"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      section.querySelector(".footer-content"),
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      },
    );
  }, []);

  return (
    <footer
      ref={sectionRef}
      id="contact"
      className="section-x section-y relative"
    >
      <div className="footer-content mx-auto max-w-7xl">
        <span className="mb-4 block text-[10px] tracking-[0.25em] text-muted uppercase sm:mb-6 sm:text-xs sm:tracking-[0.3em]">
          Get in Touch
        </span>

        <a
          href="mailto:hello@sulochanapeiris.design"
          className="font-display text-[clamp(1.75rem,8vw,5rem)] font-medium tracking-tight break-words transition-colors hover:text-muted"
        >
          hello@sulochanapeiris.design
        </a>

        <div className="mt-12 flex flex-col justify-between gap-6 border-t border-border pt-8 sm:mt-16 sm:gap-8 sm:pt-10 md:mt-20 md:flex-row md:items-center">
          <div className="flex flex-wrap gap-5 sm:gap-8">
            {["Dribbble", "LinkedIn", "Twitter"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-[10px] tracking-[0.15em] text-muted uppercase transition-colors hover:text-foreground sm:text-xs"
              >
                {social}
              </a>
            ))}
          </div>

          <p className="text-[10px] text-faint sm:text-xs">
            &copy; {new Date().getFullYear()} Sulochana Peiris. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
