"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Lightbulb, Zap, Shield, Monitor, ChevronRight } from "lucide-react";

const colorConfig = {
  blue: {
    text: "text-[var(--brand-blue)]",
    activeBg:
      "bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-navy)]",
    contentBg: "bg-[var(--brand-blue)]/5",
    hoverBorder: "hover:border-[var(--brand-blue)]/50",
  },
  green: {
    text: "text-[var(--brand-green)]",
    activeBg:
      "bg-gradient-to-r from-[var(--brand-green)] to-[var(--brand-dark-green)]",
    contentBg: "bg-[var(--brand-green)]/5",
    hoverBorder: "hover:border-[var(--brand-green)]/50",
  },
  teal: {
    text: "text-[var(--brand-teal)]",
    activeBg:
      "bg-gradient-to-r from-[var(--brand-teal)] to-[var(--brand-blue)]",
    contentBg: "bg-[var(--brand-teal)]/5",
    hoverBorder: "hover:border-[var(--brand-teal)]/50",
  },
  primary: {
    text: "text-[var(--brand-primary)]",
    activeBg:
      "bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-teal)]",
    contentBg: "bg-[var(--brand-primary)]/5",
    hoverBorder: "hover:border-[var(--brand-primary)]/50",
  },
};

const solutionCategories = [
  {
    id: "strategy-advisory",
    name: "Strategy & Advisory",
    icon: Lightbulb,
    color: "blue",
    solutions: [
      "Sustainability Strategy",
      "Climate Risk Assessment",
      "Net-Zero Planning",
      "Circular Economy",
      "ESG Integration",
      "Stakeholder Engagement",
      "Policy Analysis",
      "Carbon Accounting",
    ],
  },
  {
    id: "assurance-compliance",
    name: "Assurance & Compliance",
    icon: Shield,
    color: "green",
    solutions: [
      "GHG Verification",
      "ISO Certification",
      "Green Building Audits",
      "Regulatory Reporting",
    ],
  },
  {
    id: "action-transformation",
    name: "Action & Transformation",
    icon: Zap,
    color: "teal",
    solutions: [
      "Renewable Energy Strategy",
      "Energy Efficiency",
      "Sustainable Supply Chain",
      "Waste Management",
    ],
  },
  {
    id: "digital-solutions",
    name: "Digital Solutions",
    icon: Monitor,
    color: "primary",
    solutions: [
      "AI-Powered Analytics",
      "Digital Carbon Tracking",
      "Lifecycle Assessment",
    ],
  },
];

export function SolutionsOverview() {
  const [activeCategory, setActiveCategory] = useState<string | null>(
    "strategy-advisory"
  );

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 -left-10 w-96 h-96 bg-gradient-to-r from-[var(--brand-blue)]/10 to-[var(--brand-teal)]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 -right-10 w-96 h-96 bg-gradient-to-r from-[var(--brand-green)]/10 to-[var(--brand-primary)]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse animation-delay-2000"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-light-teal)]">
            Our Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide a comprehensive suite of solutions to guide your
            organization through every stage of its sustainability journey.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl shadow-xl overflow-hidden border border-gray-200/50"
        >
          {solutionCategories.map((category) => {
            const theme =
              colorConfig[category.color as keyof typeof colorConfig];
            const isActive = activeCategory === category.id;
            return (
              <div
                key={category.id}
                className="border-b border-gray-200/70 last:border-b-0 bg-white"
              >
                <button
                  className={cn(
                    "w-full flex items-center justify-between px-6 py-5 text-lg font-semibold text-left transition-all duration-300",
                    isActive
                      ? `${theme.activeBg} text-white`
                      : "text-gray-800 hover:bg-gray-50"
                  )}
                  onClick={() =>
                    setActiveCategory(isActive ? null : category.id)
                  }
                >
                  <div className="flex items-center gap-4">
                    <category.icon className="w-6 h-6 flex-shrink-0" />
                    <span>{category.name}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: isActive ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronRight
                      className={cn(
                        "w-6 h-6 transition-colors",
                        isActive ? "text-white/70" : "text-gray-400"
                      )}
                    />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className={cn("overflow-hidden", theme.contentBg)}
                    >
                      <div className="py-8 px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {category.solutions.map((solution, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{
                              opacity: 1,
                              y: 0,
                              transition: { delay: index * 0.05 },
                            }}
                          >
                            <div
                              className={cn(
                                "rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200/60 p-4 text-center text-gray-800 h-full flex items-center justify-center transition-all duration-300 shadow-sm",
                                theme.hoverBorder,
                                "hover:shadow-lg hover:-translate-y-1"
                              )}
                            >
                              {solution}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
