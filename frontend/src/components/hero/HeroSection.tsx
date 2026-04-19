import { HeroCardsMWG } from "@/components/hero/HeroCardsMWG";

export function HeroSection() {
  return (
    <header
      id="section_hero"
      className="relative w-full bg-gh-page pb-14 pt-[calc(7em+1.25rem)] text-gh-black min-[768px]:pb-20 min-[768px]:pt-[calc(7.5rem+1.5rem)] min-[992px]:pb-24 min-[992px]:pt-[calc(7.5rem+2rem)]"
    >
      <div className="w-full px-5 min-[768px]:max-[991px]:px-8 min-[992px]:px-10">
        <div className="mx-auto w-full max-w-[120em]">
          {/* 1 — Hero title */}
          <div className="max-w-[120em]">
            <h1 className="m-0 text-5xl min-[480px]:text-6xl min-[768px]:text-7xl font-semibold leading-[0.95] tracking-[-0.05em] min-[992px]:text-[8rem] min-[992px]:text-balance">
              Get Hyped.<span className="hidden min-[992px]:inline"> </span><br className="min-[992px]:hidden" />
              Get Noticed.<span className="hidden min-[992px]:inline"> </span><br className="min-[992px]:hidden" />
              Get Results.
            </h1>
          </div>

          {/* 2 — Paragraph */}
          <div className="mt-6 max-w-[60ch] min-[992px]:mt-8">
            <p className="m-0 text-2xl min-[768px]:text-[1.75rem] min-[992px]:text-3xl font-semibold min-[992px]:font-bold leading-[1.3] tracking-[-0.03em] text-gh-black text-balance py-4 min-[992px]:py-0">
              Klaar met gokken op content <br />
              die niets oplevert?
            </p>
          </div>

          {/* 3 — Hero cards (desktop: inside container) */}
          <div className="hidden min-[992px]:mt-14 min-[992px]:block ">
            <HeroCardsMWG />
          </div>
        </div>
      </div>

      {/* 3 — Hero cards (mobile/tablet: full width) */}
      <div className="w-full min-[992px]:hidden">
        <HeroCardsMWG />
      </div>
    </header>
  );
}
