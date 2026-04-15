"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on("scroll", ScrollTrigger.update);

    function onTicker(time: number) {
      lenis.raf(time * 1000);
    }

    gsap.ticker.add(onTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(onTicker);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}