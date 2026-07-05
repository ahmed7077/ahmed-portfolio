"use client";

import { useEffect, useRef } from "react";

export function TopographicDistortion() {
  const displacementRef = useRef<SVGFEDisplacementMapElement>(null);
  const turbulenceRef = useRef<SVGFETurbulenceElement>(null);
  const fieldRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    let x = .5;
    let y = .5;
    const render = () => {
      const dx = x - .5;
      const dy = y - .5;
      displacementRef.current?.setAttribute("scale", String(8 + Math.hypot(dx, dy) * 32));
      turbulenceRef.current?.setAttribute("baseFrequency", `${.008 + x * .005} ${.014 + y * .006}`);
      fieldRef.current?.setAttribute("transform", `translate(${dx * -18} ${dy * -12})`);
      frame = 0;
    };
    const move = (event: PointerEvent) => {
      x = event.clientX / window.innerWidth;
      y = event.clientY / window.innerHeight;
      if (!frame) frame = requestAnimationFrame(render);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      window.removeEventListener("pointermove", move);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <svg className="topographic-distortion" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <filter id="topographic-warp" x="-15%" y="-15%" width="130%" height="130%">
          <feTurbulence ref={turbulenceRef} type="fractalNoise" baseFrequency=".01 .016" numOctaves="2" seed="8" result="noise" />
          <feDisplacementMap ref={displacementRef} in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="B" />
        </filter>
      </defs>
      <g ref={fieldRef} filter="url(#topographic-warp)" fill="none">
        {Array.from({ length: 8 }).map((_, index) => (
          <path key={index} d={`M-120 ${130 + index * 92} C180 ${40 + index * 78}, 390 ${260 + index * 54}, 690 ${120 + index * 90} S1130 ${250 + index * 42}, 1560 ${80 + index * 92}`} />
        ))}
      </g>
    </svg>
  );
}
