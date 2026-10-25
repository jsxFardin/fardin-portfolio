import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Services from "@/components/Services";
import About from "@/components/About";
import Technologies from "@/components/Technologies";
import Testimonials from "@/components/Testimonials";
import Videos from "@/components/Videos";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import StickyCTA from "@/components/StickyCTA";

export const metadata: Metadata = {
  title: "Fardin Ahsan - AI-First Full Stack Engineer",
  description:
    "AI-First Full Stack Engineer (7+ yrs). I build LLM-powered web apps (RAG, AI assistants, workflow automation), SaaS/ERP/CRM platforms and biometric/IoT device integration. Laravel, Node, React, AWS. Remote, worldwide.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Projects />
      <Process />
      <Services />
      <About />
      <Technologies />
      <Testimonials />
      <Videos />
      <FAQ />
      <Contact />
      <StickyCTA />
    </>
  );
}
