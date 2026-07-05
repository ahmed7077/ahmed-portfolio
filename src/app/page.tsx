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
import { ExpeditionCursor } from "@/components/ui/ExpeditionCursor";
import { FogTransition } from "@/components/background/FogTransition";
import { TopographicDistortion } from "@/components/background/TopographicDistortion";
import { DepthWipe } from "@/components/navigation/DepthWipe";

export default function Home() {
  return (
    <main>
      <PaperGrain />
      <TopographicDistortion />
      <ScrollExperience />
      <ExpeditionCursor />
      <DepthWipe />
      <SmoothScroll />
      <ExpeditionNav />
      <Hero />
      <IdentityStudio />
      <FogTransition dark />
      <SystemsView />
      <FieldNotes />
      <GrowthMap />
      <FogTransition dark />
      <FlowInterlude />
      <FeaturedProject />
      <Projects />
      <KnowledgeNetwork />
      <FogTransition />
      <Experience />
      <CredentialsAndFuture />
      <FogTransition dark />
      <Contact />
    </main>
  );
}
