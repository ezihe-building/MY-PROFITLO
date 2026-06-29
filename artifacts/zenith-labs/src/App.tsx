import { useState, useEffect, useRef } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MusicProvider, useMusic } from "@/contexts/MusicContext";
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
import AboutRichard from "@/pages/AboutRichard";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function MainPage() {
  const { playSkyfall } = useMusic();

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

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={MainPage} />
      <Route path="/darkside" component={DarkSide} />
      <Route path="/about-richard" component={AboutRichard} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <MusicProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <AppRoutes />
          </WouterRouter>
        </MusicProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
