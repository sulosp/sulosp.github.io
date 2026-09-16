import { stats } from "@/data/site";
import Reveal from "./Reveal";

export default function Stats() {
  return (
    <section className="section-x section-y">
      <div className="content grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-24">
        <Reveal>
          <h2 className="max-w-[16ch] text-[clamp(1.85rem,4vw,3.15rem)] leading-[1.18] font-medium tracking-[-0.035em]">
            The people I work with are building considered things, from around the globe.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="max-w-md text-[15px] leading-7 text-muted">{stats.intro}</p>
        </Reveal>
      </div>

      <div className="content mt-14 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-border pt-12 md:mt-16 md:grid-cols-4 md:gap-10">
        {stats.items.map((item, index) => (
          <Reveal key={item.label} delay={index * 0.05}>
            <p className="text-[clamp(2rem,4vw,3.4rem)] leading-none font-medium tracking-[-0.04em]">
              {item.value}
            </p>
            <p className="mt-3 text-sm text-muted">{item.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
