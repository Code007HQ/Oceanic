import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { DestinationHighlights } from "@/components/destination-highlights";
import { OnboardExperiences } from "@/components/onboard-experiences";
import { GuestStories } from "@/components/guest-stories";
import { PlanningTools } from "@/components/planning-tools";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll scrollbar-hidden">
      <div className="relative min-h-screen">
        <Navigation />
        <HeroSection />
      </div>

      <DestinationHighlights />
      <OnboardExperiences />
      <GuestStories />
      <PlanningTools />
      <Footer />
    </main>
  );
}
