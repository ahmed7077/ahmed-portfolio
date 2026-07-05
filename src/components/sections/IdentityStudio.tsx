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

  return (
    <section id="identity" className="boundary-glow relative overflow-hidden bg-[#dcd0ba] py-24 md:py-36">
      <div className="flow-orbit absolute -right-40 top-0 h-[620px] w-[620px] rounded-full border border-[#1e3a34]/10" aria-hidden="true" />
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="eyebrow mb-7">01 / Human in the loop</p>
            <h2 className="section-title">A face behind<br /><em className="font-light text-[#b86b4b]">the systems.</em></h2>
            <p className="mt-7 max-w-lg text-base leading-8 text-[#1e3a34]/68">
              Technology is most useful when it stays grounded in people. I build at the meeting point of language, vision, and the physical world—turning research into systems that can be understood and used.
            </p>
            <div className="mt-9 grid max-w-lg grid-cols-3 gap-3">
              {[["Bengaluru", "Base"], ["ISE · 2027", "Formation"], ["AI + Edge", "Practice"]].map(([value, label]) => (
                <div key={label} className="border-t border-[#1e3a34]/20 pt-4">
                  <strong className="font-display text-lg">{value}</strong>
                  <span className="mt-1 block font-mono text-[8px] uppercase tracking-widest text-[#1e3a34]/48">{label}</span>
                </div>
              ))}
            </div>
            <p className="mt-9 max-w-sm font-mono text-[9px] uppercase leading-5 tracking-[.14em] text-[#1e3a34]/42">Move across the portrait to shift perspective and light.</p>
          </div>
          <motion.div
            onPointerMove={(event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              const x = (event.clientX - rect.left) / rect.width;
              const y = (event.clientY - rect.top) / rect.height;
              pointerX.set(x - .5); pointerY.set(y - .5);
            }}
            onPointerLeave={() => {
              pointerX.set(0); pointerY.set(0);
            }}
            style={{ rotateX, rotateY, transformPerspective: 1500 }}
            className="relative isolate mx-auto aspect-[4/5] w-full max-w-[520px] [backface-visibility:hidden]"
          >
            <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-[2.5rem] border border-[#1e3a34]/20" />
            <div className="relative h-full overflow-hidden rounded-[2.5rem] bg-[#090b0a] shadow-[0_40px_100px_rgba(30,58,52,.3)] [backface-visibility:hidden]">
              <motion.div style={{ x: imageX, y: imageY, scale: 1.08 }} className="absolute inset-[-3%]">
                <Image src="/muhammad-ahmed-profile.jpg" alt="Portrait of Muhammad Ahmed" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 520px" />
              </motion.div>
              <div className="pointer-events-none absolute inset-4 z-20 rounded-[1.8rem] border border-[#f5f1e8]/12" />
              <div className="absolute inset-x-0 bottom-0 z-30 flex justify-between bg-gradient-to-t from-[#090b0a] via-[#090b0a]/55 to-transparent p-7 pt-24 font-mono text-[9px] uppercase tracking-widest text-[#f5f1e8]/70">
                <span>Muhammad Ahmed</span><span>Portrait / 01</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
