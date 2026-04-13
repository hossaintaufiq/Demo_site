import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frontend",
  description: "Clean scaffold — rebuild from here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
