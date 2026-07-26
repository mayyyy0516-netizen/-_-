import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function HomePage() {
  const page = useRef<HTMLElement>(null);

  useGSAP(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      gsap.set("[data-reveal], .project-card, .skill-card, .portrait-wrap", {
        clearProps: "all",
      });
      return;
    }

    const intro = gsap.timeline({
      defaults: { ease: "power4.out" },
      onComplete: () => ScrollTrigger.refresh(),
    });

    intro
      .fromTo(".hero-video", { scale: 1.14, opacity: 0 }, {
        scale: 1,
        opacity: 0.78,
        duration: 2.4,
        ease: "power2.out",
      }, 0)
      .fromTo(".hero-scrim", { opacity: 0 }, { opacity: 1, duration: 1.5 }, 0.15)
      .fromTo(".nav", { yPercent: -110, opacity: 0 }, {
        yPercent: 0,
        opacity: 1,
        duration: 1.05,
      }, 0.25)
      .fromTo(".hero .eyebrow", { x: -42, opacity: 0 }, {
        x: 0,
        opacity: 1,
        duration: 0.9,
      }, 0.48)
      .fromTo(".hero-title-line", {
        yPercent: 115,
        scaleX: 0.78,
        clipPath: "inset(0 100% 0 0)",
        transformOrigin: "left center",
      }, {
        yPercent: 0,
        scaleX: 1,
        clipPath: "inset(0 0% 0 0)",
        duration: 1.35,
        stagger: 0.14,
        ease: "expo.out",
      }, 0.62)
      .fromTo(".hero-meta", { y: 48, opacity: 0, scaleX: 0.92 }, {
        y: 0,
        opacity: 1,
        scaleX: 1,
        duration: 1,
      }, 1.18)
      .fromTo([".scroll-hint", ".floating-cta"], { y: 24, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
      }, 1.48);

    gsap.to(".hero-video", {
      scale: 1.09,
      yPercent: 5,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1.2,
      },
    });

    gsap.utils.toArray<HTMLElement>(".section-label").forEach((label) => {
      const line = label.querySelector("i");
      const copy = label.querySelectorAll("span, p");
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: label,
          start: "top 86%",
          once: true,
        },
      });

      timeline
        .fromTo(copy, { y: 34, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.08,
          ease: "power4.out",
        })
        .fromTo(line, { scaleX: 0, transformOrigin: "left center" }, {
          scaleX: 1,
          duration: 1.15,
          ease: "expo.out",
        }, 0.1);
    });

    gsap.utils.toArray<HTMLElement>("[data-display-reveal]").forEach((heading) => {
      gsap.fromTo(heading, {
        yPercent: 105,
        scaleX: 0.84,
        clipPath: "inset(0 0 100% 0)",
        transformOrigin: "left bottom",
      }, {
        yPercent: 0,
        scaleX: 1,
        clipPath: "inset(0 0 0% 0)",
        duration: 1.25,
        ease: "expo.out",
        scrollTrigger: {
          trigger: heading,
          start: "top 88%",
          once: true,
        },
      });
    });

    gsap.fromTo(".portrait-wrap", {
      clipPath: "inset(0 100% 0 0)",
      x: -54,
    }, {
      clipPath: "inset(0 0% 0 0)",
      x: 0,
      duration: 1.35,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".about-layout",
        start: "top 78%",
        once: true,
      },
    });

    gsap.fromTo(".portrait-wrap img", { scale: 1.15 }, {
      scale: 1,
      duration: 1.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-layout",
        start: "top 78%",
        once: true,
      },
    });

    gsap.to(".portrait-wrap img", {
      yPercent: -7,
      ease: "none",
      scrollTrigger: {
        trigger: ".about-layout",
        start: "top bottom",
        end: "bottom top",
        scrub: 1.1,
      },
    });

    gsap.fromTo([".about-copy .kicker", ".bio-grid", ".stats > div"], {
      y: 56,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".about-copy",
        start: "top 76%",
        once: true,
      },
    });

    gsap.fromTo(".work .section-heading > p", { y: 40, opacity: 0 }, {
      y: 0,
      opacity: 1,
      duration: 0.9,
      ease: "power4.out",
      stagger: 0.16,
      scrollTrigger: {
        trigger: ".work .section-heading",
        start: "top 82%",
        once: true,
      },
    });

    gsap.utils.toArray<HTMLElement>(".project-card").forEach((card, index) => {
      const image = card.querySelector(".project-image");
      const imageElement = card.querySelector(".project-image img");
      const info = card.querySelector(".project-info");
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
          once: true,
        },
      });

      timeline
        .fromTo(card, {
          y: 110 + (index % 2) * 32,
          x: index % 2 ? 24 : -24,
          opacity: 0,
        }, {
          y: 0,
          x: 0,
          opacity: 1,
          duration: 1.15,
          ease: "power4.out",
        })
        .fromTo(image, {
          clipPath: index % 2
            ? "inset(0 0 0 100%)"
            : "inset(0 100% 0 0)",
        }, {
          clipPath: "inset(0 0% 0 0%)",
          duration: 1.15,
          ease: "expo.out",
        }, 0.05)
        .fromTo(imageElement, { scale: 1.13 }, {
          scale: 1,
          duration: 1.55,
          ease: "power3.out",
        }, 0.08)
        .fromTo(info, { y: 28, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power3.out",
        }, 0.45);

      if (imageElement) {
        gsap.to(imageElement, {
          yPercent: -5,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }
    });

    gsap.fromTo(".skills .section-heading > p", { y: 40, opacity: 0 }, {
      y: 0,
      opacity: 1,
      duration: 0.9,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".skills .section-heading",
        start: "top 82%",
        once: true,
      },
    });

    gsap.fromTo(".skill-card", {
      y: 82,
      opacity: 0,
      scale: 0.94,
    }, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1.05,
      stagger: { each: 0.1, from: "start", grid: "auto" },
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".skill-grid",
        start: "top 83%",
        once: true,
      },
    });

    const contactTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-main",
        start: "top 80%",
        once: true,
      },
    });
    contactTimeline
      .fromTo(".contact .kicker", { x: -42, opacity: 0 }, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power4.out",
      })
      .fromTo(".contact h2", {
        yPercent: 100,
        scaleX: 0.84,
        clipPath: "inset(0 0 100% 0)",
        transformOrigin: "left bottom",
      }, {
        yPercent: 0,
        scaleX: 1,
        clipPath: "inset(0 0 0% 0)",
        duration: 1.25,
        ease: "expo.out",
      }, 0.08)
      .fromTo(".contact form > *", { y: 52, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.09,
        ease: "power4.out",
      }, 0.35)
      .fromTo(".contact-bottom > *", { y: 30, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
      }, 0.72);
  }, { scope: page });

  return <main ref={page}><Hero /><About /><Projects /><Skills /><Contact /></main>;
}
