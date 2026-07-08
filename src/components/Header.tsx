"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  {
    label: "Work",
    href: "#work",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=700&h=700&fit=crop",
  },
  {
    label: "About",
    href: "#about",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=700&h=700&fit=crop",
  },
  {
    label: "Contact",
    href: "#contact",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=700&h=700&fit=crop",
  },
];

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    gsap.fromTo(
      header,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.3 },
    );
  }, []);

  useEffect(() => {
    const menu = menuRef.current;
    const links = linksRef.current;
    if (!menu || !links) return;

    const linkItems = links.querySelectorAll(".menu-item");

    if (menuOpen) {
      document.body.style.overflow = "hidden";
      gsap.to(menu, {
        autoAlpha: 1,
        pointerEvents: "auto",
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.fromTo(
        linkItems,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.15,
        },
      );
    } else {
      document.body.style.overflow = "";
      gsap.to(menu, {
        autoAlpha: 0,
        pointerEvents: "none",
        duration: 0.35,
        ease: "power2.in",
      });
      gsap.set(linkItems, { y: 60, opacity: 0 });
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const links = linksRef.current;
    if (!links) return;

    const items = gsap.utils.toArray<HTMLElement>(".menu-item-container");
    const cleanups: (() => void)[] = [];

    gsap.set(".menu-preview-image", { xPercent: -50, yPercent: -50, scale: 0.85 });

    items.forEach((el) => {
      const image = el.querySelector<HTMLImageElement>(".menu-preview-image");
      if (!image) return;

      let firstEnter = true;

      const setX = gsap.quickTo(image, "x", { duration: 0.4, ease: "power3" });
      const setY = gsap.quickTo(image, "y", { duration: 0.4, ease: "power3" });

      const align = (e: MouseEvent) => {
        if (firstEnter) {
          setX(e.clientX, e.clientX);
          setY(e.clientY, e.clientY);
          firstEnter = false;
        } else {
          setX(e.clientX);
          setY(e.clientY);
        }
      };

      const startFollow = () =>
        document.addEventListener("mousemove", align);
      const stopFollow = () =>
        document.removeEventListener("mousemove", align);

      const fade = gsap.fromTo(
        image,
        { autoAlpha: 0, scale: 0.85 },
        {
          autoAlpha: 1,
          scale: 1,
          ease: "power3.out",
          paused: true,
          duration: 0.25,
          onReverseComplete: stopFollow,
        },
      );

      const onEnter = (e: MouseEvent) => {
        firstEnter = true;
        fade.play();
        startFollow();
        align(e);
      };

      const onLeave = () => fade.reverse();

      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);

      cleanups.push(() => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
        stopFollow();
        fade.kill();
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        ref={headerRef}
        className="section-x fixed top-0 right-0 left-0 z-50 py-4 sm:py-5 md:py-6 lg:py-8"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a
            href="#"
            className="font-display text-xs font-medium tracking-[0.2em] uppercase sm:text-sm"
          >
            Mira Chen
          </a>

          <div className="flex items-center justify-end gap-2 sm:gap-3">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="menu-toggle relative z-60 flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-border-strong sm:h-11 sm:w-11"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span className={`menu-bar ${menuOpen ? "menu-bar--open" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      <div
        ref={menuRef}
        className="menu-overlay fixed inset-0 z-40 flex h-dvh w-full flex-col opacity-0 pointer-events-none"
        aria-hidden={!menuOpen}
      >
        <nav className="flex h-full w-full flex-col justify-center section-x">
          <ul ref={linksRef} className="w-full" role="list">
            {navLinks.map((link) => (
              <li key={link.href} className="menu-item-container w-full">
                <img
                  className="menu-preview-image"
                  src={link.image}
                  alt=""
                  draggable={false}
                />
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="menu-item group flex w-full items-center justify-between border-b border-border py-6 sm:py-8 md:py-10"
                >
                  <span className="font-display text-[clamp(2.5rem,8vw,5rem)] font-medium tracking-tight transition-colors duration-300 group-hover:text-muted">
                    {link.label}
                  </span>
                  <span className="text-xs tracking-[0.2em] text-faint uppercase transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={closeMenu}
            className="menu-item mt-6 inline-flex w-fit rounded-full border border-border-strong px-6 py-3 text-xs font-medium tracking-[0.15em] uppercase transition-colors hover:bg-invert-bg hover:text-invert-fg sm:mt-10"
          >
            Let&apos;s Talk
          </a>
        </nav>
      </div>
    </>
  );
}
