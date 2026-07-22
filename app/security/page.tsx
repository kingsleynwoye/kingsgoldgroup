import type { Metadata } from "next";
import { Stack_Sans_Headline } from "next/font/google";

export const stack_sans_headline = Stack_Sans_Headline({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Our Security",
  description:
    "Learn about Kingsgold Group's commitment to protecting our people, businesses, systems, and data.",

  openGraph: {
    title: "Our Security | Kingsgold Group",
    description:
      "Learn about Kingsgold Group's commitment to protecting our people, businesses, systems, and data.",
    url: "https://www.kingsgoldgroup.com/security",
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
    title: "Our Security | Kingsgold Group",
    description:
      "Learn about Kingsgold Group's commitment to protecting our people, businesses, systems, and data.",
    images: ["https://www.kingsgoldgroup.com/images/kingsgoldgroup-meta.png"],
  },
};

export default function Security() {
  return (
    <main
      className={`min-h-screen bg-white text-[#151716] ${stack_sans_headline.className}`}
    >
      {/* Hero */}

      <section className="mx-auto max-w-7xl px-6 py-28 pb-20">
        <div className="max-w-4xl">
          <span className="inline-flex rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-medium text-[#B8860B]">
            Our Security
          </span>

          <h1 className="mt-8 text-3xl font-bold tracking-tight md:text-6xl">
            Security is at the{" "}
            <span className="bg-gradient-to-r from-[#9F690F] via-[#FFEB5F] to-[#C9971A] bg-clip-text text-transparent">
              Core
            </span>{" "}
            of Everything We Build.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-zinc-600">
            At Kingsgold Group, protecting our people, businesses, data, and
            digital infrastructure is a fundamental priority. We are committed
            to maintaining secure systems, safeguarding sensitive information,
            and continuously strengthening our security practices across every
            company within the Group.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-3xl border border-zinc-200 p-8 bg-[#FFF4D4]">
            <div className="mb-6 h-1 w-12 rounded-full bg-gradient-to-r from-[#9F690F] via-[#FFD94A] to-[#C9971A]" />
            <h3 className="text-xl font-bold">Data Protection</h3>
            <p className="mt-4 leading-8 text-zinc-600">
              We implement industry-standard security measures to protect
              confidential information and reduce unauthorized access.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 p-8 bg-[#FFF4D4]">
            <div className="mb-6 h-1 w-12 rounded-full bg-gradient-to-r from-[#9F690F] via-[#FFD94A] to-[#C9971A]" />
            <h3 className="text-xl font-bold">Infrastructure Security</h3>
            <p className="mt-4 leading-8 text-zinc-600">
              Our digital infrastructure is designed with security, reliability,
              and continuous monitoring to help ensure business continuity.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 p-8 bg-[#FFF4D4]">
            <div className="mb-6 h-1 w-12 rounded-full bg-gradient-to-r from-[#9F690F] via-[#FFD94A] to-[#C9971A]" />
            <h3 className="text-xl font-bold">Privacy First</h3>
            <p className="mt-4 leading-8 text-zinc-600">
              We respect user privacy and are committed to handling personal
              data responsibly and transparently.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 p-8 bg-[#FFF4D4]">
            <div className="mb-6 h-1 w-12 rounded-full bg-gradient-to-r from-[#9F690F] via-[#FFD94A] to-[#C9971A]" />
            <h3 className="text-xl font-bold">Continuous Improvement</h3>
            <p className="mt-4 leading-8 text-zinc-600">
              Security is an ongoing process. We continuously review, improve,
              and strengthen our security practices as technology evolves.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 p-8 bg-[#FFF4D4]">
            <div className="mb-6 h-1 w-12 rounded-full bg-gradient-to-r from-[#9F690F] via-[#FFD94A] to-[#C9971A]" />
            <h3 className="text-xl font-bold">Access Control</h3>
            <p className="mt-4 leading-8 text-zinc-600">
              We follow strict access management principles to ensure only
              authorized individuals can access sensitive systems and
              information.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 p-8 bg-[#FFF4D4]">
            <div className="mb-6 h-1 w-12 rounded-full bg-gradient-to-r from-[#9F690F] via-[#FFD94A] to-[#C9971A]" />
            <h3 className="text-xl font-bold">Risk Management</h3>
            <p className="mt-4 leading-8 text-zinc-600">
              We proactively identify, assess, and mitigate risks to protect our
              businesses, customers, and partners.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="rounded-[2rem] bg-[#151716] p-10 text-white">
          <span className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
            Responsible Disclosure
          </span>

          <h2 className="mt-5 text-4xl font-bold">
            Help Us Keep Kingsgold Group Secure
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-zinc-300">
            If you believe you have discovered a security vulnerability
            affecting Kingsgold Group or any of our companies, we encourage
            responsible disclosure. Please provide sufficient details to help us
            investigate the issue promptly.
          </p>

          <div className="mt-10 rounded-2xl border border-[#D4AF37]/30 bg-white/5 p-6">
            <p className="font-semibold text-[#D4AF37]">
              kingsgoldgroup@gmail.com
            </p>
            <p className="mt-2 text-zinc-400">
              Please do not publicly disclose security issues until they have
              been investigated and resolved.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="bg-[#FFF4D4] py-24 text-center text-black">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold md:text-4xl">
            Building Secure Businesses for the Future
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Security is fundamental to our commitment to innovation, trust, and
            long-term value creation across every business within Kingsgold
            Group.
          </p>
        </div>
      </section> */}
      <section className="bg-[#FFF4D4] px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <span className="inline-flex rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-medium text-[#B8860B]">
            Need More Information?
          </span>

          <h2 className="mt-8 text-4xl font-bold tracking-tight md:text-5xl">
            We're Always{" "}
            <span className="bg-gradient-to-r from-[#9F690F] via-[#FFEB5F] to-[#C9971A] bg-clip-text text-transparent">
              Happy to Help.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-zinc-600 md:text-xl">
            If you couldn't find the answer you were looking for, our team is
            here to assist. Reach out with your questions, partnership
            inquiries, or business opportunities—we're always happy to hear from
            you.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="rounded-full bg-gradient-to-r from-[#9F690F] via-[#FFEB5F] to-[#C9971A] px-8 py-4 font-semibold text-[#151716] transition hover:brightness-110"
            >
              Contact Us
            </a>

            <a
              href="mailto:kingsgoldgroup@gmail.com"
              className="rounded-full border border-[#151716]/15 px-8 py-4 font-semibold text-[#151716] transition hover:border-[#D4AF37] hover:text-[#B8860B]"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
