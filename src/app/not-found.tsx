"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { GradientUnderline } from "@/components/custom/gradient-underline";
import { ShimmerButton } from "./components/shimmer-button";

export default function NotFound() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 -left-10 w-96 h-96 bg-gradient-to-r from-[var(--brand-blue)]/10 to-[var(--brand-teal)]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 -right-10 w-96 h-96 bg-gradient-to-r from-[var(--brand-green)]/10 to-[var(--brand-primary)]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse animation-delay-2000"></div>

      <div className="text-center w-full max-w-2xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-8xl md:text-9xl font-bold text-brand-gradient mb-4">
            404
          </h1>
          <GradientUnderline underlineWidth={50} spacing={4}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
              Page Not Found
            </h2>
          </GradientUnderline>
          <p className="text-muted-foreground text-lg mt-6 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <ShimmerButton
            onClick={goBack}
            className="w-full sm:w-auto"
            background="linear-gradient(135deg, #4A5568 0%, #2D3748 50%, #1A202C 100%)"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </ShimmerButton>
          <Link href="/" className="w-full sm:w-auto">
            <ShimmerButton
              className="w-full"
              background="linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-blue) 50%, var(--brand-teal) 100%)"
            >
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </ShimmerButton>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
