"use client";

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

/** Self-hosted under `public/hero` — native `<video>`, no third-party players. */
const SALONTOPPER_VIDEO = "/hero/salontopper-loop.mp4";
const PETROL_VIDEO = "/hero/petrolhead-loop.mp4";
const THUMB_01 = "/hero/video-thumb-01.avif";
const THUMB_02 = "/hero/video-thumb-02.avif";

const cardBase =
  "results-card will-change-transform relative isolate flex-1 overflow-hidden rounded-[2rem] shadow-[0_12px_40px_rgba(0,0,0,0.12)] " +
  "min-[768px]:max-[991px]:flex-none min-[768px]:max-[991px]:shrink-0 min-[768px]:max-[991px]:w-[clamp(12rem,26vw,15.5rem)]";

/** `.mwg_effect025 .results-card:not(:first-child)` overlap margins */
const overlap =
  "-ml-[6vw] min-[480px]:max-[767px]:-ml-[3vw] min-[768px]:max-[991px]:-ml-[clamp(0.75rem,2.2vw,1.35rem)] min-[992px]:-ml-[4vw]";

export function HeroCardsMWG() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const mq = window.matchMedia("(min-width: 992px)");
    let currentPortion = 0;

    const cards = () =>
      cardRefs.current.filter((n): n is HTMLDivElement => n !== null);

    const resetPortion = (index: number) => {
      const list = cards();
      if (index < 0 || index >= list.length) return;
      gsap.to(list[index], {
        xPercent: (Math.random() - 0.5) * 10,
        yPercent: (Math.random() - 0.5) * 10,
        rotation: (Math.random() - 0.5) * 20,
        scale: 1,
        duration: 0.8,
        ease: "elastic.out(1, 0.75)",
      });
    };

    const newPortion = (i: number) => {
      const list = cards();
      if (!list.length) return;

      gsap.to(list[i], {
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        duration: 0.8,
        scale: 1.1,
        ease: "elastic.out(1, 0.75)",
      });

      list.forEach((el, index) => {
        if (index !== i) {
          gsap.to(el, {
            xPercent: 24 / (index - i),
            ease: "elastic.out(1, 0.75)",
            duration: 0.8,
          });
        } else {
          gsap.to(el, {
            xPercent: 0,
            ease: "elastic.out(1, 0.75)",
            duration: 0.8,
          });
        }
      });
    };

    const onMove = (e: MouseEvent) => {
      const list = cards();
      if (!list.length) return;
      const rect = container.getBoundingClientRect();
      const containerW = rect.width;
      const mouseX = e.clientX - rect.left;
      const percentage = mouseX / containerW;
      const activePortion = Math.ceil(percentage * list.length);

      if (
        currentPortion !== activePortion &&
        activePortion > 0 &&
        activePortion <= list.length
      ) {
        if (currentPortion !== 0) resetPortion(currentPortion - 1);
        currentPortion = activePortion;
        newPortion(currentPortion - 1);
      }
    };

    const onLeave = () => {
      const list = cards();
      if (currentPortion > 0) resetPortion(currentPortion - 1);
      currentPortion = 0;
      gsap.to(list, {
        xPercent: 0,
        ease: "elastic.out(1, 0.75)",
        duration: 0.8,
      });
    };

    let active = false;

    const enable = () => {
      if (active) return;
      active = true;
      const list = cards();
      list.forEach((card) => {
        gsap.set(card, {
          xPercent: (Math.random() - 0.5) * 10,
          yPercent: (Math.random() - 0.5) * 10,
          rotation: (Math.random() - 0.5) * 20,
        });
      });
      container.addEventListener("mousemove", onMove);
      container.addEventListener("mouseleave", onLeave);
    };

    const disable = () => {
      if (!active) return;
      active = false;
      container.removeEventListener("mousemove", onMove);
      container.removeEventListener("mouseleave", onLeave);
      const list = cards();
      gsap.killTweensOf(list);
      gsap.set(list, { clearProps: "transform" });
    };

    const applyMq = () => {
      if (mq.matches) enable();
      else disable();
    };

    applyMq();
    mq.addEventListener("change", applyMq);

    return () => {
      mq.removeEventListener("change", applyMq);
      disable();
    };
  }, []);

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    cardRefs.current[i] = el;
  };

  return (
    <div className="mwg_effect025 w-full md:px-12 py-6 md:py-2 px-4">
      <div className="w-full">
        <div
          ref={containerRef}
          className={
            "is-mwg_effect025 flex w-full flex-nowrap items-center justify-start gap-0 overflow-visible pb-[1em] pt-[0.5em] " +
            "min-[480px]:justify-center min-[768px]:max-[991px]:mx-auto min-[768px]:max-[991px]:max-w-[44rem] min-[992px]:pb-[2em] min-[992px]:pt-[1em]"
          }
        >
          {/* 1 — theme-blue stat */}
          <div
            ref={setCardRef(0)}
            className={`${cardBase} relative z-[1] aspect-[4.8/6.2] bg-gh-hero-blue text-gh-black max-[479px]:z-[1]`}
          >
            <div className="results-card_content flex h-full w-full flex-col justify-between p-6">
              <div className="results-card_title text-7xl  font-semibold leading-[0.9] tracking-[-0.05em]">
                10M+
              </div>
              <div className="results-card_body flex w-full flex-col gap-[0.4em]">
                <h2 className="results-card_subtitle text-2xl font-semibold leading-[1.1] tracking-[-0.03em]">
                  Organische views
                </h2>
                <div className="results-card_divider h-px w-full bg-gh-black" />
                <p className="results-card_paragraph max-w-[95%] text-medium  font-base leading-[1.3] tracking-[-0.02em] text-gh-black/90">
                  Groei door slimme content
                </p>
              </div>
            </div>
          </div>

          {/* 2 — video */}
          <div ref={setCardRef(1)} className={`${cardBase} ${overlap} z-[2] aspect-[4.8/6.2] bg-black max-[479px]:rotate-[6deg]`}>
            <video
              className="absolute inset-0 z-[1] h-full w-full object-cover"
              muted
              loop
              playsInline
              autoPlay
              preload="metadata"
              poster={THUMB_01}
            >
              <source src={SALONTOPPER_VIDEO} type="video/mp4" />
            </video>
          </div>

          {/* 3 — theme-green (hide-mobile) */}
          <div
            ref={setCardRef(2)}
            className={`${cardBase} ${overlap} hidden aspect-[4.8/6.2] bg-gh-hero-green text-gh-black min-[480px]:block`}
          >
            <div className="results-card_content flex h-full w-full flex-col justify-between p-6">
              <div className="results-card_title text-7xl font-semibold leading-[0.9] tracking-[-0.05em]">
                30+
              </div>
              <div className="results-card_body flex w-full flex-col gap-[0.4em]">
                <h2 className="results-card_subtitle text-2xl font-semibold leading-[1.1] tracking-[-0.03em]">
                  Merken geholpen
                </h2>
                <div className="results-card_divider h-px w-full bg-gh-black" />
                <p className="results-card_paragraph max-w-[95%] text-medium  font-base leading-[1.3] tracking-[-0.02em] text-gh-black/90">
                  Van start-up tot multinational
                </p>
              </div>
            </div>
          </div>

          {/* 4 — video (hide-tablet-mobile) */}
          <div
            ref={setCardRef(3)}
            className={`${cardBase} ${overlap} hidden aspect-[4.8/6.2] bg-black min-[992px]:block`}
          >
            <video
              className="absolute inset-0 z-[1] h-full w-full object-cover"
              muted
              loop
              playsInline
              autoPlay
              preload="metadata"
              poster={THUMB_02}
            >
              <source src={PETROL_VIDEO} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}