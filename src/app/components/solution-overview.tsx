"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Lightbulb,
  Shield,
  Zap,
  Monitor,
  ChevronRight,
  Plus,
  Minus,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ShimmerButton } from "./shimmer-button";
import { GradientUnderline } from "@/components/custom/gradient-underline";

const colorConfig = {
  blue: {
    text: "text-[var(--brand-blue)]",
    border: "border-[var(--brand-blue)]/20",
    glow: "shadow-[var(--brand-blue)]/25",
    button:
      "linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-blue) 50%, var(--brand-teal) 100%)",
    gradient:
      "from-[var(--brand-blue)]/20 via-[var(--brand-blue)]/10 to-transparent",
    iconGradient: "from-[var(--brand-blue)] to-[var(--brand-navy)]",
  },
  green: {
    text: "text-[var(--brand-green)]",
    border: "border-[var(--brand-green)]/20",
    glow: "shadow-[var(--brand-green)]/25",
    button:
      "linear-gradient(135deg, var(--brand-green) 0%, var(--brand-dark-green) 50%, var(--brand-forest) 100%)",
    gradient:
      "from-[var(--brand-green)]/20 via-[var(--brand-green)]/10 to-transparent",
    iconGradient: "from-[var(--brand-green)] to-[var(--brand-dark-green)]",
  },
  teal: {
    text: "text-[var(--brand-teal)]",
    border: "border-[var(--brand-teal)]/20",
    glow: "shadow-[var(--brand-teal)]/25",
    button:
      "linear-gradient(135deg, var(--brand-light-teal) 0%, var(--brand-teal) 50%, var(--brand-blue) 100%)",
    gradient:
      "from-[var(--brand-teal)]/20 via-[var(--brand-teal)]/10 to-transparent",
    iconGradient: "from-[var(--brand-teal)] to-[var(--brand-blue)]",
  },
  primary: {
    text: "text-[var(--brand-primary)]",
    border: "border-[var(--brand-primary)]/20",
    glow: "shadow-[var(--brand-primary)]/25",
    button:
      "linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-light-teal) 50%, var(--brand-teal) 100%)",
    gradient:
      "from-[var(--brand-primary)]/20 via-[var(--brand-primary)]/10 to-transparent",
    iconGradient: "from-[var(--brand-primary)] to-[var(--brand-light-teal)]",
  },
};

type ColorTheme = keyof typeof colorConfig;

type SolutionCategory = {
  id: string;
  name: string;
  description: string;
  href: string;
  cta: string;
  icon: React.ElementType;
  color: ColorTheme;
  solutions: string[];
};

type SolutionCardProps = {
  card: SolutionCategory;
  index: number;
  isExpanded: boolean;
  isOpen: boolean;
  onClick: () => void;
};

const solutionCategories: SolutionCategory[] = [
  {
    id: "strategy-advisory",
    name: "Strategy & Advisory",
    description: "Shaping your sustainable future from strategy to finance.",
    href: "/services/strategy-advisory",
    cta: "Learn More",
    icon: Lightbulb,
    color: "blue",
    solutions: [
      "Sustainability Strategy",
      "ESG Reporting",
      "ESG Advisory",
      "GHG Accounting",
      "Decarbonization Pathways",
      "Net-Zero Target Setting",
      "Climate Risk Assessment",
      "Climate Transition Plan",
      "Carbon Markets",
      "Sustainable Finance",
      "Sustainability Benchmarking",
    ],
  },
  {
    id: "assurance-compliance",
    name: "Assurance & Compliance",
    description: "Third-party verification and certification you can trust.",
    href: "/services/assurance-compliance",
    cta: "Learn More",
    icon: Shield,
    color: "green",
    solutions: [
      "Green Building Certifications",
      "Net-Zero and Carbon-Neutrality",
      "Carbon Registry",
      "ISO Certifications",
      "Sector-specific Sustainability Certifications",
      "Environmental Product Declaration (EPD)",
      "ESG Assurance",
      "GHG Assurance",
      "Regulatory Compliance",
    ],
  },
  {
    id: "action-integration",
    name: "Action & Integration",
    description: "Implementing tangible changes for real-world impact.",
    href: "/services/action-integration",
    cta: "Learn More",
    icon: Zap,
    color: "teal",
    solutions: [
      "Energy and Utility Audits",
      "Waste Audits and Circular Economy",
      "Environmental Impact Assessments (EIA)",
      "Natura and Biodiversity",
      "Renewable Energy",
      "Environmental Testing",
      "Sustainability Workshops",
    ],
  },
  {
    id: "digital-solutions",
    name: "Digital Solutions",
    description: "Data-driven insights and advanced modeling tools.",
    href: "/services/digital-solutions",
    cta: "Learn More",
    icon: Monitor,
    color: "primary",
    solutions: [
      "Energy Modelling",
      "Solar PV Design and Simulation",
      "Life Cycle Assessment (LCA)",
      "Climate Modelling",
      "Climate Scenario Analysis",
      "Lighting Simulation",
      "Emission Quantification",
      "Customized Digital Solutions",
    ],
  },
];
const springTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  mass: 0.8,
} as const;

const layoutTransition = {
  layout: springTransition,
};

function SolutionCard({
  card,
  index,
  isExpanded,
  isOpen,
  onClick,
}: SolutionCardProps) {
  const theme = colorConfig[card.color];

  return (
    <motion.div
      layoutId={`card-${index}`}
      layout
      transition={layoutTransition}
      onClick={onClick}
      className={cn(
        "cursor-pointer will-change-transform",
        isExpanded ? "col-span-full" : "col-span-1"
      )}
      style={{
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        perspective: 1000,
      }}
    >
      <motion.div
        layout
        transition={layoutTransition}
        className={cn(
          "group relative backdrop-blur-xl rounded-3xl overflow-hidden border bg-white/60 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col will-change-transform",
          theme.border,
          isOpen ? theme.glow : `hover:${theme.glow}`,
          isExpanded ? "min-h-[500px]" : "h-[320px]"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-60 group-hover:opacity-80 transition-opacity duration-300",
            theme.gradient
          )}
        />
        <motion.div
          layout
          transition={layoutTransition}
          className={cn(
            "relative flex-grow flex flex-col",
            isExpanded ? "p-8" : "p-6"
          )}
        >
          <motion.div
            layout
            transition={layoutTransition}
            className="flex justify-between items-start mb-6"
          >
            <motion.div
              layout
              transition={layoutTransition}
              className={cn(
                "rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-lg",
                theme.iconGradient,
                isExpanded ? "w-20 h-20" : "w-14 h-14"
              )}
            >
              <card.icon
                className={cn(
                  "text-white",
                  isExpanded ? "w-10 h-10" : "w-7 h-7"
                )}
              />
            </motion.div>
            <motion.div
              layout
              transition={layoutTransition}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/50 backdrop-blur-sm"
            >
              <motion.div
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? (
                  <Minus className="w-5 h-5" />
                ) : (
                  <Plus className="w-5 h-5" />
                )}
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            layout
            transition={layoutTransition}
            className="flex-grow"
          >
            <motion.h3
              layout
              transition={layoutTransition}
              className={cn(
                "font-bold text-gray-900 mb-4",
                isExpanded ? "text-3xl" : "text-xl"
              )}
            >
              {card.name}
            </motion.h3>
          </motion.div>
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: 1,
                  height: "auto",
                  transition: {
                    duration: 0.4,
                    ease: "easeOut",
                    opacity: { delay: 0.2 },
                  },
                }}
                exit={{ opacity: 0, height: 0, transition: { duration: 0.3 } }}
                className="mb-8"
              >
                <div className="border-t border-gray-300/50 pt-6">
                  <motion.div
                    layout
                    transition={layoutTransition}
                    className={cn(
                      "grid gap-4",
                      isExpanded
                        ? "grid-cols-2 lg:grid-cols-4"
                        : "grid-cols-1 sm:grid-cols-2"
                    )}
                  >
                    {card.solutions.map((solution, idx) => (
                      <motion.div
                        key={solution}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          transition: { delay: 0.3 + idx * 0.03 },
                        }}
                        className="text-sm text-gray-800 flex items-center gap-3 p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-white/30 shadow-sm transition-all duration-300 hover:bg-white/70 hover:shadow-md"
                      >
                        <ChevronRight
                          className={cn("w-4 h-4 flex-shrink-0", theme.text)}
                        />
                        <span className="font-medium">{solution}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <motion.div layout transition={layoutTransition} className="mt-auto">
            <Link href={card.href} className="block z-10">
              <ShimmerButton
                background={theme.button}
                className="w-full group/btn"
              >
                <span className="text-white flex items-center justify-center gap-2 font-medium">
                  {card.cta}
                  <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </span>
              </ShimmerButton>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function SolutionsOverview() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const handleCardClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Logic to separate the expanded card from the rest
  const remainingCards = solutionCategories.filter(
    (_, index) => index !== expandedIndex
  );
  const expandedCard =
    expandedIndex !== null ? solutionCategories[expandedIndex] : null;

  return (
    <section className="py-16 md:py-24 relative overflow-hidden ">
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
          <GradientUnderline underlineWidth={80} spacing={0} className="mb-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              Our Solutions
            </h2>
          </GradientUnderline>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide a comprehensive suite of solutions to guide your
            organization through every stage of its sustainability journey.
          </p>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            layout
            transition={layoutTransition}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {remainingCards.map((card) => {
              const originalIndex = solutionCategories.findIndex(
                (c) => c.id === card.id
              );
              return (
                <SolutionCard
                  key={card.id}
                  card={card}
                  index={originalIndex}
                  isExpanded={false}
                  isOpen={false}
                  onClick={() => handleCardClick(originalIndex)}
                />
              );
            })}
          </motion.div>

          <AnimatePresence>
            {expandedCard && (
              <motion.div
                layout
                transition={layoutTransition}
                className="w-full"
              >
                <SolutionCard
                  key={expandedCard.id}
                  card={expandedCard}
                  index={expandedIndex!}
                  isExpanded={true}
                  isOpen={true}
                  onClick={() => handleCardClick(expandedIndex!)}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
