"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import MenuRevealText from "./MenuRevealText";

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Facilities", href: "#facilities" },
  { label: "Program", href: "#program" },
  { label: "Contact", href: "#contact" },
];

export default function HamburgerAnimation() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const isOpen = useRef(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    gsap.set(overlay, { y: "-100%", visibility: "hidden" });

    const toggleButton = document.getElementById("mobile-menu-open");

    const openMenu = () => {
      isOpen.current = true;
      gsap.set(overlay, { visibility: "visible" });
      gsap.to(overlay, { y: "0%", duration: 0.5, ease: "power2.inOut" });
      setTimeout(() => setMenuOpen(true), 400);
      if (toggleButton) toggleButton.textContent = "CLOSE";
      document.body.classList.add("overflow-hidden");
    };

    const closeMenu = () => {
      isOpen.current = false;
      setMenuOpen(false);
      gsap.to(overlay, { y: "-100%", duration: 0.4, ease: "power3.in", onComplete: () => gsap.set(overlay, { visibility: "hidden" }) });
      if (toggleButton) toggleButton.textContent = "MENU";
      document.body.classList.remove("overflow-hidden");
    };

    const toggleMenu = () => {
      if (isOpen.current) closeMenu();
      else openMenu();
    };

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen.current) closeMenu();
    };

    toggleButton?.addEventListener("click", toggleMenu);
    window.addEventListener("keydown", handleKeydown);

    return () => {
      toggleButton?.removeEventListener("click", toggleMenu);
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      id="mobile-menu-overlay"
      className="fixed inset-0 z-[60] bg-black text-white md:hidden"
    >
      <div className="flex h-full w-full flex-col justify-between px-6 py-6">
        <div className="flex-1 flex flex-col justify-center">
          <nav className="space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                className="mobile-menu-link block text-[clamp(2.8rem,12vw,4.5rem)] font-normal leading-[0.92] tracking-[-0.07em] uppercase"
                href={item.href}
              >
                <MenuRevealText
                  text={item.label}
                  reveal={menuOpen}
                  staggerMs={40}
                  animDuration={600}
                />
              </a>
            ))}
          </nav>
        </div>
        <div className="space-y-1 text-[18px] font-normal leading-[0.92] tracking-[-0.07em] uppercase">
          <a className="block" href="#contact">Privacy Policy</a>
          <a className="block" href="#contact">Terms of Service</a>
        </div>
      </div>
    </div>
  );
}
