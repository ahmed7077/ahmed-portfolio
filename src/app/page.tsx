import { PaperGrain } from "@/components/background/PaperGrain";
import { ExpeditionNav } from "@/components/navigation/ExpeditionNav";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <main>
      <PaperGrain />
      <ExpeditionNav />
      <Hero />
    </main>
  );
}
