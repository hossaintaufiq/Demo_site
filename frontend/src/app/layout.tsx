import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Get Hyped - Social-first content agency",
    template: "%s | Get Hyped",
  },
  description:
    "Get Hyped brengt als short form content agency jouw merk in beweging met krachtige video's en foto's. Niks zonder strategie: alleen resultaatgerichte content.",
  icons: [
    { rel: "icon", url: "/assets/icons/svg38.svg", type: "image/svg+xml" },
    // { rel: "apple-touch-icon", url: "/assets/icons/svg38.svg" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={inter.variable}>
      <body
        className={`min-h-dvh bg-gh-page font-sans antialiased text-gh-black ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
