"use client";

type NavPageProps = {
  title: string;
};

export default function NavPage({ title }: NavPageProps) {
  const goBack = () => {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }
    window.location.href = "/";
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 bg-[#faf4ec] px-6 text-[#161616]">
      <button
        type="button"
        onClick={goBack}
        className="rounded-md border border-[#161616] px-4 py-2 text-sm font-semibold"
      >
        Back
      </button>
      <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">{title}</h1>
    </main>
  );
}
