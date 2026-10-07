"use client";

import { useState } from "react";
import { Arrow, ScreenLightbox, ScreenThumb, Stem, type Screen } from "@/components/screenFlow";

const welcome: Screen = {
  id: "welcome",
  label: "Welcome",
  src: "/images/fans/onboarding.png",
  alt: "GETIN welcome screen with phone number and email address",
};

const tickets: Screen = {
  id: "tickets",
  label: "Tickets",
  src: "/images/fans/tickets.png",
  alt: "My Tickets with the GETIN balance, today's shows, and past events",
};

const events: Screen = {
  id: "events",
  label: "Events",
  src: "/images/fans/events.png",
  alt: "Events page for Barcelona with friends, latest shows, and upcoming rows",
};

const wallet: Screen = {
  id: "wallet",
  label: "Wallet",
  src: "/images/fans/wallet.png",
  alt: "GETIN wallet card with balance, voucher, send, and fund actions",
};

const send: Screen = {
  id: "send",
  label: "Send",
  src: "/images/fans/send.png",
  alt: "Send Funds screen with the GETIN balance and an amount field",
};

const recipients: Screen = {
  id: "recipients",
  label: "Recipients",
  src: "/images/fans/recipients.png",
  alt: "Recent GETIN recipients with search and add recipient",
};

const redeem: Screen = {
  id: "redeem",
  label: "Redeem",
  src: "/images/fans/redeem.png",
  alt: "Redeem Voucher screen with a code field",
};

const flow = [welcome, tickets, events, wallet, send, recipients, redeem];

function StepArrow() {
  return (
    <span className="inline-flex w-[1.75rem] shrink-0 justify-center">
      <Arrow />
    </span>
  );
}

export default function FansScreens() {
  const [active, setActive] = useState<Screen | null>(null);

  return (
    <>
      <div className="mt-10 flex flex-col items-center md:hidden">
        {flow.map((screen, index) => (
          <div key={screen.id} className="flex flex-col items-center">
            {index > 0 ? (
              <span className="py-2 text-[13px] text-faint" aria-hidden="true">
                ↓
              </span>
            ) : null}
            <ScreenThumb screen={screen} onOpen={setActive} />
          </div>
        ))}
      </div>

      <div className="mt-10 hidden overflow-x-auto pb-1 md:block">
        <div className="mx-auto w-max">
          <div className="flex items-start">
            <ScreenThumb screen={welcome} onOpen={setActive} />
            <StepArrow />
            <ScreenThumb screen={tickets} onOpen={setActive} />
            <StepArrow />
            <ScreenThumb screen={events} onOpen={setActive} />
            <StepArrow />
            <ScreenThumb screen={wallet} onOpen={setActive} />
          </div>
          <div className="ml-[30.75rem] w-[8.5rem]">
            <Stem />
          </div>
          <div className="ml-[30.75rem] flex items-start">
            <ScreenThumb screen={send} onOpen={setActive} />
            <StepArrow />
            <ScreenThumb screen={recipients} onOpen={setActive} />
          </div>
          <div className="ml-[30.75rem] w-[8.5rem]">
            <Stem />
          </div>
          <div className="ml-[30.75rem]">
            <ScreenThumb screen={redeem} onOpen={setActive} />
          </div>
        </div>
      </div>

      <ScreenLightbox screens={flow} active={active} onChange={setActive} />
    </>
  );
}
