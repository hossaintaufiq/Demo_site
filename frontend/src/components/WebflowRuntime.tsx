"use client";

import { useEffect } from "react";
import externalScripts from "@/generated/webflow-external-scripts.json";
import inlineScripts from "@/generated/webflow-inline-scripts.json";

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    for (const el of document.scripts) {
      if (el.src === src) {
        resolve();
        return;
      }
    }
    const s = document.createElement("script");
    s.src = src;
    s.async = false;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(s);
  });
}

/** Run Webflow inline scripts; patch DOMContentLoaded/load when already fired */
function wrapLateInit(code: string): string {
  return `(function(){
  var _dAdd = document.addEventListener.bind(document);
  var _wAdd = window.addEventListener.bind(window);
  function fireSoon(fn, ctx) {
    queueMicrotask(function () {
      try { if (typeof fn === "function") fn.call(ctx || document); } catch (e) { console.error(e); }
    });
  }
  document.addEventListener = function (type, listener, opts) {
    if (type === "DOMContentLoaded" && document.readyState !== "loading") {
      fireSoon(listener, document);
      return;
    }
    return _dAdd(type, listener, opts);
  };
  window.addEventListener = function (type, listener, opts) {
    if (type === "DOMContentLoaded" && document.readyState !== "loading") {
      fireSoon(listener, window);
      return;
    }
    if (type === "load" && document.readyState === "complete") {
      fireSoon(listener, window);
      return;
    }
    return _wAdd(type, listener, opts);
  };
  ${code}
  document.addEventListener = _dAdd;
  window.addEventListener = _wAdd;
})();`;
}

export function WebflowRuntime() {
  useEffect(() => {
    let cancelled = false;

    async function run() {
      for (const src of externalScripts as string[]) {
        if (cancelled) return;
        await loadScript(src);
      }
      if (cancelled) return;
      for (const raw of inlineScripts as string[]) {
        if (cancelled) return;
        const el = document.createElement("script");
        el.text = wrapLateInit(raw);
        document.body.appendChild(el);
      }
    }

    void run().catch((e) => console.error("[WebflowRuntime]", e));

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
