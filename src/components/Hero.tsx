import OrbitingEmployees from "./OrbitingEmployees";
import NeuralField from "./NeuralField";

/**
 * Server component on purpose. The entry animation is pure CSS (.rise/.bloom)
 * so the fold renders even if the client bundle never arrives.
 */
export default function Hero() {
  return (
    <section className="relative min-h-screen pt-44 pb-28 overflow-hidden grain">
      {/* Full-bleed plate — treated so it reads as art direction, not stock */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center plate opacity-[0.22]"
        style={{
          backgroundImage:
            "url(https://picsum.photos/seed/veerha-midnight-city/1920/1080)",
        }}
      />
      {/* Dark radial wash so the type always wins */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 50% 42%, rgba(8,6,15,0.35) 0%, rgba(8,6,15,0.88) 55%, #08060F 85%)",
        }}
      />

      <div className="absolute inset-0 mask-fade-radial opacity-60">
        <NeuralField nodeCount={54} />
      </div>
      <div className="absolute inset-0 grid-bg opacity-25 mask-fade-radial" />

      <div className="container-wide relative">
        <div className="flex flex-col items-center text-center">
          <h1 className="rise h-editorial track-xl max-w-6xl text-[clamp(3rem,5.6vw,5.5rem)]">
            Hire your first
            <br />
            <span className="text-gradient">AI employee.</span>
          </h1>

          <p
            className="rise mt-8 max-w-2xl text-lg sm:text-xl font-light leading-relaxed text-white/55"
            style={{ animationDelay: "0.15s" }}
          >
            Not another chatbot. Not another CRM. A real AI Sales Executive that
            captures leads across every channel, qualifies them instantly, books
            the meeting and follows up &mdash;{" "}
            <span className="text-white/85">24 hours a day.</span>
          </p>

          <div
            className="rise mt-12 flex flex-col sm:flex-row items-center gap-3"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#hire"
              className="press group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-[15px] font-medium text-black transition-colors duration-300 hover:bg-white/90"
            >
              Hire your first AI employee
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </a>
            <a
              href="#workforce"
              className="press group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-8 py-4 text-[15px] text-white backdrop-blur-xl transition-colors duration-300 hover:bg-white/[0.12]"
            >
              <PlayGlyph />
              Watch your AI workforce
            </a>
          </div>
        </div>

        {/* Signature visual, anchored below the fold line */}
        <div
          className="bloom relative mx-auto mt-20 w-full max-w-3xl"
          style={{ animationDelay: "0.4s" }}
        >
          <OrbitingEmployees />
        </div>
      </div>
    </section>
  );
}

function PlayGlyph() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
