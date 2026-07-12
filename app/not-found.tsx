import Link from "next/link";
import { Stack_Sans_Headline } from "next/font/google";

export const stack_sans_headline = Stack_Sans_Headline({
  subsets: ["latin"],
  display: "swap",
});

export default function NotFound() {
  return (
    <main
      className={`min-h-screen bg-white text-[#151716] ${stack_sans_headline.className}`}
    >
      {/* Hero */}

      <section className="mx-auto max-w-7xl px-6 py-28 pb-20 text-center">
        {/* Badge */}

        <span className="inline-flex rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-medium text-[#B8860B]">
          404 • Page Not Found
        </span>

        {/* Heading */}

        <h1 className="mt-8 text-7xl font-black tracking-tight md:text-9xl">
          <span className="text-[#151716]">4</span>

          <span className="bg-gradient-to-r from-[#9F690F] via-[#FFEB5F] to-[#C9971A] bg-clip-text text-transparent">
            0
          </span>

          <span className="text-[#151716]">4</span>
        </h1>

        <h2 className="mt-8 text-4xl font-bold md:text-6xl text-zinc-400">
          This page doesn't exist.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-zinc-600">
          The page you're looking for may have been moved, deleted, or never
          existed. Let's help you get back to exploring Kingsgold Group.
        </p>

        {/* Actions */}

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded-full bg-[#151716] px-8 py-4 font-semibold text-white transition hover:bg-black"
          >
            Back Home
          </Link>

          <Link
            href="/businesses"
            className="rounded-full bg-gradient-to-r from-[#9F690F] via-[#FFEB5F] to-[#C9971A] px-8 py-4 font-semibold text-[#151716] shadow-lg transition hover:scale-105"
          >
            Explore Our Businesses
          </Link>
        </div>

        {/* Brand */}

        {/* <div className="mt-20">
          <h3 className="text-2xl font-bold">
            <span className="text-zinc-400">From</span>{" "}
            <span className="text-[#151716]">Coal</span>{" "}
            <span className="text-zinc-400">To</span>{" "}
            <span className="bg-gradient-to-r from-[#9F690F] via-[#FFEB5F] to-[#C9971A] bg-clip-text text-transparent">
              Gold
            </span>
          </h3>

          <p className="mt-4 text-zinc-500">
            Building Businesses That Shape the Future.
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
