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
  Users,
  Star,
  Award,
  Lightbulb,
  Building,
  Globe,
  Leaf,
  BarChart3,
  DollarSign,
  Cloud,
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
    title: "Sustainability Strategy",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">Sustainability Strategy</h3>
        <p className="text-gray-200 mb-4">
          Design customized sustainability strategies, policies, and roadmaps
          that integrate environmental, social, and governance (ESG) principles
          into core business operations across the value chain.
        </p>
        <div className="flex items-center gap-2">
          <Target className="w-6 h-6" />
          <span>Strategic Planning & Implementation</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
  {
    id: 2,
    title: "ESG Reporting",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">ESG Reporting</h3>
        <p className="text-gray-200 mb-4">
          Develop ESG and sustainability reports in accordance with leading
          frameworks including GRI, SASB, TCFD, TNFD, CDP, CSRD (ESRS) and ISSB
          (IFRS S1 and S2).
        </p>
        <div className="flex items-center gap-2">
          <FileText className="w-6 h-6" />
          <span>Compliance & Transparency</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
  {
    id: 3,
    title: "ESG Advisory",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">ESG Advisory</h3>
        <p className="text-gray-200 mb-4">
          Identify and implement strategic initiatives to enhance ESG
          performance metrics across eco-social ratings platforms such as MSCI,
          DJSI, Sustainalytics, Bloomberg, and others.
        </p>
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6" />
          <span>Performance Enhancement</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
  {
    id: 4,
    title: "GHG Accounting",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">GHG Accounting</h3>
        <p className="text-gray-200 mb-4">
          Quantify and report Scope 1, Scope 2, and Scope 3 greenhouse gas (GHG)
          emissions in line with standards such as the GHG Protocol, ISO 14064,
          and PCAF.
        </p>
        <div className="flex items-center gap-2">
          <Calculator className="w-6 h-6" />
          <span>Emissions Baseline & Tracking</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
  {
    id: 5,
    title: "Decarbonisation Pathways",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">Decarbonisation Pathways</h3>
        <p className="text-gray-200 mb-4">
          Develop decarbonisation pathways by identifying key drivers and levers
          and determining definitive and quantitative assessments through
          Marginal Abatement Cost (MAC) Curve analysis.
        </p>
        <div className="flex items-center gap-2">
          <Route className="w-6 h-6" />
          <span>Carbon Reduction Strategy</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
  {
    id: 6,
    title: "Net-Zero Target Setting",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">Net-Zero Target Setting</h3>
        <p className="text-gray-200 mb-4">
          Define science-based net-zero targets in line with the Science-Based
          Targets initiative (SBTi), establishing both near-term and long-term
          climate commitments.
        </p>
        <div className="flex items-center gap-2">
          <Zap className="w-6 h-6" />
          <span>Science-Based Targets</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
  {
    id: 7,
    title: "Climate Risk Assessment",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">Climate Risk Assessment</h3>
        <p className="text-gray-200 mb-4">
          Deliver comprehensive assessments of climate-related risks and
          opportunities through quantitative and qualitative assessments of
          physical and transition risks.
        </p>
        <div className="flex items-center gap-2">
          <Cloud className="w-6 h-6" />
          <span>Risk Analysis & Mitigation</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
  {
    id: 8,
    title: "Climate Transition Plan",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">Climate Transition Plan</h3>
        <p className="text-gray-200 mb-4">
          Design comprehensive roadmaps for climate transition that integrates
          science-based targets, decarbonisation strategies, climate risk
          assessments, and regulatory compliance.
        </p>
        <div className="flex items-center gap-2">
          <TrendingUp className="w-6 h-6" />
          <span>Transition Roadmap</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
  {
    id: 9,
    title: "Carbon Markets",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">Carbon Markets</h3>
        <p className="text-gray-200 mb-4">
          Support clients in navigating global compliance and voluntary carbon
          markets, assessing credible carbon credits for offsets, and managing
          in high-quality carbon sequestration projects.
        </p>
        <div className="flex items-center gap-2">
          <Leaf className="w-6 h-6" />
          <span>Carbon Credit Strategy</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
  {
    id: 10,
    title: "Sustainable Finance",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">Sustainable Finance</h3>
        <p className="text-gray-200 mb-4">
          Facilitate the integration of sustainability into financial
          decision-making and capital flows through ESG-linked financing,
          sustainability bonds, green investment strategies, and responsible
          capital allocation.
        </p>
        <div className="flex items-center gap-2">
          <DollarSign className="w-6 h-6" />
          <span>ESG Financial Integration</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
  {
    id: 11,
    title: "Sustainability Benchmarking",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">Sustainability Benchmarking</h3>
        <p className="text-gray-200 mb-4">
          Evaluate sustainability performance against industry peers and global
          best practices to gather insights, identify performance gaps, and
          prioritize opportunities.
        </p>
        <div className="flex items-center gap-2">
          <BarChart3 className="w-6 h-6" />
          <span>Performance Analysis</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
];

const howItMattersPoints = [
  {
    title: "Ensure regulatory compliance",
    description:
      "Meet evolving ESG disclosure mandates, climate response regulations, and sustainability standards across global jurisdictions.",
    icon: Shield,
  },
  {
    title: "Enhance brand value and stakeholder confidence",
    description:
      "Build trust with investors, customers, employees, and regulators through strong ESG performance, transparent disclosures, and commitment to climate action.",
    icon: TrendingUp,
  },
  {
    title: "Strengthen climate resilience and manage risks",
    description:
      "Identify and mitigate physical and transition risks through climate risk assessments, scenario analysis, and climate transition planning aligned with global frameworks.",
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
      "Benchmark sustainability efforts, close performance gaps, and align with industry best practices to meet investor expectations and gain market advantage.",
    icon: Award,
  },
  {
    title: "Unlock sustainable finance and investment",
    description:
      "Access ESG-linked financing, sustainability bonds, and green capital by demonstrating responsible investment strategies and responsible governance that appeal to investors.",
    icon: DollarSign,
  },
  {
    title: "Drive informed decision-making",
    description:
      "Leverage accurate GHG inventories, ESG insights, and climate data to guide strategic planning, capital allocation, and operational transformation.",
    icon: BarChart3,
  },
  {
    title: "Attract and retain talent and customers",
    description:
      "Demonstrate climate leadership and responsible business practices to engage sustainability-conscious stakeholders and future-proof your brand.",
    icon: Users,
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
        backgroundImage="/service/strategy.png"
        backgroundVideo="/service/strategy.mp4"
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
        description="In a rapidly evolving global landscape, integrating sustainability and ESG principles into core business strategy is essential for ensuring long-term success, resilience, and competitiveness. Organizations that embed climate action into their corporate objectives are better positioned to:"
        points={howItMattersPoints}
        image="/service/esg.png"
        imageDescription="Whether advancing your net-zero ambition, meeting ESG reporting standards, or future-proofing your business against climate risks, a clear strategy combined with credible advisory support is critical for creating long-term value and securing your position in the sustainable economy."
      />
    ),
    name: "How It Matters",
  },
  {
    id: "why-choose-us",
    component: (
      <WhyChooseUsSection
        title="Why Choose Us"
        description="Our services extend beyond traditional consulting, with Klimalogia as your dedicated partner in accelerating progress along your sustainability journey. Leveraging deep technical expertise, cross-sector experience, and a forward-thinking approach, we help businesses meet regulatory compliance and unlock strategic advantage through sustainability and ESG leadership. Whether you are setting initial ESG goals or scaling advanced climate strategies, our customized solutions empower clients to drive meaningful impact and lead in climate action."
        points={whyChooseUsPoints}
        image="/service/consulting.jpg"
        imageDescription="With Klimalogia, you gain more than strategy – you gain a partner committed to delivering real results across your sustainability and ESG journey. Let us help you lead with purpose, perform with integrity, and grow with resilience."
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
