import Image from "next/image";

const LOGOS = Array.from({ length: 11 }, (_, i) => `/home/client-${i + 1}.svg`);

export function ClientsMarquee() {
  const row = [...LOGOS, ...LOGOS];

  return (
    <section className="bg-gh-page">
      <div className="px-10 pb-8 pt-12 min-[992px]:pb-12 min-[992px]:pt-16 max-[479px]:px-5">
        <div className="mx-auto w-full max-w-[120em]">
          <div className="mb-10 max-w-[40rem] min-[992px]:mb-16">
            <h2 className="m-0 text-4xl md:text-7xl font-semibold leading-[1.05] tracking-[-0.03em] text-gh-black text-left">
              These brands <br />got hyped.
            </h2>
          </div>

          <div className="overflow-hidden">
            <div className="flex w-max animate-[gh-marquee_45s_linear_infinite] cursor-grab gap-[1vw] pr-[1vw] select-none">
              {row.map((src, i) => (
                <div key={`${src}-${i}`} className="inline-flex shrink-0">
                  <div className="flex h-[105px] w-[105px] md:h-[305px] md:w-[305px] items-center justify-center rounded-2xl bg-gh-white/80 px-4 shadow-sm">
                    <Image
                      src={src}
                      alt=""
                      width={190}
                      height={70}
                      className="h-auto w-auto max-h-full max-w-full object-contain"
                      draggable={false}
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 pb-12 max-[479px]:px-5">
        <div className="mx-auto max-w-[120em]">
          <div className="h-px w-full bg-gh-black/12" />
        </div>
      </div>
    </section>
  );
}
