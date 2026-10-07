"use client";

import { useState } from "react";
import Image from "next/image";
import { projects, workCategories, type Project, type WorkCategoryId } from "@/data/site";
import Reveal from "./Reveal";

const filters = [{ id: "all", label: "All" }, ...workCategories] as const;

function categoryShort(id: WorkCategoryId) {
  return workCategories.find((category) => category.id === id)?.short ?? id;
}

function ProjectMedia({ project, priority = false }: { project: Project; priority?: boolean }) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={`${project.title} — UI design`}
        fill
        priority={priority}
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 540px"
      />
    );
  }

  return (
    <div className="flex h-full min-h-[220px] flex-col justify-between p-6">
      <p className="text-[12px] tracking-[0.16em] text-faint uppercase">
        {project.categories.map(categoryShort).join(" · ")}
      </p>
      <p className="text-[1.65rem] leading-tight font-medium tracking-[-0.03em]">{project.title}</p>
    </div>
  );
}

export default function Work() {
  const [active, setActive] = useState<(typeof filters)[number]["id"]>("all");

  const visible =
    active === "all"
      ? projects
      : projects.filter((project) => project.categories.includes(active));

  return (
    <section className="section-x pt-36 pb-24 sm:pt-40 md:pt-44">
      <div className="content">
        <Reveal>
          <h1 className="text-[clamp(1.85rem,4vw,3.15rem)] leading-[1.18] font-medium tracking-[-0.035em]">
            A few projects I am proud of.
          </h1>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-muted">
            Brands, products and friends. Discovery, identity, interface and the
            system that holds it together.
          </p>
        </Reveal>

        <div
          className="mt-10 flex flex-wrap gap-2 md:mt-12"
          role="group"
          aria-label="Filter projects by tool"
        >
          {filters.map((filter) => {
            const selected = active === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                aria-pressed={selected}
                onClick={() => setActive(filter.id)}
                className={`rounded-[50px] border px-3.5 py-2 text-[13px] tracking-[-0.01em] whitespace-nowrap ${
                  selected
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-subtle hover:border-border-strong hover:text-foreground"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {visible.length === 0 ? (
          <p className="mt-16 text-[15px] leading-7 text-muted">
            No projects in this category yet.
          </p>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:mt-16 md:gap-x-10 md:gap-y-16">
            {visible.map((project, index) => {
              const body = (
                <>
                  <div className="media-frame media-hover relative aspect-[16/10]">
                    <ProjectMedia project={project} priority={index < 2} />
                  </div>
                  <h2 className="mt-5 text-[17px] font-semibold tracking-[-0.02em] md:text-lg">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-[14px] leading-6 text-subtle md:text-[15px] md:leading-7">
                    {project.summary}
                  </p>
                  <p className="mt-3 text-[12px] leading-5 tracking-[0.04em] text-faint uppercase">
                    {project.tools.join(" · ")}
                  </p>
                </>
              );

              return (
                <article key={project.title} data-cursor>
                  {project.slug ? (
                    <a href={`/work/${project.slug}`} className="block">
                      {body}
                    </a>
                  ) : (
                    body
                  )}
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
