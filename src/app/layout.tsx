import type React from "react";
import type { Metadata } from "next";
import ClientLayout from "./ClientLayout";
import "./globals.css";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: {
    default: "Klimalogia - Climate Action & Sustainability Solutions",
    template: "%s | Klimalogia",
  },
  description:
    "Your global partner in climate action and sustainable transformation. We deliver end-to-end sustainability solutions through technical depth and strategic insight to help organizations integrate climate action into business decisions.",
  keywords: [
    "climate action",
    "sustainability",
    "ESG",
    "carbon neutrality",
    "green building",
    "renewable energy",
    "climate consulting",
    "environmental consulting",
    "sustainability strategy",
    "decarbonization",
  ],
  authors: [{ name: "Klimalogia" }],
  creator: "Klimalogia",
  publisher: "Klimalogia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://klimalogia.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://klimalogia.com",
    title: "Klimalogia - Climate Action & Sustainability Solutions",
    description:
      "Your global partner in climate action and sustainable transformation. Driving meaningful impact through innovative solutions.",
    siteName: "Klimalogia",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Klimalogia - Climate Action & Sustainability Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Klimalogia - Climate Action & Sustainability Solutions",
    description:
      "Your global partner in climate action and sustainable transformation. Driving meaningful impact through innovative solutions.",
    images: ["/og-image.jpg"],
    creator: "@miidlaj",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <ClientLayout>{children}</ClientLayout>
    </Providers>
  );
}
