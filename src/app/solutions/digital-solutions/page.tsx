import { Changelog } from "@/components/21first/solutions-component";

const digitalSolutionsEntries = [
  {
    version: "What We Offer",
    date: "Digital Solutions",
    title: "Advanced Digital Tools for Sustainability Excellence",
    description:
      "Our Digital Solutions services enable organizations to harness advanced modeling, simulation, and data tools to quantify sustainability impacts, optimize design performance, and drive informed climate action. By leveraging digital platforms, we unlock precise insights that enhance performance, compliance, and strategic planning.",
    items: [
      "Energy Modeling – Optimize building energy performance using advanced simulation tools including EnergyPlus, IES VE, and eQUEST. Perform dynamic modeling of HVAC systems, envelope design, lighting, and occupancy. To identify energy-saving opportunities across new builds, retrofits, and operations. Support LEED, BREEAM, and WELL certification pathways, green building design certifications, and net zero design strategies.",
      "Solar PV Analysis – Conduct comprehensive solar PV feasibility studies using PVsyst, PVLib, and other specialist models. Advise on rooftop PV, ground-mounted PV systems, and feasibility. Conduct site-specific feasibility analysis, system sizing, shading studies, and energy generation estimates to support onsite renewable energy planning, and system performance, and reduce lifecycle costs.",
      "Life Cycle Analysis (LCA) – Assess the full environmental impact of products, buildings, and systems using tools such as SimaPro, GaBi, OpenLCA, and OneClick LCA. Evaluate cradle-to-grave environmental impacts and embodied carbon across different life-cycle phases to support sustainable design, EPD development, and green procurement.",
      "Climate Modeling – Use scientific climate models such as CLIMADA to simulate climate systems and assess long-term climate risks, including extreme weather patterns. Integrate CMIPS, IPCC AR6 scenarios, and downscaled climate data to provide high-resolution climate-related insights for infrastructure investment climate adaptation and alignment with global adaptation frameworks.",
      "Climate Scenario Analysis – Evaluate climate-related physical and transition risks and opportunities across operations, assets, and supply chains using tools aligned with RCP-SSP, IEA, and NGSF scenarios. Apply global climate and economic models to support climate risk assessments, investments and strategic decision making for long-term resilience.",
      "Lighting Simulation – Enhance lighting design for energy performance and visual comfort using DIALux, Model interior and outdoor lighting simulations that support daylight integration, LED retrofits, and energy performance optimization of lighting systems to meet energy efficiency standards and occupying systems.",
      "Emission Quantification – Quantify Scope 1, 2, and 3 emissions using open-source platforms and GHG Protocol calculation tools. Calculate GHG inventories, emissions hotspots identification, product carbon footprints (PCFs), and compliance with GHG accounting and reporting standards.",
      "Integrated Digital Solutions – Offer tailored digital solutions to meet a wide range of sustainability requirements. Support digital transformation by embedding tools and platforms that enhance decision-making, streamline compliance, and accelerate progress on sustainability targets.",
    ],
    image: "/service/stratergy.jpg",
    button: {
      url: "/contact-us",
      text: "Get in touch",
    },
  },
  {
    version: "How It Matters",
    date: "Business Impact",
    title: "Data-Driven Sustainability Excellence",
    description:
      "Data-driven sustainability is key to unlocking actionable insights, improving environmental performance, and accelerating impact at scale. Digital tools empower organizations to move from assumptions to evidence, enabling smarter design decisions, seamless regulatory compliance, and optimal resource use. The right digital infrastructure can help organizations to:",
    items: [
      "Drive informed decision-making – Digital modeling and simulation tools generate accurate, real-time insights that support smarter decisions across building design, operations, and sustainability strategy. By quantifying energy use, emissions impacts, and performance analytics, organizations unlock value through optimizing performance and accelerating sustainable transitions.",
      "Streamline compliance and reporting – With ESG reporting mandates and climate disclosure laws becoming more rigorous, digital tools streamline data collection, automate calculations, and produce audit-ready outputs that reduce compliance administrative burden while enhancing accuracy.",
      "Improve performance and reduce costs – Simulation and modeling tools identify inefficiencies and unlock cost-saving opportunities across buildings, systems, and supply chains to support more precise performance improvements.",
      "Enable real-time monitoring and adaptive strategy – Leverage digital platforms for real-time feedback that support adaptive sustainability strategies. User dynamic dashboards help organizations take early action based on environmental insights aligned with SBT/ESGT targets.",
      "Demonstrate product and project credibility – Life Cycle Assessments and EPDs provide transparent, data-centric evidence on environmental impacts. These tools enhance product credibility, enable transparency with supply chain stakeholders, and support green marketing and procurement strategies.",
      "Enhance transparency and stakeholder trust – With verified data and traceable compliance, digital solutions back sustainability claims with credibility, which reinforces trust among investors, regulators, customers, and rating agencies.",
      "Gain market access and competitive edge – As sustainability standards and financing opportunities grow, digital tools help businesses achieve eligibility, accelerate certifications, and enter sustainability-focused markets, positioning the organization as a climate-resilient, and adaptive leader.",
    ],
    image: "/service/business.jpg",
    button: {
      url: "/contact-us",
      text: "Learn more",
    },
  },
  {
    version: "Why Choose Us",
    date: "Our Approach",
    title: "Technology-Enabled Sustainability Leadership",
    description:
      "Digital solutions deliver smarter decisions, seamless integration and measurable sustainability outcomes across operations. At Klimalogia, our services are engineered to deliver clarity, speed, and strategic advantage. Our team combines deep climate intelligence, cross-functional design thinking, and data-driven execution to help clients turn digital tools into strategic enablers of climate action.",
    items: [
      "Platform-Agnostic Expertise – We specialize across leading digital platforms and ensure the right solution is matched to each sustainability challenge. Tailored to your tech stack, integration needs, and decision-making goals, we approach climate risk, net zero transitions, and sustainable finance tools that drive performance, resilience.",
      "Full-Cycle Digital Implementation – From tool selection to model setup, user onboarding, validation, and user training, we handle the entire digital transformation journey. Our team ensures you get a fully operational solution that unlocks tech capacity, and competitive advantage.",
      "Deliver Meaningful Insights – We convert complex simulations into intuitive outputs, such as performance dashboards, emissions trends, risk curves, payback analysis, and executive summary. This means faster decisions for strategy, procurement, design, and operations teams.",
      "Enable Ownership and Capacity Building – Build in-house capability through structured training, process automation, and clear digital system documentation, empowering teams to independently manage digital sustainability platforms. We create vendor-agnostic solutions that accelerate reporting, and decision-making.",
      "Technology-Enabled Implementation – Using smart dashboards and performance visualizations, we enable ongoing tracking of ESG metrics and sustainability performance. This creates a living data ecosystem that evolves with your ESG efforts and regulatory requirements.",
      "We Deliver With Discipline – Digital strategy is only valuable when implemented with precision. Our multidisciplinary team delivers a speed, backed by quality assurance and technical rigor, ensuring on-time, on-target execution for every engagement.",
    ],
    image: "/service/choose.jpg",
    button: {
      url: "/contact-us",
      text: "Partner with us",
    },
  },
];

export default function DigitalSolutionsPage() {
  return (
    <main className="">
      <Changelog
        title="Digital Solutions"
        description="Advanced digital tools and platforms to quantify sustainability impacts, optimize performance, and drive data-driven climate action."
        entries={digitalSolutionsEntries}
      />
    </main>
  );
}
