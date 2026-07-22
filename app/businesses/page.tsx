// import Link from "next/link";
// import { Stack_Sans_Headline } from "next/font/google";

// export const stack_sans_headline = Stack_Sans_Headline({
//   subsets: ["latin"],
//   display: "swap",
// });

// const companies = [
//   {
//     name: "Range Universe",
//     industry: "Technology",
//     description:
//       "A technology company focused on building innovative digital products, software, and AI-powered solutions.",
//     href: "#",
//   },
//   {
//     name: "TrustnFund",
//     industry: "Finance",
//     description:
//       "A finance company creating innovative financial solutions that empower individuals and businesses.",
//     href: "#",
//   },
//   {
//     name: "Staydeck",
//     industry: "Real Estate",
//     description:
//       "A real estate company transforming how people discover, buy, rent, and manage properties.",
//     href: "#",
//   },
//   {
//     name: "Nature Ambiance",
//     industry: "Agriculture",
//     description:
//       "An agriculture company committed to sustainable farming, food production, and environmental innovation.",
//     href: "#",
//   },
//   {
//     name: "DiceSea",
//     industry: "Creative & Entertainment",
//     description:
//       "A creative company delivering digital media, entertainment, branding, and innovative storytelling.",
//     href: "#",
//   },
// ];

// export default function Companies() {
//   return (
//     <main className={`min-h-screen bg-white ${stack_sans_headline.className}`}>
//       <section className="mx-auto max-w-7xl px-6 py-24">
//         <div className="max-w-3xl">
//           <span className="rounded-full border border-zinc-200 px-4 py-1 text-sm font-medium text-zinc-600">
//             Our Companies
//           </span>

//           <h1 className="mt-6 text-5xl font-bold tracking-tight text-zinc-900">
//             Building the Future,
//             <br />
//             One Company at a Time.
//           </h1>

//           <p className="mt-6 text-lg leading-8 text-zinc-600">
//             Kingsgold Group is a diversified business group with interests
//             spanning technology, finance, real estate, agriculture, and the
//             creative industries. Each company operates independently while
//             sharing a common vision of innovation, excellence, and sustainable
//             growth.
//           </p>
//         </div>

//         <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
//           {companies.map((company) => (
//             <div
//               key={company.name}
//               className="rounded-3xl border border-zinc-200 p-8 transition hover:-translate-y-1 hover:shadow-lg"
//             >
//               <span className="inline-flex rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-700">
//                 {company.industry}
//               </span>

//               <h2 className="mt-6 text-2xl font-bold text-zinc-900">
//                 {company.name}
//               </h2>

//               <p className="mt-4 leading-7 text-zinc-600">
//                 {company.description}
//               </p>

//               <Link
//                 href={company.href}
//                 className="mt-8 inline-flex items-center font-semibold text-black hover:underline"
//               >
//                 Learn More →
//               </Link>
//             </div>
//           ))}
//         </div>

//         <section className="mt-28 rounded-3xl bg-zinc-900 px-10 py-16 text-center text-white">
//           <h2 className="text-4xl font-bold">United by One Vision.</h2>

//           <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
//             Every company within Kingsgold Group is built to solve meaningful
//             problems, create lasting value, and contribute to Africa's economic
//             transformation through innovation, entrepreneurship, and strategic
//             leadership.
//           </p>

//           <p className="mt-10 text-xl font-semibold italic">
//             From Coal To Gold.
//           </p>
//         </section>
//       </section>
//     </main>
//   );
// }

// import Link from "next/link";
// import { Stack_Sans_Headline } from "next/font/google";

// export const stack_sans_headline = Stack_Sans_Headline({
//   subsets: ["latin"],
//   display: "swap",
// });

// const companies = [
//   {
//     name: "Range Universe",
//     industry: "Technology",
//     description:
//       "Building innovative software, AI, and digital solutions that empower individuals, businesses, and communities.",
//     href: "https://rangeuniverse.vercel.app",
//   },
//   {
//     name: "TrustnFund",
//     industry: "Finance",
//     description:
//       "Creating modern financial solutions that make funding, investing, and financial growth more accessible.",
//     href: "https://trustnfund.vercel.app",
//   },
//   {
//     name: "Staydeck",
//     industry: "Real Estate",
//     description:
//       "Transforming how people discover, rent, buy, and manage properties through technology and innovation.",
//     href: "https://staydeck.vercel.app",
//   },
//   {
//     name: "Nature Ambiance",
//     industry: "Agriculture",
//     description:
//       "Advancing sustainable agriculture through innovative farming practices and environmental stewardship.",
//     href: "https://natureambiance.vercel.app",
//   },
//   {
//     name: "DiceSea",
//     industry: "Creative & Entertainment",
//     description:
//       "Delivering creative experiences through media, entertainment, branding, and digital storytelling.",
//     href: "https://dicesea.vercel.app",
//   },
// ];

// export default function Companies() {
//   return (
//     <main
//       className={`min-h-screen bg-[#151716] text-white ${stack_sans_headline.className}`}
//     >
//       <section className="mx-auto max-w-7xl px-6 py-24">
//         {/* Hero */}

//         <div className="max-w-4xl">
//           <span className="inline-flex rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-5 py-2 text-sm font-medium text-[#D4AF37]">
//             Our Companies
//           </span>

//           <h1 className="mt-8 text-5xl font-bold tracking-tight md:text-6xl">
//             Building the <span className="text-[#D4AF37]">Future</span>,
//             <br />
//             One Company at a Time.
//           </h1>

//           <p className="mt-8 max-w-3xl text-lg leading-9 text-zinc-400">
//             Kingsgold Group is a diversified business group with interests
//             spanning technology, finance, real estate, agriculture, and the
//             creative industries. Every company operates independently while
//             sharing a common vision of innovation, excellence, and sustainable
//             growth.
//           </p>
//         </div>

//         {/* Companies */}

//         <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
//           {companies.map((company) => (
//             <article
//               key={company.name}
//               className="group rounded-[28px] border border-zinc-800 bg-[#18181B] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/50"
//             >
//               <div className="mb-6 h-1 w-12 rounded-full bg-[#D4AF37]" />

//               <span className="inline-flex rounded-full bg-[#D4AF37]/10 px-3 py-1 text-sm font-medium text-[#D4AF37]">
//                 {company.industry}
//               </span>

//               <h2 className="mt-6 text-2xl font-bold transition-colors group-hover:text-[#D4AF37]">
//                 {company.name}
//               </h2>

//               <p className="mt-5 leading-8 text-zinc-400">
//                 {company.description}
//               </p>

//               <Link
//                 href={company.href}
//                 target="_blank"
//                 className="mt-8 inline-flex items-center font-semibold text-[#D4AF37] transition hover:translate-x-1"
//               >
//                 Learn More →
//               </Link>
//             </article>
//           ))}
//         </div>

//         {/* Vision */}

//         <section className="mt-28 rounded-[32px] border border-[#D4AF37]/20 bg-gradient-to-br from-[#18181B] to-[#151716] px-10 py-16 text-center">
//           <h2 className="text-4xl font-bold">
//             United by One <span className="text-[#D4AF37]">Vision.</span>
//           </h2>

//           <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-400">
//             Every company within Kingsgold Group is built to solve meaningful
//             problems, create lasting value, and contribute to Africa's economic
//             transformation through innovation, entrepreneurship, and strategic
//             leadership.
//           </p>

//           <div className="mt-12">
//             <p className="text-4xl font-bold tracking-tight">
//               <span className="text-zinc-500">Coal</span>{" "}
//               <span className="text-white">→</span>{" "}
//               <span className="text-[#D4AF37]">Gold</span>
//             </p>

//             <p className="mt-4 text-lg italic text-zinc-400">
//               Building businesses that transform ideas into enduring value.
//             </p>
//           </div>
//         </section>
//       </section>
//     </main>
//   );
// }

import Link from "next/link";
import type { Metadata } from "next";
import { Stack_Sans_Headline } from "next/font/google";
import { businesses } from "../data/businesses";

export const stack_sans_headline = Stack_Sans_Headline({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Our Businesses",
  description:
    "Explore the portfolio of companies under Kingsgold Group across technology, finance, real estate, agriculture, and the creative industry.",

  openGraph: {
    title: "Our Businesses | Kingsgold Group",
    description:
      "Explore the portfolio of companies under Kingsgold Group across technology, finance, real estate, agriculture, and the creative industry.",
    url: "https://www.kingsgoldgroup.com/businesses",
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
    title: "Our Businesses | Kingsgold Group",
    description:
      "Explore the portfolio of companies under Kingsgold Group across technology, finance, real estate, agriculture, and the creative industry.",
    images: ["https://www.kingsgoldgroup.com/images/kingsgoldgroup-meta.png"],
  },
};

export default function Businesses() {
  return (
    <main
      className={`min-h-screen bg-white text-[#151716] ${stack_sans_headline.className}`}
    >
      <section className="mx-auto max-w-7xl px-6 py-28">
        {/* Hero */}

        <div className="max-w-4xl">
          <span className="inline-flex rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-medium text-[#B8860B]">
            Our Businesses
          </span>

          <h1 className="mt-8 text-3xl font-bold tracking-tight md:text-6xl">
            Building the{" "}
            <span className="bg-gradient-to-r from-[#9F690F] via-[#FFEB5F] to-[#C9971A] bg-clip-text text-transparent">
              Future
            </span>
            ,
            <br />
            One Company at a Time.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-zinc-600">
            Kingsgold Group is a diversified business group committed to
            building and growing innovative companies across multiple
            industries. Every company operates independently while sharing a
            common vision of innovation, excellence, and sustainable growth.
          </p>
        </div>

        {/* Businesses */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {businesses.map((business) => (
            <article
              key={business.name}
              className="group rounded-[28px] border border-zinc-200 bg-[#FFF4D4] p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-xl"
            >
              <div className="mb-6 h-1 w-12 rounded-full bg-gradient-to-r from-[#9F690F] via-[#FFD94A] to-[#C9971A]" />

              <span className="inline-flex rounded-full bg-[#D4AF37]/10 px-3 py-1 text-sm font-medium text-[#B8860B]">
                {business.industry}
              </span>

              <h2 className="mt-6 text-2xl font-bold text-[#151716] transition-colors group-hover:text-[#D4AF37]">
                {business.name}
              </h2>

              <p className="mt-5 leading-8 text-zinc-600">
                {business.description}
              </p>

              <Link
                href={`/businesses/${business.slug}`}
                // target="_blank"
                className="mt-8 inline-flex items-center font-semibold text-[#D4AF37] transition-all duration-300 hover:translate-x-1"
              >
                Learn More →
              </Link>
            </article>
          ))}
        </div>

        {/* Vision */}

        {/* <section className="mt-28 rounded-[32px] border border-[#D4AF37]/20 bg-[#151716] px-10 py-16 text-center text-white">
          <h2 className="text-4xl font-bold">
            United by One <span className="text-[#D4AF37]">Vision.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-300">
            Every company within Kingsgold Group is built to solve meaningful
            problems, create lasting value, and contribute to Africa's economic
            transformation through innovation, entrepreneurship, and strategic
            leadership.
          </p> */}

        {/* <div className="mt-12">
            <p className="text-4xl font-bold tracking-tight">
              <span className="text-zinc-500">Coal</span>{" "}
              <span className="text-white">→</span>{" "}
              <span className="text-[#D4AF37]">Gold</span>
            </p>

            <p className="mt-4 text-lg italic text-zinc-400">
              Building businesses that transform ideas into enduring value.
            </p>
          </div> */}
        {/* </section> */}

        {/* <section className="mt-28 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            <span className="text-zinc-400">From</span>{" "}
            <span className="text-[#151716]">Coal</span>{" "}
            <span className="text-zinc-400">To</span>{" "}
            <span className="bg-gradient-to-r from-[#9F690F] via-[#FFEB5F] to-[#C9971A] bg-clip-text text-transparent">
              Gold
            </span>{" "}
          </h2>

          <p className="mt-5 text-xl text-zinc-500">
            Building businesses that transform ideas into enduring value.
          </p>
        </section> */}
      </section>
      <section className="bg-[#151716] px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <span className="inline-flex rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-medium text-[#D4AF37]">
            Our Portfolio
          </span>

          <h2 className="mt-8 text-4xl font-bold tracking-tight md:text-6xl">
            Building Businesses
            <br />
            Across{" "}
            <span className="bg-gradient-to-r from-[#9F690F] via-[#FFEB5F] to-[#C9971A] bg-clip-text text-transparent">
              Multiple Industries.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-300">
            Every business within Kingsgold Group is built with a shared
            commitment to innovation, excellence, and long-term value creation.
            Together, our companies are shaping industries, creating
            opportunities, and contributing to sustainable economic growth.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <span className="rounded-full border border-[#D4AF37]/30 bg-white/5 px-5 py-3 text-sm">
              Technology
            </span>

            <span className="rounded-full border border-[#D4AF37]/30 bg-white/5 px-5 py-3 text-sm">
              Finance
            </span>

            <span className="rounded-full border border-[#D4AF37]/30 bg-white/5 px-5 py-3 text-sm">
              Real Estate
            </span>

            <span className="rounded-full border border-[#D4AF37]/30 bg-white/5 px-5 py-3 text-sm">
              Agriculture
            </span>

            <span className="rounded-full border border-[#D4AF37]/30 bg-white/5 px-5 py-3 text-sm">
              Media
            </span>

            <span className="rounded-full border border-[#D4AF37]/30 bg-white/5 px-5 py-3 text-sm">
              Creative Industries
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
