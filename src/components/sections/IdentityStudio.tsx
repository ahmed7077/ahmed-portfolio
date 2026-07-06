"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Container } from "@/components/layout/Container";

export function IdentityStudio() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(useTransform(pointerY, [-.5, .5], [7, -7]), { stiffness: 170, damping: 20 });
  const rotateY = useSpring(useTransform(pointerX, [-.5, .5], [-8, 8]), { stiffness: 170, damping: 20 });
  const imageX = useSpring(useTransform(pointerX, [-.5, .5], [-14, 14]), { stiffness: 140, damping: 22 });
  const imageY = useSpring(useTransform(pointerY, [-.5, .5], [-11, 11]), { stiffness: 140, damping: 22 });
  const backgroundX = useSpring(useTransform(pointerX, [-.5, .5], [-24, 24]), { stiffness: 90, damping: 28 });
  const backgroundY = useSpring(useTransform(pointerY, [-.5, .5], [-18, 18]), { stiffness: 90, damping: 28 });

  return (
    <section
      id="identity"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        pointerX.set((event.clientX - rect.left) / rect.width - .5);
        pointerY.set((event.clientY - rect.top) / rect.height - .5);
      }}
      onPointerLeave={() => { pointerX.set(0); pointerY.set(0); }}
      className="boundary-glow relative overflow-hidden bg-[#dcd0ba] py-24 md:py-36"
    >
      <motion.div
        style={{ x: backgroundX, y: backgroundY, scale: 1.06 }}
        className="identity-topography pointer-events-none absolute inset-[-3%] opacity-100"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-[#f5f1e8]/22" aria-hidden="true" />
      <div className="flow-orbit absolute -right-40 top-0 h-[620px] w-[620px] rounded-full border border-[#1e3a34]/10" aria-hidden="true" />
      <Container className="relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="eyebrow mb-7">01 / Human in the loop</p>
            <h2 className="section-title">A face behind<br /><em className="font-light text-[#b86b4b]">the systems.</em></h2>
            <p className="mt-7 max-w-lg text-base leading-8 text-[#1e3a34]/68">
              Technology is most useful when it stays grounded in people. I build at the meeting point of language, vision, and the physical world—turning research into systems that can be understood and used.
            </p>
            <div className="mt-9 grid max-w-lg grid-cols-3 gap-3">
              {[["Bengaluru", "Base"], ["ISE · 2027", "Formation"], ["CSE", "Practice"]].map(([value, label]) => (
                <div key={label} className="border-t border-[#1e3a34]/20 pt-4 text-left">
                  <strong className="block min-h-7 font-display text-lg leading-7">{value}</strong>
                  <span className="mt-1 block font-mono text-[8px] uppercase tracking-widest text-[#1e3a34]/48">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <motion.div
            style={{ rotateX, rotateY, transformPerspective: 1500 }}
            className="relative isolate mx-auto aspect-[4/5] w-full max-w-[520px] [backface-visibility:hidden]"
          >
            <div className="portrait-reflection" aria-hidden="true" />
            <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-[2.5rem] border border-[#1e3a34]/20" />
            <div className="relative h-full overflow-hidden rounded-[2.5rem] bg-[#090b0a] shadow-[0_40px_100px_rgba(30,58,52,.3)] [backface-visibility:hidden]">
              <motion.div style={{ x: imageX, y: imageY, scale: 1.08 }} className="absolute inset-[-3%]">
                <Image src="/muhammad-ahmed-profile.jpg" alt="Portrait of Muhammad Ahmed" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 520px" />
              </motion.div>
              <div className="pointer-events-none absolute inset-4 z-20 rounded-[1.8rem] border border-[#f5f1e8]/12" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-28 bg-gradient-to-t from-[#090b0a]/55 to-transparent" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
