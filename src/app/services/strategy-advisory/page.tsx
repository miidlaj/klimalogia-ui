"use client";

import HeroBg from "@/components/hero-bg";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Target,
  FileText,
  TrendingUp,
  BarChart3,
  Shield,
  Thermometer,
  Route,
  Leaf,
  DollarSign,
  Scale,
  CheckCircle,
  Users,
  Globe,
  Award,
  Lightbulb,
  Settings,
  Clock,
  Star,
} from "lucide-react";

const services = [
  {
    title: "Sustainability Strategy Design",
    description:
      "Customized principles operations across the value chain. Align corporate objectives with global climate goals to drive resilience, stakeholder value, and long-term sustainable growth.",
    icon: Target,
  },
  {
    title: "ESG Reporting",
    description:
      "Develop ESG and sustainability reports in accordance with leading frameworks including GRI, SASB, TCFD, TNFD, CDP, CSRD (ESRS) and ISSB (IFRS S1 and S2). Deliver robust materiality assessments, ESG due diligence, and stakeholder engagement.",
    icon: FileText,
  },
  {
    title: "ESG Advisory",
    description:
      "Identify and implement strategic initiatives to enhance ESG performance metrics across recognized rating platforms such as MSCI, DJSI, Sustainalytics, Bloomberg, and others.",
    icon: TrendingUp,
  },
  {
    title: "GHG Accounting",
    description:
      "Quantify and report Scope 1, Scope 2, and Scope 3 greenhouse gas (GHG) emissions in line with global standards such as the GHG Protocol, ISO 14064, IPCC Guidelines, and PCAF.",
    icon: BarChart3,
  },
  {
    title: "Decarbonization Pathways",
    description:
      "Develop decarbonization pathways by identifying key drivers and levers and performing qualitative and quantitative assessments through Marginal Abatement Cost (MAC) Curve analysis.",
    icon: Route,
  },
  {
    title: "Net-Zero Target Setting",
    description:
      "Define science-based net-zero targets in line with the Science Based Targets initiative (SBTi), establishing both near-term and long-term climate commitments that drive decarbonization.",
    icon: Target,
  },
  {
    title: "Climate Risk Assessment",
    description:
      "Deliver comprehensive assessments of climate-related risks and opportunities, through quantitative and qualitative assessments of physical and transition risks.",
    icon: Shield,
  },
  {
    title: "Climate Transition Plan",
    description:
      "Design comprehensive roadmaps for climate transition that integrates science-based targets, decarbonization strategies, climate risk assessments, regulatory compliance, and governance frameworks.",
    icon: Thermometer,
  },
  {
    title: "Carbon Markets",
    description:
      "Support clients in navigating global compliance and voluntary carbon markets, accessing credible carbon credits for offsets, and investing in high-impact decarbonization projects.",
    icon: Leaf,
  },
  {
    title: "Sustainable Finance",
    description:
      "Facilitate the integration of sustainability into financial decision-making and capital flows through ESG-linked financing, sustainability bonds, and green investment strategies.",
    icon: DollarSign,
  },
  {
    title: "Sustainability Benchmarking",
    description:
      "Evaluate sustainability performance against industry peers and global best practices to gather insights, identify performance gaps, and prioritize opportunities.",
    icon: Scale,
  },
];

const benefits = [
  {
    title: "Ensure regulatory compliance",
    description:
      "Meet evolving ESG disclosure mandates, climate response regulations, and sustainability standards across global jurisdictions.",
    icon: CheckCircle,
  },
  {
    title: "Enhance brand value and stakeholder confidence",
    description:
      "Build trust with investors, customers, employees, and regulators through strong ESG performance and transparent disclosures.",
    icon: Users,
  },
  {
    title: "Strengthen climate resilience and manage risks",
    description:
      "Identify and mitigate physical and transition risks through climate risk assessments and scenario analysis.",
    icon: Shield,
  },
  {
    title: "Achieve net-zero and decarbonization goals",
    description:
      "Implement science-based targets, GHG accounting, and decarbonization pathways that reduce corporate carbon footprints.",
    icon: Target,
  },
  {
    title: "Gain competitive edge in low-carbon economy",
    description:
      "Benchmark sustainability efforts, close performance gaps, and align with industry best practices.",
    icon: TrendingUp,
  },
  {
    title: "Unlock sustainable finance and investment",
    description:
      "Access ESG-linked financing, sustainability bonds, and green capital by demonstrating responsible investment strategies.",
    icon: DollarSign,
  },
  {
    title: "Drive informed decision-making",
    description:
      "Leverage accurate GHG inventories, ESG insights, and climate data to guide strategic planning and capital allocation.",
    icon: BarChart3,
  },
  {
    title: "Attract and retain talent and customers",
    description:
      "Demonstrate climate leadership and responsible business practices to engage sustainability-conscious stakeholders.",
    icon: Globe,
  },
];

const whyChooseUs = [
  {
    title: "Specialized Expertise Across Domains",
    description:
      "Our team brings deep, cross-sector expertise in sustainability strategy, ESG reporting, climate risk, net-zero transitions, and sustainable finance.",
    icon: Award,
  },
  {
    title: "Customized Sustainability Solutions",
    description:
      "We develop customized strategies that are tailored to your business model, industry, and stakeholder expectations.",
    icon: Settings,
  },
  {
    title: "Implementation-Driven Advisory",
    description:
      "We serve as a strategic partner, operating as an extension of your team with a strong focus on real-world execution.",
    icon: Lightbulb,
  },
  {
    title: "Integration with Global Frameworks",
    description:
      "We help you navigate complex regulatory landscapes with our deep knowledge of frameworks such as GRI, TCFD, ISSB, CSRD, SBTi, and the Paris Agreement.",
    icon: Globe,
  },
  {
    title: "Drive Stakeholder Confidence",
    description:
      "With robust methodologies and transparent processes, we help you deliver ESG and climate data that stakeholders can trust.",
    icon: Users,
  },
  {
    title: "Climate Focus Business Impact",
    description:
      "Our advisory approach delivers tangible business benefits such as risk mitigation, capital access, operational efficiency, and brand value.",
    icon: TrendingUp,
  },
  {
    title: "Flexibility and Personalized Attention",
    description:
      "We provide the focus and flexibility of a boutique firm with the technical depth and experience of a global advisor.",
    icon: Clock,
  },
  {
    title: "Commitment to Long-Term Partnerships",
    description:
      "We stay with you beyond the strategy phase, supporting your sustainability journey as it evolves.",
    icon: Star,
  },
];

export default function StrategyAdvisoryPage() {
  return (
    <main className="min-h-screen">
      <HeroBg video="/service.mp4" image="/service.jpg">
        <div className="text-center space-y-6 pt-20">
          <h1 className="text-white text-5xl md:text-7xl font-bold">
            Strategy & Advisory<span className="text-primary">.</span>
          </h1>
          <p className="text-gray-200 text-xl md:text-2xl max-w-4xl mx-auto">
            Build a clear path towards climate action and communicate your
            progress with purpose through end-to-end sustainability strategy and
            advisory services.
          </p>
        </div>
      </HeroBg>

      {/* What We Offer Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our Strategy & Advisory services help organizations build a clear
              path towards climate action and communicate their progress with
              purpose. We provide end-to-end support to define sustainability
              goals, develop actionable strategies, and report transparently in
              line with global standards and frameworks.
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
              In a rapidly evolving global landscape, integrating sustainability
              and ESG principles into core business strategy is essential for
              ensuring long-term success, resilience, and competitiveness.
              Organizations that embed climate action into their corporate
              objectives are better positioned to:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              Whether advancing your net-zero ambition, meeting ESG reporting
              standards, or future-proofing your business against climate risks,
              a clear strategy combined with credible advisory support is
              critical for creating long-term value and securing your position
              in the sustainable economy.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our services extend beyond traditional consulting, with Klimalogia
              as your dedicated partner in accelerating progress along your
              sustainability journey. Leveraging deep technical expertise,
              cross-sector experience, and a forward-thinking approach, we help
              businesses meet regulatory compliance and unlock strategic
              advantage through sustainability and ESG leadership.
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
              Ready to Transform Your Sustainability Strategy?
            </h3>
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              With Klimalogia, you gain more than strategy—you gain a partner
              committed to delivering real results across your sustainability
              and ESG journey. Let us help you lead with purpose, perform with
              integrity, and grow with resilience.
            </p>
            <Button asChild size="lg">
              <Link href="/contact-us">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
