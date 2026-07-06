"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { ContourLayer } from "@/components/background/ContourLayer";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { CompassGlyph } from "@/components/ui/CompassGlyph";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { profile } from "@/data/profile";

const TerrainScene = dynamic(() => import("@/components/three/TerrainScene"), { ssr: false });

export function Hero() {
  return (
    <section id="arrival" className="relative min-h-[760px] overflow-hidden bg-[#1e3a34] text-[#f5f1e8] md:min-h-screen">
      <ContourLayer />
      <div className="ambient-orbs absolute inset-0" aria-hidden="true">
        {[
          ["7%", "18%", "13px", "0s"], ["14%", "66%", "20px", "-2s"],
          ["23%", "38%", "8px", "-5s"], ["31%", "78%", "12px", "-8s"],
          ["39%", "16%", "17px", "-3s"], ["47%", "57%", "9px", "-6s"],
          ["55%", "30%", "15px", "-10s"], ["61%", "84%", "7px", "-4s"],
          ["68%", "49%", "22px", "-7s"], ["75%", "72%", "11px", "-1s"],
          ["82%", "22%", "9px", "-9s"], ["87%", "87%", "18px", "-5s"],
          ["92%", "44%", "13px", "-11s"], ["96%", "67%", "7px", "-3s"],
        ].map(([left, top, size, delay], index) => (
          <span key={index} style={{ left, top, width: size, height: size, animationDelay: delay }} />
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-2/3 opacity-75 [mask-image:linear-gradient(to_top,black,transparent)]">
        <TerrainScene />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(22,24,21,.78)_0%,rgba(22,24,21,.3)_55%,rgba(22,24,21,.15)_100%)]" />
      <Container className="relative z-10 flex min-h-[760px] flex-col justify-between py-7 md:min-h-screen md:py-10">
        <header className="flex items-center justify-between border-b border-[#f5f1e8]/15 pb-5">
          <div className="ma-orbit grid h-12 w-12 place-items-center rounded-full font-display text-xl" aria-label="Muhammad Ahmed monogram">MA</div>
          <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#f5f1e8]/55">Living Intelligence / Portfolio 2026</p>
        </header>
        <div className="grid items-end gap-10 py-16 md:grid-cols-[minmax(0,1fr)_360px]">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, ease: [0.22, 1, 0.36, 1] }}>
            <p className="mb-7 flex items-center gap-2 font-mono text-xs uppercase tracking-[.16em] text-[#c49a57]"><MapPin size={13} />{profile.location}</p>
            <h1 className="display-title max-w-5xl">Muhammad<br />Ahmed</h1>
            <p className="mt-7 max-w-xl text-sm font-semibold uppercase leading-6 tracking-[.1em] text-[#f5f1e8]/65">{profile.role}</p>
            <p className="mt-7 max-w-2xl text-base leading-7 text-[#f5f1e8]/72 md:text-lg">{profile.intro}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="#work" dark>Explore my work</Button>
              <a href="/muhammad-ahmed-resume.pdf" target="_blank" className="lap-border inline-flex min-h-12 items-center rounded-full border border-[#f5f1e8]/25 px-6 text-sm text-[#f5f1e8]/75 transition">View resume ↗</a>
            </div>
          </motion.div>
          <aside className="flex items-end justify-between border-t border-[#f5f1e8]/15 pt-6 md:flex md:min-h-[500px] md:flex-col md:items-center md:justify-center md:border-l md:border-t-0 md:pl-10 md:text-center">
            <motion.div animate={{ y: [0, -9, 0], rotate: [-1.5, 1.5, -1.5] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
              <CompassGlyph className="h-24 w-24 text-[#c49a57] md:h-36 md:w-36" />
            </motion.div>
            <div className="mt-5 max-w-[290px]">
              <p className="font-display text-2xl leading-tight">Welcome. Explore the journey.</p>
              <p className="mt-2 text-xs leading-5 text-[#f5f1e8]/45">Follow the coordinates from first principles to intelligent systems.</p>
            </div>
            <div className="grid grid-cols-3 gap-2 md:mt-7 md:w-full">
              {[
                ["github", profile.github, "GitHub"],
                ["linkedin", profile.linkedin, "LinkedIn"],
                ["email", `mailto:${profile.email}`, "Email"],
              ].map(([kind, href, label]) => (
                <a key={label} href={href} target={kind !== "email" ? "_blank" : undefined} rel="noreferrer" aria-label={label} className="lap-border inline-flex h-11 min-w-11 items-center justify-center gap-2 rounded-full border border-[#f5f1e8]/20 px-2 text-[9px] uppercase tracking-wider transition">
                  <SocialIcon kind={kind as "github" | "linkedin" | "email"} /><span className="hidden sm:inline">{label}</span>
                </a>
              ))}
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
