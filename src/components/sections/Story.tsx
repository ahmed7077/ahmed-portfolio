"use client";

import { motion } from "motion/react";
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
    <section id="notes" className="relative py-24 md:py-36">
      <Container>
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
    <section id="growth" className="topo border-y hairline bg-[#e7dcc8]/45 py-24 md:py-36">
      <Container>
        <SectionHeading index="02" title="A map of becoming" note="Each coordinate compounds into the next. The path is not linear, but the direction is deliberate." />
        <div className="relative grid gap-0 md:grid-cols-4">
          <div className="absolute left-[15px] top-0 h-full w-px bg-[#1e3a34]/20 md:left-0 md:top-[15px] md:h-px md:w-full" />
          {journey.map(([id, label, tech], index) => (
            <motion.article key={id} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className="group relative grid grid-cols-[32px_1fr] gap-5 pb-10 md:block md:pr-8 md:pb-14">
              <span className={`relative z-10 block h-[31px] w-[31px] rounded-full border-4 border-[#eee5d4] transition group-hover:scale-125 ${index === journey.length - 1 ? "bg-[#b86b4b]" : "bg-[#1e3a34]"}`} />
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
  return (
    <section id="work" className="bg-[#161815] py-24 text-[#f5f1e8] md:py-36">
      <Container>
        <p className="eyebrow mb-8">03 / Featured expedition</p>
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.18em] text-[#c49a57]">IonIdea internship context · 2025</p>
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
                  <motion.div initial={{ opacity: .35, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .18 }} className={`flex min-h-20 items-center justify-between rounded-xl border px-5 ${index === 2 ? "border-[#b86b4b]/60 bg-[#b86b4b]/10" : "border-[#f5f1e8]/12 bg-[#f5f1e8]/[.03]"}`}>
                    <span className="font-display text-lg">{item}</span><span className="font-mono text-[9px] text-[#c49a57]">0{index + 1}</span>
                  </motion.div>
                  {index < flow.length - 1 && <div className="ml-8 h-5 w-px bg-gradient-to-b from-[#c49a57] to-transparent" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
