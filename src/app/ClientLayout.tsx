"use client";

import type React from "react";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="color-scheme" content="light" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />

        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/background.mp4"
          as="video"
          type="video/mp4"
        />
        <link rel="preload" href="/background.png" as="image" />

        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Klimalogia",
              description:
                "International climate change and sustainability consulting firm delivering end-to-end solutions for organizations worldwide.",
              url: "https://klimalogia.com",
              logo: "https://klimalogia.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-123-4567",
                contactType: "customer service",
                availableLanguage: ["English"],
              },
              sameAs: [
                "https://linkedin.com/company/klimalogia",
                "https://twitter.com/klimalogia",
                "https://instagram.com/klimalogia",
                "https://youtube.com/@klimalogia",
                "https://facebook.com/klimalogia",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "Global",
              },
              foundingDate: "2020",
              industry: "Environmental Consulting",
              numberOfEmployees: "50-100",
              services: [
                "Climate Strategy & Advisory",
                "ESG Reporting & Assurance",
                "Carbon Accounting & Verification",
                "Sustainability Transformation",
                "Green Building Certification",
                "Renewable Energy Solutions",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`font-inter antialiased bg-white text-gray-900 overflow-x-hidden`}
      >
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        {/* Main content wrapper */}
        <div id="main-content" className="min-h-screen">
          {children}
        </div>

        {/* Analytics Scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Google Analytics 4
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />

        {/* Performance monitoring */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Web Vitals monitoring
              if ('web-vital' in window) {
                // Monitor Core Web Vitals
                new PerformanceObserver((entryList) => {
                  for (const entry of entryList.getEntries()) {
                    console.log('Web Vital:', entry.name, entry.value);
                  }
                }).observe({entryTypes: ['measure']});
              }
            `,
          }}
        />

        {/* Cookie Consent Banner */}
        <div
          id="cookie-banner"
          className="fixed bottom-0 left-0 right-0 bg-slate-900 text-white p-4 z-50 transform translate-y-full transition-transform duration-300"
        >
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm">
              <p>
                We use cookies to enhance your experience and analyze our
                website traffic.{" "}
                <a
                  href="/cookie-policy"
                  className="underline hover:text-blue-300"
                >
                  Learn more
                </a>
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  document
                    .getElementById("cookie-banner")
                    ?.classList.add("translate-y-full");
                  localStorage.setItem("cookies-accepted", "true");
                }}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm font-medium transition-colors"
              >
                Accept All
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById("cookie-banner")
                    ?.classList.add("translate-y-full");
                  localStorage.setItem("cookies-accepted", "essential");
                }}
                className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded text-sm font-medium transition-colors"
              >
                Essential Only
              </button>
            </div>
          </div>
        </div>

        {/* Cookie Banner Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Show cookie banner if not already accepted
              if (!localStorage.getItem('cookies-accepted')) {
                setTimeout(() => {
                  const banner = document.getElementById('cookie-banner');
                  if (banner) {
                    banner.classList.remove('translate-y-full');
                  }
                }, 2000);
              }
            `,
          }}
        />

        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
