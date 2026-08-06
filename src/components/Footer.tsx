import Image from "next/image";
import Link from "next/link";

const COLS = [
  {
    heading: "Product",
    links: [
      { label: "The Brain", href: "#brain" },
      { label: "AI Employees", href: "#employees" },
      { label: "Journey", href: "#journey" },
      { label: "Pricing", href: "#" },
    ],
  },
  {
    heading: "Industries",
    links: [
      { label: "Real Estate", href: "#" },
      { label: "Hospitality", href: "#" },
      { label: "Automotive", href: "#" },
      { label: "Education", href: "#" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Case studies", href: "#" },
      { label: "Docs", href: "#" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Privacy", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050308]">
      <div className="container-x py-20">
        <div className="grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,2fr)] gap-16">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative w-10 h-10">
                <Image
                  src="/veerha-logo.png"
                  alt="Veerha"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-medium">Veerha</span>
            </Link>
            <p className="mt-6 h-serif text-2xl text-white/60 max-w-sm leading-snug">
              Stop hiring software.
              <br />
              Hire intelligence.
            </p>
            <p className="mt-6 text-xs text-white/30">
              © {new Date().getFullYear()} Veerha. All rights reserved.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {COLS.map((c) => (
              <div key={c.heading}>
                <h4 className="text-[11px] uppercase tracking-[0.22em] text-white/40 mb-4">
                  {c.heading}
                </h4>
                <ul className="space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-sm text-white/70 hover:text-white transition"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-[11px] text-white/30">
          <div>Made with intelligence. Powered by the Veerha brain.</div>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white/70 transition">Terms</Link>
            <Link href="#" className="hover:text-white/70 transition">Privacy</Link>
            <Link href="#" className="hover:text-white/70 transition">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
