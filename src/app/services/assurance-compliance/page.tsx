"use client";

import HeroBg from "@/components/hero-bg";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Building,
  Leaf,
  Database,
  Award,
  FileCheck,
  ClipboardCheck,
  Shield,
  BarChart3,
  Scale,
  CheckCircle,
  TrendingUp,
  Users,
  Globe,
  Target,
  Settings,
  Clock,
  Star,
} from "lucide-react";

const services = [
  {
    title: "Green Building Certifications",
    description:
      "Facilitate green building certification across leading rating systems such as LEED, BREEAM, WELL, TRUE, ILFI, ESTIDAMA, EHS TRAKHEES, DM Al Safat, GSAS, and Mostadam.",
    icon: Building,
  },
  {
    title: "Net-Zero and Carbon-Neutrality",
    description:
      "Achieve recognition through LEED Zero, ILFI Zero Carbon, GNFZ, Climate Neutral Certified, PAS 2060, and ISO 14068-1 Certification.",
    icon: Leaf,
  },
  {
    title: "Carbon Registry",
    description:
      "Support the development, registration, and verification of carbon offset projects in accordance with global standards like Gold Standard and Verra.",
    icon: Database,
  },
  {
    title: "ISO Certifications",
    description:
      "Assist in achieving ISO certifications including ISO 9001, ISO 14001, ISO 50001, ISO 14064, ISO 14067 and ISO 20121.",
    icon: Award,
  },
  {
    title: "Sector-specific Sustainability Certifications",
    description:
      "Deliver certification support for industry-specific standards including FIA Environmental Accreditation Programme, IATA IEnvA, Green Globe, MSC and others.",
    icon: FileCheck,
  },
  {
    title: "Environmental Product Declaration (EPD)",
    description:
      "Develop and verify EPDs in accordance with international standards such as ISO 14025 and EN 15804.",
    icon: ClipboardCheck,
  },
  {
    title: "ESG Assurance",
    description:
      "Perform independent limited and reasonable assurance of sustainability and ESG reports using global standards such as ISAE 5000, ISAE 3000, and AA1000.",
    icon: Shield,
  },
  {
    title: "GHG Assurance",
    description:
      "Provide third-party verification of greenhouse gas inventories in accordance with ISAE 3410 and ISO 14064.",
    icon: BarChart3,
  },
  {
    title: "Regulatory Compliance",
    description:
      "Navigate complex regional and global ESG and climate regulations such as UAE Climate Law, CBAM, EU ETS, WFD, EPR, and more.",
    icon: Scale,
  },
];

const benefits = [
  {
    title: "Demonstrate leadership and transparency",
    description:
      "Independent verification of ESG performance, carbon neutrality, and sustainable practices strengthens brand reputation and stakeholder confidence.",
    icon: Users,
  },
  {
    title: "Stay ahead of evolving regulations",
    description:
      "Verified compliance ensures alignment with regional and international frameworks while minimizing the risk of legal penalties.",
    icon: CheckCircle,
  },
  {
    title: "Avoid greenwashing and reputational risk",
    description:
      "Verified claims safeguard your brand against scrutiny, litigation, and accusations of greenwashing.",
    icon: Shield,
  },
  {
    title: "Improve ratings and competitive positioning",
    description:
      "Assured sustainability data improves standing on ESG indices, rating platforms, and procurement evaluations.",
    icon: TrendingUp,
  },
  {
    title: "Drive operational integrity and performance",
    description:
      "Compliance with sustainability standards promotes standardized systems, continuous improvement, and resource efficiency.",
    icon: Settings,
  },
  {
    title: "Enable credible climate action",
    description:
      "Assured GHG inventories, carbon credits, and net-zero certifications provide a credible foundation for climate strategies.",
    icon: Target,
  },
  {
    title: "Accelerate product and project credibility",
    description:
      "Green building certifications, ISO compliance, and third-party assurance enhance organizational credibility.",
    icon: Award,
  },
];

const whyChooseUs = [
  {
    title: "Trusted Verification Partner",
    description:
      "We deliver assurance with the highest standards of independence, technical rigor, and sectoral knowledge across ESG, climate, and sustainability domains.",
    icon: Shield,
  },
  {
    title: "End-to-End Certification Support",
    description:
      "From gap analysis to audit preparation, we guide you through every stage of the certification journey.",
    icon: Settings,
  },
  {
    title: "Compliance With Business Value",
    description:
      "We help transform regulatory requirements into strategic opportunity, enhancing brand reputation and improving ESG ratings.",
    icon: TrendingUp,
  },
  {
    title: "Execution With Precision",
    description:
      "Our hands-on approach ensures every milestone is met and that assurance efforts are delivered on time, with precision and purpose.",
    icon: Clock,
  },
  {
    title: "Deep Technical Knowledge",
    description:
      "Our team combines deep expertise in ESG, climate, and regulatory frameworks with real-world delivery experience.",
    icon: Globe,
  },
  {
    title: "Strategy-Aligned Assurance",
    description:
      "Every assurance project is linked to your broader sustainability strategy, reinforcing your ESG narrative.",
    icon: Target,
  },
  {
    title: "Proven Cross-Sector Experience",
    description:
      "We help clients across industries achieve third-party validation and meet compliance goals with precision and confidence.",
    icon: Users,
  },
  {
    title: "Long-Term Partnership Mindset",
    description:
      "We stay with you through audits, reporting cycles, renewals, and strategy evolution.",
    icon: Star,
  },
];

export default function AssuranceCompliancePage() {
  return (
    <main className="min-h-screen">
      <HeroBg video="/service.mp4" image="/service.jpg">
        <div className="text-center space-y-6 pt-20">
          <h1 className="text-white text-5xl md:text-7xl font-bold">
            Assurance & Compliance<span className="text-primary">.</span>
          </h1>
          <p className="text-gray-200 text-xl md:text-2xl max-w-4xl mx-auto">
            Validate sustainability claims, meet regulatory requirements, and
            build stakeholder trust through credible third-party verification
            and certification.
          </p>
        </div>
      </HeroBg>

      {/* What We Offer Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our Assurance & Compliance services help organizations validate
              sustainability claims, meet regulatory requirements, and build
              stakeholder trust through credible third-party verification and
              certification. We provide independent assurance and certification
              support across ESG, climate, and sustainability domains.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow h-full"
              >
                <CardContent className="pt-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 flex-grow">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Matters Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">How It Matters</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              As climate ambition rises and regulatory frameworks tighten,
              credible assurance and verified compliance have become essential
              for business resilience and long-term success. Organizations that
              invest in third-party validation are better equipped to:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow h-full"
              >
                <CardContent className="pt-6 h-full flex flex-col">
                  <benefit.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm flex-grow">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              With rising expectations from regulators, investors, and
              customers, credible assurance and compliance services are critical
              to future-proofing your business, validating impact, and leading
              with integrity in the transition to a sustainable economy.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We partner with organizations to demonstrate verified
              sustainability performance, meet rising regulatory expectations,
              and protect their brand with credibility. Our services are
              designed to be practical, responsive, and aligned with your
              business goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow h-full"
              >
                <CardContent className="pt-6 h-full flex flex-col">
                  <reason.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                  <p className="text-gray-600 text-sm flex-grow">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center bg-primary/5 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Build Trust Through Verification?
            </h3>
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              With Klimalogia, you gain a trusted partner committed to
              credibility, compliance, and client confidence. Let us help you
              future-proof your sustainability strategy, demonstrate verified
              impact, and lead with trust in the new era of accountability.
            </p>
            <Button asChild size="lg">
              <Link href="/contact-us">Start Your Verification Journey</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
