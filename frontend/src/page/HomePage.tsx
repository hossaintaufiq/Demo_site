import { HeroSection } from "@/components/hero/HeroSection";
import { IntroSection } from "@/components/home/IntroSection";
import { Navbar } from "@/components/Navbar";
import dynamic from "next/dynamic";

const ExpertisesSection = dynamic(
  () =>
    import("@/components/home/ExpertisesSection").then(
      (m) => m.ExpertisesSection
    ),
  {
    loading: () => <div className="h-[100dvh]" aria-hidden />,
  }
);

const SelectedWorkSection = dynamic(
  () =>
    import("@/components/home/SelectedWorkSection").then(
      (m) => m.SelectedWorkSection
    ),
  {
    loading: () => <div className="min-h-[60vh]" aria-hidden />,
  }
);

const ClientsMarquee = dynamic(
  () =>
    import("@/components/home/ClientsMarquee").then((m) => m.ClientsMarquee),
  {
    loading: () => <div className="min-h-[8rem]" aria-hidden />,
  }
);

const HomeFooter = dynamic(
  () => import("@/components/home/HomeFooter").then((m) => m.HomeFooter),
  {
    loading: () => <div className="min-h-[100dvh]" aria-hidden />,
  }
);

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
