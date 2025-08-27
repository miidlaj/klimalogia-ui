"use client";
import { Suspense } from "react";
import {
  Shield,
  FileCheck,
  CheckCircle,
  Search,
  ClipboardCheck,
  Users,
  Award,
  AlertTriangle,
  TrendingUp,
  Globe,
  BarChart3,
  DollarSign,
  Eye,
  Lock,
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
    title: "ESG Data Verification",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">ESG Data Verification</h3>
        <p className="text-gray-200 mb-4">
          Independent verification of ESG data and metrics to ensure accuracy,
          completeness, and reliability of sustainability reporting in
          accordance with international assurance standards.
        </p>
        <div className="flex items-center gap-2">
          <FileCheck className="w-6 h-6" />
          <span>Data Accuracy & Integrity</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
  {
    id: 2,
    title: "GHG Emissions Verification",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">GHG Emissions Verification</h3>
        <p className="text-gray-200 mb-4">
          Third-party verification of greenhouse gas emissions inventories
          including Scope 1, 2, and 3 emissions in compliance with ISO 14064 and
          GHG Protocol standards.
        </p>
        <div className="flex items-center gap-2">
          <CheckCircle className="w-6 h-6" />
          <span>Emissions Validation</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
  {
    id: 3,
    title: "Sustainability Reporting Assurance",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">
          Sustainability Reporting Assurance
        </h3>
        <p className="text-gray-200 mb-4">
          Comprehensive assurance services for sustainability reports following
          GRI, SASB, TCFD, TNFD, and CSRD frameworks to enhance credibility and
          stakeholder confidence.
        </p>
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6" />
          <span>Report Credibility</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
  {
    id: 4,
    title: "Regulatory Compliance Assessment",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">
          Regulatory Compliance Assessment
        </h3>
        <p className="text-gray-200 mb-4">
          Comprehensive assessment of compliance with evolving ESG regulations
          including CSRD, EU Taxonomy, SFDR, and other jurisdictional
          requirements across global markets.
        </p>
        <div className="flex items-center gap-2">
          <ClipboardCheck className="w-6 h-6" />
          <span>Regulatory Alignment</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
  {
    id: 5,
    title: "Internal Controls Review",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">Internal Controls Review</h3>
        <p className="text-gray-200 mb-4">
          Evaluation and enhancement of internal controls over sustainability
          data collection, processing, and reporting to ensure robust governance
          and risk management frameworks.
        </p>
        <div className="flex items-center gap-2">
          <Lock className="w-6 h-6" />
          <span>Control Systems</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
  {
    id: 6,
    title: "Supply Chain Compliance",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">Supply Chain Compliance</h3>
        <p className="text-gray-200 mb-4">
          Assessment of supplier ESG performance and compliance with
          sustainability standards, human rights, and environmental regulations
          throughout the value chain.
        </p>
        <div className="flex items-center gap-2">
          <Users className="w-6 h-6" />
          <span>Value Chain Integrity</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
  {
    id: 7,
    title: "Climate Disclosures Verification",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">
          Climate Disclosures Verification
        </h3>
        <p className="text-gray-200 mb-4">
          Independent verification of climate-related financial disclosures,
          scenario analysis, and transition planning in accordance with TCFD and
          ISSB standards.
        </p>
        <div className="flex items-center gap-2">
          <Eye className="w-6 h-6" />
          <span>Climate Transparency</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
  {
    id: 8,
    title: "ESG Rating Optimization",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">ESG Rating Optimization</h3>
        <p className="text-gray-200 mb-4">
          Strategic support to improve ESG ratings and rankings across major
          platforms including MSCI, Sustainalytics, CDP, and DJSI through data
          quality enhancement and disclosure optimization.
        </p>
        <div className="flex items-center gap-2">
          <TrendingUp className="w-6 h-6" />
          <span>Rating Enhancement</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
  {
    id: 9,
    title: "Due Diligence Services",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">Due Diligence Services</h3>
        <p className="text-gray-200 mb-4">
          Comprehensive ESG due diligence for mergers, acquisitions, and
          investments, identifying sustainability risks and opportunities to
          inform strategic decision-making.
        </p>
        <div className="flex items-center gap-2">
          <Search className="w-6 h-6" />
          <span>Risk Assessment</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
  {
    id: 10,
    title: "Green Finance Verification",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">Green Finance Verification</h3>
        <p className="text-gray-200 mb-4">
          Independent verification of green, social, and sustainability bonds,
          loans, and other sustainable finance instruments to ensure compliance
          with relevant standards and frameworks.
        </p>
        <div className="flex items-center gap-2">
          <DollarSign className="w-6 h-6" />
          <span>Finance Integrity</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
  {
    id: 11,
    title: "Certification Support",
    content: (
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">Certification Support</h3>
        <p className="text-gray-200 mb-4">
          Support for achieving and maintaining sustainability certifications
          including ISO 14001, ISO 50001, B-Corp certification, and other
          recognized sustainability standards.
        </p>
        <div className="flex items-center gap-2">
          <Award className="w-6 h-6" />
          <span>Standards Certification</span>
        </div>
      </div>
    ),
    className: "md:col-span-1 row-span-1",
  },
];

const howItMattersPoints = [
  {
    title: "Build stakeholder trust and credibility",
    description:
      "Independent third-party assurance enhances the credibility of your sustainability claims and builds confidence among investors, customers, and regulators.",
    icon: Shield,
  },
  {
    title: "Meet regulatory requirements",
    description:
      "Ensure compliance with evolving ESG regulations including CSRD, EU Taxonomy, SFDR, and other jurisdictional mandates to avoid penalties and legal risks.",
    icon: ClipboardCheck,
  },
  {
    title: "Mitigate reputational and operational risks",
    description:
      "Proactive compliance monitoring and verification helps identify and address potential risks before they impact your business reputation and operations.",
    icon: AlertTriangle,
  },
  {
    title: "Enhance data quality and reliability",
    description:
      "Robust verification processes improve the accuracy and reliability of your ESG data, supporting better decision-making and strategic planning.",
    icon: BarChart3,
  },
  {
    title: "Improve ESG ratings and rankings",
    description:
      "Quality assured data and transparent reporting can positively impact your organization's ESG ratings across major assessment platforms.",
    icon: TrendingUp,
  },
  {
    title: "Access sustainable finance opportunities",
    description:
      "Verified sustainability credentials open doors to green finance options, ESG-linked loans, and sustainable investment opportunities.",
    icon: DollarSign,
  },
  {
    title: "Strengthen internal governance",
    description:
      "Regular compliance assessments and control reviews help build robust internal governance frameworks for sustainability management.",
    icon: Lock,
  },
  {
    title: "Support strategic decision-making",
    description:
      "Reliable assurance and compliance insights provide a solid foundation for informed strategic decisions and risk management.",
    icon: Eye,
  },
];

const whyChooseUsPoints = [
  {
    title: "Independent and Objective Assessment",
    description:
      "Our independent third-party perspective ensures unbiased, objective assessments that enhance the credibility of your sustainability initiatives.",
    icon: Eye,
  },
  {
    title: "Technical Expertise Across Standards",
    description:
      "Deep knowledge of international standards including GRI, SASB, TCFD, ISO 14064, and emerging regulations like CSRD and EU Taxonomy.",
    icon: Award,
  },
  {
    title: "Comprehensive Risk Management",
    description:
      "Holistic approach to identifying, assessing, and mitigating ESG-related risks across all aspects of your business operations.",
    icon: AlertTriangle,
  },
  {
    title: "Global Regulatory Intelligence",
    description:
      "Stay ahead of evolving regulatory landscapes with our deep understanding of ESG compliance requirements across multiple jurisdictions.",
    icon: Globe,
  },
  {
    title: "Technology-Enabled Solutions",
    description:
      "Leverage advanced technology and data analytics to streamline assurance processes and enhance the accuracy of our assessments.",
    icon: BarChart3,
  },
  {
    title: "Continuous Partnership Approach",
    description:
      "Beyond one-time assessments, we provide ongoing support to help you maintain compliance and continuously improve your ESG performance.",
    icon: Users,
  },
];

const sections = [
  {
    id: "hero",
    component: (
      <HeroSection
        backgroundImage="/service/action.png"
        backgroundVideo="/service/action.mp4"
        title="Assurance & Compliance"
        subtitle="Solution"
        description="Ensure the integrity and credibility of your sustainability initiatives with our comprehensive assurance and compliance services. Build stakeholder trust through independent verification and robust compliance frameworks."
      />
    ),
    name: "Home",
  },
  {
    id: "what-we-offer",
    component: (
      <WhatWeOfferSection
        title="What We Offer"
        description="Our Assurance & Compliance services provide independent verification, regulatory compliance support, and robust governance frameworks to ensure the integrity of your sustainability initiatives. We help organizations build stakeholder trust, meet regulatory requirements, and maintain the highest standards of transparency and accountability."
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
        description="In today's business environment, stakeholders demand transparency, accuracy, and accountability in sustainability reporting. Independent assurance and robust compliance frameworks are essential for maintaining credibility and meeting evolving regulatory requirements. Organizations that prioritize assurance and compliance are better positioned to:"
        points={howItMattersPoints}
        image="/service/esg.png"
        imageDescription="Whether ensuring data integrity, meeting regulatory mandates, or building stakeholder confidence, comprehensive assurance and compliance support is fundamental to sustainable business success and long-term value creation."
      />
    ),
    name: "How It Matters",
  },
  {
    id: "why-choose-us",
    component: (
      <WhyChooseUsSection
        title="Why Choose Us"
        description="Our assurance and compliance services go beyond traditional audit approaches. As your trusted partner, we provide comprehensive, technology-enabled solutions that ensure the highest standards of integrity and transparency. With deep expertise across international frameworks and emerging regulations, we help organizations navigate complex compliance landscapes while building robust governance systems that support long-term sustainability success."
        points={whyChooseUsPoints}
        image="/service/consulting.jpg"
        imageDescription="With Klimalogia, you gain a trusted assurance partner committed to maintaining the highest standards of integrity and compliance. Let us help you build stakeholder confidence through transparent, verified, and compliant sustainability practices."
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
