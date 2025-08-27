"use client";

import { LayoutGrid } from "@/components/ace-ui/layout-grid";
import { GradientUnderline } from "@/components/custom/gradient-underline";
import { motion, useInView, Variants } from "framer-motion";
import React, { useRef } from "react";

interface Service {
  id: number;
  title: string;
  content: React.ReactNode;
  className: string;
}

interface WhatWeOfferSectionProps {
  title: string;
  description: string;
  services: Service[];
  masterImage: string;
  columns?: number;
  rows?: number;
}

const headerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
} as Variants;

const titleVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
} as Variants;

const descriptionVariants = {
  hidden: {
    opacity: 0,
    y: 25,
    filter: "blur(3px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.1,
    },
  },
} as Variants;

const gridContainerVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.1,
    },
  },
} as Variants;

// Decorative elements variants
const floatingElementVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    rotate: -180,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
} as Variants;

// Background reveal variants
const backgroundVariants = {
  hidden: {
    background: "linear-gradient(135deg, #ffffff 0%, #ffffff 100%)",
  },
  visible: {
    background: [
      "linear-gradient(135deg, #ffffff 0%, #ffffff 100%)",
      "linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)",
      "linear-gradient(135deg, #ffffff 0%, #ffffff 100%)",
    ],
    transition: {
      duration: 2,
      ease: "easeInOut",
      delay: 0.5,
    },
  },
} as Variants;

export function WhatWeOfferSection({
  title,
  description,
  services,
  masterImage,
  columns = 4,
  rows = 3,
}: WhatWeOfferSectionProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const calculateGridDimensions = () => {
    const serviceCount = services.length;
    if (serviceCount <= 6) return { cols: 3, rows: 2 };
    if (serviceCount <= 9) return { cols: 3, rows: 3 };
    if (serviceCount <= 12) return { cols: 4, rows: 3 };
    return {
      cols: Math.ceil(Math.sqrt(serviceCount)),
      rows: Math.ceil(serviceCount / Math.ceil(Math.sqrt(serviceCount))),
    };
  };

  const { cols, rows: calculatedRows } = calculateGridDimensions();
  const finalColumns = columns || cols;
  const finalRows = rows || calculatedRows;

  // Split title into words for word-by-word animation
  const titleWords = title.split(" ");

  return (
    <motion.section
      ref={sectionRef}
      variants={backgroundVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="min-h-screen w-full relative py-12 md:py-20 overflow-hidden"
      id="services"
    >
      {/* Animated background elements */}
      <motion.div
        variants={floatingElementVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ delay: 0.8 }}
        className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-2xl"
      />

      <motion.div
        variants={floatingElementVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ delay: 1.2 }}
        className="absolute bottom-40 left-10 w-24 h-24 bg-gradient-to-br from-green-100/30 to-blue-100/30 rounded-full blur-xl"
      />

      <motion.div
        variants={floatingElementVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ delay: 1.5 }}
        className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br from-pink-100/30 to-orange-100/30 rounded-full blur-lg"
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.header
          variants={headerContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div variants={titleVariants}>
            <GradientUnderline underlineWidth={80} spacing={0} className="mb-4">
              <h2 className="text-4xl md:text-5xl font-bold mb-2">
                {titleWords.map((word, index) => (
                  <motion.span
                    key={index}
                    className="inline-block mr-3"
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 30,
                        rotateX: -90,
                        scale: 0.8,
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                        scale: 1,
                        transition: {
                          duration: 0.6,
                          delay: index * 0.1,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        },
                      },
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h2>
            </GradientUnderline>
          </motion.div>

          <motion.p
            variants={descriptionVariants}
            className="text-lg md:text-xl text-gray-600 max-w-7xl text-justify [text-align-last:center] mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        </motion.header>

        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="min-h-screen w-full relative"
        >
          {/* Grid reveal with mask effect */}
          <motion.div
            initial={{
              clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
            }}
            animate={
              isInView
                ? {
                    clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
                  }
                : {
                    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
                  }
            }
            transition={{
              duration: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.3,
            }}
          >
            <LayoutGrid
              cards={services}
              masterImage={masterImage}
              columns={finalColumns}
              rows={finalRows}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
