import { StepScrollContainer } from "@/components/custom/step-scroll";
import { SolutionsCards } from "./solutions-card";
import SolutionsHero from "./solutions-hero";

export default function SolutionsPage() {
  const sections = [
    { id: "hero", component: <SolutionsHero />, name: "Hero" },
    { id: "solutions", component: <SolutionsCards />, name: "Solutions" },
  ];
  return (
    <div>
      <StepScrollContainer sections={sections}></StepScrollContainer>
      <div id="nav-trigger" />
    </div>
  );
}
