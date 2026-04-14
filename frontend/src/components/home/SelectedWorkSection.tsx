"use client";

import { ButtonDefault } from "@/components/ui/ButtonDefault";
import Link from "next/link";
import { useRef } from "react";

const arrowIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 27" fill="none" className="h-5 w-5">
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
        border: "border-gh-red",
        overlay: "bg-gh-red text-black",
        label: "bg-[#ff8a6a] text-black",
      };
    case "blue":
      return {
        border: "border-blue-500",
        overlay: "bg-blue-500 text-white",
        label: "bg-blue-300/80 text-white",
      };
    case "green":
      return {
        border: "border-emerald-500",
        overlay: "bg-emerald-500 text-white",
        label: "bg-emerald-200/90 text-white",
      };
  }
}

function WorkCard({ item, index }: { item: (typeof CASES)[number]; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const t = cardTheme(item.theme);

  const offsets = [
    "md:translate-y-10",
    "md:translate-y-0",
    "md:-translate-y-10",
  ];

  return (
    <div className={`w-full md:max-w-[300px] ${offsets[index]}`}>
      <Link
        href={item.href}
        className={`group relative block overflow-hidden rounded-[24px] border-[4px] transition-transform duration-300 hover:-translate-y-1 ${t.border}`}
        onMouseEnter={() => videoRef.current?.play().catch(() => {})}
        onMouseLeave={() => {
          if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
          }
        }}
      >
        {/* MEDIA */}
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <img
            src={item.poster}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
            alt=""
          />
          <video
            ref={videoRef}
            src={item.video}
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover scale-100 transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* CONTENT */}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <div className={`relative rounded-xl p-4 ${t.overlay}`}>
            
            {/* angled top */}
            <div
              className={`absolute -top-6 left-0 right-0 h-10 ${t.overlay}`}
              style={{ clipPath: "polygon(0 70%, 100% 20%, 100% 100%, 0 100%)" }}
            />

            {/* arrow */}
            <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
              {arrowIcon}
            </div>

            <h3 className="mb-2 text-lg font-semibold leading-tight max-w-[14ch]">
              {item.title}
            </h3>

            <span className={`inline-block rounded-md px-2 py-1 text-sm font-semibold ${t.label}`}>
              {item.label}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export function SelectedWorkSection() {
  return (
    <section className="bg-[#f5f1ea] md:min-h-screen">
      <div className="mx-auto max-w-[1100px] px-6 py-20 md:flex md:min-h-screen md:flex-col md:justify-center md:px-8 md:py-20">

        {/* TEXT */}
        <div className="max-w-[520px]">
          <h2 className="max-w-[8ch] text-[64px] leading-[0.95] tracking-[-0.03em] font-bold">
            Content dat scoort.
          </h2>

          <p className="mt-5 max-w-[22ch] text-gray-700">
            Wij vertellen jouw verhaal. Op een manier die écht past bij jouw doelgroep.
            Met creatieve content die werkt en het verschil maakt.
          </p>

          <div className="mt-6">
            <ButtonDefault href="/work" variant="outline">
              Bekijk al ons werk
            </ButtonDefault>
          </div>
        </div>

        {/* CARDS */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3 md:items-end md:gap-10">
          {CASES.map((item, index) => (
            <WorkCard key={item.href} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}