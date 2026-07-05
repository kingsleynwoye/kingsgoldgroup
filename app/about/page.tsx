// import Link from "next/link";
// import { Stack_Sans_Headline } from "next/font/google";

// export const stack_sans_headline = Stack_Sans_Headline({
//   subsets: ["latin"],
//   display: "swap",
// });

// export default function About() {
//   return (
//     <main className={`min-h-screen bg-white ${stack_sans_headline.className}`}>
//       <section className="mx-auto max-w-6xl px-6 py-24">
//         <div className="max-w-4xl">
//           <span className="rounded-full border border-zinc-200 px-4 py-1 text-sm font-medium text-zinc-600">
//             About Kingsgold Group
//           </span>

//           <h1 className="mt-6 text-5xl font-bold tracking-tight text-zinc-900 md:text-6xl">
//             Building Businesses That Shape the Future.
//           </h1>

//           <p className="mt-8 text-lg leading-8 text-zinc-600">
//             Kingsgold Group is a diversified business group committed to
//             building innovative companies that create value, solve meaningful
//             problems, and drive sustainable growth. Through strategic
//             investments, entrepreneurship, and innovation, the Group develops
//             businesses across multiple industries while contributing to Africa's
//             economic transformation.
//           </p>
//         </div>

//         {/* Mission & Vision */}
//         <div className="mt-24 grid gap-8 md:grid-cols-2">
//           <div className="rounded-3xl border border-zinc-200 p-8">
//             <h2 className="text-2xl font-bold text-zinc-900">Our Mission</h2>

//             <p className="mt-4 leading-8 text-zinc-600">
//               To build exceptional businesses that create lasting value, empower
//               people, and transform industries through innovation, integrity,
//               and excellence.
//             </p>
//           </div>

//           <div className="rounded-3xl border border-zinc-200 p-8">
//             <h2 className="text-2xl font-bold text-zinc-900">Our Vision</h2>

//             <p className="mt-4 leading-8 text-zinc-600">
//               To become one of Africa's most respected and globally recognized
//               business groups, creating sustainable enterprises that positively
//               impact generations.
//             </p>
//           </div>
//         </div>

//         {/* What We Do */}
//         <section className="mt-24">
//           <h2 className="text-4xl font-bold text-zinc-900">What We Do</h2>

//           <p className="mt-6 max-w-4xl text-lg leading-8 text-zinc-600">
//             Kingsgold Group operates through a growing portfolio of companies
//             serving diverse industries. Each company operates independently
//             while sharing a common commitment to innovation, customer
//             satisfaction, and long-term value creation.
//           </p>

//           <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {[
//               {
//                 title: "Technology",
//                 company: "Range Universe",
//               },
//               {
//                 title: "Finance",
//                 company: "TrustnFund",
//               },
//               {
//                 title: "Real Estate",
//                 company: "Staydeck",
//               },
//               {
//                 title: "Agriculture",
//                 company: "Nature Ambiance",
//               },
//               {
//                 title: "Creative & Entertainment",
//                 company: "DiceSea",
//               },
//             ].map((item) => (
//               <div
//                 key={item.company}
//                 className="rounded-2xl border border-zinc-200 p-6"
//               >
//                 <h3 className="text-lg font-semibold text-black">
//                   {item.title}
//                 </h3>

//                 <p className="mt-2 text-zinc-600">{item.company}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Core Values */}
//         <section className="mt-24">
//           <h2 className="text-4xl font-bold text-zinc-900">Our Core Values</h2>

//           <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {[
//               "Innovation",
//               "Integrity",
//               "Excellence",
//               "Leadership",
//               "Collaboration",
//               "Sustainability",
//             ].map((value) => (
//               <div
//                 key={value}
//                 className="rounded-2xl border border-zinc-200 p-6 text-center"
//               >
//                 <h3 className="text-lg font-semibold text-black">{value}</h3>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Founder */}
//         <section className="mt-24 rounded-3xl bg-zinc-900 p-10 text-white">
//           <span className="text-sm uppercase tracking-widest text-zinc-400">
//             Leadership
//           </span>

//           <h2 className="mt-3 text-4xl font-bold">
//             Kingsley Chidubem Nwoye (Kingsgold)
//           </h2>

//           <p className="mt-2 text-zinc-300">Founder & Group CEO</p>

//           <p className="mt-8 max-w-4xl text-lg leading-8 text-zinc-300">
//             Kingsley Chidubem Nwoye, popularly known as Kingsgold, is a Nigerian
//             software engineer and technology entrepreneur. He founded Kingsgold
//             Group with the vision of building businesses that solve real-world
//             problems, create opportunities, and contribute to sustainable
//             economic growth across Africa and beyond.
//           </p>
//         </section>

//         {/* Motto */}
//         <section className="mt-24 text-center">
//           <p className="text-4xl font-bold text-zinc-900">From Coal To Gold.</p>

//           <p className="mt-4 text-lg text-zinc-600">
//             A journey of transformation, innovation, and lasting impact.
//           </p>
//         </section>
//       </section>
//     </main>
//   );
// }

// import { Stack_Sans_Headline } from "next/font/google";

// export const stack_sans_headline = Stack_Sans_Headline({
//   subsets: ["latin"],
//   display: "swap",
// });

// const industries = [
//   {
//     title: "Technology",
//     company: "Range Universe",
//   },
//   {
//     title: "Finance",
//     company: "TrustnFund",
//   },
//   {
//     title: "Real Estate",
//     company: "Staydeck",
//   },
//   {
//     title: "Agriculture",
//     company: "Nature Ambiance",
//   },
//   {
//     title: "Creative & Entertainment",
//     company: "DiceSea",
//   },
// ];

// const values = [
//   "Innovation",
//   "Integrity",
//   "Excellence",
//   "Leadership",
//   "Collaboration",
//   "Sustainability",
// ];

// export default function About() {
//   return (
//     <main
//       className={`min-h-screen bg-[#0F0F0F] text-white ${stack_sans_headline.className}`}
//     >
//       <section className="mx-auto max-w-7xl px-6 py-24">
//         {/* Hero */}

//         <div className="max-w-4xl">
//           <span className="inline-flex rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-5 py-2 text-sm font-medium text-[#D4AF37]">
//             About Kingsgold Group
//           </span>

//           <h1 className="mt-8 text-5xl font-bold tracking-tight md:text-6xl">
//             Building Businesses That Shape the{" "}
//             <span className="text-[#D4AF37]">Future.</span>
//           </h1>

//           <p className="mt-8 text-lg leading-9 text-zinc-400">
//             Kingsgold Group is a diversified business group committed to
//             building innovative companies that create value, solve meaningful
//             problems, and drive sustainable growth. Through strategic
//             investments, entrepreneurship, and innovation, the Group develops
//             businesses across multiple industries while contributing to Africa's
//             economic transformation.
//           </p>
//         </div>

//         {/* Mission & Vision */}

//         <div className="mt-24 grid gap-8 md:grid-cols-2">
//           <div className="rounded-3xl border border-zinc-800 bg-[#18181B] p-8 transition hover:border-[#D4AF37]/50">
//             <div className="mb-5 h-1 w-12 rounded-full bg-[#D4AF37]" />

//             <h2 className="text-2xl font-bold text-white">Our Mission</h2>

//             <p className="mt-5 leading-8 text-zinc-400">
//               To build exceptional businesses that create lasting value, empower
//               people, and transform industries through innovation, integrity,
//               and excellence.
//             </p>
//           </div>

//           <div className="rounded-3xl border border-zinc-800 bg-[#18181B] p-8 transition hover:border-[#D4AF37]/50">
//             <div className="mb-5 h-1 w-12 rounded-full bg-[#D4AF37]" />

//             <h2 className="text-2xl font-bold text-white">Our Vision</h2>

//             <p className="mt-5 leading-8 text-zinc-400">
//               To become one of Africa's most respected and globally recognized
//               business groups, creating sustainable enterprises that positively
//               impact generations.
//             </p>
//           </div>
//         </div>

//         {/* What We Do */}

//         <section className="mt-28">
//           <h2 className="text-4xl font-bold">
//             What We <span className="text-[#D4AF37]">Do</span>
//           </h2>

//           <p className="mt-6 max-w-4xl text-lg leading-8 text-zinc-400">
//             Kingsgold Group operates through a growing portfolio of companies
//             serving diverse industries. Each company operates independently
//             while sharing a common commitment to innovation, customer
//             satisfaction, and long-term value creation.
//           </p>

//           <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {industries.map((item) => (
//               <div
//                 key={item.company}
//                 className="rounded-3xl border border-zinc-800 bg-[#18181B] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/50"
//               >
//                 <div className="mb-4 h-1 w-10 rounded-full bg-[#D4AF37]" />

//                 <h3 className="text-lg font-semibold text-white">
//                   {item.title}
//                 </h3>

//                 <p className="mt-3 text-zinc-400">{item.company}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Core Values */}

//         <section className="mt-28">
//           <h2 className="text-4xl font-bold">
//             Our Core <span className="text-[#D4AF37]">Values</span>
//           </h2>

//           <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {values.map((value) => (
//               <div
//                 key={value}
//                 className="rounded-3xl border border-zinc-800 bg-[#18181B] p-8 text-center transition hover:border-[#D4AF37]/50"
//               >
//                 <h3 className="text-lg font-semibold text-white">{value}</h3>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Founder */}

//         <section className="mt-28 rounded-[2rem] border border-[#D4AF37]/30 bg-gradient-to-br from-[#18181B] to-[#0F0F0F] p-10">
//           <span className="text-sm font-medium uppercase tracking-[0.3em] text-[#D4AF37]">
//             Leadership
//           </span>

//           <h2 className="mt-4 text-4xl font-bold">
//             Kingsley Chidubem Nwoye{" "}
//             <span className="text-[#D4AF37]">(Kingsgold)</span>
//           </h2>

//           <p className="mt-3 text-zinc-400">Founder & Group CEO</p>

//           <p className="mt-8 max-w-4xl text-lg leading-9 text-zinc-300">
//             Kingsley Chidubem Nwoye, popularly known as Kingsgold, is a Nigerian
//             software engineer, technology entrepreneur, and the founder of
//             Kingsgold Group. Through the Group, he leads a portfolio of
//             businesses spanning technology, finance, real estate, agriculture,
//             and the creative industries.
//           </p>
//         </section>

//         {/* Motto */}

//         <section className="mt-28 text-center">
//           <h2 className="text-5xl font-bold tracking-tight">
//             <span className="text-zinc-500">Coal</span>{" "}
//             <span className="text-white">→</span>{" "}
//             <span className="text-[#D4AF37]">Gold</span>
//           </h2>

//           <p className="mt-5 text-xl text-zinc-400">
//             Building businesses that transform ideas into enduring value.
//           </p>
//         </section>
//       </section>
//     </main>
//   );
// }

import { Stack_Sans_Headline } from "next/font/google";

export const stack_sans_headline = Stack_Sans_Headline({
  subsets: ["latin"],
  display: "swap",
});

const industries = [
  {
    title: "Technology",
    company: "Range Universe",
  },
  {
    title: "Finance",
    company: "TrustnFund",
  },
  {
    title: "Real Estate",
    company: "Staydeck",
  },
  {
    title: "Agriculture",
    company: "Nature Ambiance",
  },
  {
    title: "Creative & Entertainment",
    company: "DiceSea",
  },
];

const values = [
  "Innovation",
  "Integrity",
  "Excellence",
  "Leadership",
  "Collaboration",
  "Sustainability",
];

export default function About() {
  return (
    <main
      className={`min-h-screen bg-white text-[#0F0F0F] ${stack_sans_headline.className}`}
    >
      <section className="mx-auto max-w-7xl px-6 py-24">
        {/* Hero */}

        <div className="max-w-4xl">
          <span className="inline-flex rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-medium text-[#B8860B]">
            About Kingsgold Group
          </span>

          <h1 className="mt-8 text-5xl font-bold tracking-tight md:text-6xl">
            Building Businesses That Shape the{" "}
            <span className="text-[#D4AF37]">Future.</span>
          </h1>

          <p className="mt-8 text-lg leading-9 text-zinc-600">
            Kingsgold Group is a diversified business group committed to
            building innovative companies that create value, solve meaningful
            problems, and drive sustainable growth. Through strategic
            investments, entrepreneurship, and innovation, the Group develops
            businesses across multiple industries while contributing to Africa's
            economic transformation.
          </p>
        </div>

        {/* Mission & Vision */}

        <div className="mt-24 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37] hover:shadow-lg">
            <div className="mb-5 h-1 w-12 rounded-full bg-[#D4AF37]" />

            <h2 className="text-2xl font-bold text-[#0F0F0F]">Our Mission</h2>

            <p className="mt-5 leading-8 text-zinc-600">
              To build exceptional businesses that create lasting value, empower
              people, and transform industries through innovation, integrity,
              and excellence.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37] hover:shadow-lg">
            <div className="mb-5 h-1 w-12 rounded-full bg-[#D4AF37]" />

            <h2 className="text-2xl font-bold text-[#0F0F0F]">Our Vision</h2>

            <p className="mt-5 leading-8 text-zinc-600">
              To become one of Africa's most respected and globally recognized
              business groups, creating sustainable enterprises that positively
              impact generations.
            </p>
          </div>
        </div>

        {/* What We Do */}

        <section className="mt-28">
          <h2 className="text-4xl font-bold">
            What We <span className="text-[#D4AF37]">Do</span>
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-zinc-600">
            Kingsgold Group operates through a growing portfolio of companies
            across multiple industries. Each company operates independently
            while sharing a common vision of innovation, excellence, and
            long-term value creation.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((item) => (
              <div
                key={item.company}
                className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37] hover:shadow-lg"
              >
                <div className="mb-4 h-1 w-10 rounded-full bg-[#D4AF37]" />

                <h3 className="text-lg font-semibold text-[#0F0F0F]">
                  {item.title}
                </h3>

                <p className="mt-3 text-zinc-600">{item.company}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Values */}

        <section className="mt-28">
          <h2 className="text-4xl font-bold">
            Our Core <span className="text-[#D4AF37]">Values</span>
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value}
                className="rounded-3xl border border-zinc-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37] hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold text-[#0F0F0F]">
                  {value}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Founder */}

        <section className="mt-28 rounded-[2rem] bg-[#0F0F0F] p-10 text-white">
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-[#D4AF37]">
            Leadership
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Kingsley Chidubem Nwoye{" "}
            <span className="text-[#D4AF37]">(Kingsgold)</span>
          </h2>

          <p className="mt-3 text-zinc-400">Founder & CEO</p>

          <p className="mt-8 max-w-4xl text-lg leading-9 text-zinc-300">
            Kingsley Chidubem Nwoye, popularly known as Kingsgold, is a Nigerian
            software engineer, technology entrepreneur, and the Founder & CEO of
            Kingsgold Group. Through the Group, he leads a diversified portfolio
            of companies across multiple industries, with a vision to build
            innovative businesses that create lasting value and shape the
            future.
          </p>
        </section>

        {/* Motto */}

        <section className="mt-28 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            <span className="text-zinc-400">From</span>{" "}
            <span className="text-[#0F0F0F]">Coal</span>{" "}
            {/* <span className="text-zinc-400">→</span>{" "} */}
            <span className="text-zinc-400">To</span>{" "}
            <span className="text-[#D4AF37]">Gold</span>
          </h2>

          <p className="mt-5 text-xl text-zinc-500">
            Building businesses that transform ideas into enduring value.
          </p>
        </section>
      </section>
    </main>
  );
}
