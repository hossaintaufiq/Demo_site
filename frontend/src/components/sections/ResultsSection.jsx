const brands = [
  '/assets/brand-bullit-digital.svg',
  '/assets/brand-morssinkhof.svg',
  '/assets/brand-salontopper.svg',
  '/assets/brand-seesing-flex.svg',
  '/assets/brand-graafschap-college.svg',
  '/assets/brand-fides.svg',
  '/assets/brand-srhk.svg',
  '/assets/brand-knltb.svg',
  '/assets/brand-tho.svg',
  '/assets/brand-de-talententuin.svg',
  '/assets/brand-zclv.svg',
]

function ResultsSection() {
  return (
    <section className="reveal-on-scroll overflow-hidden bg-[rgb(250,244,236)] py-14 md:py-20">
      <div className="mx-auto w-full max-w-[120em] px-4 md:px-10">
        <h2 className="text-center text-[2rem] font-semibold leading-[0.95] tracking-[-0.03em] md:text-left md:text-6xl">
          These brands got hyped.
        </h2>
      </div>

      <div className="relative mt-8 md:mt-10">
        <div className="animate-marquee flex w-max items-center gap-2.5 pr-2.5 md:gap-3 md:pr-3">
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={`${index}-${brand}`}
              className="flex h-[82px] w-[146px] shrink-0 items-center justify-center rounded-[0.7rem] border border-black/10 bg-[#faf4ec] px-3 md:h-[128px] md:w-[220px] md:px-4"
            >
              <img src={brand} alt="" className="max-h-[52px] max-w-full object-contain md:max-h-[78px]" />
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[rgb(250,244,236)] to-transparent md:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[rgb(250,244,236)] to-transparent md:w-20" />
      </div>
    </section>
  )
}

export default ResultsSection
