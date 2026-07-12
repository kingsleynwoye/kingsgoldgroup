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
      <section className="p-5 py-24 text-center bg-[#FFF4D4]">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          <span className="text-zinc-400">From</span>{" "}
          <span className="text-[#151716]">Coal</span>{" "}
          {/* <span className="text-zinc-400">→</span>{" "} */}
          <span className="text-zinc-400">To</span>{" "}
          <span className="bg-gradient-to-r from-[#9F690F] via-[#FFEB5F] to-[#C9971A] bg-clip-text text-transparent">
            Gold
          </span>
        </h2>

        {/* <p className="mt-5 text-xl text-zinc-500">
          Building businesses that transform ideas into enduring value.
        </p> */}
        <p className="mt-5 text-base md:text-xl text-zinc-500">
          Building Businesses That Shape the Future.
        </p>
      </section>
    </main>
  );
}
