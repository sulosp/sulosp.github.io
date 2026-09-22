"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { navLinks, site } from "@/data/site";
import ThemeToggle from "./ThemeToggle";

gsap.registerPlugin(useGSAP);

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const navHref = (href: string) => {
    if (href.startsWith("/")) return href;
    return pathname === "/" ? href : `/${href}`;
  };
  const isActive = (href: string) =>
    href.startsWith("/") && (pathname === href || pathname.startsWith(`${href}/`));

  useGSAP(
    () => {
      const header = headerRef.current;
      if (!header) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          header,
          { y: -16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.15 },
        );
      });
    },
    { scope: headerRef },
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  const close = () => setOpen(false);
  const contactHref = navHref("#contact");
  const mobileCta =
    mounted && !open
      ? createPortal(
          <a href={contactHref} className="mobile-project-cta btn-primary">
            Start a project
          </a>,
          document.body,
        )
      : null;

  return (
    <>
      <header
        ref={headerRef}
        className="section-x fixed top-0 right-0 left-0 z-50 bg-background py-5 md:py-6"
      >
        <div className="content flex items-center justify-between gap-6">
          <a href="/" className="text-[15px] font-semibold tracking-tight lowercase">
            {site.wordmark}
          </a>

          <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={navHref(link.href)}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`text-[13.5px] hover:text-foreground ${isActive(link.href) ? "text-foreground" : "text-subtle"}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <ThemeToggle />
            <span className="contents max-lg:hidden">
              <a href={contactHref} className="btn-primary rounded-[50px]">
                Start a project
              </a>
            </span>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-[50px] lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">Menu</span>
              <span className="relative block h-3.5 w-4">
                <span
                  className={`absolute left-0 h-px w-4 bg-foreground transition ${open ? "top-1.5 rotate-45" : "top-0.5"}`}
                />
                <span
                  className={`absolute left-0 h-px w-4 bg-foreground transition ${open ? "top-1.5 -rotate-45" : "top-3"}`}
                />
              </span>
            </button>
          </div>
        </div>

        {open ? (
          <nav
            className="content mt-5 flex flex-col gap-1 border-t border-border pt-5 pb-3 lg:hidden"
            aria-label="Mobile"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={navHref(link.href)}
                onClick={close}
                aria-current={isActive(link.href) ? "page" : undefined}
                className="py-3 text-lg font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>
        ) : null}
      </header>
      {mobileCta}
    </>
  );
}
