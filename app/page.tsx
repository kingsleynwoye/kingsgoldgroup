import Link from "next/link";
import { Stack_Sans_Headline } from "next/font/google";

export const stack_sans_headline = Stack_Sans_Headline({
  subsets: ["latin"],
  display: "swap",
});

const companies = [
  {
    name: "Range Universe",
    category: "Technology",
  },
  {
    name: "TrustnFund",
    category: "Finance",
  },
  {
    name: "Staydeck",
    category: "Real Estate",
  },
  {
    name: "Nature Ambiance",
    category: "Agriculture",
  },
  {
    name: "DiceSea",
    category: "Creative",
  },
];

export default function Home() {
  return (
    <main
      className={`min-h-screen bg-white text-[#151716] ${stack_sans_headline.className}`}
    >
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-28 text-center">
        <span className="mb-5 rounded-full border border-[#D4AF37]/30 bg-[#bd971d]/10 px-5 py-2 text-sm font-medium text-[#B8860B]">
          Welcome to Kingsgold Group
        </span>

        <h1 className="max-w-5xl text-3xl font-bold tracking-tight md:text-6xl">
          Building Businesses
          <br />
          That Shape the{" "}
          <span className="bg-gradient-to-r from-[#9F690F] via-[#FFD94A] to-[#C9971A] bg-clip-text text-transparent">
            Future.
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-600 md:text-xl">
          Kingsgold Group is a diversified business group committed to building
          innovative companies across multiple industries through
          entrepreneurship, innovation, and long-term value creation.
        </p>

        <div className="mt-10 flex flex-row gap-4 sm:flex-row">
          <Link
            href="/about"
            className="rounded-full bg-[#151716] px-8 py-3.5 font-semibold text-white transition hover:bg-black"
          >
            About Us
          </Link>

          <Link
            href="/businesses"
            className="rounded-full border border-[#D4AF37] px-8 py-3.5 font-semibold bg-gradient-to-r from-[#9F690F] via-[#FFD94A] to-[#C9971A] text-[#151716] shadow-lg hover:brightness-110 transition hover:text-[#151716]"
          >
            Our Businesses
          </Link>
        </div>

        <div className="mt-24 grid w-full max-w-6xl gap-6 md:grid-cols-5">
          {companies.map((company) => (
            <div
              key={company.name}
              className="rounded-3xl border border-zinc-200 bg-[#FFF4D4] p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37] hover:shadow-xl"
            >
              <div className="mb-4 h-1 w-10 rounded-full bg-gradient-to-r from-[#9F690F] via-[#FFD94A] to-[#C9971A]" />

              <h3 className="text-lg font-semibold text-[#151716]">
                {company.name}
              </h3>

              <p className="mt-2 text-sm text-zinc-500">{company.category}</p>
            </div>
          ))}
        </div>

        {/* <div className="mt-24 text-center bg-[#FFF4D4]">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            <span className="text-zinc-400">From</span>{" "}
            <span className="text-[#151716]">Coal</span>{" "}
            <span className="text-zinc-400">To</span>{" "}
            <span className="bg-gradient-to-r from-[#9F690F] via-[#FFEB5F] to-[#C9971A] bg-clip-text text-transparent">
              Gold
            </span>
          </h2>

          <p className="mt-5 text-xl text-zinc-500">
            Building businesses that transform ideas into enduring value.
          </p>
        </div> */}
      </section>

      {/* <section className="bg-white px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-[#FFF4D4] p-8 shadow-sm md:p-14"> */}
      {/* Top */}

      {/* <div className="flex items-center gap-4">
              <div className="h-12 w-1 rounded-full bg-gradient-to-b from-[#9F690F] via-[#FFEB5F] to-[#C9971A]" />

              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B8860B]">
                  Founder&apos;s Message
                </span>

                <h2 className="mt-2 text-3xl font-bold text-[#151716] md:text-4xl">
                  The Story Behind{" "}
                  <span className="bg-gradient-to-r from-[#9F690F] via-[#FFEB5F] to-[#C9971A] bg-clip-text text-transparent">
                    Kingsgold
                  </span>
                </h2>
              </div>
            </div> */}

      {/* Quote */}

      {/* <div className="mt-10">
              <span className="text-7xl font-bold leading-none text-[#D4AF37]/30">
                “
              </span>

              <blockquote className="-mt-8 pl-8 text-xl leading-10 text-zinc-700 md:text-2xl">
                When I was a boy, my nickname was{" "}
                <span className="font-semibold text-[#151716]">Kingsgold</span>.
                Today, that name has become a vision to build businesses that
                shape the future.
              </blockquote>
            </div> */}

      {/* Signature */}

      {/* <div className="mt-12 flex items-center justify-between border-t border-[#D4AF37]/20 pt-8">
              <div>
                <p className="text-xl font-bold text-[#151716]">
                  Kingsley Chidubem Nwoye
                </p>

                <p className="mt-1 text-zinc-500">
                  Founder & CEO, Kingsgold Group
                </p>
              </div>

              <div className="hidden md:block text-right">
                <p className="text-sm uppercase tracking-[0.3em] text-[#B8860B]">
                  Building Businesses
                </p>

                <p className="mt-1 font-semibold text-[#151716]">
                  That Shape the Future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="bg-white px-6 pb-28">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#D4AF37]/20 bg-gradient-to-br from-[#1A1C1B] to-[#0F100F] p-8 md:p-14">
            {/* Decorative Glow */}

            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />

            <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-[#D4AF37]/5 blur-3xl" />

            {/* Heading */}

            <div className="relative flex items-center gap-4">
              <div className="h-14 w-1 rounded-full bg-gradient-to-b from-[#9F690F] via-[#FFEB5F] to-[#C9971A]" />

              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
                  Founder&apos;s Message
                </span>

                <h2 className="mt-2 text-3xl font-bold text-white md:text-5xl">
                  The Story Behind{" "}
                  <span className="bg-gradient-to-r from-[#9F690F] via-[#FFEB5F] to-[#C9971A] bg-clip-text text-transparent">
                    Kingsgold
                  </span>
                </h2>
              </div>
            </div>

            {/* Quote */}

            <div className="relative mt-12">
              <span className="absolute -top-10 left-0 text-8xl font-bold leading-none text-[#D4AF37]/20">
                “
              </span>

              <blockquote className="relative pl-10 text-lg leading-10 text-zinc-300 md:text-2xl md:leading-[3rem]">
                When I was a boy, my nickname was{" "}
                <span className="font-semibold bg-gradient-to-r from-[#9F690F] via-[#FFEB5F] to-[#C9971A] bg-clip-text text-transparent">
                  Kingsgold
                </span>
                . Today, that name has become a vision to build businesses that
                shape the future.
              </blockquote>
            </div>

            {/* Bottom */}

            <div className="relative mt-10 md:mt-14 flex flex-col gap-8 border-t border-[#D4AF37]/20 pt-8 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Kingsley Nwoye
                </h3>

                <p className="mt-2 text-zinc-400">
                  Founder & CEO, Kingsgold Group
                </p>
              </div>

              <div className="rounded-2xl border border-[#D4AF37]/20 bg-white/5 px-6 py-5 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">
                  Our Vision
                </p>

                <p className="mt-2 text-[11px] md:text-base font-normal text-white">
                  Building Businesses That Shape the Future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
