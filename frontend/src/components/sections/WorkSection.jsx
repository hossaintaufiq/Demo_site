import { ArrowUpRight } from 'lucide-react'

const workItems = [
  {
    id: 1,
    title: 'Van nul naar vol,\nbinnen 3 weken',
    brand: 'Bullit',
    image: '/assets/bullit-placeholder.avif',
    color: '#ff5a2a',
  },
  {
    id: 2,
    title: 'Zacht in smaak,\nsterk in beeld',
    brand: 'Roasta',
    image: '/assets/roasta-placeholder.avif',
    color: '#1e8df0',
  },
  {
    id: 3,
    title: 'Content die écht\nsmaakt (en raakt)',
    brand: 'Loco',
    image: '/assets/loco-placeholder.avif',
    color: '#36c89f',
  },
]

function WorkSection() {
  return (
    <section id="work" className="reveal-on-scroll bg-[rgb(250,244,236)] px-4 py-16 md:px-10 md:py-20">
      <div className="mx-auto w-full max-w-[120em]">
        <div className="mb-10 grid gap-8 md:mb-14 md:grid-cols-[1fr_2fr] md:items-end">
          <div className="max-w-[34rem]">
            <h2 className="text-4xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
              Content
              <br />
              dat scoort.
            </h2>
            <p className="mt-4 text-lg font-medium leading-[1.28] tracking-[-0.02em] text-black/80 md:text-[1.65rem]">
              Wij vertellen jouw verhaal. Op een manier die echt past bij jouw doelgroep. Met creatieve
              content die werkt en het verschil maakt.
            </p>
            <button className="mt-6 inline-flex items-center gap-2 rounded-xl border border-black px-4 py-2.5 text-sm font-semibold">
              Bekijk al ons werk
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-black text-white">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:items-start md:gap-5">
          {workItems.map((item, index) => (
            <div
              key={item.id}
              className={`group cursor-pointer animate-fade-up ${
                index === 0
                  ? 'md:mt-8'
                  : index === 1
                    ? 'md:mt-0 md:rotate-[1deg]'
                    : 'md:-mt-8 md:-rotate-[1deg]'
              }`}
              style={{ animationDelay: `${index * 140}ms` }}
            >
              <div
                className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] border-[3px] bg-gray-100 transition-transform duration-300 group-hover:-translate-y-1 md:rounded-[1.6rem] md:border-[4px]"
                style={{ borderColor: item.color }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-x-2 bottom-2 rounded-[1rem] p-4 pt-10 text-white"
                  style={{
                    backgroundColor: item.color,
                    clipPath: 'polygon(0 26%, 100% 0, 100% 100%, 0 100%)',
                  }}
                >
                  <div className="absolute right-3 top-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-[0.85rem] bg-white text-black shadow-sm">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>
                  <h3 className="whitespace-pre-line text-[1.55rem] font-semibold leading-[1.03] tracking-[-0.03em] md:text-[2.1rem]">
                    {item.title}
                  </h3>
                  <span className="mt-2 inline-block rounded-md bg-white/25 px-2 py-1 text-sm font-semibold">
                    {item.brand}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkSection
