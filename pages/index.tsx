"use client";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  useEffect(() => {
    (async () => {
      const Lenis = (await import("@studio-freight/lenis")).default;
      const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
      const raf = (time: number) => { lenis.raf(time); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
      return () => lenis.destroy();
    })();
  }, []);

  return (
    <main className="min-h-screen bg-[#F5F2EC] text-[#0E0E0E]">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
