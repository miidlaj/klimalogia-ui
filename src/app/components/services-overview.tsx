"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Lightbulb, Shield, Zap, Monitor, CheckCircle } from "lucide-react";

const services = [
  {
    title: "Strategy & Advisory",
    description:
      "Comprehensive sustainability strategy, ESG reporting, GHG accounting, decarbonization pathways, net-zero target setting, climate risk assessment, and sustainable finance solutions.",
    icon: Lightbulb,
    features: [
      "Sustainability Strategy Design",
      "ESG Reporting & Advisory",
      "GHG Accounting",
      "Decarbonization Pathways",
      "Net-Zero Target Setting",
      "Climate Risk Assessment",
      "Climate Transition Planning",
      "Carbon Markets",
      "Sustainable Finance",
      "Sustainability Benchmarking",
    ],
    link: "/services/strategy-advisory",
  },
  {
    title: "Assurance & Compliance",
    description:
      "Third-party verification and certification across green buildings, carbon neutrality, ISO standards, ESG assurance, GHG verification, and regulatory compliance.",
    icon: Shield,
    features: [
      "Green Building Certifications",
      "Net-Zero & Carbon-Neutrality",
      "Carbon Registry",
      "ISO Certifications",
      "Sector-specific Certifications",
      "Environmental Product Declaration",
      "ESG Assurance",
      "GHG Assurance",
      "Regulatory Compliance",
    ],
    link: "/services/assurance-compliance",
  },
  {
    title: "Action & Transformation",
    description:
      "Implementation services including energy audits, waste management, environmental assessments, renewable energy, biodiversity programs, and sustainability training.",
    icon: Zap,
    features: [
      "Energy and Utility Audits",
      "Waste Audits & Circular Economy",
      "Environmental Impact Assessment",
      "Nature and Biodiversity",
      "Renewable Energy",
      "Environmental Testing",
      "Emission Quantification",
      "Sustainability Workshops",
    ],
    link: "/services/action-transformation",
  },
  {
    title: "Digital Solutions",
    description:
      "Advanced modeling and simulation tools for energy optimization, climate analysis, lifecycle assessment, and data-driven sustainability insights.",
    icon: Monitor,
    features: [
      "Energy Modeling",
      "Solar PV Design & Simulation",
      "Life Cycle Assessment (LCA)",
      "Climate Modeling",
      "Climate Scenario Analysis",
      "Lighting Simulation",
      "Emission Quantification",
      "Customized Digital Solutions",
    ],
    link: "/services/digital-solutions",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Klimalogia, we deliver end-to-end climate and sustainability
            solutions designed to help your business meet its goals. With deep
            domain expertise and a hands-on approach, we support clients across
            industries and geographies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-shadow duration-300 h-full"
            >
              <CardContent className="pt-6 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <service.icon className="h-10 w-10 text-primary mr-4" />
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex-grow">
                  <h4 className="font-semibold mb-3 text-gray-800">
                    Key Services:
                  </h4>
                  <div className="grid grid-cols-1 gap-2 mb-6">
                    {service.features.slice(0, 6).map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 6 && (
                      <div className="text-sm text-gray-500 italic">
                        +{service.features.length - 6} more services
                      </div>
                    )}
                  </div>
                </div>

                <Button asChild className="mt-auto">
                  <Link href={service.link}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
