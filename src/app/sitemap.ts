import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://klimalogia.com"
  const currentDate = new Date()

  // Static pages
  const staticPages = [
    "",
    "/about-us",
    "/mission-vision",
    "/services",
    "/services/strategy-advisory",
    "/services/assurance-compliance",
    "/services/action-transformation",
    "/services/digital-solutions",
    "/projects",
    "/clients",
    "/partner-with-us",
    "/careers",
    "/contact-us",
    "/blog",
    "/resources",
    "/privacy-policy",
    "/terms-of-service",
    "/cookie-policy",
  ]

  return staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: currentDate,
    changeFrequency: path === "" ? "daily" : path.includes("/blog") ? "weekly" : "monthly",
    priority: path === "" ? 1.0 : path.includes("/services") ? 0.9 : 0.8,
  }))
}
