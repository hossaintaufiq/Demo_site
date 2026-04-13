"use client";

import { useCallback, useEffect, useState } from "react";
import { ContactModal } from "./ContactModal";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import {
  ClientsSection,
  ExpertisesSection,
  HeroSection,
  IntroSection,
  MouseTrailSection,
  Preloader,
  SelectedWorkSection,
} from "./HomeSections";
import { SiteEffects } from "./SiteEffects";

export function HomeView() {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = useCallback(() => setContactOpen(true), []);
  const closeContact = useCallback(() => setContactOpen(false), []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a[href="#"]');
      if (!a || !a.classList.contains("button-default") || !a.classList.contains("is-form")) return;
      e.preventDefault();
      openContact();
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [openContact]);

  return (
    <div className="page-wrapper">
      <Preloader />
      <ContactModal open={contactOpen} onClose={closeContact} />
      <Navbar onOpenContact={openContact} />
      <div className="main-wrapper">
        <HeroSection />
        <IntroSection />
        <ExpertisesSection />
        <SelectedWorkSection />
        <ClientsSection />
        <Footer />
        <MouseTrailSection />
      </div>
      <SiteEffects />
    </div>
  );
}
