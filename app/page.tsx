import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Navbar } from "@/components/navbar";
import { TokenSection } from "@/components/token-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <TokenSection />
    </main>
  );
}