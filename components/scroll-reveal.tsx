"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".hero-copy, .hero-art, .section-heading, .project-card, .service-item, .about-art, .about-copy, .tools-panel, .contact-copy, .contact-actions"
    );

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    elements.forEach((element, index) => {
      element.classList.add("reveal-on-scroll");

      if (element.classList.contains("project-card")) {
        (element as HTMLElement).style.setProperty(
          "--reveal-delay",
          `${(index % 4) * 90}ms`
        );
      }

      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
