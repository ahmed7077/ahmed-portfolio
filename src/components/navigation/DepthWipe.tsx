"use client";

import { useEffect, useRef } from "react";

export function DepthWipe() {
  const wipeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let revealTimer = 0;
    let finishTimer = 0;
    const navigate = (event: MouseEvent) => {
      if (reduced.matches || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href^="#"]') : null;
      const id = link?.getAttribute("href")?.slice(1);
      const target = id ? document.getElementById(id) : null;
      const wipe = wipeRef.current;
      if (!link || !target || !wipe || wipe.dataset.state === "enter") return;
      event.preventDefault();
      wipe.dataset.state = "enter";
      window.clearTimeout(revealTimer);
      window.clearTimeout(finishTimer);
      revealTimer = window.setTimeout(() => {
        target.scrollIntoView({ behavior: "instant", block: "start" });
        window.history.pushState(null, "", `#${id}`);
        wipe.dataset.state = "exit";
      }, 360);
      finishTimer = window.setTimeout(() => { wipe.dataset.state = "idle"; }, 920);
    };
    document.addEventListener("click", navigate);
    return () => {
      document.removeEventListener("click", navigate);
      window.clearTimeout(revealTimer);
      window.clearTimeout(finishTimer);
    };
  }, []);

  return (
    <div ref={wipeRef} className="depth-wipe" data-state="idle" aria-hidden="true">
      <span className="depth-wipe__layer depth-wipe__layer--one" />
      <span className="depth-wipe__layer depth-wipe__layer--two" />
      <span className="depth-wipe__layer depth-wipe__layer--three" />
      <span className="depth-wipe__coordinate">Repositioning expedition coordinates</span>
    </div>
  );
}
