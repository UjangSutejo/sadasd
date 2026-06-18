"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const openButton = document.getElementById("mobile-menu-open");
    const closeButton = document.getElementById("mobile-menu-close");
    const overlay = document.getElementById("mobile-menu-overlay");
    const panel = overlay?.querySelector(".mobile-menu-panel") as HTMLElement | null;
    const backdrop = document.getElementById("mobile-menu-backdrop");
    const links = overlay?.querySelectorAll(".mobile-menu-link") ?? [];

    if (!openButton || !closeButton || !overlay || !panel || !backdrop) {
      return;
    }

    const openMenu = () => {
      overlay.classList.remove("hidden");
      overlay.classList.add("is-open");
      document.body.classList.add("menu-open");
      requestAnimationFrame(() => {
        panel.style.transform = "translateY(0)";
      });
      setIsOpen(true);
    };

    const closeMenu = () => {
      overlay.classList.remove("is-open");
      document.body.classList.remove("menu-open");
      panel.style.transform = "translateY(-100%)";
      window.setTimeout(() => {
        if (!overlay.classList.contains("is-open")) {
          overlay.classList.add("hidden");
        }
      }, 500);
      setIsOpen(false);
    };

    openButton.addEventListener("click", openMenu);
    closeButton.addEventListener("click", closeMenu);
    backdrop.addEventListener("click", closeMenu);

    links.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && overlay.classList.contains("is-open")) {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      openButton.removeEventListener("click", openMenu);
      closeButton.removeEventListener("click", closeMenu);
      backdrop.removeEventListener("click", closeMenu);
      links.forEach((link) => {
        link.removeEventListener("click", closeMenu);
      });
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hero-font hero-desktop-nav absolute top-0 left-0 z-50 hidden w-full items-center justify-between px-4 py-4 text-white md:flex md:px-10 md:py-8">
        <div className="text-lg md:text-2xl font-bold tracking-tighter shrink-0 uppercase">
          SA&apos;ADIYAH DAYCARE
        </div>
        <div className="flex flex-1 justify-center space-x-2 text-[12px] font-semibold uppercase tracking-[0.2em]">
          <a className="hover:opacity-70 transition-opacity" href="#about">
            About,
          </a>
          <a className="hover:opacity-70 transition-opacity" href="#facilities">
            Facilities,
          </a>
          <a className="hover:opacity-70 transition-opacity" href="#program">
            Program,
          </a>
          <a className="hover:opacity-70 transition-opacity" href="#contact">
            Contact
          </a>
        </div>
        <a
          href="#contact"
          className="flex items-center gap-2 bg-black text-white text-[9px] md:text-[10px] font-bold py-2 px-4 md:py-2.5 md:px-6 rounded-full border border-white/40 hover:bg-white hover:text-black transition-all uppercase tracking-widest shrink-0"
        >
          Get In Touch{" "}
          <span className="material-symbols-outlined text-[5px] md:text-[7px]">
            radio_button_unchecked
          </span>
        </a>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu-overlay"
        className="mobile-menu-overlay fixed inset-0 z-[60] hidden md:hidden"
        aria-hidden="true"
      >
        <div
          id="mobile-menu-backdrop"
          className="absolute inset-0 bg-[#5a3d2f]"
        ></div>
        <div className="mobile-menu-panel relative flex h-full w-full -translate-y-full flex-col bg-black text-white transition-transform duration-500 ease-out">
          <div className="flex items-start justify-between px-6 pt-6">
            <div className="text-[22px] font-bold tracking-tighter uppercase">
              SA&apos;ADIYAH DAYCARE
            </div>
            <button
              id="mobile-menu-close"
              className="text-[13px] font-bold uppercase tracking-[0.12em]"
            >
              CLOSE
            </button>
          </div>
          <div className="flex flex-1 flex-col justify-center px-6">
            <nav className="space-y-1">
              <a
                className="mobile-menu-link block text-[clamp(2.8rem,12vw,4.5rem)] font-normal leading-[0.92] tracking-[-0.07em] uppercase"
                href="#hero"
              >
                Home
              </a>
              <a
                className="mobile-menu-link block text-[clamp(2.8rem,12vw,4.5rem)] font-normal leading-[0.92] tracking-[-0.07em] uppercase"
                href="#about"
              >
                About
              </a>
              <a
                className="mobile-menu-link block text-[clamp(2.8rem,12vw,4.5rem)] font-normal leading-[0.92] tracking-[-0.07em] uppercase"
                href="#facilities"
              >
                Facilities
              </a>
              <a
                className="mobile-menu-link block text-[clamp(2.8rem,12vw,4.5rem)] font-normal leading-[0.92] tracking-[-0.07em] uppercase"
                href="#program"
              >
                Program
              </a>
              <a
                className="mobile-menu-link block text-[clamp(2.8rem,12vw,4.5rem)] font-normal leading-[0.92] tracking-[-0.07em] uppercase"
                href="#contact"
              >
                Contact
              </a>
            </nav>
          </div>
          <div className="px-6 pb-6">
            <div className="space-y-3 text-[12px] font-bold uppercase tracking-[0.08em]">
              <a className="mobile-menu-link block" href="#contact">
                Privacy Policy
              </a>
              <a className="mobile-menu-link block" href="#contact">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}