import type { Metadata } from "next";
import { Stack_Sans_Headline } from "next/font/google";

export const stack_sans_headline = Stack_Sans_Headline({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Read the terms and conditions governing the use of the Kingsgold Group website.",

  alternates: {
    canonical: "/terms",
  },

  openGraph: {
    title: "Terms of Use | Kingsgold Group",
    description:
      "Read the terms and conditions governing the use of the Kingsgold Group website.",
    url: "https://www.kingsgoldgroup.com/terms",
    images: [
      {
        url: "https://www.kingsgoldgroup.com/images/kingsgoldgroup-meta.png",
        width: 1200,
        height: 630,
        alt: "Kingsgold Group",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Terms of Use | Kingsgold Group",
    description:
      "Read the terms and conditions governing the use of the Kingsgold Group website.",
    images: ["https://www.kingsgoldgroup.com/images/kingsgoldgroup-meta.png"],
  },
};

export default function Terms() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content:
        "By accessing this website, you acknowledge that you have read, understood, and agreed to these Terms of Use. If you do not agree with these terms, you should discontinue use of the website.",
    },
    {
      title: "Website Use",
      content:
        "You may use this website only for lawful purposes. You agree not to misuse the website, attempt unauthorized access, interfere with its operation, or engage in activities that could harm Kingsgold Group or its users.",
    },
    {
      title: "Intellectual Property",
      content:
        "All content on this website, including text, graphics, logos, branding, images, and other materials, is owned by or licensed to Kingsgold Group and is protected by applicable intellectual property laws. Unauthorized use, reproduction, or distribution is prohibited without prior written permission.",
    },
    {
      title: "Business Information",
      content:
        "Information about Kingsgold Group, its businesses, projects, and future plans is provided for general informational purposes only. Such information does not constitute investment, financial, or legal advice.",
    },
    {
      title: "Third-Party Links",
      content:
        "Our website may contain links to third-party websites. Kingsgold Group does not control or endorse these external websites and is not responsible for their content, privacy practices, or services.",
    },
    {
      title: "Limitation of Liability",
      content:
        "Kingsgold Group strives to provide accurate and reliable information; however, we do not guarantee that all information is complete, current, or error-free. We are not liable for any direct, indirect, incidental, or consequential damages arising from the use of this website.",
    },
    {
      title: "Privacy",
      content:
        "Your use of this website is also governed by our Privacy Policy, which explains how we collect, use, and protect personal information.",
    },
    {
      title: "Changes to These Terms",
      content:
        "Kingsgold Group reserves the right to update or modify these Terms of Use at any time. Continued use of the website after changes have been published constitutes acceptance of the updated terms.",
    },
    {
      title: "Governing Law",
      content:
        "These Terms of Use shall be governed by and interpreted in accordance with the applicable laws of Nigeria, without regard to conflict of law principles.",
    },
  ];
  return (
    <main
      className={`min-h-screen bg-white text-[#151716] ${stack_sans_headline.className}`}
    >
      {/* Hero */}

      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="max-w-4xl">
          <span className="inline-flex rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-medium text-[#B8860B]">
            Terms of Use
          </span>

          <h1 className="mt-8 text-4xl font-bold tracking-tight md:text-6xl">
            Terms &{" "}
            <span className="bg-gradient-to-r from-[#9F690F] via-[#FFEB5F] to-[#C9971A] bg-clip-text text-transparent">
              Conditions
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-zinc-600">
            Welcome to Kingsgold Group. By accessing or using our website, you
            agree to comply with these Terms of Use. Please read them carefully
            before using our website or interacting with our services.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="space-y-12">
          {sections.map((section) => (
            <div
              key={section.title}
              className="border-b border-zinc-200 pb-10 last:border-none"
            >
              <div className="mb-5 h-1 w-14 rounded-full bg-gradient-to-r from-[#9F690F] via-[#FFD94A] to-[#C9971A]" />

              <h2 className="text-3xl font-bold">{section.title}</h2>

              <p className="mt-5 max-w-5xl leading-8 text-zinc-600">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="rounded-[2rem] bg-[#151716] p-10 text-white">
          <span className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
            Need Assistance?
          </span>

          <h2 className="mt-5 text-4xl font-bold">
            Questions About Our Terms?
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-zinc-300">
            If you have questions regarding these Terms of Use, please contact
            Kingsgold Group. We are happy to provide additional clarification
            where appropriate.
          </p>

          <div className="mt-10 rounded-2xl border border-[#D4AF37]/30 bg-white/5 p-6">
            <p className="font-semibold text-[#D4AF37]">
              kingsgoldgroup@gmail.com
            </p>

            <p className="mt-2 text-zinc-400">
              We aim to respond to all inquiries as promptly as possible.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#FFF4D4] px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <span className="inline-flex rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-medium text-[#B8860B]">
            Terms of Use
          </span>

          <h2 className="mt-8 text-4xl font-bold tracking-tight md:text-5xl">
            Building Trust Through{" "}
            <span className="bg-gradient-to-r from-[#9F690F] via-[#FFEB5F] to-[#C9971A] bg-clip-text text-transparent">
              Responsibility.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-zinc-600 md:text-xl">
            These Terms help ensure a safe, fair, and transparent experience for
            everyone who interacts with Kingsgold Group. By using our website,
            you agree to respect these guidelines and support a trusted digital
            environment.
          </p>
        </div>
      </section>
    </main>
  );
}
