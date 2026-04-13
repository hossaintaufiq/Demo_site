"use client";

import { useEffect } from "react";

/** Mirrors Webflow’s `w-mod-js` / `w-mod-touch` boot snippet */
export function WebflowHtmlClass() {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("w-mod-js")) root.classList.add("w-mod-js");
    if ("ontouchstart" in window) {
      root.classList.add("w-mod-touch");
    }
  }, []);
  return null;
}
