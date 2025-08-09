import { Suspense } from "react";
import { Hero } from "./components/hero";
import { Intro } from "./components/intro";
import { PartnershipSection } from "./components/partnership-section";
import { PageLoader } from "./components/page-loader";
import { SolutionsOverview } from "./components/solution-overview";
import ContactUs from "./components/contact-us";
import ClientsSection from "./components/clients-section";

export default function Page() {
  return (
    <Suspense fallback={<PageLoader />}>
      <main className="relative min-h-screen bg-white">
        <Hero />
        <div id="nav-trigger" />

        <div className="relative bg-white">
          <Intro />
          <SolutionsOverview />
          <ClientsSection />
          <PartnershipSection />
          <ContactUs />
        </div>
      </main>
    </Suspense>
  );
}
