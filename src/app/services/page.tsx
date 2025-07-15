import AnimatedButton from "./components/animated-button";
import Image from "next/image";
import type { Metadata } from "next";
import "./services.css";
import HeroBg from "@/components/hero-bg";

export const metadata: Metadata = {
  title: "Services | Sustainability Solutions",
  description:
    "Explore our comprehensive sustainability and environmental services including Strategy & Advisory, Assurance & Compliance, Action & Transformation, and Digital Solutions.",
};

const services = [
  {
    title: "Strategy & Advisory",
    description: "Comprehensive sustainability strategy, ESG reporting, GHG accounting, decarbonization pathways, net-zero target setting, climate risk assessment, climate transition planning, carbon markets, sustainable finance, and sustainability benchmarking solutions.",
    features: [
      "Sustainability Strategy Design",
      "ESG Reporting & Advisory", 
      "GHG Accounting",
      "Decarbonization Pathways",
      "Net-Zero Target Setting",
      "Climate Risk Assessment",
      "Climate Transition Planning",
      "Carbon Markets",
      "Sustainable Finance",
      "Sustainability Benchmarking"
    ],
    image: "/service/stratergy.jpg",
    link: "/services/strategy-advisory",
  },
  {
    title: "Assurance & Compliance",
    description: "Third-party verification and certification across green buildings, carbon neutrality, ISO standards, sector-specific certifications, environmental product declarations, ESG assurance, GHG verification, and regulatory compliance.",
    features: [
      "Green Building Certifications",
      "Net-Zero & Carbon-Neutrality",
      "Carbon Registry",
      "ISO Certifications",
      "Sector-specific Certifications",
      "Environmental Product Declaration",
      "ESG Assurance",
      "GHG Assurance",
      "Regulatory Compliance"
    ],
    image: "/service/assurance.jpg",
    link: "/services/assurance-compliance",
  },
  {
    title: "Action & Transformation",
    description: "Implementation services including energy and utility audits, waste management and circular economy, environmental impact assessments, nature and biodiversity programs, renewable energy solutions, environmental testing, emission quantification, and sustainability workshops.",
    features: [
      "Energy and Utility Audits",
      "Waste Audits & Circular Economy",
      "Environmental Impact Assessment",
      "Nature and Biodiversity",
      "Renewable Energy",
      "Environmental Testing",
      "Emission Quantification",
      "Sustainability Workshops"
    ],
    image: "/service/efficiency.jpg",
    link: "/services/action-transformation",
  },
  {
    title: "Digital Solutions",
    description: "Advanced modeling and simulation tools including energy modeling, solar PV design, lifecycle assessment, climate modeling and scenario analysis, lighting simulation, emission quantification, and customized digital sustainability solutions.",
    features: [
      "Energy Modeling",
      "Solar PV Design & Simulation",
      "Life Cycle Assessment (LCA)",
      "Climate Modeling",
      "Climate Scenario Analysis",
      "Lighting Simulation",
      "Emission Quantification",
      "Customized Digital Solutions"
    ],
    image: "/service/climate.jpg",
    link: "/services/digital-solutions",
  },
];

const Page = () => {
  return (
    <HeroBg video="/service.mp4" image="/service.jpg">
      <div className="min-h-screen pb-20">
        <section className="pb-[88px] pt-20">
          <div className="mx-auto">
            <div className="flex flex-wrap">
              <div className="w-full px-4">
                <div className="mx-auto mb-12 max-w-5xl text-center lg:mb-20">
                  <h2 className="mb-3 text-4xl font-extrabold leading-[1.2] text-white sm:text-5xl md:text-[60px]">
                    Our Services
                  </h2>
                  <p className="text-base font-medium text-[14px] text-gray-200 max-w-4xl mx-auto">
                    At Klimalogia, we deliver end-to-end climate and sustainability solutions designed to help your business meet its goals. With deep domain expertise and a hands-on approach, we support clients across industries and geographies by integrating innovative technology, sector-specific expertise, and forward-thinking strategies to deliver practical, high-impact results. Our services add value by aligning business performance with climate goals, regulatory demands, and stakeholder expectations.
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
              {services.map((service, index) => (
                <div key={index} className="gradient-border w-full">
                  <div
                    className={`service-card rounded-xl p-8 flex-col md:flex-row flex justify-center md:gap-20 items-center w-full h-full ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="relative w-full md:w-1/2 px-10 md:px-5 py-52">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
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
                        {service.title}
                      </h1>

                      <p className="text-base font-medium text-[14px] text-gray-200 mb-4">
                        {service.description}
                      </p>

                      <div className="mb-4">
                        <h3 className="text-lg font-semibold text-white mb-2">Key Services:</h3>
                        <div className="grid grid-cols-1 gap-1">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="text-sm text-gray-300">
                              • {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-end mt-6">
                        <AnimatedButton
                          link={service.link}
                          l="32"
                          text="Learn More"
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