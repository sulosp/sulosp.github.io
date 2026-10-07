"use client";

import { useState } from "react";
import { Arrow, ScreenLightbox, ScreenThumb, Stem, type Screen } from "@/components/screenFlow";

const whoWeAre: Screen = {
  id: "who-we-are",
  label: "Who we are",
  src: "/images/proverb/who-we-are.jpg",
  alt: "Who we are template, with the team and values",
};

const whatWeDo: Screen = {
  id: "what-we-do",
  label: "What we do",
  src: "/images/proverb/what-we-do.jpg",
  alt: "What we do template, with sectors and services",
};

const home: Screen = {
  id: "home",
  label: "Home",
  src: "/images/proverb/home.jpg",
  alt: "Homepage, opening on sectors and specialties",
};

const work: Screen = {
  id: "work",
  label: "Work",
  src: "/images/proverb/work.jpg",
  alt: "Work template, with the sector filter",
};

const caseStudy: Screen = {
  id: "case-study",
  label: "Case study",
  src: "/images/proverb/case-study.jpg",
  alt: "Case study template, from the overview through proof",
};

const contact: Screen = {
  id: "contact",
  label: "Contact",
  src: "/images/proverb/contact.jpg",
  alt: "Contact template, with the address and the form",
};

const careers: Screen = {
  id: "careers",
  label: "Careers",
  src: "/images/proverb/careers.jpg",
  alt: "Careers template, with perks and openings",
};

const blog: Screen = {
  id: "blog",
  label: "Blog",
  src: "/images/proverb/blog.jpg",
  alt: "Blog template, with the featured story and the list",
};

const flow = [whoWeAre, whatWeDo, home, work, caseStudy, contact, careers, blog];

export default function ProverbScreens() {
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
          <ScreenThumb screen={whoWeAre} onOpen={setActive} />
          <span />
          <ScreenThumb screen={whatWeDo} onOpen={setActive} />
          <span className="col-span-4" />

          <Stem />
          <span />
          <Stem />
          <span className="col-span-4" />

          <ScreenThumb screen={home} onOpen={setActive} />
          <Arrow />
          <ScreenThumb screen={work} onOpen={setActive} />
          <Arrow />
          <ScreenThumb screen={caseStudy} onOpen={setActive} />
          <Arrow />
          <ScreenThumb screen={contact} onOpen={setActive} />

          <Stem />
          <span className="col-span-6" />

          <ScreenThumb screen={careers} onOpen={setActive} />
          <Arrow />
          <ScreenThumb screen={blog} onOpen={setActive} />
        </div>
      </div>

      <ScreenLightbox screens={flow} active={active} onChange={setActive} />
    </>
  );
}
