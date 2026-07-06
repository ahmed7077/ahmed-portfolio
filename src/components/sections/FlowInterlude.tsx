"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Container } from "@/components/layout/Container";

export function FlowInterlude() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const near = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const far = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={ref} className="relative h-[82vh] min-h-[640px] overflow-hidden bg-[#1e3a34] text-[#f5f1e8]">
      <motion.div style={{ y: far }} className="flow-interlude-lines absolute inset-[-10%] opacity-50">
        <svg viewBox="0 0 1440 900" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          {Array.from({ length: 9 }).map((_, index) => (
            <path key={index} d={`M-100 ${170 + index * 72} C250 ${10 + index * 80}, 460 ${350 + index * 35}, 760 ${170 + index * 68} S1200 ${270 + index * 36}, 1540 ${80 + index * 70}`} fill="none" stroke={index % 3 === 0 ? "#C49A57" : "#7B9278"} strokeWidth={index % 3 === 0 ? 1.5 : .7} opacity={.18 + index * .025} />
          ))}
        </svg>
      </motion.div>
      <motion.div style={{ y: near }} className="flow-interlude-rings absolute -bottom-40 left-[8%] h-[520px] w-[520px] rounded-full border border-[#c49a57]/20">
        <div className="absolute inset-16 rounded-full border border-dashed border-[#c49a57]/20" />
        <div className="absolute inset-32 rounded-full border border-[#c49a57]/20" />
      </motion.div>
      <Container className="relative z-10 flex h-full flex-col justify-center py-16">
        <p className="eyebrow mb-8">Signal / transformation / response</p>
        <h2 className="max-w-5xl font-display text-[clamp(3.2rem,8.5vw,8.5rem)] leading-[.9] tracking-[-.055em]">
          Intelligence<br /><em className="font-light text-[#c49a57]">should <span className="flowing-word">move</span>.</em>
        </h2>
        <div className="mt-10 grid w-full max-w-3xl grid-cols-3 border-y border-[#f5f1e8]/12 py-6 md:mt-12">
          {[["Input", "Observe"], ["Model", "Reason"], ["Output", "Act"]].map(([label, value], index) => (
            <div key={label} className={index ? "border-l border-[#f5f1e8]/12 pl-6" : ""}>
              <span className="font-mono text-[8px] uppercase tracking-[.18em] text-[#f5f1e8]/35">{label}</span>
              <strong className="mt-2 block font-display text-xl md:text-3xl">{value}</strong>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
