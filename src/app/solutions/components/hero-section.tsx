"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import HeroBg from "@/components/hero-bg";

interface HeroSectionProps {
  backgroundImage?: string;
  backgroundVideo?: string;
  title: string;
  subtitle: string;
  description: string;
}

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
        <section className="relative z-10 pt-20 pb-16 min-h-screen flex items-center">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <Badge
                variant="outline"
                className="mb-6 text-white border-white/30 bg-white/10 backdrop-blur-sm"
              >
                {subtitle}
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                {title}
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {description}
              </p>
            </motion.div>
          </div>
          <div id="nav-trigger" />
        </section>
      </HeroBg>
    </div>
  );
}
