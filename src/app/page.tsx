import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ChapterBrain from "@/components/ChapterBrain";
import ChapterWorkforce from "@/components/ChapterWorkforce";
import ChapterJourney from "@/components/ChapterJourney";
import ChapterMemory from "@/components/ChapterMemory";
import ChapterChannels from "@/components/ChapterChannels";
import ChapterOutcomes from "@/components/ChapterOutcomes";
import ChapterStudio from "@/components/ChapterStudio";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Nav />
      <main className="w-full max-w-full overflow-x-hidden">
        {/* Attention */}
        <Hero />
        <Marquee />

        {/* Interest */}
        <ChapterBrain />
        <ChapterWorkforce />

        {/* Desire */}
        <ChapterJourney />
        <ChapterMemory />
        <ChapterChannels />
        <ChapterOutcomes />
        <ChapterStudio />

        {/* Action */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
