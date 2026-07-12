import { Stack_Sans_Headline } from "next/font/google";

export const stack_sans_headline = Stack_Sans_Headline({
  subsets: ["latin"],
  display: "swap",
});

export default function Privacy() {
  const sections = [
    {
      title: "Information We Collect",
      content:
        "We may collect information that you voluntarily provide, including your name, email address, phone number, and any details submitted through our contact forms. We may also collect limited technical information such as browser type, device information, and website usage analytics.",
    },
    {
      title: "How We Use Your Information",
      content:
        "We use the information we collect to respond to inquiries, improve our website, communicate with visitors, strengthen security, and support the development of our businesses and services.",
    },
    {
      title: "Cookies & Analytics",
      content:
        "Our website may use cookies and similar technologies to improve user experience, understand website performance, and enhance functionality. You may disable cookies through your browser settings.",
    },
    {
      title: "Third-Party Services",
      content:
        "Our website may contain links to third-party websites or services. Kingsgold Group is not responsible for the privacy practices or content of external websites.",
    },
    {
      title: "Data Security",
      content:
        "We implement reasonable administrative, technical, and organizational safeguards designed to protect personal information against unauthorized access, disclosure, alteration, or destruction.",
    },
    {
      title: "Your Rights",
      content:
        "Depending on applicable laws, you may have the right to request access to, correction of, or deletion of your personal information. You may also contact us regarding any privacy concerns.",
    },
    {
      title: "Policy Updates",
      content:
        "We may update this Privacy Policy from time to time. Any changes will be published on this page together with the revised effective date.",
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
            Privacy Policy
          </span>

          <h1 className="mt-8 text-3xl font-bold tracking-tight md:text-6xl">
            Your Privacy Matters at{" "}
            <span className="bg-gradient-to-r from-[#9F690F] via-[#FFEB5F] to-[#C9971A] bg-clip-text text-transparent">
              Kingsgold Group
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-zinc-600">
            We are committed to protecting your privacy and handling your
            personal information responsibly. This Privacy Policy explains how
            Kingsgold Group collects, uses, stores, and safeguards information
            when you visit our website or interact with our services.
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
            Contact Us
          </span>

          <h2 className="mt-5 text-4xl font-bold">
            Questions About Your Privacy?
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-zinc-300">
            If you have questions about this Privacy Policy or how your
            information is handled, please contact Kingsgold Group.
          </p>

          <div className="mt-10 rounded-2xl border border-[#D4AF37]/30 bg-white/5 p-6">
            <p className="font-semibold text-[#D4AF37]">
              kingsgoldgroup@gmail.com
            </p>

            <p className="mt-2 text-zinc-400">
              We aim to respond to all privacy-related inquiries as promptly as
              possible.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#FFF4D4] px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <span className="inline-flex rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-medium text-[#B8860B]">
            Your Privacy Matters
          </span>

          <h2 className="mt-8 text-4xl font-bold tracking-tight md:text-5xl">
            Building Trust Through{" "}
            <span className="bg-gradient-to-r from-[#9F690F] via-[#FFEB5F] to-[#C9971A] bg-clip-text text-transparent">
              Transparency.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-zinc-600 md:text-xl">
            At Kingsgold Group, we are committed to protecting your privacy,
            respecting your personal information, and maintaining transparent
            data practices. Your trust is fundamental to everything we build.
          </p>
        </div>
      </section>
    </main>
  );
}
