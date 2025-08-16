/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ChevronDown,
  MapPin,
  Briefcase,
  Mail,
  Quote,
  Check,
} from "lucide-react";
import { GradientUnderline } from "@/components/custom/gradient-underline";
import { ShimmerButton } from "../components/shimmer-button";
import HeroBg from "@/components/hero-bg";

// --- Data (interfaces and arrays) ---
interface JobPosition {
  id: string;
  title: string;
  location: string;
  category: string;
  type: string;
  description: string;
  qualifications: string[];
  responsibilities: string[];
}

interface TeamMember {
  name: string;
  position: string;
  image: string;
  quote: string;
}

const jobPositions: JobPosition[] = [
  {
    id: "1",
    title: "Accounting Manager",
    location: "Remote, East Coast TZ",
    category: "Accounting",
    type: "Full-time",
    description:
      "Oversee daily accounting operations, ensure compliance, and support strategic financial planning.",
    qualifications: [
      "Bachelor's degree in Accounting/Finance",
      "CPA certification preferred",
      "5+ years of accounting experience",
      "Proficient with ERP systems",
    ],
    responsibilities: [
      "Manage financial close processes",
      "Oversee accounts payable/receivable",
      "Prepare financial statements",
      "Ensure compliance with GAAP",
    ],
  },
  {
    id: "2",
    title: "Senior Environmental Analyst",
    location: "New York, NY / Hybrid",
    category: "Environmental",
    type: "Full-time",
    description:
      "Support carbon credit project development and environmental impact assessments.",
    qualifications: [
      "Master's in Environmental Science",
      "3+ years in environmental consulting",
      "Knowledge of carbon markets",
      "Experience with GIS software",
    ],
    responsibilities: [
      "Conduct environmental impact assessments",
      "Develop carbon offset methodologies",
      "Analyze environmental data",
      "Support client engagements",
    ],
  },
  {
    id: "3",
    title: "Business Development Manager",
    location: "Chicago, IL",
    category: "Sales",
    type: "Full-time",
    description:
      "Drive growth by identifying new opportunities and building strategic partnerships.",
    qualifications: [
      "Bachelor's in Business/Marketing",
      "5+ years of B2B sales experience",
      "Experience in environmental markets",
      "Proven track record of meeting targets",
    ],
    responsibilities: [
      "Identify and pursue new business",
      "Build and maintain client relationships",
      "Develop strategic partnerships",
      "Prepare proposals and presentations",
    ],
  },
];

const teamMembers: TeamMember[] = [
  {
    name: "Wilson Fong",
    position: "Senior Associate, Sustainability, Policy & Advisory",
    image: "/api/placeholder/150/150", // Replace with actual image path
    quote:
      "ClimeCo's culture, anchored in trust, innovation, diversity, and recognition, are the defining factors that genuinely set the company apart for me. Each day presents new and exciting challenges, making my journey with ClimeCo dynamic and incredibly rewarding.",
  },
];

const coreValues = [
  { title: "Authenticity", description: "Building trust in our relationships" },
  { title: "Entrepreneurial Spirit", description: "Empowering our teams" },
  { title: "Pragmatism", description: "Doing the hard work to make an impact" },
  {
    title: "Stewardship",
    description: "Promoting diversity and protecting our planet",
  },
];

// --- Reusable Components ---
const ValueCard = ({
  title,
  description,
  delay,
}: {
  title: string;
  description: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6, delay }}
    className="relative p-8 rounded-2xl bg-white/60 backdrop-blur-md border border-gray-200/50 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
  >
    <div className="absolute top-0 left-0 h-1.5 w-full bg-brand-gradient" />
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default function CareersPage() {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  return (
    <div className="min-h-screen ">
      <HeroBg image="/careers.jpg" video="/careers.mp4">
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="relative z-10 text-center text-white px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
            >
              Careers
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto"
            >
              Join our mission to drive positive environmental change and shape
              a sustainable future.
            </motion.p>
          </div>
        </section>
      </HeroBg>

      <div id="nav-trigger" />

      <section className="py-20 md:py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <GradientUnderline underlineWidth={50} spacing={4} className="mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Why Join Klimalogia?
            </h2>
          </GradientUnderline>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mt-6">
            We are a leading advisor and developer in the environmental
            commodities market, seeking new hires who share our core values and
            passion for making a tangible impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {coreValues.map((value, index) => (
            <ValueCard key={index} {...value} delay={0.1 * (index + 1)} />
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-gradient rounded-full mb-8 shadow-lg">
                <Quote className="w-10 h-10 text-white" />
              </div>
              <blockquote className="text-xl text-gray-700 leading-relaxed mb-8 italic">
                &quot;{member.quote}&quot;
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-brand-blue to-brand-primary"></div>
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-gray-900">{member.name}</h4>
                  <p className="text-gray-600 text-sm">{member.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-24 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <GradientUnderline underlineWidth={50} spacing={4} className="mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Open Positions
            </h2>
          </GradientUnderline>
        </motion.div>

        <div className="space-y-6">
          {jobPositions.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-200/80 overflow-hidden transition-shadow duration-300 hover:shadow-xl"
            >
              <div
                className="p-8 cursor-pointer"
                onClick={() =>
                  setExpandedJob(expandedJob === job.id ? null : job.id)
                }
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {job.title}
                  </h3>
                  <motion.div
                    animate={{ rotate: expandedJob === job.id ? 180 : 0 }}
                  >
                    <ChevronDown className="w-6 h-6 text-gray-500" />
                  </motion.div>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Briefcase className="w-4 h-4" />
                    <span>{job.category}</span>
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {expandedJob === job.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 border-t border-gray-100">
                      <div className="grid md:grid-cols-2 gap-8 mt-8">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">
                            Qualifications
                          </h4>
                          <ul className="space-y-2">
                            {job.qualifications.map((qual, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 text-gray-600 text-sm"
                              >
                                <Check className="w-4 h-4 text-[var(--brand-green)] mt-0.5 flex-shrink-0" />
                                <span>{qual}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">
                            Responsibilities
                          </h4>
                          <ul className="space-y-2">
                            {job.responsibilities.map((resp, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 text-gray-600 text-sm"
                              >
                                <Check className="w-4 h-4 text-[var(--brand-green)] mt-0.5 flex-shrink-0" />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-8 pt-6 border-t border-gray-100">
                        <ShimmerButton background="linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-blue) 50%, var(--brand-teal) 100%)">
                          <span className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            <span>Apply Now</span>
                          </span>
                        </ShimmerButton>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
