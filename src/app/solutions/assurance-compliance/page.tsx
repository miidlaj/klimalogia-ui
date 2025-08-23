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
  Mail,
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
    title: "Green Building Certifications",
    description:
      "Facilitate green building certification for the built-environment based on globally recognised standards like LEED, BREEAM, WELL, and others. We help embed sustainability into new and existing real estate and infrastructure assets.",
    icon: Building,
    color: "from-emerald-500 to-teal-500",
    thumbnail: "/service/building.jpg",
  },
  {
    title: "Net-Zero and Carbon-Neutrality",
    description:
      "Achieve recognition through leading certifications like ILFI Zero Carbon and PAS 2060. We help you demonstrate verified climate leadership and tangible progress towards global decarbonization goals.",
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
    thumbnail: "/service/building.jpg",
  },
  {
    title: "Carbon Registry",
    description:
      "Support the development, registration, and verification of carbon offset projects in accordance with international standards like Gold Standard and Verra, ensuring the integrity of credits in voluntary and compliance markets.",
    icon: FileText,
    color: "from-purple-500 to-indigo-500",
    thumbnail: "/service/building.jpg",
  },
  {
    title: "ESG Certifications",
    description:
      "Assist in achieving and maintaining key industry ESG certifications, including ISO 14001 (Environmental Management) and ISO 50001 (Energy Management), to strengthen market trust and demonstrate compliance.",
    icon: Award,
    color: "from-green-500 to-emerald-500",
    thumbnail: "/service/building.jpg",
  },
  {
    title: "Environmental Product Declaration (EPD)",
    description:
      "Develop and verify EPDs in accordance with international standards such as ISO 14025 and EN 15804, providing transparent, third-party verified data on the environmental impact of products across their life cycle.",
    icon: Leaf,
    color: "from-yellow-500 to-orange-500",
    thumbnail: "/service/building.jpg",
  },
  {
    title: "ESG & Sustainability Report Assurance",
    description:
      "Perform independent limited and reasonable assurance of sustainability and ESG reports based on standards like AA1000AS and ISAE 3000 to increase credibility and strengthen investor confidence.",
    icon: Shield,
    color: "from-red-500 to-rose-500",
    thumbnail: "/service/building.jpg",
  },
  {
    title: "GHG Emissions Assurance",
    description:
      "Provide third-party verification of greenhouse gas (GHG) inventories in accordance with SAE 3410 and ISO 14064. Validate Scope 1, 2, and 3 emissions data to support regulatory compliance and climate targets.",
    icon: Calculator,
    color: "from-sky-500 to-indigo-500",
    thumbnail: "/service/building.jpg",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Navigate complex regional and global ESG regulations like CBAM, EU ETS, SFDR, and CSRD. We ensure full compliance in reporting, disclosures, supply chain due diligence, and decarbonisation roadmaps.",
    icon: AlertTriangle,
    color: "from-amber-500 to-orange-500",
    thumbnail: "/service/building.jpg",
  },
];

const howItMattersPoints = [
  {
    title: "Enhance Brand Reputation & Stakeholder Trust",
    description:
      "Build confidence with investors, customers, and regulators. Independent verification strengthens your brand, avoids accusations of greenwashing, and substantiates your sustainability commitments.",
    icon: TrendingUp,
  },
  {
    title: "Navigate Regulatory Complexity",
    description:
      "Stay ahead of evolving mandates, from carbon taxes to ESG disclosures. Verified compliance ensures alignment with international frameworks, minimizing legal and financial penalties.",
    icon: Shield,
  },
  {
    title: "Gain a Competitive Edge",
    description:
      "Improve your standing on ESG rating platforms and in procurement evaluations. Assured sustainability data enhances market access, investor appeal, and your overall competitive positioning.",
    icon: Star,
  },
  {
    title: "Drive Operational Excellence",
    description:
      "Promote standardized systems, continuous improvement, and resource efficiency. Complying with rigorous standards drives operational integrity and creates long-term business value.",
    icon: Zap,
  },
  {
    title: "Validate Climate & Project Credibility",
    description:
      "Provide a credible foundation for your climate strategy. Assured GHG inventories, carbon credits, and green building certifications build trust and signal integrity to all partners.",
    icon: Leaf,
  },
];

const whyChooseUsPoints = [
  {
    title: "Trusted Verification Partner",
    description:
      "We deliver assurance with the highest standards of independence, technical rigor, and sector knowledge. Our team brings third-party validation across ESG, climate, and decarbonisation to ensure robust, consistent, and audit-ready data.",
    icon: Users,
  },
  {
    title: "End-to-End Certification Support",
    description:
      "From gap analysis to project kick-off, assessments, evidence compilation, verification statement, and registration, we provide expert guidance and support through every stage of the certification journey.",
    icon: Route,
  },
  {
    title: "Compliance with Business Value",
    description:
      "We help transform regulatory requirements into strategic opportunity. Verified sustainability performance enhances brand reputation, improves ESG ratings, and expands access to capital, customers and global markets.",
    icon: TrendingUp,
  },
  {
    title: "Execution with Precision",
    description:
      "We do not just advise, we deliver. By embedding ourselves in your team, we ensure consistency from the initial baseline to the final audit and that assurance and compliance efforts are delivered on time, with precision and purpose.",
    icon: Target,
  },
  {
    title: "Deep Technical Knowledge",
    description:
      "Our team combines deep expertise in ESG, climate, and regulatory frameworks with real-world delivery experience. Whether it's ISO certification, GHG assurance, or carbon registry submissions, we bring clarity to complexity and deliver with confidence.",
    icon: Lightbulb,
  },
  {
    title: "Strategy-Aligned Assurance",
    description:
      "Every assurance project is linked to your broader sustainability strategy. We ensure each report, certification, and disclosure reinforces your ESG narrative and supports long-term business goals.",
    icon: Award,
  },
  {
    title: "Proven Cross-Sector Experience",
    description:
      "From global enterprises to regional leaders, we help clients across industries turn their climate ambition and compliance goals with practical and proven solutions. Our track record is built on trust, agility, and results.",
    icon: Globe,
  },
  {
    title: "Long-Term Partnership Model",
    description:
      "We don’t stop at validation; we stay with you through audits, reporting cycles, renewals, and strategy evolution. Our commitment is ongoing support ensures you’re never navigating your compliance journey alone.",
    icon: Star,
  },
];

// A simple component for the new "Get in Touch" section
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
          Get in Touch
        </h2>
        <p className="mb-8 text-lg text-muted-foreground">
          Ready to validate your impact? Contact us today to learn how our
          Assurance & Compliance services can help you build trust, ensure
          compliance, and lead with confidence in the sustainable economy.
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
        backgroundImage="/service/assurance.png"
        backgroundVideo="/service/assurance.mp4"
        title="Assurance & Compliance"
        subtitle="Solution"
        description="Navigate the complexities of climate regulations and stakeholder expectations with our trusted assurance and compliance services. We provide independent verification and certification to validate your sustainability claims and strengthen your market credibility."
      />
    ),
    name: "Home",
  },
  {
    id: "what-we-offer",
    component: (
      <WhatWeOfferSection
        title="What We Offer"
        description="Our Assurance & Compliance services help organizations validate sustainability claims, meet regulatory requirements, and build stakeholder trust through credible third-party verification and certification. We provide independent assessments across multiple standards, programs, and domains, ensuring sustainability accountability, and alignment with global standards."
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
        description="As climate ambition rises and regulatory frameworks tighten, credible assurance and verified compliance have become essential for business resilience and long-term success. Organizations that invest in third-party validation of their corporate sustainability efforts are better equipped to:"
        points={howItMattersPoints}
        image="/service/assurance.png"
        imageDescription="With rising expectations from regulators, investors, and customers, credible assurance and compliance services are critical to future-proofing your business, validating impact, and leading with integrity in the transition to a sustainable economy."
      />
    ),
    name: "How It Matters",
  },
  {
    id: "why-choose-us",
    component: (
      <WhyChooseUsSection
        title="Why Choose Us"
        description="We partner with organizations to demonstrate verified sustainability performance, meet rising regulatory expectations, and protect their brand with credibility. Klimalogia empowers our clients by simplifying complex compliance requirements and building confidence with third-party verification. Here's how we help you unlock long-term business value:"
        points={whyChooseUsPoints}
        imageDescription="With Klimalogia, you gain a trusted partner committed to credibility, compliance, and client confidence. Let us help you accelerate your sustainability strategy, demonstrate verified impact, and lead with trust in the new era of accountability."
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
