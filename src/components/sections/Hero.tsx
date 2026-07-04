"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "motion/react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { ContourLayer } from "@/components/background/ContourLayer";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { CompassGlyph } from "@/components/ui/CompassGlyph";
import { profile } from "@/data/profile";

const TerrainScene = dynamic(() => import("@/components/three/TerrainScene"), { ssr: false });

export function Hero() {
  const reduced = useReducedMotion();
  return (
    <section id="arrival" className="relative min-h-[760px] overflow-hidden bg-[#1e3a34] text-[#f5f1e8] md:min-h-screen">
      <ContourLayer />
      <div className="absolute inset-x-0 bottom-0 h-2/3 opacity-75 [mask-image:linear-gradient(to_top,black,transparent)]">
        {!reduced && <TerrainScene />}
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(22,24,21,.78)_0%,rgba(22,24,21,.3)_55%,rgba(22,24,21,.15)_100%)]" />
      <Container className="relative z-10 flex min-h-[760px] flex-col justify-between py-7 md:min-h-screen md:py-10">
        <header className="flex items-center justify-between border-b border-[#f5f1e8]/15 pb-5">
          <a href="#arrival" className="font-display text-xl">MA<span className="text-[#b86b4b]">.</span></a>
          <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#f5f1e8]/55">Living Intelligence / Portfolio 2026</p>
        </header>
        <div className="grid items-end gap-10 py-16 md:grid-cols-[1fr_280px]">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, ease: [0.22, 1, 0.36, 1] }}>
            <p className="mb-7 flex items-center gap-2 font-mono text-xs uppercase tracking-[.16em] text-[#c49a57]"><MapPin size={13} />{profile.location}</p>
            <h1 className="display-title max-w-5xl">Muhammad<br /><em className="font-light text-[#e7dcc8]">Ahmed</em></h1>
            <p className="mt-7 max-w-xl text-sm font-semibold uppercase leading-6 tracking-[.1em] text-[#f5f1e8]/65">{profile.role}</p>
            <p className="mt-7 max-w-2xl text-base leading-7 text-[#f5f1e8]/72 md:text-lg">{profile.intro}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="#work" dark>Explore my work</Button>
              <a aria-disabled="true" className="inline-flex min-h-12 cursor-not-allowed items-center rounded-full border border-[#f5f1e8]/25 px-6 text-sm text-[#f5f1e8]/60">Resume coming soon</a>
            </div>
          </motion.div>
          <aside className="flex items-end justify-between border-t border-[#f5f1e8]/15 pt-6 md:block md:border-l md:border-t-0 md:pl-8">
            <CompassGlyph className="h-24 w-24 text-[#c49a57] md:h-36 md:w-36" />
            <div className="flex gap-3 md:mt-10">
              {[[Github, profile.github, "GitHub"], [Linkedin, profile.linkedin, "LinkedIn"], [Mail, `mailto:${profile.email}`, "Email"]].map(([Icon, href, label]) => {
                const I = Icon as typeof Github;
                return <a key={label as string} href={href as string} target={(label as string) !== "Email" ? "_blank" : undefined} rel="noreferrer" aria-label={label as string} className="grid h-10 w-10 place-items-center rounded-full border border-[#f5f1e8]/20 transition hover:border-[#c49a57] hover:text-[#c49a57]"><I size={16} /></a>;
              })}
            </div>
          </aside>
        </div>
        <div className="flex items-center justify-between border-t border-[#f5f1e8]/15 pt-5 font-mono text-[10px] uppercase tracking-[.2em] text-[#f5f1e8]/45">
          <span>Scroll to begin expedition</span><span>12.9716° N / 77.5946° E</span>
        </div>
      </Container>
    </section>
  );
}
