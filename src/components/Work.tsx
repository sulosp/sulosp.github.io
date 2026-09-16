import Image from "next/image";
import { moreProjects, projects } from "@/data/site";
import ProductMock from "./ProductMock";
import Reveal from "./Reveal";

export default function Work() {
  return (
    <section id="work" className="section-x section-y scroll-mt-28">
      <div className="content">
        <Reveal>
          <h2 className="text-[clamp(1.85rem,4vw,3.15rem)] leading-[1.18] font-medium tracking-[-0.035em]">
            A few projects I am proud of.
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-muted">
            Brands, products and friends. Discovery, identity, interface and the
            system that holds it together.
          </p>
        </Reveal>

        <div className="mt-14 flex flex-col gap-20 md:mt-20 md:gap-28">
          {projects.map((project, index) => {
            const media = (
              <div
                className={`media-frame media-hover relative ${index % 2 === 0 ? "aspect-[16/9]" : "aspect-[16/8.4]"}`}
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} — UI design`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1120px) 100vw, 1120px"
                  />
                ) : project.mock ? (
                  <ProductMock kind={project.mock} className="h-full min-h-[280px]" />
                ) : null}
              </div>
            );

            const body = (
              <>
                <p className="max-w-3xl text-[15px] leading-7 text-subtle sm:text-base sm:leading-8 md:text-lg">
                  <span className="font-semibold text-foreground">{project.title}</span>
                  <span className="text-faint"> — </span>
                  {project.summary}
                </p>
                <div className="mt-6 md:mt-8">{media}</div>
              </>
            );

            return (
              <article key={project.title} data-cursor>
                <Reveal>
                  {project.slug ? (
                    <a href={`/work/${project.slug}`} className="block">
                      {body}
                    </a>
                  ) : (
                    body
                  )}
                </Reveal>
              </article>
            );
          })}
        </div>

        <div className="mt-20 grid gap-6 border-t border-border pt-12 md:mt-28 md:grid-cols-2 md:gap-x-16 md:gap-y-8">
          {moreProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.04}>
              <p className="text-[15px] leading-7 text-subtle">
                <span className="font-semibold text-foreground">{project.title}</span>
                <span className="text-faint"> — </span>
                {project.summary}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
