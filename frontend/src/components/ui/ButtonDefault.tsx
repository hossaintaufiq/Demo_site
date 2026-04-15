import Link from "next/link";
import type { ReactNode } from "react";

const arrow14 = (
  <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 22 21" fill="none" className="h-[0.875em] w-[0.875em]" aria-hidden>
    <path
      d="M11.2832 20.9176L9.14509 18.8002L15.5491 12.3962L-0.00939941 12.3962L-0.00939941 9.30322L15.5491 9.30322L9.14509 2.9096L11.2832 0.78186L21.3511 10.8497L11.2832 20.9176Z"
      fill="currentColor"
    />
  </svg>
);

const mail12 = (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 22 17" fill="none" className="h-3 w-[0.85em]" aria-hidden>
    <path
      d="M2.78843 16.5955C2.21806 16.5955 1.72996 16.3926 1.32413 15.9868C0.918306 15.581 0.715047 15.0925 0.714355 14.5214V2.077C0.714355 1.50663 0.917615 1.01853 1.32413 0.612707C1.73065 0.20688 2.21875 0.00362105 2.78843 0.00292969H19.381C19.9514 0.00292969 20.4398 0.206189 20.8464 0.612707C21.2529 1.01923 21.4558 1.50732 21.4551 2.077V14.5214C21.4551 15.0918 21.2522 15.5803 20.8464 15.9868C20.4405 16.3933 19.9521 16.5962 19.381 16.5955H2.78843ZM11.0847 9.15478C11.1711 9.15478 11.2621 9.14165 11.3575 9.11537C11.4529 9.0891 11.5434 9.05039 11.6292 8.99923L18.9662 4.41034C19.1045 4.32392 19.2082 4.21607 19.2773 4.08678C19.3465 3.9575 19.381 3.81473 19.381 3.65849C19.381 3.31281 19.2341 3.05355 18.9403 2.88071C18.6465 2.70787 18.344 2.71651 18.0329 2.90663L11.0847 7.26219L4.13658 2.90663C3.82547 2.71651 3.523 2.71236 3.22917 2.89419C2.93534 3.07602 2.78843 3.33078 2.78843 3.65849C2.78843 3.83132 2.823 3.98273 2.89213 4.11271C2.96127 4.24268 3.06497 4.34189 3.20324 4.41034L10.5403 8.99923C10.6267 9.05108 10.7176 9.09014 10.813 9.11641C10.9084 9.14268 10.999 9.15547 11.0847 9.15478Z"
      fill="currentColor"
    />
  </svg>
);

const downArrow = (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 26 27" fill="none" className="h-6 w-6 text-gh-black" aria-hidden>
    <path
      d="M0.876668 14.4267L3.42629 11.852L11.1376 19.5634L11.1376 0.828689L14.8621 0.828689L14.8621 19.5634L22.5609 11.852L25.123 14.4267L12.9999 26.5498L0.876668 14.4267Z"
      fill="currentColor"
    />
  </svg>
);

type Variant = "solid" | "outline" | "icon";

export function ButtonDefault({
  href,
  variant = "solid",
  className = "",
  children,
  icon = "arrow",
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children?: ReactNode;
  icon?: "arrow" | "mail" | "none";
}) {
  if (variant === "icon") {
    return (
      <Link
        href={href}
        className={`group/btn relative inline-block no-underline text-inherit [-webkit-tap-highlight-color:transparent] ${className}`.trim()}
        aria-label="Scroll naar expertises"
      >
        <span className="relative inline-flex h-14 w-14 items-center justify-center p-0 will-change-transform [transition:transform_450ms_var(--ease-gh-bounce)] group-hover/btn:[transform:skewY(-1deg)_rotate(-1deg)_scale(1.02)] group-focus-visible/btn:[transform:skewY(-1deg)_rotate(-1deg)_scale(1.02)] group-active/btn:scale-95">
          <span className="absolute inset-0 rounded-[0.75em] bg-gh-pink [transition:border-radius_450ms_var(--ease-gh-radius)]" aria-hidden />
          <span className="relative z-[1] grid h-6 overflow-hidden">
            <span className="col-start-1 row-start-1 will-change-transform [transition:transform_400ms_cubic-bezier(0.7,0,0.3,1)] group-hover/btn:translate-y-full group-focus-visible/btn:translate-y-full">
              {downArrow}
            </span>
            <span className="col-start-1 row-start-1 will-change-transform [transition:transform_400ms_cubic-bezier(0.7,0,0.3,1)] group-hover/btn:translate-y-full group-focus-visible/btn:translate-y-full">
              {downArrow}
            </span>
          </span>
        </span>
      </Link>
    );
  }

  const bgClass = variant === "outline"
    ? "bg-gh-white shadow-[inset_0_0_0_2px_var(--color-gh-black)]"
    : "bg-gh-pink";

  const endIcon =
    icon === "none" ? null : icon === "mail" ? (
      <span className="relative z-[1] flex h-5 w-5 items-center justify-center text-gh-black [transition:transform_150ms_ease-out] will-change-transform group-hover/btn:scale-[0.92] group-focus-visible/btn:scale-[0.92]">
        {mail12}
      </span>
    ) : (
      <span className="relative z-[1] flex h-5 w-5 items-center justify-center text-gh-black [transition:transform_150ms_ease-out] will-change-transform group-hover/btn:scale-[0.92] group-focus-visible/btn:scale-[0.92]">
        {arrow14}
      </span>
    );

  return (
    <Link
      href={href}
      className={`group/btn relative inline-block no-underline text-inherit [-webkit-tap-highlight-color:transparent] ${className}`.trim()}
    >
      <span className="relative inline-flex items-center justify-center gap-2 py-3 pr-4 pb-3 pl-5 will-change-transform [transition:transform_450ms_var(--ease-gh-bounce)] group-hover/btn:[transform:skewY(-4deg)_rotate(-1deg)_scale(1.02)] group-focus-visible/btn:[transform:skewY(-4deg)_rotate(-1deg)_scale(1.02)] group-active/btn:scale-95">
        <span
          className={`absolute inset-0 rounded-[0.75em] ${bgClass} [transition:border-radius_450ms_var(--ease-gh-radius),width_450ms_var(--ease-gh-bounce)] group-hover/btn:w-[calc(100%-0.5em)] group-hover/btn:rounded-[0.5em] group-focus-visible/btn:w-[calc(100%-0.5em)] group-focus-visible/btn:rounded-[0.5em]`}
          aria-hidden
        />
        {children ? (
          <span className="relative z-[1] text-[1.125em] font-semibold tracking-[-0.02em] whitespace-nowrap text-gh-black">
            {children}
          </span>
        ) : null}
        {endIcon}
      </span>
    </Link>
  );
}
