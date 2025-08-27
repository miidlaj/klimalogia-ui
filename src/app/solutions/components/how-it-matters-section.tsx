"use client";

import { GlowingEffect } from "@/components/ace-ui/glowing-effect";
import { GradientUnderline } from "@/components/custom/gradient-underline";
import { motion, Variants, useInView } from "framer-motion";
import { useRef } from "react";

interface Point {
  title: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
}

interface HowItMattersSectionProps {
  title: string;
  description: string;
  points: Point[];
  image?: string;
  imageDescription?: string;
}

export function HowItMattersSection({
  title,
  description,
  points,
  image,
  imageDescription,
}: HowItMattersSectionProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Dynamic card sizing for uneven layout
  const getCardSizeClass = (index: number, total: number) => {
    const patterns = {
      1: ["col-span-full"],
      2: ["md:col-span-1", "md:col-span-1"],
      3: ["md:col-span-2", "md:col-span-1", "md:col-span-1"],
      4: ["md:col-span-1", "md:col-span-2", "md:col-span-1", "md:col-span-2"],
      5: [
        "md:col-span-2",
        "md:col-span-1",
        "md:col-span-1",
        "md:col-span-2",
        "md:col-span-2",
      ],
      6: [
        "md:col-span-2",
        "md:col-span-1",
        "md:col-span-1",
        "md:col-span-1",
        "md:col-span-1",
        "md:col-span-2",
      ],
    };

    // For more than 6 cards, create a repeating pattern
    if (total > 6) {
      const patternIndex = index % 4;
      const sizes = [
        "md:col-span-2",
        "md:col-span-1",
        "md:col-span-1",
        "md:col-span-2",
      ];
      return sizes[patternIndex];
    }

    return patterns[total as keyof typeof patterns]?.[index] || "md:col-span-1";
  };

  const getCardHeightClass = (index: number, total: number) => {
    const heightPatterns = {
      1: ["min-h-[20rem]"],
      2: ["min-h-[16rem]", "min-h-[18rem]"],
      3: ["min-h-[18rem]", "min-h-[16rem]", "min-h-[20rem]"],
      4: ["min-h-[16rem]", "min-h-[20rem]", "min-h-[18rem]", "min-h-[16rem]"],
      5: [
        "min-h-[18rem]",
        "min-h-[16rem]",
        "min-h-[20rem]",
        "min-h-[16rem]",
        "min-h-[18rem]",
      ],
      6: [
        "min-h-[20rem]",
        "min-h-[16rem]",
        "min-h-[18rem]",
        "min-h-[16rem]",
        "min-h-[20rem]",
        "min-h-[16rem]",
      ],
    };

    // For more than 6 cards, alternate between different heights
    if (total > 6) {
      const heights = [
        "min-h-[16rem]",
        "min-h-[18rem]",
        "min-h-[20rem]",
        "min-h-[16rem]",
      ];
      return heights[index % heights.length];
    }

    return (
      heightPatterns[total as keyof typeof heightPatterns]?.[index] ||
      "min-h-[16rem]"
    );
  };

  // Enhanced animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  } as Variants;

  const headerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  } as Variants;

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  } as Variants;

  const descriptionVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  } as Variants;

  // Grid container with wave reveal
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  } as Variants;

  // Enhanced card animations with multiple reveal styles
  const cardVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      y: 80,
      scale: 0.7,
      rotateX: -25,
      rotateY: index % 2 === 0 ? -15 : 15,
      rotateZ: index % 3 === 0 ? -5 : 5,
      filter: "blur(8px)",
    }),
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 80,
        damping: 20,
      },
    }),
  } as Variants;

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.9,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.08 + 0.4,
        ease: "easeOut",
      },
    }),
  } as Variants;

  const iconVariants = {
    hidden: {
      scale: 0,
      rotate: -360,
      opacity: 0,
    },
    visible: (index: number) => ({
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.08 + 0.6,
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    }),
  } as Variants;

  const hoverVariants = {
    hover: {
      scale: 1.03,
      y: -8,
      rotateY: 2,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.1 },
    },
  } as Variants;

  // Image section variants
  const imageContainerVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
      rotateX: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 1,
        delay: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  } as Variants;

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 1.2,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        delay: 0.3,
      },
    },
  } as Variants;

  // Floating decorative elements
  const floatingVariants = {
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
        duration: 1,
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  } as Variants;

  // Split title into words for individual animation
  const titleWords = title.split(" ");

  return (
    <motion.div
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="min-h-screen py-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        variants={floatingVariants}
        transition={{ delay: 1 }}
        className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"
      />

      <motion.div
        variants={floatingVariants}
        transition={{ delay: 1.3 }}
        className="absolute bottom-32 left-16 w-32 h-32 bg-gradient-to-br from-green-100/20 to-blue-100/20 rounded-full blur-2xl"
      />

      <motion.div
        variants={floatingVariants}
        transition={{ delay: 1.6 }}
        className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-br from-pink-100/20 to-orange-100/20 rounded-full blur-xl"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={headerContainerVariants}
          className="text-center mb-16"
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
                        y: 50,
                        rotateX: -90,
                        scale: 0.8,
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                        scale: 1,
                        transition: {
                          duration: 0.7,
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
            className="text-xl text-gray-600 max-w-7xl text-justify [text-align-last:center] mx-auto"
          >
            {description}
          </motion.p>
        </motion.div>

        <motion.ul
          variants={gridVariants}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 mb-12"
        >
          {points.map((point, index) => (
            <motion.li
              key={point.title}
              custom={index}
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className={`list-none ${getCardSizeClass(
                index,
                points.length
              )} ${getCardHeightClass(index, points.length)}`}
            >
              <motion.div
                variants={hoverVariants}
                className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 transform-gpu perspective-1000"
              >
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 bg-white/80 backdrop-blur-sm">
                  <div className="relative flex flex-1 flex-col justify-between gap-3">
                    <motion.div
                      custom={index}
                      variants={iconVariants}
                      className="w-fit rounded-lg border border-primary/20 bg-primary/10 p-2"
                    >
                      <point.icon className="h-4 w-4 text-primary" />
                    </motion.div>
                    <motion.div
                      custom={index}
                      variants={contentVariants}
                      className="space-y-3"
                    >
                      <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-gray-900 md:text-2xl/[1.875rem]">
                        {point.title}
                      </h3>
                      <p className="font-sans text-sm/[1.125rem] text-gray-600 md:text-base/[1.375rem] [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                        {point.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>

        {image && (
          <motion.div
            variants={imageContainerVariants}
            whileHover={{
              scale: 1.02,
              y: -5,
              rotateY: 1,
              transition: { duration: 0.4 },
            }}
            className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-8 text-center transform-gpu perspective-1000"
          >
            <motion.img
              variants={imageVariants}
              src={image || "/placeholder.svg"}
              alt="ESG impact visualization"
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.6,
                delay: 1.2,
              }}
              className="text-gray-600"
            >
              {imageDescription}
            </motion.p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
