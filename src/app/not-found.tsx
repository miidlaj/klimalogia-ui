"use client";

import { motion } from "framer-motion";
import { Search, Home, ArrowLeft } from "lucide-react";
import { ShinyButton } from "./components/shiny-button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
      <div className="text-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-9xl font-bold text-blue-600 mb-4">404</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Page Not Found
          </h1>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved to a new
            location.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-x-4"
        >
          <ShinyButton onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </ShinyButton>

          <ShinyButton onClick={() => (window.location.href = "/")}>
            <Home className="w-4 h-4 mr-2" />
            Go Home
          </ShinyButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg max-w-md mx-auto">
            <Search className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">
              Looking for something specific?
            </h3>
            <p className="text-gray-600 text-sm">
              Try searching our site or contact us for assistance finding what
              you need.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
