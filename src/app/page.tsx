import { PaperGrain } from "@/components/background/PaperGrain";
import { ExpeditionNav } from "@/components/navigation/ExpeditionNav";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProject, FieldNotes, GrowthMap } from "@/components/sections/Story";

export default function Home() {
  return (
    <main>
      <PaperGrain />
      <ExpeditionNav />
      <Hero />
      <FieldNotes />
      <GrowthMap />
      <FeaturedProject />
    </main>
  );
}
