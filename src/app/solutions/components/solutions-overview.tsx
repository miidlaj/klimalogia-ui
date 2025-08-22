"use client";
import { AnimatedTestimonials } from "@/components/ace-ui/animated-testimonial";
import { GradientUnderline } from "@/components/custom/gradient-underline";
import { motion } from "framer-motion";

export function SolutionsOverview() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Strategy & Advisory",
      designation: "",
      src: "/service/strategy.png",
    },
    {
      quote: "Third-party verification and certification you can trust.",
      name: "Assurance & Compliance",
      designation: "",
      src: "/service/assurance.png",
    },
    {
      quote: "Implementing tangible changes for real-world impact.",
      name: "Action & Transformation",
      designation: "",
      src: "/service/action.png",
    },
    {
      quote: "Data-driven insights and advanced modeling tools.",
      name: "Digital Solutions",
      designation: "",
      src: "/service/digital.png",
    },
  ];

  return (
    <div className="min-h-screen w-full relative flex justify-center items-center flex-col py-20 bg-white">
      {/* Teal Glow Top */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(circle at center, var(--brand-light-teal) 0%, transparent 70%)
      `,
          opacity: 0.6,
          mixBlendMode: "multiply",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <GradientUnderline underlineWidth={80} spacing={0} className="mb-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 ">
            Our Solutions
          </h2>
        </GradientUnderline>
        <p className="text-xl max-w-3xl mx-auto">
          We provide a comprehensive suite of solutions to guide your
          organization through every stage of its sustainability journey.
        </p>
      </motion.div>

      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
