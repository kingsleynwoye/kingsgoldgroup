import Link from "next/link";
import type { Metadata } from "next";
import { Stack_Sans_Headline } from "next/font/google";

const stack_sans_headline = Stack_Sans_Headline({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kingsgold Foundation",
  description:
    "Kingsgold Foundation is the philanthropic arm of Kingsgold Group, empowering communities through education, innovation, entrepreneurship, healthcare, and sustainable development.",
};

const pillars = [
  {
    title: "Education",
    description:
      "Supporting students through scholarships, learning resources, mentorship, and access to quality education.",
  },
  {
    title: "Entrepreneurship",
    description:
      "Helping young entrepreneurs build sustainable businesses through funding, mentorship, and business development.",
  },
  {
    title: "Innovation",
    description:
      "Encouraging technology and innovation that solve real-world problems and improve lives.",
  },
  {
    title: "Healthcare",
    description:
      "Supporting initiatives that improve healthcare access, wellness, and community wellbeing.",
  },
  {
    title: "Community Development",
    description:
      "Investing in projects that strengthen communities and create long-term social impact.",
  },
  {
    title: "Sustainability",
    description:
      "Promoting environmental responsibility and sustainable practices for future generations.",
  },
];

export default function FoundationPage() {
  return (
    <main
      className={`min-h-screen bg-white text-[#151716] ${stack_sans_headline.className}`}
    >
      {/* Hero */}

      <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-28 text-center">
        <span className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-medium text-[#B8860B]">
          Kingsgold Foundation
        </span>

        <h1 className="mt-8 max-w-5xl text-4xl font-bold tracking-tight md:text-6xl">
          Purpose Beyond{" "}
          <span className="bg-gradient-to-r from-[#9F690F] via-[#FFD94A] to-[#C9971A] bg-clip-text text-transparent">
            Business.
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-600 md:text-xl">
          Kingsgold Foundation is the philanthropic arm of Kingsgold Group,
          committed to creating lasting impact by empowering individuals,
          strengthening communities, and investing in opportunities that
          transform lives.
        </p>
      </section>

      {/* Mission & Vision */}

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-[#D4AF37]/20 bg-[#FFF4D4] p-8">
            <h2 className="text-3xl font-bold">Our Mission</h2>

            <p className="mt-6 text-zinc-600 leading-8">
              To improve lives by expanding access to education,
              entrepreneurship, healthcare, innovation, and sustainable
              opportunities that empower individuals and communities.
            </p>
          </div>

          <div className="rounded-3xl border border-[#D4AF37]/20 bg-[#FFF4D4] p-8">
            <h2 className="text-3xl font-bold">Our Vision</h2>

            <p className="mt-6 text-zinc-600 leading-8">
              A future where every individual has the opportunity, knowledge,
              and resources to build a better life and contribute meaningfully
              to society.
            </p>
          </div>
        </div>
      </section>

      {/* Focus Areas */}

      <section className="bg-[#151716] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">
              What We Do
            </span>

            <h2 className="mt-4 text-4xl font-bold text-white">
              Our Focus Areas
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-zinc-400">
              Through strategic initiatives and partnerships, Kingsgold
              Foundation invests in programs that create sustainable social
              impact.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-3xl border border-[#D4AF37]/20 bg-white/5 p-8 backdrop-blur-sm transition hover:-translate-y-1 hover:border-[#D4AF37]"
              >
                <div className="mb-5 h-1 w-10 rounded-full bg-gradient-to-r from-[#9F690F] via-[#FFD94A] to-[#C9971A]" />

                <h3 className="text-2xl font-semibold text-white">
                  {pillar.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#D4AF37]/20 bg-[#FFF4D4] p-10 text-center">
          <span className="text-6xl text-[#D4AF37]/30">“</span>

          <blockquote className="mx-auto mt-2 max-w-4xl text-2xl leading-relaxed text-zinc-700 md:text-3xl">
            We believe that true success is measured not only by the businesses
            we build, but by the lives we positively impact.
          </blockquote>

          <div className="mt-10">
            <p className="font-bold text-[#151716]">Kingsley Chidubem Nwoye</p>

            <p className="mt-1 text-zinc-500">Founder, Kingsgold Foundation</p>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#151716] px-8 py-16 text-center">
          <h2 className="text-4xl font-bold text-white">
            Join Us in Creating Lasting Impact
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Together, we can build stronger communities, empower future leaders,
            and create opportunities that transform lives.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-[#9F690F] via-[#FFD94A] to-[#C9971A] px-8 py-3.5 font-semibold text-[#151716]"
            >
              Contact Us
            </Link>

            <Link
              href="/"
              className="rounded-full border border-[#D4AF37] px-8 py-3.5 font-semibold text-white"
            >
              Back Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
