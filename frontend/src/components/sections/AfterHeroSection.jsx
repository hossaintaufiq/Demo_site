function AfterHeroSection() {
  return (
    <section id="about" className="reveal-on-scroll w-full bg-[rgb(250,244,236)] px-4 pb-14 pt-8 text-[rgb(51,51,51)] md:px-10 md:pb-20">
      <div className="w-full">
        <div className="w-full max-w-none">
          <h2 className="text-[clamp(1.8rem,8.5vw,4rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
            Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep
            raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.
          </h2>
        </div>

        <div className="mt-8 grid w-full grid-cols-1 gap-6 md:mt-10 md:grid-cols-[240px_1fr_auto] md:items-end md:gap-14">
          <div className="relative h-[200px] w-[180px] overflow-hidden rounded-[1.25em] md:h-[206px] md:w-[206px]">
            <img
              src="/assets/Anniek-Bril.webp"
              alt=""
              draggable="false"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <video
              muted
              loop
              playsInline
              autoPlay
              src="https://gethyped.b-cdn.net/New%20Reach/new-reach-loop.mp4"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="max-w-[31rem]">
            <p className="text-[clamp(1rem,4.5vw,2rem)] font-semibold leading-[1.25] tracking-[-0.03em]">
              We stoppen niet bij mooie plaatjes en vette beelden. We maken het
              meetbaar. Zo weet je precies wat werkt en wat niet. Nooit meer
              content zonder strategie. Nooit meer content zonder resultaat.
            </p>

            <a
              href="/about"
              className="relative mt-4 inline-block text-[0.95rem] font-semibold leading-none tracking-[-0.02em] text-[rgb(22,22,22)]"
            >
              <span className="relative flex h-[2.1em] items-center justify-center py-2 pl-[0.85em]">
                <span className="absolute inset-y-0 left-0 right-0 z-[-1] w-[calc(100%_-_0.4em)] rounded-[0.6em] border border-[rgb(22,22,22)] bg-[rgb(250,244,236)]" />
                <span className="ml-[0.2em] mr-[0.4em] whitespace-nowrap">
                  Leer ons kennen
                </span>
                <span className="relative flex h-[1.6em] w-[1.6em] items-center justify-center rounded-[0.45em] bg-[rgb(22,22,22)] text-[rgb(250,244,236)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="100%"
                    viewBox="0 0 22 21"
                    fill="none"
                    className="h-[0.7em]"
                  >
                    <path
                      d="M11.2832 20.9176L9.14509 18.8002L15.5491 12.3962L-0.00939941 12.3962L-0.00939941 9.30322L15.5491 9.30322L9.14509 2.9096L11.2832 0.78186L21.3511 10.8497L11.2832 20.9176Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </span>
            </a>
          </div>

          <div className="md:justify-self-end">
            <a
              href="#expertises"
              className="relative inline-block text-[rgb(22,22,22)]"
              aria-label="Scroll to expertises"
            >
              <span className="relative flex h-[2.1em] w-[2.1em] items-center justify-center">
                <span className="absolute inset-0 z-[-1] rounded-[0.6em] border border-[rgb(22,22,22)]" />
                <span className="flex h-[1.6em] w-[1.6em] items-center justify-center rounded-[0.45em] bg-[rgb(255,254,247)] text-[rgb(250,84,36)]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 27" fill="none" className="h-[0.7em] w-[0.7em]">
                    <path
                      d="M0.876668 14.4267L3.42629 11.852L11.1376 19.5634L11.1376 0.828689L14.8621 0.828689L14.8621 19.5634L22.5609 11.852L25.123 14.4267L12.9999 26.5498L0.876668 14.4267Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AfterHeroSection
