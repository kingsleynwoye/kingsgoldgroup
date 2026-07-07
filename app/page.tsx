// import Link from "next/link";
// import { Stack_Sans_Headline } from "next/font/google";

// export const stack_sans_headline = Stack_Sans_Headline({
//   subsets: ["latin"],
//   display: "swap",
// });

// export default function Home() {
//   return (
//     <main
//       className={`min-h-screen bg-white text-zinc-900 ${stack_sans_headline.className}`}
//     >
//       <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
//         <span className="mb-4 rounded-full border border-zinc-200 px-4 py-1 text-sm font-medium text-zinc-600">
//           Welcome to Kingsgold Group
//         </span>

//         <h1 className="max-w-5xl text-5xl font-bold tracking-tight md:text-7xl">
//           Building Businesses
//           <br />
//           That Shape the Future.
//         </h1>

//         <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-600 md:text-xl">
//           Kingsgold Group is a diversified business group committed to building
//           innovative companies across technology, finance, real estate,
//           agriculture, and the creative industries.
//         </p>

//         <div className="mt-12 flex flex-col gap-4 sm:flex-row">
//           <Link
//             href="/about"
//             className="rounded-full bg-black px-8 py-4 text-white transition hover:bg-zinc-800"
//           >
//             About Us
//           </Link>

//           <Link
//             href="/companies"
//             className="rounded-full border border-zinc-300 px-8 py-4 transition hover:bg-zinc-100"
//           >
//             Our Companies
//           </Link>
//         </div>

//         <div className="mt-24 grid w-full max-w-6xl gap-6 md:grid-cols-5">
//           {[
//             {
//               name: "Range Universe",
//               category: "Technology",
//             },
//             {
//               name: "TrustnFund",
//               category: "Finance",
//             },
//             {
//               name: "Staydeck",
//               category: "Real Estate",
//             },
//             {
//               name: "Nature Ambiance",
//               category: "Agriculture",
//             },
//             {
//               name: "DiceSea",
//               category: "Creative",
//             },
//           ].map((company) => (
//             <div
//               key={company.name}
//               className="rounded-2xl border border-zinc-200 p-6 text-left"
//             >
//               <h3 className="text-lg font-semibold">{company.name}</h3>

//               <p className="mt-2 text-sm text-zinc-500">{company.category}</p>
//             </div>
//           ))}
//         </div>

//         <p className="mt-20 text-lg font-medium italic text-zinc-500">
//           From Coal To Gold.
//         </p>
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

// export default function Home() {
//   return (
//     <main
//       className={`min-h-screen bg-[#0F0F0F] text-white ${stack_sans_headline.className}`}
//     >
//       <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
//         <span className="mb-4 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-5 py-2 text-sm font-medium text-[#D4AF37]">
//           Welcome to Kingsgold Group
//         </span>

//         <h1 className="max-w-5xl text-5xl font-bold tracking-tight md:text-7xl">
//           Building Businesses
//           <br />
//           That Shape the <span className="text-[#D4AF37]">Future.</span>
//         </h1>

//         <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400 md:text-xl">
//           Kingsgold Group is a diversified business group committed to building
//           innovative companies across technology, finance, real estate,
//           agriculture, and the creative industries.
//         </p>

//         <div className="mt-12 flex flex-col gap-4 sm:flex-row">
//           <Link
//             href="/about"
//             className="rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-black transition-all duration-300 hover:bg-[#E2C15A]"
//           >
//             About Us
//           </Link>

//           <Link
//             href="/companies"
//             className="rounded-full border border-[#D4AF37]/40 px-8 py-4 text-white transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10"
//           >
//             Our Companies
//           </Link>
//         </div>

//         <div className="mt-24 grid w-full max-w-6xl gap-6 md:grid-cols-5">
//           {[
//             {
//               name: "Range Universe",
//               category: "Technology",
//             },
//             {
//               name: "TrustnFund",
//               category: "Finance",
//             },
//             {
//               name: "Staydeck",
//               category: "Real Estate",
//             },
//             {
//               name: "Nature Ambiance",
//               category: "Agriculture",
//             },
//             {
//               name: "DiceSea",
//               category: "Creative",
//             },
//           ].map((company) => (
//             <div
//               key={company.name}
//               className="rounded-2xl border border-zinc-800 bg-[#18181B] p-6 text-left transition-all duration-300 hover:border-[#D4AF37]/50 hover:-translate-y-1"
//             >
//               <div className="mb-4 h-1 w-10 rounded-full bg-[#D4AF37]" />

//               <h3 className="text-lg font-semibold text-white">
//                 {company.name}
//               </h3>

//               <p className="mt-2 text-sm text-zinc-400">{company.category}</p>
//             </div>
//           ))}
//         </div>

//         <div className="mt-20">
//           <p className="text-3xl font-bold tracking-tight">
//             <span className="text-zinc-500">Coal</span>{" "}
//             <span className="text-white">→</span>{" "}
//             <span className="text-[#D4AF37]">Gold</span>
//           </p>

//           <p className="mt-3 text-lg italic text-zinc-500">
//             Transforming Ideas Into Enduring Value.
//           </p>
//         </div>
//       </section>
//     </main>
//   );
// }

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
      className={`min-h-screen bg-white text-[#0F0F0F] ${stack_sans_headline.className}`}
    >
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
        <span className="mb-5 rounded-full border border-[#D4AF37]/30 bg-[#bd971d]/10 px-5 py-2 text-sm font-medium text-[#B8860B]">
          Welcome to Kingsgold Group
        </span>

        <h1 className="max-w-5xl text-5xl font-bold tracking-tight md:text-7xl">
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

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/about"
            className="rounded-full bg-[#0F0F0F] px-8 py-4 font-semibold text-white transition hover:bg-black"
          >
            About Us
          </Link>

          <Link
            href="/companies"
            className="rounded-full border border-[#D4AF37] px-8 py-4 font-semibold hover:bg-gradient-to-r from-[#9F690F] via-[#FFD94A] to-[#C9971A] text-[#0F0F0F] shadow-lg hover:brightness-110 transition hover:text-[#0F0F0F]"
          >
            Our Companies
          </Link>
        </div>

        <div className="mt-24 grid w-full max-w-6xl gap-6 md:grid-cols-5">
          {companies.map((company) => (
            <div
              key={company.name}
              className="rounded-3xl border border-zinc-200 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37] hover:shadow-xl"
            >
              <div className="mb-4 h-1 w-10 rounded-full bg-gradient-to-r from-[#9F690F] via-[#FFD94A] to-[#C9971A]" />

              <h3 className="text-lg font-semibold text-[#0F0F0F]">
                {company.name}
              </h3>

              <p className="mt-2 text-sm text-zinc-500">{company.category}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            <span className="text-zinc-400">From</span>{" "}
            <span className="text-[#0F0F0F]">Coal</span>{" "}
            {/* <span className="text-zinc-400">→</span>{" "} */}
            <span className="text-zinc-400">To</span>{" "}
            <span className="bg-gradient-to-r from-[#9F690F] via-[#FFEB5F] to-[#C9971A] bg-clip-text text-transparent">
              Gold
            </span>
          </h2>

          <p className="mt-5 text-xl text-zinc-500">
            Building businesses that transform ideas into enduring value.
          </p>
        </div>
      </section>
    </main>
  );
}
