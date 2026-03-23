"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_PROBLEM_DATA = {
  label: "The Problem",
  heading: "Most Large Scale Feeding Systems Are Built on Brittleness",
  description:
    "Traditional food systems fail in resource-constrained environments. Here's why:",
  cards: [
    {
      id: 1,
      number: "01",
      title: "Infrastructure Dependency",
      body: "Power cuts, gas leaks, and water shortages stop production cold. Traditional kitchens are only as reliable as the utilities they depend on.",
      image: {
        asset: {
          url: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=900&auto=format&fit=crop",
        },
      },
      tag: "Utilities & Power",
    },
    {
      id: 2,
      number: "02",
      title: "Labor Volatility",
      body: "Relying on skilled kitchen staff in remote areas is a constant gamble. High turnover and absenteeism disrupt every meal cycle.",
      image: {
        asset: {
          url: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=900&auto=format&fit=crop",
        },
      },
      tag: "Workforce Risk",
    },
    {
      id: 3,
      number: "03",
      title: "Logistical Complexity",
      body: "Managing fresh supply chains and cold storage is a high-cost distraction. Every link in the chain is a new point of failure.",
      image: {
        asset: {
          url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=900&auto=format&fit=crop",
        },
      },
      tag: "Supply Chain",
    },
  ],
};

interface ProblemSectionProps {
  data?: typeof DEFAULT_PROBLEM_DATA;
}

function TheProblem({ data }: ProblemSectionProps) {
  const problemData = { ...DEFAULT_PROBLEM_DATA, ...data };
  const sectionRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      // Header
      gsap.set([labelRef.current, headingRef.current, paraRef.current], {
        autoAlpha: 0,
        y: 28,
      });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            end: "top 25%",
            scrub: 1,
          },
        })
        .to(
          labelRef.current,
          { autoAlpha: 1, y: 0, ease: "power3.out", duration: 0.4 },
          0,
        )
        .to(
          headingRef.current,
          { autoAlpha: 1, y: 0, ease: "power3.out", duration: 0.4 },
          0.15,
        )
        .to(
          paraRef.current,
          { autoAlpha: 1, y: 0, ease: "power3.out", duration: 0.35 },
          0.28,
        );

      // Each row: text fades up, image scales in
      itemRefs.current.forEach((item, i) => {
        if (!item) return;

        gsap.fromTo(
          item,
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 86%",
              end: "top 56%",
              scrub: 0.8,
            },
          },
        );

        const img = imgRefs.current[i];
        if (img) {
          gsap.fromTo(
            img,
            { autoAlpha: 0, scale: 0.92 },
            {
              autoAlpha: 1,
              scale: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 84%",
                end: "top 50%",
                scrub: 0.9,
              },
            },
          );
        }
      });
    },
    { scope: sectionRef, dependencies: [] },
  );

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 sm:py-28"
      style={{ background: "#f9f8f6" }}
    >
      {/* ── Header ── */}
      <div className="px-5 sm:px-8 max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center gap-3 sm:gap-4 mb-16 sm:mb-20">
          <span
            ref={labelRef}
            className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase"
            style={{ color: "rgba(18,59,61,0.45)" }}
          >
            <span className="w-5 h-px bg-current" />
            {problemData.label}
            <span className="w-5 h-px bg-current" />
          </span>

          <h3
            ref={headingRef}
            className="text-balance text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug max-w-2xl"
            style={{ color: "#123B3D" }}
          >
            {problemData.heading}{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Fragile Infrastructure</span>
              <svg
                className="absolute w-full bottom-0 left-0 z-0"
                viewBox="0 0 482 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <g filter="url(#filter_prob_head)">
                  <rect
                    width="476"
                    height="65"
                    transform="translate(0 5.10001)"
                    fill="#F0821D"
                  />
                </g>
                <defs>
                  <filter
                    id="filter_prob_head"
                    x="-5.1"
                    y="0"
                    width="486.2"
                    height="75.2"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
            </span>
          </h3>

          <p
            ref={paraRef}
            className="text-sm sm:text-base max-w-md mt-2 "
            style={{ color: "rgba(18,59,61,0.55)" }}
          >
            {problemData.description}
          </p>
        </div>
      </div>

      {/* ── Problem list ── */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 flex flex-col">
        {problemData.cards.map((card, i) => (
          <div key={card.id || i}>
            {/* Divider */}
            <div
              className="w-full h-px"
              style={{ background: "rgba(18,59,61,0.1)" }}
            />

            {/* Row */}
            <div
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-10 py-10 sm:py-12 items-center"
            >
              {/* Number */}
              <div className="sm:col-span-2 flex sm:flex-col items-center sm:items-start gap-3 sm:gap-0">
                <span
                  className="font-mono font-black leading-none"
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    color: "#BACE32",
                    lineHeight: 1,
                  }}
                >
                  {card.number}
                </span>
                <span
                  className="text-[10px] font-semibold tracking-widest uppercase sm:mt-2"
                  style={{ color: "rgba(18,59,61,0.35)" }}
                >
                  {card.tag}
                </span>
              </div>

              {/* Text */}
              <div className="sm:col-span-6 flex flex-col gap-3">
                <h4
                  className="font-bold leading-tight"
                  style={{
                    fontSize: "clamp(1.2rem, 2.8vw, 1.6rem)",
                    color: "#123B3D",
                  }}
                >
                  {card.title}
                </h4>
                <p
                  className="text-sm sm:text-base leading-relaxed"
                  style={{ color: "rgba(18,59,61,0.55)", maxWidth: "48ch" }}
                >
                  {card.body}
                </p>
              </div>

              {/* Image */}
              <div
                ref={(el) => {
                  imgRefs.current[i] = el;
                }}
                className="sm:col-span-4 rounded-xl overflow-hidden"
                style={{ height: "180px" }}
              >
                {card.image ? (
                  <img
                    src={card.image.asset.url}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">
                      Image placeholder
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Final divider */}
        <div
          className="w-full h-px"
          style={{ background: "rgba(18,59,61,0.1)" }}
        />
      </div>
    </section>
  );
}

export default TheProblem;
