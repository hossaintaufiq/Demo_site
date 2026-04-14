"use client";

import { Logo } from "@/components/Logo";
import { SwooshNavLink } from "@/components/SwooshNavLink";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/expertises", label: "Expertises" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

const fireIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" fill="none" className="h-[1.125em] w-auto">
    <path
      d="M17.4906 11.0361C17.1898 10.6437 16.8237 10.3037 16.4837 9.96371C15.6075 9.17906 14.6136 8.61673 13.7766 7.79284C11.8281 5.88352 11.3965 2.73184 12.6389 0.3125C11.3965 0.613283 10.3111 1.29331 9.38256 2.03873C5.99549 4.75886 4.66158 9.55831 6.25704 13.6777C6.30935 13.8085 6.36166 13.9393 6.36166 14.1093C6.36166 14.397 6.16549 14.6585 5.90394 14.7632C5.60316 14.8939 5.2893 14.8155 5.04083 14.6062C4.96661 14.5441 4.90453 14.4687 4.85774 14.3839C3.37998 12.5138 3.14459 9.83294 4.13848 7.68822C1.95453 9.46676 0.764478 12.4746 0.934486 15.3124C1.01295 15.9663 1.09142 16.6202 1.31373 17.274C1.49682 18.0587 1.84991 18.8433 2.24224 19.5365C3.65461 21.7989 6.10011 23.4205 8.72869 23.7474C11.5273 24.1005 14.522 23.5905 16.6667 21.655C19.0599 19.4841 19.8969 16.0055 18.6676 13.0238L18.4976 12.6838C18.223 12.0823 17.4906 11.0361 17.4906 11.0361ZM13.3581 19.2749C12.992 19.5888 12.3904 19.9288 11.9196 20.0596C10.4549 20.5827 8.99024 19.8503 8.12712 18.9872C9.68335 18.621 10.6118 17.4702 10.8865 16.3063C11.1088 15.2601 10.6903 14.397 10.5203 13.39C10.3634 12.4223 10.3895 11.5984 10.7426 10.6961C10.9911 11.193 11.2526 11.6899 11.5665 12.0823C12.5735 13.39 14.1559 13.9654 14.4959 15.744C14.5482 15.9271 14.5743 16.1101 14.5743 16.3063C14.6136 17.3787 14.1428 18.5556 13.3581 19.2749Z"
      fill="currentColor"
    />
  </svg>
);

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 text-gh-black" fill="none" aria-hidden>
      <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** Mobile menu: white pill links (reference layout). */
function MobileMenuLink({
  href,
  label,
  onNavigate,
}: {
  href: string;
  label: string;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="w-full max-w-md rounded-full bg-gh-white px-10 py-3 text-center text-xl font-bold tracking-tight text-gh-black no-underline active:opacity-80"
    >
      {label}
    </Link>
  );
}

/** Desktop header CTA — pink jellybelly. */
function GetResultsButtonDesktop() {
  return (
    <Link
      href="/contact"
      aria-label="Get Results — contact"
      prefetch
      className={
        "group/cta relative z-10 flex max-w-full items-center justify-start no-underline " +
        "text-[1.25em] font-semibold leading-none tracking-[-0.02em] text-gh-black select-none"
      }
    >
      <div
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
            "rounded-[1.25rem] bg-gh-pink " +
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
      </div>
    </Link>
  );
}

/** Mobile overlay CTA — black pill, white label, flame in white circle (reference). */
function GetResultsButtonMobileOverlay({ onNavigate }: { onNavigate: () => void }) {
  return (
    <Link
      href="/contact"
      onClick={onNavigate}
      aria-label="Get Results — contact"
      className="inline-flex max-w-full items-center gap-4 rounded-full bg-gh-black py-2 pl-8 pr-2 text-white no-underline active:opacity-90"
    >
      <span className="text-lg font-bold tracking-tight">Get Results</span>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gh-white text-gh-red">
        {fireIcon}
      </span>
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const prev = lastY.current;
      const delta = y - prev;

      if (y < 64) {
        setHidden(false);
      } else if (delta > 8) {
        setMenuOpen(false);
        setHidden(true);
      } else if (delta < -8) {
        setHidden(false);
      }

      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 992px)");
    const onChange = () => {
      if (mq.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={
          "fixed inset-x-0 top-0 z-[999] w-full px-0 transition-transform duration-300 ease-out will-change-transform " +
          "min-[992px]:px-10 " +
          (hidden ? "-translate-y-full" : "translate-y-0")
        }
        aria-label="Site"
      >
        <div
          className={
            "navbar relative mx-auto flex h-[7.5rem] max-w-[120rem] items-center justify-between px-8 " +
            "max-[479px]:px-5"
          }
        >
          <Link
            href="/"
            aria-label="Home link"
            aria-current={pathname === "/" ? "page" : undefined}
            className={
              "nav_logo relative z-[1000] inline-flex h-[4.75rem] max-w-[min(100%,14rem)] shrink-0 items-center " +
              "min-[992px]:max-w-none " +
              (menuOpen ? "max-[991px]:hidden" : "")
            }
          >
            <Logo className="h-full w-auto" />
          </Link>

          {/* Desktop: centered pill + swoosh links */}
          <div
            id="navbar_menu"
            className={
              "navbar_menu hidden min-[992px]:absolute min-[992px]:left-1/2 min-[992px]:top-1/2 min-[992px]:flex " +
              "min-[992px]:h-[3.5rem] min-[992px]:w-auto min-[992px]:-translate-x-1/2 min-[992px]:-translate-y-1/2 " +
              "min-[992px]:flex-row min-[992px]:gap-2 min-[992px]:overflow-hidden min-[992px]:rounded-[1rem] " +
              "min-[992px]:bg-gh-white min-[992px]:p-2 min-[992px]:shadow-[0_1px_12px_rgba(0,0,0,0.06)]"
            }
            role="navigation"
            aria-label="Main"
          >
            {links.map((item) => (
              <SwooshNavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </div>

          <button
            type="button"
            className={
              "relative z-[1000] flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center " +
              "rounded-[0.75em] border-0 bg-gh-pink p-0 transition-none min-[992px]:hidden max-[479px]:h-14 max-[479px]:w-14 " +
              (menuOpen ? "max-[991px]:hidden" : "")
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-menu-overlay"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span
              className={
                "absolute left-1/2 top-1/2 z-[1] h-0.5 w-5 bg-gh-black transition-none " +
                (menuOpen
                  ? "-translate-x-1/2 -translate-y-1/2 rotate-45"
                  : "-translate-x-1/2 -translate-y-[calc(50%+4px)]")
              }
            />
            <span
              className={
                "absolute left-1/2 top-1/2 z-[1] h-0.5 w-5 bg-gh-black transition-none " +
                (menuOpen
                  ? "-translate-x-1/2 -translate-y-1/2 -rotate-45"
                  : "-translate-x-1/2 translate-y-[calc(-50%+4px)]")
              }
            />
          </button>

          <div className="hidden min-[992px]:block">
            <GetResultsButtonDesktop />
          </div>
        </div>
      </nav>

      {/* Mobile full-screen menu — outside <nav> so position:fixed is not affected by nav transform */}
      {menuOpen ? (
        <div
          id="mobile-menu-overlay"
          className="fixed inset-0 z-[1002] flex min-h-0 min-h-dvh flex-col bg-gh-pink min-[992px]:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="flex shrink-0 items-start justify-between px-6 pt-6">
            <Link
              href="/"
              className="inline-flex h-10 max-w-[min(100%,14rem)] items-center"
              onClick={closeMenu}
              aria-label="Home link"
            >
              <Logo className="h-full w-auto" />
            </Link>
            <button
              type="button"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gh-white shadow-sm"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              <CloseIcon />
            </button>
          </div>

          <nav className="flex min-h-0 flex-1 flex-col items-center justify-center gap-4 px-6 py-8">
            {links.map((item) => (
              <MobileMenuLink key={item.href} href={item.href} label={item.label} onNavigate={closeMenu} />
            ))}
          </nav>

          <div className="flex shrink-0 justify-center px-6 pb-10 pt-4">
            <GetResultsButtonMobileOverlay onNavigate={closeMenu} />
          </div>
        </div>
      ) : null}
    </>
  );
}
