import { Suspense } from "react";
import { Hero } from "./components/hero";
import { Intro } from "./components/intro";
import { ServicesOverview } from "./components/services-overview";
import { ClientsSection } from "./components/clients-section";
import { PartnershipSection } from "./components/partnership-section";
import { PageLoader } from "./components/page-loader";
import ContactUs from "./components/contact-us";
import { SolutionsOverview } from "./components/solution-overview";

export default function Page() {
  return (
    <Suspense fallback={<PageLoader />}>
      <main className="relative min-h-screen bg-white">
        <Hero />
        <div id="nav-trigger" />
        <div className="relative">
          <div className="relative z-10 bg-white">
            <div className="min-h-screen w-full bg-white relative text-gray-800">
              <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                  backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px),
        radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)
      `,
                  backgroundSize: "40px 40px, 40px 40px, 40px 40px, 40px 40px",
                }}
              />
              <Intro />
              <ServicesOverview />
              <SolutionsOverview />
              <ClientsSection />
              <PartnershipSection />
            </div>

            <ContactUs />
          </div>
        </div>
      </main>
    </Suspense>
  );
}
