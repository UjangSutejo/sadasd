import NavTextHover from "./NavTextHover";

export default function Navigation() {

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hero-font hero-desktop-nav absolute top-0 left-0 z-50 hidden w-full items-center justify-between px-8 py-6 text-white md:flex">
        {/* Logo - large bold left */}
        <div className="text-[2rem] md:text-[1.8rem] font-bold tracking-tighter uppercase leading-none drop-shadow-sm">
          SA&apos;ADIYAH DAYCARE
        </div>

        {/* Nav links - center */}
        <div className="flex items-center space-x-1 text-[11px] font-medium uppercase tracking-[0.30em]">
          <a href="#about" className="px-1"><NavTextHover label="About." /></a>
          <a href="#facilities" className="px-1"><NavTextHover label="Facilities." /></a>
          <a href="#program" className="px-1"><NavTextHover label="Program." /></a>
          <a href="#contact" className="px-1"><NavTextHover label="Contact" /></a>
        </div>

        {/* Get In Touch pill */}
        <a
          href="#contact"
          className="flex items-center gap-2 bg-black text-white text-[10px] font-medium py-3 px-6 rounded-full hover:bg-white hover:text-black transition-all uppercase tracking-widest shrink-0 border border-white/20"
        >
          Get In Touch
          <span className="w-3 h-3 rounded-full border border-current flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
          </span>
        </a>
      </nav>

    </>
  );
}
