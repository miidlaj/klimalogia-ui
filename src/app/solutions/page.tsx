import { StepScrollContainer } from "@/components/custom/step-scroll";
import { SolutionsCards } from "./components/solutions-card";
import SolutionsHero from "./components/solutions-hero";
import { SolutionsOverview } from "./components/solutions-overview";

export default function SolutionsPage() {
  const sections = [
    { id: "hero", component: <SolutionsHero />, name: "Hero" },
    {
      id: "solutions-overview",
      component: <SolutionsOverview />,
      name: "Solutions Overview",
    },
    { id: "solutions", component: <SolutionsCards />, name: "Solutions" },
  ];
  return (
    <div>
      <StepScrollContainer sections={sections}></StepScrollContainer>
      <div id="nav-trigger" />
    </div>
  );
}
