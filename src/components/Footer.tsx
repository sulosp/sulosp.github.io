import Image from "next/image";
import { images, site } from "@/data/site";
import Reveal from "./Reveal";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <section id="contact" className="section-x scroll-mt-28 py-[clamp(6rem,14vw,11rem)]">
        <div className="content text-center">
          <Reveal>
            <h2 className="mx-auto max-w-[16ch] text-[clamp(2rem,5.2vw,4.2rem)] leading-[1.16] font-medium tracking-[-0.04em]">
              Got a project in mind?
            </h2>
            <p className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[clamp(2rem,5.2vw,4.2rem)] leading-[1.16] font-medium tracking-[-0.04em]">
              <span>Let&apos;s get</span>
              
              <span>started.</span>
            </p>
          </Reveal>
          <Reveal delay={0.08} className="mt-10">
            <a href={`mailto:${site.email}`} className="btn-primary rounded-[50px]">
              Chat with me
            </a>
          </Reveal>
        </div>
      </section>

      <div className="bg-footer text-footer-fg">
        <div className="section-x py-20 md:py-28">
          <div className="content flex flex-col items-center text-center">
            <p className="text-2xl font-semibold tracking-tight lowercase">{site.wordmark}</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-10 text-sm underline decoration-footer-fg/30 underline-offset-4 hover:decoration-footer-fg"
            >
              Email Me
            </a>
            <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs tracking-wide uppercase opacity-70">
              {site.socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                  {social.label}
                </a>
              ))}
            </div>
            <p className="mt-14 text-xs opacity-55">
              © {site.name} {year}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
