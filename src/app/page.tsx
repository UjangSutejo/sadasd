import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Facilities from "@/components/Facilities";
import Program from "@/components/Program";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";

export default function Home() {
  return (
    <main>
      <ScrollAnimations />
      <Navigation />
      <Hero />
      <About />
      <Facilities />
      <Program />
      <Footer />
    </main>
  );
}