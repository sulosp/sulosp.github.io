"use client";

import { useCallback, useEffect, useId, useRef } from "react";
import gsap from "gsap";

interface HeroTextProps {
  text: string;
  className?: string;
}

export default function HeroText({ text, className = "" }: HeroTextProps) {
  const filterId = useId().replace(/:/g, "");
  const lineRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLHeadingElement>(null);
  const turbulenceRef = useRef<SVGFETurbulenceElement>(null);
  const displacementRef = useRef<SVGFEDisplacementMapElement>(null);
  const bgOffsetRef = useRef(0);

  const syncCharBackgrounds = useCallback(() => {
    const inner = innerRef.current;
    if (!inner) return;

    const chars = inner.querySelectorAll<HTMLElement>(".hero-char");
    const lineWidth = inner.offsetWidth;
    if (lineWidth === 0) return;

    const bgWidth = lineWidth * 1.6;

    chars.forEach((char) => {
      const x = -char.offsetLeft + bgOffsetRef.current;
      char.style.backgroundSize = `${bgWidth}px auto`;
      char.style.backgroundPosition = `${x}px center`;
    });
  }, []);

  useEffect(() => {
    const line = lineRef.current;
    const mask = maskRef.current;
    const inner = innerRef.current;
    const turbulence = turbulenceRef.current;
    const displacement = displacementRef.current;
    if (!line || !mask || !inner || !turbulence || !displacement) return;

    const canHover = window.matchMedia("(hover: hover)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const liquidTl = gsap.timeline({ paused: true });
    liquidTl.to(
      displacement,
      { attr: { scale: 38 }, duration: 0.65, ease: "power3.out" },
      0,
    );
    liquidTl.to(
      turbulence,
      { attr: { baseFrequency: "0.035 0.1" }, duration: 0.65, ease: "power3.out" },
      0,
    );

    const initBackgrounds = () => {
      bgOffsetRef.current = 0;
      syncCharBackgrounds();
    };

    document.fonts.ready.then(initBackgrounds);
    window.addEventListener("resize", syncCharBackgrounds);

    const chars = inner.querySelectorAll<HTMLElement>(".hero-char");
    const cleanups: (() => void)[] = [];

    const panBackground = (offset: number, duration = 0.5) => {
      bgOffsetRef.current = offset;
      chars.forEach((char) => {
        const lineWidth = inner.offsetWidth;
        const bgWidth = lineWidth * 1.6;
        const x = -char.offsetLeft + offset;
        gsap.to(char, {
          backgroundPosition: `${x}px center`,
          duration,
          ease: "power2.out",
          overwrite: "auto",
        });
        char.style.backgroundSize = `${bgWidth}px auto`;
      });
    };

    if (canHover && !reducedMotion) {
      chars.forEach((char) => {
        const lift = () => {
          gsap.to(char, {
            y: -2,
            duration: 0.45,
            ease: "power3.out",
            overwrite: "auto",
          });
        };

        const reset = () => {
          gsap.to(char, {
            y: 0,
            duration: 0.45,
            ease: "power3.out",
            overwrite: "auto",
          });
        };

        char.addEventListener("mouseenter", lift);
        char.addEventListener("mouseleave", reset);

        cleanups.push(() => {
          char.removeEventListener("mouseenter", lift);
          char.removeEventListener("mouseleave", reset);
        });
      });

      const handleLineEnter = () => {
        line.classList.add("hero-text-line--hover");
        liquidTl.play();
        panBackground((inner.offsetWidth * 1.6 - inner.offsetWidth) * 0.15, 0.8);
      };

      const handleLineLeave = () => {
        line.classList.remove("hero-text-line--hover");
        liquidTl.reverse();
        panBackground(0, 0.6);
        gsap.to(chars, {
          y: 0,
          skewX: 0,
          scaleY: 1,
          duration: 0.45,
          ease: "power3.out",
          stagger: 0.012,
        });
      };

      const handleLineMove = (e: MouseEvent) => {
        const rect = line.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const lineWidth = inner.offsetWidth;
        const bgWidth = lineWidth * 1.6;
        const maxOffset = bgWidth - lineWidth;
        const offset = (mouseX / lineWidth) * maxOffset * 0.5;

        panBackground(offset, 0.35);

        chars.forEach((char) => {
          const charRect = char.getBoundingClientRect();
          const charCenter = charRect.left + charRect.width / 2 - rect.left;
          const distance = Math.abs(mouseX - charCenter);
          const influence = Math.max(0, 1 - distance / 140);

          gsap.to(char, {
            skewX: influence * 6 * (mouseX > charCenter ? -1 : 1),
            scaleY: 1 + influence * 0.08,
            duration: 0.35,
            ease: "power2.out",
            overwrite: "auto",
          });
        });
      };

      line.addEventListener("mouseenter", handleLineEnter);
      line.addEventListener("mouseleave", handleLineLeave);
      line.addEventListener("mousemove", handleLineMove);

      cleanups.push(() => {
        line.removeEventListener("mouseenter", handleLineEnter);
        line.removeEventListener("mouseleave", handleLineLeave);
        line.removeEventListener("mousemove", handleLineMove);
      });
    }

    cleanups.push(() => {
      window.removeEventListener("resize", syncCharBackgrounds);
      liquidTl.kill();
    });

    return () => cleanups.forEach((fn) => fn());
  }, [text, syncCharBackgrounds]);

  return (
    <div ref={lineRef} className={`hero-text-line ${className}`}>
      <svg className="absolute h-0 w-0" aria-hidden="true">
        <defs>
          <filter
            id={filterId}
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feTurbulence
              ref={turbulenceRef}
              type="fractalNoise"
              baseFrequency="0.008 0.02"
              numOctaves="3"
              seed="4"
              result="noise"
            />
            <feDisplacementMap
              ref={displacementRef}
              in="SourceGraphic"
              in2="noise"
              scale="0"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <div
        ref={maskRef}
        className="hero-text-mask"
        style={{ filter: `url(#${filterId})` }}
      >
        <h1 ref={innerRef} className="hero-text-inner">
          {text.split("").map((char, i) => (
            <span key={`${char}-${i}`} className="hero-char inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
}
