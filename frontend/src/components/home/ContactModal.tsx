"use client";

import { useCallback, useEffect, useId, useRef } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function ContactModal({ open, onClose }: Props) {
  const formStart = useRef<number | null>(null);
  const clipId = useId().replace(/:/g, "");

  useEffect(() => {
    if (open) formStart.current = Date.now();
  }, [open]);

  const handleOverlay = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose],
  );

  return (
    <div
      className={`modal is-contact ${open ? "" : "hide"}`}
      data-splittext="false"
      role="dialog"
      aria-modal={open}
      aria-hidden={!open}
      onClick={handleOverlay}
      onKeyDown={(e) => e.key === "Escape" && onClose()}
    >
      <div className="modal-contact" onClick={(e) => e.stopPropagation()}>
        <h2 className="heading-m">Leave us a message</h2>
        <div data-form-validate="" className="form-group w-form">
          <form
            id="wf-form-Default-Form"
            name="wf-form-Default-Form"
            data-name="Default Form"
            method="get"
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              const start = formStart.current ?? 0;
              if (Date.now() - start < 5000) {
                alert("Form submitted too quickly. Please try again.");
                return;
              }
              alert("Demo: form would submit to Webflow.");
            }}
          >
            <div className="form-row">
              <div data-validate="" className="form-field-group">
                <label htmlFor="Naam" className="form-label">
                  Voor- en achternaam *
                </label>
                <div className="form-field">
                  <input
                    className="form-input-field w-input"
                    maxLength={256}
                    name="Naam"
                    data-name="Naam"
                    min={1}
                    placeholder="Wie ben je?"
                    type="text"
                    id="Naam"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-row">
              <div data-validate="" className="form-field-group">
                <label htmlFor="E-mail" className="form-label">
                  E-mail *
                </label>
                <div className="form-field">
                  <input
                    className="form-input-field w-input"
                    maxLength={256}
                    name="E-mail"
                    data-name="E-mail"
                    placeholder="Hoe kunnen we je bereiken?"
                    type="email"
                    id="E-mail"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-field-group">
                <div className="form-label_wrap">
                  <label htmlFor="Telefoonnummer" className="form-label">
                    Telefoonnummer
                  </label>
                  <div className="form-label is-caption">Optioneel</div>
                </div>
                <div className="form-field">
                  <input
                    className="form-input-field w-input"
                    maxLength={256}
                    name="Telefoonnummer"
                    data-name="Telefoonnummer"
                    min={10}
                    placeholder="Je telefoonnummer (als je liever belt dan mailt)"
                    type="tel"
                    id="Telefoonnummer"
                  />
                </div>
              </div>
            </div>
            <div data-validate="" className="form-field-group is-text-area">
              <label htmlFor="Bericht" className="form-label">
                Bericht *
              </label>
              <div className="form-field is-text-area">
                <textarea
                  className="form-input-field is-text-area w-input"
                  maxLength={5000}
                  name="Bericht"
                  data-name="Bericht"
                  minLength={3}
                  placeholder="Vertel ons wat je zoekt (of gewoon iets leuks)."
                  id="Bericht"
                  required
                />
              </div>
            </div>
            <div className="form-field-group">
              <div className="form-divider" />
            </div>
            <div className="form-row">
              <div data-validate="" className="form-field-group">
                <div data-radiocheck-group="" className="radiocheck-group">
                  <label className="w-checkbox radiocheck-field">
                    <input
                      type="checkbox"
                      name="Privacyvoorwaarden"
                      id="Privacyvoorwaarden"
                      data-name="Privacyvoorwaarden"
                      required
                      className="w-checkbox-input checkbox-input"
                    />
                    <span className="radiocheck-label is--small w-form-label">
                      Ik accepteer de <span className="text-style-link-2">Privacyvoorwaarden</span>{" "}
                      <span className="form-required">*</span>
                    </span>
                    <div className="radiocheck-custom">
                      <div className="radiocheck-field-icon is--success">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="radiocheck-check-svg">
                          <path d="M7 11.5L10.5 15L17 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="form-row is-submit">
              <div className="form-field-group is-submit">
                <div className="form-field is-submit">
                  <button type="submit" className="form-submit w-button" hidden aria-hidden />
                  <div data-submit="" tabIndex={0} className="form-submit-btn">
                    <a href="#" className="button-default is-form w-inline-block" onClick={(e) => e.preventDefault()}>
                      <div className="button-default__inner">
                        <span className="button-default__background" />
                        <span className="button-default__text">Verstuur bericht</span>
                        <div className="button-default__icon">
                          <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 31 31" fill="none" className="icon-18px">
                            <g clipPath={`url(#${clipId})`}>
                              <path d="M27.6895 2.93927L13.9395 16.6893" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" />
                              <path d="M27.6895 2.93927L18.9395 27.9393L13.9395 16.6893L2.68945 11.6893L27.6895 2.93927Z" stroke="currentColor" strokeWidth="2.5" strokeMiterlimit="10" />
                            </g>
                            <defs>
                              <clipPath id={clipId}>
                                <rect width="30" height="30" fill="currentColor" transform="translate(0.189453 0.43927)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="paragraph-regular text-weight-bold">
                  Of bel{" "}
                  <a href="tel:+31615337496" className="text-style-link">
                    +31 6 1533 7496
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="modal-close">
          <a href="#" className="button-default is-outline w-inline-block" onClick={(e) => { e.preventDefault(); onClose(); }}>
            <div className="button-default__inner">
              <span className="button-default__background is-outline" />
              <span className="button-default__text">Sluit</span>
            </div>
          </a>
        </div>
      </div>
      <div className="modal_close" onClick={onClose} aria-hidden />
    </div>
  );
}
