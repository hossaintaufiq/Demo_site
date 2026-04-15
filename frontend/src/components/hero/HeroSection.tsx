import { HeroCardsMWG } from "@/components/hero/HeroCardsMWG";

export function HeroSection() {
  return (
    <header
      id="section_hero"
      className="section_hero relative w-full bg-gh-page pb-[4em] pt-[calc(7.5rem+1.5em)] text-gh-black min-[992px]:pb-[6em] min-[992px]:pt-[calc(7.5rem+2em)]"
    >
      <div className="w-full px-10 max-[479px]:px-5">
        <div className="mx-auto w-full max-w-[120em]">
          {/* 1 — Hero title */}
          <div className="hero-title">
            <h1 className="heading-xxl max-[991px]:!text-5xl min-[992px]:text-balance">
              Get Hyped.<span className="hidden min-[992px]:inline"> </span><br className="min-[992px]:hidden" />
              Get Noticed.<span className="hidden min-[992px]:inline"> </span><br className="min-[992px]:hidden" />
              Get Results.
            </h1>
          </div>

          {/* 2 — Paragraph */}
          <div className="mt-[1.5em] max-w-[60ch] min-[992px]:mt-[2em]">
            <p className="paragraph-l text-gh-black text-balance">
              Klaar met gokken op content <br />
              die niets oplevert?
            </p>
          </div>

          {/* 3 — Hero cards (desktop: inside container) */}
          <div className="hidden min-[992px]:mt-[3.5em] min-[992px]:block">
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