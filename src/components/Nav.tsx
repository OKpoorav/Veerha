"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LINKS = [
  { label: "Workforce", href: "#workforce" },
  { label: "The Brain", href: "#brain" },
  { label: "Journey", href: "#journey" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "AI Studio", href: "#studio" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const shell =
    "material rounded-full border transition-all duration-500 " +
    (scrolled
      ? "border-white/10 bg-[#0D0A1A]/75 shadow-[0_18px_50px_-25px_rgba(139,92,246,0.7)]"
      : "border-white/[0.06] bg-white/[0.03]");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="container-wide flex items-center justify-between gap-4">
        {/* Left slice — mark */}
        <Link
          href="/"
          className={`${shell} group flex items-center gap-3 pl-2.5 pr-5 py-2 shrink-0`}
        >
          <span className="relative w-11 h-11 transition-transform duration-500 group-hover:scale-110">
            <Image
              src="/veerha-logo.png"
              alt="Veerha"
              fill
              sizes="44px"
              className="object-contain drop-shadow-[0_0_12px_rgba(139,92,246,0.6)]"
              priority
            />
          </span>
          <span className="text-[19px] font-medium tracking-tight">Veerha</span>
        </Link>

        {/* Centre slice — navigation */}
        <nav className={`${shell} hidden lg:flex items-center gap-0.5 px-2 py-2`}>
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="press relative px-4 py-1.5 text-[13px] text-white/60 hover:text-white transition-colors duration-300 rounded-full hover:bg-white/[0.06]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right slice — action */}
        <div className={`${shell} flex items-center gap-1 p-1.5 shrink-0`}>
          <Link
            href="#demo"
            className="press hidden sm:inline-flex px-4 py-2 text-[13px] text-white/70 hover:text-white transition-colors duration-300"
          >
            Book a demo
          </Link>
          <Link
            href="#hire"
            className="press group inline-flex items-center gap-1.5 pl-4 pr-3.5 py-2 text-[13px] font-medium rounded-full bg-white text-black hover:bg-white/90 transition-colors duration-300"
          >
            Hire your first AI
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            >
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
