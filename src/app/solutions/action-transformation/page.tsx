"use client";
import { Suspense } from "react";
import {
  Target,
  Shield,
  Calculator,
  Route,
  Zap,
  TrendingUp,
  Users,
  Star,
  Lightbulb,
  Globe,
  RefreshCw,
  Droplets,
  Bike,
} from "lucide-react";
import { HeroSection } from "../components/hero-section";
import { WhatWeOfferSection } from "../components/what-we-offer-section";
import { HowItMattersSection } from "../components/how-it-matters-section";
import { WhyChooseUsSection } from "../components/why-choose-us-section";
import { StepScrollContainer } from "@/components/custom/step-scroll";
import { PageLoader } from "@/app/components/page-loader";

const whatWeOfferServices = [
  {
    title: "Renewable Energy Sourcing",
    description:
      "Develop and implement renewable energy strategies, including on-site generation (solar, wind), off-site power purchase agreements (PPAs), and energy attribute certificates (EACs) to transition your operations to clean energy.",
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
    thumbnail: "/service/action.jpg",
  },
  {
    title: "Energy Efficiency & Retrofits",
    description:
      "Conduct energy audits and identify opportunities for efficiency gains through building retrofits, industrial process optimization, HVAC upgrades, and smart building technologies to reduce consumption and operational costs.",
    icon: Lightbulb,
    color: "from-emerald-500 to-teal-500",
    thumbnail: "/service/action.jpg",
  },
  {
    title: "Supply Chain Decarbonisation",
    description:
      "Engage with suppliers to measure and reduce Scope 3 emissions. We help implement sustainable procurement policies, improve logistics, and foster collaboration across your value chain to create a resilient, low-carbon supply network.",
    icon: Route,
    color: "from-blue-500 to-cyan-500",
    thumbnail: "/service/action.jpg",
  },
  {
    title: "Green Mobility",
    description:
      "Transition your corporate fleet to electric vehicles (EVs), optimize transportation routes, and promote sustainable commuting options for employees. We design and implement strategies to reduce emissions from mobile sources.",
    icon: Bike,
    color: "from-green-500 to-lime-500",
    thumbnail: "/service/action.jpg",
  },
  {
    title: "Circular Economy Solutions",
    description:
      "Implement circular business models by designing waste out of your processes, promoting product life extension, and creating closed-loop systems. We help you turn waste streams into value streams, reducing environmental impact.",
    icon: RefreshCw,
    color: "from-purple-500 to-indigo-500",
    thumbnail: "/service/action.jpg",
  },
  {
    title: "Water Stewardship",
    description:
      "Develop strategies for responsible water management, including water footprint analysis, efficiency improvements, and wastewater treatment solutions. We help you mitigate water-related risks and ensure sustainable water use.",
    icon: Droplets,
    color: "from-sky-500 to-blue-500",
    thumbnail: "/service/action.jpg",
  },
];

const howItMattersPoints = [
  {
    title: "Unlock cost savings and operational efficiency",
    description:
      "Decarbonisation initiatives like energy efficiency and renewable sourcing directly reduce utility expenses and operational costs, delivering a strong return on investment and protecting against energy price volatility.",
    icon: TrendingUp,
  },
  {
    title: "Drive innovation and competitive advantage",
    description:
      "Adopting clean technologies and circular models fosters a culture of innovation. It allows you to develop new products, services, and business models that meet growing market demand for sustainable solutions.",
    icon: Lightbulb,
  },
  {
    title: "Build supply chain resilience",
    description:
      "Decarbonising your supply chain reduces exposure to carbon taxes, resource scarcity, and regulatory risks. A sustainable supply chain is more agile, transparent, and better equipped to handle future disruptions.",
    icon: Shield,
  },
  {
    title: "Meet net-zero targets and climate goals",
    description:
      "Transforming strategy into action is essential for achieving ambitious climate commitments. Our implementation services provide the practical steps needed to make measurable progress on your decarbonisation pathway.",
    icon: Target,
  },
  {
    title: "Enhance brand reputation and stakeholder loyalty",
    description:
      "Demonstrating tangible action on climate change builds trust with customers, investors, and employees. Proactive decarbonisation strengthens your brand identity as a responsible and forward-thinking leader.",
    icon: Star,
  },
];

const whyChooseUsPoints = [
  {
    title: "End-to-End Implementation Partner",
    description:
      "We go beyond strategy to serve as your hands-on implementation partner. From initial assessment and business case development to project management and performance tracking, we manage the entire transformation journey.",
    icon: Users,
  },
  {
    title: "Integrated Decarbonisation Expertise",
    description:
      "Our team combines deep expertise in renewable energy, energy efficiency, supply chain management, and circular economy principles. This integrated approach ensures we deliver holistic and effective decarbonisation solutions.",
    icon: Zap,
  },
  {
    title: "Technology-Agnostic, Solution-Focused",
    description:
      "We are not tied to any single technology or vendor. Our approach is to identify and implement the best-fit solutions for your specific operational context, budget, and decarbonisation goals, ensuring optimal outcomes.",
    icon: Lightbulb,
  },
  {
    title: "Data-Driven, ROI-Focused",
    description:
      "Every recommendation is backed by robust data analysis and a clear financial business case. We focus on implementing projects that not only reduce emissions but also deliver measurable financial returns and operational benefits.",
    icon: Calculator,
  },
  {
    title: "Scalable Solutions for Global Impact",
    description:
      "Whether you're looking to decarbonise a single facility or your entire global operations, we design solutions that are scalable and replicable. We help you build internal capacity and create a framework for continuous improvement.",
    icon: Globe,
  },
];

const sections = [
  {
    id: "hero",
    component: (
      <HeroSection
        backgroundImage="/service/action.png"
        backgroundVideo="/service/action.mp4"
        title="Action & Transformation"
        subtitle="Solution"
        description="From renewable energy and supply chain decarbonisation to circular economy solutions, we turn your climate strategy into measurable action. Our services are designed to drive operational efficiency, foster innovation, and accelerate your journey to net-zero."
      />
    ),
    name: "Home",
  },
  {
    id: "what-we-offer",
    component: (
      <WhatWeOfferSection
        title="What We Offer"
        description="Our Action & Transformation services bridge the gap between strategy and execution. We provide hands-on support to implement practical, scalable, and financially viable decarbonisation solutions across your operations and value chain."
        services={whatWeOfferServices}
      />
    ),
    name: "What We Offer",
  },
  {
    id: "how-it-matters",
    component: (
      <HowItMattersSection
        title="How It Matters"
        description="A robust climate strategy is only as valuable as its implementation. Taking decisive action to decarbonise is no longer optional—it is a fundamental driver of business resilience, competitive advantage, and long-term value creation."
        points={howItMattersPoints}
        image="/service/consulting.jpg"
        imageDescription="By translating climate goals into tangible projects, organizations can unlock significant cost savings, mitigate risks, and strengthen their position as leaders in the transition to a low-carbon economy."
      />
    ),
    name: "How It Matters",
  },
  {
    id: "why-choose-us",
    component: (
      <WhyChooseUsSection
        title="Why Choose Us"
        description="Choosing the right implementation partner is critical to turning your climate ambition into reality. We provide the technical expertise, project management rigour, and strategic oversight needed to ensure your decarbonisation projects are successful."
        points={whyChooseUsPoints}
        imageDescription="With Klimalogia, you gain a partner dedicated to delivering tangible results. We work as an extension of your team to de-risk complex projects, maximize ROI, and ensure your transformation journey is both impactful and sustainable."
        backgroundImage="/service/why-choose-us.jpg"
      />
    ),
    name: "Why Choose Us",
  },
];

export default function Page() {
  return (
    <Suspense fallback={<PageLoader />}>
      <main className="relative min-h-screen ">
        <StepScrollContainer sections={sections} />
      </main>
    </Suspense>
  );
}
