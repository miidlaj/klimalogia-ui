"use client";

import HeroBg from "@/components/hero-bg";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Building2,
  Landmark,
  Users,
  Factory,
  Home,
  Banknote,
  Plane,
  Truck,
  Zap,
  Globe,
  Award,
  Target,
  TrendingUp,
  Shield,
  Heart,
} from "lucide-react";
import { ShimmerButton } from "../components/shimmer-button";

const clientTypes = [
  {
    title: "Corporations",
    description:
      "Global enterprises and regional leaders across multiple industries seeking to integrate sustainability into core strategy, operations, and investment decisions.",
    icon: Building2,
    examples: [
      "Fortune 500 Companies",
      "Regional Market Leaders",
      "SMEs & Startups",
      "Family Businesses",
    ],
  },
  {
    title: "Governments",
    description:
      "Public sector organizations and agencies working to implement climate policies, sustainable development initiatives, and regulatory compliance.",
    icon: Landmark,
    examples: [
      "National Governments",
      "Municipal Authorities",
      "Public Agencies",
      "Development Organizations",
    ],
  },
  {
    title: "Institutions",
    description:
      "Educational institutions, non-profits, and international organizations driving climate action and sustainability transformation.",
    icon: Users,
    examples: [
      "Universities & Schools",
      "NGOs & Non-profits",
      "International Organizations",
      "Research Institutions",
    ],
  },
];

const industries = [
  {
    title: "Manufacturing & Industrial",
    description:
      "Energy efficiency, decarbonization, and sustainable operations for manufacturing facilities and industrial complexes.",
    icon: Factory,
    services: [
      "Energy Audits",
      "GHG Accounting",
      "ISO Certifications",
      "Waste Management",
    ],
  },
  {
    title: "Real Estate & Construction",
    description:
      "Green building certifications, sustainable design, and operational optimization for real estate developers and property managers.",
    icon: Home,
    services: [
      "LEED Certification",
      "BREEAM Assessment",
      "Energy Modeling",
      "Sustainability Strategy",
    ],
  },
  {
    title: "Financial Services",
    description:
      "ESG reporting, climate risk assessments, and sustainable finance initiatives for banks, investment firms, and insurance companies.",
    icon: Banknote,
    services: [
      "ESG Reporting",
      "Climate Risk Assessment",
      "Sustainable Finance",
      "ESG Advisory",
    ],
  },
  {
    title: "Transportation & Logistics",
    description:
      "Fleet decarbonization, supply chain sustainability, and emission reduction strategies for transportation companies.",
    icon: Truck,
    services: [
      "Fleet Optimization",
      "Supply Chain Assessment",
      "Carbon Footprinting",
      "Renewable Energy",
    ],
  },
  {
    title: "Aviation & Maritime",
    description:
      "Specialized sustainability solutions for airlines, airports, shipping companies, and port authorities.",
    icon: Plane,
    services: [
      "IATA IEnvA Certification",
      "Carbon Offsetting",
      "Fuel Efficiency",
      "Sustainable Aviation Fuels",
    ],
  },
  {
    title: "Energy & Utilities",
    description:
      "Renewable energy integration, grid optimization, and sustainability reporting for energy companies and utilities.",
    icon: Zap,
    services: [
      "Renewable Energy",
      "Grid Integration",
      "Energy Storage",
      "Sustainability Reporting",
    ],
  },
];

const clientBenefits = [
  {
    title: "Regulatory Compliance",
    description:
      "Stay ahead of evolving ESG disclosure mandates and climate regulations across global jurisdictions.",
    icon: Shield,
  },
  {
    title: "Enhanced Brand Value",
    description:
      "Build trust with stakeholders through transparent sustainability reporting and verified climate action.",
    icon: Award,
  },
  {
    title: "Risk Management",
    description:
      "Identify and mitigate climate-related risks through comprehensive assessments and strategic planning.",
    icon: Target,
  },
  {
    title: "Competitive Advantage",
    description:
      "Gain market positioning through sustainability leadership and ESG performance excellence.",
    icon: TrendingUp,
  },
  {
    title: "Access to Capital",
    description:
      "Unlock sustainable finance opportunities and ESG-linked investment through verified performance.",
    icon: Globe,
  },
  {
    title: "Stakeholder Trust",
    description:
      "Demonstrate commitment to sustainability and build lasting relationships with all stakeholders.",
    icon: Heart,
  },
];

const testimonialPlaceholder = [
  {
    quote:
      "Klimalogia helped us achieve LEED Platinum certification and reduce our energy consumption by 40%. Their expertise and dedication made the difference.",
    company: "Leading Real Estate Developer",
    industry: "Real Estate",
  },
  {
    quote:
      "The ESG reporting framework developed by Klimalogia improved our sustainability rating and enhanced investor confidence significantly.",
    company: "Regional Financial Institution",
    industry: "Financial Services",
  },
  {
    quote:
      "Their comprehensive approach to decarbonization helped us set science-based targets and develop a clear roadmap to net-zero.",
    company: "Manufacturing Corporation",
    industry: "Manufacturing",
  },
];

export default function ClientsPage() {
  return (
    <main className="min-h-screen">
      <HeroBg video="/about.mp4" image="/about.png">
        <div className="text-center space-y-6 pt-20">
          <h1 className="text-white text-5xl md:text-7xl font-bold">
            Our Clients<span className="text-primary">.</span>
          </h1>
          <p className="text-gray-200 text-xl md:text-2xl max-w-4xl mx-auto">
            Trusted by corporations, governments, and institutions worldwide to
            deliver quality, impact, and partnerships that drive sustainable
            solutions
          </p>
        </div>
      </HeroBg>

      {/* Client Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Who We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with diverse organizations across sectors, providing
              tailored sustainability solutions that meet unique challenges and
              objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {clientTypes.map((type, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow h-full"
              >
                <CardContent className="pt-6 h-full flex flex-col">
                  <type.icon className="h-16 w-16 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {type.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Examples:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {type.examples.map((example, idx) => (
                        <li key={idx}>• {example}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cross-sector expertise delivering specialized sustainability
              solutions for diverse industry challenges and requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow h-full"
              >
                <CardContent className="pt-6 h-full flex flex-col">
                  <industry.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {industry.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">
                      Key Services:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.services.map((service, idx) => (
                        <span
                          key={idx}
                          className="bg-primary/10 text-primary text-xs px-2 py-1 rounded"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Clients Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations partner with Klimalogia to unlock strategic
              advantages, meet regulatory requirements, and drive meaningful
              sustainability impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientBenefits.map((benefit, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow h-full"
              >
                <CardContent className="pt-6 h-full flex flex-col">
                  <benefit.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 flex-grow">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Client Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our clients about their sustainability transformation
              journey with Klimalogia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonialPlaceholder.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-4xl text-primary mb-4">&quot;</div>
                  <p className="text-gray-700 mb-4 italic">
                    {testimonial.quote}
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.company}</p>
                    <p className="text-sm text-gray-500">
                      {testimonial.industry}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Portfolio Coming Soon */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Building2 className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              Detailed Client Portfolio Coming Soon
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We&apos;re preparing a comprehensive showcase of our client
              partnerships and success stories. This will include detailed case
              studies, impact metrics, and testimonials from our valued clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact-us">Become Our Client</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/projects">View Our Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Join Our Client Family?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Experience the Klimalogia difference. Let us help you achieve your
              sustainability goals with proven expertise, innovative solutions,
              and dedicated partnership.
            </p>
            <ShimmerButton
              background="linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-blue) 50%, var(--brand-teal) 100%)"
              className="cursor-pointer"
            >
              <Link href="/contact-us">Start Your Sustainability Journey</Link>
            </ShimmerButton>
            <Button asChild size="lg"></Button>
          </div>
        </div>
      </section>
    </main>
  );
}
