import Image from "next/image";
import { images, processSteps } from "@/data/site";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section id="process" className="section-x section-y scroll-mt-28">
      <div className="content grid items-start gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-24">
        <div>
          <Reveal>
            <h2 className="max-w-[14ch] text-[clamp(1.85rem,4vw,3.15rem)] leading-[1.18] font-medium tracking-[-0.035em]">
              A simple, holistic process rooted in understanding the user and their behaviour.
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="mt-10 lg:mt-14">
            <div className="media-frame media-hover aspect-[4/5] max-w-md">
              <Image
                src={images.process}
                alt="A calm studio workspace used for research and design"
                width={900}
                height={1125}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col gap-10 pt-2 lg:gap-14 lg:pt-32">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.06}>
              <article>
                <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-3 max-w-md text-[15px] leading-7 text-muted">
                  {step.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
