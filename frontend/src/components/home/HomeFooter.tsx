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
      <img src="/assets/icons/svg38.svg" alt="GH sticker" className="absolute inset-0 h-full w-full object-contain" />
    </div>
  );
}

/* ── Mail CTA button ── */
function MailCta() {
  return (
    <a
      href="mailto:info@gethyped.nl"
      className={
        "group/mail relative inline-flex max-w-full items-center justify-start no-underline [-webkit-tap-highlight-color:transparent] " +
        "text-[1.125em] font-semibold leading-none tracking-[-0.02em] text-gh-black select-none"
      }
    >
      <span
        className={
          "relative flex h-[2.75em] items-center justify-center px-3.5 py-2.5 " +
          "will-change-transform [transition:transform_450ms_var(--ease-gh-bounce)] " +
          "group-hover/mail:[transform:skewY(-4deg)_rotate(-1deg)] " +
          "group-focus-visible/mail:[transform:skewY(-4deg)_rotate(-1deg)]"
        }
      >
        <span
          className="absolute inset-0 -z-10 rounded-[0.5em] border border-gh-black bg-transparent"
          aria-hidden
        />
        <span className="relative z-[1] mr-2.5 ml-1 block whitespace-nowrap">Mail ons direct</span>
        <span
          className={
            "relative z-[1] flex h-9 w-9 flex-none items-center justify-center rounded-[0.625em] " +
            "bg-gh-black text-white"
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
        `group/cta relative inline-flex max-w-full items-center justify-start no-underline [-webkit-tap-highlight-color:transparent] ` +
        `text-[1.125em] font-semibold leading-none tracking-[-0.02em] text-gh-black select-none ${className}`
      }
    >
      <span
        className={
          "relative flex h-[2.75em] items-center justify-center px-3.5 py-2.5 " +
          "will-change-transform [transition:transform_450ms_var(--ease-gh-bounce)] " +
          "group-hover/cta:[transform:skewY(-4deg)_rotate(-1deg)] " +
          "group-focus-visible/cta:[transform:skewY(-4deg)_rotate(-1deg)]"
        }
      >
        <span
          className="absolute inset-0 -z-10 rounded-[0.5em] bg-gh-red"
          aria-hidden
        />
        <span className="relative z-[1] mr-2.5 ml-1 block whitespace-nowrap">Get Results</span>
        <span
          className={
            "relative z-[1] flex h-9 w-9 flex-none items-center justify-center rounded-[0.625em] " +
            "bg-gh-off-white text-gh-red"
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
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      /* GH sticker — rotate up to 20° while scrolling */
      const sticker = containerRef.current?.querySelector(".gh-sticker-el");
      if (sticker) {
        gsap.set(sticker, { rotation: 0 });
        gsap.to(sticker, {
          rotation: 30,
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
          className="section_footer relative min-h-[100dvh] overflow-hidden"
        >
          <div className="flex min-h-[100dvh] flex-col">
            {/* ═══ UPPER FOOTER — Title + CTA Buttons ═══ */}
            <div className="cs-footer-cta relative z-10 flex flex-1 flex-col items-center justify-center gap-8 px-10 text-center max-[479px]:px-5 pointer-events-auto">
              <h2 className="text-[clamp(2.8rem,8vw,6.8rem)] font-semibold leading-[0.92] tracking-[-0.05em] text-gh-black">
                Let&apos;s Get Hyped!
              </h2>
              <div className="pointer-events-auto flex flex-wrap items-center justify-center gap-4">
                <MailCta />
                <GetResultsCta />
              </div>
            </div>

            {/* ═══ LOWER FOOTER — Wave, Logo, Sticker, Nav, Socials, Contact ═══ */}
            <div className="cs-footer-bottom relative z-10 w-full pointer-events-auto">
              {/* Massive slanted backdrop logo removed */}

              <svg
                viewBox="0 0 1860 386"
                className="relative z-[2] block h-auto w-full pointer-events-none"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M1859.06 34.8264V349.463C1859.06 365.199 1859.06 380.122 1859.06 385.962L0.642595 385.955C0.642578 383.021 0.642769 379.682 0.642769 371.941V290.843C0.642769 283.856 5.67717 277.887 12.5466 276.741L1819.04 0.740997C1840 -2.74446 1859.06 13.489 1859.06 34.8184"
                  fill="#e6e0d6"
                />
              </svg>

              <div className="absolute inset-0 flex items-end">
                {/* Logo bottom-left */}
                <div className="absolute bottom-0 left-0 z-[2] pb-3 pl-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 941 382" fill="none" className="footer-mobile-logo_svg">
                    <path d="M940.689 83.6343V312.664C940.689 350.749 909.95 381.62 872.028 381.62H34.4602C15.8081 381.62 0.689453 366.436 0.689453 347.704V170.798C0.689453 153.889 12.8733 139.442 29.4979 136.669L843.838 1.14395C894.561 -7.29124 940.689 31.9954 940.689 83.6149" fill="#EAE4D8" />
                    <path d="M855.114 363.741H253.594V117.356L844.9 24.2971C884.869 18.0143 921.014 49.0403 921.014 89.6843V297.558C921.014 334.111 891.511 363.741 855.114 363.741Z" fill="black" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 31 31" fill="none" className="footer-mobile-logo_icon">
                      <g clipPath="url(#clip0_10010_1223)">
                        <path d="M27.6895 2.93927L13.9395 16.6893" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" />
                        <path d="M27.6895 2.93927L18.9395 27.9393L13.9395 16.6893L2.68945 11.6893L27.6895 2.93927Z" stroke="currentColor" strokeWidth="2.5" strokeMiterlimit="10" />
                      </g>
                      <defs>
                        <clipPath id="clip0_10010_1223">
                          <rect width="30" height="30" fill="currentColor" transform="translate(0.189453 0.43927)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <path d="M323.066 121.835V214.7L306.229 216.232V124.337L271.802 129.417V348.81L306.229 348.48V256.585L323.066 255.46V348.325L359.791 347.976V116.406L323.066 121.835Z" fill="white" />
                    <path d="M429.128 106.148L419.339 194.223L418.875 201.766L417.948 201.863L417.485 194.416L407.85 109.289L368.132 115.164L398.543 264.69V347.607L438.763 347.239V262.363L471.8 99.826L429.128 106.148Z" fill="white" />
                    <path d="M723.739 113.671V62.556L613.1 78.9223V345.591L723.739 344.543V293.448L666.488 295.425V232.714L720.417 229.146V178.477L666.488 183.402V120.71L723.739 113.671Z" fill="white" />
                    <path d="M547.354 221.933L526.463 223.523V133.121L547.354 130.503V221.933ZM479.948 98.6237V346.851L526.115 346.405V265.951L547.528 264.807C575.526 263.314 597.46 240.083 597.46 211.927V142.564C597.46 110.258 568.884 85.4764 537.044 90.1885L479.948 98.6431V98.6237Z" fill="white" />
                    <path d="M826.711 294.262L799.1 295.154V98.934L826.711 95.4629V294.262ZM738.027 60.4424V344.408L841.058 343.438C869.982 343.167 893.287 319.548 893.287 290.5V98.7982C893.287 66.4924 864.711 41.7105 832.871 46.4225L738.008 60.4618L738.027 60.4424Z" fill="white" />
                    <path d="M98.1596 363.741H157.881V320.169L123.435 321.177V271.943L155.796 269.868V226.625L123.435 229.65V180.397L157.881 175.995V132.423L98.1596 141.808V363.741Z" fill="black" />
                    <path d="M167.033 130.968V174.831L190.822 171.787V363.741H219.553V168.122L245.079 164.864V118.694L167.033 130.968Z" fill="black" />
                    <path d="M65.0839 235.099V187.552L39.1138 190.868V324.9L65.0839 324.144V284.838L49.135 285.749V247.665L89.181 244.252V363.722H65.1032V351.253L60.9132 355.383C55.4875 360.735 48.1889 363.722 40.6006 363.722H36.4492C25.5206 363.722 16.6772 354.821 16.6772 343.865V177.275C16.6772 164.244 26.1384 153.133 38.9593 151.116L66.3582 146.811C78.3488 144.93 89.2003 154.238 89.2003 166.416V232.831L65.1224 235.08L65.0839 235.099Z" fill="black" />
                  </svg>
                </div>

                {/* GH Sticker */}
                <div className="absolute right-10 top-[-2rem] z-[15]">
                  <GhSticker />
                </div>

                {/* Footer info grid */}
                <div className="cs-footer-info-wrapper relative z-[3] pointer-events-auto ml-auto flex w-full items-end justify-end gap-20 px-10 pb-5 max-[991px]:flex-col max-[991px]:gap-6 max-[991px]:px-5">
                  {/* Navigation + Socials + Credits */}
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-wrap gap-2">
                      <SwooshNavLink href="/expertises" label="Expertises" />
                      <SwooshNavLink href="/work" label="Work" />
                      <SwooshNavLink href="/about" label="About" />
                      <SwooshNavLink href="/contact" label="Contact" />
                    </div>
                    <div>
                      <div className="mb-2 font-bold text-gh-black">Follow us</div>
                      <div className="flex flex-wrap gap-2 text-gh-black">
                        <a href="https://www.linkedin.com/company/gethypednl/" target="_blank" rel="noopener noreferrer" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gh-off-white hover:opacity-75" aria-label="LinkedIn">
                          <LinkedInIcon />
                        </a>
                        <a href="https://www.tiktok.com/@gethyped.nl" target="_blank" rel="noopener noreferrer" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gh-off-white hover:opacity-75" aria-label="TikTok">
                          <TikTokIcon />
                        </a>
                        <a href="https://www.instagram.com/gethyped.nl/" target="_blank" rel="noopener noreferrer" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gh-off-white hover:opacity-75" aria-label="Instagram">
                          <InstagramIcon />
                        </a>
                        <a href="https://www.youtube.com/@gethypednl" target="_blank" rel="noopener noreferrer" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gh-off-white hover:opacity-75" aria-label="YouTube">
                          <YouTubeIcon />
                        </a>
                      </div>
                    </div>
                    <div className="flex w-full flex-row justify-between gap-6 text-[0.65rem] text-gh-black/55">
                      <div>© {year} Get Hyped</div>
                      <a
                        href="https://dylanbrouwer.design/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-75"
                      >
                        © Design by Dylan
                      </a>
                    </div>
                  </div>

                  {/* Contact + Address */}
                  <div className="flex flex-col gap-5 text-left text-[0.95rem] leading-snug text-gh-black">
                    <div>
                      <div className="font-bold">Contact</div>
                      <a href="mailto:info@gethyped.nl" className="mt-1 block text-[0.86rem] hover:underline">
                        info@gethyped.nl
                      </a>
                      <a href="tel:+31615337496" className="block text-[0.86rem] hover:underline">
                        +31 6 1533 7496
                      </a>
                    </div>
                    <div>
                      <div className="font-bold">Adres</div>
                      <a
                        href="https://www.google.nl/maps/search/Beltrumsestraat+6,+7141+AL+Groenlo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 block text-[0.86rem] hover:underline"
                      >
                        Beltrumsestraat 6,
                        <br />
                        7141 AL Groenlo
                      </a>
                    </div>
                    <a href="#" className="block text-[0.82rem] text-gh-black/65 hover:underline">
                      Privacyvoorwaarden
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mouse trail layer */}
          <section className="pointer-events-none fixed inset-0 z-0 h-screen w-full overflow-hidden">
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