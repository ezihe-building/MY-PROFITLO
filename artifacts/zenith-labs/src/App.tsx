import { useState, useEffect } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import IntroScreen from "@/components/IntroScreen";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingAI from "@/components/FloatingAI";
import MusicPlayer from "@/components/MusicPlayer";
import CodeWheel from "@/components/CodeWheel";
import CustomCursor from "@/components/CustomCursor";
import { KonamiOverlay } from "@/components/KonamiOverlay";
import DarkSide from "@/pages/DarkSide";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function MainPage() {
  return (
    <div className="min-h-screen bg-black cursor-none md:cursor-none">
      <CustomCursor />
      <KonamiOverlay />
      <Navigation />
      <Hero />
      <CodeWheel />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
      <FloatingAI />
      <MusicPlayer />
    </div>
  );
}

function App() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const hasSeenIntro = localStorage.getItem("zenith-intro-seen");
    if (!hasSeenIntro) {
      setShowIntro(true);
    }
  }, []);

  const handleIntroComplete = () => {
    localStorage.setItem("zenith-intro-seen", "true");
    setShowIntro(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          {showIntro && <IntroScreen onComplete={handleIntroComplete} />}
          <Switch>
            <Route path="/" component={MainPage} />
            <Route path="/darkside" component={DarkSide} />
            <Route component={NotFound} />
          </Switch>
        </WouterRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
