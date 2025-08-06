import React from "react";
import { cn } from "@/lib/utils";

interface GradientUnderlineProps {
  children: React.ReactNode;
  underlineWidth?: number;
  underlineHeight?: number;
  spacing?: number;
  className?: string;
}

export function GradientUnderline({
  children,
  underlineWidth = 100,
  underlineHeight = 4,
  spacing = 2,
  className,
}: GradientUnderlineProps) {
  const style = {
    "--underline-width": `${underlineWidth}%`,
    "--underline-height": `${underlineHeight}px`,
    "--underline-bottom": `-${spacing}px`,
  } as React.CSSProperties;

  return (
    <span
      style={style}
      className={cn(
        "relative inline-block",
        "underline-brand-gradient",
        className
      )}
    >
      {children}
    </span>
  );
}
