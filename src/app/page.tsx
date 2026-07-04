import { PaperGrain } from "@/components/background/PaperGrain";
import { ExpeditionNav } from "@/components/navigation/ExpeditionNav";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProject, FieldNotes, GrowthMap } from "@/components/sections/Story";
import { KnowledgeNetwork, Projects } from "@/components/sections/Expeditions";
import { Contact, CredentialsAndFuture, Experience } from "@/components/sections/PathForward";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { IdentityStudio } from "@/components/sections/IdentityStudio";
import { SystemsView } from "@/components/sections/SystemsView";
import { ScrollExperience } from "@/components/background/ScrollExperience";
import { FlowInterlude } from "@/components/sections/FlowInterlude";

export default function Home() {
  return (
    <main>
      <PaperGrain />
      <ScrollExperience />
      <SmoothScroll />
      <ExpeditionNav />
      <Hero />
      <IdentityStudio />
      <SystemsView />
      <FieldNotes />
      <GrowthMap />
      <FlowInterlude />
      <FeaturedProject />
      <Projects />
      <KnowledgeNetwork />
      <Experience />
      <CredentialsAndFuture />
      <Contact />
    </main>
  );
}
