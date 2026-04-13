function HeroSection() {
  return (
    <section className="box-border overflow-x-hidden bg-[rgb(250,244,236)] px-4 pb-10 pt-28 text-[rgb(51,51,51)] md:px-10 md:pb-[3em] md:pt-[12em]">
      <div className="mx-auto w-full max-w-[120em]">
        <div className="animate-fade-up mx-auto flex w-full flex-col gap-4 md:max-w-[70%] lg:flex-row lg:items-start">
          <h1 className="m-0 mt-2 text-[clamp(2rem,12vw,102.4px)] font-semibold leading-[0.95em] -tracking-wider">
            Get Hyped. Get Noticed. Get Results.
          </h1>
          <div className="w-full max-w-[60ch]">
            <p className="m-0 text-[clamp(1rem,5.2vw,25.6px)] font-semibold leading-[1.3em] tracking-[-0.03em]">
              Klaar met gokken op content
              <br />
              die niets oplevert?
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center md:mt-10">
          <div className="w-full max-w-[120em]">
            <div className="flex gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:p-2 xl:grid-cols-4 xl:p-[4em]">
              <div
                className="animate-float-card relative aspect-[4.8/6.2] w-[46vw] min-w-[46vw] overflow-hidden rounded-[1.1em] bg-[rgb(13,141,255)] text-[rgb(22,22,22)] md:w-full md:min-w-0 md:rounded-[3em]"
                style={{ '--card-rot': '-8.92107deg' }}
              >
                <div className="flex h-full w-full flex-col justify-between p-4 md:p-[2em]">
                  <div className="text-[2.1em] font-semibold leading-[0.9] -tracking-wider md:text-[5.5em]">
                    10M+
                  </div>
                  <div className="flex w-full flex-col gap-[0.5em]">
                    <h2 className="my-[10px] text-[14px] font-semibold leading-[1.1em] tracking-[-0.03em] md:text-[25.6px]">
                      Organische views
                    </h2>
                    <div className="h-px w-full bg-[rgb(22,22,22)]" />
                    <p className="my-0 max-w-[95%] text-[10px] font-medium leading-[1.3em] tracking-[-0.03em] md:text-[16px] md:leading-[1.4em]">
                      Groei door slimme content
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="animate-float-card relative aspect-[4.8/6.2] w-[46vw] min-w-[46vw] overflow-hidden rounded-[1.1em] bg-[rgb(250,244,236)] text-[rgb(22,22,22)] md:w-full md:min-w-0 md:rounded-[3em]"
                style={{ '--card-rot': '-8.78044deg', animationDelay: '180ms' }}
              >
                <img
                  src="/assets/video-thumb-01.avif"
                  alt=""
                  draggable="false"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <video
                  muted
                  loop
                  playsInline
                  autoPlay
                  src="https://gethyped.b-cdn.net/Salontopper/Loop%20Salontopper.mp4"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              <div
                className="animate-float-card relative aspect-[4.8/6.2] w-[46vw] min-w-[46vw] overflow-hidden rounded-[1.1em] bg-[rgb(51,199,145)] text-[rgb(22,22,22)] md:w-full md:min-w-0 md:rounded-[3em]"
                style={{ '--card-rot': '0.757128deg', animationDelay: '360ms' }}
              >
                <div className="flex h-full w-full flex-col justify-between p-4 md:p-[2em]">
                  <div className="text-[2.1em] font-semibold leading-[0.9] -tracking-wider md:text-[5.5em]">
                    30+
                  </div>
                  <div className="flex w-full flex-col gap-[0.5em]">
                    <h2 className="my-[10px] text-[14px] font-semibold leading-[1.1em] tracking-[-0.03em] md:text-[25.6px]">
                      Merken geholpen
                    </h2>
                    <div className="h-px w-full bg-[rgb(22,22,22)]" />
                    <p className="my-0 max-w-[95%] text-[10px] font-medium leading-[1.3em] tracking-[-0.03em] md:text-[16px] md:leading-[1.4em]">
                      Van start-up tot multinational
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="animate-float-card relative aspect-[4.8/6.2] w-[46vw] min-w-[46vw] overflow-hidden rounded-[1.1em] bg-[rgb(250,244,236)] text-[rgb(22,22,22)] md:w-full md:min-w-0 md:rounded-[3em]"
                style={{ '--card-rot': '-5.64277deg', animationDelay: '540ms' }}
              >
                <img
                  src="/assets/video-thumb-02.avif"
                  alt=""
                  draggable="false"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <video
                  muted
                  loop
                  playsInline
                  autoPlay
                  src="https://gethyped.b-cdn.net/Petrol%20Head/petrolhead-loop.mp4"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
