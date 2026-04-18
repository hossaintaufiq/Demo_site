# Get Hyped — Marketing Site (Demo Project)

A pixel-precise, fully responsive recreation of the **Get Hyped** social-first content agency homepage, built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **GSAP** and **Lenis** smooth scroll.

The project focuses on three things:

1. **Design fidelity** — every section matches a reference design across mobile, tablet, laptop, and 4K.
2. **Smoothness** — Lenis-driven inertial scroll, GSAP timelines synced to a single RAF loop, GPU-friendly transforms.
3. **Performance** — code-split below-the-fold sections, lazy media, content-visibility paint skipping, fluid typography, and tuned image/video preload behavior.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Pages](#pages)
- [Components Overview](#components-overview)
- [Responsive Breakpoint System](#responsive-breakpoint-system)
- [Fluid Typography](#fluid-typography)
- [Animations & Smooth Scroll](#animations--smooth-scroll)
- [Performance Optimizations](#performance-optimizations)
- [Design Tokens & Theming](#design-tokens--theming)
- [Media Assets](#media-assets)
- [Accessibility & Reduced Motion](#accessibility--reduced-motion)
- [Browser Support](#browser-support)
- [Available Scripts](#available-scripts)

---

## Tech Stack

| Layer            | Tool                              | Version                 |
| ---------------- | --------------------------------- | ----------------------- |
| Framework        | Next.js (App Router, Turbopack)   | `16.2.3`                |
| UI Library       | React + React DOM                 | `19.2.4`                |
| Language         | TypeScript                        | `^5`                    |
| Styling          | Tailwind CSS v4 (`@tailwindcss/postcss`) | `^4`             |
| Animation        | GSAP + `@gsap/react` + ScrollTrigger | `^3.15`              |
| Smooth Scroll    | Lenis                             | `^1.3.21`               |
| Linting          | ESLint (next config)              | `^9`                    |
| Fonts            | `next/font/google` — Inter        | bundled                 |

No CSS-in-JS, no animation library beyond GSAP, and no UI kit — all components are hand-built.

---

## Folder Structure

```
Demo_Project/
└── frontend/
    ├── public/
    │   ├── assets/
    │   │   └── icons/                   # SVG icons (logo, favicon, sticker)
    │   ├── hero/                        # Hero card videos + AVIF posters
    │   │   ├── salontopper-loop.mp4
    │   │   ├── petrolhead-loop.mp4
    │   │   ├── video-thumb-01.avif
    │   │   └── video-thumb-02.avif
    │   └── home/                        # Section videos, client logos, work posters
    │       ├── expertise-*.mp4
    │       ├── work-*.mp4 / .avif
    │       ├── client-*.svg
    │       ├── new-reach-loop.mp4
    │       └── anniek-bril.webp
    │
    ├── src/
    │   ├── app/
    │   │   ├── layout.tsx               # Root layout — fonts, LenisProvider, metadata
    │   │   ├── page.tsx                 # / route → renders HomePage
    │   │   ├── not-found.tsx            # Branded 404 page with "back to homepage" CTA
    │   │   └── globals.css              # Fluid root font, Tailwind tokens, perf utilities
    │   │
    │   ├── components/
    │   │   ├── LenisProvider.tsx        # Mounts Lenis + syncs with GSAP ticker
    │   │   ├── Navbar.tsx               # Fixed header w/ swoosh links + mobile menu
    │   │   ├── Logo.tsx                 # Inline Get Hyped wordmark SVG
    │   │   ├── SwooshNavLink.tsx        # Hover-animated desktop nav link
    │   │   ├── ui/
    │   │   │   └── ButtonDefault.tsx    # Reusable solid/outline/icon Link button
    │   │   ├── hero/
    │   │   │   ├── HeroSection.tsx      # Hero h1 + paragraph + cards
    │   │   │   └── HeroCardsMWG.tsx     # Overlapping fan-out cards w/ GSAP pointer FX
    │   │   └── home/
    │   │       ├── IntroSection.tsx     # Intro copy + portrait/video card + CTA
    │   │       ├── ExpertisesSection.tsx# Pinned scrub stack of expertise cards
    │   │       ├── SelectedWorkSection.tsx # 3 case-study cards w/ hover video preview
    │   │       ├── ClientsMarquee.tsx   # Infinite client-logo CSS marquee
    │   │       └── HomeFooter.tsx       # Title/CTA + wave SVG + logo + nav + socials + sticker
    │   │
    │   └── page/
    │       └── HomePage.tsx             # Composes all sections (with dynamic imports)
    │
    ├── eslint.config.mjs
    ├── next.config.ts
    ├── postcss.config.mjs
    ├── tsconfig.json
    └── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18.18 (or ≥ 20 recommended)
- **npm** (the project includes a `package-lock.json`)

### Install

```bash
cd frontend
npm install
```

### Run the dev server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm run start
```

---

## Pages

| Route       | File                            | Description                                      |
| ----------- | ------------------------------- | ------------------------------------------------ |
| `/`         | `src/app/page.tsx` → `HomePage` | The full marketing homepage                      |
| **404**     | `src/app/not-found.tsx`         | Branded "page not found" with two action buttons |

The 404 page automatically replaces the default Next.js 404 UI for any non-existent URL or any `notFound()` call inside server components.

---

## Components Overview

### `LenisProvider`

Client-side wrapper that:
- Initializes a `Lenis` instance with high-end inertial scrolling (`duration: 1.15`, `lerp: 0.1`).
- Disables smooth scroll automatically when `prefers-reduced-motion: reduce` is set.
- Pipes scroll updates into `ScrollTrigger.update()`.
- Drives `lenis.raf()` from a single `gsap.ticker` callback (one shared RAF loop for everything).
- Cleans up on unmount.

Mounted once in `app/layout.tsx`, wraps all routes.

### `Navbar`

Fixed top header. Desktop shows brand logo + swoosh nav links + "Get Results" CTA. Mobile shows hamburger that opens an overlay menu. Hides/shows on scroll direction.

### `HeroSection` + `HeroCardsMWG`

- `HeroSection` renders the H1 (Get Hyped. Get Noticed. Get Results.) and intro paragraph.
- `HeroCardsMWG` renders four overlapping result cards (stat / video / stat / video). On desktop a pointer-tracking GSAP `elastic.out` tween fans them out under the cursor. On tablet/mobile they're a static stacked row.
- Videos use `<video preload="metadata" poster="...avif" disableRemotePlayback disablePictureInPicture>` for fast hero paint without controls overhead.

### `IntroSection`

Two-column intro: portrait (`next/image` on tablet+, `<video>` loop on mobile) + body copy + outline button + scroll-down icon button.

### `ExpertisesSection`

The most complex section. A **pinned ScrollTrigger** holds `100dvh` while the user scrolls; four cards (Social, Content, Activation, Data) **scrub-swap** on top of each other with `yPercent`, `scale` and `autoAlpha` transitions.

Card layout uses a 12-column CSS grid with progressive width caps + corner radii so it scales cleanly from `992px` to 4K without ever clipping content or losing rounded corners. Title uses a `text-7xl → text-8xl → text-9xl` ladder so it never overflows its column on mid-laptops.

### `SelectedWorkSection`

Three case-study cards with rotated/offset positioning at desktop. Each card swaps a poster image for an autoplaying video on hover (`videoRef.current.play()` / `pause()` + reset `currentTime`). Videos use `preload="none"` to avoid network cost until interaction.

### `ClientsMarquee`

A CSS keyframe marquee (`@keyframes gh-marquee`) that translates a doubled logo strip from 0 → -50%. Logos are `next/image` with `unoptimized` (they're SVGs), `loading="lazy"`, `decoding="async"`. The container has `will-change-transform [transform:translateZ(0)]` so it gets its own compositor layer.

### `HomeFooter`

Three layouts in one component:
- **Mobile (≤767px)** — stacked card with logo overflowing the top, content underneath.
- **Tablet (768–991px)** — title + CTAs in upper area, custom wave SVG holding the logo + sticker + nav + contact in the lower area.
- **Desktop (≥992px)** — full-width wave SVG with logo embedded, nav/socials/contact arranged in two rows.

Includes:
- GSAP scroll-based reveal for footer blocks.
- ScrollTrigger velocity-based rotation/translation for the GH sticker (responds to scroll speed).
- A mousemove logo trail (4 colors cycling) that's auto-disabled on coarse pointers and reduced-motion.

### `ButtonDefault`

Single shared component with three variants:
- `solid` — filled CTA (used for primary actions like "Terug naar homepage").
- `outline` — bordered CTA (secondary).
- `icon` — circular pink download/scroll-down icon button.

Hover/focus states use a `[transition:transform_450ms_var(--ease-gh-bounce)]` skew/rotate combo from a custom GSAP-style easing curve defined in `globals.css`.

---

## Responsive Breakpoint System

The project uses **Tailwind v4 arbitrary breakpoints** (`min-[Xpx]:` and `max-[Xpx]:`) rather than the default `sm/md/lg/xl/2xl` so each component can target the exact pixel boundaries of its design.

| Range            | Class prefix examples                                  | Notes                              |
| ---------------- | ------------------------------------------------------ | ---------------------------------- |
| ≤ 319px          | (unprefixed; no design changes needed below 320)       | Smallest mobile                    |
| 320–479px        | `max-[479px]:…`                                        | Phone                              |
| 480–767px        | `min-[480px]:`, `max-[767px]:`                         | Large phone                        |
| 768–991px        | `min-[768px]:max-[991px]:…`                            | Tablet (often dedicated layout)    |
| 992–1279px       | `min-[992px]:…`                                        | Small laptop                       |
| 1280–1439px      | `min-[1280px]:…`                                       | Laptop                             |
| 1440–1535px      | `min-[1440px]:…`                                       | Large laptop                       |
| 1536–1919px      | `min-[1536px]:…`                                       | Desktop / QHD                      |
| 1920–2559px      | `min-[1920px]:…`                                       | Full HD                            |
| ≥ 2560px         | `min-[2560px]:…`                                       | 4K / ultrawide                     |

The footer and expertises sections in particular have **dedicated tablet layouts** (768–991px) that diverge from desktop, since the design called for very different proportions in that range.

---

## Fluid Typography

Defined at the top of `src/app/globals.css`:

```css
html {
  --size-unit: 16;
  --size-container-ideal: 1920;
  --size-container-min: 992px;
  --size-container-max: 1920px;
  --size-container: clamp(var(--size-container-min), 100vw, var(--size-container-max));
  --size-font: calc(var(--size-container) / (var(--size-container-ideal) / var(--size-unit)));
  font-size: var(--size-font);
}
```

This makes the **root font size scale linearly with viewport width** (Osmo-style), with progressive media-query overrides for 4K (1921+, 2561+) and the smaller mobile/tablet ranges. Because virtually every dimension in the UI uses `rem` / `em`, the *entire* design scales proportionally — typography, padding, gaps, icons, border radii, even the GSAP transform percentages.

The result: a 1024px design and a 4K design look like the same composition at different scales, not a scaled-up cropped version.

---

## Animations & Smooth Scroll

### Single RAF loop

`LenisProvider` registers a single ticker callback on GSAP:

```ts
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
```

Everything — Lenis scroll, GSAP tweens, ScrollTrigger updates, and the footer mouse trail — runs off this one RAF. No competing animation loops.

### ScrollTrigger pinning

`ExpertisesSection` is the only pinned section. The timeline:

```ts
gsap.timeline({
  defaults: { force3D: true, overwrite: "auto" },
  scrollTrigger: {
    trigger: pinShell,
    start: "top top",
    end: "+={N-1 * 100}%",
    scrub: 1.1,
    pin: pinShell,
    anticipatePin: 1,
    fastScrollEnd: true,
    invalidateOnRefresh: true,
  },
});
```

Slides have `force3D: true` and `willChange: "transform, opacity"` so they get GPU layers.

### Custom easing tokens

`globals.css` defines reusable easings as Tailwind v4 theme variables (`@theme`):

- `--ease-gh-elastic` — long elastic curve for hero card spring-back
- `--ease-gh-smooth` — `cubic-bezier(0.32, 0.72, 0, 1)`
- `--ease-gh-color`, `--ease-gh-bounce`, `--ease-gh-radius` — used in nav, button hover, and pill morphing

---

## Performance Optimizations

| Optimization | Where | Effect |
| ------------ | ----- | ------ |
| **Code-splitting** | `src/page/HomePage.tsx` uses `next/dynamic` for `ExpertisesSection`, `SelectedWorkSection`, `ClientsMarquee`, `HomeFooter` | Smaller initial JS; sections fetched on demand |
| **Lenis smooth scroll** | `LenisProvider` mounted in root layout | Single inertial scroll model across the whole app |
| **Lazy images** | `loading="lazy"` + `decoding="async"` on `<img>` and `<Image>` everywhere except above-the-fold | Defers fetch + decode |
| **Lazy videos** | `preload="none"` on hover-triggered videos (`SelectedWorkSection`); `preload="metadata"` elsewhere | Avoids eager video network cost |
| **AVIF poster frames** | Hero videos use `.avif` posters | Faster first paint than `.jpg/.webp` |
| **`content-visibility: auto`** | `.cv-auto` utility applied to `SelectedWorkSection` and `ClientsMarquee` | Skips layout/paint for off-screen content |
| **GPU compositing** | `will-change-transform` + `translateZ(0)` on marquee + slides | Promotes to compositor layer |
| **`disableRemotePlayback` / `disablePictureInPicture`** | Hero videos | Removes browser-controls overhead |
| **`unoptimized` Next/Image for SVG logos** | Marquee | Skips Next image pipeline for already-optimal SVGs |
| **`adjustFontFallback`** | `Inter` font in layout | Eliminates CLS from font swap |
| **AVIF/WebP via Next image config** | `next.config.ts` | Auto-served best format |
| **`optimizePackageImports`** | `next.config.ts` lists `gsap`, `lenis` | Tree-shakes unused submodules |
| **`compress: true`** | `next.config.ts` | Gzip on static responses |
| **`scrollbar-width: none` + custom WebKit rule** | `globals.css` | Removes native scrollbar so Lenis owns the scroll feel |

### `next.config.ts`

```ts
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
```

---

## Design Tokens & Theming

Color tokens are defined in `globals.css` via Tailwind v4's `@theme` at-rule. Use them as standard utility classes (`bg-gh-pink`, `text-gh-black`, `bg-gh-hero-blue`, etc.):

| Token                     | Value      | Used for                          |
| ------------------------- | ---------- | --------------------------------- |
| `--color-gh-black`        | `#161616`  | Body text, primary surface        |
| `--color-gh-pink`         | `#fcb8fa`  | Icon button bg, accents           |
| `--color-gh-red`          | `#fa5424`  | Primary CTA bg, focus ring        |
| `--color-gh-off-white`    | `#fffef7`  | Social icon backgrounds           |
| `--color-gh-white`        | `#ffffff`  | Card surface                      |
| `--color-gh-cream-text`   | `#f0ece5`  | Subtle text on dark sections      |
| `--color-gh-page`         | `#faf4ec`  | Page background                   |
| `--color-gh-hero-blue`    | `#0d8dff`  | Hero card 1, expertise "data"     |
| `--color-gh-hero-green`   | `#33c791`  | Hero card 3, expertise "activation" |

---

## Media Assets

All media lives in `public/` and is **self-hosted** — no third-party players.

- **Hero videos**: `public/hero/*.mp4` + `.avif` poster thumbs
- **Expertise videos**: `public/home/expertise-*.mp4` (4 files)
- **Work poster + video pairs**: `public/home/work-*.{avif,mp4}`
- **Intro mobile video / desktop image**: `public/home/new-reach-loop.mp4` / `anniek-bril.webp`
- **Client logos**: `public/home/client-{1..11}.svg`
- **Brand**: `public/assets/icons/get-hyped-wordmark.svg`, `svg38.svg` (sticker/favicon)

When adding new media, prefer:
- **AVIF** for poster images (best compression).
- **WebP** for portraits/photographs.
- **MP4 (H.264, no audio)** for autoplay loops (`muted` is required for autoplay on iOS).
- **SVG** for logos and icons.

---

## Accessibility & Reduced Motion

- **`prefers-reduced-motion: reduce`** disables Lenis smooth scrolling, snaps GSAP transitions to `0.01s`, and turns off the footer mouse trail.
- All interactive elements use `:focus-visible` with a 2px `gh-red` outline.
- Hero CTA cards expose `aria-label`; decorative SVGs use `aria-hidden`.
- Images use empty `alt=""` when purely decorative (work posters, intro portrait).
- Touch tap highlight is suppressed on iOS (`-webkit-tap-highlight-color: transparent`).

---

## Browser Support

Targets modern evergreen browsers (Chromium 110+, Firefox 110+, Safari 16+). Uses:

- CSS `clamp()`, `aspect-ratio`, `100dvh`, `content-visibility`
- `<dialog>`-free menu (no polyfill needed)
- AVIF posters (with WebP fallback through Next/Image where used)
- ESM-only Lenis import

No IE11 / legacy support.

---

## Available Scripts

From inside `frontend/`:

| Command            | What it does                                  |
| ------------------ | --------------------------------------------- |
| `npm run dev`      | Start the Next.js dev server (Turbopack)      |
| `npm run build`    | Create an optimized production build          |
| `npm run start`    | Run the built app                              |
| `npm run lint`     | Run ESLint with the Next config                |

---

## Notes for Future Work

- The **Hero section** mounts `HeroCardsMWG` twice (one for desktop, one for mobile/tablet) wrapped in CSS visibility classes. Consolidating to a single instance would save a small amount of duplicate DOM/work — not done here to avoid risking the hover animation reset between breakpoints.
- The **Expertises** section preloads `metadata` for all four videos. For an even leaner initial state, an `IntersectionObserver` could mount each video's `src` only when its slide becomes the active one in the scrub timeline.
- **Image CDN**: `next.config.ts` is already configured for `cdn.prod.website-files.com` and `gethyped.b-cdn.net` — when you swap local media for CDN-hosted media, no code changes needed.

---

## License

This is a private demo project — not licensed for redistribution. All Get Hyped brand assets, copy, and design belong to their original owners.
