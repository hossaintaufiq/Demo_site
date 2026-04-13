import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "@/styles/embed-from-site.css";
import { WebflowHtmlClass } from "@/components/WebflowHtmlClass";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Get Hyped - Social-first content agency",
  description:
    "Get Hyped brengt als short form content agency jouw merk in beweging met krachtige video's en foto's. Niks zonder strategie: alleen resultaatgerichte content.",
  openGraph: {
    title: "Get Hyped - Social-first content agency",
    description:
      "Get Hyped brengt als short form content agency jouw merk in beweging met krachtige video's en foto's. Niks zonder strategie: alleen resultaatgerichte content.",
    images: [
      "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684d5571fa7dd7069d8ed476_gh-opengraph.png",
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Hyped - Social-first content agency",
    description:
      "Get Hyped brengt als short form content agency jouw merk in beweging met krachtige video's en foto's. Niks zonder strategie: alleen resultaatgerichte content.",
  },
  verification: {
    google: "AucDJq68C41SFXwtQ6NMGeqeUutnOUdIfNnnhLrjxSI",
  },
};

const WEBFLOW_SHARED_CSS =
  "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/css/gethyped-preview.webflow.shared.93fb7f9ca.min.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-wf-domain="www.gethyped.nl"
      data-wf-page="686baabfd0c79e5623544b6d"
      data-wf-site="6848603da8e6ac95794b7498"
      className={`w-mod-js ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href={WEBFLOW_SHARED_CSS}
          integrity="sha384-k/t/nKIQUVGe2P/KLRVgslmBg3huwJUGlhXFTXX5Yn9UBtKeob8kH9AXjXn4kTuN"
          crossOrigin="anonymous"
        />
        <link
          href="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6848621fe738b824f1282f9c_GH-favicon.png"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link
          href="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684862436e2f808b7aeb86d2_GH-webclip.png"
          rel="apple-touch-icon"
        />
      </head>
      <body color-mode="" className={inter.className}>
        <WebflowHtmlClass />
        <Script
          async
          type="module"
          src="https://cdn.jsdelivr.net/npm/@finsweet/attributes@2/attributes.js"
          strategy="afterInteractive"
        />
        <Script
          defer
          src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-accordion@1/accordion.js"
          strategy="afterInteractive"
        />
        <Script
          defer
          src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-mirrorclick@1/mirrorclick.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.google.com/recaptcha/enterprise.js?render=6LdWxXMrAAAAAKkSBXqU5r7bLwHLQ0EtDfqAjRpu"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
