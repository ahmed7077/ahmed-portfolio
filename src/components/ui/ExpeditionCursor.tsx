"use client";

import { useEffect, useRef } from "react";

export function ExpeditionCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const cursor = cursorRef.current;
    if (!cursor) return;
    let frame = 0;
    let x = -50;
    let y = -50;

    const render = () => {
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      frame = 0;
    };
    const move = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      cursor.dataset.visible = "true";
      if (!frame) frame = requestAnimationFrame(render);
    };
    const activate = (event: PointerEvent) => {
      cursor.dataset.active = event.target instanceof Element && Boolean(event.target.closest("a, button, [role='button']")) ? "true" : "false";
    };
    const leave = () => { cursor.dataset.visible = "false"; };

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", activate, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", activate);
      document.documentElement.removeEventListener("mouseleave", leave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={cursorRef} className="expedition-cursor" data-visible="false" aria-hidden="true">
      <span className="expedition-cursor__ring" />
      <span className="expedition-cursor__point" />
    </div>
  );
}
