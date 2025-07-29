"use client"

import { Lightbulb, Shield, Zap, Monitor, CheckCircle } from "lucide-react";
import { BoxReveal } from "./box-reveal";
import { BentoGrid, BentoCard } from "./bento-grid";

import { ShinyButton } from "./shiny-button";
import { MagicCard } from "./magic-card";
import { RippleButton } from "./ripple-button";

const services = [
  {
    title: "Strategy & Advisory",
    color: "blue",
    icon: Lightbulb,
    description:
      "Comprehensive sustainability strategy, ESG reporting, GHG accounting, decarbonization pathways, net-zero target setting, climate risk assessment, and sustainable finance solutions.",
    link: "/services/strategy-advisory",
    features: [
      "Sustainability strategy development",
      "ESG reporting and disclosure",
      "GHG accounting and verification",
      "Decarbonization pathways and net-zero target setting",
      "Climate risk assessment and management",
      "Sustainable finance solutions",
    ],
  },
  {
    title: "Assurance & Compliance",
    color: "green",
    icon: Shield,
    description:
      "Third-party verification and certification across green buildings, carbon neutrality, ISO standards, ESG assurance, GHG verification, and regulatory compliance.",
    link: "/services/assurance-compliance",
    features: [
      "Third-party verification and certification",
      "Green building certification",
      "Carbon neutrality verification",
      "ISO standards certification",
      "ESG assurance and reporting",
      "GHG verification and reporting",
      "Regulatory compliance",
    ],
  },
  {
    title: "Action & Transformation",
    color: "purple",
    icon: Zap,
    description:
      "Implementation services including energy audits, waste management, environmental assessments, renewable energy, biodiversity programs, and sustainability training.",
    link: "/services/action-transformation",
    features: [
      "Energy audits and efficiency improvements",
      "Waste management and reduction",
      "Environmental assessments and permitting",
      "Renewable energy solutions",
      "Biodiversity programs and conservation",
      "Sustainability training and capacity building",
    ],
  },
  {
    title: "Digital Solutions",
    color: "orange",
    icon: Monitor,
    description:
      "Advanced modeling and simulation tools for energy optimization, climate analysis, lifecycle assessment, and data-driven sustainability insights.",
    link: "/services/digital-solutions",
    features: [
      "Energy optimization and simulation",
      "Climate analysis and modeling",
      "Lifecycle assessment and footprinting",
      "Data-driven sustainability insights and reporting",
      "Digital twin and simulation",
      "Artificial intelligence and machine learning",
    ],
  },
];

const colorClasses = {
  blue: "text-blue-500",
  green: "text-green-500",
  purple: "text-purple-500",
  orange: "text-orange-500",
};

export function ServicesOverview() {
  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <BoxReveal width="100%" boxColor="#3b82f6" duration={0.8}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Klimalogia, we deliver end-to-end climate and sustainability
              solutions designed to help your business meet its goals. With deep
              domain expertise and a hands-on approach, we support clients
              across industries and geographies.
            </p>
          </div>
        </BoxReveal>

        <BentoGrid className="mb-16">
          {services.map((service, index) => (
            <BoxReveal key={index} width="100%" boxColor={service.color === "blue" ? "#3b82f6" : service.color === "green" ? "#10b981" : service.color === "purple" ? "#8b5cf6" : "#f97316"} duration={0.8}>
              <MagicCard
                className="h-full"
                gradientColor={
                  service.color === "blue"
                    ? "#3b82f6"
                    : service.color === "green"
                      ? "#10b981"
                      : service.color === "purple"
                        ? "#8b5cf6"
                        : "#f97316"
                }
                gradientOpacity={0.1}
              >
                <BentoCard
                  name={service.title}
                  className="h-full border-0 bg-transparent"
                  background={<div />}
                  Icon={service.icon}
                  description={service.description}
                  href={service.link}
                  cta="Learn More"
                >
                  <div className="flex items-center mb-4">
                    <div
                      className={`p-3 rounded-full bg-gradient-to-br ${service.color === "blue"
                        ? "from-blue-100 to-blue-200"
                        : service.color === "green"
                          ? "from-green-100 to-green-200"
                          : service.color === "purple"
                            ? "from-purple-100 to-purple-200"
                            : "from-orange-100 to-orange-200"
                        } mr-4`}
                    >
                      <service.icon
                        className={`h-8 w-8 ${colorClasses[service.color as keyof typeof colorClasses]
                          }`}
                      />
                    </div>
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
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
                        >
                          <CheckCircle
                            className={`h-4 w-4 ${colorClasses[
                              service.color as keyof typeof colorClasses
                            ]
                              } mr-2 flex-shrink-0`}
                          />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <RippleButton
                    onClick={() => (window.location.href = service.link)}
                    className={`w-full bg-gradient-to-r ${service.color === "blue"
                      ? "from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                      : service.color === "green"
                        ? "from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                        : service.color === "purple"
                          ? "from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
                          : "from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800"
                      }`}
                  >
                    Learn More
                  </RippleButton>
                </BentoCard>
              </MagicCard>
            </BoxReveal>
          ))}
        </BentoGrid>

        <BoxReveal width="100%" boxColor="#6b7280" duration={0.8}>
          <div className="text-center">
            <ShinyButton
              onClick={() => (window.location.href = "/services")}
            >
              View All Services
            </ShinyButton>
          </div>
        </BoxReveal>
      </div>
    </section>
  );
}
