import { Changelog } from "@/components/21first/solutions-component";

const sustainabilityEntries = [
  {
    version: "What We Offer",
    date: "Strategy & Advisory",
    title: "Comprehensive Sustainability Solutions",
    description:
      "Our Strategy & Advisory services help organizations build a clear path towards climate action and compliance, aligned with science. We provide end-to-end support to define sustainability goals, develop actionable strategies, and report transparently in line with global standards and frameworks.",
    items: [
      "Sustainability Strategy – Design customized sustainability strategies, policies, and roadmaps that integrate environmental, social, and governance (ESG) principles into core business operations across the value chain. Align corporate objectives with global climate goals to drive resilience, stakeholder value and competitive advantage.",
      "ESG Reporting – Develop ESG and sustainability reports in accordance with leading frameworks including GRI Standards, TCFD, TNFD, CSRD, ESRS, CDP, SASB, ISSB and BCSI IFRS. Ensure legal compliance and regulatory alignment while enhancing stakeholder transparency and trust. Identify gaps, meet regulatory requirements, integrate UN Sustainable Development Goals (SDGs), enhance transparency and build stakeholder confidence.",
      "ESG Advisory – Identify and implement strategic initiatives to enhance ESG performance metrics including carbon markets and sustainability opportunities to build competitive advantage. Develop ESG policies, procedures, and governance structures. Create business cases for stakeholders.",
      "GHG Accounting – Quantify and report Scope 1, Scope 2, and Scope 3 greenhouse gas (GHG) emissions to establish baseline measurements for decarbonization initiatives aligned with GHG Protocol and ISO 14064. Assess GHG emission inventories to establish credible emissions baseline, inform climate strategy and meet regulatory compliance.",
      "Decarbonization Pathways – Develop decarbonization pathways by identifying key drivers and levers and performing quantitative and quantitative assessments through financial, economic and carbon modelling. Set Science-Based Targets and implement Nature-based Solutions (NbS) resulting in a lower corporate carbon footprint.",
      "Net-Zero Target Setting – Achieve science-based net-zero targets in line with the Science-Based Targets initiative (SBTi), establishing both near-term and long-term climate commitments that drive decarbonization in line with the 1.5°C pathway under the Paris Agreement.",
      "Climate Risk Assessment – Deliver comprehensive assessments of climate-related risks and opportunities through quantitative and qualitative assessments of physical and transition risks, scenario analysis, and climate transition planning aligned with global frameworks. Build climate resilience, meet regulatory expectations, and enable informed decision-making.",
      "Climate Transition Plan – Design company-specific optimized transition strategies backed by science-based targets, decarbonization strategies, climate risk assessments, regulatory compliance, governance frameworks, and capital allocation. Implement pathways toward achieving Net-Zero ambitions and resilience.",
      "Carbon Markets – Support clients in navigating global compliance and voluntary carbon markets, accounting methods aligned with accepted standards for offset, and investing in high-impact decarbonization projects. Develop and implement strategies such as internal carbon pricing to advance organizational Net-Zero ambitions and promote carbon accountability.",
      "Sustainable Finance – Facilitate the integration of sustainability into financial decision-making and capital flows through ESG-linked financing, sustainability bonds, green investment strategies, and ESG integration in investment analysis. Support improved investment risk assessments, stakeholder transparency and long-term financial performance.",
      "Sustainability Benchmarking – Evaluate sustainability performance against industry peers and global best practices to gather insights, identify performance gaps, and prioritize opportunities. Enable data-driven decision making and alignment with stakeholder expectations.",
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
    title: "Strategic Value for Your Organization",
    description:
      "In a rapidly evolving global landscape, integrating sustainability and ESG principles into core business strategy is essential for ensuring long-term success, resilience, and competitiveness. Organizations that embed climate action into their corporate objectives are better positioned to thrive.",
    items: [
      "Ensure regulatory compliance – Meet evolving ESG disclosure mandates, climate reporting regulations, and sustainability standards across global jurisdictions.",
      "Enhance brand value and stakeholder confidence – Build trust with investors, customers, employees, and regulators through strong ESG performance, transparent disclosures, and commitment to climate action.",
      "Strengthen climate resilience and manage risks – Identify and mitigate physical and transition risks through climate risk assessments, scenario analysis, and climate transition planning aligned with global frameworks.",
      "Achieve net-zero and decarbonization goals – Implement science-based targets, GHG accounting, and decarbonization pathways that reduce corporate carbon footprints.",
      "Gain a competitive edge in the low-carbon economy – Benchmark sustainability efforts, close performance gaps, and align with industry best practices to meet investor expectations and gain market leadership.",
      "Unlock sustainable finance and investment – Access ESG-linked financing, sustainability bonds, and green financing by demonstrating responsible investment strategies and responsible governance that appeals to ESG-focused investors.",
      "Drive informed decision-making – Leverage accurate GHG inventories, ESG insights, and climate data to guide strategic planning, capital allocation, and organizational transformation.",
      "Attract and retain talent and customers – Demonstrate climate leadership and responsible business practices to engage sustainability-conscious stakeholders and future-proof your brand.",
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
    title: "Your Dedicated Sustainability Partner",
    description:
      "Our services extend beyond traditional consulting, with Klimalogia as your dedicated partner in accelerating progress along your sustainability journey. Leveraging deep technical expertise, cross-sector experience, and a forward-thinking approach, we help businesses meet regulatory compliance and unlock strategic advantage through customized sustainability solutions. From defining sustainability goals to implementing actionable climate strategies, our customized solutions empower clients to drive meaningful impact and lead in climate action.",
    items: [
      "Specialized Expertise Across Domains – Our team brings deep, cross-sector expertise in sustainability, ESG reporting, climate risk, net zero transitions, and sustainable finance. With extensive experience across industries and regulatory landscapes, we help businesses navigate complexity with clarity and confidence at every stage to",
      "Customized Sustainability Solutions – Every organization has distinct challenges and priorities. We develop customized strategies that are tailored to your business model, industry, and stakeholder expectations, ensuring that your ESG and sustainability initiatives are specific, measurable, and aligned with your long-term growth objectives.",
      "Implementation-Driven Advisory – We serve as a strategic partner, operating as an extension of your team. With a strong focus on real-world execution, we provide practical support at every stage to transform your sustainability commitments into measurable action.",
      "Integrated Global Frameworks and Regulations – We help you navigate complex regulatory landscapes and disclosure requirements with confidence, leveraging our deep knowledge of frameworks such as GRI, TCFD, ISSB, CSRD, SBTi, and the Paris Agreement.",
      "Drive Stakeholder Confidence – With robust methodologies and transparent processes, we help you achieve ESG and climate goals that build trust with investors, regulators, and rating agencies can trust – strengthening your market credibility and improving access to sustainable finance.",
      "Climate Focus Business Impact – Our advisory approach is built on delivering tangible business benefits such as risk mitigation, capital access, operational efficiency, and brand value – positioning your organization for sustainable growth in the low-carbon economy.",
      "Flexibility and Personalized Attention – As experts in climate change and sustainability advisory, we provide the focus and flexibility of a boutique firm with the technical depth and experience of a global advisor. Our clients benefit from personalized attention, faster response times, and senior-level engagement throughout their sustainability journey.",
      "Commitment to Long-Term Partnerships – We stay with you beyond the strategy phase, supporting your sustainability journey as it evolves. From from early pilots to full-scale integration, we help scale your impact and deliver lasting results.",
    ],
    image: "/service/business.jpg",
    button: {
      url: "/contact-us",
      text: "Partner with us",
    },
  },
];

export default function Home() {
  return (
    <main className="relative">
      <Changelog
        title="Strategy & Advisory"
        description="Comprehensive sustainability solutions to help organizations build a clear path towards climate action and compliance, aligned with science."
        entries={sustainabilityEntries}
      />
    </main>
  );
}
