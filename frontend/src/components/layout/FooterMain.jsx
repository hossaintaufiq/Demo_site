import { useEffect, useRef } from 'react'

function SpinningBadge() {
  const textRef = useRef(null)

  useEffect(() => {
    let angle = 0
    let raf
    const spin = () => {
      angle += 0.35
      if (textRef.current) textRef.current.style.transform = `rotate(${angle}deg)`
      raf = requestAnimationFrame(spin)
    }
    raf = requestAnimationFrame(spin)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className="absolute right-4 top-4 h-20 w-20 rounded-full bg-[#e8b4f0] md:right-[8%] md:top-6 md:h-24 md:w-24">
      <svg ref={textRef} viewBox="0 0 100 100" className="h-full w-full">
        <path id="footerCirclePath" d="M50 50 m -35 0 a 35 35 0 1 1 70 0 a 35 35 0 1 1 -70 0" fill="none" />
        <text className="fill-black text-[7px] font-bold tracking-[0.14em]">
          <textPath href="#footerCirclePath">GET HYPED • GET RESULTS • GET NOTICED • </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 m-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#e8b4f0] text-base font-black md:h-12 md:w-12 md:text-lg">
        GH
      </div>
    </div>
  )
}

export default function FooterMain() {
  const footerLogos = [
    '/assets/gh-logo-blue.svg',
    '/assets/gh-logo-pink.svg',
    '/assets/gh-logo-green.svg',
    '/assets/gh-logo-red.svg',
  ]

  return (
    <footer id="contact" className="reveal-on-scroll w-full overflow-hidden bg-[#f2ede8]">
      <section className="relative flex min-h-[300px] flex-col items-center justify-center px-4 text-center md:min-h-[360px] md:px-6">
        <SpinningBadge />
        <h2 className="text-5xl font-black tracking-[-0.04em] text-[#1a1a1a] md:text-[6rem]">
          Let&apos;s Get Hyped!
        </h2>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 md:mt-6 md:gap-3">
          <button className="rounded-xl border-2 border-[#1a1a1a] bg-[#faf4ec] px-4 py-2 text-xs font-semibold transition-transform hover:scale-105 md:px-5 md:text-sm">
            Mail ons direct
          </button>
          <button className="rounded-xl bg-[#171717] px-4 py-2 text-xs font-semibold text-[#faf4ec] transition-transform hover:scale-105 md:px-5 md:text-sm">
            Get Results
          </button>
        </div>
      </section>

      <section className="relative">
        <div
          className="absolute inset-x-0 bottom-0 h-full bg-[#dcd7ce]"
          style={{ clipPath: 'polygon(0 30%, 100% 0, 100% 100%, 0 100%)' }}
        />
        <div className="relative z-10 grid grid-cols-1 items-end gap-6 px-4 pb-8 pt-16 md:grid-cols-3 md:gap-8 md:px-10 md:pt-24">
          <div className="inline-block w-fit bg-black px-3 py-1 text-3xl font-black leading-none text-white md:text-6xl">
            GETHYPED
          </div>
          <div className="space-y-4 text-center text-sm">
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {['Expertises', 'Work', 'About', 'Contact'].map((n) => (
                <span key={n} className="rounded-xl bg-[#faf4ec] px-3 py-1 text-xs font-medium">
                  {n}
                </span>
              ))}
            </div>
            <p className="text-xs text-black/70">© 2026 Get Hyped</p>
            <p className="-mt-2 text-xs text-black/70">© Design by Dylan</p>
          </div>
          <div className="text-sm md:text-right">
            <p className="font-bold tracking-[-0.01em]">Contact</p>
            <p>info@gethyped.nl</p>
            <p>+31 6 1533 7496</p>
            <p className="mt-3 font-bold tracking-[-0.01em]">Adres</p>
            <p>Beltrumsestraat 6,</p>
            <p>7141 AL Groenlo</p>
            <p className="mt-3 text-xs text-black/70">Privacyvoorwaarden</p>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center gap-3 bg-[#f2ede8] px-4 pb-8 md:gap-4 md:px-10">
        {footerLogos.map((logo) => (
          <img key={logo} src={logo} alt="" className="h-8 w-auto md:h-10" />
        ))}
      </div>
    </footer>
  )
}
