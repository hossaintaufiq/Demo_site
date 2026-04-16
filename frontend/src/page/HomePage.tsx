import { HeroSection } from "@/components/hero/HeroSection";
import { ClientsMarquee } from "@/components/home/ClientsMarquee";
import { ExpertisesSection } from "@/components/home/ExpertisesSection";
import { HomeFooter } from "@/components/home/HomeFooter";
import { IntroSection } from "@/components/home/IntroSection";
import { SelectedWorkSection } from "@/components/home/SelectedWorkSection";
import { Navbar } from "@/components/Navbar";

export function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col bg-gh-page text-gh-black">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <IntroSection />   
        <ExpertisesSection />
        <SelectedWorkSection />
        <ClientsMarquee />
        <HomeFooter />
      </main>
    </div>
  );
}
