"use client";
import { motion, Variants } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import HeroBg from "@/components/hero-bg";

interface HeroSectionProps {
  backgroundImage?: string;
  backgroundVideo?: string;
  title: string;
  subtitle: string;
  description: string;
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
} as Variants;

const itemVariants = {
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
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
    },
  },
} as Variants;

const titleVariants = {
  hidden: {
    opacity: 0,
    y: 50,
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
    y: 20,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delay: 0.1,
    },
  },
} as Variants;

// Background overlay animation
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
} as Variants;

export function HeroSection({
  backgroundImage = "/solution.png",
  backgroundVideo = "/solution.mp4",
  title,
  subtitle,
  description,
}: HeroSectionProps) {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <HeroBg image={backgroundImage} video={backgroundVideo}>
        {/* Animated overlay */}
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 bg-black/20 z-[5]"
        />

        <section className="relative z-10 pt-20 pb-16 min-h-screen flex items-center">
          <div className="container mx-auto px-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center max-w-4xl mx-auto"
            >
              {/* Badge with reveal animation */}
              <motion.div variants={itemVariants}>
                <Badge
                  variant="outline"
                  className="mb-6 text-white border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300"
                >
                  {subtitle}
                </Badge>
              </motion.div>

              {/* Title with special reveal animation */}
              <motion.h1
                variants={titleVariants}
                className="text-5xl md:text-6xl font-bold mb-6 text-white"
              >
                {/* Split title into words for word-by-word animation */}
                {title.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    className="inline-block mr-3"
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 50,
                        rotateX: -90,
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
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
              </motion.h1>

              {/* Description with blur reveal */}
              <motion.p
                variants={descriptionVariants}
                className="text-xl text-white/90 mb-8 leading-relaxed"
              >
                {description}
              </motion.p>

              {/* Additional floating elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1.2,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
                className="absolute -top-10 -right-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1.5,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
                className="absolute -bottom-5 -left-5 w-16 h-16 bg-white/5 rounded-full blur-xl"
              />
            </motion.div>
          </div>

          <div id="nav-trigger" />
        </section>
      </HeroBg>
    </div>
  );
}
