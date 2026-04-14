"use client";

import { ButtonDefault } from "@/components/ui/ButtonDefault";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ITEMS = [
  {
    theme: "white",
    title: "Social strategy",
    n: "1",
    video: "/home/expertise-social.mp4",
    h3: "Slimme strategie. Sterke start.",
    body: "We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.",
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
    body: "We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.",
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

    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let idleId: number | undefined;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 992px)", () => {
        const slides = root.querySelectorAll<HTMLElement>(".mwg_effect031 .expertise-slide");

        slides.forEach((slide, index) => {
          const isLast = index === slides.length - 1;
          const contentWrapper = slide.querySelector<HTMLElement>(".expertise-wrap");
          const content = slide.querySelector<HTMLElement>(".expertise-content");
          if (!contentWrapper || !content || isLast) return;
          gsap.set(content, {
            autoAlpha: 1,
            rotationZ: 0,
            rotationX: 0,
            scale: 1,
            yPercent: 0,
            transformPerspective: 1200,
            transformOrigin: "50% 50%",
          });

          gsap.to(content, {
            rotationZ: (Math.random() - 0.5) * 10,
            scale: 0.7,
            rotationX: 40,
            ease: "power1.in",
            scrollTrigger: {
              pin: contentWrapper,
              trigger: slide,
              start: "top top",
              end: () => `+=${window.innerHeight}`,
              scrub: true,
              invalidateOnRefresh: true,
            },
          });

          const pinDuration = window.innerHeight;
          gsap.to(content, {
            autoAlpha: 0,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: slide,
              start: () => `top+=${pinDuration * 0.75} top`,
              end: () => `top+=${pinDuration} top`,
              scrub: true,
              invalidateOnRefresh: true,
            },
          });
        });
      });
      return () => mm.revert();
    }, root);

    const initExpertiseScrollEffect = () => ScrollTrigger.refresh();
    const w = window as Window & {
      requestIdleCallback?: (callback: IdleRequestCallback) => number;
      cancelIdleCallback?: (handle: number) => void;
    };
    if (typeof w.requestIdleCallback === "function") {
      idleId = w.requestIdleCallback(initExpertiseScrollEffect);
    } else {
      timeoutId = setTimeout(initExpertiseScrollEffect, 500);
    }

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (idleId && typeof w.cancelIdleCallback === "function") {
        w.cancelIdleCallback(idleId);
      }
      window.removeEventListener("resize", onResize);
      ctx.revert();
    };
  }, []);

  return (
    <section id="expertises" className="section_expertises bg-gh-page">
      <div className="px-10 pb-8 pt-8 max-[479px]:px-5">
        <div className="mx-auto w-full max-w-[120em]">
          <div ref={rootRef} className="mwg_effect031">
            <div className="expertises-list flex flex-col gap-0">
              {ITEMS.map((item, index) => (
                <div
                  key={item.href}
                  className={`expertise-slide relative ${index < ITEMS.length - 1 ? "min-[992px]:pb-[43.5em]" : ""}`.trim()}
                >
                  <div className="expertise-wrap [perspective:1200px] min-[992px]:h-[37.05em]">
                    <div
                      className={`expertise-content relative overflow-hidden rounded-[2rem] p-6 [transform-style:preserve-3d] min-[768px]:p-8 min-[992px]:h-full min-[992px]:rounded-[2.5em] min-[992px]:p-[2.5em] ${themeClasses(item.theme)}`}
                    >
                      <div className="grid grid-cols-1 gap-8 min-[992px]:h-full min-[992px]:grid-cols-12 min-[992px]:grid-rows-[auto_1fr] min-[992px]:gap-x-8 min-[992px]:gap-y-3">
                        <div className="expertise-content_top min-[992px]:col-span-8 min-[992px]:row-start-1">
                          <div className="label mb-3">
                            <div className="paragraph-m inline-flex rounded-md bg-[#e8e3d7] px-2 py-1 text-[0.9rem] opacity-100">Expertise</div>
                          </div>
                          <h2 className="expertise-content_heading text-[2.2rem] leading-[0.95] font-semibold tracking-[-0.045em] min-[768px]:text-[3.5rem] min-[992px]:text-[5rem]">
                            {item.title}
                          </h2>
                        </div>
                        <div className="expertise-content_number flex items-start justify-end gap-0.5 font-semibold leading-none opacity-20 select-none min-[992px]:col-span-4 min-[992px]:row-start-1">
                          <span className="expertise-content_heading text-[3rem] min-[992px]:text-[5.3rem]">0</span>
                          <span className="expertise-content_heading text-[3rem] min-[992px]:text-[5.3rem]">{item.n}</span>
                        </div>

                        <div className="expertise-content_bottom flex flex-col gap-4 min-[992px]:col-span-7 min-[992px]:row-start-2 min-[992px]:self-end">
                          <h3 className="heading-xs">{item.h3}</h3>
                          <p className={`paragraph-m max-w-[31ch] ${item.theme === "blue" ? "text-white/90" : "text-gh-black/85"}`}>
                            {item.body}
                          </p>
                          <div className="button-wrap relative z-20 pt-1">
                            <ButtonDefault href={item.href} variant="solid">
                              {item.cta}
                            </ButtonDefault>
                          </div>
                        </div>

                        <div className="expertise-content_img min-[992px]:col-span-5 min-[992px]:row-start-2 min-[992px]:self-center min-[992px]:justify-self-end">
                          <div
                            className={`medium-image aspect-[4/5] w-full max-w-[18rem] overflow-hidden rounded-[1.25em] border-[0.25em] min-[992px]:max-w-[16em] min-[992px]:rotate-[3deg] ${mediaFrameClasses(item.theme)}`}
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
      </div>
    </section>
  );
}
