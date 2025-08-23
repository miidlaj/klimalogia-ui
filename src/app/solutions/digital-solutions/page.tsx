"use client";

import { Suspense } from "react";
import {
  Target,
  FileText,
  Calculator,
  Route,
  Zap,
  TrendingUp,
  Users,
  Award,
  Lightbulb,
  Mail,
  LineChart,
  Puzzle,
  BrainCircuit,
  Cuboid,
  Sun,
  Recycle,
  CloudDrizzle,
  Code,
} from "lucide-react";
import { HeroSection } from "../components/hero-section";
import { WhatWeOfferSection } from "../components/what-we-offer-section";
import { HowItMattersSection } from "../components/how-it-matters-section";
import { WhyChooseUsSection } from "../components/why-choose-us-section";
import { StepScrollContainer } from "@/components/custom/step-scroll";
import { PageLoader } from "@/app/components/page-loader";
import { Button } from "@/components/ui/button";

const whatWeOfferServices = [
  {
    title: "Energy Modeling",
    description:
      "Optimize building energy performance using advanced simulation tools including EnergyPlus, IES VE, and eQUEST. We perform systems analysis of HVAC systems, envelope design, daylight, and plug-loads to identify energy-saving opportunities, and operational upgrades.",
    icon: Cuboid,

    color: "from-sky-500 to-blue-500",
    thumbnail: "/service/digital.jpg",
  },
  {
    title: "Solar PV Design and Simulation",
    description:
      "Design efficient and cost-effective solar energy systems using PVSyst, Helioscope, and SAM. We perform yield analysis, shading studies, and energy generation simulations to support clean energy transitions, optimize system performance, and reduce lifecycle costs.",
    icon: Sun,
    color: "from-yellow-500 to-orange-500",
    thumbnail: "/service/digital.jpg",
  },
  {
    title: "Life Cycle Assessment (LCA)",
    description:
      "Assess the full environmental impact of products, buildings, and projects using tools like OpenLCA, SimaPro, and OneClick LCA. We conduct cradle-to-grave analysis on key impact categories such as carbon, water, and waste to support EPD development.",
    icon: Recycle,
    color: "from-green-500 to-emerald-500",
    thumbnail: "/service/digital.jpg",
  },
  {
    title: "Climate Modeling",
    description:
      "Use scientific models such as CLIMADA to simulate climate systems and assess long-term climate risks, including extreme weather patterns. We integrate CMIP6, IPCC, and CORDEX scenarios and datasets to inform risk management strategies.",
    icon: CloudDrizzle,
    color: "from-slate-500 to-gray-500",
    thumbnail: "/service/digital.jpg",
  },
  {
    title: "Climate Scenario Analysis",
    description:
      "Evaluate climate-related physical and transition risks and opportunities across operations, assets, and supply chains using tools aligned with TCFD. We conduct scenario-based risk assessments and stress tests to inform investment planning.",
    icon: LineChart,
    color: "from-blue-500 to-indigo-500",
    thumbnail: "/service/digital.jpg",
  },
  {
    title: "Emissions Quantification",
    description:
      "Quantify Scope 1, 2, and 3 emissions using open-source platforms and GHG Protocol calculation tools. We calculate GHG inventories, emissions hotspots identification, product carbon footprints (PCFs), and compliance with GHG emissions reporting standards.",
    icon: Calculator,
    color: "from-red-500 to-rose-500",
    thumbnail: "/service/digital.jpg",
  },
  {
    title: "Customized Digital Solutions",
    description:
      "Offer tailored digital solutions to meet a wide range of sustainability needs. We build custom dashboards, reporting tools, and analytics platforms that enhance decision-making, streamline compliance, and accelerate progress on sustainability targets.",
    icon: Code,
    color: "from-purple-500 to-violet-500",
    thumbnail: "/service/digital.jpg",
  },
  {
    title: "AI & ML for Sustainability",
    description:
      "Leverage artificial intelligence and machine learning to build predictive models for resource consumption, optimize complex systems, and uncover hidden sustainability insights from large datasets, driving smarter and faster climate action.",
    icon: BrainCircuit,
    color: "from-cyan-500 to-teal-500",
    thumbnail: "/service/digital.jpg",
  },
];

const howItMattersPoints = [
  {
    title: "Drive intelligent decision-making",
    description:
      "Digital modeling and simulation tools generate accurate, data-driven insights that support smarter decisions across building design, operations, and sustainability strategy.",
    icon: BrainCircuit,
  },
  {
    title: "Streamline compliance and reporting",
    description:
      "With ESG reporting mandates and climate disclosure laws becoming more stringent, digital tools automate data collection, standardize calculations, and produce audit-ready outputs.",
    icon: FileText,
  },
  {
    title: "Improve performance and reduce costs",
    description:
      "Modeling and simulation tools identify inefficiencies and unlock cost-saving opportunities across buildings, systems, and supply chains.",
    icon: TrendingUp,
  },
  {
    title: "Enable real-time monitoring and adaptive strategy",
    description:
      "Leverage digital platforms for real-time feedback that support adaptive sustainability strategies. Dynamic dashboards help organizations take early action and ensure continuous improvement.",
    icon: LineChart,
  },
  {
    title: "Build Trust and Gain a Competitive Edge",
    description:
      "Use transparent, verified data from tools like LCAs to enhance credibility, meet market standards, accelerate certifications, and unlock access to new financing opportunities and customers.",
    icon: Award,
  },
];

const whyChooseUsPoints = [
  {
    title: "Platform-Agnostic Expertise",
    description:
      "We specialize across leading digital platforms and ensure the right solution is matched to each client's sustainability challenge, business needs, and technology ecosystem.",
    icon: Puzzle,
  },
  {
    title: "Full-Cycle Digital Implementation",
    description:
      "From tool selection to model setup, user onboarding, validation, and user training, we handle the entire digital transformation journey. Our team ensures you get a fully operational solution.",
    icon: Route,
  },
  {
    title: "Deliver Meaningful Insights",
    description:
      "We connect complex simulation outputs into narratives, such as clear business cases, risk assessments, and decarbonisation pathways. This means faster decisions for strategy, procurement, design, and operations teams.",
    icon: Lightbulb,
  },
  {
    title: "Enable Ownership and Capacity Building",
    description:
      "Build in-house capability through structured training, process automation, and clear system documentation, empowering teams to independently manage digital sustainability strategies.",
    icon: Users,
  },
  {
    title: "Technology-Enabled Implementation",
    description:
      "Using smart dashboards and performance visualizations, we connect digital tools to our client's ESG and climate performance. This creates a living data ecosystem that evolves with your goals.",
    icon: Zap,
  },
  {
    title: "We Deliver with Discipline",
    description:
      "Digital strategy is only valuable when implemented with precision. Our multidisciplinary team delivers at speed, backed by quality assurance and technical rigor, ensuring on-time, on-budget execution for every engagement.",
    icon: Target,
  },
];

const GetInTouchSection = () => (
  <section className="relative flex min-h-screen w-full items-center justify-center bg-gray-100 dark:bg-gray-900">
    <div className="container mx-auto px-4 text-center">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-primary/10 p-4 text-primary">
            <Mail className="h-10 w-10" />
          </div>
        </div>
        <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          Get In Touch
        </h2>
        <p className="mb-8 text-lg text-muted-foreground">
          Ready to unlock the full power of digital sustainability? Let us help
          you build a digital foundation that powers your sustainability
          transformation.
        </p>
        <Button size="lg">Contact Us</Button>
      </div>
    </div>
  </section>
);

const sections = [
  {
    id: "hero",
    component: (
      <HeroSection
        backgroundImage="/service/digital.png"
        backgroundVideo="/service/digital.mp4"
        title="Digital Solutions"
        subtitle="Solution"
        description="Our digital solutions enable organizations to harness advanced modeling, simulation, and data tools to quantify sustainability impacts, optimize design performance, and drive informed climate action. We leverage high-performance software and technical expertise to deliver actionable insights that enhance performance, compliance, and strategic planning."
      />
    ),
    name: "Home",
  },
  {
    id: "what-we-offer",
    component: (
      <WhatWeOfferSection
        title="What We Offer"
        description="Our digital solutions enable organizations to harness advanced modeling, simulation, and data tools to quantify sustainability impacts, optimize design performance, and drive informed climate action. We leverage high-performance software and technical expertise to deliver actionable insights that enhance performance, compliance, and strategic planning."
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
        description="Data-driven sustainability is key to unlocking actionable insights, improving environmental performance, and accelerating impact at scale. Digital tools empower organizations to move from assumptions to evidence, enabling them to optimize resources, streamline regulatory compliance, and optimize resource use."
        points={howItMattersPoints}
        image="/service/digital-solutions.png"
        imageDescription="Accelerating sustainability today requires more than ambition; it demands precision, digital intelligence, and data-driven action. Our digital solutions provide the engine behind faster decisions, adaptive strategies, and competitive sustainability leadership."
      />
    ),
    name: "How It Matters",
  },
  {
    id: "why-choose-us",
    component: (
      <WhyChooseUsSection
        title="Why Choose Us"
        description="Our digital solutions deliver smarter decisions, seamless integration and measurable sustainability outcomes across operations. At Klimalogia, our services are engineered to deliver clarity, speed, and strategic advantage. We combine deep technical expertise with a platform-agnostic thinking, and data-driven execution to help clients turn digital tools into strategic enablers of climate action."
        points={whyChooseUsPoints}
        imageDescription="With Klimalogia, you gain the ability to unlock the full power of digital sustainability, powering your transformation. Let us help you build a digital foundation that powers your sustainability transformation."
        backgroundImage="/service/why-choose-us.jpg"
      />
    ),
    name: "Why Choose Us",
  },
  {
    id: "get-in-touch",
    component: <GetInTouchSection />,
    name: "Get in Touch",
  },
];

export default function Page() {
  return (
    <Suspense fallback={<PageLoader />}>
      <main className="relative min-h-screen ">
        <StepScrollContainer sections={sections} />
      </main>
    </Suspense>
  );
}
