import type { Metadata } from "next";
import { Stack_Sans_Headline } from "next/font/google";

export const stack_sans_headline = Stack_Sans_Headline({
  subsets: ["latin"],
  display: "swap",
});

const faqs = [
  {
    question: "What is Kingsgold Group?",
    answer:
      "Kingsgold Group is a diversified business group focused on building, developing, and managing innovative businesses across multiple industries. Our mission is to create lasting value through entrepreneurship, innovation, and long-term thinking.",
  },
  {
    question: "What industries does Kingsgold Group operate in?",
    answer:
      "Our businesses span technology, finance, real estate, agriculture, and the creative industry, with opportunities to expand into additional sectors as the Group grows.",
  },
  {
    question: "Does Kingsgold Group own its businesses?",
    answer:
      "Kingsgold Group builds and manages a portfolio of businesses. Each business operates independently while sharing the Group's long-term vision, values, and commitment to excellence.",
  },
  {
    question: "Can I partner with Kingsgold Group?",
    answer:
      "Yes. We welcome partnerships with entrepreneurs, businesses, organizations, and investors who share our commitment to innovation and sustainable growth.",
  },
  {
    question: "Does Kingsgold Group accept investments?",
    answer:
      "As we continue to grow, strategic investment opportunities may become available. Interested investors are welcome to contact us for future opportunities.",
  },
  {
    question: "How can I contact Kingsgold Group?",
    answer:
      "You can reach us through our Contact page or by emailing kingsgoldgroup@gmail.com.",
  },
  {
    question: "Where is Kingsgold Group located?",
    answer:
      "Kingsgold Group is headquartered in Nigeria and is committed to building businesses with a global outlook.",
  },
  {
    question: "How can I join Kingsgold Group?",
    answer:
      "Career opportunities will be announced on our website as they become available. We are always interested in connecting with talented individuals who share our vision.",
  },
];

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to frequently asked questions about Kingsgold Group, our businesses, partnerships, and opportunities.",

  alternates: {
    canonical: "/faqs",
  },

  openGraph: {
    title: "Frequently Asked Questions | Kingsgold Group",
    description:
      "Find answers to frequently asked questions about Kingsgold Group, our businesses, partnerships, and opportunities.",
    url: "https://www.kingsgoldgroup.com/faqs",
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
    title: "Frequently Asked Questions | Kingsgold Group",
    description:
      "Find answers to frequently asked questions about Kingsgold Group, our businesses, partnerships, and opportunities.",
    images: ["https://www.kingsgoldgroup.com/images/kingsgoldgroup-meta.png"],
  },
};

export default function FAQs() {
  return (
    <main
      className={`min-h-screen bg-white text-[#151716] ${stack_sans_headline.className}`}
    >
      {/* Hero */}

      <section className="mx-auto max-w-7xl px-6 py-28 pb-20">
        <div className="max-w-4xl">
          <span className="inline-flex rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-medium text-[#B8860B]">
            Frequently Asked Questions
          </span>

          <h1 className="mt-8 text-3xl font-bold tracking-tight md:text-6xl">
            Everything you need to know about{" "}
            <span className="bg-gradient-to-r from-[#9F690F] via-[#FFEB5F] to-[#C9971A] bg-clip-text text-transparent">
              Kingsgold Group
            </span>{" "}
            .
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-zinc-600">
            Find answers to common questions about our businesses, vision,
            partnerships, investments, careers, and how to get in touch with our
            team.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-28">
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="border-b border-zinc-200 pb-8 last:border-none"
            >
              <div className="flex gap-6">
                <span className="text-3xl font-bold text-[#D4AF37]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h2 className="text-2xl font-bold text-[#151716]">
                    {faq.question}
                  </h2>

                  <p className="mt-4 leading-8 text-zinc-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#151716] py-24 text-center text-white">
        <div className="mx-auto max-w-4xl px-6">
          <span className="inline-flex rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-medium text-[#D4AF37]">
            Still Have Questions?
          </span>

          <h2 className="mt-8 text-4xl font-bold tracking-tight md:text-6xl">
            We're Here to{" "}
            <span className="bg-gradient-to-r from-[#9F690F] via-[#FFEB5F] to-[#C9971A] bg-clip-text text-transparent">
              Help.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-300">
            If you couldn't find the answer you were looking for, our team is
            always happy to assist. Whether you have questions about our
            businesses, partnerships, investments, or general inquiries, we're
            just a message away.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="rounded-full bg-gradient-to-r from-[#9F690F] via-[#FFEB5F] to-[#C9971A] px-8 py-4 font-semibold text-[#151716] transition hover:brightness-110"
            >
              Contact Us
            </a>

            <a
              href="mailto:kingsgoldgroup@gmail.com"
              className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
