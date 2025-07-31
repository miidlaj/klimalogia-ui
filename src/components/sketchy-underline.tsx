import React from "react";

interface SketchyUnderlineProps {
  children: React.ReactNode;
  color?: string;
  width?: number;
  height?: number;
  className?: string;
}

export function SketchyUnderline({
  children,
  color = "currentColor",
  width = 437,
  height = 51,
  className = "",
}: SketchyUnderlineProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      {children}

      <svg
        className="absolute left-0 -bottom-1 w-full"
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M 0,49.5 c 54.625,-1.375 109.25,-4.249999999999986 218.5,-5.5 c 109.25,-1.25 166.06,1.4210854715202004e-14 218.5,0.5 c 10.488,0.10000000000000142 -8.302999999999997,1.4249999999999972 -8.740000000000009,1.5"
          stroke={color}
          strokeWidth="max(1px, 0.1em)"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          strokeDasharray="453"
          strokeDashoffset="906"
        />
      </svg>
    </span>
  );
}
