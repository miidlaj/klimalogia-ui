"use client";

import { Suspense } from "react";
import {
  Target,
  FileText,
  Shield,
  Calculator,
  Route,
  Zap,
  AlertTriangle,
  TrendingUp,
  DollarSign,
  Users,
  Star,
  Award,
  Lightbulb,
  Building,
  Globe,
  Leaf,
} from "lucide-react";
import { HeroSection } from "../components/hero-section";
import { WhatWeOfferSection } from "../components/what-we-offer-section";
import { HowItMattersSection } from "../components/how-it-matters-section";
import { WhyChooseUsSection } from "../components/why-choose-us-section";
import { StepScrollContainer } from "@/components/custom/step-scroll";

const whatWeOfferServices = [
  {
    title: "Sustainability Strategy",
    description:
      "Design customized sustainability strategies, policies, and roadmaps that integrate environmental, social, and governance (ESG) principles into core business operations across the value chain.",
    icon: Target,
    color: "from-emerald-500 to-teal-500",
    thumbnail: "",
  },
  {
    title: "ESG Reporting",
    description:
      "Develop ESG and sustainability reports in accordance with leading frameworks including GRI, SASB, TCFD, and EU Taxonomy to meet regulatory requirements and enhance transparency.",
    icon: FileText,
    color: "from-blue-500 to-cyan-500",
    thumbnail: "",
  },
  {
    title: "ESG Advisory",
    description:
      "Identify and implement strategic initiatives to enhance ESG performance metrics across environmental, social, and governance dimensions, benchmarks, and value chains.",
    icon: Shield,
    color: "from-purple-500 to-indigo-500",
    thumbnail: "",
  },
  {
    title: "GHG Accounting",
    description:
      "Quantify and report Scope 1, Scope 2, and Scope 3 greenhouse gas (GHG) emissions using GHG Protocol standards to establish credible emissions baseline and inform climate strategy and goal-setting initiatives.",
    icon: Calculator,
    color: "from-green-500 to-emerald-500",
    thumbnail: "",
  },
  {
    title: "Decarbonisation Pathways",
    description:
      "Develop decarbonisation pathways by identifying key drivers and levers for performance standards and sustainable solutions, resulting in a lower corporate carbon footprint.",
    icon: Route,
    color: "from-orange-500 to-red-500",
    thumbnail: "",
  },
  {
    title: "Net-Zero Target Setting",
    description:
      "Define science-based targets, establishing both near-term and long-term climate commitments that drive decarbonisation in line with the Science-Based Targets initiative (SBTi).",
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
    thumbnail: "",
  },
];

const howItMattersPoints = [
  {
    title: "Ensure regulatory compliance",
    description:
      "Meet evolving ESG disclosure mandates, climate response regulations and sustainability reporting requirements.",
    icon: Shield,
  },
  {
    title: "Enhance brand value and stakeholder confidence",
    description:
      "Build trust with investors, customers, employees, and regulators through strong ESG performance and transparent disclosures.",
    icon: TrendingUp,
  },
  {
    title: "Strengthen climate resilience and manage risks",
    description:
      "Identify and mitigate physical and transition risks through robust risk assessments and scenario planning frameworks.",
    icon: AlertTriangle,
  },
  {
    title: "Achieve net-zero and decarbonisation goals",
    description:
      "Implement science-based targets, GHG accounting, and decarbonisation pathways that reduce corporate carbon footprints.",
    icon: Target,
  },
  {
    title: "Gain a competitive edge in the low-carbon economy",
    description:
      "Benchmark sustainability efforts, close performance gaps, and align industry practices with market opportunities.",
    icon: Award,
  },
  {
    title: "Unlock sustainable finance and investment",
    description:
      "Access ESG-linked financing, sustainability bonds, and green capital by demonstrating responsible investment strategies.",
    icon: DollarSign,
  },
];

const whyChooseUsPoints = [
  {
    title: "Specialized Expertise Across Domains",
    description:
      "Our team brings deep, cross-sector expertise in sustainability, ESG strategy, climate risk, net-zero and sustainable finance.",
    icon: Users,
  },
  {
    title: "Customized Sustainability Solutions",
    description:
      "Every organization has distinct challenges and priorities. We develop bespoke solutions tailored to your business context.",
    icon: Lightbulb,
  },
  {
    title: "Implementation-Driven Advisory",
    description:
      "We serve as a strategic partner, operating as an extension of your team to ensure relevant and actionable transformation.",
    icon: Building,
  },
  {
    title: "Integrated Global Frameworks and Regulations",
    description:
      "We help you navigate complex regulatory landscapes with confidence, leveraging our deep knowledge of frameworks.",
    icon: Globe,
  },
  {
    title: "Drive Stakeholder Confidence",
    description:
      "With robust methodologies and transparent processes, we help you achieve ESG goals and strengthen your market credibility.",
    icon: Star,
  },
  {
    title: "Climate Focus Business Impact",
    description:
      "Our advisory approach is built on delivering tangible business benefits while driving meaningful climate action.",
    icon: Leaf,
  },
];

const sections = [
  {
    id: "hero",
    component: (
      <HeroSection
        backgroundImage="/service/stratergy.jpg"
        backgroundVideo=""
        title="Strategy & Advisory"
        subtitle="Solution"
        description="Transform your organization with our expert strategy and advisory services. From ESG reporting to net-zero planning, we provide the expertise you need to thrive in a sustainable future."
      />
    ),
    name: "Home",
  },
  {
    id: "what-we-offer",
    component: (
      <WhatWeOfferSection
        title="What We Offer"
        description="Our Strategy & Advisory services help organizations build a clear path towards climate action and competitive advantage with sustainable solutions that provide support for both develop actionable strategies, and report transparently in line with global standards and frameworks."
        services={whatWeOfferServices}
      />
    ),
    name: "What We Offer",
  },
  {
    id: "how-it-matters",
    component: (
      <HowItMattersSection
        title="How It Matters"
        description="In a rapidly evolving global landscape, integrating sustainability and ESG principles into core business strategy is essential for ensuring long-term success, resilience, and competitiveness."
        points={howItMattersPoints}
        image="/service/esg.png"
        imageDescription="Whether advancing your net zero ambitions, meeting ESG reporting standards, or future-proofing your business against climate risks, a clear strategy combined with credible advisory support is critical for creating long-term value and securing your position in the sustainable economy."
      />
    ),
    name: "How It Matters",
  },
  {
    id: "why-choose-us",
    component: (
      <WhyChooseUsSection
        title="Why Choose Us"
        description="Our services extend beyond traditional consulting, with Klimalogia as your dedicated partner in accelerating progress along your sustainability journey."
        points={whyChooseUsPoints}
        image="/service/consulting.jpg"
        imageDescription="With Klimalogia, you gain more than strategy – you gain a partner committed to delivering real results across your sustainability and ESG journey. Let us help you lead with purpose, perform with integrity, and grow with resilience."
        backgroundImage="/service/why-choose-us.jpg"
      />
    ),
    name: "Why Choose Us",
  },
];

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="relative min-h-screen bg-white">
        <StepScrollContainer sections={sections} />
      </main>
    </Suspense>
  );
}
