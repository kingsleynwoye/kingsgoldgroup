"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { Stack_Sans_Headline } from "next/font/google";
// import Image from "next/image";
import Logo from "./Logo";

export const stack_sans_headline = Stack_Sans_Headline({
  subsets: ["latin"],
  display: "swap",
});

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
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-zinc-200/80 bg-white backdrop-blur-xl ${stack_sans_headline.className}`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}

        <Link href="/" className="group" onClick={() => setOpen(!open)}>
          {/* <div className="leading-none">
            <h1 className="text-3xl font-black tracking-tight">
              <span className="text-[#151716]">KINGS</span>

              <span className="bg-gradient-to-r from-[#9F690F] via-[#FFEB5F] to-[#C9971A] bg-clip-text text-transparent">
                GOLD
              </span>
            </h1> */}
          {/* <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.45em] text-zinc-500">
              GROUP
            </p> */}
          {/* </div> */}
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

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-10 lg:flex">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-base font-medium transition-colors duration-300 ${
                  active
                    ? "bg-gradient-to-r from-[#9F690F] via-[#FFEB5F] to-[#C9971A] bg-clip-text text-transparent"
                    : "text-[#151716] hover:text-[#B8860B]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}

        <div className="hidden lg:block">
          <Link
            href="/security"
            className="rounded-full bg-gradient-to-r from-[#9F690F] via-[#FFEB5F] to-[#C9971A] px-6 py-3 font-semibold text-[#151716] shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            Our Security
          </Link>
        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-[#151716] transition hover:bg-zinc-100 lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="border-t border-zinc-200 bg-white lg:hidden">
          <nav className="flex flex-col px-6 py-6">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(!open)}
                  className={`rounded-xl px-4 py-4 text-base font-medium transition-all duration-300 ${
                    active
                      ? "bg-[#D4AF37]/10 bg-gradient-to-r from-[#9F690F] via-[#FFEB5F] to-[#C9971A] bg-clip-text text-transparent"
                      : "text-[#151716] hover:bg-zinc-100"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <Link
              href="/security"
              onClick={() => setOpen(!open)}
              className="mt-4 rounded-full bg-gradient-to-r from-[#9F690F] via-[#FFEB5F] to-[#C9971A] px-6 py-4 text-center font-semibold text-[#151716]"
            >
              Our Security
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
