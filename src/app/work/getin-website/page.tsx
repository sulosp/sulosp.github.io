import type { ReactNode } from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseImage from "@/components/CaseImage";
import Reveal from "@/components/Reveal";
import ViewGetinDemo from "@/components/ViewGetinDemo";
import GetinScreens from "@/components/GetinScreens";

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

function ScrolledScreen({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-h-dvh min-h-0 overflow-y-auto overscroll-y-contain ${className}`}>
      {children}
    </div>
  );
}

function FlowChain({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-y-2">
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
  );
}

const metrics = [
  { metric: "Bounce rate (Home)", before: "58%", after: "36%" },
  { metric: "Avg. engagement time", before: "1:12", after: "3:24" },
  { metric: "Pages per session", before: "2.1", after: "4.4" },
  { metric: "Event page to ticket click-through", before: "9%", after: "22%" },
  { metric: "Checkout completion", before: "41%", after: "68%" },
  { metric: "Create event completions / month", before: "18", after: "47" },
  { metric: "Mobile share of traffic", before: "61%", after: "74%" },
  { metric: "Mobile vs desktop ticket conversion", before: "1.1% vs 3.4%", after: "2.8% vs 3.6%" },
  { metric: "Lighthouse performance / accessibility", before: "49 / 81", after: "91 / 98" },
];

export const metadata: Metadata = {
  title: "GETIN — Sulochana Peiris",
  description:
    "The public GETIN events site. Homepage, the event page, tickets, creating an event, My Events, analytics, and the attendee list.",
};

export default function GetinWebsiteCaseStudy() {
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
              GETIN
            </h1>
            <p className="mt-5 hidden text-[17px] leading-8 text-subtle sm:text-xl sm:leading-9 xl:block">
              The public events site. A dark homepage that opens on the night — three posters, a
              city, a row of ways in — then the artists, producers, and rooms behind them.
            </p>
            <ViewGetinDemo variant="inline" />
          </Reveal>

          <div className="mt-10 flex flex-col items-center gap-8 xl:hidden">
            <div className="h-dvh w-full">
              <iframe
                src="https://embed.figma.com/design/KbenTWEtwNe1iOM8XJrNop/Getin-Website?node-id=0-1&embed-host=share"
                title="GETIN homepage prototype"
                className="h-full w-full rounded-[1.35rem]"
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                allowFullScreen
              />


            </div>
            <div className="w-[390px] max-w-full">
              <CaseImage
                src="/images/getin/event-mobile.png"
                alt="GETIN event page on a phone"
                className="my-0"
                width={390}
                height={8384}
              />
            </div>
            <div className="w-[390px] max-w-full">
              <CaseImage
                src="/images/getin/analytics-mobile.png"
                alt="GETIN analytics on a phone"
                className="my-0"
                width={390}
                height={4697}
              />
            </div>
            <div className="w-[390px] max-w-full">
              <CaseImage
                src="/images/getin/my-events-mobile.png"
                alt="My Events on a phone"
                className="my-0"
                width={390}
                height={1288}
              />
            </div>
          </div>

          <div className="hidden xl:block">
          <ScrolledScreen className="my-10 flex justify-center md:my-14">
            <iframe
              src="https://embed.figma.com/design/KbenTWEtwNe1iOM8XJrNop/Getin-Website-V2---Copy-?node-id=1-2&embed-host=share"
              title="GETIN website"
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
          </ScrolledScreen>

          <Reveal>
            <dl className="grid gap-8 border-y border-border py-10 sm:grid-cols-3">
              <div>
                <dt className="text-[12px] tracking-[0.16em] text-faint uppercase">Role</dt>
                <dd className="mt-2 text-[15px] leading-7">UI/UX Design</dd>
              </div>
              <div>
                <dt className="text-[12px] tracking-[0.16em] text-faint uppercase">Scope</dt>
                <dd className="mt-2 text-[15px] leading-7">
                  Homepage, the event page, tickets, create event, My Events, analytics, attendees
                </dd>
              </div>
              <div>
                <dt className="text-[12px] tracking-[0.16em] text-faint uppercase">Tools</dt>
                <dd className="mt-2 text-[15px] leading-7">Figma, Rive</dd>
              </div>
            </dl>
          </Reveal>

          <section className="section-y pt-16 md:pt-20">
            <Reveal>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-medium tracking-[-0.03em]">
                Homepage
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                The header is the GETIN mark, then Trending, This Week, and Create Event. Search,
                the account, and the menu sit on the right. Under that, a chip rail. All Events is
                the selected door. Live Sessions and Discovering Community follow, then the rest of
                the night — Festivals, Food Fair, Experiences, and cities that run off the edge,
                including the Pacha series in Dubai. This Week, Barcelona, Budget, and All
                Highlights are dropdowns, so the rail stays a set of doors instead of a form.
              </p>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                The first thing under the rail is three event cards. A poster, a title, the address
                on Rda. de Sant Pere, then one pill for the date and time — NOV 19, 2024, 08.00 PM —
                and a 2.5 K view count. The first card carries a play button. Must-See Artists in
                Barcelona sits just below, with the line “Discover Barcelona’s Music Scene.”
              </p>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                The rest of the homepage is a feed, not a second navigation. Top Creators,
                Trending Events, Next Week, Featured, Followed, and Free. A trending card can say
                who is going — a few names, +2, “and others are attending” — before it repeats the
                date. The night stays the object. The people are a line on the card.
              </p>
            </Reveal>
            <div className="mt-10 overflow-x-auto pb-1">
              <FlowChain
                steps={[
                  "All Events",
                  "This week",
                  "Barcelona",
                  "Event cards",
                  "Artists",
                  "Creators",
                  "Trending",
                ]}
              />
            </div>
            <ScrolledScreen className="my-10 md:my-14">
              <CaseImage
                src="/images/getin/cover.png"
                alt="GETIN homepage with three Halloween event cards and a category rail"
                caption="Homepage — the rail, then three events. The date and the view count share one row."
                className="my-0"
                width={1920}
                height={1080}
                priority
              />
            </ScrolledScreen>
          </section>

          <GetinScreens />

          <section className="pt-16 md:pt-20">
            <Reveal>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-medium tracking-[-0.03em]">
                The event page
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                Opening an event keeps the poster as the object. Teksupport: Peggy Gou at Alcazar
                Garden, with the date in the title block — Wed, Jul 30, 8:00 PM — and a countdown
                on the cover. The same chips from the homepage sit here too: NYC, Tonight,
                Trending, Techno. Share is a button, not a menu you have to hunt for.
              </p>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                About is the practical part. It is an 18+ event, presented by Teksupport. A refund
                is there if you are within 24 hours of buying, or if the night is rescheduled or
                cancelled. Lineup, venue, doors at 7:30 PM, up to 500 guests, and a note that the
                entrance, restrooms, and seating can work for a wheelchair. Under that, the page
                points at the app — “NEW APP. NEW VIBES.” — including the case where someone has
                no smartphone. Then more of the same promoter, and more nights at the same room.
              </p>
            </Reveal>
            <div className="mt-10 overflow-x-auto pb-1">
              <FlowChain
                steps={["Cover", "Countdown", "About", "Lineup", "Venue", "Tickets in the app"]}
              />
            </div>
            <ScrolledScreen className="my-10 md:my-14">
              <CaseImage
                src="/images/getin/event.png"
                alt="GETIN event page for Teksupport Peggy Gou at Alcazar Garden"
                caption="The event — poster, countdown, then the facts of the night."
                className="my-0"
                width={1280}
                height={7256}
              />
            </ScrolledScreen>
          </section>

          <section className="pt-16 md:pt-20">
            <Reveal>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-medium tracking-[-0.03em]">
                Tickets
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                Back to My Tickets opens on the pass you already hold. Upcoming, then Teksupport:
                Peggy Gou. The stub is General Admission, age limit 24+, $40. The room is Alcazar
                Garden, doors at 7:30 PM, and the night is written as one range — Sep 22, 3:50 AM
                through Sep 25, 12:21 PM. Parking is an add-on. The transaction and the order share
                one id.
              </p>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                Transfer Ticket is the white action. Other sits beside it. The pass itself is the
                card on the right: Dan Levy, seat 106, row 33, section 314, a QR code, and the
                ticket id underneath.
              </p>
            </Reveal>
            <div className="mt-10 overflow-x-auto pb-1">
              <FlowChain steps={["My tickets", "Stub", "Transfer", "Pass"]} />
            </div>
            <ScrolledScreen className="my-10 md:my-14">
              <CaseImage
                src="/images/getin/tickets.png"
                alt="Peggy Gou ticket stub beside the admission pass with a QR code"
                caption="Tickets — the stub on the left, the pass you scan on the right."
                className="my-0"
                width={1280}
                height={832}
              />
            </ScrolledScreen>
          </section>

          <section className="pt-16 md:pt-20">
            <Reveal>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-medium tracking-[-0.03em]">
                Create a new event
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                Create New Event is one page, not a wizard that hides the rest. The public URL is
                already there — get-in.com/en/1202 — with Preview, Edit, and Public. The cover is
                an upload, with room for another image, and a Spotify row to pick the song that
                plays with it.
              </p>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                Single Event and Recurring Event sit side by side. Recurring is the beta support
                turns on, and the note says so: it may glitch, and support is the way through.
                Dates, category, age, and tickets follow. Tickets can stay Free. The artist block
                searches Spotify, warns that an unconfirmed name can get the event cancelled, and
                says a confirmed lineup is listed on Spotify, Bandsintown, and Songkick. FAQs are
                the last field. Previous on the left, Create Event on the right.
              </p>
            </Reveal>
            <div className="mt-10 overflow-x-auto pb-1">
              <FlowChain
                steps={["Cover", "Single or recurring", "Dates", "Category", "Tickets", "Artists", "Create"]}
              />
            </div>
            <ScrolledScreen className="my-10 md:my-14">
              <CaseImage
                src="/images/getin/create.png"
                alt="Create New Event form with cover upload, single or recurring, and Spotify artists"
                caption="Create — the URL is already live. Recurring is the beta."
                className="my-0"
                width={1280}
                height={2089}
              />
            </ScrolledScreen>
          </section>

          <section className="pt-16 md:pt-20">
            <Reveal>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-medium tracking-[-0.03em]">
                My events
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                The organizer home opens with the person, not a dashboard. Good morning, Trevin P.
                Only 2 hours left until the next event begins. New Event is the white pill. The
                producer card — One Of Us, 6.5K followers — sits opposite, with an edit mark.
              </p>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                Selling is blocked until Stripe has the organization. “Complete your account to
                sell tickets,” then Complete My Account. Under that, the list is four states:
                Active 2, Pending 1, Drafts 1, Canceled/Deleted 0, plus search. Each row is the
                poster, the date, the city, and four counts — views, sales in AED, attendees, and
                pending — so the night and the numbers stay on one line.
              </p>
            </Reveal>
            <div className="mt-10 overflow-x-auto pb-1">
              <FlowChain steps={["New event", "Active", "Pending", "Drafts", "Views", "Sales", "Attendees"]} />
            </div>
            <ScrolledScreen className="my-10 md:my-14">
              <CaseImage
                src="/images/getin/my-events.png"
                alt="My Events for Trevin P. with active events, sales, and attendees"
                caption="My Events — the next night, then the list, then four counts."
                className="my-0"
                width={1280}
                height={848}
              />
            </ScrolledScreen>
          </section>

          <section className="pt-16 md:pt-20">
            <Reveal>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-medium tracking-[-0.03em]">
                Analytics
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                Analytics is a row of jobs, not one chart. Sales, Insight, Sale Promoters,
                Balance, Tickets, Scanned. Share, Download, and Refresh sit with the section you
                are in. Sales opens on the states of a ticket: 23 approved, 50 on the waiting
                list, 150 pending, and 150 canceled, each with how it moved since last week.
                Resale is the next line, at 50, with an empty card beside it.
              </p>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                Under the counts, the same two weeks become bars: sales from 14 Sep to 25 Sep,
                then resales. Check-ins per minute sit next to a completion ring. Average and
                increment are the last pair, so a night can be read as a rate, not only a total.
              </p>
            </Reveal>
            <div className="mt-10 overflow-x-auto pb-1">
              <FlowChain
                steps={["Sales", "Insight", "Promoters", "Balance", "Tickets", "Scanned"]}
              />
            </div>
            <ScrolledScreen className="my-10 md:my-14">
              <CaseImage
                src="/images/getin/analytics.png"
                alt="GETIN sales analytics with approved, waiting list, pending, and canceled counts"
                caption="Sales — the states of a ticket, then the two weeks as bars."
                className="my-0"
                width={1280}
                height={3316}
              />
            </ScrolledScreen>
          </section>

          <section className="pt-16 md:pt-20">
            <Reveal>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-medium tracking-[-0.03em]">
                Attendees
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                Attendee List is the people behind those counts. Events, Attendees, Payments, and
                Reports are the top. The left rail is the nights: All Events, Live, Upcoming,
                Completed, then the name of the one you are in. The summary is three cards — a top
                purchaser, pending tasks with Send an Email, and total revenue — then four status
                counts: approved, pending, canceled, dispute.
              </p>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                The table is the work. Payment ID, attendee, the size of their group, status,
                ticket name, ticket type, and amount. Search sits above it. The status on the row
                is already one of four: pending, approved, canceled, or dispute.
              </p>
            </Reveal>
            <div className="mt-10 overflow-x-auto pb-1">
              <FlowChain steps={["Event", "Attendees", "Status", "Ticket", "Amount"]} />
            </div>
            <ScrolledScreen className="my-10 md:my-14">
              <CaseImage
                src="/images/getin/attendees.png"
                alt="Attendee list with payment IDs, group size, ticket type, and amount"
                caption="Attendees — one night on the left, one person per row."
                className="my-0"
                width={1280}
                height={1041}
              />
            </ScrolledScreen>
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
                A poster-first homepage and one event page let someone go from the night to a
                ticket without learning a second navigation.
              </p>
            </Reveal>
          </section>
          </div>
        </article>
      </main>
      <Footer />
      <ViewGetinDemo />
    </div>
  );
}
