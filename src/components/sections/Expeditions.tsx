"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowUpRight, Orbit } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { skills } from "@/data/profile";

const tones = {
  night: "from-[#172329] to-[#11191d]",
  signal: "from-[#49382d] to-[#1c201d]",
  vision: "from-[#4b2926] to-[#1f1b1a]",
  roots: "from-[#254238] to-[#141a17]",
};
const SkillConstellation = dynamic(() => import("@/components/three/SkillConstellation"), { ssr: false });

function ProjectArtifact({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateX = useSpring(useTransform(py, [-.5, .5], [2.8, -2.8]), { stiffness: 190, damping: 24 });
  const rotateY = useSpring(useTransform(px, [-.5, .5], [-3.4, 3.4]), { stiffness: 190, damping: 24 });
  const farX = useSpring(useTransform(px, [-.5, .5], [-13, 13]), { stiffness: 150, damping: 25 });
  const nearX = useSpring(useTransform(px, [-.5, .5], [8, -8]), { stiffness: 170, damping: 23 });
  const nearY = useSpring(useTransform(py, [-.5, .5], [7, -7]), { stiffness: 170, damping: 23 });

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        px.set((event.clientX - rect.left) / rect.width - .5);
        py.set((event.clientY - rect.top) / rect.height - .5);
      }}
      onPointerLeave={() => { px.set(0); py.set(0); }}
      style={{ rotateX, rotateY, transformPerspective: 1400 }}
      className={`depth-card group relative overflow-hidden rounded-[1.6rem] bg-gradient-to-br ${tones[project.tone]} text-[#f5f1e8]`}
    >
      <motion.div style={{ x: farX }} className="pointer-events-none absolute -inset-16 opacity-20 [background:radial-gradient(circle_at_center,rgba(196,154,87,.4),transparent_55%)]" />
      <motion.div style={{ x: nearX, y: nearY }} className="absolute right-5 top-0 font-display text-[8rem] leading-none opacity-40 project-index md:text-[13rem]">0{index + 1}</motion.div>
      <div className="relative grid min-h-[370px] gap-10 p-7 md:grid-cols-[.7fr_1.3fr] md:p-12">
        <motion.div style={{ x: farX }} className="flex flex-col justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[.18em] text-[#c49a57]">{project.label}</p>
          <Orbit className="hidden text-[#f5f1e8]/20 md:block" size={90} strokeWidth={.6} />
        </motion.div>
        <motion.div style={{ x: nearX, y: nearY }} className="self-end">
          <h3 className="font-display text-4xl leading-none md:text-6xl">{project.title}</h3>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#f5f1e8]/62">{project.description}</p>
          <div className="mt-7 flex flex-wrap items-center gap-2">
            {project.tech.map((tech) => <span key={tech} className="rounded-full border border-[#f5f1e8]/15 px-3 py-1 font-mono text-[9px]">{tech}</span>)}
            <a href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`} className="ml-auto grid h-12 w-12 place-items-center rounded-full bg-[#f5f1e8] text-[#161815] transition group-hover:rotate-12 group-hover:scale-110"><ArrowUpRight size={18} /></a>
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section className="py-24 md:py-36">
      <Container>
        <SectionHeading index="04" title="Research expeditions" note="Engineering artifacts shaped by constraints: limited compute, imperfect data, and real environments." />
        <div className="space-y-5">
          {projects.map((project, index) => <ProjectArtifact key={project.title} project={project} index={index} />)}
        </div>
      </Container>
    </section>
  );
}

export function KnowledgeNetwork() {
  const [active, setActive] = useState("AI / ML");
  const activeIndex = Object.keys(skills).indexOf(active);
  return (
    <section id="network" className="topo border-y hairline bg-[#e7dcc8]/45 py-24 md:py-36">
      <Container>
        <SectionHeading index="05" title="Knowledge network" note="A working ecosystem of languages, models, tools, and physical systems." />
        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
          <div className="flex flex-wrap content-start gap-2 lg:block lg:space-y-2">
            {Object.keys(skills).map((group, index) => (
              <button key={group} onClick={() => setActive(group)} className={`flex items-center gap-4 rounded-full px-4 py-3 text-left text-sm transition lg:w-full lg:rounded-none lg:border-b lg:px-0 ${active === group ? "bg-[#1e3a34] text-[#f5f1e8] lg:bg-transparent lg:text-[#b86b4b]" : "hairline text-[#1e3a34]/60"}`}>
                <span className="font-mono text-[9px]">0{index + 1}</span>{group}
              </button>
            ))}
          </div>
          <div className="relative min-h-[390px] overflow-hidden rounded-[2rem] bg-[#1e3a34] p-7 text-[#f5f1e8] md:p-12">
            <div className="pointer-events-none absolute inset-0 opacity-80" aria-hidden="true"><SkillConstellation activeSeed={activeIndex} /></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a34]/90 via-[#1e3a34]/35 to-transparent" />
            <p className="relative font-mono text-[10px] uppercase tracking-[.2em] text-[#c49a57]">Active cluster / {active}</p>
            <div className="relative mt-14 flex flex-wrap gap-3">
              {skills[active as keyof typeof skills].map((skill, index) => (
                <motion.span key={`${active}-${skill}`} initial={{ opacity: 0, scale: .85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * .05 }} className={`rounded-full border px-5 py-3 ${index === 0 ? "border-[#c49a57] bg-[#c49a57] text-[#161815]" : "border-[#f5f1e8]/20 bg-[#f5f1e8]/[.04]"}`}>{skill}</motion.span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
