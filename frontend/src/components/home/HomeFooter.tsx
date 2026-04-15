"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { SwooshNavLink } from "@/components/SwooshNavLink";

/* ── Trail logos (mousemove effect) ── */
const TRAIL_LOGOS = [
  {
    src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3404e57460370b97757c_7719b29e960423bac19acd325c901392_gh-logo-blue.svg",
    alt: "Get Hyped logo blauw",
  },
  {
    src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415233f03ab6c1143fa_gh-logo-pink.svg",
    alt: "Get Hyped logo roze",
  },
  {
    src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415e192971624995445_gh-logo-green.svg",
    alt: "Get Hyped logo groen",
  },
  {
    src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415b3eecf81e4b1d9a7_gh-logo-red.svg",
    alt: "Get Hyped logo rood",
  },
];

/* ── Icons ── */
const fireIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" fill="none" className="h-[1.125em] w-auto" aria-hidden>
    <path
      d="M17.4906 11.0361C17.1898 10.6437 16.8237 10.3037 16.4837 9.96371C15.6075 9.17906 14.6136 8.61673 13.7766 7.79284C11.8281 5.88352 11.3965 2.73184 12.6389 0.3125C11.3965 0.613283 10.3111 1.29331 9.38256 2.03873C5.99549 4.75886 4.66158 9.55831 6.25704 13.6777C6.30935 13.8085 6.36166 13.9393 6.36166 14.1093C6.36166 14.397 6.16549 14.6585 5.90394 14.7632C5.60316 14.8939 5.2893 14.8155 5.04083 14.6062C4.96661 14.5441 4.90453 14.4687 4.85774 14.3839C3.37998 12.5138 3.14459 9.83294 4.13848 7.68822C1.95453 9.46676 0.764478 12.4746 0.934486 15.3124C1.01295 15.9663 1.09142 16.6202 1.31373 17.274C1.49682 18.0587 1.84991 18.8433 2.24224 19.5365C3.65461 21.7989 6.10011 23.4205 8.72869 23.7474C11.5273 24.1005 14.522 23.5905 16.6667 21.655C19.0599 19.4841 19.8969 16.0055 18.6676 13.0238L18.4976 12.6838C18.223 12.0823 17.4906 11.0361 17.4906 11.0361ZM13.3581 19.2749C12.992 19.5888 12.3904 19.9288 11.9196 20.0596C10.4549 20.5827 8.99024 19.8503 8.12712 18.9872C9.68335 18.621 10.6118 17.4702 10.8865 16.3063C11.1088 15.2601 10.6903 14.397 10.5203 13.39C10.3634 12.4223 10.3895 11.5984 10.7426 10.6961C10.9911 11.193 11.2526 11.6899 11.5665 12.0823C12.5735 13.39 14.1559 13.9654 14.4959 15.744C14.5482 15.9271 14.5743 16.1101 14.5743 16.3063C14.6136 17.3787 14.1428 18.5556 13.3581 19.2749Z"
      fill="currentColor"
    />
  </svg>
);

const envelopeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" fill="none" className="h-[0.9em] w-auto" aria-hidden>
    <path d="M18 0H2C0.9 0 0.01 0.9 0.01 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" fill="currentColor" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-[0.9rem] w-[0.9rem]" aria-hidden>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-[0.9rem] w-[0.9rem]" aria-hidden>
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.53V6.78a4.85 4.85 0 01-1.02-.09z" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-[0.9rem] w-[0.9rem]" aria-hidden>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-[0.9rem] w-[0.9rem]" aria-hidden>
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

/* ── GH Sticker (rotating text badge) ── */
function GhSticker() {
  return (
    <div
      className="footer-sticker gh-sticker-el absolute z-[15] h-[7rem] w-[7rem] rounded-full bg-[#f6aaf0]"
      style={{
        right: "2.5em",
        top: "-3.5rem",
      }}
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <path id="circlePath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
        </defs>
        <text
          fill="#1a1a1a"
          fontSize="8.8"
          fontWeight="700"
          letterSpacing="2"
          textAnchor="middle"
          fontFamily="inherit"
          style={{ textTransform: "uppercase" }}
        >
          <textPath href="#circlePath" startOffset="50%">
            GET RESULTS • GET HYPED • GET NOTICED •
          </textPath>
        </text>
      </svg>
      <div className="relative flex h-full w-full items-center justify-center rounded-full border border-gh-black/20 text-gh-black">
        <span className="text-[2rem] font-black leading-none [transform:rotate(180deg)]">GH</span>
        <span className="absolute inset-[0.2rem] rounded-full border border-gh-black/25" />
      </div>
    </div>
  );
}

/* ── Mail CTA button ── */
function MailCta() {
  return (
    <a
      href="mailto:info@gethyped.nl"
      className={
        "button-default group/mail relative inline-flex max-w-full items-center justify-start no-underline " +
        "text-[1.125em] font-semibold leading-none tracking-[-0.02em] text-gh-black select-none"
      }
    >
      <span
        className={
          "relative flex h-[2.75em] items-center justify-center py-2 pl-4 " +
          "will-change-transform [transition:transform_450ms_var(--ease-gh-bounce)] " +
          "group-hover/mail:[transform:skewY(-4deg)_rotate(-1deg)_scale(1.02)] " +
          "group-focus-visible/mail:[transform:skewY(-4deg)_rotate(-1deg)_scale(1.02)] " +
          "group-active/mail:scale-95"
        }
      >
        <span
          className={
            "absolute top-1/2 left-1 -z-10 h-[calc(100%-0.5rem)] w-[calc(100%-0.25rem)] -translate-y-1/2 " +
            "rounded-[1.25rem] border border-gh-black bg-transparent " +
            "[transition:border-radius_450ms_var(--ease-gh-radius),width_450ms_var(--ease-gh-bounce)] " +
            "group-hover/mail:rounded-[0.5em] group-focus-visible/mail:rounded-[0.5em]"
          }
          aria-hidden
        />
        <span className="relative z-[1] mr-2 ml-1 block whitespace-nowrap">Mail ons direct</span>
        <span
          className={
            "relative z-[1] flex h-9 w-9 flex-none items-center justify-center rounded-[0.625em] " +
            "bg-gh-black text-white [transition:transform_150ms_ease-out] will-change-transform " +
            "group-hover/mail:scale-[0.92] group-focus-visible/mail:scale-[0.92]"
          }
        >
          {envelopeIcon}
        </span>
      </span>
    </a>
  );
}

/* ── Get Results CTA ── */
function GetResultsCta({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/contact"
      aria-label="Get Results — contact"
      className={
        `button-default group/cta relative inline-flex max-w-full items-center justify-start no-underline ` +
        `text-[1.125em] font-semibold leading-none tracking-[-0.02em] text-gh-black select-none ${className}`
      }
    >
      <span
        className={
          "relative flex h-[2.75em] items-center justify-center py-2 pl-4 " +
          "will-change-transform [transition:transform_450ms_var(--ease-gh-bounce)] " +
          "group-hover/cta:[transform:skewY(-4deg)_rotate(-1deg)_scale(1.02)] " +
          "group-focus-visible/cta:[transform:skewY(-4deg)_rotate(-1deg)_scale(1.02)] " +
          "group-active/cta:scale-95"
        }
      >
        <span
          className={
            "absolute top-1/2 left-1 -z-10 h-[calc(100%-0.5rem)] w-[calc(100%-0.25rem)] -translate-y-1/2 " +
            "rounded-[1.25rem] bg-gh-red " +
            "[transition:border-radius_450ms_var(--ease-gh-radius),width_450ms_var(--ease-gh-bounce)] " +
            "group-hover/cta:rounded-[0.5em] group-focus-visible/cta:rounded-[0.5em]"
          }
          aria-hidden
        />
        <span className="relative z-[1] mr-2 ml-1 block whitespace-nowrap">Get Results</span>
        <span
          className={
            "relative z-[1] flex h-9 w-9 flex-none items-center justify-center rounded-[0.625em] " +
            "bg-gh-off-white text-gh-red " +
            "[transition:transform_150ms_ease-out] will-change-transform " +
            "group-hover/cta:scale-[0.92] group-focus-visible/cta:scale-[0.92]"
          }
        >
          {fireIcon}
        </span>
      </span>
    </Link>
  );
}

/* ════════════════════════════════════════════════════════════════
   HomeFooter — scroll-based section takeover
   ════════════════════════════════════════════════════════════════ */
export function HomeFooter() {
  const year = new Date().getFullYear();
  const trailRootRef = useRef<HTMLElement>(null);
  const trailLayerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  /* ── GSAP scroll-synced content reveal + sticker rotation ── */
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      /* Stagger-reveal footer content as it enters viewport */
      const elementsToReveal = gsap.utils.toArray<HTMLElement>(
        ".cs-footer-cta, .cs-footer-bottom, .cs-footer-info-wrapper"
      );
      gsap.set(elementsToReveal, { y: 60, opacity: 0 });

      gsap.to(elementsToReveal, {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      });

      /* GH sticker — rotate only while scrolling */
      const sticker = containerRef.current?.querySelector(".gh-sticker-el");
      if (sticker) {
        gsap.to(sticker, {
          rotation: 360,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    },
    { scope: containerRef }
  );

  /* ── Mouse trail effect ── */
  useEffect(() => {
    const root = trailRootRef.current;
    const layer = trailLayerRef.current;
    if (!root || !layer) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let incr = 0;
    let oldIncrX = 0;
    let oldIncrY = 0;
    let resetDist = window.innerWidth / 6;
    let indexImg = 0;
    let rafId = 0;
    let nextX = 0;
    let nextY = 0;
    let hasPending = false;
    const maxTrailNodes = 8;

    const onResize = () => {
      resetDist = window.innerWidth / 3;
    };

    const createMedia = (x: number, y: number, deltaX: number, deltaY: number) => {
      if (layer.childElementCount >= maxTrailNodes) return;
      const pick = TRAIL_LOGOS[indexImg];
      const image = document.createElement("img");
      image.setAttribute("src", pick.src);
      image.setAttribute("alt", pick.alt);
      image.setAttribute("draggable", "false");
      image.style.width = "15vw";
      image.style.position = "absolute";
      image.style.objectFit = "cover";
      image.style.zIndex = "5";
      image.style.pointerEvents = "none";

      layer.appendChild(image);

      const tl = gsap.timeline({
        onComplete: () => {
          if (image.parentNode === layer) {
            layer.removeChild(image);
          }
          tl.kill();
        },
      });

      tl.fromTo(
        image,
        {
          xPercent: -50 + (Math.random() - 0.5) * 80,
          yPercent: -50 + (Math.random() - 0.5) * 10,
          scaleX: 1.3,
          scaleY: 1.3,
        },
        {
          scaleX: 1,
          scaleY: 1,
          ease: "elastic.out(2, 0.6)",
          duration: 0.6,
        }
      );

      tl.fromTo(
        image,
        {
          x,
          y,
          rotation: (Math.random() - 0.5) * 20,
        },
        {
          x: `+=${deltaX * 4}`,
          y: `+=${deltaY * 4}`,
          rotation: (Math.random() - 0.5) * 20,
          ease: "power4.out",
          duration: 1.5,
        },
        "<"
      );

      tl.to(image, {
        duration: 0.3,
        scale: 0.5,
        delay: 0.1,
        ease: "back.in(1.5)",
      });

      indexImg = (indexImg + 1) % TRAIL_LOGOS.length;
    };

    const initOnce = (e: MouseEvent) => {
      oldIncrX = e.clientX;
      oldIncrY = e.clientY;
    };

    const processMove = () => {
      hasPending = false;
      rafId = 0;
      const valX = nextX;
      const valY = nextY;
      incr += Math.abs(valX - oldIncrX) + Math.abs(valY - oldIncrY);

      if (incr > resetDist) {
        incr = 0;
        createMedia(valX, valY, valX - oldIncrX, valY - oldIncrY);
      }

      oldIncrX = valX;
      oldIncrY = valY;
    };

    const onMove = (e: MouseEvent) => {
      nextX = e.clientX;
      nextY = e.clientY;
      if (hasPending) return;
      hasPending = true;
      rafId = window.requestAnimationFrame(processMove);
    };

    root.addEventListener("mousemove", initOnce, { once: true });
    root.addEventListener("mousemove", onMove);
    window.addEventListener("resize", onResize);

    return () => {
      root.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      if (rafId) window.cancelAnimationFrame(rafId);
      layer.querySelectorAll("img").forEach((img) => img.remove());
    };
  }, []);

  /* ── Render ── */
  return (
    <div ref={containerRef} className="relative w-full overflow-hidden bg-[#E5E0D8]">
      <div
        ref={footerRef}
        className="relative h-full w-full overflow-hidden bg-[#f3efeb]"
      >
        <section
          ref={trailRootRef}
          className="section_footer pointer-events-none relative min-h-[100dvh] overflow-hidden"
        >
          <div className="flex min-h-[100dvh] flex-col">
            {/* ─── Top area: CTA centered ── */}
            <div className="cs-footer-cta flex flex-1 flex-col items-center justify-center gap-[2.5em] px-10 text-center max-[479px]:px-5">
              <h2 className="text-[clamp(2.8rem,8vw,6.8rem)] font-semibold leading-[0.92] tracking-[-0.05em] text-gh-black">
                Let&apos;s Get Hyped!
              </h2>
              <div className="button-group is-footer pointer-events-auto flex flex-wrap items-center justify-center gap-3">
                <MailCta />
                <GetResultsCta />
              </div>
            </div>

            {/* ─── Bottom area: diagonal wave footer ── */}
            <div className="cs-footer-bottom relative w-full">
              {/* Diagonal SVG background */}
              <svg
                viewBox="0 0 1860 386"
                className="block h-auto w-full"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M1859.06 34.8264V349.463C1859.06 365.199 1859.06 380.122 1859.06 385.962L0.642595 385.955C0.642578 383.021 0.642769 379.682 0.642769 371.941V290.843C0.642769 283.856 5.67717 277.887 12.5466 276.741L1819.04 0.740997C1840 -2.74446 1859.06 13.489 1859.06 34.8184"
                  fill="#e6e0d6"
                />
              </svg>

              {/* Content overlay on the diagonal */}
              <div className="absolute inset-0 flex items-end">
                {/* Logo bottom-left */}
                <div className="absolute bottom-0 left-0 z-[2] pb-[0.8em] pl-[1.5em]">
                  <img
                    src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3404e57460370b97757c_7719b29e960423bac19acd325c901392_gh-logo-blue.svg"
                    alt="Get Hyped logo"
                    className="h-[5.8rem] w-auto -rotate-[7deg] min-[992px]:h-[6.9rem]"
                  />
                </div>

                {/* GH Sticker — positioned at right, above the diagonal */}
                <div className="absolute right-[2.5em] top-[-2rem] z-[15]">
                  <GhSticker />
                </div>

                {/* Footer info: links, contact, etc — bottom-right */}
                <div className="cs-footer-info-wrapper pointer-events-auto z-[12] ml-auto flex w-full items-end justify-end gap-[5em] px-[2.5em] pb-[1.2em] max-[991px]:flex-col max-[991px]:gap-6 max-[991px]:px-5">
                  {/* Navigation + Socials + Credits */}
                  <div className="flex flex-col gap-[1.5em]">
                    <div className="footer_sitemap flex flex-wrap gap-[0.5em]">
                      <SwooshNavLink href="/expertises" label="Expertises" />
                      <SwooshNavLink href="/work" label="Work" />
                      <SwooshNavLink href="/about" label="About" />
                      <SwooshNavLink href="/contact" label="Contact" />
                    </div>
                    <div className="footer-col is-socials">
                      <div className="footer-label mb-2 font-bold text-gh-black">Follow us</div>
                      <div className="social-icon-group flex flex-wrap gap-[0.5em] text-gh-black">
                        <a href="https://www.linkedin.com/company/gethypednl/" target="_blank" rel="noopener noreferrer" className="social-icon inline-flex h-8 w-8 items-center justify-center rounded-full bg-gh-off-white hover:opacity-75" aria-label="LinkedIn">
                          <LinkedInIcon />
                        </a>
                        <a href="https://www.tiktok.com/@gethyped.nl" target="_blank" rel="noopener noreferrer" className="social-icon inline-flex h-8 w-8 items-center justify-center rounded-full bg-gh-off-white hover:opacity-75" aria-label="TikTok">
                          <TikTokIcon />
                        </a>
                        <a href="https://www.instagram.com/gethyped.nl/" target="_blank" rel="noopener noreferrer" className="social-icon inline-flex h-8 w-8 items-center justify-center rounded-full bg-gh-off-white hover:opacity-75" aria-label="Instagram">
                          <InstagramIcon />
                        </a>
                        <a href="https://www.youtube.com/@gethypednl" target="_blank" rel="noopener noreferrer" className="social-icon inline-flex h-8 w-8 items-center justify-center rounded-full bg-gh-off-white hover:opacity-75" aria-label="YouTube">
                          <YouTubeIcon />
                        </a>
                      </div>
                    </div>
                    <div className="footer-credits flex w-full flex-row justify-between gap-6 text-[0.65rem] text-gh-black/55">
                      <div className="footer-legal">© {year} Get Hyped</div>
                      <a
                        href="https://dylanbrouwer.design/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-legal hover:opacity-75"
                      >
                        © Design by Dylan
                      </a>
                    </div>
                  </div>

                  {/* Contact + Address */}
                  <div className="flex flex-col gap-[1.2em] text-left text-[0.95rem] leading-snug text-gh-black">
                    <div className="footer-col">
                      <div className="footer-label font-bold">Contact</div>
                      <a href="mailto:info@gethyped.nl" className="footer-link mt-1 block text-[0.86rem] hover:underline">
                        info@gethyped.nl
                      </a>
                      <a href="tel:+31615337496" className="footer-link block text-[0.86rem] hover:underline">
                        +31 6 1533 7496
                      </a>
                    </div>
                    <div className="footer-col">
                      <div className="footer-label font-bold">Adres</div>
                      <a
                        href="https://www.google.nl/maps/search/Beltrumsestraat+6,+7141+AL+Groenlo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link mt-1 block text-[0.86rem] hover:underline"
                      >
                        Beltrumsestraat 6,
                        <br />
                        7141 AL Groenlo
                      </a>
                    </div>
                    <a href="#" className="footer-legal block text-[0.82rem] text-gh-black/65 hover:underline">
                      Privacyvoorwaarden
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mouse trail layer */}
          <section className="pointer-events-none fixed inset-0 z-40 h-screen w-full overflow-hidden">
            <div ref={trailLayerRef} className="relative h-full w-full" />
          </section>

          {/* Preload trail images */}
          <div className="pointer-events-none hidden">
            {TRAIL_LOGOS.map((logo) => (
              <img
                key={logo.src}
                src={logo.src}
                loading="lazy"
                alt={logo.alt}
                draggable={false}
                className="invisible absolute left-0 top-0 h-px w-px object-cover"
              />
            ))}
          </div>

          <style jsx>{`
            .section_footer .container-col-12 {
              position: relative;
              width: 100%;
            }
          `}</style>
        </section>
      </div>
    </div>
  );
}