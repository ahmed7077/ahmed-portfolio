"use client";

import { motion, useScroll, useSpring } from "motion/react";

export function ScrollExperience() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 25, mass: .25 });
  return <motion.div className="fixed left-0 top-0 z-[90] h-[5px] w-full origin-left bg-[#b86b4b] shadow-[0_0_10px_rgba(184,107,75,.55)]" style={{ scaleX: progress }} aria-hidden="true" />;
}
