"use client";

import React from "react";

export function GradientBlend() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"
    />
  );
}
