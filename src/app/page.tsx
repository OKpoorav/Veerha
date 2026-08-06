import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ChapterBrain from "@/components/ChapterBrain";
import ChapterEmployees from "@/components/ChapterEmployees";
import ChapterCompany from "@/components/ChapterCompany";
import ChapterJourney from "@/components/ChapterJourney";
import ChapterMemory from "@/components/ChapterMemory";
import ChapterChannels from "@/components/ChapterChannels";
import ChapterOutcomes from "@/components/ChapterOutcomes";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Nav />
      <main>
        <Hero />
        <ChapterBrain />
        <ChapterEmployees />
        <ChapterCompany />
        <ChapterJourney />
        <ChapterMemory />
        <ChapterChannels />
        <ChapterOutcomes />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
