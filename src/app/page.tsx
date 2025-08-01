import { Suspense } from "react";
import { Hero } from "./components/hero";
import { Intro } from "./components/intro";
import { ServicesOverview } from "./components/services-overview";
import { ClientsSection } from "./components/clients-section";
import { ProjectsSection } from "./components/projects-section";
import { PartnershipSection } from "./components/partnership-section";
import { PageLoader } from "./components/page-loader";
import { InteractiveGridPattern } from "./components/interactive-grid-pattern";

export default function Page() {
  return (
    <Suspense fallback={<PageLoader />}>
      <main className="relative min-h-screen bg-white">
        <Hero />

        <div id="nav-trigger" />
        <div className="relative">
          <InteractiveGridPattern />
          <div className="relative z-10 bg-white">
            <Intro />
            <ServicesOverview />
            <ClientsSection />
            <ProjectsSection />
            <PartnershipSection />
          </div>
        </div>
      </main>
    </Suspense>
  );
}
