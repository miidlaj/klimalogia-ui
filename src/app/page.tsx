import { Hero } from "./components/hero";
import { Intro } from "./components/intro";
import { MissionVisionPreview } from "./components/mission-vision-preview";
import { ServicesOverview } from "./components/services-overview";
import { ClientsSection } from "./components/clients-section";
import { ProjectsSection } from "./components/projects-section";
import { PartnershipSection } from "./components/partnership-section";

export default function Page() {
  return (
    <main>
      <Hero />
      <Intro />
      <MissionVisionPreview />
      <ServicesOverview />
      <ClientsSection />
      <ProjectsSection />
      <PartnershipSection />
    </main>
  );
}