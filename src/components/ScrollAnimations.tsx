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

      // Hero: gradually darkens when scrolling
      gsap.to(hero, {
        filter: "brightness(0.5)",
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: () => `+=${navHeight}`,
          scrub: true,
        },
      });

      // Fade images inside hero
      heroImgs?.forEach((img) => {
        gsap.to(img, {
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: () => `+=${navHeight}`,
            scrub: true,
          },
        });
      });

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