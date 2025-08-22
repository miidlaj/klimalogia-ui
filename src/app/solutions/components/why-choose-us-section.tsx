/* eslint-disable @next/next/no-img-element */
"use client";

import { ShimmerButton } from "@/app/components/shimmer-button";
import { HoverEffect } from "@/components/ace-ui/card-hover-effect";
import { GradientBlend } from "@/components/custom/gradient-blend";
import { GradientUnderline } from "@/components/custom/gradient-underline";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

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

  return (
    <div
      className="min-h-screen relative py-20"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <GradientUnderline underlineWidth={80} spacing={0} className="mb-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white">
              {title}
            </h2>
          </GradientUnderline>
          <p className="text-xl text-gray-300 max-w-3xl text-justify [text-align-last:center] mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="mb-12">
          <HoverEffect items={hoverItems} />
        </div>

        {image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 text-center"
          >
            <img
              src={image || "/placeholder.svg"}
              alt="Professional consulting team"
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <p className="text-white/90 mb-6">{imageDescription}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ShimmerButton
                className="w-full sm:w-auto"
                background="linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-blue) 50%, var(--brand-teal) 100%)"
              >
                <Home className="w-4 h-4 mr-2" />
                Schedule Consultation
              </ShimmerButton>
            </div>
          </motion.div>
        )}
      </div>
      <GradientBlend />
    </div>
  );
}
