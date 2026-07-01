"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimations() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Setup Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    // Integrate Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      const hero = document.getElementById("hero");
      const heroNav = document.querySelector(".hero-desktop-nav") as HTMLElement;
      const about = document.getElementById("about");
      const heroImgs = hero?.querySelectorAll("img");

      if (!hero || !heroNav || !about) return;

      const navHeight = heroNav.offsetHeight;

      // Hero stays pinned
      ScrollTrigger.create({
        trigger: hero,
        start: "top top",
        pin: true,
        pinSpacing: false,
      });

      // Hero bg redup via scroll callback (desktop only)
      const heroBg = hero.querySelector("[data-hero-bg]") as HTMLElement;
      if (heroBg) {
        const isDesktop = window.matchMedia("(min-width: 768px)").matches;
        gsap.set(heroBg, { opacity: 0.8 });

        if (isDesktop) {
          lenis.on("scroll", ({ scroll }: { scroll: number }) => {
            const fadeStart = 0;
            const fadeEnd = navHeight * 0.3;
            const progress = Math.min(1, Math.max(0, (scroll - fadeStart) / (fadeEnd - fadeStart)));
            const opacity = 0.8 - progress * 0.6;
            heroBg.style.opacity = String(opacity);
          });
        } else {
          gsap.to(heroBg, {
            opacity: 0.2,
            ease: "none",
            scrollTrigger: {
              trigger: about,
              start: "top bottom",
              end: "top top",
              scrub: true,
            },
          });
        }
      }

      // About slide up dari bawah
      gsap.fromTo(
        about,
        { y: 10 },
        {
          y: 0,
          duration: 1,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: () => `+=${navHeight}`,
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => {
      lenis.destroy();
      ctx.revert();
    };
  }, []);

  return null;
}