import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      { protocol: "https", hostname: "cdn.prod.website-files.com", pathname: "/**" },
      { protocol: "https", hostname: "gethyped.b-cdn.net", pathname: "/**" },
    ],
  },
  experimental: {
    optimizePackageImports: ["gsap", "lenis"],
  },
};

export default nextConfig;
