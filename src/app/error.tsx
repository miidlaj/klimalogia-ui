"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";
import { ShimmerButton } from "./components/shimmer-button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service in a real app
    console.error(error);
  }, [error]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background p-4">
      <div className="text-center w-full max-w-lg">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
              <AlertTriangle className="w-10 h-10 text-red-500" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Oops! Something went wrong.
          </h1>
          <p className="text-muted-foreground mb-8">
            We encountered an unexpected error. Our team has been notified.
            Please try again or return to the homepage.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <ShimmerButton
            onClick={() => reset()}
            className="w-full sm:w-auto"
            background="linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-blue) 50%, var(--brand-teal) 100%)"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </ShimmerButton>

          <Link href="/" className="w-full sm:w-auto">
            <ShimmerButton
              className="w-full"
              background="linear-gradient(135deg, #4A5568 0%, #2D3748 50%, #1A202C 100%)" // A neutral gradient for the secondary button
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
