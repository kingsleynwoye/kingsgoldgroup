"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Stack_Sans_Headline } from "next/font/google";
// import Image from "next/image";
import Logo from "./Logo";

export const stack_sans_headline = Stack_Sans_Headline({
  subsets: ["latin"],
  display: "swap",
});

export default function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  const navigation = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Our Businesses",
      href: "/businesses",
    },
    {
      name: "Contact Us",
      href: "/contact",
    },
    {
      name: "FAQs",
      href: "/faqs",
    },
    {
      name: "Our Security",
      href: "/security",
    },
  ];

  return (
    <footer
      className={`border-t border-zinc-200 bg-white ${stack_sans_headline.className}`}
    >
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}

          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              {/* <h2 className="text-3xl font-black tracking-tight">
                <span className="text-[#151716]">KINGS</span>
                <span className="bg-gradient-to-r from-[#9F690F] via-[#FFD94A] to-[#C9971A] bg-clip-text text-transparent">
                  GOLD
                </span>
              </h2> */}
              {/* <Image
                src="/logo/Kingsgold Logo.png"
                alt="Kingsgold Logo"
                width={500}
                height={160}
                priority
                className="h-12 w-auto"
              /> */}
              <Logo />
            </Link>

            <p className="mt-6 max-w-md leading-8 text-zinc-600">
              Kingsgold Group is a diversified business group focused on
              building, developing, and managing businesses that create
              long-term value through entrepreneurship, innovation, and
              strategic leadership.
            </p>

            {/* <p className="mt-6 text-sm font-medium text-zinc-500">
              From <span className="text-[#151716]">Coal</span> To{" "}
              <span className="bg-gradient-to-r from-[#9F690F] via-[#FFD94A] to-[#C9971A] bg-clip-text text-transparent">
                Gold
              </span>
            </p> */}
          </div>

          {/* Company */}

          <div>
            <h3 className="font-semibold text-[#151716]">Company</h3>

            <ul className="mt-5 space-y-3">
              {navigation.map((item) => {
                const active = pathname === item.href;

                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`transition duration-300 ${
                        active
                          ? "bg-gradient-to-r from-[#9F690F] via-[#FFEB5F] to-[#C9971A] bg-clip-text text-transparent font-semibold"
                          : "text-zinc-600 hover:text-[#C9971A]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Connect */}

          <div>
            <h3 className="font-semibold text-[#151716]">Connect</h3>

            <ul className="mt-5 space-y-3 text-zinc-600">
              <li>
                <a
                  href="https://www.facebook.com/kingsgoldgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#C9971A]"
                >
                  Facebook
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/kingsgoldgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#C9971A]"
                >
                  Instagram
                </a>
              </li>

              <li>
                <a
                  href="https://x.com/kingsgoldgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#C9971A]"
                >
                  X (Twitter)
                </a>
              </li>

              <li>
                <a
                  href="https://www.youtube.com/@kingsgoldgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#C9971A]"
                >
                  YouTube
                </a>
              </li>

              <li>
                <a
                  href="https://www.tiktok.com/@kingsgoldgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#C9971A]"
                >
                  TikTok
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/company/kingsgoldgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#C9971A]"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-8 text-sm text-zinc-500 md:flex-row">
          <p>© {year} Kingsgold Group Limited. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className={`transition duration-300 ${
                pathname === "/privacy"
                  ? "bg-gradient-to-r from-[#9F690F] via-[#FFEB5F] to-[#C9971A] bg-clip-text text-transparent font-semibold"
                  : "hover:text-[#C9971A]"
              }`}
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className={`transition duration-300 ${
                pathname === "/terms"
                  ? "bg-gradient-to-r from-[#9F690F] via-[#FFEB5F] to-[#C9971A] bg-clip-text text-transparent font-semibold"
                  : "hover:text-[#C9971A]"
              }`}
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
