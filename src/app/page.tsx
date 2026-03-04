import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SocialCarousel from "@/components/SocialCarousel";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <SocialCarousel />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
