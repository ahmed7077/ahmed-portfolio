"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useScroll, useSpring } from "motion/react";

export function ScrollExperience() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 25, mass: .25 });
  const x = useMotionValue(-300);
  const y = useMotionValue(-300);
  const smoothX = useSpring(x, { stiffness: 70, damping: 22 });
  const smoothY = useSpring(y, { stiffness: 70, damping: 22 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)").matches) return;
    const move = (event: PointerEvent) => { x.set(event.clientX - 240); y.set(event.clientY - 240); };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return (
    <>
      <motion.div className="fixed left-0 top-0 z-[90] h-[3px] w-full origin-left bg-[#b86b4b]" style={{ scaleX: progress }} aria-hidden="true" />
      <motion.div className="pointer-events-none fixed z-[70] hidden h-[480px] w-[480px] rounded-full opacity-30 blur-[90px] lg:block" style={{ x: smoothX, y: smoothY, background: "radial-gradient(circle, rgba(196,154,87,.22), transparent 65%)" }} aria-hidden="true" />
    </>
  );
}
