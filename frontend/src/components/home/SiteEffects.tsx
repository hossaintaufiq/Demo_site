"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import Lenis from "lenis";
import { loadScript } from "@/lib/loadScript";
import { JQUERY, WEBFLOW_CHUNKS } from "@/lib/webflowScripts";

declare global {
  interface Window {
    Webflow?: {
      env: (k: string) => unknown;
      require?: (name: string) => { emit?: (e: string) => void };
      push?: (fn: (d: unknown) => void) => void;
    };
  }
}

function initLenis() {
  const shouldDestroy = document.body.hasAttribute("data-lenis-destroy");
  if (shouldDestroy) return;

  const isInfinite = document.body.hasAttribute("data-lenis-infinite");
  const lenis = new Lenis({
    lerp: 0.1,
    wheelMultiplier: 0.7,
    infinite: isInfinite,
    gestureOrientation: "vertical",
  });

  document.querySelectorAll("[data-lenis-start]").forEach((el) => {
    el.addEventListener("click", () => lenis.start());
  });
  document.querySelectorAll("[data-lenis-stop]").forEach((el) => {
    el.addEventListener("click", () => lenis.stop());
  });
  document.querySelectorAll("[data-lenis-toggle]").forEach((el) => {
    el.addEventListener("click", () => {
      el.classList.toggle("stop-scroll");
      if (el.classList.contains("stop-scroll")) lenis.stop();
      else lenis.start();
    });
  });

  lenis.on("scroll", ScrollTrigger.update);
  const onTick = (time: number) => {
    lenis.raf(time * 1000);
  };
  gsap.ticker.add(onTick);
  gsap.ticker.lagSmoothing(0);
}

function initVideoOnScroll() {
  const videos = document.querySelectorAll("video");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const v = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) void v.play();
        else {
          v.pause();
          v.currentTime = 0;
        }
      });
    },
    { threshold: 0.25 },
  );
  videos.forEach((v) => observer.observe(v));
}

function initVideoHoverPlay() {
  document.querySelectorAll("[data-video-on-hover]").forEach((wrapper) => {
    const video = wrapper.querySelector("video");
    const src = wrapper.getAttribute("data-video-src") || "";
    if (!video || !src) return;

    wrapper.addEventListener("mouseenter", () => {
      if (!video.getAttribute("src")) video.setAttribute("src", src);
      wrapper.setAttribute("data-video-on-hover", "active");
      void video.play().catch(() => {});
    });
    wrapper.addEventListener("mouseleave", () => {
      wrapper.setAttribute("data-video-on-hover", "not-active");
      setTimeout(() => {
        video.pause();
        video.currentTime = 0;
      }, 200);
    });
  });
}

function initClientsMarquee() {
  const content = document.querySelector<HTMLElement>(".mwg_effect008 .container");
  if (!content) return;

  const originalCards = Array.from(content.children);
  originalCards.forEach((card) => content.appendChild(card.cloneNode(true)));

  const cards = document.querySelectorAll<HTMLElement>(".mwg_effect008 .card");
  const cardsLength = cards.length / 2;
  const half = content.clientWidth / 2;
  const wrap = gsap.utils.wrap(-half, 0);

  let total = 0;
  const xTo = gsap.quickTo(content, "x", {
    duration: 0.5,
    ease: "power3",
    modifiers: {
      x: gsap.utils.unitize(wrap),
    },
  });

  const itemValues: number[] = [];
  for (let i = 0; i < cardsLength; i++) {
    itemValues.push((Math.random() - 0.5) * 20);
  }

  const tl = gsap.timeline({ paused: true });
  tl.to(cards, {
    rotate: (index: number) => itemValues[index % cardsLength],
    xPercent: (index: number) => itemValues[index % cardsLength],
    yPercent: (index: number) => itemValues[index % cardsLength],
    scale: 0.95,
    duration: 0.5,
    ease: "back.inOut(3)",
  });

  Observer.create({
    target: content,
    type: "pointer,touch",
    onPress: () => tl.play(),
    onDrag: (self) => {
      total += self.deltaX;
      xTo(total);
    },
    onRelease: () => tl.reverse(),
    onStop: () => tl.reverse(),
  });

  function tick(_t: number, deltaTime: number) {
    total -= deltaTime / 10;
    xTo(total);
  }
  gsap.ticker.add(tick);
}

function initHeroCards() {
  const container = document.querySelector<HTMLElement>(".mwg_effect025 .container");
  if (!container) return;

  const containerW = container.clientWidth;
  const cards = document.querySelectorAll<HTMLElement>(".results-card");
  const cardsLength = cards.length;
  const cardContent = document.querySelectorAll<HTMLElement>(".results-card");
  let currentPortion = 0;

  cards.forEach((card) => {
    gsap.set(card, {
      xPercent: (Math.random() - 0.5) * 10,
      yPercent: (Math.random() - 0.5) * 10,
      rotation: (Math.random() - 0.5) * 20,
    });
  });

  function resetPortion(index: number) {
    if (index < 0 || index >= cards.length) return;
    gsap.to(cards[index], {
      xPercent: (Math.random() - 0.5) * 10,
      yPercent: (Math.random() - 0.5) * 10,
      rotation: (Math.random() - 0.5) * 20,
      scale: 1,
      duration: 0.8,
      ease: "elastic.out(1, 0.75)",
    });
  }

  function newPortion(i: number) {
    gsap.to(cards[i], {
      xPercent: 0,
      yPercent: 0,
      rotation: 0,
      duration: 0.8,
      scale: 1.1,
      ease: "elastic.out(1, 0.75)",
    });
    cardContent.forEach((cc, index) => {
      if (index !== i) {
        gsap.to(cc, {
          xPercent: 24 / (index - i),
          ease: "elastic.out(1, 0.75)",
          duration: 0.8,
        });
      } else {
        gsap.to(cc, { xPercent: 0, ease: "elastic.out(1, 0.75)", duration: 0.8 });
      }
    });
  }

  container.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX - container.getBoundingClientRect().left;
    const percentage = mouseX / containerW;
    const activePortion = Math.ceil(percentage * cardsLength);
    if (
      currentPortion !== activePortion &&
      activePortion > 0 &&
      activePortion <= cardsLength
    ) {
      if (currentPortion !== 0) resetPortion(currentPortion - 1);
      currentPortion = activePortion;
      newPortion(currentPortion - 1);
    }
  });

  container.addEventListener("mouseleave", () => {
    resetPortion(currentPortion - 1);
    currentPortion = 0;
    gsap.to(cardContent, {
      xPercent: 0,
      ease: "elastic.out(1, 0.75)",
      duration: 0.8,
    });
  });
}

function initExpertiseScroll() {
  gsap.to(".scroll", {
    autoAlpha: 0,
    duration: 0.2,
    scrollTrigger: {
      trigger: ".mwg_effect031",
      start: "top top",
      end: "top top-=1",
      toggleActions: "play none reverse none",
    },
  });

  const slides = document.querySelectorAll<HTMLElement>(".mwg_effect031 .expertise-slide");
  slides.forEach((slide, index) => {
    const isLast = index === slides.length - 1;
    const contentWrapper = slide.querySelector<HTMLElement>(".expertise-wrap");
    const content = slide.querySelector<HTMLElement>(".expertise-content");
    if (!contentWrapper || !content || isLast) return;

    gsap.to(content, {
      rotationZ: index % 2 === 0 ? -4 : 4,
      scale: 0.7,
      rotationX: 40,
      transformOrigin: "50% 0%",
      ease: "power1.in",
      scrollTrigger: {
        pin: contentWrapper,
        trigger: slide,
        start: "top top",
        end: `+=${window.innerHeight}`,
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    const pinDuration = window.innerHeight;
    gsap.to(content, {
      autoAlpha: 0,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: slide,
        start: `top+=${pinDuration * 0.75} top`,
        end: `top+=${pinDuration} top`,
        scrub: true,
      },
    });
  });
}

function initSelectedWorkScroll() {
  if (window.innerWidth <= 478) return;
  const section = document.querySelector<HTMLElement>(".section_selected-work");
  if (!section) return;
  const items = section.querySelectorAll<HTMLElement>(".sw-collection .sw-item");
  const targets = ["0em", "-12em", "-24em"];
  items.forEach((item, index) => {
    const targetY = targets[index];
    if (targetY === undefined) return;
    gsap.fromTo(
      item,
      { y: "6em" },
      {
        y: targetY,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );
  });
}

function initMouseTrail() {
  const trailRoot = document.querySelector<HTMLElement>(".mwg_effect020");
  if (!trailRoot) return;
  const images: string[] = [];
  trailRoot.querySelectorAll<HTMLImageElement>(".medias img").forEach((img) => {
    images.push(img.getAttribute("src") || "");
  });
  if (images.length === 0) return;

  let incr = 0;
  let oldIncrX = 0;
  let oldIncrY = 0;
  const resetDist = window.innerWidth / 3;
  let indexImg = 0;

  trailRoot.addEventListener(
    "mousemove",
    (e) => {
      oldIncrX = e.clientX;
      oldIncrY = e.clientY;
    },
    { once: true },
  );

  trailRoot.addEventListener("mousemove", (e) => {
    const valX = e.clientX;
    const valY = e.clientY;
    incr += Math.abs(valX - oldIncrX) + Math.abs(valY - oldIncrY);
    if (incr > resetDist) {
      incr = 0;
      createMedia(
        trailRoot,
        valX,
        valY - trailRoot.getBoundingClientRect().top,
        valX - oldIncrX,
        valY - oldIncrY,
      );
    }
    oldIncrX = valX;
    oldIncrY = valY;
  });

  function createMedia(host: HTMLElement, x: number, y: number, deltaX: number, deltaY: number) {
    const image = document.createElement("img");
    image.setAttribute("src", images[indexImg]);
    host.appendChild(image);

    const tl = gsap.timeline({
      onComplete: () => {
        host.removeChild(image);
        tl.kill();
      },
    });

    tl.fromTo(
      image,
      {
        xPercent: -50 + (Math.random() - 0.5) * 80,
        yPercent: -50 + (Math.random() - 0.5) * 10,
        scaleX: 1.3,
        scaleY: 1.3,
      },
      {
        scaleX: 1,
        scaleY: 1,
        ease: "elastic.out(2, 0.6)",
        duration: 0.6,
      },
    );

    tl.fromTo(
      image,
      {
        x,
        y,
        rotation: (Math.random() - 0.5) * 20,
      },
      {
        x: `+=${deltaX * 4}`,
        y: `+=${deltaY * 4}`,
        rotation: (Math.random() - 0.5) * 20,
        ease: "power4.out",
        duration: 1.5,
      },
      "<",
    );

    tl.to(image, {
      duration: 0.3,
      scale: 0.5,
      delay: 0.1,
      ease: "back.in(1.5)",
    });

    indexImg = (indexImg + 1) % images.length;
  }
}

function initImagesNoDrag() {
  document.querySelectorAll("img").forEach((img) => img.setAttribute("draggable", "false"));
}

function setCurrentYear() {
  const y = new Date().getFullYear();
  const text = String(y);
  document.querySelectorAll("[data-current-year]").forEach((el) => {
    el.textContent = text;
  });
  document.querySelectorAll("#current-year").forEach((el) => {
    el.textContent = text;
  });
}

function emitPreloader() {
  window.addEventListener("load", () => {
    setTimeout(() => {
      const wfIx = window.Webflow?.require?.("ix3");
      wfIx?.emit?.("Preloader");
    }, 50);
  });
}

export function SiteEffects() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, Observer);

    let cancelled = false;

    async function boot() {
      await loadScript(JQUERY);
      if (cancelled) return;
      for (const url of WEBFLOW_CHUNKS) {
        await loadScript(url);
        if (cancelled) return;
      }

      if (window.Webflow?.env?.("editor") === undefined) {
        initLenis();
      }

      initVideoOnScroll();
      initVideoHoverPlay();
      initClientsMarquee();
      initHeroCards();
      initMouseTrail();
      initImagesNoDrag();
      setCurrentYear();

      const schedule = window.requestIdleCallback || ((cb: () => void) => setTimeout(cb, 500));
      schedule(() => {
        initExpertiseScroll();
        initSelectedWorkScroll();
        ScrollTrigger.refresh();
      });

      emitPreloader();
    }

    void boot().catch(console.error);

    return () => {
      cancelled = true;
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
