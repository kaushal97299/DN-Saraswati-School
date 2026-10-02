import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import "./globals.css";

/* =========================================================
   FONTS
========================================================= */

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

/* =========================================================
   SITE CONFIG
========================================================= */

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const siteName = "DN Saraswati Sr. Sec. School, Samain";

const siteDescription =
  "Official website of DN Saraswati Sr. Sec. School, Samain. Explore academics, admissions, faculty, facilities, events, results and other school information.";

/* =========================================================
   SEO METADATA
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },

  description: siteDescription,

  keywords: [
    "DN Saraswati Sr Sec School Samain",
    "DN Saraswati School Samain",
    "DN Saraswati Sr Sec School",
    "school in Samain",
    "school in Haryana",
    "CBSE school Samain",
    "CBSE school Haryana",
  ],

  authors: [
    {
      name: "DN Saraswati Sr. Sec. School",
    },
  ],

  creator: "DN Saraswati Sr. Sec. School",
  publisher: "DN Saraswati Sr. Sec. School",

  applicationName: siteName,

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,

    siteName,

    title: siteName,

    description: siteDescription,

    images: [
      {
        url: "/images/school-hero.jpg",
        width: 1200,
        height: 630,
        alt: "DN Saraswati Sr. Sec. School, Samain",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: siteName,

    description: siteDescription,

    images: ["/images/school-hero.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

/* =========================================================
   ROOT LAYOUT
========================================================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body
        className={`${inter.variable} ${playfair.variable} min-h-screen bg-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}