import { Suspense } from "react";
import { Hero } from "./components/hero";
import { Intro } from "./components/intro";
import { PartnershipSection } from "./components/partnership-section";
import { PageLoader } from "./components/page-loader";
import { SolutionsOverview } from "./components/solution-overview";
import ContactUs from "./components/contact-us";
import ClientsSection from "./components/clients-section";
import { StepScrollContainer } from "@/components/custom/step-scroll";

export default function Page() {
  const sections = [
    { id: "hero", component: <Hero />, name: "Home" },
    { id: "intro", component: <Intro />, name: "About" },
    { id: "solutions", component: <SolutionsOverview />, name: "Solutions" },
    { id: "clients", component: <ClientsSection />, name: "Clients" },
    {
      id: "partnership",
      component: <PartnershipSection />,
      name: "Partnership",
    },
    { id: "contact", component: <ContactUs />, name: "Contact" },
  ];

  return (
    <Suspense fallback={<PageLoader />}>
      <main className="relative min-h-screen bg-white">
        <StepScrollContainer sections={sections} />
      </main>
    </Suspense>
  );
}
