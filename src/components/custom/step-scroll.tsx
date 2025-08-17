"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useCallback, useRef } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface Section {
  id: string;
  component: React.ReactNode;
  name: string;
}

interface StepScrollContainerProps {
  sections: Section[];
}

export function StepScrollContainer({ sections }: StepScrollContainerProps) {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const lastScrollTime = useRef(0);

  // Smooth scroll to section
  const scrollToSection = useCallback(
    (index: number) => {
      if (index < 0 || index >= sections.length || isScrolling) return;

      const targetSection = sectionsRef.current[index];
      if (!targetSection) return;

      setIsScrolling(true);
      setCurrentSection(index);

      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Reset scrolling state after animation
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    },
    [sections.length, isScrolling]
  );

  // Handle wheel events for step scrolling
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      e.preventDefault();

      const now = Date.now();
      if (now - lastScrollTime.current < 100) return; // Throttle

      lastScrollTime.current = now;

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextSection = Math.max(
        0,
        Math.min(sections.length - 1, currentSection + direction)
      );

      if (nextSection !== currentSection) {
        scrollToSection(nextSection);
      }
    },
    [currentSection, sections.length, scrollToSection]
  );

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (isScrolling) return;

      switch (e.key) {
        case "ArrowDown":
        case "PageDown":
        case " ":
          e.preventDefault();
          scrollToSection(currentSection + 1);
          break;
        case "ArrowUp":
        case "PageUp":
          e.preventDefault();
          scrollToSection(currentSection - 1);
          break;
        case "Home":
          e.preventDefault();
          scrollToSection(0);
          break;
        case "End":
          e.preventDefault();
          scrollToSection(sections.length - 1);
          break;
      }
    },
    [currentSection, isScrolling, scrollToSection, sections.length]
  );

  // Setup event listeners
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("wheel", handleWheel, { passive: false });
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      container.removeEventListener("wheel", handleWheel);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleWheel, handleKeyDown]);

  // Intersection Observer for section detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrolling) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const index = sectionsRef.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1 && index !== currentSection) {
              setCurrentSection(index);
            }
          }
        });
      },
      {
        threshold: [0.5],
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [currentSection, isScrolling]);

  return (
    <div ref={containerRef} className="relative">
      {/* Section Navigation Dots */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3"
      >
        {sections.map((section, index) => (
          <motion.button
            key={section.id}
            onClick={() => scrollToSection(index)}
            className={`group relative w-4 h-4 rounded-full border-2 transition-all duration-300 ${
              index === currentSection
                ? "border-brand-teal bg-brand-teal shadow-lg scale-125"
                : "border-gray-400 bg-transparent hover:border-brand-blue hover:scale-110"
            }`}
            whileHover={{ scale: index === currentSection ? 1.25 : 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute right-6 top-1/2 -translate-y-1/2 px-3 py-1 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              {section.name}
            </span>
          </motion.button>
        ))}
      </motion.div>

      {/* Navigation Arrows */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-8 right-8 z-50 flex flex-col gap-2"
      >
        <motion.button
          onClick={() => scrollToSection(currentSection - 1)}
          disabled={currentSection === 0 || isScrolling}
          className="p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronUp className="w-5 h-5 text-gray-700" />
        </motion.button>

        <motion.button
          onClick={() => scrollToSection(currentSection + 1)}
          disabled={currentSection === sections.length - 1 || isScrolling}
          className="p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.1, y: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-700" />
        </motion.button>
      </motion.div>

      {/* Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-brand-navy via-brand-blue to-brand-teal z-50"
        style={{
          width: `${((currentSection + 1) / sections.length) * 100}%`,
        }}
        initial={{ width: "0%" }}
        animate={{
          width: `${((currentSection + 1) / sections.length) * 100}%`,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      {/* Sections Container */}
      <div className="relative">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            ref={(el) => {
              sectionsRef.current[index] = el;
            }}
            className="min-h-screen relative"
            initial={{ opacity: 0.8, y: 20 }}
            animate={{
              opacity: index === currentSection ? 1 : 0.8,
              y: index === currentSection ? 0 : 20,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {section.component}
          </motion.div>
        ))}
      </div>

      {/* Section Counter */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed bottom-8 left-8 z-50 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200"
      >
        <span className="text-sm font-medium text-gray-700">
          {String(currentSection + 1).padStart(2, "0")} /{" "}
          {String(sections.length).padStart(2, "0")}
        </span>
      </motion.div>
    </div>
  );
}
