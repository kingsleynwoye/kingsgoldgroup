import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kingsgoldgroup.vercel.app"),

  title: {
    default: "Kingsgold Group",
    template: "%s | Kingsgold Group",
  },

  description:
    "Kingsgold Group is a diversified business group committed to building innovative businesses across multiple industries through entrepreneurship, innovation, and long-term value creation.",

  applicationName: "Kingsgold Group",

  keywords: [
    "Kingsgold Group",
    "Kingsgold",
    "Business Group",
    "Diversified Business Group",
    "Business Development",
    "Entrepreneurship",
    "Innovation",
    "Investment",
    "Business Management",
    "Holding Company",
    "Corporate Group",
    "Nigeria",
    "Africa",
  ],

  authors: [
    {
      name: "Kingsley Chidubem Nwoye",
    },
  ],

  creator: "Kingsley Chidubem Nwoye",

  publisher: "Kingsgold Group",

  category: "Business",

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

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kingsgoldgroup.vercel.app",
    siteName: "Kingsgold Group",
    countryName: "Nigeria",

    title: "Kingsgold Group",

    description:
      "Kingsgold Group is a diversified business group focused on building, developing, and managing businesses across multiple industries through entrepreneurship, innovation, and long-term value creation.",
    images: [
      {
        url: "/images/kingsgoldgroup-meta.png",
        width: 1200,
        height: 630,
        alt: "Kingsgold Group",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Kingsgold Group",

    description: "Building innovative businesses across multiple industries.",

    images: ["/images/kingsgoldgroup-meta.png"],
  },

  icons: {
    icon: "/logo/favicon.ico",
    shortcut: "/logo/favicon.ico",
    apple: "/logo/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Kingsgold Group",
              url: "https://kingsgoldgroup.vercel.app",
              logo: {
                "@type": "ImageObject",
                url: "https://kingsgoldgroup.vercel.app/logo/logo.svg",
              },
              slogan: "From Coal to Gold",
              description:
                "Kingsgold Group is a diversified business group committed to building innovative businesses across multiple industries through entrepreneurship, innovation, and long-term value creation.",
              founder: {
                "@type": "Person",
                name: "Kingsley Chidubem Nwoye",
              },
              foundingLocation: {
                "@type": "Country",
                name: "Nigeria",
              },
              sameAs: ["https://www.linkedin.com/company/kingsgoldgroup"],
            }),
          }}
        />
      </body>
    </html>
  );
}
