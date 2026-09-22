import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseImage from "@/components/CaseImage";
import Reveal from "@/components/Reveal";
import ViewHallerDemo from "@/components/ViewHallerDemo";

export const metadata: Metadata = {
  title: "Naturhotel Haller — Sulochana Peiris",
  description:
    "A seasonal hospitality website for a wellness hotel in South Tyrol. Designed in Figma and built in Next.js.",
};

export default function HallerCaseStudy() {
  return (
    <div className="site-shell">
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
              Naturhotel Haller
            </h1>
            <p className="mt-5 text-[17px] leading-8 text-subtle sm:text-xl sm:leading-9">
              A seasonal hospitality website for a wellness hotel in South Tyrol — designed and
              built end to end.
            </p>
            <ViewHallerDemo variant="inline" />
          </Reveal>

          <figure className="my-10 w-full md:my-14">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[1.35rem] bg-[var(--image-bg)]">
              <iframe
                src="https://embed.figma.com/design/OYu8vTYOVzxkkzNNwMaYhR/Haller-Natural?node-id=0-1&embed-host=share"
                title="Haller Natural — full Figma file"
                className="absolute inset-0 h-full w-full"
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                allowFullScreen
              />
            </div>
          </figure>

          <Reveal>
            <dl className="grid gap-8 border-y border-border py-10 sm:grid-cols-3">
              <div>
                <dt className="text-[12px] tracking-[0.16em] text-faint uppercase">Role</dt>
                <dd className="mt-2 text-[15px] leading-7">UI/UX Design & Front-end Development</dd>
              </div>
              <div>
                <dt className="text-[12px] tracking-[0.16em] text-faint uppercase">Scope</dt>
                <dd className="mt-2 text-[15px] leading-7">
                  Full site — design system, 15+ templates, seasonal state, room details, pricing,
                  inquiry form
                </dd>
              </div>
              <div>
                <dt className="text-[12px] tracking-[0.16em] text-faint uppercase">Tools</dt>
                <dd className="mt-2 text-[15px] leading-7">Figma, Next.js, React, Tailwind</dd>
              </div>
            </dl>
          </Reveal>

          <section className="section-y pt-16 md:pt-20">
            <Reveal>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-medium tracking-[-0.03em]">
                Overview
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                Naturhotel Haller is a family-run wellness hotel in the Ridnaun Valley, South
                Tyrol — a destination that genuinely lives two lives a year: alpine hiking and
                swimming pools in summer, ski touring and sauna culture in winter. The brief
                was a full multi-page website — home, about, rooms, wellness, dining, seasonal
                activities, pricing, and booking inquiry — that could carry both identities
                without feeling like two separate hotels. I designed the system in Figma and
                built it as a working Next.js site, so the seasonal idea had to hold up in
                production, not only on the canvas.
              </p>
            </Reveal>
          </section>

          <section>
            <Reveal>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-medium tracking-[-0.03em]">
                The problem
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                Most hotel websites pick one mood and commit to it. Haller couldn&apos;t — the
                entire value proposition changes depending on when a guest is looking. A summer
                hiker and a winter skier are booking the same rooms for completely different
                reasons, and a generic “seasons” page buried in the nav wasn&apos;t going to do
                that justice.
              </p>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                The real question wasn&apos;t only “how do we make this look premium” — it was
                how one site could hold two seasonal identities without either feeling like an
                afterthought, and how that decision would live in the product: in navigation,
                routes, and content, not as a buried “seasons” page.
              </p>
            </Reveal>
          </section>

          <section className="pt-16 md:pt-20">
            <Reveal>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-medium tracking-[-0.03em]">
                From Figma to a working site
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                The summer/winter toggle was never meant to be a mock. In the build it is a
                persistent seasonal state — shared across the hero, activity pages, and inquiry —
                so switching season reframes copy, calls-to-action, and mood without swapping to a
                second codebase.
              </p>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                I implemented the site in Next.js and React, mapping the Figma templates
                one-to-one: home, about, rooms, room detail, wellness, pricing, and inquiry. Type,
                colour, and the 50px pill buttons come through as production UI. The inquiry form
                reads the active season so a winter guest is not sent down a summer path by default.
              </p>
            </Reveal>
          </section>

          <section className="pt-16 md:pt-20">
            <Reveal>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-medium tracking-[-0.03em]">
                Visual language
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                The hero pairs full-bleed cinematic video with a dark gradient overlay and an
                oversized serif display face (Italiana) for the wordmark — soft, editorial,
                almost hand-set. Supporting UI text runs the opposite direction: small,
                uppercase, letter-spaced sans-serif labels (“ARRIVE AND FEEL AT HOME,” “BOOK
                NOW”). That contrast does the brand work — warm and natural where it needs
                romance, structured and legible where it needs to function as a booking site.
              </p>
            </Reveal>
            <figure className="my-10 w-full md:my-14">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[1.35rem] bg-[var(--image-bg)]">
                <iframe
                  src="https://embed.figma.com/design/OYu8vTYOVzxkkzNNwMaYhR/Haller-Natural?node-id=0-1&embed-host=share"
                  title="Haller Natural"
                  width="800"
                  height="450"
                  className="absolute inset-0 h-full w-full"
                  style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                  allowFullScreen
                />
              </div>
              <figcaption className="mt-3 text-[13px] leading-6 text-faint">
                Serif wordmark against tracked-out UI labels — romance in the image, structure in
                the interface.
              </figcaption>
            </figure>
          </section>

          <section className="pt-16 md:pt-20">
            <Reveal>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-medium tracking-[-0.03em]">
                Content structure
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                Sections like “Hospitality,” “Living” (room categories), and “Wellness” use
                horizontal image sliders rather than static grids — a deliberate choice for
                content that is visually similar but not identical (six room types, a dozen
                wellness amenities). It avoids the flattening effect of a uniform grid while
                still keeping every page template consistent underneath.
              </p>
            </Reveal>
            <CaseImage
              src="/images/haller/hospitality.png"
              alt="Hospitality page with a horizontal image slider"
              caption="Hospitality — a horizontal slider instead of a flattened grid."
            />
            <CaseImage
              src="/images/haller/living.png"
              alt="Living page introducing room categories as a sliding gallery"
              caption="Living — room categories kept in the same template language."
            />
            <CaseImage
              src="/images/haller/wellness.png"
              alt="Wellness page with pool photography and amenity imagery"
              caption="Wellness — the same slider language, applied to amenities."
            />
          </section>

          <section className="pt-16 md:pt-20">
            <Reveal>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-medium tracking-[-0.03em]">
                Detail work: the parts that don&apos;t photograph well
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                Two templates that don&apos;t make it into most portfolio case studies, but
                mattered here:
              </p>
              <ul className="mt-6 list-disc space-y-4 pl-5 text-[15px] leading-8 text-subtle sm:text-base">
                <li>
                  <span className="font-medium text-foreground">Room detail pages</span> (e.g.
                  the Family Panorama Suite) — translating specs like square meterage, bed
                  configuration, and amenities into the same warm editorial voice as the
                  marketing pages, without turning it into a spec sheet.
                </li>
              </ul>
            </Reveal>
            <CaseImage
              src="/images/haller/room.png"
              alt="Family Panorama Suite room detail"
              caption="Room detail — Family Panorama Suite."
            />
            <Reveal>
              <ul className="list-disc space-y-4 pl-5 text-[15px] leading-8 text-subtle sm:text-base">
                <li>
                  <span className="font-medium text-foreground">The pricing page</span> —
                  seasonal rate tables, per-night surcharges, tax disclosures. Dense,
                  legally-necessary content that still needed to sit inside a hotel brand
                  that&apos;s otherwise about soft light and mountain views.
                </li>
              </ul>
            </Reveal>
            <CaseImage
              src="/images/haller/pricing.png"
              alt="Seasonal pricing table"
              caption="Pricing — seasonal rate tables without losing the brand."
            />
          </section>
        </article>
      </main>
      <Footer />
      <ViewHallerDemo />
    </div>
  );
}
