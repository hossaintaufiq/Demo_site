import { ButtonDefault } from "@/components/ui/ButtonDefault";
import { Navbar } from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Pagina niet gevonden",
  description:
    "Deze pagina bestaat niet (meer). Ga terug naar de homepage van Get Hyped.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col bg-gh-page text-gh-black">
      <Navbar />
      <main className="flex flex-1 items-center justify-center px-5 py-24 min-[768px]:px-8 min-[992px]:px-10">
        <div className="mx-auto flex w-full max-w-[60rem] flex-col items-center text-center">
          <span className="m-0 inline-flex rounded-md bg-[#e8e3d7] px-4 py-2 text-base min-[768px]:text-lg font-medium leading-normal tracking-[-0.01em]">
            404
          </span>

          <h1 className="mt-6 text-5xl min-[480px]:text-6xl min-[768px]:text-7xl min-[992px]:text-8xl min-[1280px]:text-9xl font-semibold leading-[0.95] tracking-[-0.05em] text-balance">
            Oeps. Deze pagina is niet hyped.
          </h1>

          <p className="mt-6 max-w-[44ch] text-xl min-[768px]:text-2xl font-semibold leading-[1.3] tracking-[-0.02em] text-gh-black/70 text-balance">
            De pagina die je zoekt bestaat niet (meer). Geen zorgen, we sturen
            je in de juiste richting.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <ButtonDefault href="/" variant="solid">
              Terug naar homepage
            </ButtonDefault>
            <ButtonDefault href="/contact" variant="outline">
              Neem contact op
            </ButtonDefault>
          </div>
        </div>
      </main>
    </div>
  );
}
