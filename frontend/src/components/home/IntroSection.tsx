import { ButtonDefault } from "@/components/ui/ButtonDefault";
import Image from "next/image";

export function IntroSection() {
  return (
    <section id="intro-home" className="mb-12 bg-gh-page min-[992px]:mb-20">
      <div className="px-5 py-12 min-[768px]:px-8 min-[768px]:py-16 min-[992px]:px-10 min-[992px]:py-24">
        <div className="mx-auto w-full max-w-[120em]">
          <div className="mb-10 min-[992px]:mb-16">
            <h2 className="m-0 max-w-[22ch] text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-gh-black min-[768px]:text-5xl min-[992px]:px-12 min-[992px]:text-6xl min-[1280px]:px-20">
              Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt en jouw merk in beweging brengt. Snel,
              krachtig en energiek.
            </h2>
          </div>

          <div className="grid grid-cols-1 items-start gap-8 min-[768px]:grid-cols-12 min-[768px]:items-end min-[768px]:gap-8 min-[992px]:gap-12">
            <div className="col-span-1 flex justify-center min-[768px]:col-span-3 min-[768px]:justify-start">
              <div className="h-[320px] w-[240px] rotate-[5deg] overflow-hidden rounded-3xl min-[768px]:h-auto min-[768px]:w-full min-[768px]:max-w-[18rem] min-[768px]:rounded-[2rem] min-[992px]:max-w-[22rem] md:rotate-[0deg]">
                <div className="h-full w-full min-[768px]:hidden">
                  <video
                    className="block h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/home/anniek-bril.webp"
                    src="/home/new-reach-loop.mp4"
                  />
                </div>
                <div className="hidden min-[768px]:block">
                  <Image
                    src="/home/anniek-bril.webp"
                    width={960}
                    height={960}
                    className="block h-auto w-full object-cover"
                    alt=""
                    draggable={false}
                    loading="lazy"
                    sizes="(min-width: 768px) 60vw, 0"
                  />
                </div>
              </div>
            </div>

            <div className="min-[768px]:col-span-6 min-[768px]:max-w-[42rem] min-[768px]:px-4 min-[768px]:pb-2 min-[992px]:px-12 min-[1280px]:px-20">
              <p className="m-0 max-w-[30ch] text-2xl min-[768px]:text-[1.625rem] min-[992px]:text-3xl font-semibold leading-[1.3] tracking-[-0.03em] text-gh-black ">
                We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar. Zo weet je precies wat werkt en
                wat niet. Nooit meer content zonder strategie. Nooit meer content zonder resultaat.
              </p>
              <div className="mt-8">
                <ButtonDefault href="/about" variant="outline">
                  Leer ons kennen
                </ButtonDefault>
              </div>
            </div>

            <div className="hidden min-[768px]:col-span-3 min-[768px]:flex min-[768px]:justify-end min-[768px]:pb-1">
              <ButtonDefault href="#expertises" variant="icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
