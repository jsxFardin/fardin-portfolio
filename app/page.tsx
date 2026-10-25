import type { Metadata } from "next";
import dynamic from "next/dynamic";
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

const StickyCTA = dynamic(() => import("@/components/StickyCTA"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Fardin Ahsan - AI-First Full Stack Engineer",
  description:
    "AI-First Full Stack Engineer (7+ yrs). I build LLM-powered web apps — RAG, AI assistants, workflow automation — plus SaaS/ERP/CRM platforms and biometric/IoT device integration. Laravel, Node, React, AWS. Remote, worldwide.",
  openGraph: {
    title: "Fardin Ahsan - AI-First Full Stack Engineer",
    description:
      "AI-powered web apps that cut manual work and scale your business. View projects and get in touch.",
  },
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
