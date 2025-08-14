"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "@/components/logo"; // Import your Logo component

export function PageLoader() {
  const [progress, setProgress] = useState(0);

  // Simulates loading progress
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8 flex flex-col justify-center items-center"

        >
          <Logo height={40} width={180} variant="gradient" />
          <p className="text-muted-foreground mt-4">
            Loading your climate solutions...
          </p>
        </motion.div>

        {/* Styled Progress Bar */}
        <div className="w-80 h-2 bg-gray-200/80 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-brand-gradient rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </div>

        <p className="mt-4 text-sm font-medium text-gray-500">{progress}%</p>
      </div>
    </div>
  );
}
