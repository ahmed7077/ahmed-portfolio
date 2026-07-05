"use client";

import { motion } from "motion/react";
import { Bot, Eye, Radio, Workflow } from "lucide-react";
import { Container } from "@/components/layout/Container";

const systems = [
  { icon: Bot, number: "01", title: "Language systems", copy: "Fine-tuning, retrieval, prompting, and deterministic inference pipelines.", tags: ["LLMs", "LoRA", "RAG"] },
  { icon: Eye, number: "02", title: "Visual intelligence", copy: "Deep-learning and lightweight computer vision for real-world imagery.", tags: ["OpenCV", "CNNs", "Edge"] },
  { icon: Radio, number: "03", title: "Connected environments", copy: "Sensor networks that turn physical conditions into useful signals.", tags: ["IoT", "Arduino", "Telemetry"] },
  { icon: Workflow, number: "04", title: "Agentic workflows", copy: "Exploring tool-using systems, MCP, orchestration, and reliable evaluation.", tags: ["Agents", "MCP", "Evals"] },
];

export function SystemsView() {
  return (
    <section id="systems" className="bg-[#161815] py-24 text-[#f5f1e8] md:py-36">
      <Container>
        <div className="mb-16 grid gap-6 md:grid-cols-[1fr_340px] md:items-end">
          <div><p className="eyebrow mb-6">02 / Systems overview</p><h2 className="section-title">Four connected<br />fields of practice.</h2></div>
          <p className="text-sm leading-7 text-[#f5f1e8]/48">A live map of the disciplines that shape the work—from model adaptation to sensing at the edge.</p>
        </div>
        <div className="grid gap-px overflow-hidden rounded-[2rem] bg-[#f5f1e8]/10 md:grid-cols-2">
          {systems.map(({ icon: Icon, number, title, copy, tags }, index) => (
            <motion.article key={title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ delay: index * .09 }} className="depth-tile reflected-edge group relative min-h-[330px] overflow-hidden bg-[#1b1f1b] p-7 md:p-10">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-[#c49a57]/10 transition duration-700 group-hover:scale-150 group-hover:border-[#c49a57]/25" />
              <div className="flex items-start justify-between"><Icon size={28} strokeWidth={1} className="text-[#c49a57]" /><span className="font-mono text-[10px] text-[#f5f1e8]/30">{number}</span></div>
              <h3 className="mt-20 font-display text-3xl md:text-4xl">{title}</h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-[#f5f1e8]/48">{copy}</p>
              <div className="mt-7 flex gap-2">{tags.map((tag) => <span key={tag} className="rounded-full border border-[#f5f1e8]/12 px-3 py-1 font-mono text-[8px] uppercase tracking-wider">{tag}</span>)}</div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
