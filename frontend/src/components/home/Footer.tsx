"use client";

import Link from "next/link";

const sitemap = [
  { href: "/expertises", label: "Expertises" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

const socials = [
  { href: "https://www.linkedin.com/company/gethypednl/", label: "LinkedIn" },
  { href: "https://www.tiktok.com/@gethyped.nl", label: "TikTok" },
  { href: "https://www.instagram.com/gethyped.nl/", label: "Instagram" },
  { href: "https://www.youtube.com/@gethypednl", label: "YouTube" },
] as const;

const mailIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 22 17" fill="none" className="icon-12px">
    <path d="M2.78843 16.5955C2.21806 16.5955 1.72996 16.3926 1.32413 15.9868C0.918306 15.581 0.715047 15.0925 0.714355 14.5214V2.077C0.714355 1.50663 0.917615 1.01853 1.32413 0.612707C1.73065 0.20688 2.21875 0.00362105 2.78843 0.00292969H19.381C19.9514 0.00292969 20.4398 0.206189 20.8464 0.612707C21.2529 1.01923 21.4558 1.50732 21.4551 2.077V14.5214C21.4551 15.0918 21.2522 15.5803 20.8464 15.9868C20.4405 16.3933 19.9521 16.5962 19.381 16.5955H2.78843ZM11.0847 9.15478C11.1711 9.15478 11.2621 9.14165 11.3575 9.11537C11.4529 9.0891 11.5434 9.05039 11.6292 8.99923L18.9662 4.41034C19.1045 4.32392 19.2082 4.21607 19.2773 4.08678C19.3465 3.9575 19.381 3.81473 19.381 3.65849C19.381 3.31281 19.2341 3.05355 18.9403 2.88071C18.6465 2.70787 18.344 2.71651 18.0329 2.90663L11.0847 7.26219L4.13658 2.90663C3.82547 2.71651 3.523 2.71236 3.22917 2.89419C2.93534 3.07602 2.78843 3.33078 2.78843 3.65849C2.78843 3.83132 2.823 3.98273 2.89213 4.11271C2.96127 4.24268 3.06497 4.34189 3.20324 4.41034L10.5403 8.99923C10.6267 9.05108 10.7176 9.09014 10.813 9.11641C10.9084 9.14268 10.999 9.15547 11.0847 9.15478Z" fill="currentColor" />
  </svg>
);

const fireIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 24" fill="none" className="icon-18px">
    <path d="M17.4906 11.0361C17.1898 10.6437 16.8237 10.3037 16.4837 9.96371C15.6075 9.17906 14.6136 8.61673 13.7766 7.79284C11.8281 5.88352 11.3965 2.73184 12.6389 0.3125C11.3965 0.613283 10.3111 1.29331 9.38256 2.03873C5.99549 4.75886 4.66158 9.55831 6.25704 13.6777C6.30935 13.8085 6.36166 13.9393 6.36166 14.1093C6.36166 14.397 6.16549 14.6585 5.90394 14.7632C5.60316 14.8939 5.2893 14.8155 5.04083 14.6062C4.96661 14.5441 4.90453 14.4687 4.85774 14.3839C3.37998 12.5138 3.14459 9.83294 4.13848 7.68822C1.95453 9.46676 0.764478 12.4746 0.934486 15.3124C1.01295 15.9663 1.09142 16.6202 1.31373 17.274C1.49682 18.0587 1.84991 18.8433 2.24224 19.5365C3.65461 21.7989 6.10011 23.4205 8.72869 23.7474C11.5273 24.1005 14.522 23.5905 16.6667 21.655C19.0599 19.4841 19.8969 16.0055 18.6676 13.0238L18.4976 12.6838C18.223 12.0823 17.4906 11.0361 17.4906 11.0361Z" fill="currentColor" />
  </svg>
);

export function Footer() {
  return (
    <div className="footer">
      <section className="section_footer">
        <div className="section-padding-96px padding-top">
          <div className="padding-global">
            <div className="w-layout-blockcontainer container-col-12 w-container">
              <div className="cs-footer">
                <div className="cs-footer-cta">
                  <h2 className="heading-xxl">Let&apos;s Get Hyped!</h2>
                  <div className="button-group is-footer">
                    <a href="mailto:info@gethyped.nl" className="button-default is-outline w-inline-block">
                      <div className="button-default__inner">
                        <span className="button-default__background is-outline" />
                        <span className="button-default__text">Mail ons direct</span>
                        <div className="button-default__icon is-black">{mailIcon}</div>
                      </div>
                    </a>
                    <a href="#" className="button-default is-form w-inline-block">
                      <div className="button-default__inner">
                        <span className="button-default__background" />
                        <span className="button-default__text">Get Results</span>
                        <div className="button-default__icon">{fireIcon}</div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="cs-footer-bottom">
                  <div className="footer-mobile-logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 374 142" fill="none" className="footer-mobile-logo_svg">
                      <path d="M346.695 141.574H98.1443V39.7663L342.475 1.31406C358.99 -1.28201 373.926 11.5381 373.926 28.3324V114.227C373.926 129.331 361.735 141.574 346.695 141.574Z" fill="black" />
                      <path d="M33.9179 141.574H58.5951V123.57L44.3616 123.987V103.643L57.7334 102.785V84.9174L44.3616 86.1674V65.8155L58.5951 63.9966V45.9924L33.9179 49.8705V141.574Z" fill="black" />
                    </svg>
                  </div>
                  <div className="footer-bg">
                    <div className="padding-global">
                      <div className="footer-bg-wrap">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1860 386" fill="none" className="footer-bg-svg">
                          <path d="M1859.06 34.8264V349.463C1859.06 365.199 1859.06 380.122 1859.06 385.962L0.642595 385.955C0.642578 383.021 0.642769 379.682 0.642769 371.941V290.843C0.642769 283.856 5.67717 277.887 12.5466 276.741L1819.04 0.740997C1840 -2.74446 1859.06 13.489 1859.06 34.8184" fill="#EAE4D8" />
                        </svg>
                        <div className="footer-logo">
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 374 142" fill="none" className="footer-logo_svg">
                            <path d="M346.695 141.574H98.1443V39.7663L342.475 1.31406C358.99 -1.28201 373.926 11.5381 373.926 28.3324V114.227C373.926 129.331 361.735 141.574 346.695 141.574Z" fill="black" />
                            <path d="M126.851 41.6173V79.9895L119.894 80.6225V42.651L105.669 44.7503V135.404L119.894 135.268V97.2966L126.851 96.8319V135.204L142.026 135.06V39.3738L126.851 41.6173Z" fill="white" />
                            <path d="M170.676 35.1352L166.631 71.5282L166.44 74.6451L166.057 74.6851L165.866 71.6083L161.884 36.4332L145.473 38.861L158.039 100.646V134.908L174.658 134.755V99.6843L188.309 32.5231L170.676 35.1352Z" fill="white" />
                            <path d="M292.411 38.2441V17.123L246.695 23.8856V134.074L292.411 133.642V112.528L268.755 113.346V87.4331L291.039 85.9588V65.022L268.755 67.0572V41.1526L292.411 38.2441Z" fill="white" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="footer-sticker">
                      <div className="sticker" style={{ display: "grid", placeItems: "center", fontWeight: 700, fontSize: "2.2em" }}>
                        GH
                      </div>
                    </div>
                  </div>
                </div>

                <div className="cs-footer-info-wrapper">
                  <div className="padding-global">
                    <div className="w-layout-blockcontainer container-col-12 w-container">
                      <div className="footer-info">
                        <div className="footer_links">
                          <div className="footer_sitemap">
                            {sitemap.map((item) => (
                              <Link key={item.href} href={item.href} className="button-color-swoosh is-footer w-inline-block">
                                <span className="button-color-swoosh_bg">
                                  <span style={{ "--index": 0 } as React.CSSProperties} className="button-color-swoosh_bg-inner is-first" />
                                  <span style={{ "--index": 1 } as React.CSSProperties} className="button-color-swoosh_bg-inner is-second" />
                                </span>
                                <span data-text={item.label} className="button-color-swoosh_inner is-footer">
                                  <span className="button-color-swoosh_text">{item.label}</span>
                                </span>
                              </Link>
                            ))}
                          </div>

                          <div className="footer-col is-socials">
                            <div className="footer-label">
                              <div className="paragraph-regular text-weight-bold">Follow us</div>
                            </div>
                            <div className="social-icon-group">
                              {socials.map((item) => (
                                <a key={item.href} aria-label={`${item.label} link`} href={item.href} target="_blank" className="social-icon w-inline-block">
                                  <span className="paragraph-regular text-weight-bold">{item.label.slice(0, 1)}</span>
                                </a>
                              ))}
                            </div>
                          </div>

                          <div className="hide-mobile">
                            <div className="footer-credits">
                              <div className="footer-legal is-copyright">
                                <div>
                                  © <span id="current-year">2025</span> Get Hyped
                                </div>
                              </div>
                              <a href="https://dylanbrouwer.design/" target="_blank" className="footer-legal w-inline-block">
                                <div>© Design by Dylan</div>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="footer_contact">
                          <div className="footer-col">
                            <div className="footer-label">
                              <div className="paragraph-regular text-weight-bold">Contact</div>
                            </div>
                            <a href="mailto:info@gethyped.nl" className="footer-link w-inline-block">
                              <div>info@gethyped.nl</div>
                            </a>
                            <a href="tel:+31615337496" className="footer-link w-inline-block">
                              <div>+31 6 1533 7496</div>
                            </a>
                          </div>
                          <div className="footer-col">
                            <div className="footer-label">
                              <div className="paragraph-regular text-weight-bold">Adres</div>
                            </div>
                            <a
                              href="https://www.google.nl/maps/dir/52.2173687,6.866555/Beltrumsestraat+6,+7141+AL+Groenlo/@52.0427183,6.6137857,17z"
                              target="_blank"
                              className="footer-link w-inline-block"
                            >
                              <div>
                                Beltrumsestraat 6, <br />
                                7141 AL Groenlo
                              </div>
                            </a>
                          </div>
                          <a href="#" className="footer-legal w-inline-block">
                            <div>Privacyvoorwaarden</div>
                          </a>
                          <div className="show-mobile">
                            <div className="footer-credits">
                              <div className="footer-legal is-copyright">
                                <div>
                                  © <span id="current-year">2025</span> Get Hyped
                                </div>
                              </div>
                              <a href="https://dylanbrouwer.design/" target="_blank" className="footer-legal w-inline-block">
                                <div>© Design by Dylan</div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cs-footer-info_bg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
