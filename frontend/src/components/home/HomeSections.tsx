import Link from "next/link";

const arrowRight = (
  <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 22 21" fill="none" className="icon-14px">
    <path d="M11.2832 20.9176L9.14509 18.8002L15.5491 12.3962L-0.00939941 12.3962L-0.00939941 9.30322L15.5491 9.30322L9.14509 2.9096L11.2832 0.78186L21.3511 10.8497L11.2832 20.9176Z" fill="currentColor" />
  </svg>
);

const arrowDown = (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 26 27" fill="none" className="button-default__icon is-button-icon">
    <path d="M0.876668 14.4267L3.42629 11.852L11.1376 19.5634L11.1376 0.828689L14.8621 0.828689L14.8621 19.5634L22.5609 11.852L25.123 14.4267L12.9999 26.5498L0.876668 14.4267Z" fill="currentColor" />
  </svg>
);

const workArrow = (
  <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 28 27" fill="none" className="work-card_icon-svg">
    <path d="M14.9554 26.0653L12.2003 23.337L20.4522 15.0851L0.404297 15.0851L0.404297 11.0996L20.4522 11.0996L12.2003 2.86109L14.9554 0.119385L27.9284 13.0923L14.9554 26.0653Z" fill="currentColor" />
  </svg>
);

const cardShape = (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 429 174" fill="none">
    <path d="M428.625 35.0943V136.589C428.625 152.326 428.625 167.249 428.625 173.088L1.03513e-06 173.082C-1.56688e-05 170.148 0.000175319 166.808 0.000175319 159.068V77.9695C0.000175319 70.9826 5.03458 65.0132 11.904 63.8674L388.605 1.00885C409.565 -2.47661 428.625 13.7568 428.625 35.0862" fill="currentColor" />
  </svg>
);

export function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader_content">
        <div className="preloader_line" />
        <div className="preloader__shapes">
          <div className="preloader__fill-top" />
          <div className="preloader__fill-bottom" />
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <header id="section_hero" className="section_hero">
      <div className="padding-global">
        <div className="w-layout-blockcontainer container-col-12 w-container">
          <div className="hero text-wrap-auto">
            <div className="hero-title">
              <h1 data-preloader-title="" className="heading-xxl">
                Get Hyped. Get Noticed. Get Results.
              </h1>
              <div className="max-width-60ch">
                <p id="data-preloader-par" className="paragraph-l">
                  Klaar met gokken op content <br />
                  die niets oplevert?
                </p>
              </div>
            </div>
            <div className="mwg_effect025">
              <div className="container-col-12">
                <div data-preloader-cards="" className="container is-mwg_effect025">
                  <div className="results-card theme-blue">
                    <div className="results-card_content">
                      <div className="results-card_title">10M+</div>
                      <div className="results-card_body">
                        <h2 className="results-card_subtitle">Organische views</h2>
                        <div className="results-card_divider" />
                        <p className="results-card_paragraph">Groei door slimme content</p>
                      </div>
                    </div>
                  </div>
                  <div className="results-card">
                    <img
                      src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/69c40296636e683096701cda_video-thumb-01.avif"
                      loading="eager"
                      alt=""
                      sizes="(max-width: 375px) 100vw, 375px"
                      srcSet="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/69c40296636e683096701cda_video-thumb-01-p-500.avif 500w, https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/69c40296636e683096701cda_video-thumb-01-p-800.avif 800w, https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/69c40296636e683096701cda_video-thumb-01.avif 1080w"
                      className="image"
                    />
                    <video
                      muted
                      loop
                      playsInline
                      src="https://gethyped.b-cdn.net/Salontopper/Loop%20Salontopper.mp4"
                      autoPlay
                      className="video"
                    />
                  </div>
                  <div className="results-card hide-mobile theme-green">
                    <div className="results-card_content">
                      <div className="results-card_title">30+</div>
                      <div className="results-card_body">
                        <h2 className="results-card_subtitle">Merken geholpen</h2>
                        <div className="results-card_divider" />
                        <p className="results-card_paragraph">Van start-up tot multinational</p>
                      </div>
                    </div>
                  </div>
                  <div className="results-card hide-tablet-mobile">
                    <img
                      src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/69c402fa5b2a05b98200d317_video-thumb-02.avif"
                      loading="lazy"
                      alt=""
                      sizes="(max-width: 991px) 100vw, 960px"
                      srcSet="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/69c402fa5b2a05b98200d317_video-thumb-02-p-500.avif 500w, https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/69c402fa5b2a05b98200d317_video-thumb-02.avif 960w"
                      className="image"
                    />
                    <video
                      muted
                      loop
                      playsInline
                      src="https://gethyped.b-cdn.net/Petrol%20Head/petrolhead-loop.mp4"
                      autoPlay
                      className="video"
                    />
                  </div>
                </div>
              </div>
              <div className="mwg_effect025-css w-embed" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export function IntroSection() {
  return (
    <section id="intro-home" className="section_intro">
      <div className="section-padding-96px">
        <div className="padding-global">
          <div className="container-col-12">
            <div className="grid-col-12">
              <div id="w-node-faa2305a-1600-624b-3553-a5629475cb11-23544b6d" className="margin-bottom margin-96px">
                <h2 className="heading-m">
                  Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt en jouw merk in beweging brengt. Snel,
                  krachtig en energiek.
                </h2>
              </div>
              <div id="w-node-faa2305a-1600-624b-3553-a5629475cb14-23544b6d" data-video="playpause" className="small-image">
                <div className="show-mobile">
                  <video
                    muted
                    loop
                    playsInline
                    src="https://gethyped.b-cdn.net/New%20Reach/new-reach-loop.mp4"
                    autoPlay
                    className="video"
                  />
                </div>
                <div className="hide-mobile">
                  <img
                    sizes="(max-width: 960px) 100vw, 960px"
                    srcSet="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6894757aa6dd3f84f6e463a2_Anniek%20Bril-p-500.webp 500w, https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6894757aa6dd3f84f6e463a2_Anniek%20Bril-p-800.webp 800w, https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6894757aa6dd3f84f6e463a2_Anniek%20Bril.webp 960w"
                    alt=""
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6894757aa6dd3f84f6e463a2_Anniek%20Bril.webp"
                    className="image"
                  />
                </div>
              </div>
              <div className="show-mobile">
                <div className="padding-bottom padding-96px" />
              </div>
              <div id="w-node-faa2305a-1600-624b-3553-a5629475cb19-23544b6d" className="content-wrap">
                <p className="paragraph-l">
                  We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar. Zo weet je precies wat werkt en wat
                  niet. Nooit meer content zonder strategie. Nooit meer content zonder resultaat.
                </p>
                <div className="button-wrap">
                  <Link href="/about" className="button-default is-outline w-inline-block">
                    <span className="button-default__inner">
                      <span className="button-default__background is-outline" />
                      <span className="button-default__text">Leer ons kennen</span>
                      <div className="button-default__icon is-black">{arrowRight}</div>
                    </span>
                  </Link>
                </div>
              </div>
              <div id="w-node-faa2305a-1600-624b-3553-a5629475cb1f-23544b6d" className="hide-mobile">
                <a href="#expertises" className="button-default is-icon w-inline-block">
                  <span className="button-default__inner is-icon">
                    <span className="button-default__background is-button-icon is-arrow" />
                    <div className="button-default__icons">
                      <div className="button-default__icon-wrap">{arrowDown}</div>
                      <div className="button-default__icon-wrap">{arrowDown}</div>
                    </div>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const expertiseSlides = [
  {
    theme: "theme-white",
    title: "Social strategy",
    n: "1",
    video: "https://gethyped.b-cdn.net/MD/MD%20Loop%20Schaken.mp4",
    h3: "Slimme strategie. Sterke start.",
    body: "We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.",
    href: "/expertises/social-strategie",
    cta: "Meer over social strategie",
  },
  {
    theme: "theme-pink",
    title: "Content creation",
    n: "2",
    video: "https://gethyped.b-cdn.net/Expertises/Loop%20BTS%20comp.mp4",
    h3: "Content die opvalt en raakt.",
    body: "We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.",
    href: "/expertises/content-creatie",
    cta: "Meer over content creatie",
  },
  {
    theme: "theme-green",
    title: "Activation",
    n: "3",
    video: "https://gethyped.b-cdn.net/Over%20de%20Top/overdetop-loop.mp4",
    h3: "Zichtbaar waar en wanneer het telt.",
    body: "De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen, precies waar en wanneer het telt.",
    href: "/expertises/activatie",
    cta: "Meer over activatie",
  },
  {
    theme: "theme-blue",
    title: "Data",
    n: "4",
    video: "https://gethyped.b-cdn.net/Expertises/Data%20comp.mp4",
    h3: "Inzichten die impact maken.",
    body: "We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.",
    href: "/expertises/data",
    cta: "Meer over data",
  },
] as const;

export function ExpertisesSection() {
  return (
    <section id="expertises" className="section_expertises">
      <div className="padding-global">
        <div className="container-col-12">
          <div className="mwg_effect031">
            <div className="expertises-collection w-dyn-list">
              <div role="list" className="expertises-list w-dyn-items">
                {expertiseSlides.map((ex) => (
                  <div key={ex.href} role="listitem" className="expertises-item w-dyn-item">
                    <div className="expertise-slide">
                      <div className="expertise-wrap">
                        <div className={`expertise-content ${ex.theme}`}>
                          <div className="expertise-content_top">
                            <div className="label">
                              <div className="paragraph-m">Expertise</div>
                            </div>
                            <h2 className="expertise-content_heading">{ex.title}</h2>
                            <div className="expertise-content_number">
                              <div className="expertise-content_heading">0</div>
                              <div className="expertise-content_heading">{ex.n}</div>
                            </div>
                          </div>
                          <div className="expertise-content_img">
                            <div className="medium-image">
                              <img
                                src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6870f59d419ece22b50be1ae_visual.webp"
                                loading="lazy"
                                alt=""
                                className="image w-condition-invisible w-dyn-bind-empty"
                              />
                              <video muted loop playsInline src={ex.video} autoPlay className="video" />
                            </div>
                          </div>
                          <div className="expertise-content_bottom">
                            <h3 className="heading-xs">{ex.h3}</h3>
                            <p className="paragraph-m">{ex.body}</p>
                            <div className="button-wrap">
                              <Link href={ex.href} className="button-default w-inline-block">
                                <span className="button-default__inner">
                                  <span className="button-default__background" />
                                  <span className="button-default__text">{ex.cta}</span>
                                  <div className="button-default__icon is-default">{arrowRight}</div>
                                </span>
                              </Link>
                            </div>
                          </div>
                          <Link href={ex.href} aria-label="Expertise link" className="expertise-link w-inline-block" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const workCases = [
  {
    href: "/work/bullit",
    video: "https://gethyped.b-cdn.net/Bullit/Bullit%20%7C%20Loop.mp4",
    img: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/69c3d06cc7a0b07e150a671d_Bullit%20branded%20placeholder_2.1.1.avif",
    imgSet:
      "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/69c3d06cc7a0b07e150a671d_Bullit%20branded%20placeholder_2.1.1-p-500.avif 500w, https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/69c3d06cc7a0b07e150a671d_Bullit%20branded%20placeholder_2.1.1.avif 1080w",
    alt: "Voor Bullit vertaalden we cultuur en energie naar social-first shorts met resultaat.",
    title: "Van nul naar vol, binnen 3 weken",
    brand: "Bullit",
  },
  {
    href: "/work/roasta",
    video: "https://gethyped.b-cdn.net/Roasta/roasta-loop.mp4",
    img: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68716a54a3bf63bf25c2ae92_roasta-placeholder.avif",
    imgSet:
      "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68716a54a3bf63bf25c2ae92_roasta-placeholder-p-500.avif 500w, https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68716a54a3bf63bf25c2ae92_roasta-placeholder.avif 960w",
    alt: "Met to-the-point visuals brengen we de pure smaak van Jamaica over.",
    title: "Zacht in smaak, sterk in beeld",
    brand: "Roasta",
  },
  {
    href: "/work/loco-loco",
    video: "https://gethyped.b-cdn.net/Loco/loco-bites-loop.mp4",
    img: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68716b4e8982337b1d3d1bd7_loco-loco-placeholder.avif",
    imgSet:
      "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68716b4e8982337b1d3d1bd7_loco-loco-placeholder-p-500.avif 500w, https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68716b4e8982337b1d3d1bd7_loco-loco-placeholder.avif 960w",
    alt: "Voor Loco vertaalden we sfeer naar shorts die werken.",
    title: "Content die écht smaakt (en raakt)",
    brand: "Loco",
  },
] as const;

export function SelectedWorkSection() {
  return (
    <section className="section_selected-work">
      <div className="section-padding-96px">
        <div className="padding-global">
          <div className="container-col-12">
            <div className="sw_wrapper">
              <div className="container-col-10">
                <div className="max-width-col-06">
                  <div className="content-wrap">
                    <h2 className="heading-xl">
                      <strong>Content dat scoort.</strong>
                    </h2>
                    <div className="max-width-60ch">
                      <p className="paragraph-l">
                        Wij vertellen jouw verhaal. Op een manier die écht past bij jouw doelgroep. Met creatieve content die werkt
                        en het verschil maakt.
                      </p>
                    </div>
                    <div className="button-wrap">
                      <Link href="/work" className="button-default is-outline w-inline-block">
                        <span className="button-default__inner">
                          <span className="button-default__background is-outline" />
                          <span className="button-default__text">Bekijk al ons werk</span>
                          <div className="button-default__icon is-black">{arrowRight}</div>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-col-12">
                <div className="sw-collection w-dyn-list">
                  <div role="list" className="sw-list w-dyn-items">
                    {workCases.map((c) => (
                      <div key={c.href} role="listitem" className="sw-item w-dyn-item">
                        <Link
                          href={c.href}
                          aria-label="Case link"
                          data-video-on-hover="not-active"
                          data-video-src={c.video}
                          className="sw-card w-inline-block"
                        >
                          <div className="sw-card_video">
                            <img alt={c.alt} loading="lazy" src={c.img} sizes="100vw" srcSet={c.imgSet} className="video-card_placeholder hide-mobile" />
                            <video muted loop playsInline src={c.video} className="video-card_video hide-mobile" />
                            <div className="sw-card_mobile-video">
                              <video muted loop playsInline src={c.video} autoPlay className="video" />
                            </div>
                          </div>
                          <div className="sw-card_wrap">
                            <div className="sw-card_content">
                              <h3 className="heading-xs">{c.title}</h3>
                              <div className="label is-sw">
                                <div className="paragraph-regular">{c.brand}</div>
                              </div>
                            </div>
                            <div className="sw-card_shape">
                              <div className="work-card_icon is-sw">
                                <div className="work-card_icon-wrap">{workArrow}</div>
                                <div className="work-card_icon-wrap">{workArrow}</div>
                              </div>
                              {cardShape}
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="sw-css w-embed" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const clientLogos = [
  "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/69241146b4df63c4ca966552_Bullit%20Digital.svg",
  "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68c194e6d1b186563459b107_morssinkhof.svg",
  "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d88f755388cc2c74ecff_salontopper.svg",
  "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d880bed5996600cbc586_seesing-flex.svg",
  "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d86cd6ba384af3c14e58_graafschap-college.svg",
  "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d85341bf0d7476e56a8c_fides.svg",
  "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d838fc5735f090bd9843_SRHK.svg",
  "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d81e72e08110e3fd1a17_knltb.svg",
  "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/684b062ebc242028ca4b3ea1_tho.svg",
  "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/684c05642bf8f5cea7384403_de-talententuin.svg",
  "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68c1952f22281ee50d3620b5_zclv.svg",
];

export function ClientsSection() {
  return (
    <section className="section_clients">
      <div className="section-padding-128px">
        <div className="padding-global">
          <div className="w-layout-blockcontainer container-col-12 w-container">
            <div className="padding-bottom padding-72px">
              <div className="max-width-640px">
                <h2 className="heading-m">These brands got hyped.</h2>
              </div>
            </div>
            <div className="mwg_effect008 w-dyn-list">
              <div role="list" className="container is-clients-marquee w-dyn-items">
                {clientLogos.map((src) => (
                  <div key={src} role="listitem" className="card w-dyn-item">
                    <div className="client-card">
                      <img src={src} loading="lazy" alt="" className="image" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-embed" />
          </div>
        </div>
      </div>
      <div className="padding-global">
        <div className="section-divider" />
      </div>
    </section>
  );
}

export function MouseTrailSection() {
  return (
    <section className="mwg_effect020">
      <div className="mwg_effect020-css w-embed" />
      <div className="medias">
        <img src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3404e57460370b97757c_7719b29e960423bac19acd325c901392_gh-logo-blue.svg" loading="lazy" alt="Get Hyped logo blauw" />
        <img src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415233f03ab6c1143fa_gh-logo-pink.svg" loading="lazy" alt="Get Hyped logo roze" />
        <img src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415e192971624995445_gh-logo-green.svg" loading="lazy" alt="Get Hyped logo groen" />
        <img src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415b3eecf81e4b1d9a7_gh-logo-red.svg" loading="lazy" alt="Get Hyped logo rood" />
      </div>
    </section>
  );
}
