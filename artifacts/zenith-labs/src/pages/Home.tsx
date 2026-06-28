import { useState } from "react";
import { IntroScreen } from "@/components/IntroScreen";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingAI } from "@/components/FloatingAI";
import { MusicPlayer } from "@/components/MusicPlayer";
import { CustomCursor } from "@/components/CustomCursor";
import { KonamiOverlay } from "@/components/KonamiOverlay";
import { Particles } from "@/components/Particles";
import { SectionDivider } from "@/components/SectionDivider";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function Home() {
  const [introFinished, setIntroFinished] = useState(false);
  useScrollReveal();

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-primary selection:text-white">
      <CustomCursor />
      <KonamiOverlay />
      <IntroScreen onComplete={() => setIntroFinished(true)} />

      {introFinished && (
        <div className="relative z-10 animate-in fade-in duration-1000">
          <Particles />
          <Navigation />
          
          <main>
            <Hero />
            <SectionDivider />
            <About />
            <SectionDivider />
            <Services />
            <SectionDivider />
            <Projects />
            <SectionDivider />
            <Skills />
            <SectionDivider />
            <Experience />
            <SectionDivider />
            <Contact />
          </main>
          
          <Footer />
          <FloatingAI />
          <MusicPlayer />
        </div>
      )}
    </div>
  );
}
