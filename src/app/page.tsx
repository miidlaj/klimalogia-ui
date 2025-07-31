import { Suspense } from "react";
import { Hero } from "./components/hero";
import { Intro } from "./components/intro";
import { MissionVisionPreview } from "./components/mission-vision-preview";
import { ServicesOverview } from "./components/services-overview";
import { StatisticsSection } from "./components/statistics-section";
import { ClientsSection } from "./components/clients-section";
import { ProjectsSection } from "./components/projects-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { PartnershipSection } from "./components/partnership-section";
import { Footer } from "./components/footer";
import { Nav } from "./components/nav";
import { PageLoader } from "./components/page-loader";
import { InteractiveGridPattern } from "./components/interactive-grid-pattern";

export default function Page() {
  return (
    <Suspense fallback={<PageLoader />}>
      <main className="relative min-h-screen bg-white">
        <Nav />
        <Hero />

        <div className="relative">
          <InteractiveGridPattern />
          <div className="relative z-10 bg-white">
            <Intro />
            <MissionVisionPreview />
            <ServicesOverview />
            <StatisticsSection />
            <ClientsSection />
            <ProjectsSection />
            <TestimonialsSection />
            <PartnershipSection />
          </div>
        </div>

        <Footer />
      </main>
    </Suspense>
  );
}
