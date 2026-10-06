"use client";

import Image from "next/image";
import type { DragEvent, MouseEvent } from "react";

function prevent(event: MouseEvent | DragEvent) {
  event.preventDefault();
}

export default function CaseImage({
  src,
  alt,
  caption,
  className = "my-10 md:my-14",
  priority = false,
  width = 1280,
  height = 832,
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
}) {
  return (
    <figure className={`case-frame w-full select-none ${className}`} onContextMenu={prevent}>
      <div className="overflow-hidden rounded-[1.35rem] bg-[var(--image-bg)]">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          draggable={false}
          onContextMenu={prevent}
          onDragStart={prevent}
          className="h-auto w-full"
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-[13px] leading-6 text-faint">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
