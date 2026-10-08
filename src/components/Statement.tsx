import Reveal from "./Reveal";
import ToolList from "./ToolList";

export default function Statement() {
  return (
    <section id="about" className="section-x section-y scroll-mt-28">
      <div className="content">
        <Reveal>
          <h2 className="max-w-[12ch] text-[clamp(2.1rem,5.4vw,4.6rem)] leading-[1.12] font-medium tracking-[-0.04em]">
            I craft easy, human-centric digital experiences.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-2 md:gap-20">
          <Reveal delay={0.05}>
            <p className="text-[15px] leading-7 text-subtle sm:text-base sm:leading-8">
              Finding the balance between aesthetic beauty and technical performance. I
              create brand identities, scalable design systems and
              human friendly digital experiences.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[15px] leading-7 text-subtle sm:text-base sm:leading-8">
              Honest, effective interactions between brands and the people they serve
              create long lasting value. That is the work: make the useful feel
              considered, and the considered feel effortless.
            </p>
          </Reveal>
        </div>

        <ToolList />
      </div>
    </section>
  );
}
