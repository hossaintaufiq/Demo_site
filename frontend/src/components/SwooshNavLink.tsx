import Link from "next/link";
import type { CSSProperties } from "react";

/** Desktop swoosh nav links (center pill + footer sitemap). */
export function SwooshNavLink({
  href,
  label,
  ariaLabel,
}: {
  href: string;
  label: string;
  ariaLabel?: string;
}) {
  const innerBase =
    "col-start-1 row-start-1 block h-full min-h-full w-[120%] origin-[100%_0] [translate:-10%_100%_0] [rotate:0_0_1_-12deg] transition-[translate,rotate] duration-500 [transition-timing-function:var(--ease-gh-smooth)] delay-[calc(var(--index,0)*-1*0.042s)] group-hover/swoosh:[translate:-10%_0_0] group-hover/swoosh:[rotate:0_0_1_0deg] group-hover/swoosh:delay-[calc(var(--index,0)*0.064s)]";

  return (
    <Link
      href={href}
      aria-label={ariaLabel ?? `${label} link`}
      className={
        "group/swoosh relative grid max-w-full select-none text-black no-underline " +
        "[transform-style:preserve-3d] [-webkit-tap-highlight-color:transparent] " +
        "text-[1.125em] font-semibold leading-none tracking-[-0.02em] " +
        "[transition:transform_450ms_var(--ease-gh-elastic)] " +
        "active:[transform:scaleX(0.955)_scaleY(0.954)]"
      }
    >
      <span
        className={
          "col-start-1 row-start-1 grid min-h-full self-stretch overflow-clip rounded-[0.625em] bg-gh-white " +
          "[transition:scale_450ms_var(--ease-gh-smooth),background-color_0.2s_var(--ease-gh-color)] " +
          "group-hover/swoosh:[scale:1.065_1.095]"
        }
      >
        <span
          className={`${innerBase} bg-gh-red`}
          style={{ "--index": 0 } as CSSProperties}
          aria-hidden
        />
        <span
          className={`${innerBase} bg-gh-black`}
          style={{ "--index": 1 } as CSSProperties}
          aria-hidden
        />
      </span>
      <span
        data-text={label}
        className={
          "relative z-10 col-start-1 row-start-1 grid overflow-clip p-[0.625em_0.75em] " +
          "after:col-start-1 after:row-start-1 after:grid after:block after:content-[attr(data-text)] " +
          "after:text-gh-cream-text after:opacity-0 " +
          "after:[translate:0_2em_0] after:[rotate:1_1_0.5_-30deg] after:origin-top-right " +
          "after:[transition:translate_0.75s_var(--ease-gh-elastic),rotate_0.5s_var(--ease-gh-smooth),opacity_0.2s_ease-out] " +
          "group-hover/swoosh:after:opacity-100 group-hover/swoosh:after:[translate:0_0_0] " +
          "group-hover/swoosh:after:[rotate:1_1_0.45_0deg] group-hover/swoosh:after:delay-100"
        }
      >
        <span
          className={
            "col-start-1 row-start-1 transition-[translate,rotate,opacity,color] duration-[750ms] " +
            "[transition-timing-function:var(--ease-gh-elastic)] " +
            "group-hover/swoosh:[translate:0_-2em_0] group-hover/swoosh:[rotate:1_1_0.45_-60deg] " +
            "group-hover/swoosh:opacity-0"
          }
        >
          {label}
        </span>
      </span>
    </Link>
  );
}
