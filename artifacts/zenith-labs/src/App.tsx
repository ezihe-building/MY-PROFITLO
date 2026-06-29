import { useState, useEffect, useRef } from "react";
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
import CodeWheel from "@/components/CodeWheel";
import CustomCursor from "@/components/CustomCursor";
import DarkSide from "@/pages/DarkSide";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function MainPage() {
  const skyfallAudio = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio();
    audio.src = "/audio/skyfall-adele.mp3";
    audio.loop = true;
    skyfallAudio.current = audio;
    return () => {
      audio.pause();
    };
  }, []);

  const playSkyfall = () => {
    if (skyfallAudio.current) {
      skyfallAudio.current.play().catch(() => {});
    }
  };

  return (
    <div className="min-h-screen bg-black cursor-none md:cursor-none">
      <CustomCursor />
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
      <IntroScreen onComplete={playSkyfall} />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
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
