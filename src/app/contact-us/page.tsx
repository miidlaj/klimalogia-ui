"use client";

import FloatingLabel from "@/components/floating-label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { Mail, Phone, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function ContactPage() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const addresses = [
    {
      city: "Dubai",
      address:
        "Office G-14, Onyx Building, Salah Al Din St, Al Khabeesi, Deira, Dubai, UAE",
      flag: "https://img.icons8.com/color/50/united-arab-emirates.png",
      alt: "united-arab-emirates",
    },
    {
      city: "Kochi",
      address:
        "Office 201, 2nd Floor, SAFA Square, SRM Road, Kaloor, Kochi 682 018, Kerala, India",
      flag: "https://img.icons8.com/color/50/india.png",
      alt: "external-india-flags-others-iconmarket",
    },
    {
      city: "Mumbai",
      address: "XXXX (Need to change/update)",
      flag: "https://img.icons8.com/color/50/india.png",
      alt: "external-india-flags-others-iconmarket",
    },
  ];

  return (
    <main className="min-h-screen">
      <section className="relative min-h-[100vh] flex items-center justify-center">
        {!isVideoLoaded && (
          <Image
            src="/contact.png"
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
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
            isVideoLoaded ? "opacity-100" : "opacity-0"
          )}
        >
          <source src="/contact.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 w-full py-20 px-4">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-6">
              <h1 className="text-white text-5xl md:text-7xl font-bold">
                Contact us<span className="text-primary">.</span>
              </h1>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-6 bg-primary/5 backdrop-blur border-primary/20">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-semibold text-white mb-4">
                      Office Locations
                    </h2>
                    <div className="space-y-6">
                      {addresses.map((location, index) => (
                        <div key={index} className="flex gap-3 items-center">
                          <div className="flex-shrink-0 w-[50px] h-[50px]">
                            <Image
                              width={50}
                              height={50}
                              src={location.flag || "/placeholder.svg"}
                              alt={location.alt}
                              className="object-contain"
                            />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-white">
                              {location.city}
                            </p>
                            <p className="text-gray-300">{location.address}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-white mb-4">
                      Contact Details
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <div>
                          <a
                            href="mailto:klimalogia@gmail.com"
                            className="text-gray-300 hover:text-white transition-colors"
                          >
                            klimalogia@gmail.com
                          </a>
                          <p className="text-xs text-gray-400">(Need to change/update)</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-primary" />
                        <div>
                          <a
                            href="tel:+971XXXX"
                            className="text-gray-300 hover:text-white transition-colors"
                          >
                            +971 XXXX
                          </a>
                          <p className="text-xs text-gray-400">(Need to change/update)</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg
                          className="h-5 w-5 text-primary"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 15.32C16.02 16.92 12.87 18.07 12 18.07C11.13 18.07 7.98 16.92 7.36 15.32C6.93 14.23 7.08 12.63 7.36 11.54C7.64 10.45 9.03 9.07 10.12 8.79C11.21 8.51 12.8 8.66 13.89 9.07C14.98 9.49 16.36 10.88 16.64 11.97C16.92 13.06 17.07 14.23 16.64 15.32Z" />
                        </svg>
                        <div>
                          <a
                            href="https://wa.me/971XXXX"
                            className="text-gray-300 hover:text-white transition-colors"
                          >
                            +971 XXXX
                          </a>
                          <p className="text-xs text-gray-400">(Need to change/update)</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-white mb-4">
                      Social Media
                    </h2>
                    <p className="text-gray-400 text-sm mb-4">(Need to change/update)</p>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="h-10 w-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors"
                      >
                        <svg
                          className="h-5 w-5 text-primary"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="h-10 w-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors"
                      >
                        <svg
                          className="h-5 w-5 text-primary"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="h-10 w-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors"
                      >
                        <svg
                          className="h-5 w-5 text-primary"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-primary/5 backdrop-blur border-primary/20">
                <form className="space-y-8">
                  <div className="space-y-10 w-full">
                    <div className="relative">
                      <FloatingLabel label="Name" name="name" />
                    </div>
                    <div className="relative">
                      <FloatingLabel label="Email" name="email" type="email" />
                    </div>
                    <div className="relative">
                      <FloatingLabel
                        label="Message"
                        textarea
                        name="message"
                        rows={7}
                      />
                    </div>
                  </div>
                  <Button className="w-full sm:w-auto flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            <Card className="p-6 bg-primary/5 backdrop-blur border-primary/20">
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Careers
                </h2>
                <p className="text-gray-300 mb-6">
                  Join our team and be part of something great
                </p>
                <Button asChild>
                  <Link href="/careers">View Open Positions</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}