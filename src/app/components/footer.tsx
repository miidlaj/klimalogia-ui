import Logo from "@/components/logo";
import Link from "next/link";
import {
  Mail,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Facebook,
} from "lucide-react";

// Data arrays (footerSections, socialLinks) remain unchanged...
const footerSections = [
  {
    title: "SERVICES",
    links: [
      { href: "/services/strategy-advisory", label: "Strategy & Advisory" },
      {
        href: "/services/assurance-compliance",
        label: "Assurance & Compliance",
      },
      {
        href: "/services/action-transformation",
        label: "Action & Transformation",
      },
      { href: "/services/digital-solutions", label: "Digital Solutions" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { href: "/about-us", label: "About Us" },
      { href: "/mission-vision", label: "Mission & Vision" },
      { href: "/team", label: "Our Team" },
      { href: "/careers", label: "Careers" },
      { href: "/news", label: "News & Updates" },
    ],
  },
  {
    title: "CLIENTS",
    links: [
      { href: "/clients", label: "Our Clients" },
      { href: "/case-studies", label: "Case Studies" },
      { href: "/projects", label: "Projects" },
      { href: "/testimonials", label: "Testimonials" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { href: "/resources", label: "Resources" },
      { href: "/blog", label: "Blog" },
      { href: "/whitepapers", label: "Whitepapers" },
      { href: "/webinars", label: "Webinars" },
      { href: "/sustainability-guide", label: "Sustainability Guide" },
    ],
  },
  {
    title: "CONNECT",
    links: [
      { href: "/contact", label: "Contact Us" },
      { href: "/partner-with-us", label: "Partnership" },
      { href: "/support", label: "Support" },
      { href: "/newsletter", label: "Newsletter" },
    ],
  },
];

const socialLinks = [
  { href: "mailto:info@klimalogia.com", icon: Mail, label: "Email" },
  {
    href: "https://instagram.com/klimalogia",
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "https://linkedin.com/company/klimalogia",
    icon: Linkedin,
    label: "LinkedIn",
  },
  { href: "https://twitter.com/klimalogia", icon: Twitter, label: "Twitter" },
  { href: "https://youtube.com/@klimalogia", icon: Youtube, label: "YouTube" },
  {
    href: "https://facebook.com/klimalogia",
    icon: Facebook,
    label: "Facebook",
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2527 867"
          fill="none"
          // 3. Made SVG responsive: fills container without distortion
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full"
        >
          <g opacity="0.26" clipPath="url(#clip0_243_2)">
            <mask
              id="mask0_243_2"
              style={{ maskType: "luminance" }}
              maskUnits="userSpaceOnUse"
              x={0}
              y={0}
              width={2527}
              height={867}
            >
              <path d="M2527 0H0V867H2527V0Z" fill="white" />
            </mask>
            <g mask="url(#mask0_243_2)">
              <path
                d="M3359.05 -449.001C2904.14 -153.567 2359.39 272.531 1961.09 831.967C1169.58 1941.54 1417.64 2929.22 1604.64 3406.64H1721.18C1471.91 2929.14 1141.27 1941.14 2195.61 831.345C2726.75 272.25 3453.45 -153.628 4060.1 -448.981H3359.05V-449.001Z"
                fill="url(#paint0_linear_243_2)"
              />
              <path
                d="M3359.04 -449.001C2904.14 -153.567 2359.39 272.531 1961.09 831.967C1169.57 1941.54 1417.64 2929.22 1604.64 3406.64H1488.11C1363.43 2929.3 1197.93 1941.96 1726.62 832.61C1992.09 272.833 2354.87 -153.487 2657.99 -449.001H3359.04Z"
                fill="url(#paint1_linear_243_2)"
              />
              <path
                d="M2657.98 -449.001C2354.81 -153.487 1992.08 272.833 1726.62 832.61C1197.92 1941.96 1363.42 2929.3 1488.1 3406.64H1371.57C1309.15 2929.4 1226.22 1942.36 1492.1 833.252C1624.73 273.134 1805.55 -153.407 1956.92 -449.001H2657.98Z"
                fill="url(#paint2_linear_243_2)"
              />
              <path
                d="M1956.93 -449.001C1956.93 -448.994 1956.93 -448.987 1956.92 -448.98H1255.93L1255.92 3406.64H1371.58C1309.16 2929.4 1226.23 1942.36 1492.11 833.253C1624.74 273.147 1805.5 -153.387 1956.92 -448.98H1956.99L1956.93 -449.001Z"
                fill="url(#paint3_linear_243_2)"
              />
              <path
                d="M-846.946 -449.001C-392.039 -153.567 152.706 272.531 551.009 831.967C1342.52 1941.54 1094.46 2929.22 907.456 3406.64H790.925C1040.19 2929.14 1370.83 1941.14 316.493 831.345C-214.647 272.25 -941.354 -153.628 -1548 -448.981H-846.946V-449.001Z"
                fill="url(#paint4_linear_243_2)"
              />
              <path
                d="M-846.941 -449.001C-392.035 -153.567 152.71 272.531 551.013 831.967C1342.53 1941.54 1094.46 2929.22 907.46 3406.64H1023.99C1148.67 2929.3 1314.17 1941.96 785.476 832.61C520.01 272.833 157.228 -153.487 -145.887 -449.001H-846.941Z"
                fill="url(#paint5_linear_243_2)"
              />
              <path
                d="M-145.879 -449.001C157.288 -153.487 520.019 272.833 785.485 832.61C1314.18 1941.96 1148.68 2929.3 1024 3406.64H1140.53C1202.95 2929.4 1285.88 1942.36 1020 833.252C887.372 273.134 706.551 -153.407 555.175 -449.001H-145.879Z"
                fill="url(#paint6_linear_243_2)"
              />
              <path
                d="M555.165 -449.001C555.168 -448.994 555.171 -448.987 555.175 -448.98H1256.17L1256.18 3406.64H1140.52C1202.94 2929.4 1285.87 1942.36 1019.99 833.253C887.364 273.147 706.601 -153.387 555.175 -448.98H555.113L555.165 -449.001Z"
                fill="url(#paint7_linear_243_2)"
              />
            </g>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_243_2"
              x1="1893.38"
              y1="4713.43"
              x2="3862.16"
              y2="618.619"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.659397" stopColor="#FFE88E" />
              <stop offset="0.709823" stopColor="#00B2B1" />
              <stop offset="0.793779" stopColor="#2A3479" />
              <stop offset="0.887984" stopColor="#004626" stopOpacity={0} />
            </linearGradient>
            <linearGradient
              id="paint1_linear_243_2"
              x1="1722.96"
              y1="4713.43"
              x2="4006.98"
              y2="1126.36"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.659397" stopColor="#FFE88E" />
              <stop offset="0.709823" stopColor="#00B2B1" />
              <stop offset="0.793779" stopColor="#2A3479" />
              <stop offset="0.887984" stopColor="#004626" stopOpacity={0} />
            </linearGradient>
            <linearGradient
              id="paint2_linear_243_2"
              x1="1552.5"
              y1="4713.43"
              x2="4068.76"
              y2="2043.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.659397" stopColor="#FFE88E" />
              <stop offset="0.709823" stopColor="#00B2B1" />
              <stop offset="0.793779" stopColor="#2A3479" />
              <stop offset="0.887984" stopColor="#004626" stopOpacity={0} />
            </linearGradient>
            <linearGradient
              id="paint3_linear_243_2"
              x1="1382.76"
              y1="4713.43"
              x2="3514.07"
              y2="3538.62"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.659397" stopColor="#FFE88E" />
              <stop offset="0.709823" stopColor="#00B2B1" />
              <stop offset="0.793779" stopColor="#2A3479" />
              <stop offset="0.887984" stopColor="#004626" stopOpacity={0} />
            </linearGradient>
            <linearGradient
              id="paint4_linear_243_2"
              x1="618.719"
              y1="4713.43"
              x2="-1350.06"
              y2="618.619"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.659397" stopColor="#FFE88E" />
              <stop offset="0.709823" stopColor="#00B2B1" />
              <stop offset="0.793779" stopColor="#2A3479" />
              <stop offset="0.887984" stopColor="#004626" stopOpacity={0} />
            </linearGradient>
            <linearGradient
              id="paint5_linear_243_2"
              x1="789.138"
              y1="4713.43"
              x2="-1494.88"
              y2="1126.36"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.659397" stopColor="#FFE88E" />
              <stop offset="0.709823" stopColor="#00B2B1" />
              <stop offset="0.793779" stopColor="#2A3479" />
              <stop offset="0.887984" stopColor="#004626" stopOpacity={0} />
            </linearGradient>
            <linearGradient
              id="paint6_linear_243_2"
              x1="959.601"
              y1="4713.43"
              x2="-1556.66"
              y2="2043.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.659397" stopColor="#FFE88E" />
              <stop offset="0.709823" stopColor="#00B2B1" />
              <stop offset="0.793779" stopColor="#2A3479" />
              <stop offset="0.887984" stopColor="#004626" stopOpacity={0} />
            </linearGradient>
            <linearGradient
              id="paint7_linear_243_2"
              x1="1129.34"
              y1="4713.43"
              x2="-1001.97"
              y2="3538.62"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.659397" stopColor="#FFE88E" />
              <stop offset="0.709823" stopColor="#00B2B1" />
              <stop offset="0.793779" stopColor="#2A3479" />
              <stop offset="0.887984" stopColor="#004626" stopOpacity={0} />
            </linearGradient>
            <clipPath id="clip0_243_2">
              <rect width={2527} height={867} fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* 4. Removed the redundant dark overlay div */}

      {/* Content - sits above the background SVG */}
      <div className="relative z-10 pt-16 pb-8">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <Logo height={120} width={120} />
              </Link>
              <p className="text-blue-100 text-sm leading-relaxed mb-6 max-w-sm">
                Your global partner in climate action and sustainable
                transformation. Driving meaningful impact through innovative
                solutions.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.href}
                    href={social.href}
                    className="w-10 h-10/10 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-100 hover:bg-white/20 hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section) => (
              <div key={section.title} className="lg:col-span-1">
                <h3 className="text-white font-semibold text-sm mb-4 tracking-wider">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-blue-200 hover:text-white text-sm transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-blue-200 text-sm">
                © {new Date().getFullYear()} Klimalogia. All rights reserved.
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                <Link
                  href="/privacy-policy"
                  className="text-blue-200 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="text-blue-200 hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/cookie-policy"
                  className="text-blue-200 hover:text-white transition-colors duration-300"
                >
                  Cookie Policy
                </Link>
                <Link
                  href="/security"
                  className="text-blue-200 hover:text-white transition-colors duration-300"
                >
                  Security
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
