import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Contact from "@/components/Contact";

const StickyCTA = dynamic(() => import("@/components/StickyCTA"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <About />
      <Projects />
      <Services />
      {/* <Technologies /> */}
      <Testimonials />
      {/* <CTASection /> */}
      <Contact />
      <StickyCTA />
    </>
  );
}
