"use client";

import { SketchyUnderline } from "@/components/sketchy-underline";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Globe, Users, Target, Award, Lightbulb, TrendingUp } from "lucide-react";

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
            Welcome to Klimalogia<span className="text-primary">.</span>
          </h1>
          <p className="text-gray-200 text-xl md:text-2xl">
            Your Global Partner in Climate Action and Sustainable Transformation
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6">
            <p>
              Klimalogia is an international climate change and sustainability firm, dedicated to helping organizations navigate the transition to a low-carbon, climate-resilient future. Inspired by the Greek term klimatologia, the study of climate, our name reflects our mission to translate climate science into practical, actionable solutions for organizations worldwide.
            </p>
            
            <p>
              We are a multidisciplinary team with global insight, delivering end-to-end sustainability and climate change solutions, through technical depth and strategic insight to help you integrate climate action into business decisions and future-proof their operations. Trusted by corporations, governments, and institutions, we are known for quality, impact, and partnerships that drive sustainable solutions, climate-smart strategies, and credible ESG leadership.
            </p>
            
            <p>
              We bring deep expertise across sectors and regions to help businesses integrate sustainability into their core strategy, operations, and investment decisions. Whether you aim to accelerate decarbonization, meet regulatory requirements, enhance ESG performance, or access sustainable finance, we deliver custom, data-driven solutions that transform ambition into measurable results.
            </p>
            
            <p>
              At Klimalogia, we view sustainability as a driver of innovation, resilience, and long-term value, far beyond compliance. Our approach is built on strategic alignment with global frameworks, meaningful stakeholder engagement, and data-driven decision making, helping organizations lead with purpose and impact in a rapidly evolving landscape.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                <p className="text-gray-600">International presence with local expertise across multiple regions</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                <p className="text-gray-600">Multidisciplinary professionals with deep technical expertise</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Results-Driven</h3>
                <p className="text-gray-600">Measurable outcomes and tangible impact for every client</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Trusted Partner</h3>
                <p className="text-gray-600">Quality, integrity, and long-term partnerships with clients</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-primary/5 rounded-lg p-8 max-w-2xl mx-auto mb-12">
              <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-2">
                <span className="text-primary">Etymology</span>
              </h3>
              <p className="text-lg text-gray-700">
                <span className="text-primary font-semibold">Klimalogia</span>{" "}
                derives from the Greek word for climatology (<em>κλίμα</em>, klima, "slope"; and <em>-λογία</em>, -logia)
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-xl font-semibold text-primary">
                Ready to lead with purpose and drive real climate impact?
              </p>
              <p className="text-lg text-gray-700">
                Let's shape a sustainable future, together.
              </p>
              <Button size="lg" className="rounded-full">
                <Link href="/contact-us">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}