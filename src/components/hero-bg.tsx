"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

function HeroBg({
  video,
  image,
  overlayClass,
  children,
}: {
  video: string;
  image: string;
  overlayClass?: string;
  children: React.ReactNode;
}) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <main className="min-h-screen">
      <section className="relative min-h-[100vh] flex items-center justify-center">
        {!isVideoLoaded && (
          <Image
            src={image}
            alt={image}
            fill
            className="object-cover"
            priority
          />
        )}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
            isVideoLoaded ? "opacity-100" : "opacity-0"
          )}
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className={cn("absolute inset-0 bg-black/40", overlayClass)} />
        <div className="relative z-10 w-full py-20 px-4">{children}</div>
      </section>
    </main>
  );
}

export default HeroBg;
