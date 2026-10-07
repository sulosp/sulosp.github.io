"use client";

import { useState } from "react";
import { Arrow, ScreenLightbox, ScreenThumb, Stem, type Screen } from "@/components/screenFlow";

const homepage: Screen = {
  id: "homepage",
  label: "Homepage",
  src: "/images/getin/cover.png",
  alt: "GETIN homepage with the category rail and three event cards",
};

const eventPage: Screen = {
  id: "event",
  label: "Event",
  src: "/images/getin/event.png",
  alt: "Event page for Teksupport Peggy Gou, from the poster through the venue",
};

const tickets: Screen = {
  id: "tickets",
  label: "Tickets",
  src: "/images/getin/tickets.png",
  alt: "Ticket stub beside the admission pass",
};

const create: Screen = {
  id: "create",
  label: "Create",
  src: "/images/getin/create.png",
  alt: "Create New Event form, from the cover upload to the artist search",
};

const myEvents: Screen = {
  id: "my-events",
  label: "My Events",
  src: "/images/getin/my-events.png",
  alt: "My Events for an organizer, with the next night and the event list",
};

const analytics: Screen = {
  id: "analytics",
  label: "Analytics",
  src: "/images/getin/analytics.png",
  alt: "Sales analytics with ticket states and two weeks of bars",
};

const attendees: Screen = {
  id: "attendees",
  label: "Attendees",
  src: "/images/getin/attendees.png",
  alt: "Attendee list with payment, status, ticket, and amount",
};

const flow = [homepage, eventPage, tickets, create, myEvents, analytics, attendees];

export default function GetinScreens() {
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
        <div className="mx-auto grid w-max grid-cols-[8.5rem_1.75rem_8.5rem_1.75rem_8.5rem_1.75rem_8.5rem] justify-center">
          <ScreenThumb screen={homepage} onOpen={setActive} />
          <Arrow />
          <ScreenThumb screen={eventPage} onOpen={setActive} />
          <Arrow />
          <ScreenThumb screen={tickets} onOpen={setActive} />
          <span className="col-span-2" />

          <Stem />
          <span className="col-span-6" />

          <ScreenThumb screen={create} onOpen={setActive} />
          <Arrow />
          <ScreenThumb screen={myEvents} onOpen={setActive} />
          <Arrow />
          <ScreenThumb screen={analytics} onOpen={setActive} />
          <Arrow />
          <ScreenThumb screen={attendees} onOpen={setActive} />
        </div>
      </div>

      <ScreenLightbox screens={flow} active={active} onChange={setActive} />
    </>
  );
}
