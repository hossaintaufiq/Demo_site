export default function Page() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-2xl font-semibold tracking-tight">Fresh start</h1>
      <p className="max-w-md text-center text-neutral-600">
        Static assets are under <code className="rounded bg-neutral-100 px-1 py-0.5 text-sm">public/assets/</code>
        . Remote video and logo URLs are listed in{" "}
        <code className="rounded bg-neutral-100 px-1 py-0.5 text-sm">assets/media-urls.json</code>.
      </p>
    </main>
  );
}
