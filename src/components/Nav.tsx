"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LINKS = [
  { label: "Employees", href: "#employees" },
  { label: "The Brain", href: "#brain" },
  { label: "Journey", href: "#journey" },
  { label: "Outcomes", href: "#outcomes" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="container-x">
        <div
          className={`flex items-center justify-between rounded-full transition-all duration-500 ${
            scrolled
              ? "bg-[#0D0A1A]/70 backdrop-blur-xl border border-white/5 px-4 py-2.5"
              : "px-1 py-1"
          }`}
        >
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="relative w-9 h-9">
              <Image
                src="/veerha-logo.png"
                alt="Veerha"
                fill
                sizes="36px"
                className="object-contain drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                priority
              />
            </div>
            <span className="text-[15px] font-medium tracking-tight">Veerha</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-[13px] text-white/60 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="#demo"
              className="hidden sm:inline-flex px-4 py-2 text-[13px] text-white/70 hover:text-white transition"
            >
              Book a demo
            </Link>
            <Link
              href="#hire"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-[13px] font-medium rounded-full bg-white text-black hover:bg-white/90 transition"
            >
              Hire your first AI
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
