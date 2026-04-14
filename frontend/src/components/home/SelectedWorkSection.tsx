"use client";

import { ButtonDefault } from "@/components/ui/ButtonDefault";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const arrowIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 28 27" fill="none" className="h-6 w-6" aria-hidden>
    <path
      d="M14.9554 26.0653L12.2003 23.337L20.4522 15.0851L0.404297 15.0851L0.404297 11.0996L20.4522 11.0996L12.2003 2.86109L14.9554 0.119385L27.9284 13.0923L14.9554 26.0653Z"
      fill="currentColor"
    />
  </svg>
);

const CASES = [
  {
    href: "/work/bullit",
    video: "/home/work-bullit.mp4",
    poster: "/home/work-bullit.avif",
    title: "Van nul naar vol, binnen 3 weken",
    label: "Bullit",
    theme: "red" as const,
  },
  {
    href: "/work/roasta",
    video: "/home/work-roasta.mp4",
    poster: "/home/work-roasta.avif",
    title: "Zacht in smaak, sterk in beeld",
    label: "Roasta",
    theme: "blue" as const,
  },
  {
    href: "/work/loco-loco",
    video: "/home/work-loco.mp4",
    poster: "/home/work-loco.avif",
    title: "Content die écht smaakt (en raakt)",
    label: "Loco",
    theme: "green" as const,
  },
];

function cardTheme(t: (typeof CASES)[number]["theme"]) {
  switch (t) {
    case "red":
      return {
        card: "bg-gh-red text-gh-black",
        shape: "text-gh-red",
        label: "bg-[#ff8a6a] text-gh-black",
      };
    case "blue":
      return {
        card: "bg-gh-hero-blue text-gh-black",
        shape: "text-gh-hero-blue",
        label: "bg-blue-300/80 text-gh-black",
      };
    case "green":
      return {
        card: "bg-gh-hero-green text-gh-black",
        shape: "text-gh-hero-green",
        label: "bg-emerald-200/90 text-gh-black",
      };
  }
}

function WorkCard({ item, index }: { item: (typeof CASES)[number]; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const t = cardTheme(item.theme);
  const desktopOffsets = ["min-[992px]:translate-y-10", "min-[992px]:translate-y-2", "min-[992px]:-translate-y-6"];

  return (
    <div className={`sw-item w-full min-[992px]:max-w-[22rem] ${desktopOffsets[index] ?? ""}`} data-index={index}>
      <Link
        href={item.href}
        prefetch
        className={`sw-card group/sw relative block overflow-hidden rounded-[1.6rem] border-[0.28rem] no-underline [transform-style:preserve-3d] max-[478px]:origin-center ${index === 1 ? "max-[478px]:rotate-1" : ""} ${index === 2 ? "max-[478px]:-rotate-1" : ""} ${t.card} ${t.shape}`.trim()}
        aria-label={`Case: ${item.label}`}
        onMouseEnter={() => {
          const v = videoRef.current;
          if (!v) return;
          void v.play().catch(() => {});
        }}
        onMouseLeave={() => {
          const v = videoRef.current;
          if (!v) return;
          v.pause();
          v.currentTime = 0;
        }}
      >
        <div className="sw-card_video relative aspect-[4/5] w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.poster}
            alt=""
            className="video-card_placeholder hidden h-full w-full object-cover min-[480px]:block"
            draggable={false}
          />
          <video
            ref={videoRef}
            className="video-card_video hidden h-full w-full object-cover min-[480px]:block"
            muted
            loop
            playsInline
            src={item.video}
          />
          <div className="sw-card_mobile-video min-[480px]:hidden">
            <video className="h-full w-full object-cover" muted loop playsInline autoPlay src={item.video} />
          </div>
        </div>

        <div className="sw-card_wrap pointer-events-none absolute inset-x-0 bottom-0 z-[2]">
          <div className="sw-card_content relative z-[1] m-2 rounded-[1.1rem] px-3 pb-3 pt-2 min-[768px]:m-3 min-[768px]:px-4 min-[768px]:pb-4 min-[768px]:pt-3">
            <h3 className="heading-xs mb-4 max-w-[20ch]">{item.title}</h3>
            <div className={`label is-sw inline-flex rounded-md px-2 py-1 ${t.label}`}>
              <div className="paragraph-regular text-sm font-semibold">{item.label}</div>
            </div>
          </div>
          <div className="absolute bottom-4 right-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gh-white text-gh-black shadow-sm">
              {arrowIcon}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export function SelectedWorkSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.innerWidth <= 478) return;

    const items = section.querySelectorAll<HTMLElement>(".sw-item");
    const targets: (string | undefined)[] = ["0em", "-12em", "-24em"];

    const ctx = gsap.context(() => {
      items.forEach((item, index) => {
        const targetY = targets[index];
        if (targetY === undefined) return;
        gsap.fromTo(
          item,
          { y: "6em" },
          {
            y: targetY,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section_selected-work bg-gh-page">
      <div className="px-10 py-16 min-[992px]:py-24 max-[479px]:px-5">
        <div className="mx-auto w-full max-w-[120em]">
          <div className="mb-8 grid gap-8 min-[992px]:mb-4 min-[992px]:grid-cols-12 min-[992px]:gap-12">
            <div className="min-[992px]:col-span-4">
              <h2 className="heading-xl">
                <strong>Content dat scoort.</strong>
              </h2>
            </div>
            <div className="flex flex-col justify-end min-[992px]:col-span-8 min-[992px]:pl-2">
              <p className="paragraph-m max-w-[30ch] text-gh-black">
                Wij vertellen jouw verhaal. Op een manier die écht past bij jouw doelgroep. Met creatieve content die werkt en
                het verschil maakt.
              </p>
              <div className="button-wrap mt-4">
                <ButtonDefault href="/work" variant="outline">
                  Bekijk al ons werk
                </ButtonDefault>
              </div>
            </div>
          </div>

          <div className="sw-collection">
            <div className="sw-list flex flex-col gap-6 min-[992px]:flex-row min-[992px]:items-start min-[992px]:gap-8">
              {CASES.map((item, index) => (
                <WorkCard key={item.href} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
