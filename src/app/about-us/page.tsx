"use client";

import { SketchyUnderline } from "@/components/sketchy-underline";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function AboutPage() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <main className="min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center">
        {!isVideoLoaded && (
          <Image
            src="/about.png"
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
          <source src="/about.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
          <h1 className="text-white text-5xl md:text-7xl font-bold">
            About Klimalogia<span className="text-primary">.</span>
          </h1>
          <p className="text-gray-200 text-xl md:text-2xl">
            Your partner in driving climate action and sustainability
          </p>
        </div>
      </section>

      <div className="bg-cover bg-[url('/about-2.jpg')] bg-blend-multiply bg-center text-white py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="border border-primary/20 rounded-lg p-8 bg-primary/5 backdrop-blur">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-primary">Etymology</span>
              <span className="h-px flex-1 bg-primary/20"></span>
            </h2>
            <p className="text-lg text-white ">
              <span className="text-primary font-semibold">Klimalogia</span>{" "}
              derives from the{" "}
              <Button variant="link" className="m-0 p-0 px-0 py-0 text-lg">
                <Link
                  href="https://en.wikipedia.org/wiki/Ancient_Greek"
                  target="_blank"
                >
                  Greek
                </Link>
              </Button>{" "}
              word for climatology (<em>κλίμα</em>, klima, &quot;slope&quot;;
              and <em>-λογία</em>,{" "}
              <Button variant="link" className="m-0 p-0 px-0 py-0 text-lg">
                <Link
                  href="https://en.wiktionary.org/wiki/-logia"
                  target="_blank"
                >
                  -logia
                </Link>
              </Button>
              )
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start border border-primary/20 rounded-lg p-8 bg-primary/10 backdrop-blur ">
            <div className="space-y-6">
              {" "}
              <SketchyUnderline color="hsla(var(--primary))">
                <h2 className="text-3xl font-bold">Our Expertise</h2>
              </SketchyUnderline>
              <p className="text-white leading-relaxed">
                With nearly a decade of experience in the sustainability sector,
                we offer a deep understanding of the climate landscape and
                provide personalized, innovative solutions tailored to meet your
                specific sustainability needs. At Klimalogia, we cut through the
                jargon and complexities of sustainability, delivering practical,
                actionable strategies that make a real difference.
              </p>
            </div>
            <div className="space-y-6">
              {" "}
              <SketchyUnderline color="hsla(var(--primary))">
                <h2 className="text-3xl font-bold">Our Approach</h2>
              </SketchyUnderline>
              <p className="M leading-relaxed">
                We work with clients across industries—large or small—helping
                them take meaningful steps toward achieving their climate goals.
                From climate strategy and decarbonization to energy
                optimization, ESG reporting, and sustainable finance, we bring
                expert insights and customized solutions that drive results.
              </p>
            </div>
          </div>

          <div className="text-center space-y-6 max-w-3xl mx-auto border border-primary/20 rounded-lg p-8 bg-primary/5 backdrop-blur">
            <SketchyUnderline color="hsla(var(--primary))">
              <h2 className="text-3xl font-bold">Our Vision</h2>
            </SketchyUnderline>

            <p className="text-white leading-relaxed">
              We believe that sustainability is not just a goal—it&apos;s a
              journey that requires informed decisions, innovative approaches,
              and measurable outcomes. Together, we can create a resilient,
              low-carbon future for your business and the planet.
            </p>
          </div>

          <div className="text-center pt-8">
            <h3 className="text-2xl font-bold mb-6 mix-blend-plus-darker">
              Ready to take the next step in your sustainability journey?
            </h3>

            <Button className="rounded-full font-bold">
              <Link href="/contact-us">
                Let&apos;s create a sustainable future, together
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
