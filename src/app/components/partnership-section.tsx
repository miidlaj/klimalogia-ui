"use client";

import {
  Handshake,
  Globe,
  TrendingUp,
  Users,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { BoxReveal } from "./box-reveal";
import { ShimmerButton } from "./shimmer-button";
import { motion } from "framer-motion";

const partnershipCards = [
  {
    name: "Strategic Alliances",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-blue-200/30" />
    ),
    Icon: Handshake,
    description:
      "Long-term partnerships built on shared values and mutual success",
    href: "/partner-with-us",
    cta: "Partner Now",
    color: "blue",
  },
  {
    name: "Global Reach",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-green-200/30" />
    ),
    Icon: Globe,
    description:
      "Expand your impact through our international network and expertise",
    href: "/partner-with-us",
    cta: "Learn More",
    color: "green",
  },
  {
    name: "Scalable Impact",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 to-purple-200/30" />
    ),
    Icon: TrendingUp,
    description:
      "Amplify collective impact through combined capabilities and resources",
    href: "/partner-with-us",
    cta: "Explore",
    color: "purple",
  },
  {
    name: "Collaborative Innovation",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100/30 to-orange-200/30" />
    ),
    Icon: Users,
    description:
      "Co-create innovative solutions for complex sustainability challenges",
    href: "/partner-with-us",
    cta: "Collaborate",
    color: "orange",
  },
];

const colorConfig = {
  blue: {
    text: "text-blue-500",
    border: "border-blue-500/20",
    button:
      "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800",
    iconBg: "bg-blue-500/10",
  },
  green: {
    text: "text-green-500",
    border: "border-green-500/20",
    button:
      "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800",
    iconBg: "bg-green-500/10",
  },
  purple: {
    text: "text-purple-500",
    border: "border-purple-500/20",
    button:
      "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800",
    iconBg: "bg-purple-500/10",
  },
  orange: {
    text: "text-orange-500",
    border: "border-orange-500/20",
    button:
      "bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800",
    iconBg: "bg-orange-500/10",
  },
};

export function PartnershipSection() {
  return (
    <section className="py-16 md:py-24 bg-transparent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-blue-100/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-1/3 right-20 w-72 h-72 bg-green-100/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-40 w-72 h-72 bg-purple-100/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <BoxReveal width="100%" boxColor="#3b82f6" duration={0.8}>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
                Strategic Partnerships
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join forces with Klimalogia to create transformative impact
                through strategic collaboration
              </p>
              <div className="mt-6 max-w-2xl mx-auto">
                <p className="text-gray-600">
                  Together, we can achieve more through shared commitment to
                  climate action and sustainability.
                </p>
              </div>
            </motion.div>
          </div>
        </BoxReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {partnershipCards.map((card, index) => {
            const color = colorConfig[card.color as keyof typeof colorConfig];

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
                  className={`h-full backdrop-blur-xl rounded-2xl overflow-hidden border ${color.border} shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col bg-gradient-to-br from-white/30 to-white/50`}
                >
                  <div className="p-6 flex-grow">
                    <div className="flex items-start mb-5">
                      <div className={`p-3 rounded-xl ${color.iconBg} mr-4`}>
                        <card.Icon className={`h-8 w-8 ${color.text}`} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mt-1">
                        {card.name}
                      </h3>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="px-6 pb-6 flex justify-center">
                    <ShimmerButton
                      background={card.color}
                      onClick={() => (window.location.href = card.href)}
                      className={` ${color.button}`}
                    >
                      <span className="text-white flex justify-center items-center gap-1">
                        {card.cta} <ChevronRight className="ml-2 h-4 w-4" />
                      </span>
                    </ShimmerButton>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <BoxReveal width="100%" boxColor="#8b5cf6" duration={0.8}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="backdrop-blur-xl rounded-2xl p-8 text-center border border-blue-200/30 bg-gradient-to-r from-blue-50/30 to-green-50/30 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                Ready to Partner with Us?
              </h3>
              <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                Whether you&apos;re looking to advance sustainability goals,
                strengthen ESG leadership, or create shared impact, we&apos;re
                ready to collaborate and build something meaningful together.
              </p>

              <div className="mt-8 flex flex-col items-center ">
                <ShimmerButton
                  onClick={() => (window.location.href = "/partner-with-us")}
                  className="group shadow-2xl"
                >
                  <span className="text-white">
                    Explore Partnership Opportunities
                  </span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </ShimmerButton>

                <p className="mt-4 text-gray-600 text-sm">
                  Join 100+ organizations already partnering with us for
                  sustainable impact
                </p>
              </div>
            </div>
          </motion.div>
        </BoxReveal>
      </div>
    </section>
  );
}
