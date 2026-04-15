import { ButtonDefault } from "@/components/ui/ButtonDefault";
import Image from "next/image";

export function IntroSection() {
  return (
    <section id="intro-home" className="bg-gh-page">
      <div className="px-10 py-16 min-[992px]:py-24 max-[479px]:px-5">
        <div className="mx-auto w-full max-w-[120em]">
          <div className="mb-12 min-[992px]:mb-16">
            <h2 className="m-0 max-w-[22ch] text-balance text-gh-black text-[clamp(1.75rem,3.6vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
              Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt en jouw merk in beweging brengt. Snel,
              krachtig en energiek.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-10 min-[992px]:grid-cols-12 min-[992px]:items-end min-[992px]:gap-12">
            <div className="overflow-hidden rounded-3xl min-[992px]:col-span-3 min-[992px]:max-w-[22rem] min-[992px]:rounded-[2rem]">
              <div className="min-[992px]:hidden">
                <video
                  className="block h-auto w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  src="/home/new-reach-loop.mp4"
                />
              </div>
              <div className="hidden min-[992px]:block">
                <Image
                  src="/home/anniek-bril.webp"
                  width={960}
                  height={960}
                  className="block h-auto w-full object-cover"
                  alt=""
                  draggable={false}
                  sizes="(min-width: 992px) 60vw, 0"
                />
              </div>
            </div>

            <div className="min-[992px]:col-span-6 min-[992px]:max-w-[42rem] min-[992px]:pb-2">
              <p className="m-0 max-w-[30ch] text-[2rem] font-semibold leading-[1.3] tracking-[-0.03em] text-gh-black">
                We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar. Zo weet je precies wat werkt en
                wat niet. Nooit meer content zonder strategie. Nooit meer content zonder resultaat.
              </p>
              <div className="mt-8">
                <ButtonDefault href="/about" variant="outline">
                  Leer ons kennen
                </ButtonDefault>
              </div>
            </div>

            <div className="hidden min-[992px]:col-span-3 min-[992px]:flex min-[992px]:justify-end min-[992px]:pb-1">
              <ButtonDefault href="#expertises" variant="icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
