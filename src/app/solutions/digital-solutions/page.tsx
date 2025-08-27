"use client";
import { Suspense } from "react";
import {
  Monitor,
  Database,
  BarChart3,
  Zap,
  Globe,
  Cloud,
  Cpu,
  LineChart,
  Target,
  Shield,
  TrendingUp,
  Users,
  Award,
  Building,
  Leaf,
  Eye,
  Settings,
} from "lucide-react";
import { HeroSection } from "../components/hero-section";
import { WhatWeOfferSection } from "../components/what-we-offer-section";
import { HowItMattersSection } from "../components/how-it-matters-section";
import { WhyChooseUsSection } from "../components/why-choose-us-section";
import { StepScrollContainer } from "@/components/custom/step-scroll";
import { PageLoader } from "@/app/components/page-loader";
import ContactUs from "@/app/components/contact-us";

const whatWeOfferServices = [
  {
    id: 1,
    title: "Energy Modeling",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">Energy Modeling</h3>
        <p className="text-gray-200 mb-4">
          Optimize building energy performance using advanced simulation tools
          including EnergyPlus, IES VE, and eQUEST. Perform dynamic modeling of
          HVAC systems, envelope design, lighting, and renewable energy
          integration.
        </p>
        <div className="flex items-center gap-2">
          <Zap className="w-6 h-6" />
          <span>Energy Performance Optimization</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
  {
    id: 2,
    title: "ESG Data Management",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">ESG Data Management</h3>
        <p className="text-gray-200 mb-4">
          Comprehensive digital platforms for ESG data collection, management,
          and reporting including automated data validation, performance
          tracking, and compliance monitoring across multiple frameworks.
        </p>
        <div className="flex items-center gap-2">
          <Database className="w-6 h-6" />
          <span>Data Integration & Analytics</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
  {
    id: 3,
    title: "Life Cycle Assessment (LCA)",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">Life Cycle Assessment (LCA)</h3>
        <p className="text-gray-200 mb-4">
          Assess the total environmental impact of products, buildings, and
          systems using tools such as SimaPro, GaBi, OpenLCA, and OneClick LCA.
          Evaluate cradle-to-grave environmental impacts and lifecycle costs.
        </p>
        <div className="flex items-center gap-2">
          <Globe className="w-6 h-6" />
          <span>Environmental Impact Analysis</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
  {
    id: 4,
    title: "Climate Modeling",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">Climate Modeling</h3>
        <p className="text-gray-200 mb-4">
          Use climate data and modeling tools such as CLIMADA to simulate
          climate systems and assess long-term climate risks, including extreme
          weather patterns and physical climate impacts.
        </p>
        <div className="flex items-center gap-2">
          <Cloud className="w-6 h-6" />
          <span>Climate Risk Analysis</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
  {
    id: 5,
    title: "Climate Scenario Analysis",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">Climate Scenario Analysis</h3>
        <p className="text-gray-200 mb-4">
          Apply NGFS, IPCC, and RCP-SSP scenarios to assess transition risks and
          opportunities across operations, assets, and supply chains using
          advanced modeling techniques.
        </p>
        <div className="flex items-center gap-2">
          <LineChart className="w-6 h-6" />
          <span>Scenario Planning & Risk Assessment</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
  {
    id: 6,
    title: "Lighting Simulation",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">Lighting Simulation</h3>
        <p className="text-gray-200 mb-4">
          Enhance lighting design for energy performance and visual comfort
          using DIALux. Model indoor and outdoor lighting simulations with
          daylight integration and LED optimization.
        </p>
        <div className="flex items-center gap-2">
          <Eye className="w-6 h-6" />
          <span>Lighting Design Optimization</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
  {
    id: 7,
    title: "Emission Quantification",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">Emission Quantification</h3>
        <p className="text-gray-200 mb-4">
          Quantify Scope 1, 2, and 3 emissions using open-source platforms and
          GHG Protocol calculation tools. Calculate GHG inventories, emissions
          hotspots, and carbon footprints.
        </p>
        <div className="flex items-center gap-2">
          <BarChart3 className="w-6 h-6" />
          <span>Carbon Footprint Analytics</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
  {
    id: 8,
    title: "Renewable Energy & Storage",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">Renewable Energy & Storage</h3>
        <p className="text-gray-200 mb-4">
          Offer tailored digital solutions to meet diverse sustainability
          requirements through embedded tools and platforms that enhance
          decision-making and accelerate progress on sustainability targets.
        </p>
        <div className="flex items-center gap-2">
          <Leaf className="w-6 h-6" />
          <span>Clean Energy Integration</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
  {
    id: 9,
    title: "Sustainability Dashboards",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">Sustainability Dashboards</h3>
        <p className="text-gray-200 mb-4">
          Interactive dashboards and visualization tools for real-time
          monitoring of sustainability KPIs, ESG metrics, and progress tracking
          against targets and benchmarks.
        </p>
        <div className="flex items-center gap-2">
          <Monitor className="w-6 h-6" />
          <span>Real-time Performance Monitoring</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
  {
    id: 10,
    title: "Carbon Management Systems",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">Carbon Management Systems</h3>
        <p className="text-gray-200 mb-4">
          Comprehensive carbon management platforms for emissions tracking,
          offset management, carbon trading, and net-zero pathway monitoring
          with automated reporting capabilities.
        </p>
        <div className="flex items-center gap-2">
          <Target className="w-6 h-6" />
          <span>Carbon Strategy Management</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
  {
    id: 11,
    title: "Digital Twin Solutions",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">Digital Twin Solutions</h3>
        <p className="text-gray-200 mb-4">
          Create digital replicas of physical assets and systems for real-time
          monitoring, predictive analytics, and optimization of energy
          performance and sustainability metrics.
        </p>
        <div className="flex items-center gap-2">
          <Cpu className="w-6 h-6" />
          <span>Digital Asset Optimization</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
];

const howItMattersPoints = [
  {
    title: "Drive informed decision-making",
    description:
      "Digital modeling and simulation tools generate accurate, real-time insights that support smarter decisions across building design, operations, and sustainability strategy.",
    icon: BarChart3,
  },
  {
    title: "Streamline compliance and reporting",
    description:
      "With ESG reporting mandates and climate disclosure laws becoming more rigorous, digital tools streamline data collection, automate calculations, and produce audit-ready outputs.",
    icon: Shield,
  },
  {
    title: "Improve performance and reduce costs",
    description:
      "Simulation and modeling tools identify inefficiencies and unlock cost-saving opportunities across buildings, systems, and supply chains.",
    icon: TrendingUp,
  },
  {
    title: "Enable real-time monitoring and adaptive strategy",
    description:
      "Leverage digital platforms for real-time feedback that support adaptive sustainability strategies and dynamic dashboards for early action on performance against climate goals.",
    icon: Monitor,
  },
  {
    title: "Demonstrate product and project credibility",
    description:
      "Life Cycle Assessments and EPDs provide transparent, third-party verified data on environmental impacts, enhancing credibility with stakeholders and regulators.",
    icon: Award,
  },
  {
    title: "Enhance transparency and stakeholder trust",
    description:
      "With verifiable data and traceable supply chains, digital solutions back sustainability claims with credibility, reinforcing trust among investors and customers.",
    icon: Users,
  },
  {
    title: "Gain market access and competitive edge",
    description:
      "As sustainability standards and financing opportunities grow, digital tools help clients access new markets, accelerate adoption, and position organizations as climate-resilient leaders.",
    icon: Globe,
  },
  {
    title: "Accelerate action towards net-zero goals",
    description:
      "Digital action connects data to action, helping organizations reduce emissions, improve efficiency, and achieve verifiable results in the pursuit of carbon neutrality and climate leadership.",
    icon: Target,
  },
];

const whyChooseUsPoints = [
  {
    title: "Platform-Agnostic Expertise",
    description:
      "We specialize across leading digital platforms and ensure the right solution is matched to each sustainability challenge, tailored to your tech stack and integration needs.",
    icon: Settings,
  },
  {
    title: "Full-Cycle Digital Implementation",
    description:
      "From tool selection to model setup, user onboarding, validation, and user training, we handle the entire digital transformation journey with comprehensive support.",
    icon: Cpu,
  },
  {
    title: "Deliver Meaningful Insights",
    description:
      "We convert complex simulations into intuitive outputs, such as performance dashboards, emissions trends, risk curves, and actionable recommendations for strategic decision-making.",
    icon: Eye,
  },
  {
    title: "Enable Ownership and Capability Building",
    description:
      "Build internal capacity through structured training, process automation, and clear system documentation, empowering teams to independently manage digital sustainability strategies.",
    icon: Building,
  },
  {
    title: "Technology-Enabled Implementation",
    description:
      "Using smart dashboards and performance visualizations, we enable ongoing tracking of ESG metrics and sustainability performance, creating a living data ecosystem integrated with your ERP and operations.",
    icon: BarChart3,
  },
  {
    title: "We Deliver With Discipline",
    description:
      "Digital strategy is only valuable when implemented with precision. Our multidisciplinary team delivers a speed-to-market approach backed by quality assurance and technical rigor.",
    icon: Award,
  },
];

const sections = [
  {
    id: "hero",
    component: (
      <HeroSection
        backgroundImage="/service/digital.png"
        backgroundVideo="/service/digital.mp4"
        title="Digital Solutions"
        subtitle="Solution"
        description="Harness advanced modeling, simulation, and data tools to quantify sustainability impacts, optimize design performance, and drive informed climate action. Transform your sustainability initiatives through cutting-edge digital technologies."
      />
    ),
    name: "Home",
  },
  {
    id: "what-we-offer",
    component: (
      <WhatWeOfferSection
        title="What We Offer"
        description="Our Digital Solutions services enable organizations to harness advanced modeling, simulation, and data tools to quantify sustainability impacts, optimize design performance, and drive informed climate action. By leveraging digital platforms, we help clients gain deeper insights that enhance performance, compliance, and strategic planning."
        services={whatWeOfferServices}
        masterImage="https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        columns={3}
        rows={4}
      />
    ),
    name: "What We Offer",
  },
  {
    id: "how-it-matters",
    component: (
      <HowItMattersSection
        title="How It Matters"
        description="Data-driven sustainability is key to unlocking actionable insights, improving environmental performance, and accelerating impact at scale. Digital tools empower organizations to move from assumptions to evidence, enabling smarter design decisions, seamless regulatory compliance, and optimized resource use. The right digital infrastructure can help organizations to:"
        points={howItMattersPoints}
        image="/service/esg.png"
        imageDescription="Whether optimizing building performance, managing complex supply chains, or tracking progress toward net-zero goals, digital solutions provide the foundation for measurable, impactful, and transparent sustainability transformation."
      />
    ),
    name: "How It Matters",
  },
  {
    id: "why-choose-us",
    component: (
      <WhyChooseUsSection
        title="Why Choose Us"
        description="Digital solutions deliver smarter decisions, seamless integration, and measurable sustainability outcomes across operations. At Klimalogia, our services are engineered to deliver clarity, speed, and strategic advantage. Our team combines deep climate methodology, cross-functional design thinking, and data-driven execution to help clients turn aspirations into strategic enablers of climate action."
        points={whyChooseUsPoints}
        image="/service/consulting.jpg"
        imageDescription="With Klimalogia, you gain a true implementation partner, one who leads with outcomes, builds capacity inside your organization, and delivers change that is technically sound, economically smart, and environmentally meaningful. Let us help you unlock the full power of digital sustainability transformation."
        backgroundImage="/service/why-choose-us.jpg"
      />
    ),
    name: "Why Choose Us",
  },
  {
    id: "get-in-touch",
    component: <ContactUs page={false} />,
    name: "Get In Touch",
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
