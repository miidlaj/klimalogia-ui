import HeroBg from "@/components/hero-bg";
import { SketchyUnderline } from "@/components/sketchy-underline";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  Globe2,
  HandshakeIcon,
  LineChart,
  Shield,
  Users2,
} from "lucide-react";

export default function PartnerPage() {
  return (
    <div className="min-h-screen  text-white">
      <HeroBg
        video="/partner.mp4"
        image="/partner.png"
        overlayClass=" bg-gradient-to-b from-transparent to-black"
      >
        <div className="relative z-10 container mx-auto px-4 text-center pt-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Join Forces with{" "}
            <SketchyUnderline color="white">
              <span className="text-primary">Klimalogia</span>
            </SketchyUnderline>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200">
            Partner with a globally trusted name in sustainability and climate
            change solutions. Together, we can create transformative impact.
          </p>
          <Button size="lg">Explore Partnership Opportunities</Button>
        </div>

        <section className="pt-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Why Partner With Klimalogia<span className="text-primary">?</span>
            </h2>
            <div className="relative">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                {benefits.map((benefit, index) => (
                  <Card
                    key={index}
                    className="group bg-gray-900/40 backdrop-blur-xl border border-primary/10 shadow-xl hover:border-primary/30 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <CardContent className="pt-6 relative z-10">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <benefit.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">
                            {benefit.title}
                          </h3>
                          <p className="text-white/50">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </HeroBg>

      <section className="pb-20 bg-black relative">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-3/4 h-60 bg-primary/20 blur-[100px] rounded-full" />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-1/2 h-60 bg-primary/30 blur-[120px] rounded-full" />
        <div className="container flex flex-col justify-center items-center mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let&apos;s Build Together
            </h2>
            <p className="text-gray-400 text-lg">
              At Klimalogia, we believe that partnerships are key to solving the
              world&apos;s most pressing climate challenges. Join us in creating
              innovative, impactful solutions for a more sustainable future.
            </p>
          </div>
          <Button>Partner with Us.</Button>
        </div>
      </section>
    </div>
  );
}

const benefits = [
  {
    title: "Expertise You Can Trust",
    description:
      "Nearly a decade of experience in sustainability, bringing deep industry knowledge and innovative solutions.",
    icon: Shield,
  },
  {
    title: "Amplified Impact",
    description:
      "Maximize collective impact by leveraging shared expertise and resources for scalable outcomes.",
    icon: LineChart,
  },
  {
    title: "Global Reach, Local Insights",
    description:
      "Operations spanning the globe, combining international best practices with localized approaches.",
    icon: Globe2,
  },
  {
    title: "Customized Collaboration",
    description:
      "From strategic alliances to joint ventures, we develop partnership frameworks aligned with your goals.",
    icon: HandshakeIcon,
  },
  {
    title: "Enhanced Credentials",
    description:
      "Position your organization as a leader in climate action through partnership with Klimalogia.",
    icon: Building2,
  },
  {
    title: "Collective Innovation",
    description:
      "Join a network of forward-thinking organizations driving sustainable transformation.",
    icon: Users2,
  },
];
