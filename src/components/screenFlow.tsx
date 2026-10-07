"use client";

import { useEffect, useId, useRef, type DragEvent, type MouseEvent } from "react";
import { createPortal } from "react-dom";

export type Screen = {
  id: string;
  label: string;
  src: string;
  alt: string;
};

function prevent(event: MouseEvent | DragEvent) {
  event.preventDefault();
}

export function Stem() {
  return <span className="mx-auto block h-6 w-px bg-border" aria-hidden="true" />;
}

export function Arrow() {
  return (
    <span
      className="flex h-[10.625rem] items-center justify-center text-[13px] text-faint"
      aria-hidden="true"
    >
      →
    </span>
  );
}

export function ScreenThumb({
  screen,
  onOpen,
}: {
  screen: Screen;
  onOpen: (screen: Screen) => void;
}) {
  return (
    <button type="button" onClick={() => onOpen(screen)} className="group w-[8.5rem] text-left">
      <span className="block aspect-[4/5] overflow-hidden rounded-xl border border-border bg-image-bg transition-colors group-hover:border-foreground group-focus-visible:border-foreground">
        <img
          src={screen.src}
          alt=""
          width={448}
          height={560}
          draggable={false}
          onContextMenu={prevent}
          onDragStart={prevent}
          className="h-full w-full object-cover object-top"
        />
      </span>
      <span className="mt-2 block text-center text-[12px] tracking-[0.08em] text-muted uppercase">
        {screen.label}
      </span>
    </button>
  );
}

export function ScreenLightbox({
  screens,
  active,
  onChange,
}: {
  screens: Screen[];
  active: Screen | null;
  onChange: (screen: Screen | null) => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!active) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onChange(null);
    };

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, onChange]);

  if (!active) return null;

  const index = screens.findIndex((screen) => screen.id === active.id);
  const previous = screens[index - 1];
  const next = screens[index + 1];

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/75 p-4 sm:p-8"
      onClick={() => onChange(null)}
      data-lenis-prevent
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        data-lenis-prevent
        className="relative max-h-[calc(100dvh-2rem)] w-full max-w-3xl overflow-y-auto rounded-[1.35rem] bg-background sm:max-h-[calc(100dvh-4rem)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-border bg-background/95 px-4 py-3 backdrop-blur sm:px-5">
          <p id={titleId} className="text-[13px] tracking-[0.12em] text-muted uppercase">
            {active.label}
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-full border border-border px-3 py-1.5 text-[13px] text-foreground hover:border-foreground disabled:opacity-40"
              disabled={!previous}
              onClick={() => previous && onChange(previous)}
            >
              Prev
            </button>
            <button
              type="button"
              className="rounded-full border border-border px-3 py-1.5 text-[13px] text-foreground hover:border-foreground disabled:opacity-40"
              disabled={!next}
              onClick={() => next && onChange(next)}
            >
              Next
            </button>
            <button
              ref={closeRef}
              type="button"
              className="rounded-full border border-foreground px-3.5 py-1.5 text-[13px] text-foreground hover:bg-foreground hover:text-background"
              onClick={() => onChange(null)}
            >
              Close
            </button>
          </div>
        </div>
        <img
          src={active.src}
          alt={active.alt}
          draggable={false}
          onContextMenu={prevent}
          onDragStart={prevent}
          className="h-auto w-full select-none"
        />
      </div>
    </div>,
    document.body,
  );
}
