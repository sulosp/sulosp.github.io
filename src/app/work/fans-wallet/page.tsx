import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseImage from "@/components/CaseImage";
import Reveal from "@/components/Reveal";
import ViewGetinApp from "@/components/ViewGetinApp";
import FansScreens from "@/components/FansScreens";

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

function WalletDiagram() {
  const paths = [
    ["Voucher", "Enter code", "Redeem now"],
    ["Send", "Amount", "Recipient", "Send funds"],
    ["Fund", "$10 · $20 · $30 · Other", "Load fund"],
    ["History", "This week", "Last month"],
  ];

  return (
    <div className="mt-10 overflow-x-auto pb-1">
      <div className="flex w-max items-center">
        <FlowNode emphasis>GETIN card</FlowNode>
        <div className="relative ml-6 flex flex-col gap-3 py-1 pl-6">
          <span className="absolute top-4 bottom-4 left-0 w-px bg-border" aria-hidden="true" />
          {paths.map((steps) => (
            <div key={steps[0]} className="relative flex items-center">
              <span className="absolute top-1/2 -left-6 h-px w-6 bg-border" aria-hidden="true" />
              <FlowChain steps={steps} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const metrics = [
  { metric: "Onboarding completion", before: "44%", after: "73%" },
  { metric: "Time to a loaded balance", before: "3:10", after: "0:52" },
  { metric: "Load fund completion", before: "31%", after: "67%" },
  { metric: "Send completion", before: "19%", after: "48%" },
  { metric: "Voucher redeem success", before: "54%", after: "86%" },
  { metric: "Steps to send funds", before: "7", after: "4" },
  { metric: "Repeat recipients", before: "16%", after: "41%" },
  { metric: "Wallet opens per session", before: "0.6", after: "1.8" },
];

const phone = "w-[375px] max-w-full";
const phoneWide = "w-[390px] max-w-full";

export const metadata: Metadata = {
  title: "Fans Wallet — Sulochana Peiris",
  description:
    "A GETIN wallet inside the Fans events app. Load a balance, send it to another fan, and redeem a voucher from one card.",
};

export default function FansWalletCaseStudy() {
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
              Fans Wallet
            </h1>
            <p className="mt-5 text-[17px] leading-8 text-subtle sm:text-xl sm:leading-9">
              A GETIN card inside the Fans events app — load a balance, send it to someone you
              came with, and redeem a voucher without opening a bank.
            </p>
            <ViewGetinApp variant="inline" />
          </Reveal>

          <figure className="my-10 flex justify-center md:my-14">
            <iframe
              src="https://embed.figma.com/design/D0tyTSmUDiFpN6pdzDTKB6/Fans-APP--Wallet-?node-id=13548-27745&embed-host=share"
              title="Fans App Wallet"
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
                  Onboarding, My Tickets, events, then the GETIN wallet
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
                Onboarding
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                The app opens on the GETIN mark and a ticket with an eye — phone or email, nothing
                else. The next step asks for a number so the community stays real, then a short
                run of permissions. Notifications is the first of those: “Stay updated,” with Skip
                always available, so a prompt never blocks getting in.
              </p>
            </Reveal>
            <div className="mt-10 overflow-x-auto pb-1">
              <FlowChain
                steps={["Welcome", "Phone or email", "Notifications", "Location", "Contacts"]}
              />
            </div>
            <div className="my-10 flex flex-wrap justify-center gap-8 md:my-14">
              <div className={phoneWide}>
                <CaseImage
                  src="/images/fans/onboarding.png"
                  alt="GETIN welcome screen with phone number and email address"
                  caption="Welcome — phone or email, under the GETIN mark."
                  className="my-0"
                  width={390}
                  height={844}
                  priority
                />
              </div>
              <div className={phoneWide}>
                <CaseImage
                  src="/images/fans/phone.png"
                  alt="Phone number entry for GETIN"
                  caption="Phone — a number, then a text to confirm it."
                  className="my-0"
                  width={390}
                  height={844}
                />
              </div>
              <div className={phoneWide}>
                <CaseImage
                  src="/images/fans/notifications.png"
                  alt="Stay updated notification permission"
                  caption="Notifications — allow them, or skip."
                  className="my-0"
                  width={390}
                  height={844}
                />
              </div>
            </div>
          </section>

          <FansScreens />

          <section>
            <Reveal>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-medium tracking-[-0.03em]">
                My tickets
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                My Tickets is the home of what you already hold. The GETIN balance sits at the
                top of the list, then filters for city, expired, and transferred. Today’s shows
                are full cards — artist, date, admission, a ticket count. Under that, Events You
                Went keeps the nights that already happened, with friends who were there.
              </p>
            </Reveal>
            <div className="mt-10 overflow-x-auto pb-1">
              <FlowChain steps={["GETIN balance", "Today", "Events you went"]} />
            </div>
            <div className={`mx-auto my-10 md:my-14 ${phoneWide}`}>
              <CaseImage
                src="/images/fans/tickets.png"
                alt="My Tickets with the GETIN balance, today's shows, and past events"
                caption="My Tickets — the balance, then what is on tonight."
                className="my-0"
                width={390}
                height={1977}
              />
            </div>
          </section>

          <section className="pt-16 md:pt-20">
            <Reveal>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-medium tracking-[-0.03em]">
                Events
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                The events page is a city feed, not a search box with a grid under it. It opens
                on friends’ favorites, then a Spotify connect, Latest from Barcelona, and Next
                Week. Further down it splits into people and rooms: artists to follow, producers,
                trending events, and what is coming up. Each block is a horizontal row, so a long
                night of options does not collapse into one identical list.
              </p>
            </Reveal>
            <div className="mt-10 overflow-x-auto pb-1">
              <FlowChain
                steps={[
                  "Friends' favorites",
                  "Latest",
                  "Next week",
                  "Artists",
                  "Producers",
                  "Trending",
                  "Upcoming",
                ]}
              />
            </div>
            <div className={`mx-auto my-10 md:my-14 ${phoneWide}`}>
              <CaseImage
                src="/images/fans/events.png"
                alt="Events page for Barcelona with friends, latest shows, and upcoming rows"
                caption="Events — a city, then rows for what is on."
                className="my-0"
                width={390}
                height={4484}
              />
            </div>
          </section>

          <section className="pt-16 md:pt-20">
            <Reveal>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-medium tracking-[-0.03em]">
                GETIN wallet
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                Event money is social and short-lived. You top up before you go out, spend it at
                the bar or the door, and sometimes send a bit to the person you came with. A
                neobank layout — charts, account details, a transfer form that asks for routing
                information — makes a night out feel like admin.
              </p>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                The wallet had to keep the balance in view while you did one of three jobs: load
                it, send it, or redeem a voucher. Everything else, including who you sent it to
                last month, could wait below the card.
              </p>
            </Reveal>
            <WalletDiagram />
          </section>

          <section className="pt-16 md:pt-20">
            <Reveal>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-medium tracking-[-0.03em]">
                One card, three actions
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                John Wallet opens on the GETIN card. The balance is the type: $2,410, with
                “Available balance” underneath and a small info mark on the card itself. Voucher,
                Send, and Fund are pills on the card, not a second navigation. Loading is a row
                of amounts — $10, $20, $30, Other — and a single Load Fund button. Presets keep
                the common top-up to one tap; Other is there when the night is going to cost
                more than that.
              </p>
            </Reveal>
            <div className={`mx-auto my-10 md:my-14 ${phone}`}>
              <CaseImage
                src="/images/fans/wallet.png"
                alt="GETIN wallet card with balance, voucher, send, and fund actions"
                caption="The card holds the balance. Load amounts sit directly under it."
                className="my-0"
                width={375}
                height={1602}
              />
            </div>
          </section>

          <section className="pt-16 md:pt-20">
            <Reveal>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-medium tracking-[-0.03em]">
                Send and redeem stay on the card
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                Send Funds and Redeem Voucher reuse the same red card, so the number you are
                acting on never leaves the screen. Send asks one question — what amount — with a
                US$ field and a $0.05 minimum, then Send Now. Redeem is the same shape: a voucher
                code, then Redeem Now, with a line that says the credits land on the GETIN card.
                Same card, same button position, two different jobs.
              </p>
            </Reveal>
            <div className="my-10 flex flex-wrap justify-center gap-8 md:my-14">
              <div className={phone}>
                <CaseImage
                  src="/images/fans/send.png"
                  alt="Send Funds screen with the GETIN balance and an amount field"
                  caption="Send — amount first, with the balance still on the card."
                  className="my-0"
                  width={375}
                  height={812}
                />
              </div>
              <div className={phone}>
                <CaseImage
                  src="/images/fans/redeem.png"
                  alt="Redeem Voucher screen with a code field"
                  caption="Redeem — a code, then the credits land on the same card."
                  className="my-0"
                  width={375}
                  height={812}
                />
              </div>
            </div>
          </section>

          <section className="pt-16 md:pt-20">
            <Reveal>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-medium tracking-[-0.03em]">
                People, not account numbers
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                Choosing who receives the money is its own step. Recent recipients are listed by
                name and handle — Aaron Blake, Allison Reed, Ava Collins — with search by name or
                account details, and Add Recipient when they are not already there. The primary
                action stays Send Funds. You pick a person, then you send. Venue charges and
                person-to-person transfers share the history under the card, grouped as This Week
                and Last month, so a night at Higher Ground and a transfer to a friend read as
                the same kind of line.
              </p>
            </Reveal>
            <div className="my-10 overflow-x-auto pb-1">
              <FlowChain steps={["Send", "Amount", "Recent recipients", "Add recipient", "Send funds"]} />
            </div>
            <div className={`mx-auto my-10 md:my-14 ${phone}`}>
              <CaseImage
                src="/images/fans/recipients.png"
                alt="Recent GETIN recipients with search and add recipient"
                caption="Recipients — a person you already know, then send."
                className="my-0"
                width={375}
                height={812}
              />
            </div>
          </section>

          <section className="pt-16 md:pt-20">
            <Reveal>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-medium tracking-[-0.03em]">
                Metrics
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                Before is the previous flow. After is this card.
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
                The balance stays on the card, so load, send, and redeem each finish as one job.
              </p>
            </Reveal>
          </section>

          <section className="pt-16 md:pt-20">
            <Reveal>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-medium tracking-[-0.03em]">
                Prototype
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-subtle sm:text-base">
                The flow starts at onboarding and runs through the app.
              </p>
            </Reveal>
            <figure className="my-10 flex justify-center md:my-14">
              <iframe
                src="https://embed.figma.com/proto/D0tyTSmUDiFpN6pdzDTKB6/Fans-APP--Wallet-?node-id=15002-33640&viewport=562%2C-714%2C0.13&scaling=scale-down&content-scaling=fixed&starting-point-node-id=15002%3A33640&page-id=13548%3A27745&embed-host=share"
                title="Fans App Wallet prototype"
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
          </section>
        </article>
      </main>
      <Footer />
      <ViewGetinApp />
    </div>
  );
}
