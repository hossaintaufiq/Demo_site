export function loadScript(src: string): Promise<void> {
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
