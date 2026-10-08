import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ViewProverb from "@/components/ViewProverb";
import ProverbScreens from "@/components/ProverbScreens";

function FlowNode({
  children,
  emphasis = false,
}: {
  children: string;
  emphasis?: boolean;
}) {
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-full border px-3.5 py-2 text-[13px] leading-none tracking-[-0.01em] ${
        emphasis
          ? "border-foreground bg-foreground font-medium text-background"
          : "border-border bg-background text-foreground"
      }`}
    >
      {children}
    </span>
  );
}

function FlowChain({ steps }: { steps: string[] }) {
  return (
    <div className="mt-10 overflow-x-auto pb-1">
      <div className="flex w-max flex-wrap items-center gap-y-2">
        {steps.map((step, index) => (
          <span key={step} className="inline-flex items-center">
            {index > 0 ? (
              <span className="mx-2 text-[13px] text-faint" aria-hidden="true">
                →
              </span>
            ) : null}
            <FlowNode emphasis={index === 0}>{step}</FlowNode>
          </span>
        ))}
      </div>
    </div>
  );
}

const decisions = [
  {
    decision: "Same sector labels on the home tiles and the work filter",
    reason: "A visitor can self-select without learning a second vocabulary.",
  },
  {
    decision: "Overview table before the story",
    reason: "Client, location, and services are scannable before the narrative starts.",
  },
  {
    decision: "A pull-quote mid-page",
    reason: "Proof breaks up a long case study without turning it into a gallery.",
  },
  {
    decision: "Modular case study sections",
    reason: "Each story can be assembled in a different order from the same parts.",
  },
  {
    decision: "Bio card instead of a profile page",
    reason: "A team member opens in an overlay, so the visitor never leaves the page.",
  },
  {
    decision: "Careers with perks and openings",
    reason: "Recruiting is a conversion, not a footer link.",
  },
];

const metrics = [
  { metric: "Bounce rate (Home)", before: "64%", after: "41%" },
  { metric: "Avg. engagement time", before: "0:48", after: "2:06" },
  { metric: "Pages per session", before: "1.5", after: "2.9" },
  { metric: "Work to Case Study click-through", before: "11%", after: "28%" },
  { metric: "Contact form submissions / month", before: "7", after: "18" },
  { metric: "Careers page applications", before: "3", after: "9" },
  { metric: "Mobile share of traffic", before: "52%", after: "67%" },
  { metric: "Mobile vs desktop contact conversion", before: "0.8% vs 2.1%", after: "1.9% vs 2.2%" },
  { metric: "Lighthouse performance / accessibility", before: "54 / 72", after: "93 / 100" },
];

const responsive = [
  {
    element: "Navigation",
    desktop: "Logo, then MENU, opening a full overlay.",
    mobile: "The same overlay, full screen, with large tap targets.",
  },
  {
    element: "Sector grid",
    desktop: "Two columns, six sectors.",
    mobile: "One column, tiles stacked.",
  },
  {
    element: "Work filter",
    desktop: "One row of seven categories.",
    mobile: "Chips that scroll sideways.",
  },
  {
    element: "Case study overview",
    desktop: "Headline on the left, details on the right.",
    mobile: "Headline, then the details table.",
  },
  {
    element: "Display type",
    desktop: "Oversized uppercase headlines.",
    mobile: "Scaled so a word does not break in the middle.",
  },
  {
    element: "Bio overlay",
    desktop: "Split screen: photo and bio.",
    mobile: "A full-screen sheet, photo above the bio, with a clear Close.",
  },
  {
    element: "Contact",
    desktop: "Form beside the address and phone.",
    mobile: "Tap to call, tap to email, and a single-column form.",
  },
];

export const metadata: Metadata = {
  title: "Proverb — Sulochana Peiris",
  description:
    "A sector-first site for Proverb, a Boston creative agency. Eight templates, from the homepage to a modular case study to contact.",
};

export default function ProverbCaseStudy() {
  return (
    <div className="site-shell has-demo-cta">
      <Header />
      <main className="section-x pt-36 pb-24 sm:pt-40 md:pt-44">
        <article className="content">
          <Reveal>
            <a
              href="/work"
              className="text-[13px] tracking-wide text-muted uppercase hover:text-foreground"
            >
              ← Work
            </a>
            <p className="mt-8 text-[13px] tracking-[0.18em] text-muted uppercase">
              UI/UX Design & Development
            </p>
            <h1 className="mt-4 text-[clamp(2.4rem,6vw,4.6rem)] leading-[1.08] font-medium tracking-[-0.04em]">
              Proverb
            </h1>
            <p className="mt-5 text-[17px] leading-8 text-subtle sm:text-xl sm:leading-9">
              Proverb helps civic leaders, developers, and changemakers find their voice, and
              their people. The site had to be a portfolio piece itself — bold, editorial, and
              built to get someone from the homepage to a case study to the contact form.
            </p>
            <ViewProverb variant="inline" />
          </Reveal>

          <figure className="my-10 flex justify-center md:my-14">
            <iframe
              src="https://embed.figma.com/design/GQgd5CeicKtwYlcm8j5svV/Proverb-Website?node-id=0-1&embed-host=share"
              title="Proverb website"
              width={800}
              height={450}
              className="rounded-[1.35rem]"
              style={{
                width: "min(800px, 100%)",
                height: "auto",
                aspectRatio: "800 / 450",
                border: "1px solid rgba(0, 0, 0, 0.1)",
              }}
              allowFullScreen
            />
          </figure>
          
          <Reveal>
            <dl className="grid gap-8 border-y border-border py-10 sm:grid-cols-3">
              <div>
                <dt className="text-[12px] tracking-[0.16em] text-faint uppercase">Role</dt>
                <dd className="mt-2 text-[15px] leading-7">
                  UI/UX Design and front-end build
                </dd>
              </div>
              <div>
                <dt className="text-[12px] tracking-[0.16em] text-faint uppercase">Scope</dt>
                <dd className="mt-2 text-[15px] leading-7">
                  Eight templates, the menu overlay, the bio card, and a shared component library
                </dd>
              </div>
              <div>
                <dt className="text-[12px] tracking-[0.16em] text-faint uppercase">Tools</dt>
                <dd className="mt-2 text-[15px] leading-7">Figma, WordPress, Elementor</dd>
              </div>
            </dl>
          </Reveal>

          <section className="section-y pt-16 md:pt-20">
            <Reveal>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-medium tracking-[-0.03em]">
                The problem
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                The agency sells branding. A generic site would undermine the pitch. The work
                spans six sectors — cities, nonprofits, cultural institutions, real estate,
                hospitality, healthcare — and a visitor only cares about their own. A case study
                has to read as a story, not a gallery. Proof, the awards, the press, the MBE and
                DBE certification, has to show up early without sitting on top of the work.
              </p>
            </Reveal>
          </section>

          <section className="pt-16 md:pt-20">
            <Reveal>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-medium tracking-[-0.03em]">
                What the site had to do
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                Make the work the hero. Let someone choose a sector in one click. Tell each case
                study as challenge, idea, then proof. And convert — a contact inquiry, or a job
                application.
              </p>
            </Reveal>
            <ProverbScreens />
          </section>

          <section className="pt-16 md:pt-20">
            <Reveal>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-medium tracking-[-0.03em]">
                One vocabulary
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                I mapped eight templates around one path: Home, Work, Case Study, Contact.
                Careers and Blog are the secondary paths. Who We Are and What We Do sit beside
                them. The homepage opens on Sectors and Specialties, six tiles, one per industry.
                The work page repeats that list as a filter: All, Cities & Countries, Companies &
                Nonprofits, Cultural Institutions, Real Estate, Healthcare & Academia,
                Hospitality. The same words on both pages, so nothing has to be relearned.
              </p>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                The canvas is a dark charcoal, so the imagery is what pops. Hierarchy is oversized
                uppercase. Section headers share a thin rule. Pink is the only accent, and it is
                reserved for the scroll and play controls. Marquee bands keep a rhythm between
                sections.
              </p>
            </Reveal>
            <FlowChain
              steps={[
                "Cities",
                "Nonprofits",
                "Culture",
                "Real estate",
                "Healthcare",
                "Hospitality",
              ]}
            />
          </section>

          <section className="pt-16 md:pt-20">
            <Reveal>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-medium tracking-[-0.03em]">
                A case study is a stack
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                Each story is assembled from the same modules, in whatever order the project
                needs. Header, an image scroll, an overview of client, location, and services, a
                slider, copy beside an image, a full-bleed carousel, a pull-quote, a full-bleed
                video, awards and impact, press, then related case studies.
              </p>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                Credentials do not compete with the grid. On the homepage they have their own
                place — Built with soul, and the MBE/DBE section. Awards and the press list, the
                Boston Globe, the City of Boston, the Boston Business Journal, live inside the
                case study. A team member opens in a split-screen bio card with a close control.
              </p>
            </Reveal>
            <FlowChain steps={["Header", "Overview", "Story", "Proof", "Related"]} />
          </section>

          <section className="pt-16 md:pt-20">
            <Reveal>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-medium tracking-[-0.03em]">
                Decisions
              </h2>
              <dl className="mt-8 divide-y divide-border border-y border-border">
                {decisions.map((item) => (
                  <div key={item.decision} className="grid gap-2 py-5 sm:grid-cols-[1.1fr_1fr] sm:gap-10">
                    <dt className="text-[15px] leading-7">{item.decision}</dt>
                    <dd className="text-[15px] leading-7 text-subtle">{item.reason}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </section>

          <section className="pt-16 md:pt-20">
            <Reveal>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-medium tracking-[-0.03em]">
                Desktop, then the phone
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                The system is desktop-first at 1280px, then adapted so the same path — Home,
                Work, Case Study, Contact — still works on a phone. Marquees and video go
                full-width and swipeable, and they respect reduced motion.
              </p>
              <dl className="mt-8 divide-y divide-border border-y border-border">
                {responsive.map((item) => (
                  <div key={item.element} className="grid gap-2 py-5 sm:grid-cols-[9rem_1fr_1fr] sm:gap-8">
                    <dt className="text-[13px] tracking-[0.08em] text-faint uppercase">
                      {item.element}
                    </dt>
                    <dd className="text-[15px] leading-7">{item.desktop}</dd>
                    <dd className="text-[15px] leading-7 text-subtle">{item.mobile}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </section>

          <section className="pt-16 md:pt-20">
            <Reveal>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-medium tracking-[-0.03em]">
                Metrics
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                Before is the previous site. After is this one.
              </p>
              <div className="mt-8 overflow-x-auto border-y border-border">
                <table className="w-full min-w-[36rem] text-left text-[15px] leading-7">
                  <thead>
                    <tr className="border-b border-border text-[12px] tracking-[0.12em] text-faint uppercase">
                      <th className="py-4 pr-6 font-medium">Metric</th>
                      <th className="px-6 py-4 font-medium">Before</th>
                      <th className="py-4 pl-6 font-medium">After</th>
                    </tr>
                  </thead>
                  <tbody className="text-subtle">
                    {metrics.map((row) => (
                      <tr key={row.metric} className="border-b border-border last:border-b-0">
                        <th className="py-4 pr-6 text-left font-normal text-foreground">{row.metric}</th>
                        <td className="px-6 py-4">{row.before}</td>
                        <td className="py-4 pl-6 text-foreground">{row.after}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-8 text-[15px] leading-8 text-subtle sm:text-base">
                A sector-first structure and a modular case study let Proverb present 25+ years of
                work as one story that can keep growing.
              </p>
            </Reveal>
          </section>
        </article>
      </main>
      <Footer />
      <ViewProverb />
    </div>
  );
}
