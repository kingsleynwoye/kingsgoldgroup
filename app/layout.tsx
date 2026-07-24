import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import ProgressBar from "./components/ProgressBar";
import PageTransition from "./components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// const siteUrl = "https://www.kingsgoldgroup.com";

// export const metadata: Metadata = {
//   metadataBase: new URL("https://www.kingsgoldgroup.com"),

//   title: {
//     default: "Kingsgold Group",
//     template: "%s | Kingsgold Group",
//   },

//   description:
//     "Kingsgold Group is a diversified business group building innovative companies across technology, finance, real estate, agriculture, and the creative industries.",

//   openGraph: {
//     type: "website",
//     url: "https://www.kingsgoldgroup.com",
//     title: "Kingsgold Group",
//     description: "Building Businesses That Shape the Future.",
//     siteName: "Kingsgold Group",
//     images: [
//       {
//         url: "https://www.kingsgoldgroup.com/images/kingsgoldgroup-meta.png",
//         width: 1200,
//         height: 630,
//         alt: "Kingsgold Group",
//       },
//     ],
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "Kingsgold Group",
//     description: "Building Businesses That Shape the Future.",
//     images: [
//       "https://www.kingsgoldgroup.com/images/kingsgoldgroup-meta.png",
//     ],
//   },
// };

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kingsgoldgroup.com"),

  manifest: "/site.webmanifest",

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

  generator: "Next.js",

  creator: "Kingsley Chidubem Nwoye",

  publisher: "Kingsgold Group",

  category: "Business",

  referrer: "origin-when-cross-origin",

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

  // alternates: {
  //   canonical: "/",
  // },

  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://www.kingsgoldgroup.com",
    siteName: "Kingsgold Group",
    title: "Kingsgold Group",
    description:
      "Kingsgold Group is a diversified business group committed to building innovative businesses across multiple industries.",

    images: [
      {
        url: "https://www.kingsgoldgroup.com/images/kingsgoldgroup-meta.png",
        width: 1200,
        height: 630,
        alt: "Kingsgold Group",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@kingsgoldgroup",
    creator: "@kingsgoldgroup",
    title: "Kingsgold Group",
    description: "Building innovative businesses across multiple industries.",
    images: ["https://www.kingsgoldgroup.com/images/kingsgoldgroup-meta.png"],
  },

  icons: {
    icon: [
      {
        url: "/logo/favicon.ico",
      },
      {
        url: "/logo/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/logo/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: "/logo/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],

    shortcut: "/logo/favicon.ico",
  },

  appleWebApp: {
    capable: true,
    title: "Kingsgold Group",
    statusBarStyle: "black-translucent",
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
        {/* <ProgressBar /> */}
        <PageTransition />
        <Header />
        {children}
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Kingsgold Group",
              url: "https://www.kingsgoldgroup.com",
              "@id": "https://www.kingsgoldgroup.com/#organization",
              brand: {
                "@type": "Brand",
                name: "Kingsgold",
              },
              image:
                "https://www.kingsgoldgroup.com/images/kingsgoldgroup-meta.png",
              logo: {
                "@type": "ImageObject",
                url: "https://www.kingsgoldgroup.com/logo/logo.png",
                width: 1024,
                height: 1024,
              },
              slogan: "Building Businesses That Shape the Future.",
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
              sameAs: [
                "https://www.linkedin.com/company/kingsgoldgroup",
                "https://www.facebook.com/kingsgoldgroup",
                "https://www.instagram.com/kingsgoldgroup",
                "https://x.com/kingsgoldgroup",
                "https://www.youtube.com/@kingsgoldgroup",
              ],
            }),
          }}
        />
        <Footer />
      </body>
    </html>
  );
}
