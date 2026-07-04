"use client";

import Image from "next/image";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Camera, RefreshCw, Upload } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Container } from "@/components/layout/Container";

export function IdentityStudio() {
  const [portrait, setPortrait] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(useTransform(tiltY, [-.5, .5], [7, -7]), { stiffness: 180, damping: 24 });
  const rotateY = useSpring(useTransform(tiltX, [-.5, .5], [-7, 7]), { stiffness: 180, damping: 24 });

  useEffect(() => () => { if (portrait) URL.revokeObjectURL(portrait); }, [portrait]);

  function choosePortrait(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (portrait) URL.revokeObjectURL(portrait);
    setPortrait(URL.createObjectURL(file));
  }

  return (
    <section id="identity" className="relative overflow-hidden bg-[#dcd0ba] py-24 md:py-36">
      <div className="flow-orbit absolute -right-40 top-0 h-[620px] w-[620px] rounded-full border border-[#1e3a34]/10" aria-hidden="true" />
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="eyebrow mb-7">01 / Human in the loop</p>
            <h2 className="section-title">A face behind<br /><em className="font-light text-[#b86b4b]">the systems.</em></h2>
            <p className="mt-7 max-w-lg text-base leading-8 text-[#1e3a34]/68">
              Technology is most useful when it stays grounded in people. This portrait space gives the portfolio a personal anchor without turning the arrival into a conventional profile page.
            </p>
            <div className="mt-9 grid max-w-lg grid-cols-3 gap-3">
              {[["Bengaluru", "Base"], ["ISE · 2027", "Formation"], ["AI + Edge", "Practice"]].map(([value, label]) => (
                <div key={label} className="border-t border-[#1e3a34]/20 pt-4">
                  <strong className="font-display text-lg">{value}</strong>
                  <span className="mt-1 block font-mono text-[8px] uppercase tracking-widest text-[#1e3a34]/48">{label}</span>
                </div>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <button onClick={() => inputRef.current?.click()} className="inline-flex items-center gap-3 rounded-full bg-[#1e3a34] px-6 py-4 text-sm font-semibold text-[#f5f1e8] transition hover:-translate-y-1">
                <Upload size={16} />{portrait ? "Change portrait" : "Upload portrait"}
              </button>
              {portrait && <button onClick={() => setPortrait(null)} className="inline-flex items-center gap-2 rounded-full border border-[#1e3a34]/20 px-5 py-4 text-sm"><RefreshCw size={15} />Reset</button>}
              <input ref={inputRef} type="file" accept="image/png,image/jpeg,image/webp" onChange={choosePortrait} className="sr-only" aria-label="Upload your portfolio portrait" />
            </div>
            <p className="mt-4 font-mono text-[9px] uppercase tracking-wider text-[#1e3a34]/42">Local preview only · JPG, PNG or WebP · Portrait crop recommended</p>
          </div>
          <motion.div
            onPointerMove={(event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              tiltX.set(event.clientX / rect.width - rect.left / rect.width - .5);
              tiltY.set(event.clientY / rect.height - rect.top / rect.height - .5);
            }}
            onPointerLeave={() => { tiltX.set(0); tiltY.set(0); }}
            style={{ rotateX, rotateY, transformPerspective: 1000 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-[520px]"
          >
            <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-[2.5rem] border border-[#1e3a34]/15" />
            <div className="relative h-full overflow-hidden rounded-[2.5rem] bg-[#1e3a34] shadow-[0_35px_90px_rgba(30,58,52,.24)]">
              {portrait ? (
                <Image src={portrait} alt="Uploaded portrait of Muhammad Ahmed" fill unoptimized className="object-cover grayscale-[15%]" />
              ) : (
                <div className="flex h-full flex-col items-center justify-center p-10 text-center text-[#f5f1e8]">
                  <div className="profile-radar relative grid h-44 w-44 place-items-center rounded-full border border-[#c49a57]/40">
                    <div className="absolute inset-6 rounded-full border border-dashed border-[#c49a57]/35" />
                    <Camera size={42} strokeWidth={1} className="text-[#c49a57]" />
                  </div>
                  <h3 className="mt-9 font-display text-3xl">Your portrait belongs here.</h3>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-[#f5f1e8]/50">Upload a photo above to preview the final crop directly in the composition.</p>
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 flex justify-between bg-gradient-to-t from-[#161815]/80 to-transparent p-7 pt-20 font-mono text-[9px] uppercase tracking-widest text-[#f5f1e8]/60">
                <span>Muhammad Ahmed</span><span>Frame 01</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
