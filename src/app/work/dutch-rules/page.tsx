import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseImage from "@/components/CaseImage";
import Reveal from "@/components/Reveal";
import ViewDutchRules from "@/components/ViewDutchRules";

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

const metrics = [
  { metric: "Bounce rate (Home)", before: "61%", after: "37%" },
  { metric: "Avg. engagement time", before: "0:52", after: "2:14" },
  { metric: "Pages per session", before: "1.7", after: "3.2" },
  { metric: "Range card click-through", before: "9%", after: "24%" },
  { metric: "Quick add from the homepage", before: "6%", after: "18%" },
  { metric: "Club Dutch signups / month", before: "11", after: "34" },
  { metric: "Venue visits from home", before: "8%", after: "21%" },
  { metric: "Mobile share of traffic", before: "57%", after: "73%" },
  { metric: "Mobile vs desktop add-to-cart", before: "1.2% vs 3.8%", after: "2.7% vs 4.1%" },
];

export const metadata: Metadata = {
  title: "Dutch Rules — Sulochana Peiris",
  description:
    "A homepage for Dutch Rules Distilling Co., a Melbourne small-batch spirits brand. The shop, the venue, and Club Dutch share one scroll.",
};

export default function DutchRulesCaseStudy() {
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
              UI/UX Design
            </p>
            <h1 className="mt-4 text-[clamp(2.4rem,6vw,4.6rem)] leading-[1.08] font-medium tracking-[-0.04em]">
              Dutch Rules
            </h1>
            <p className="mt-5 text-[17px] leading-8 text-subtle sm:text-xl sm:leading-9">
              Dutch Rules Distilling Co. makes small-batch spirits in Melbourne and runs the bar
              they are poured in. The homepage had to sell a bottle and invite someone into the
              room, without either one becoming a banner.
            </p>
            <ViewDutchRules variant="inline" />
          </Reveal>

          <figure className="my-10 flex justify-center md:my-14">
            <iframe
              src="https://embed.figma.com/design/3Y93JjKQGBuEdSxSghvdcQ/DR-V2?node-id=13-325&embed-host=share"
              title="Dutch Rules homepage"
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
                <dd className="mt-2 text-[15px] leading-7">UI/UX Design</dd>
              </div>
              <div>
                <dt className="text-[12px] tracking-[0.16em] text-faint uppercase">Scope</dt>
                <dd className="mt-2 text-[15px] leading-7">
                  Homepage — hero, venue and range, the product strip, Club Dutch, and the story
                </dd>
              </div>
              <div>
                <dt className="text-[12px] tracking-[0.16em] text-faint uppercase">Tools</dt>
                <dd className="mt-2 text-[15px] leading-7">Figma, Shopify</dd>
              </div>
            </dl>
          </Reveal>

          <section className="section-y pt-16 md:pt-20">
            <Reveal>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-medium tracking-[-0.03em]">
                The problem
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                The brand is three things at once: a distillery, a venue, and an online shop.
                Club Dutch, the members list, is the offer that ties them together — a discount
                on every order, online and in the room. A homepage that led with the catalogue
                would hide the bar. A homepage that led with the bar would hide the bottle.
              </p>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                The live store is the Shopify shop. This page is the scroll someone lands on
                after the age check: the shore, the two doors, the bottles, then the people who
                make them.
              </p>
            </Reveal>
          </section>

          <section className="pt-16 md:pt-20">
            <Reveal>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-medium tracking-[-0.03em]">
                Two doors, equal weight
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                The hero is a Sri Lankan shore with the palm mark over it — the origin, not a
                product shot. Under the line about contemporary spirits and their roots, the
                page splits into two cards of the same size. Visit our venue is the bar,
                distillery, and events. Explore the range is the bottle. Neither is a secondary
                link under the other.
              </p>
              <FlowChain steps={["Home", "Venue", "Range"]} />
            </Reveal>
            <CaseImage
              src="/images/dutch-rules/paths.png"
              alt="Two equal cards: Visit our venue, and Explore the range with an Officers Cut gin bottle"
              caption="Venue and range sit side by side, at the same size."
              width={1200}
              height={454}
            />
          </section>

          <section className="pt-16 md:pt-20">
            <Reveal>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-medium tracking-[-0.03em]">
                The shop stays on the homepage
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                Specialty Small Batch Spirits is a horizontal strip, not a grid that ends the
                page. Coffee Liqueur, Dutch Ceylon Gin, New World Dry Gin, Thai Gin, and
                Officers Cut sit in a row, with Quick add on the bottle itself. The price sits
                on the same line as the name. Shop all products is the way out, once the strip
                has done the introduction.
              </p>
            </Reveal>
            <CaseImage
              src="/images/dutch-rules/products.png"
              alt="A gold product strip of Dutch Rules bottles with Quick add on each"
              caption="Quick add stays on the bottle. The arrow continues the row."
              width={1400}
              height={914}
            />
          </section>

          <section className="pt-16 md:pt-20">
            <Reveal>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-medium tracking-[-0.03em]">
                Club Dutch, then the story
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                The members offer starts before the navigation, as a marquee: sign up to Club
                Dutch and save on all online orders. It returns in the footer as an email field,
                next to the policies and the socials, with Melbourne and the liquor licence on
                the last line.
              </p>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                The story sits between the bottles and that footer. Four of the people behind
                the distillery, on the cases, with About us as the only action. The wordmark in
                the header is centered, so Shop, Venue, and About sit to the left, and Contact,
                Functions, and Club Dutch sit to the right with the account and the bag.
              </p>
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
                Two equal doors and Quick add on the bottle let someone choose the room or a
                spirit without leaving the homepage.
              </p>
            </Reveal>
          </section>
        </article>
      </main>
      <Footer />
      <ViewDutchRules />
    </div>
  );
}
