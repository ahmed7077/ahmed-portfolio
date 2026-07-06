"use client";

import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowUpRight, Check, Copy, Mail, Sprout } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

const education = [
  ["2023 — 2027", "B.Tech, Information Science & Engineering", "Presidency University, Bengaluru", "CGPA 7.70"],
  ["2021 — 2023", "12th PUC · PCMCS", "Whitefield Global School / Deeksha", "82%"],
  ["2008 — 2021", "10th ICSE", "Ryan International School, Bengaluru", "81%"],
];

export function Experience() {
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateX = useSpring(useTransform(py, [-.5, .5], [3.5, -3.5]), { stiffness: 180, damping: 24 });
  const rotateY = useSpring(useTransform(px, [-.5, .5], [-4, 4]), { stiffness: 180, damping: 24 });
  return (
    <section id="experience" className="py-24 md:py-36">
      <Container>
        <SectionHeading index="06" title="Experience & formation" note="Learning made concrete through applied research, collaboration, and iteration." />
        <div className="grid gap-16 lg:grid-cols-2">
          <article>
            <p className="eyebrow mb-6">Professional fieldwork</p>
            <motion.div
              onPointerMove={(event) => {
                const rect = event.currentTarget.getBoundingClientRect();
                px.set((event.clientX - rect.left) / rect.width - .5);
                py.set((event.clientY - rect.top) / rect.height - .5);
              }}
              onPointerLeave={() => { px.set(0); py.set(0); }}
              style={{ rotateX, rotateY, transformPerspective: 1200 }}
              className="experience-card relative overflow-hidden rounded-[2rem] bg-[#1e3a34] p-7 text-[#f5f1e8] md:p-10"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full border border-[#c49a57]/20" />
              <div className="flex justify-between gap-4"><div><h3 className="font-display text-4xl">LLM Intern</h3><p className="mt-2 text-[#c49a57]">IonIdea · Remote, Bengaluru</p></div><span className="font-mono text-[9px] uppercase text-[#f5f1e8]/45">Jul—Sep 2025</span></div>
              <p className="mt-8 text-sm leading-7 text-[#f5f1e8]/60">Worked on Large Language Models and Generative AI, gaining hands-on experience in fine-tuning and deploying practical AI solutions.</p>
              <ul className="mt-7 space-y-3 border-t border-[#f5f1e8]/10 pt-7 text-sm leading-6 text-[#f5f1e8]/75">
                {["Fine-tuned Meta Llama 3.2-3B-Instruct using LoRA and SFT", "Built with PyTorch, Transformers, PEFT, TRL, and custom datasets", "Explored zero-shot, one-shot, and few-shot prompting", "Created retrieval-first, deterministic inference workflows"].map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b86b4b]" />{item}</li>)}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="https://github.com/ahmed7077/efficient-llm-adaptation" target="_blank" rel="noreferrer" className="lap-border inline-flex items-center gap-2 rounded-full border border-[#f5f1e8]/20 px-4 py-2 text-xs">Project repository <ArrowUpRight size={13} /></a>
                <a href="https://www.ionidea.com/" target="_blank" rel="noreferrer" className="lap-border inline-flex items-center gap-2 rounded-full border border-[#c49a57]/45 px-4 py-2 text-xs text-[#c49a57]">IonIdea official site <ArrowUpRight size={13} /></a>
              </div>
            </motion.div>
          </article>
          <article>
            <p className="eyebrow mb-6">Academic strata</p>
            <div className="border-t hairline">
              {education.map(([date, title, place, score]) => (
                <div key={title} className="grid grid-cols-[90px_1fr] gap-5 border-b hairline py-7">
                  <span className="font-mono text-[9px] text-[#b86b4b]">{date}</span>
                  <div><h3 className="font-display text-xl">{title}</h3><p className="mt-2 text-xs leading-5 text-[#1e3a34]/55">{place}</p><p className="mt-2 font-mono text-[10px]">{score}</p></div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}

export function CredentialsAndFuture() {
  const future = ["Agentic AI", "Retrieval-Augmented Generation", "Model Context Protocol", "Efficient LLM Adaptation", "Multi-Agent Systems", "Advanced Computer Vision", "AI Engineering Workflows"];
  return (
    <>
      <section className="border-y hairline bg-[#e7dcc8]/40 py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
            <div><p className="eyebrow mb-5">07 / Credentials</p><h2 className="section-title">Markers of<br />progress</h2></div>
            <div className="space-y-4">
              <article className="rounded-2xl border hairline bg-[#f5f1e8]/70 p-6"><span className="font-mono text-[9px] uppercase text-[#b86b4b]">Completed · 2026</span><h3 className="mt-3 font-display text-2xl">Generative AI Foundations Certificate</h3><p className="mt-2 text-sm text-[#1e3a34]/55">upGrad · Certificate available publicly on GitHub</p></article>
              <article className="rounded-2xl border hairline bg-[#f5f1e8]/70 p-6"><span className="font-mono text-[9px] uppercase text-[#b86b4b]">Ongoing · Expected 8 July 2026</span><h3 className="mt-3 font-display text-2xl">Java Programming & Data Structures</h3><p className="mt-2 text-sm text-[#1e3a34]/55">FacePrep · College Placement Program</p></article>
            </div>
          </div>
        </Container>
      </section>
      <section className="future-expedition relative overflow-hidden bg-[#b86b4b] py-24 text-[#161815] md:py-32">
        <div className="future-expedition__map pointer-events-none absolute inset-0" aria-hidden="true">
          <span className="future-expedition__orbit future-expedition__orbit--one" />
          <span className="future-expedition__orbit future-expedition__orbit--two" />
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index} className={`future-expedition__beacon future-expedition__beacon--${index + 1}`} />
          ))}
          <svg viewBox="0 0 1440 720" preserveAspectRatio="none">
            <path d="M-80 520 C260 160 470 610 760 290 S1190 70 1520 230" />
            <path d="M-40 610 C310 270 520 700 850 390 S1240 180 1490 310" />
          </svg>
        </div>
        <Container className="relative z-10">
          <div className="flex items-center gap-4"><Sprout size={20} /><p className="font-mono text-[10px] uppercase tracking-[.2em]">08 / Currently exploring</p></div>
          <h2 className="mt-8 font-display text-[clamp(3rem,8vw,8rem)] leading-[.86] tracking-[-.05em]">The next<br /><em className="font-light">expedition.</em></h2>
          <div className="mt-14 grid gap-x-8 gap-y-2 border-t border-[#161815]/20 pt-8 sm:grid-cols-2 lg:grid-cols-3">
            {future.map((item, index) => (
              <span key={item} className="flex min-h-16 items-baseline gap-3 border-b border-[#161815]/15 py-4 text-left font-display text-xl md:text-2xl">
                <sup className="shrink-0 font-mono text-[9px]">0{index + 1}</sup>
                <span className="leading-tight">{item}</span>
              </span>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);
  async function copyEmail() {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }
  return (
    <footer id="contact" className="bg-[#161815] py-24 text-[#f5f1e8] md:py-36">
      <Container>
        <p className="eyebrow mb-10">09 / Open channel</p>
        <h2 className="font-display text-[clamp(3.4rem,9vw,8.5rem)] leading-[.88] tracking-[-.055em]">Let&apos;s build<br /><em className="font-light text-[#c49a57]">something meaningful.</em></h2>
        <div className="mt-14 flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-3 rounded-full bg-[#f5f1e8] px-6 py-4 text-sm font-semibold text-[#161815]"><Mail size={16} />Start a conversation</a>
          <button onClick={copyEmail} className="inline-flex items-center gap-3 rounded-full border border-[#f5f1e8]/20 px-6 py-4 text-sm">{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? "Email copied" : "Copy email"}</button>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-[#f5f1e8]/20 px-6 py-4 text-sm">LinkedIn ↗</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-full border border-[#f5f1e8]/20 px-6 py-4 text-sm">GitHub ↗</a>
          <a href="/muhammad-ahmed-resume.pdf" target="_blank" className="rounded-full border border-[#f5f1e8]/20 px-6 py-4 text-sm">Resume ↗</a>
        </div>
        <div className="mt-24 flex flex-col justify-between gap-4 border-t border-[#f5f1e8]/12 pt-6 font-mono text-[9px] uppercase tracking-[.18em] text-[#f5f1e8]/35 sm:flex-row"><span>© 2026 Muhammad Ahmed</span><span>Bengaluru · India · Earth</span><a href="/muhammad-ahmed-resume.pdf" target="_blank">Download resume ↗</a></div>
      </Container>
    </footer>
  );
}
