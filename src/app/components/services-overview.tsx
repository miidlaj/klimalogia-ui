"use client";

import {
  Lightbulb,
  Shield,
  Zap,
  Monitor,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { BoxReveal } from "./box-reveal";
import { motion } from "framer-motion";
import { ShinyButton } from "./shiny-button";
import { ShimmerButton } from "./shimmer-button";

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

const colorConfig = {
  blue: {
    text: "text-blue-500",
    bg: "from-blue-100/20 to-blue-200/20",
    border: "border-blue-500/20",
    button:
      "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800",
    iconBg: "bg-blue-500/10",
  },
  green: {
    text: "text-green-500",
    bg: "from-green-100/20 to-green-200/20",
    border: "border-green-500/20",
    button:
      "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800",
    iconBg: "bg-green-500/10",
  },
  purple: {
    text: "text-purple-500",
    bg: "from-purple-100/20 to-purple-200/20",
    border: "border-purple-500/20",
    button:
      "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800",
    iconBg: "bg-purple-500/10",
  },
  orange: {
    text: "text-orange-500",
    bg: "from-orange-100/20 to-orange-200/20",
    border: "border-orange-500/20",
    button:
      "bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800",
    iconBg: "bg-orange-500/10",
  },
};

export function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 bg-transparent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-1/4 right-20 w-72 h-72 bg-green-100/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-40 w-72 h-72 bg-purple-100/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <BoxReveal width="100%" boxColor="#3b82f6" duration={0.8}>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                At Klimalogia, we deliver end-to-end climate and sustainability
                solutions designed to help your business meet its goals.
              </p>
              <div className="mt-6 max-w-2xl mx-auto">
                <p className="text-gray-600">
                  With deep domain expertise and a hands-on approach, we support
                  clients across industries and geographies.
                </p>
              </div>
            </motion.div>
          </div>
        </BoxReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => {
            const color =
              colorConfig[service.color as keyof typeof colorConfig];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="h-full"
              >
                <div
                  className={`h-full bg-gradient-to-br ${color.bg} backdrop-blur-xl rounded-2xl overflow-hidden border ${color.border} shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col`}
                >
                  <div className="p-6 flex-grow">
                    <div className="flex items-start mb-5">
                      <div className={`p-3 rounded-xl ${color.iconBg} mr-4`}>
                        <service.icon className={`h-8 w-8 ${color.text}`} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mt-1">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-gray-800">
                        Key Services
                      </h4>
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-start text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200 group"
                          >
                            <CheckCircle
                              className={`h-4 w-4 ${color.text} mr-2 mt-0.5 flex-shrink-0`}
                            />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 flex justify-center">
                    <ShimmerButton
                      background={service.color}
                      onClick={() => (window.location.href = service.link)}
                    >
                      <span className="text-white">Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </ShimmerButton>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <BoxReveal width="100%" boxColor="#6b7280" duration={0.8}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <ShinyButton
              onClick={() => (window.location.href = "/services")}
              className="group"
            >
              <span className="text-black ">Explore All Services</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </ShinyButton>
          </motion.div>
        </BoxReveal>
      </div>
    </section>
  );
}
