"use client";

import type React from "react";
import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Lightbulb, Shield, Zap, Monitor, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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
  onHover: (index: number | null) => void;
  isHovered: boolean;
};

const solutionCategories: SolutionCategory[] = [
  {
    id: "strategy-advisory",
    name: "Strategy & Advisory",
    description: "Shaping your sustainable future from strategy to finance.",
    href: "/solutions/strategy-advisory",
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
    href: "/solutions/assurance-compliance",
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
    id: "action-trasformation",
    name: "Action & Transformation",
    description: "Implementing tangible changes for real-world impact.",
    href: "/solutions/action-transformation",
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
    href: "/solutions/digital-solutions",
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

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 50,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 30,
      mass: 0.8,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 50,
    transition: {
      duration: 0.2,
    },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

function SolutionCard({ card, index, onHover, isHovered }: SolutionCardProps) {
  const theme = colorConfig[card.color];

  return (
    <>
      <motion.div
        className="cursor-pointer will-change-transform"
        onMouseEnter={() => onHover(index)}
        onMouseLeave={() => onHover(null)}
        whileHover={{
          scale: 1.05,
          y: -10,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
      >
        <motion.div
          className={cn(
            "group relative backdrop-blur-2xl rounded-3xl overflow-hidden border bg-white/10 shadow-2xl h-[320px] flex flex-col",
            "hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] hover:bg-white/20 transition-all duration-300",
            "dark:bg-white/5 dark:hover:bg-white/10 dark:[border:1px_solid_rgba(255,255,255,.2)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
            theme.border,
            `hover:${theme.glow}`
          )}
        >
          <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-white/[.05] group-hover:dark:bg-white/[.02]" />

          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br opacity-30 group-hover:opacity-50 transition-opacity duration-300",
              theme.gradient
            )}
          />

          <div className="relative flex-grow flex flex-col z-10 p-6">
            <div className="flex justify-between items-start mb-6">
              <div
                className={cn(
                  "w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-lg transform-gpu transition-all duration-300 ease-in-out",
                  "group-hover:scale-110 group-hover:rotate-12",
                  theme.iconGradient
                )}
              >
                <card.icon className="w-7 h-7 text-white transition-all duration-300 ease-in-out" />
              </div>
            </div>

            <div className="flex-grow">
              <h3 className="text-xl font-bold text-white mb-4 transition-all duration-300 group-hover:text-white/90 group-hover:-translate-y-1">
                {card.name}
              </h3>

              <p className="text-base text-white/80 mb-4 transition-all duration-300 group-hover:text-white/90 group-hover:-translate-y-1">
                {card.description}
              </p>
            </div>

            <div className="mt-auto transform-gpu transition-all duration-300 translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100">
              <Link href={card.href} className="block z-10 ">
                <Button
                  variant="default"
                  className={cn(
                    "w-full group/btn transform-gpu transition-all duration-300 text-white font-medium",
                    "hover:scale-105 hover:shadow-lg",
                    "bg-gradient-to-r"
                  )}
                  style={{
                    background: theme.button,
                  }}
                >
                  <span className="flex items-center justify-center gap-2">
                    {card.cta}
                    <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onMouseEnter={() => onHover(index)}
          >
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
              onClick={() => onHover(null)}
            />

            <motion.div
              className={cn(
                "relative w-full max-w-4xl max-h-[90vh] overflow-y-auto",
                "backdrop-blur-3xl rounded-3xl border bg-white/10 shadow-2xl",
                "dark:bg-white/5 dark:[border:1px_solid_rgba(255,255,255,.2)]",
                theme.border,
                theme.glow
              )}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-20 rounded-3xl",
                  theme.gradient
                )}
              />

              <div className="relative z-10 p-8">
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-6">
                    <div
                      className={cn(
                        "w-20 h-20 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-lg",
                        theme.iconGradient
                      )}
                    >
                      <card.icon className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {card.name}
                      </h3>
                      <p className="text-lg text-white/80">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => onHover(null)}
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20"
                  >
                    <X className="w-5 h-5 text-white cursor-pointer" />
                  </button>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-white mb-6">
                    Our Solutions
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {card.solutions.map((solution, idx) => (
                      <motion.div
                        key={solution}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: { delay: 0.1 + idx * 0.05 },
                        }}
                        className={cn(
                          "text-sm text-white flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-sm",
                          "transform-gpu transition-all duration-300 hover:bg-white/20 hover:shadow-md hover:scale-105"
                        )}
                      >
                        <ChevronRight
                          className={cn("w-4 h-4 flex-shrink-0", theme.text)}
                        />
                        <span className="font-medium">{solution}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center">
                  <Link href={card.href}>
                    <Button
                      size="lg"
                      className={cn(
                        "px-8 py-3 text-white font-medium transform-gpu transition-all duration-300 cursor-pointer",
                        "hover:scale-105 hover:shadow-lg"
                      )}
                      style={{
                        background: theme.button,
                      }}
                    >
                      <span className="flex items-center gap-2">
                        {card.cta}
                        <ChevronRight className="w-5 h-5" />
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function SolutionsCards({ page }: { page?: boolean }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleHover = useCallback((index: number | null) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }

    if (index === null) {
      hoverTimeoutRef.current = setTimeout(() => {
        setHoveredIndex(null);
      }, 100);
    } else {
      setHoveredIndex(index);
    }
  }, []);

  return (
    <section
      className="py-16 md:py-24 relative overflow-hidden flex justify-center items-center min-h-screen"
      style={{
        backgroundImage: `url('/solutions-end.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {!page && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <GradientUnderline underlineWidth={80} spacing={0} className="mb-4">
              <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white">
                Our Solutions
              </h2>
            </GradientUnderline>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              We provide a comprehensive suite of solutions to guide your
              organization through every stage of its sustainability journey.
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutionCategories.map((card, index) => (
            <SolutionCard
              key={card.id}
              card={card}
              index={index}
              onHover={handleHover}
              isHovered={hoveredIndex === index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
