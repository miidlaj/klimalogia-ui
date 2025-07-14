import AnimatedButton from "./components/animated-button";
import Image from "next/image";
import type { Metadata } from "next";
import "./services.css";
import HeroBg from "@/components/hero-bg";

export const metadata: Metadata = {
  title: "Services | Sustainability Solutions",
  description:
    "Explore our comprehensive sustainability and environmental services including Strategy & Advisory, Assurance & Certification, Energy Efficiency & Transition, and more.",
};

const datas = [
  {
    title: "Strategy & Advisory",
    p1: "Our comprehensive strategy and advisory services encompass corporate sustainability strategy, net-zero roadmaps, and policy development. We provide expert guidance on climate action, sustainability targets, and innovative technology solutions.",
    p2: "We develop customized policies and guidelines for sustainable events, materials procurement, supply chain management, waste management, and sustainable operations.",
    p3: "Our advisory services cover climate action strategies, sustainability target setting, nature-based solutions, and innovative technology implementation to help organizations achieve their sustainability goals.",
    image: "/service/stratergy.jpg",
    link: "/services/strategy-advisory",
  },
  {
    title: "Assurance & Certification",
    p1: "We offer comprehensive certification services for green buildings including LEED, BREEAM, WELL, and other international standards. Our expertise extends to sustainability certifications and assurance services for ESG and GHG emissions.",
    p2: "Our certification portfolio includes Energy Star, TRUE Certification, ISO Certifications, Green Globe, and the FIA Environmental Accreditation Programme.",
    p3: "We provide thorough assurance services for ESG reporting, GHG emissions verification, and sustainability initiatives validation to ensure compliance and credibility.",
    image: "/service/assurance.jpg",
    link: "/services/assurance-certification",
  },
  {
    title: "Energy Efficiency & Transition",
    p1: "Our energy services encompass comprehensive ASHRAE level audits, renewable energy solutions, and strategic energy transition planning to help organizations optimize their energy usage and transition to sustainable sources.",
    p2: "We specialize in solar PV implementation, renewable energy design, and optimization strategies to maximize energy efficiency and reduce environmental impact.",
    p3: "Our team develops customized energy transition roadmaps and strategies to help organizations achieve their sustainability goals while maintaining operational excellence.",
    image: "/service/efficiency.jpg",
    link: "/services/energy-efficiency",
  },
  {
    title: "Climate Change & Decarbonization",
    p1: "We provide comprehensive GHG accounting and reporting services following international standards like GHG Protocol and ISO 14064. Our expertise includes lifecycle assessments and net-zero strategy development.",
    p2: "Our decarbonization strategies incorporate both nature-based and technology-based solutions, supported by detailed carbon planning and offset programs.",
    p3: "We assess climate risks, develop resilience strategies, and create comprehensive climate action plans to help organizations adapt to and mitigate climate change impacts.",
    image: "/service/climate.jpg",
    link: "/services/climate-change",
  },
  {
    title: "Sustainability & ESG Reporting",
    p1: "Our ESG services cover strategy development, metrics definition, and comprehensive reporting aligned with major frameworks including GRI, CDP, TCFD, and UNGC.",
    p2: "We provide expertise in ESG debt advisory, ESG-linked financing assurance, and double materiality assessments to support sustainable financial decisions.",
    p3: "Our team ensures compliance with evolving reporting standards including CSRD and IFRS S1 and S2, while providing thorough ESG assurance services.",
    image: "/service/sustainability.jpg",
    link: "/services/sustainability-esg",
  },
  {
    title: "Advanced Climate Analytics",
    p1: "We leverage cutting-edge technology for lifecycle assessments, energy modeling, and environmental simulations. Our services include thermal modeling, computational fluid dynamics, and façade optimization.",
    p2: "Our in-house software platforms integrate AI for comprehensive data collection and analysis of energy, water, waste, and carbon metrics.",
    p3: "We provide detailed analysis and recommendations through advanced modeling techniques, helping organizations optimize their environmental performance and achieve sustainability goals.",
    image: "/service/climate.jpg",
    link: "/services/climate-analytics",
  },
];

const Page = () => {
  return (
    <HeroBg video="/service.mp4" image="/service.jpg">
      {/* gradient-bg */}
      <div className="min-h-screen pb-20">
        <section className="pb-[88px] pt-20">
          <div className="mx-auto">
            <div className="flex flex-wrap">
              <div className="w-full px-4">
                <div className="mx-auto mb-12 max-w-5xl text-center lg:mb-20">
                  <h2 className="mb-3 text-4xl font-extrabold leading-[1.2] text-white sm:text-5xl md:text-[60px]">
                    Our Services
                  </h2>
                  <p className="text-base font-medium text-[14px] text-gray-200">
                    At Klimalogia, we offer a full spectrum of sustainability
                    and climate solutions tailored to help your business achieve
                    its goals. Whether you&apos;re a startup or an industry
                    leader, we combine cutting-edge technology, industry
                    expertise, and innovative strategies to provide practical,
                    actionable, and transformative solutions.
                  </p>
                  <div className="flex justify-center mt-6">
                    <AnimatedButton
                      link="/contact-us"
                      text="How can we Help?"
                      l="44"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="md:px-52 flex flex-col justify-center items-center gap-24">
              {datas.map((data, index) => (
                <div key={index} className="gradient-border w-full">
                  <div
                    className={`service-card rounded-xl p-8 flex-col md:flex-row flex justify-center md:gap-20 items-center w-full h-full ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="relative w-full md:w-1/2 px-10 md:px-5 py-52">
                      <Image
                        src={data.image || "/placeholder.svg"}
                        alt={data.title}
                        layout="fill"
                        objectFit="cover"
                        className="z-20 rounded-xl shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]"
                      />
                    </div>

                    <div className="w-full md:w-1/2 px-10 md:px-0">
                      <h1
                        className="mb-3 text-center md:text-left text-white text-2xl font-extrabold leading-[1.2] sm:text-3xl md:text-[40px]"
                        style={{ lineHeight: "46px" }}
                      >
                        {data.title}
                      </h1>

                      <p className="text-base font-medium text-[14px] text-gray-200">
                        {data.p1}
                        <br />
                        <br />
                        {data.p2}
                        <br />
                        <br />
                        {data.p3}
                      </p>

                      <div className="flex justify-end mt-6">
                        <AnimatedButton
                          link={"/contact-us"}
                          l="32"
                          text="More Details"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </HeroBg>
  );
};

export default Page;
