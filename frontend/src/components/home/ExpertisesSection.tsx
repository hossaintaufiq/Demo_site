"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const arrowIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 22 21" fill="none" className="h-[0.85em] w-[0.85em]" aria-hidden>
    <path d="M11.2832 20.9176L9.14509 18.8002L15.5491 12.3962H0V9.30322H15.5491L9.14509 2.9096L11.2832 0.78186L21.3511 10.8497L11.2832 20.9176Z" fill="currentColor" />
  </svg>
);

const ITEMS = [
  {
    theme: "white",
    title: "Social strategy",
    n: "1",
    video: "/home/expertise-social.mp4",
    h3: "Slimme strategie. Sterke start.",
    body: "We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die echt impact maken. Zo weet je precies waarom het werkt.",
    href: "/expertises/social-strategie",
    cta: "Meer over social strategie",
  },
  {
    theme: "pink",
    title: "Content creation",
    n: "2",
    video: "/home/expertise-content.mp4",
    h3: "Content die opvalt en raakt.",
    body: "We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.",
    href: "/expertises/content-creatie",
    cta: "Meer over content creatie",
  },
  {
    theme: "green",
    title: "Activation",
    n: "3",
    video: "/home/expertise-activation.mp4",
    h3: "Zichtbaar waar en wanneer het telt.",
    body: "De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen, precies waar en wanneer het telt.",
    href: "/expertises/activatie",
    cta: "Meer over activatie",
  },
  {
    theme: "blue",
    title: "Data",
    n: "4",
    video: "/home/expertise-data.mp4",
    h3: "Inzichten die impact maken.",
    body: "We duiken in de cijfers om te snappen wat echt werkt. En sturen jouw content scherp bij.",
    href: "/expertises/data",
    cta: "Meer over data",
  },
] as const;

function themeClasses(t: (typeof ITEMS)[number]["theme"]) {
  switch (t) {
    case "white":
      return "bg-gh-white text-gh-black";
    case "pink":
      return "bg-gh-pink text-gh-black";
    case "green":
      return "bg-gh-hero-green text-gh-black";
    case "blue":
      return "bg-gh-hero-blue text-gh-white";
    default:
      return "bg-gh-white text-gh-black";
  }
}

function mediaFrameClasses(t: (typeof ITEMS)[number]["theme"]) {
  switch (t) {
    case "white":
      return "border-gh-red";
    case "pink":
      return "border-white/80";
    case "green":
      return "border-white/70";
    case "blue":
      return "border-white/70";
    default:
      return "border-gh-red";
  }
}

export function ExpertisesSection() {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 992px)", () => {
        const pinShell = root.querySelector<HTMLElement>(".expertises-pin-shell");
        if (!pinShell) return;

        const cards = Array.from(
          root.querySelectorAll<HTMLElement>(".expertise-content")
        );
        if (!cards.length) return;

        cards.forEach((card, i) => {
          gsap.set(card, {
            autoAlpha: i === 0 ? 1 : 0,
            yPercent: i === 0 ? 0 : 102,
            scale: i === 0 ? 1 : 1,
            zIndex: ITEMS.length - i,
          });
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinShell,
            start: "top top",
            end: `+=${Math.max(1, cards.length - 1) * 100}%`,
            scrub: 1.1,
            pin: pinShell,
            anticipatePin: 1,
            fastScrollEnd: true,
            invalidateOnRefresh: true,
          },
        });

        cards.forEach((card, i) => {
          if (i === 0) return;

          // Bring the next card in from below while the previous one subtly
          // shifts upward, matching the stacked overlap behavior.
          tl.set(card, { autoAlpha: 1 }, `step-${i}`)
            .to(
              cards[i - 1],
              {
                yPercent: -5,
                scale: 0.99,
                duration: 1.12,
                ease: "power3.inOut",
              },
              `step-${i}`
            )
            .to(
              card,
              {
                yPercent: 0,
                scale: 1,
                duration: 1.12,
                ease: "power3.inOut",
              },
              `step-${i}`
            )
            .set(cards[i - 1], { autoAlpha: 0 }, `step-${i}+=0.98`);
        });
      });

      return () => mm.revert();
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="expertises" className="section_expertises bg-gh-page">
      <div ref={rootRef} className="mwg_effect031">
        <div className="expertises-pin-shell min-[992px]:h-screen min-[992px]:overflow-hidden">
          <div className="expertises-list relative flex flex-col gap-6 min-[992px]:h-screen">
              {ITEMS.map((item, index) => (
                <div
                  key={item.href}
                  className="expertise-slide relative min-[992px]:absolute min-[992px]:inset-0"
                >
                  <div className="expertise-wrap [perspective:1200px] min-[992px]:h-full min-[992px]:w-full">
                    <div
                      className={`expertise-content relative overflow-hidden rounded-[2rem] p-6 [transform-style:preserve-3d] min-[768px]:p-8 min-[992px]:mx-auto min-[992px]:mt-9 min-[992px]:h-[calc(100vh-6.25rem)] min-[992px]:w-[calc(100%-7rem)] min-[992px]:max-w-[1560px] min-[992px]:rounded-[1.5rem] min-[992px]:px-[2rem] min-[992px]:py-[1.85rem] ${themeClasses(item.theme)}`}
                    >
                      <div className="grid grid-cols-1 gap-8 min-[992px]:mx-auto min-[992px]:h-full min-[992px]:w-full min-[992px]:max-w-[1600px] min-[992px]:grid-cols-12 min-[992px]:grid-rows-[auto_1fr] min-[992px]:gap-x-12 min-[992px]:gap-y-4">
                        <div className="expertise-content_top min-[992px]:col-span-8 min-[992px]:row-start-1">
                          <div className="label mb-3">
                            <div className="paragraph-m inline-flex rounded-md bg-[#e8e3d7] px-2 py-1 text-[0.9rem] opacity-100">
                              Expertise
                            </div>
                          </div>
                          <h2 className="expertise-content_heading text-[2.2rem] leading-[0.95] font-semibold tracking-[-0.045em] min-[768px]:text-[3.5rem] min-[992px]:text-[6.5rem]">
                            {item.title}
                          </h2>
                        </div>
                        <div className="expertise-content_number flex items-start justify-end gap-0.5 font-semibold leading-none opacity-20 select-none min-[992px]:col-span-4 min-[992px]:row-start-1">
                          <span className="expertise-content_heading text-[3rem] min-[992px]:text-[7rem]">
                            0
                          </span>
                          <span className="expertise-content_heading text-[3rem] min-[992px]:text-[7rem]">
                            {item.n}
                          </span>
                        </div>

                        <div className="expertise-content_bottom flex flex-col gap-4 min-[992px]:col-span-7 min-[992px]:row-start-2 min-[992px]:self-end">
                          <h3 className="heading-xs">{item.h3}</h3>
                          <p
                            className={`paragraph-m max-w-[31ch] ${
                              item.theme === "blue"
                                ? "text-white/90"
                                : "text-gh-black/85"
                            }`}
                          >
                            {item.body}
                          </p>
                          <div className="button-wrap relative z-20 pt-1">
                            <Link
                              href={item.href}
                              className="group/cta inline-flex items-center gap-2 rounded-[0.75rem] bg-white px-3 py-2 text-[0.98rem] font-semibold text-gh-black no-underline [transition:transform_250ms_ease] hover:translate-x-[2px]"
                            >
                              <span>{item.cta}</span>
                              <span className="inline-flex h-7 w-7 items-center justify-center rounded-[0.45rem] bg-gh-black text-white [transition:transform_250ms_ease] group-hover/cta:translate-x-[2px]">
                                {arrowIcon}
                              </span>
                            </Link>
                          </div>
                        </div>

                        <div className="expertise-content_img min-[992px]:col-span-5 min-[992px]:row-start-2 min-[992px]:self-center min-[992px]:justify-self-end">
                          <div
                            className={`medium-image aspect-[4/5] w-full max-w-[18rem] overflow-hidden rounded-[1.3em] border-[0.27em] min-[992px]:max-w-[22.5rem] min-[992px]:rounded-[1.45em] min-[992px]:border-[0.34em] min-[992px]:rotate-[2deg] ${mediaFrameClasses(item.theme)}`}
                          >
                            <video
                              className="h-full w-full object-cover"
                              autoPlay
                              muted
                              loop
                              playsInline
                              src={item.video}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}