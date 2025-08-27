"use client";
import { Suspense } from "react";
import {
  Shield,
  FileCheck,
  Award,
  CheckCircle,
  Building2,
  Leaf,
  BarChart3,
  Users,
  Globe,
  TrendingUp,
  Star,
  Lightbulb,
  Target,
  AlertTriangle,
  Zap,
  FileText,
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
    title: "Green Building Certifications",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">
          Green Building Certifications
        </h3>
        <p className="text-gray-200 mb-4">
          Facilitate the green building certification for the built environment
          across leading rating systems such as LEED, BREEAM, WELL, TRUE, ILFi,
          ESTIDAMA, EHS TRAKHEESI, DM+B, BEAM, CAAS, and Mostadam. Enable
          high-performance, low-carbon, and resource-efficient buildings.
        </p>
        <div className="flex items-center gap-2">
          <Building2 className="w-6 h-6" />
          <span>Sustainable Building Solutions</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
  {
    id: 2,
    title: "Net-Zero/Carbon Neutral Certifications",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">
          Net-Zero/Carbon Neutral Certifications
        </h3>
        <p className="text-gray-200 mb-4">
          Support the pursuit of net-zero and carbon neutral certifications such
          as LEED Zero, ILFi Zero Carbon, ONE2, Climate Neutral Certified, and
          PAS 2060, and ISO 14068-1. Demonstrable verified climate leadership
          and progress towards decarbonisation goals.
        </p>
        <div className="flex items-center gap-2">
          <Zap className="w-6 h-6" />
          <span>Net-Zero Achievement</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
  {
    id: 3,
    title: "Carbon Registry",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">Carbon Registry</h3>
        <p className="text-gray-200 mb-4">
          Support the development, registration, and verification of carbon
          offset projects in accordance with global standards like Gold Standard
          and Verra. Facilitate the tracking, monitoring, and issuance of carbon
          credits and ensure high quality and integrity.
        </p>
        <div className="flex items-center gap-2">
          <Leaf className="w-6 h-6" />
          <span>Carbon Credits & Offsets</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
  {
    id: 4,
    title: "ISO Certifications",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">ISO Certifications</h3>
        <p className="text-gray-200 mb-4">
          Assist in achieving and maintaining ISO certifications including ISO
          9001 (Quality Management), ISO 14001 (Environmental Management), ISO
          50001 (Energy Management), ISO 14064 (GHG Emissions), ISO 14067
          (Product Carbon Footprint) and ISO 20121 (Sustainable Events).
        </p>
        <div className="flex items-center gap-2">
          <Award className="w-6 h-6" />
          <span>International Standards</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
  {
    id: 5,
    title: "Sector-specific Sustainability Certifications",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">
          Sector-specific Sustainability Certifications
        </h3>
        <p className="text-gray-200 mb-4">
          Deliver certification support for industry-specific standards
          including FIA Environmental Accreditation Programme (motorsports),
          IATA IEnvA (International aviation), Green Globe (sustainable tourism)
          and Travelyst, MSC (sustainable seafood) and FSC (responsible
          forestry).
        </p>
        <div className="flex items-center gap-2">
          <Globe className="w-6 h-6" />
          <span>Industry-Specific Standards</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
  {
    id: 6,
    title: "Environmental Product Declaration (EPD)",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">
          Environmental Product Declaration (EPD)
        </h3>
        <p className="text-gray-200 mb-4">
          Develop and verify EPDs in accordance with international standards
          such as ISO 14025 and EN 15804. Provide transparent, third-party
          verified data on the environmental impact of products across their
          life cycle to support green procurement and eco-design.
        </p>
        <div className="flex items-center gap-2">
          <FileCheck className="w-6 h-6" />
          <span>Product Transparency</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
  {
    id: 7,
    title: "ESG Assurance",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">ESG Assurance</h3>
        <p className="text-gray-200 mb-4">
          Perform independent limited and reasonable assurance of sustainability
          and ESG reports using global standards such as ISAE 3000, ISAE 3410,
          and AA1000. Enhance credibility, improve transparency, and strengthen
          investor confidence of ESG disclosures and non-financial reporting.
        </p>
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6" />
          <span>ESG Report Verification</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
  {
    id: 8,
    title: "GHG Assurance",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">GHG Assurance</h3>
        <p className="text-gray-200 mb-4">
          Provide third-party verification of greenhouse gas (GHG) inventories
          in accordance with ISO 14064 and ISO 14069. Validate Scope 1, 2, and 3
          emissions data with global standards such as the GHG Protocol, IPCC
          Guidelines, and PCAF to support regulatory compliance, climate
          disclosures, and emissions reduction targets.
        </p>
        <div className="flex items-center gap-2">
          <CheckCircle className="w-6 h-6" />
          <span>GHG Verification</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
  {
    id: 9,
    title: "Regulatory Compliance",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">Regulatory Compliance</h3>
        <p className="text-gray-200 mb-4">
          Navigate complex regional and global ESG and climate regulations such
          as UAE Climate Law (Federal Decree-Law No. 11 of 2024), CBAM, EU ETS,
          WFD, EPR, and more. Ensure full compliance in reporting, disclosures,
          supply chain due diligence, carbon reporting and decarbonisation
          mandates.
        </p>
        <div className="flex items-center gap-2">
          <FileText className="w-6 h-6" />
          <span>Compliance Management</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
];

const howItMattersPoints = [
  {
    title: "Demonstrate leadership and transparency",
    description:
      "Independent verification of ESG performance, carbon neutrality, and sustainable practices strengthens brand reputation, stakeholder confidence, and validates corporate responsibility efforts.",
    icon: TrendingUp,
  },
  {
    title: "Stay ahead of evolving regulations",
    description:
      "From net-zero mandates and GHG reporting requirements to green taxonomy and ESG disclosure laws, verified compliance ensures alignment with regional and international regulatory frameworks.",
    icon: Shield,
  },
  {
    title: "Avoid greenwashing and reputational risk",
    description:
      "Verified claims safeguards your brand against scrutiny, litigation, and accusations of greenwashing. Assurance provides the credibility needed to stand behind your sustainability commitments with confidence.",
    icon: AlertTriangle,
  },
  {
    title: "Improve ratings and competitive positioning",
    description:
      "Assured sustainability data improves standing on ESG indices, rating platforms and benchmark evaluations. Investors and stakeholders recognize and reward market leaders.",
    icon: Star,
  },
  {
    title: "Drive operational integrity and performance",
    description:
      "Compliance with sustainability standards and frameworks promote standardized systems, continuous improvement, and resource efficiency, driving operational excellence and long-term value creation.",
    icon: Target,
  },
  {
    title: "Enable credible climate action",
    description:
      "Assured GHG inventories, carbon credits, and net-zero certifications provide a reliable foundation for climate strategies, enabling informed decisions and measurable progress toward decarbonisation goals.",
    icon: Zap,
  },
  {
    title: "Enhance market access and credibility",
    description:
      "Pursuing green building and product certifications, ISO compliance, and industry-specific labels for third-party validated credentials – whether products, spaces, or credibility that appeal to sustainability-conscious customers and markets.",
    icon: Building2,
  },
];

const whyChooseUsPoints = [
  {
    title: "Trusted Verification Partner",
    description:
      "We deliver assurance with the highest standards of independence, technical rigor, and sectoral knowledge. Our team brings third-party verification experience across ESG, climate, and sustainability domains to support compliance and build investor confidence.",
    icon: Shield,
  },
  {
    title: "End-to-End Certification Support",
    description:
      "From gap analysis to project kick-off assessments, evidence gathering, stakeholder engagement, documentation and audit preparation, we guide you through every stage of the certification journey.",
    icon: CheckCircle,
  },
  {
    title: "Compliance With Business Value",
    description:
      "We help transform regulatory requirements into strategic opportunity. Verified sustainability performance enhances brand reputation, improves ESG ratings, and expands market access, delivering measurable and global outcomes.",
    icon: TrendingUp,
  },
  {
    title: "Execution With Precision",
    description:
      "We do not just advise, we deliver. By embedding ourselves in your team, our hands-on approach ensures every milestone is met and that assurance and compliance efforts are delivered on time, with precision and purpose.",
    icon: Target,
  },
  {
    title: "Deep Technical Knowledge",
    description:
      "Our team combines deep expertise in ESG, climate, and regulatory frameworks with real-world delivery experience. Whether it's ISO certification, GHG assurance, or green building ratings, we navigate complex requirements with confidence and clarity.",
    icon: Lightbulb,
  },
  {
    title: "Strategy-Aligned Assurance",
    description:
      "Every assurance project is linked to your broader sustainability strategy. We ensure each report, certification, and disclosure reinforces your ESG narrative and supports long-term transformation.",
    icon: BarChart3,
  },
  {
    title: "Proven Cross-Sector Experience",
    description:
      "From global enterprises to regional leaders, we help clients across multiple sectors achieve third-party validation and meet compliance goals with precision and quality. Our track record is built on trust, agility, and results.",
    icon: Globe,
  },
  {
    title: "Long-Term Partnership Mindset",
    description:
      "We don't stop at validation, we stay with you through audits, reporting cycles, renewals, and strategy evolution. Our commitment to ongoing support ensures you're never navigating your compliance journey alone.",
    icon: Users,
  },
];

const sections = [
  {
    id: "hero",
    component: (
      <HeroSection
        backgroundImage="/service/assurance.png"
        backgroundVideo="/service/assurance.mp4"
        title="Assurance & Compliance"
        subtitle="Solution"
        description="Our Assurance & Compliance services help organizations validate sustainability claims, meet regulatory requirements, and build stakeholder trust through credible third-party verification and certification. We provide independent assurance across various ESG, climate, and sustainability domains, ensuring transparency, accountability, and alignment with global standards."
      />
    ),
    name: "Home",
  },
  {
    id: "what-we-offer",
    component: (
      <WhatWeOfferSection
        title="What We Offer"
        description="Our comprehensive assurance and compliance services provide the verification and certification needed to build stakeholder trust and meet regulatory requirements across sustainability domains."
        services={whatWeOfferServices}
        masterImage="https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        columns={3}
        rows={3}
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
        image="/service/esg.png"
        imageDescription="With rising expectations from regulators, investors, and customers, credible assurance and compliance services are critical for protecting your business, validating impact, and leading with integrity in the transition to a sustainable economy."
      />
    ),
    name: "How It Matters",
  },
  {
    id: "why-choose-us",
    component: (
      <WhyChooseUsSection
        title="Why Choose Us"
        description="We partner with organizations to demonstrate verified sustainability performance, meet rising regulatory expectations, and protect their brand with credibility. Klimalogia empowers our clients by simplifying complex compliance landscapes and bringing credibility into their sustainability journey. Our services are designed to be practical, responsive, and aligned with your business goals, helping you move from intent to verified impact."
        points={whyChooseUsPoints}
        image="/service/consulting.jpg"
        imageDescription="With Klimalogia, you gain a trusted partner committed to credibility, compliance, and client confidence. Let us help you future-proof your sustainability strategy, demonstrate verified impact, and lead with trust in the new era of accountability."
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
      <main className="relative min-h-screen">
        <StepScrollContainer sections={sections} />
      </main>
    </Suspense>
  );
}
