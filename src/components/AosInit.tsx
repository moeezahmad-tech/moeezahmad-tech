"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AosInit() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });

    function initImageScrollOnHover() {
      const cards = document.querySelectorAll(
        ".project-card-modern, .dark-service-card"
      );
      cards.forEach((card) => {
        const holder = card.querySelector<HTMLElement>(
          ".project-img-holder, .service-card-mockup"
        );
        if (!holder) return;
        const img = holder.querySelector<HTMLImageElement>("img");
        if (!img) return;

        const calculateScroll = () => {
          if (!holder || !img) return;
          const holderHeight = holder.clientHeight;
          const imgHeight = img.offsetHeight;
          if (imgHeight > holderHeight) {
            const dist = imgHeight - holderHeight;
            img.style.setProperty("--scroll-y", `-${dist}px`);
            const duration = Math.min(Math.max(dist / 65, 5), 12);
            img.style.transitionDuration = `${duration}s`;
            img.style.transitionTimingFunction = "ease-in-out";
          }
        };

        if (img.complete) {
          calculateScroll();
        } else {
          img.addEventListener("load", calculateScroll);
        }
        card.addEventListener("mouseenter", calculateScroll);
      });
    }

    initImageScrollOnHover();
    window.addEventListener("resize", initImageScrollOnHover);
    return () => {
      window.removeEventListener("resize", initImageScrollOnHover);
    };
  }, []);

  return null;
}
