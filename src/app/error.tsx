"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { ShinyButton } from "./components/shiny-button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
      <div className="text-center p-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <AlertTriangle className="w-24 h-24 text-red-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Oops! Something went wrong
          </h1>
          <p className="text-gray-600 mb-8">
            We encountered an unexpected error. Don&apos;t worry, our team has
            been notified.
          </p>
        </motion.div>

        <div className="space-x-4">
          <ShinyButton onClick={reset}>
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </ShinyButton>

          <ShinyButton onClick={() => (window.location.href = "/")}>
            <Home className="w-4 h-4 mr-2" />
            Go Home
          </ShinyButton>
        </div>
      </div>
    </div>
  );
}
