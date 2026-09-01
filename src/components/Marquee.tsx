const LOGOS = [
  "DAMAC",
  "EMAAR",
  "Betterhomes",
  "dubizzle",
  "Policybazaar",
  "Nobroker",
  "Sobha",
  "Meraas",
  "Azizi",
  "Danube",
];

export default function Marquee() {
  return (
    <section className="relative border-y border-white/5 py-14">
      <p className="mb-8 text-center text-[11px] uppercase tracking-[0.3em] text-white/30">
        Powering the next generation of businesses
      </p>
      <div
        className="overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="flex w-max gap-20 whitespace-nowrap animate-marquee">
          {[...LOGOS, ...LOGOS].map((n, i) => (
            <span
              key={i}
              className="h-serif text-2xl tracking-wide text-white/25 transition-colors duration-500 hover:text-white/60"
            >
              {n}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
