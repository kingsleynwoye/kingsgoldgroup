import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Stack_Sans_Headline } from "next/font/google";
import { businesses } from "@/app/data/businesses";
import Image from "next/image";

export const stack_sans_headline = Stack_Sans_Headline({
  subsets: ["latin"],
  display: "swap",
});

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const business = businesses.find((b) => b.slug === slug);

  if (!business) {
    return {
      title: "Business Not Found",
    };
  }

  return {
    title: business.name,
    description: business.description,
  };
}

export default async function BusinessPage({ params }: Props) {
  const { slug } = await params;

  const business = businesses.find((b) => b.slug === slug);

  if (!business) {
    notFound();
  }

  return (
    <main
      className={`min-h-screen bg-white text-[#151716] ${stack_sans_headline.className}`}
    >
      <section className="mx-auto max-w-6xl px-6 py-28">
        <Link
          href="/businesses"
          className="text-sm font-medium text-[#B8860B] hover:underline"
        >
          ← Back to Businesses
        </Link>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_180px]">
          <div>
            <span
              className="inline-flex rounded-full px-4 py-2 text-sm font-medium"
              style={{
                background: `${business.color}20`,
                color: business.color,
              }}
            >
              {business.industry}
            </span>

            <div className="flex justify-between">
              <h1 className="mt-8 text-4xl font-bold tracking-tight md:text-6xl">
                {business.name}
              </h1>
              <div
                className="flex h-28 md:h-40 w-28 md:w-40 items-center justify-center rounded-3xl border shadow-sm p-5 md:p-6"
                style={{
                  background: `${business.color}10`,
                  borderColor: `${business.color}40`,
                }}
              >
                <Image
                  src={business.image}
                  alt={`${business.name} Logo`}
                  width={100}
                  height={100}
                  priority
                  className="h-auto w-full object-contain rounded-2xl"
                />
              </div>
            </div>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-600">
              {business.description}
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-zinc-200 bg-[#FFF4D4] p-10">
            <h2 className="text-2xl font-bold">Our Mission</h2>

            <p className="mt-6 leading-8 text-zinc-600">{business.mission}</p>
          </div>

          <div className="rounded-3xl border border-zinc-200 p-10">
            <h2 className="text-2xl font-bold">About {business.name}</h2>

            <p className="mt-6 leading-8 text-zinc-600">
              {business.name} is part of the Kingsgold Group portfolio of
              companies. While operating independently, it shares the Group's
              commitment to innovation, excellence, and creating long-term
              value.
            </p>

            {business.website !== "#" && (
              <Link
                href={business.website}
                target="_blank"
                className="mt-8 inline-flex rounded-full bg-[#151716] px-6 py-3 font-semibold text-white transition hover:bg-black"
              >
                Visit Website →
              </Link>
            )}
          </div>
        </div>

        <section className="mt-24 rounded-[32px] bg-[#151716] px-10 py-16 text-center text-white">
          <h2 className="text-4xl font-bold">
            Part of{" "}
            <span className="bg-gradient-to-r from-[#9F690F] via-[#FFEB5F] to-[#C9971A] bg-clip-text text-transparent">
              Kingsgold Group
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-300">
            Every company within Kingsgold Group is built with a shared
            commitment to innovation, entrepreneurship, and long-term value
            creation across industries.
          </p>

          <Link
            href="/businesses"
            className="mt-10 inline-flex rounded-full bg-gradient-to-r from-[#9F690F] via-[#FFD94A] to-[#C9971A] px-8 py-3 font-semibold text-[#151716]"
          >
            Explore More Businesses
          </Link>
        </section>
      </section>
    </main>
  );
}
