"use client";

import { Marquee } from "./marquee";
import { BoxReveal } from "./box-reveal";
import { Star } from "lucide-react";
import { ShimmerButton } from "./shimmer-button";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Sustainability Director",
    company: "TechCorp Global",
    content:
      "Klimalogia transformed our sustainability strategy. Their expertise in ESG reporting and carbon accounting helped us achieve our net-zero goals ahead of schedule.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "CEO",
    company: "GreenBuild Solutions",
    content:
      "The green building certification process was seamless with Klimalogia. Their team's attention to detail and deep knowledge made all the difference.",
    rating: 5,
  },
  {
    name: "Dr. Emily Watson",
    role: "Environmental Manager",
    company: "Manufacturing Plus",
    content:
      "Their climate risk assessment and decarbonization pathway gave us a clear roadmap to reduce our environmental impact while maintaining profitability.",
    rating: 5,
  },
  {
    name: "James Thompson",
    role: "Operations Director",
    company: "Retail Innovations",
    content:
      "Klimalogia's energy audits identified significant cost savings opportunities. We've reduced our energy consumption by 30% in just one year.",
    rating: 5,
  },
  {
    name: "Lisa Park",
    role: "Chief Sustainability Officer",
    company: "Financial Services Inc",
    content:
      "Their ESG assurance services gave our stakeholders confidence in our sustainability reporting. Professional, thorough, and reliable.",
    rating: 5,
  },
  {
    name: "Roberto Silva",
    role: "Project Manager",
    company: "Infrastructure Development",
    content:
      "The life cycle assessment and environmental impact studies were comprehensive. Klimalogia helped us make informed decisions for sustainable development.",
    rating: 5,
  },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg mx-4 min-w-[350px] max-w-[400px]">
      <div className="flex items-center mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
        ))}
      </div>

      <p className="text-gray-700 mb-6 leading-relaxed">
        &quot;{testimonial.content}&quot;
      </p>

      <div className="border-t pt-4">
        <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
        <p className="text-sm text-gray-600">{testimonial.role}</p>
        <p className="text-sm text-blue-600 font-medium">
          {testimonial.company}
        </p>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(3, 6);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <BoxReveal width="100%" boxColor="#3b82f6" duration={0.8}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by leading organizations worldwide for their
              sustainability journey
            </p>
          </div>
        </BoxReveal>

        <BoxReveal width="100%" boxColor="#10b981" duration={0.8}>
          <div className="space-y-8">
            <Marquee pauseOnHover className="[--duration:20s]">
              {firstRow.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </Marquee>

            <Marquee reverse pauseOnHover className="[--duration:20s]">
              {secondRow.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </Marquee>
          </div>
        </BoxReveal>

        <BoxReveal width="100%" boxColor="#6b7280" duration={0.8}>
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Join hundreds of satisfied clients who trust Klimalogia
            </p>

            <ShimmerButton
              background="linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-blue) 50%, var(--brand-teal) 100%)"
              className="cursor-pointer"
            >
              Start Your Sustainability Journey
            </ShimmerButton>
          </div>
        </BoxReveal>
      </div>
    </section>
  );
}
