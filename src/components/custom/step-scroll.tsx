"use client";

import type React from "react";

interface Section {
  id: string;
  component: React.ReactNode;
  name: string;
}

interface StepScrollContainerProps {
  sections: Section[];
}

export function StepScrollContainer({ sections }: StepScrollContainerProps) {
  return (
    <div
      className="h-screen overflow-y-scroll no-scrollbar"
      style={{
        scrollSnapType: "y mandatory",
        scrollBehavior: "smooth",
      }}
    >
      {sections.map((section) => (
        <section
          key={section.id}
          className="min-h-screen flex-shrink-0"
          style={{
            scrollSnapAlign: "start",
            scrollSnapStop: "always",
          }}
        >
          <div className="h-full overflow-hidden">{section.component}</div>
        </section>
      ))}
    </div>
  );
}
