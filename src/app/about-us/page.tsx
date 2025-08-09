"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, ElementType } from "react";
import { Globe, Users, Target, Award } from "lucide-react";
import { GradientUnderline } from "@/components/custom/gradient-underline";
import { cn } from "@/lib/utils";
import { ShimmerButton } from "../components/shimmer-button";
import { TypingAnimation } from "@/components/magic-ui/typing-animation";
import Logo from "@/components/logo";

const colorConfig = {
  blue: {
    text: "text-[var(--brand-blue)]",
    border: "border-[var(--brand-blue)]/20",
    glow: "shadow-[var(--brand-blue)]/25",
    gradient: "from-[var(--brand-blue)]/20 to-transparent",
    iconGradient: "from-[var(--brand-blue)] to-[var(--brand-navy)]",
  },
  green: {
    text: "text-[var(--brand-green)]",
    border: "border-[var(--brand-green)]/20",
    glow: "shadow-[var(--brand-green)]/25",
    gradient: "from-[var(--brand-green)]/20 to-transparent",
    iconGradient: "from-[var(--brand-green)] to-[var(--brand-dark-green)]",
  },
  teal: {
    text: "text-[var(--brand-teal)]",
    border: "border-[var(--brand-teal)]/20",
    glow: "shadow-[var(--brand-teal)]/25",
    gradient: "from-[var(--brand-teal)]/20 to-transparent",
    iconGradient: "from-[var(--brand-teal)] to-[var(--brand-blue)]",
  },
  primary: {
    text: "text-[var(--brand-primary)]",
    border: "border-[var(--brand-primary)]/20",
    glow: "shadow-[var(--brand-primary)]/25",
    gradient: "from-[var(--brand-primary)]/20 to-transparent",
    iconGradient: "from-[var(--brand-primary)] to-[var(--brand-light-teal)]",
  },
};

// --- THIS IS THE FIX ---
// 1. Define a type for the keys of colorConfig
type ColorTheme = keyof typeof colorConfig;

// 2. Define the shape of a single value card object
type ValueCardData = {
  icon: ElementType;
  title: string;
  description: string;
  color: ColorTheme; // Use the specific type here
};

// 3. Apply the new type to the valueCards array
const valueCards: ValueCardData[] = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "International presence with local expertise",
    color: "blue",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Multidisciplinary professionals with deep technical expertise",
    color: "green",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Measurable outcomes and tangible impact for every client",
    color: "teal",
  },
  {
    icon: Award,
    title: "Trusted Partner",
    description: "Quality, integrity, and long-term partnerships",
    color: "primary",
  },
];

const ValueCard = ({
  icon: Icon,
  title,
  description,
  delay,
  color,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
  color: ColorTheme; // Use the specific type here as well
}) => {
  const theme = colorConfig[color];
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay }}
      className="group h-full"
    >
      <div
        className={cn(
          "relative h-full text-center overflow-hidden p-8 rounded-3xl bg-white/60 backdrop-blur-md border shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1",
          theme.border,
          `hover:${theme.glow}`
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-60 group-hover:opacity-80 transition-opacity duration-500",
            theme.gradient
          )}
        />
        <div className="relative z-10 flex flex-col items-center h-full">
          <div
            className={cn(
              "w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white shadow-md transition-transform duration-500 group-hover:scale-110",
              theme.iconGradient
            )}
          >
            <Icon className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function AboutPage() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay was prevented:", error);
      });
    }
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 relative pb-32">
      <section className="relative h-[60vh] flex items-center justify-center">
        {!isVideoLoaded && (
          <Image
            src="/about.png"
            alt="Nature background"
            fill
            className="object-cover"
            priority
          />
        )}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/about.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold bg-clip-text text-white flex flex-col justify-center items-center"
          >
            <TypingAnimation className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Welcome to
            </TypingAnimation>
            <Logo variant="white" height={85} width={280} />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-gray-200 text-xl md:text-2xl"
          >
            Your Global Partner in Climate Action and Sustainable Transformation
          </motion.p>
        </div>
      </section>
        <div id="nav-trigger" />

      <section className="py-20 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 -left-10 w-96 h-96 bg-gradient-to-r from-[var(--brand-blue)]/10 to-[var(--brand-teal)]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-0 -right-10 w-96 h-96 bg-gradient-to-r from-[var(--brand-green)]/10 to-[var(--brand-primary)]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse [animation-delay:1200ms]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-8 text-justify"
          >
            <p>
              Klimalogia is an international climate change and sustainability
              firm, dedicated to helping organizations navigate the transition
              to a low-carbon, climate-resilient future. Inspired by the Greek
              term klimatologia, the study of climate, our name reflects our
              mission to translate climate science into practical, actionable
              solutions for organizations worldwide.
            </p>
            <p>
              We are a multidisciplinary team with global insight, delivering
              end-to-end sustainability and climate change solutions. Through
              technical depth and strategic insight, we help you integrate
              climate action into business decisions and future-proof
              operations. Trusted by corporations, governments, and
              institutions, we are known for quality, impact, and partnerships
              that drive sustainable solutions and credible ESG leadership.
            </p>
          </motion.div>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueCards.map((card, index) => (
              <ValueCard key={card.title} {...card} delay={0.1 * (index + 1)} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-20 text-center"
          >
            <div className="bg-white/50 backdrop-blur-md border border-gray-200/50 rounded-2xl p-8 max-w-3xl mx-auto mb-12 shadow-lg">
              <GradientUnderline
                underlineWidth={30}
                spacing={4}
                className="mb-4"
              >
                <h3 className="text-2xl font-bold text-gray-900">Etymology</h3>
              </GradientUnderline>
              <p className="text-lg text-gray-700 mt-4">
                <span className="font-semibold text-gray-800">Klimalogia</span>{" "}
                derives from the Greek word for climatology (<em>κλίμα</em>,
                klima, &quot;slope&quot;; and <em>-λογία</em>, -logia)
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-navy to-brand-teal">
                Ready to lead with purpose and drive real climate impact?
              </p>
              <p className="text-lg text-gray-700">
                Let&apos;s shape a sustainable future, together.
              </p>
              <div className="flex justify-center">
                <Link href="/contact-us">
                  <ShimmerButton
                    background="linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-blue) 50%, var(--brand-teal) 100%)"
                    className="cursor-pointer"
                  >
                    Get Started
                  </ShimmerButton>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
