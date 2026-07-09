import Link from "next/link";
import { Stack_Sans_Headline } from "next/font/google";

export const stack_sans_headline = Stack_Sans_Headline({
  subsets: ["latin"],
  display: "swap",
});

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className={`border-t border-zinc-200 bg-white ${stack_sans_headline.className}`}
    >
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}

          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <h2 className="text-3xl font-black tracking-tight">
                <span className="text-[#151716]">KINGS</span>
                <span className="bg-gradient-to-r from-[#9F690F] via-[#FFD94A] to-[#C9971A] bg-clip-text text-transparent">
                  GOLD
                </span>
              </h2>
            </Link>

            <p className="mt-6 max-w-md leading-8 text-zinc-600">
              Kingsgold Group is a diversified business group focused on
              building, developing, and managing businesses that create
              long-term value through entrepreneurship, innovation, and
              strategic leadership.
            </p>

            <p className="mt-6 text-sm font-medium text-zinc-500">
              From <span className="text-[#151716]">Coal</span> To{" "}
              <span className="bg-gradient-to-r from-[#9F690F] via-[#FFD94A] to-[#C9971A] bg-clip-text text-transparent">
                Gold
              </span>
            </p>
          </div>

          {/* Company */}

          <div>
            <h3 className="font-semibold text-[#151716]">Company</h3>

            <ul className="mt-5 space-y-3 text-zinc-600">
              <li>
                <Link href="/" className="transition hover:text-[#C9971A]">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="transition hover:text-[#C9971A]">
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/businesses"
                  className="transition hover:text-[#C9971A]"
                >
                  Businesses
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-[#C9971A]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}

          <div>
            <h3 className="font-semibold text-[#151716]">Connect</h3>

            <ul className="mt-5 space-y-3 text-zinc-600">
              <li>
                <a
                  href="https://linkedin.com/company/kingsgoldgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#C9971A]"
                >
                  LinkedIn
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
                  href="https://github.com/kingsgoldgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#C9971A]"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-8 text-sm text-zinc-500 md:flex-row">
          <p>© {year} Kingsgold Group Limited. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#C9971A] transition">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-[#C9971A] transition">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
