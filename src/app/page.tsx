import Navigation from "@/components/Navigation";
import HamburgerAnimation from "@/components/HamburgerAnimation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Facilities from "@/components/Facilities";
import Program from "@/components/Program";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <ScrollAnimations />
      <Navigation />
      <HamburgerAnimation />
      {/* Mobile Header — outside hero so z-index works over hamburger overlay */}
      <div className="md:hidden absolute top-0 left-0 right-0 z-[70] p-5 pointer-events-none">
        <div className="flex items-start justify-between pointer-events-auto">
          <div className="text-[22px] font-bold tracking-tighter uppercase text-white">
            SA&apos;ADIYAH DAYCARE
          </div>
          <button
            id="mobile-menu-open"
            type="button"
            className="text-[13px] font-bold uppercase tracking-[0.16em] pt-1 text-white"
          >
            MENU
          </button>
        </div>
      </div>
      <Hero />
      <About />
      <Facilities />
      <Program />
      <Footer />
    </main>
  );
}