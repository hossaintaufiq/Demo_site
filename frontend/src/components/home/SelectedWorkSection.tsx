"use client";

import { ButtonDefault } from "@/components/ui/ButtonDefault";
import Link from "next/link";
import { useRef } from "react";

const arrowIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 28 27"
    fill="none"
    className="h-4 w-4 -rotate-[45deg]"
  >
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

function WorkCard({
  item,
  index,
}: {
  item: (typeof CASES)[number];
  index: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const t = cardTheme(item.theme);

  const offsets = [
    "min-[992px]:translate-y-0",
    "min-[992px]:-translate-y-32",
    "min-[992px]:-translate-y-64",
  ];

  return (
    <div
      className={`mx-auto w-full  max-w-[24rem] min-[768px]:max-w-[120em] ${offsets[index]}`}
    >
      <div>
        <Link
          href={item.href}
          className={`group relative block overflow-hidden rounded-4xl border-[6px] md:border-[8px] transition-transform duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:-rotate-[1.5deg] hover:scale-[1.015] ${t.border}`}
          onMouseEnter={() => videoRef.current?.play().catch(() => {})}
          onMouseLeave={() => {
            if (videoRef.current) {
              videoRef.current.pause();
              videoRef.current.currentTime = 0;
            }
          }}
        >
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
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="absolute inset-x-0 bottom-0 p-3">
            <div className={`relative rounded-2xl  p-4 ${t.overlay}`}>
              <div
                className={`absolute -top-7  inset-x-0 h-10  rounded-t-2xl ${t.overlay}`}
                style={{
                  clipPath: "polygon(0 70%, 100% 0, 100% 100%, 0% 100%)",
                }}
              />

              <div className="absolute right-3 -top-2 grid h-12 w-12 overflow-hidden rounded-full bg-white text-black">
                <span className="col-start-1 row-start-1 flex items-center justify-center transition-transform duration-300 ease-out group-hover:translate-x-8 group-hover:-translate-y-8">
                  {arrowIcon}
                </span>
                <span className="col-start-1 row-start-1 flex items-center justify-center -translate-x-8 translate-y-8 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0">
                  {arrowIcon}
                </span>
              </div>

              <h3 className="mb-2 max-w-[14ch] text-2xl font-semibold leading-tight">
                {item.title}
              </h3>

              <span
                className={`inline-block rounded-md px-2 py-1 text-base font-medium ${t.label}`}
              >
                {item.label}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export function SelectedWorkSection() {
  return (
    <section className="bg-gh-page p-6">
      <div className="px-10 py-16 min-[992px]:py-24 max-[479px]:px-5">
        <div className="mx-auto w-full max-w-[120em] md:px-32">
          {/* 1 — Title */}
          <div className="mb-6 min-[992px]:mb-8 ">
            <h2 className="m-0 max-w-[8ch] text-8xl font-bold leading-[0.95] tracking-[-0.03em]">
              Content dat scoort.
            </h2>
          </div>

          {/* 2 — Description + button */}
          <div className="mb-12 max-w-[40rem] min-[992px]:mb-16">
            <p className="m-0 max-w-[30ch] text-2xl font-semibold leading-normal tracking-[-0.01em] text-gh-black/70">
              Wij vertellen jouw verhaal. Op een manier die écht past bij jouw
              doelgroep. Met creatieve content die werkt en het verschil maakt.
            </p>

            <div className="mt-8">
              <ButtonDefault href="/work" variant="outline"  >
                Bekijk al ons werk
              </ButtonDefault>
            </div>
          </div>

          {/* 3 — Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-20 place-items-center md:px-2">
            {CASES.map((item, index) => (
              <WorkCard key={item.href} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
