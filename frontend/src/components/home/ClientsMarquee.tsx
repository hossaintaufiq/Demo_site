const LOGOS = Array.from({ length: 11 }, (_, i) => `/home/client-${i + 1}.svg`);

export function ClientsMarquee() {
  const row = [...LOGOS, ...LOGOS];

  return (
    <section className="section_clients bg-gh-page">
      <div className="px-10 pb-8 pt-12 min-[992px]:pb-12 min-[992px]:pt-16 max-[479px]:px-5">
        <div className="mx-auto w-full max-w-[120em]">
          <div className="padding-bottom mb-10 max-w-[40rem] min-[992px]:mb-16">
            <h2 className="heading-m text-gh-black">These brands got hyped.</h2>
          </div>

          <div className="mwg_effect008 overflow-hidden">
            <div
              className="gh-marquee-track cursor-grab gap-[1vw] pr-[1vw] select-none"
              style={{ width: "max-content" }}
            >
              {row.map((src, i) => (
                <div key={`${src}-${i}`} className="card inline-flex shrink-0">
                  <div className="client-card flex h-[4.5rem] w-[10rem] items-center justify-center rounded-2xl bg-gh-white/80 px-6 shadow-sm min-[768px]:h-[5rem] min-[768px]:w-[12rem]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt="" className="max-h-full max-w-full object-contain" draggable={false} loading="lazy" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 pb-12 max-[479px]:px-5">
        <div className="mx-auto max-w-[120em]">
          <div className="section-divider" />
        </div>
      </div>
    </section>
  );
}
