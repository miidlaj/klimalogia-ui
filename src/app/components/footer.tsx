import Link from "next/link"
import { Mail, Instagram, Linkedin, Twitter, Youtube, Facebook, MapPin, Phone, Globe } from "lucide-react"

const footerSections = [
  {
    title: "SERVICES",
    links: [
      { href: "/services/strategy-advisory", label: "Strategy & Advisory" },
      { href: "/services/assurance-compliance", label: "Assurance & Compliance" },
      { href: "/services/action-transformation", label: "Action & Transformation" },
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
]

const socialLinks = [
  { href: "mailto:info@klimalogia.com", icon: Mail, label: "Email" },
  { href: "https://instagram.com/klimalogia", icon: Instagram, label: "Instagram" },
  { href: "https://linkedin.com/company/klimalogia", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com/klimalogia", icon: Twitter, label: "Twitter" },
  { href: "https://youtube.com/@klimalogia", icon: Youtube, label: "YouTube" },
  { href: "https://facebook.com/klimalogia", icon: Facebook, label: "Facebook" },
]

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.1)_50%,transparent_75%)]" />
      </div>

      <div className="relative z-10 pt-16 pb-8">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <div className="text-3xl font-bold text-white">Klimalogia</div>
              </Link>

              <p className="text-blue-100 text-sm leading-relaxed mb-6 max-w-sm">
                Your global partner in climate action and sustainable transformation. Driving meaningful impact through
                innovative solutions.
              </p>

              {/* Contact Info */}
              <div className="space-y-2 mb-6 text-sm text-blue-200">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Global Offices Worldwide</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-4 h-4 mr-2" />
                  <span>www.klimalogia.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.href}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-100 hover:bg-white/20 hover:text-white transition-all duration-300 hover:scale-110"
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
                <h3 className="text-white font-semibold text-sm mb-4 tracking-wider">{section.title}</h3>
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

          {/* Newsletter Signup */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-blue-200 mb-4">Get the latest insights on climate action and sustainability</p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-blue-200 text-sm">© {new Date().getFullYear()} Klimalogia. All rights reserved.</div>

              <div className="flex flex-wrap gap-6 text-sm">
                <Link href="/privacy-policy" className="text-blue-200 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="text-blue-200 hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </Link>
                <Link href="/cookie-policy" className="text-blue-200 hover:text-white transition-colors duration-300">
                  Cookie Policy
                </Link>
                <Link href="/security" className="text-blue-200 hover:text-white transition-colors duration-300">
                  Security
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
