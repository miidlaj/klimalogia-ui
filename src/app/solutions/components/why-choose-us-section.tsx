"use client";

import { ShimmerButton } from "@/app/components/shimmer-button";
import { GradientUnderline } from "@/components/custom/gradient-underline";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface Point {
  title: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
}

interface WhyChooseUsSectionProps {
  title: string;
  description: string;
  points: Point[];
  image?: string;
  imageDescription?: string;
  backgroundImage?: string;
}

// Enhanced HoverEffect component with reveal animations
const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link?: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  } as Variants;

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  } as Variants;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <motion.a
          key={item?.link || idx}
          variants={cardVariants}
          whileHover={{
            y: -8,
            scale: 1.02,
            transition: { duration: 0.2 },
          }}
          href={item?.link}
          className="relative group block p-2 h-full w-full transform-gpu"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-white/10 backdrop-blur-sm block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  transition: { duration: 0.2, delay: 0.1 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </motion.a>
      ))}
    </motion.div>
  );
};

const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black/40 backdrop-blur-md border border-white/10 group-hover:border-white/30 relative z-20 transition-all duration-300",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.h4
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      viewport={{ once: true }}
      className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}
    >
      {children}
    </motion.h4>
  );
};

const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      viewport={{ once: true }}
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </motion.p>
  );
};

export function WhyChooseUsSection({
  title,
  description,
  points,
  image,
  imageDescription,
  backgroundImage = "/placeholder.svg?height=800&width=1200",
}: WhyChooseUsSectionProps) {
  const hoverItems = points.map((point) => ({
    title: point.title,
    description: point.description,
  }));

  const backgroundVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  } as Variants;

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
      },
    },
  } as Variants;

  const headerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  } as Variants;

  const descriptionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.7,
        ease: "easeOut",
      },
    },
  } as Variants;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="min-h-screen relative py-20 overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        variants={backgroundVariants}
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Animated Overlay */}
      <motion.div
        variants={overlayVariants}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div variants={headerVariants}>
            <GradientUnderline underlineWidth={80} spacing={0} className="mb-4">
              <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white">
                {title}
              </h2>
            </GradientUnderline>
          </motion.div>
          <motion.p
            variants={descriptionVariants}
            className="text-xl text-gray-300 max-w-7xl text-justify [text-align-last:center] mx-auto"
          >
            {description}
          </motion.p>
        </div>

        {/* Cards Section */}
        <div className="mb-12">
          <HoverEffect items={hoverItems} />
        </div>

        {/* Bottom Image Section */}
        {image && (
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              },
            }}
            whileHover={{
              scale: 1.02,
              y: -5,
              transition: { duration: 0.3 },
            }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 text-center transform-gpu"
          >
            <motion.img
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.6,
                  delay: 0.4,
                },
              }}
              viewport={{ once: true }}
              src={image || "/placeholder.svg"}
              alt="Professional consulting team"
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.6,
                },
              }}
              viewport={{ once: true }}
              className="text-white/90 mb-6"
            >
              {imageDescription}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.8,
                  ease: "easeOut",
                },
              }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ShimmerButton
                  className="w-full sm:w-auto"
                  background="linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-blue) 50%, var(--brand-teal) 100%)"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Schedule Consultation
                </ShimmerButton>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
