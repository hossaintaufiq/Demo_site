const expertiseAreas = [
  {
    number: '01',
    title: 'Social strategy',
    subtitle: 'Slimme strategie. Sterke start.',
    description:
      'We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die echt impact maken. Zo weet je precies waarom het werkt.',
    cta: 'Meer over social strategie',
    color: '#f7f2ea',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600&auto=format&fit=crop',
  },
  {
    number: '02',
    title: 'Content creation',
    subtitle: 'Content die opvalt en raakt.',
    description:
      'We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.',
    cta: 'Meer over content creatie',
    color: '#f5b6f7',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop',
  },
  {
    number: '03',
    title: 'Activation',
    subtitle: 'Zichtbaar waar en wanneer het telt.',
    description:
      'De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen, precies waar en wanneer het telt.',
    cta: 'Meer over activation',
    color: '#33C791',
    image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=600&auto=format&fit=crop',
  },
  {
    number: '04',
    title: 'Data',
    subtitle: 'Inzichten die impact maken.',
    description:
      'We duiken in de cijfers om te snappen wat echt werkt. En sturen jouw content scherp bij.',
    cta: 'Meer over data',
    color: '#0D8DFF',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop',
  },
]

function ExpertiseSection() {
  return (
    <section id="expertises" className="reveal-on-scroll bg-[rgb(250,244,236)] px-3 py-10 md:px-10">
      <div className="mx-auto w-full max-w-[120em]">
        <div className="relative">
          {expertiseAreas.map((area, index) => (
            <article
              key={area.number}
              className="sticky rounded-3xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1 md:p-9"
              style={{
                backgroundColor: area.color,
                top: `${64 + index * 14}px`,
                marginBottom: index === expertiseAreas.length - 1 ? '0px' : '1.6rem',
                zIndex: index + 1,
              }}
            >
              <div className="absolute left-6 top-5 rounded-md bg-white/85 px-2 py-1 text-xs font-semibold">
                Expertise
              </div>
              <div className="absolute right-5 top-3 text-6xl font-semibold tracking-tight text-white/30 md:text-7xl">
                {area.number}
              </div>

              <div className="mt-7 grid items-end gap-4 md:grid-cols-[1fr_230px] md:gap-10">
                <div>
                  <h3 className="text-4xl font-semibold tracking-tight md:text-7xl">
                    {area.title}
                  </h3>
                  <h4 className="mt-10 text-2xl font-semibold tracking-tight md:mt-24 md:text-4xl">
                    {area.subtitle}
                  </h4>
                  <p className="mt-3 max-w-[44ch] text-sm font-medium text-black/80 md:text-[1.8rem] md:leading-[1.25] md:tracking-[-0.02em]">
                    {area.description}
                  </p>
                  <button className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white/90 px-3 py-2 text-sm font-semibold text-black md:text-base">
                    {area.cta}
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#161616] text-white">
                      →
                    </span>
                  </button>
                </div>
                <img
                  src={area.image}
                  alt={area.title}
                  className="h-[150px] w-[120px] rotate-2 rounded-2xl border-4 border-white/80 object-cover md:h-[290px] md:w-[220px] md:justify-self-end"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExpertiseSection
