import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import BrandLogo from '../common/BrandLogo'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)
  const navItems = [
    { label: 'Expertises', href: '#expertises' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const onScroll = () => {
      if (isMenuOpen) return
      const currentY = window.scrollY
      const delta = Math.abs(currentY - lastScrollY.current)
      if (delta < 6) return

      if (currentY < 20) {
        setIsVisible(true)
      } else if (currentY > lastScrollY.current) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isMenuOpen])

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 bg-transparent px-4 transition-all duration-300 md:px-10 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="mx-auto flex h-[5.25em] w-full max-w-[120em] items-center justify-between text-[rgb(51,51,51)] md:h-[7.5em]">
        <a href="/" className="relative z-10 inline-block h-[3.1em] md:h-[4.75em]" aria-label="Home link">
          <BrandLogo className="h-full w-auto" />
        </a>

        <div className="absolute left-1/2 hidden h-[3.5em] -translate-x-1/2 items-center gap-2 overflow-hidden rounded-[1em] bg-white p-2 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-[0.625em] px-3 py-2 text-[1.125em] font-semibold leading-none tracking-[-0.02em] transition-colors duration-200 hover:bg-[#161616] hover:text-white active:scale-95"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <button className="group inline-block text-[1.25em] font-semibold leading-none tracking-[-0.02em] text-[#161616]">
            <span className="relative flex h-[2.75em] items-center justify-center pl-4 pr-2">
              <span className="absolute inset-y-0 left-0 right-0 z-[-1] rounded-[0.75em] bg-[#FCB8FA]" />
              <span className="mr-2 whitespace-nowrap">Get Results</span>
              <span className="flex h-[2.25em] w-[2.25em] items-center justify-center rounded-[0.625em] bg-[#FFFEF7] text-[#FA5424]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 24"
                  fill="none"
                  className="h-[1.125em] w-[1.125em]"
                >
                  <path
                    d="M17.4906 11.0361C17.1898 10.6437 16.8237 10.3037 16.4837 9.96371C15.6075 9.17906 14.6136 8.61673 13.7766 7.79284C11.8281 5.88352 11.3965 2.73184 12.6389 0.3125C11.3965 0.613283 10.3111 1.29331 9.38256 2.03873C5.99549 4.75886 4.66158 9.55831 6.25704 13.6777C6.30935 13.8085 6.36166 13.9393 6.36166 14.1093C6.36166 14.397 6.16549 14.6585 5.90394 14.7632C5.60316 14.8939 5.2893 14.8155 5.04083 14.6062C4.96661 14.5441 4.90453 14.4687 4.85774 14.3839C3.37998 12.5138 3.14459 9.83294 4.13848 7.68822C1.95453 9.46676 0.764478 12.4746 0.934486 15.3124C1.01295 15.9663 1.09142 16.6202 1.31373 17.274C1.49682 18.0587 1.84991 18.8433 2.24224 19.5365C3.65461 21.7989 6.10011 23.4205 8.72869 23.7474C11.5273 24.1005 14.522 23.5905 16.6667 21.655C19.0599 19.4841 19.8969 16.0055 18.6676 13.0238L18.4976 12.6838C18.223 12.0823 17.4906 11.0361 17.4906 11.0361ZM13.3581 19.2749C12.992 19.5888 12.3904 19.9288 11.9196 20.0596C10.4549 20.5827 8.99024 19.8503 8.12712 18.9872C9.68335 18.621 10.6118 17.4702 10.8865 16.3063C11.1088 15.2601 10.6903 14.397 10.5203 13.39C10.3634 12.4223 10.3895 11.5984 10.7426 10.6961C10.9911 11.193 11.2526 11.6899 11.5665 12.0823C12.5735 13.39 14.1559 13.9654 14.4959 15.744C14.5482 15.9271 14.5743 16.1101 14.5743 16.3063C14.6136 17.3787 14.1428 18.5556 13.3581 19.2749Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </span>
          </button>
        </div>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-lg bg-[#FCB8FA] md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FCB8FA] px-6 pt-24 md:hidden">
          <div className="flex flex-col items-center gap-6">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-3xl font-semibold">
                {item.label}
              </a>
            ))}
            <button className="mt-8 rounded-xl bg-[#FA5424] px-8 py-4 text-xl font-semibold text-white">
              Get Results
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
