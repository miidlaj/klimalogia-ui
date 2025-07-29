"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { SketchyUnderline } from "@/components/sketchy-underline";
import { Button } from "@/components/ui/button";

export function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {!isVideoLoaded && (
        <Image
          src="/background.png"
          alt="Nature background"
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
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative flex h-full items-center justify-center">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Welcome to{" "}
            <SketchyUnderline color="hsla(var(--primary))">
              Klimalogia
            </SketchyUnderline>
            .
          </h1>
          <p className="mb-4 text-lg sm:text-xl">
            your partner in driving climate action and sustainability.
          </p>

          <Button className="rounded-full font-bold">Partner with us</Button>
        </div>
      </div>
    </div>
  );
}
