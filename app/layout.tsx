import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://kingsgoldgroup.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL("https://kingsgoldgroup.vercel.app"),

  title: {
    default: "Kingsgold Group",
    template: "%s | Kingsgold Group",
  },

  description:
    "Kingsgold Group is a diversified business group building innovative companies across technology, finance, real estate, agriculture, and the creative industries.",

  openGraph: {
    type: "website",
    url: "https://kingsgoldgroup.vercel.app",
    title: "Kingsgold Group",
    description: "Building Businesses That Shape the Future.",
    siteName: "Kingsgold Group",
    images: [
      {
        url: "https://kingsgoldgroup.vercel.app/images/kingsgoldgroup-meta.png",
        width: 1200,
        height: 630,
        alt: "Kingsgold Group",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kingsgold Group",
    description: "Building Businesses That Shape the Future.",
    images: [
      "https://kingsgoldgroup.vercel.app/images/kingsgoldgroup-meta.png",
    ],
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
        <Header />
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
        <Footer />
      </body>
    </html>
  );
}
