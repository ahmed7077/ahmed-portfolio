"use client";

import { useState } from "react";
import { Check, Copy, Mail, Sprout } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

const education = [
  ["2023 — 2027", "B.Tech, Information Science & Engineering", "Presidency University, Bengaluru", "CGPA 7.58"],
  ["2021 — 2023", "12th PUC · PCMCS", "Whitefield Global School / Deeksha", "82%"],
  ["2008 — 2021", "10th ICSE", "Ryan International School, Bengaluru", "81%"],
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-36">
      <Container>
        <SectionHeading index="06" title="Experience & formation" note="Learning made concrete through applied research, collaboration, and iteration." />
        <div className="grid gap-16 lg:grid-cols-2">
          <article>
            <p className="eyebrow mb-6">Professional fieldwork</p>
            <div className="rounded-[2rem] bg-[#1e3a34] p-7 text-[#f5f1e8] md:p-10">
              <div className="flex justify-between gap-4"><div><h3 className="font-display text-4xl">LLM Intern</h3><p className="mt-2 text-[#c49a57]">IonIdea · Remote, Bengaluru</p></div><span className="font-mono text-[9px] uppercase text-[#f5f1e8]/45">Jul—Sep 2025</span></div>
              <p className="mt-8 text-sm leading-7 text-[#f5f1e8]/60">Worked on Large Language Models and Generative AI, gaining hands-on experience in fine-tuning and deploying practical AI solutions.</p>
              <ul className="mt-7 space-y-3 border-t border-[#f5f1e8]/10 pt-7 text-sm leading-6 text-[#f5f1e8]/75">
                {["Fine-tuned Meta Llama 3.2-3B-Instruct using LoRA and SFT", "Built with PyTorch, Transformers, PEFT, TRL, and custom datasets", "Explored zero-shot, one-shot, and few-shot prompting", "Created retrieval-first, deterministic inference workflows"].map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b86b4b]" />{item}</li>)}
              </ul>
            </div>
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
      <section className="overflow-hidden bg-[#b86b4b] py-24 text-[#161815] md:py-32">
        <Container>
          <div className="flex items-center gap-4"><Sprout size={20} /><p className="font-mono text-[10px] uppercase tracking-[.2em]">08 / Currently exploring</p></div>
          <h2 className="mt-8 font-display text-[clamp(3rem,8vw,8rem)] leading-[.86] tracking-[-.05em]">The next<br /><em className="font-light">expedition.</em></h2>
          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4 border-t border-[#161815]/20 pt-8">{future.map((item, index) => <span key={item} className="font-display text-xl md:text-2xl"><sup className="mr-2 font-mono text-[9px]">0{index + 1}</sup>{item}</span>)}</div>
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
        </div>
        <div className="mt-24 flex flex-col justify-between gap-4 border-t border-[#f5f1e8]/12 pt-6 font-mono text-[9px] uppercase tracking-[.18em] text-[#f5f1e8]/35 sm:flex-row"><span>© 2026 Muhammad Ahmed</span><span>Bengaluru · India · Earth</span><span>Resume coming soon</span></div>
      </Container>
    </footer>
  );
}
