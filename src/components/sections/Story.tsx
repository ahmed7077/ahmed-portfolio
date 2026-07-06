"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { ArrowDown, BookOpen, BrainCircuit, Cpu, Map } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile, journey } from "@/data/profile";

const observations = [
  [BrainCircuit, "Primary habitat", "Large Language Models, generative AI, and efficient adaptation"],
  [Cpu, "Working terrain", "Computer vision, edge AI, IoT, and practical software systems"],
  [BookOpen, "Academic base", "B.Tech Information Science & Engineering · Presidency University"],
];

export function FieldNotes() {
  return (
    <section id="notes" className="relative overflow-hidden py-24 md:py-36">
      <div className="field-notes-map pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="field-notes-ring field-notes-ring--large" />
        <span className="field-notes-ring field-notes-ring--small" />
      </div>
      <div className="field-notes-observatory pointer-events-none absolute bottom-[6%] right-[4%] hidden h-[38%] w-[47%] lg:block" aria-hidden="true">
        <span className="field-notes-observatory__ring field-notes-observatory__ring--one" />
        <span className="field-notes-observatory__ring field-notes-observatory__ring--two" />
      </div>
      <Container className="relative z-10">
        <SectionHeading index="01" title="Field notes" note="Observations from the intersection of learning systems and the physical world." />
        <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <p className="font-display text-[clamp(1.6rem,3.4vw,3.1rem)] leading-[1.2] tracking-[-.025em] text-[#1e3a34]">{profile.about}</p>
          <div className="border-t hairline">
            {observations.map(([Icon, label, text], index) => {
              const I = Icon as typeof BrainCircuit;
              return (
                <motion.article key={label as string} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }} className="grid grid-cols-[42px_1fr] gap-4 border-b hairline py-6">
                  <I size={19} className="mt-1 text-[#b86b4b]" />
                  <div><p className="font-mono text-[10px] uppercase tracking-[.18em] text-[#7b9278]">{label as string}</p><p className="mt-2 text-sm leading-6">{text as string}</p></div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function GrowthMap() {
  return (
    <section id="growth" className="topo topo-orbits relative overflow-hidden border-y hairline bg-[#e7dcc8]/45 py-24 md:py-36">
      <Container className="relative z-10">
        <SectionHeading index="02" title="A map of becoming" note="Each coordinate compounds into the next. The path is not linear, but the direction is deliberate." />
        <div className="relative grid gap-0 md:grid-cols-4">
          <div className="absolute left-[15px] top-0 h-full w-px bg-[#1e3a34]/20 md:left-0 md:top-[15px] md:h-px md:w-full" />
          <div className="absolute left-0 top-[calc(50%+18px)] hidden h-px w-full bg-[#1e3a34]/20 md:block" />
          {journey.map(([id, label, tech], index) => (
            <motion.article key={id} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className="group relative grid grid-cols-[32px_1fr] gap-5 pb-10 md:block md:pr-8 md:pb-14">
              <span className="relative z-10 block h-[31px] w-[31px] rounded-full border-4 border-[#eee5d4] bg-[#1e3a34] transition group-hover:scale-125" />
              <div className="md:mt-7"><p className="font-mono text-[10px] text-[#b86b4b]">{id} / {label}</p><h3 className="mt-2 font-display text-xl">{tech}</h3></div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function FeaturedProject() {
  const flow = ["User query", "Knowledge base", "Exact match or fine-tuned LLM", "Final response"];
  const [activeStep, setActiveStep] = useState<number | null>(null);
  return (
    <section id="work" className="bg-[#161815] py-24 text-[#f5f1e8] md:py-36">
      <Container>
        <p className="eyebrow mb-8">03 / Featured expedition</p>
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.18em] text-[#c49a57]">
              <a href="https://www.ionidea.com/" target="_blank" rel="noreferrer" className="lap-border inline-flex rounded-full border border-[#c49a57]/45 bg-[#c49a57]/10 px-4 py-2 transition hover:bg-[#c49a57]/20">
                IonIdea internship ↗
              </a>
              <span className="ml-3 text-[#f5f1e8]/40">2025</span>
            </p>
            <h2 className="section-title mt-6">Efficient LLM<br /><em className="font-light text-[#c49a57]">Adaptation</em></h2>
            <p className="mt-8 max-w-lg text-base leading-7 text-[#f5f1e8]/65">Parameter-efficient fine-tuning of Meta Llama 3.2-3B-Instruct using LoRA on a custom instruction-response dataset, paired with a lightweight retrieval layer for deterministic knowledge lookup.</p>
            <div className="mt-8 flex flex-wrap gap-2">{["Llama 3.2", "LoRA", "PEFT", "TRL", "Transformers", "Prompt engineering"].map((item) => <span key={item} className="rounded-full border border-[#f5f1e8]/15 px-3 py-1.5 font-mono text-[10px] text-[#e7dcc8]">{item}</span>)}</div>
            <a href="https://github.com/ahmed7077/efficient-llm-adaptation" target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-3 border-b border-[#b86b4b] pb-2 text-sm">Examine the repository <ArrowDown size={14} className="-rotate-90" /></a>
          </div>
          <div className="relative rounded-[2rem] border border-[#f5f1e8]/10 bg-[#1e3a34]/35 p-6 md:p-10">
            <div className="mb-10 flex items-center justify-between"><Map size={20} className="text-[#c49a57]" /><span className="font-mono text-[9px] uppercase tracking-[.18em] text-[#f5f1e8]/35">Inference architecture / v1.0</span></div>
            <div className="space-y-3">
              {flow.map((item, index) => (
                <div key={item}>
                  <motion.button
                    type="button"
                    onPointerEnter={() => setActiveStep(index)}
                    onFocus={() => setActiveStep(index)}
                    onClick={() => setActiveStep(index)}
                    initial={{ opacity: .35, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 8 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * .08, duration: .28 }}
                    className={`group/node relative flex min-h-20 w-full items-center justify-between overflow-hidden rounded-xl border px-5 text-left transition-colors duration-200 ${activeStep === index ? "border-[#c49a57] bg-[#c49a57]/15 shadow-[0_0_32px_rgba(196,154,87,.12)]" : "border-[#f5f1e8]/12 bg-[#f5f1e8]/[.03] hover:border-[#c49a57]/70 hover:bg-[#c49a57]/10"}`}
                  >
                    <motion.span className="absolute left-0 top-0 h-full w-1 bg-[#c49a57]" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ delay: .25 + index * .2, duration: .45 }} />
                    <span className="font-display text-lg">{item}</span>
                    <span className="flex items-center gap-3">
                      <motion.span className="h-2 w-2 rounded-full bg-[#c49a57]" animate={{ scale: [1, 1.8, 1], opacity: [.45, 1, .45] }} transition={{ duration: 2.2, delay: index * .35, repeat: Infinity }} />
                      <span className="font-mono text-[9px] text-[#c49a57]">0{index + 1}</span>
                    </span>
                  </motion.button>
                  {index < flow.length - 1 && (
                    <div className="relative ml-8 h-5 w-px overflow-visible bg-[#c49a57]/20">
                      <motion.span className="absolute -left-[2px] top-0 h-[5px] w-[5px] rounded-full bg-[#c49a57] shadow-[0_0_10px_#c49a57]" animate={{ y: [0, 17, 0], opacity: [0, 1, 0] }} transition={{ duration: .72, delay: index * .12, repeat: Infinity, ease: "easeInOut" }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
