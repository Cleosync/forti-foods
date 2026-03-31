"use client";

import { useRef } from "react";
import { Icon } from "@iconify/react";
import Button from "./ui/button";
import image1 from "@/public/images/image1.png";
import image2 from "@/public/images/image2.png";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    icon: "clarity:truck-line",
    iconSize: 32,
    replaces: "No more kitchen infrastructure",
    title: "Standardised Supply",
    body: "Shelf-stable, fortified meals produced to consistent specifications and delivered at scale ",
  },
  {
    icon: "hugeicons:building-03",
    iconSize: 30,
    replaces: "No more specialist staffing",
    title: "Infrastructure-Light Deployment",
    body: "Operating without traditional kitchens, cold chains, or specialized staff — anywhere, reliably.",
  },
  {
    icon: "hugeicons:task-daily-01",
    iconSize: 32,
    replaces: "No more logistical complexity",
    title: "Predictable Daily Feeding",
    body: "Consistent meals, consistent nutrition, consistent outcomes — across every site",
  },
];

// Stat pills shown in the hero
const STATS = [
  { value: "120+", label: "Countries" },
  { value: "40K", label: "Daily meals" },
  { value: "99.9%", label: "Uptime" },
];

interface TheSolutionProps {
  solutionImageUrl?: string;
}

function TheSolution({ solutionImageUrl }: TheSolutionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const plateImgRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const featureCards = useRef<(HTMLDivElement | null)[]>([]);
  const dividerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // ── 1. Hero text cascade ────────────────────────────────────
      gsap.set(
        [
          labelRef.current,
          headingRef.current,
          bodyRef.current,
          statsRef.current,
        ],
        {
          autoAlpha: 0,
          y: 36,
        },
      );
      gsap.set(imageRef.current, { autoAlpha: 0, y: 50, scale: 0.96 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            end: "top 18%",
            scrub: 1,
          },
        })
        .to(
          labelRef.current,
          { autoAlpha: 1, y: 0, ease: "power3.out", duration: 0.35 },
          0,
        )
        .to(
          headingRef.current,
          { autoAlpha: 1, y: 0, ease: "power3.out", duration: 0.45 },
          0.1,
        )
        .to(
          bodyRef.current,
          { autoAlpha: 1, y: 0, ease: "power3.out", duration: 0.4 },
          0.22,
        )
        .to(
          statsRef.current,
          { autoAlpha: 1, y: 0, ease: "power3.out", duration: 0.35 },
          0.32,
        )
        .to(
          imageRef.current,
          { autoAlpha: 1, y: 0, scale: 1, ease: "power2.out", duration: 0.5 },
          0.14,
        );

      // ── 2. Divider line draw ─────────────────────────────────────
      if (dividerRef.current) {
        gsap.fromTo(
          dividerRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: dividerRef.current,
              start: "top 85%",
              end: "top 55%",
              scrub: 1,
            },
          },
        );
      }

      // ── 3. Marquee parallax ──────────────────────────────────────
      if (marqueeRef.current) {
        gsap.fromTo(
          marqueeRef.current,
          { x: "0%" },
          {
            x: "-12%",
            ease: "none",
            scrollTrigger: {
              trigger: marqueeRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          },
        );
      }

      // ── 4. Plate image pop-in + parallax ────────────────────────
      if (plateImgRef.current) {
        gsap.fromTo(
          plateImgRef.current,
          { autoAlpha: 0, scale: 0.82, y: 30 },
          {
            autoAlpha: 1,
            scale: 1.04,
            y: 0,
            ease: "back.out(1.4)",
            duration: 0.65,
            scrollTrigger: {
              trigger: plateImgRef.current,
              start: "top 95%",
              toggleActions: "play none none reverse",
            },
          },
        );
        gsap.fromTo(
          plateImgRef.current,
          { y: 0 },
          {
            y: -55,
            ease: "none",
            scrollTrigger: {
              trigger: plateImgRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.6,
            },
          },
        );
      }

      // ── 5. Feature cards stagger ─────────────────────────────────
      if (featuresRef.current) {
        gsap.set(featureCards.current, { autoAlpha: 0, y: 32 });
        gsap.to(featureCards.current, {
          autoAlpha: 1,
          y: 0,
          ease: "power3.out",
          stagger: 0.12,
          duration: 0.6,
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          },
        });
      }
    },
    { scope: sectionRef, dependencies: [] },
  );

  return (
    <section ref={sectionRef} className="p-2 flex flex-col items-center">
      <div className="w-full bg-primary-dark py-5 sm:py-6 rounded-2xl overflow-hidden">
        {/* ── Hero grid ── */}
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center">
            {/* Left: text */}
            <div className="flex flex-col gap-3 sm:gap-4 text-white">
              <span
                ref={labelRef}
                className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                <span className="w-5 h-px bg-white/30" />
                The Solution
              </span>

              <h1
                ref={headingRef}
                className="text-3xl sm:text-5xl font-bold leading-tight"
              >
                A Feeding System{" "}
                <div className="flex items-center gap-2 mt-1 sm:mt-2 flex-wrap">
                  <div className="relative w-fit">
                    <span className="z-10 relative text-primary">
                      Designed for Scale.
                    </span>
                    <svg
                      className="absolute w-full bottom-0 left-0"
                      viewBox="0 0 482 76"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <g filter="url(#solution_filter)">
                        <rect
                          width="476"
                          height="65"
                          transform="translate(0 5.10001)"
                          fill="#BACE32"
                        />
                      </g>
                      <defs>
                        <filter
                          id="solution_filter"
                          x="-5.1"
                          y="0"
                          width="486.2"
                          height="75.2"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.109 0.109"
                            numOctaves={3}
                            seed={9936}
                          />
                          <feDisplacementMap
                            in="shape"
                            scale={10.2}
                            xChannelSelector="R"
                            yChannelSelector="G"
                            result="displacedImage"
                          />
                          <feMerge>
                            <feMergeNode in="displacedImage" />
                          </feMerge>
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
              </h1>

              {/* Body + CTA */}
              <div ref={bodyRef} className="flex flex-col gap-5">
                <p
                  className="text-sm sm:text-base lg:text-lg max-w-md leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  Forti replaces kitchens, cold storage, and complex logistics
                  with a predictable, low-risk feeding model built for
                  organisations that can't afford failure.
                </p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSciZNKyJc9lpI3B-uRYUO4XU_iZOQY2lgmNivJP8-c0Xc3hfg/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary">
                    Request a Demo
                    <Icon
                      icon="heroicons-solid:arrow-sm-right"
                      width="20"
                      height="20"
                    />
                  </Button>
                </a>
              </div>

              {/* Stats row */}
              <div
                ref={statsRef}
                className="flex items-center gap-6 sm:gap-8 pt-2"
              >
                {STATS.map((s, i) => (
                  <div key={s.label} className="flex flex-col gap-0.5">
                    <span className="text-xl sm:text-2xl font-bold text-white">
                      {s.value}
                    </span>
                    <span
                      className="text-[11px] tracking-widest uppercase"
                      style={{ color: "rgba(255,255,255,0.35)" }}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: image */}
            <div ref={imageRef} className="w-full relative">
              {/* Decorative ring behind image */}
              <div
                className="absolute -top-6 -right-6 w-48 h-48 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(186,206,50,0.12) 0%, transparent 70%)",
                }}
              />
              {solutionImageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={solutionImageUrl}
                  alt="Forti solution"
                  className="w-full h-auto rounded-2xl relative z-10"
                />
              ) : (
                <Image
                  src={image1}
                  alt="Forti solution"
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-2xl relative z-10"
                />
              )}
            </div>
          </div>
        </div>

        {/* ── Thin divider ── */}
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 my-5 sm:my-6">
          <div
            ref={dividerRef}
            className="w-full h-px"
            style={{ background: "rgba(255,255,255,0.08)" }}
          />
        </div>

        {/* ── Marquee + plate ── */}
        <div
          className="relative flex items-center justify-center"
          style={{ height: "clamp(240px, 40vw, 420px)" }}
        >
          <div className="w-full flex flex-col justify-center items-center overflow-hidden h-full">
            <div
              ref={marqueeRef}
              className="font-tanker text-[8rem] sm:text-[12rem] lg:text-[16rem] text-nowrap leading-none select-none"
              style={{ color: "#124447", willChange: "transform" }}
            >
              Forti Foods Forti Foods Forti Foods Forti Foods
            </div>
          </div>

          <div
            ref={plateImgRef}
            className="absolute z-10"
            style={{ willChange: "transform" }}
          >
            <Image
              src={image2}
              alt="Forti plate"
              width={600}
              height={600}
              className="w-auto h-[240px] sm:h-[360px] lg:h-[350px] rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* ── Feature cards ── */}
        <div
          ref={featuresRef}
          className="max-w-7xl mx-auto w-full px-6 lg:px-8 mt-5 sm:mt-6  "
        >
          <div
            className="grid grid-cols-1 lg:grid-cols-3 gap-px "
            style={{
              background: "rgba(255,255,255,0.07)",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                ref={(el) => {
                  featureCards.current[i] = el;
                }}
                className="flex flex-col gap-5 p-4 sm:p-5"
              >
                {/* Replaces tag */}
                <span
                  className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-widest uppercase"
                  style={{ color: "#BACE32" }}
                >
                  <span
                    className="w-3 h-px"
                    style={{ background: "#BACE32" }}
                  />
                  {f.replaces}
                </span>

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    color: "white",
                  }}
                >
                  <Icon icon={f.icon} width={f.iconSize} height={f.iconSize} />
                </div>

                {/* Title + body */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-base sm:text-lg font-semibold text-white">
                    {f.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {f.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TheSolution;
