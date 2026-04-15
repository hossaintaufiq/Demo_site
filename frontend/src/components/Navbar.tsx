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

function MobileMenuLink({
  href,
  label,
  onNavigate,
  visible,
  index,
}: {
  href: string;
  label: string;
  onNavigate: () => void;
  visible: boolean;
  index: number;
}) {
  const delay = 200 + index * 80;
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="inline-flex w-auto max-w-max items-center justify-center rounded-full bg-gh-white px-8 py-3 text-center text-[1.25em] font-semibold tracking-[-0.03em] text-gh-black no-underline [font-family:Inter,sans-serif] active:opacity-80"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(1.5rem)",
        transition: visible
          ? `opacity 500ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 500ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`
          : "opacity 200ms cubic-bezier(0.32,0.72,0,1), transform 250ms cubic-bezier(0.32,0.72,0,1)",
      }}
    >
      {label}
    </Link>
  );
}

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
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const unmountTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    if (!mounted) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mounted]);

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

  useEffect(() => {
    if (unmountTimer.current) {
      clearTimeout(unmountTimer.current);
      unmountTimer.current = null;
    }

    if (menuOpen) {
      setMounted(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setVisible(true);
        });
      });
    } else {
      setVisible(false);
      unmountTimer.current = setTimeout(() => {
        setMounted(false);
        unmountTimer.current = null;
      }, 1100);
    }

    return () => {
      if (unmountTimer.current) {
        clearTimeout(unmountTimer.current);
        unmountTimer.current = null;
      }
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={
          "fixed inset-x-0 top-0 z-[999] block w-full px-[2.5em] text-balance text-gh-black [text-size-adjust:100%] [text-rendering:optimizeLegibility] [font-family:Inter,sans-serif] [line-height:1.5] [-webkit-tap-highlight-color:transparent] [-webkit-font-smoothing:antialiased] transition-transform duration-300 ease-out will-change-transform " +
          "max-[991px]:px-0 " +
          (hidden && !menuOpen ? "-translate-y-full" : "translate-y-0")
        }
        aria-label="Site"
      >
        <div
          className={
            "navbar relative flex h-[7em] w-full max-w-full items-center justify-between px-[1.25em] " +
            "min-[992px]:mx-auto min-[992px]:h-[7.5rem] min-[992px]:max-w-[120rem] min-[992px]:px-0"
          }
        >
          <Link
            href="/"
            aria-label="Home link"
            aria-current={pathname === "/" ? "page" : undefined}
            className={
              "nav_logo relative z-[1000] inline-flex h-[4.75rem] max-w-[min(100%,14rem)] shrink-0 items-center " +
              "min-[992px]:max-w-none"
            }
          >
            <Logo className="h-full w-auto" />
          </Link>

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
              "rounded-[0.75em] border-0 p-0 transition-colors duration-200 ease-out min-[992px]:hidden max-[479px]:h-14 max-[479px]:w-14 " +
              (menuOpen ? "bg-gh-white" : "bg-gh-pink")
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-menu-dropdown"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span
              className={
                "absolute left-1/2 top-1/2 z-[1] h-0.5 w-5 bg-gh-black transition-transform duration-200 ease-out " +
                (menuOpen
                  ? "-translate-x-1/2 -translate-y-1/2 rotate-45"
                  : "-translate-x-1/2 -translate-y-[calc(50%+4px)]")
              }
            />
            <span
              className={
                "absolute left-1/2 top-1/2 z-[1] h-0.5 w-5 bg-gh-black transition-transform duration-200 ease-out " +
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

      {mounted ? (
        <div
          id="mobile-menu-dropdown"
          className="fixed left-0 top-0 z-[998] h-[100dvh] w-[100vw] overflow-hidden bg-gh-page p-2 min-[992px]:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          {/* Pink sheet — slides down from top */}
          <div
            className="relative h-full w-full overflow-hidden rounded-[1.25rem] bg-gh-pink transition-transform duration-[900ms] ease-[cubic-bezier(0.34,2.2,0.64,1)]"
            style={{ transform: visible ? "translateY(0)" : "translateY(-105%)" }}
          >
            <nav className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center px-[1.25em]">
              <div className="pointer-events-auto flex flex-col items-center justify-center gap-4">
                {links.map((item, i) => (
                  <MobileMenuLink key={item.href} href={item.href} label={item.label} onNavigate={closeMenu} visible={visible} index={i} />
                ))}
              </div>
            </nav>
          </div>

          <div className="absolute bottom-8 left-1/2 z-[2] flex -translate-x-1/2 justify-center">
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(5rem)",
                transition: visible
                  ? "opacity 800ms cubic-bezier(0.16,1,0.3,1) 550ms, transform 900ms cubic-bezier(0.34,1.56,0.64,1) 550ms"
                  : "opacity 700ms cubic-bezier(0.32,0.72,0,1), transform 900ms cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              <GetResultsButtonMobileOverlay onNavigate={closeMenu} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
