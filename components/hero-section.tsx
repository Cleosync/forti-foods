"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Button from "./ui/button";
import { Icon } from "@iconify/react";
import { VideoPlayer } from "./ui/video-player";

gsap.registerPlugin(ScrollTrigger);

// ── Default hero video (fallback if Sanity data not available) ──────────────
const DEFAULT_HERO_VIDEO =
  "https://res.cloudinary.com/dmr4fxsg4/video/upload/f_auto,q_auto/openart-video_bf876030_1773220365957_eo69rr.mp4";

// ── Stat items shown in the side card ──────────────────────────────────
const STATS = [
  { value: "12 Months", label: "Shelf life (No refrigeration)" },
  { value: "95%+", label: "User acceptance rate" },
  { value: "0%", label: "Cooking Infrastructure" },
];

interface HeroSectionProps {
  heroVideoUrl?: string;
}

function HeroSection({ heroVideoUrl = DEFAULT_HERO_VIDEO }: HeroSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const svgUnderlineRef = useRef<SVGSVGElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const marqueeTextRef = useRef<HTMLHeadingElement>(null);

  // Card content refs
  const cardTagRef = useRef<HTMLSpanElement>(null);
  const cardHeadRef = useRef<HTMLParagraphElement>(null);
  const cardDivRef = useRef<HTMLDivElement>(null);
  const cardStatsRef = useRef<HTMLDivElement>(null);
  const cardCtaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      // ── 1. Left text cascade ─────────────────────────────────────────
      gsap.set(
        [
          labelRef.current,
          headlineRef.current,
          bodyRef.current,
          ctaRef.current,
        ],
        { autoAlpha: 0, y: 40 },
      );
      gsap.set(svgUnderlineRef.current, { autoAlpha: 0, scaleX: 0.8 });
      gsap.set(gridRef.current, { autoAlpha: 0 });

      tl.to(labelRef.current, { autoAlpha: 1, y: 0, duration: 0.7 }, 0.1)
        .to(headlineRef.current, { autoAlpha: 1, y: 0, duration: 0.9 }, 0.25)
        .to(
          svgUnderlineRef.current,
          { autoAlpha: 1, scaleX: 1, duration: 0.8 },
          0.5,
        )
        .to(bodyRef.current, { autoAlpha: 1, y: 0, duration: 0.7 }, 0.55)
        .to(ctaRef.current, { autoAlpha: 1, y: 0, duration: 0.6 }, 0.75);

      // ── Floating animation for SVG underline ───────────────────────
      gsap.fromTo(
        svgUnderlineRef.current,
        { y: 0 },
        { y: -8, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut" },
      );

      // ── 2. Grid fade in ───────────────────────────────────────────────
      tl.to(gridRef.current, { autoAlpha: 1, duration: 0.4 }, 0.35);

      // ── 3. Responsive animations based on screen size ──────────────────
      gsap.matchMedia().add("(min-width: 1024px)", () => {
        // Desktop: horizontal layout (video expands right, card appears from right)
        gsap.set(videoWrapRef.current, {
          width: "100%",
          height: "100%",
          borderRadius: "12px",
        });
        tl.to(
          videoWrapRef.current,
          {
            width: "66.666%",
            duration: 1.1,
            ease: "expo.inOut",
            borderRadius: "16px",
          },
          0.5,
        );

        gsap.set(cardRef.current, {
          width: "0%",
          height: "100%",
          autoAlpha: 0,
        });
        tl.to(
          cardRef.current,
          { width: "33.333%", autoAlpha: 1, duration: 1.0, ease: "expo.inOut" },
          0.65,
        );
      });

      gsap.matchMedia().add("(max-width: 1023px)", () => {
        // Mobile: vertical layout (video stays visible, card expands from bottom)
        gsap.set(videoWrapRef.current, {
          width: "100%",
          height: "60%",
          borderRadius: "12px",
        });
        gsap.set(cardRef.current, {
          width: "100%",
          height: "0%",
          autoAlpha: 0,
        });

        // Card expands from 0% → auto height
        tl.to(
          cardRef.current,
          { height: "auto", autoAlpha: 1, duration: 1.0, ease: "expo.inOut" },
          0.5,
        );
      });

      // ── 4. Card content cascade (starts after card finishes expanding) ─
      const cardContentEls = [
        cardTagRef.current,
        cardHeadRef.current,
        cardDivRef.current,
        cardStatsRef.current,
        cardCtaRef.current,
      ];
      gsap.set(cardContentEls, { autoAlpha: 0, y: 16 });

      // Stagger each element 0.1s apart, beginning at t=1.4s
      cardContentEls.forEach((el, i) => {
        tl.to(
          el,
          { autoAlpha: 1, y: 0, duration: 0.55, ease: "power3.out" },
          1.4 + i * 0.1,
        );
      });

      // ── 5. Marquee parallax ───────────────────────────────────────────
      if (marqueeTextRef.current) {
        gsap.to(marqueeTextRef.current, {
          x: "-18%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }
    },
    { scope: sectionRef, dependencies: [] },
  );

  return (
    <section ref={sectionRef} className="w-full overflow-hidden p-2">
      <div className="bg-light-cream/70 overflow-hidden rounded-2xl  sm:px-6 lg:px-8 relative flex flex-col items-center justify-center w-full h-full pt-20 pb-4 sm:pt-16 sm:pb-4 lg:pt-20 lg:pb-6">
        <div className="container relative  z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center w-full">
            {/* ── Left: text ── */}
            <div className="flex flex-col items-center lg:items-start text-primary text-center lg:text-left w-full gap-3 sm:gap-4 lg:gap-5 lg:col-span-5  ">
              <span
                ref={labelRef}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary/50"
              >
                <span className="w-4 h-px bg-primary/40 inline-block " />
                Enterprise Food Systems
                <span className="w-4 h-px bg-primary/40 inline-block sm:hidden " />
              </span>

              <h1
                ref={headlineRef}
                className="text-4xl sm:text-5xl lg:text-6xl leading-tight"
              >
                Feeding at Scale. <br />
                <div className="relative inline-flex flex-col justify-center   w-fit">
                  <span className="z-10 relative">Without Kitchens</span>
                  <svg
                    ref={svgUnderlineRef}
                    className="absolute w-full bottom-0 left-0"
                    viewBox="0 0 482 76"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <g filter="url(#filter0_g_294_2675)">
                      <rect
                        width="476"
                        height="65"
                        transform="translate(0 5.10001)"
                        fill="#BACE32"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_g_294_2675"
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
                </div>
              </h1>

              <div ref={bodyRef} className="w-full">
                <p className="text-balance text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0 font-medium text-primary/80">
                  Forti enables organisations to feed large teams reliably at
                  scale across remote, mobile, and infrastructure-limited
                  environments — without kitchens or operational risk.
                </p>
              </div>

              <div
                ref={ctaRef}
                className="flex flex-col mt-2 lg:mt-4 sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start w-full sm:w-auto"
              >
                <Link href="#forti-contact">
                  <Button className="w-full! lg:w-fit!">
                    Request a Demo
                    <Icon
                      icon="heroicons-solid:arrow-sm-right"
                      width="20"
                      height="20"
                    />
                  </Button>
                </Link>
                <Link href="#use-cases">
                  <Button className="w-full! lg:w-fit! " variant="secondary">
                    Explore Use Cases
                  </Button>
                </Link>
              </div>
            </div>

            {/* ── Right: video + stat card ── */}
            <div className="w-full h-full  lg:col-span-7 relative">
              <div
                ref={gridRef}
                className="relative flex flex-col lg:flex-row gap-2 w-full mt-2 lg:mt-0 overflow-hidden  rounded-2xl   rounded-tl-full"
                style={{ height: "clamp(400px, 50vh, 520px)" }}
              >
                {/* Video panel */}

                <div
                  ref={videoWrapRef}
                  className="relative flex-shrink-0 overflow-hidden rounded-2xl  bg-black"
                  style={{ height: "100%" }}
                >
                  <VideoPlayer
                    src={heroVideoUrl}
                    className="w-full h-full object-cover opacity-60"
                    fallbackUrl={DEFAULT_HERO_VIDEO}
                  />
                </div>

                {/* Stat card panel */}
                <div
                  ref={cardRef}
                  className="flex-shrink-0 overflow-hidden rounded-2xl bg-brand-green/60 backdrop-blur-sm"
                  style={{
                    height: "100%",
                  }}
                >
                  {/* Inner scroll — allows content to sit nicely regardless of height */}
                  <div className="flex flex-row lg:flex-col justify-between h-full p-4 lg:p-5 gap-3 lg:gap-0">
                    {/* Top: tag + headline */}
                    <div className="flex flex-col gap-2 flex-1 lg:flex-none">
                      <span
                        ref={cardTagRef}
                        className="inline-flex items-center gap-1.5 w-fit"
                      >
                        {/* Live indicator dot */}
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-primary/80">
                          Live Operations
                        </span>
                      </span>

                      <p
                        ref={cardHeadRef}
                        className="text-primary font-semibold text-sm sm:text-base lg:text-lg leading-snug"
                      >
                        Scale-ready
                        <br />
                        infrastructure
                      </p>
                    </div>

                    {/* Divider */}
                    <div
                      ref={cardDivRef}
                      className="w-px lg:w-full h-full lg:h-px bg-primary/20 mx-3 lg:mx-0 lg:my-1"
                    />

                    {/* Stats */}
                    <div
                      ref={cardStatsRef}
                      className="flex flex-col gap-2.5 sm:gap-3 flex-1 lg:flex-none"
                    >
                      {STATS.map((stat) => (
                        <div key={stat.label} className="flex flex-col gap-0.5">
                          <span className="text-primary font-bold text-lg sm:text-xl lg:text-2xl leading-none">
                            {stat.value}
                          </span>
                          <span className="text-primary/60 text-[10px] sm:text-xs leading-tight text-nowrap">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom CTA link */}
                    <div ref={cardCtaRef} className="mt-1">
                      <a
                        href="#use-cases"
                        className="group inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold tracking-wide uppercase text-primary/70 hover:text-primary transition-colors duration-200"
                      >
                        View case studies
                        <Icon
                          icon="heroicons-solid:arrow-sm-right"
                          width="14"
                          height="14"
                          className="group-hover:translate-x-0.5 transition-transform duration-200"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Parallax marquee */}
        <h6
          ref={marqueeTextRef}
          className="absolute -bottom-10 sm:-bottom-20 lg:-bottom-24 font-tanker text-[6rem] sm:text-[10rem] lg:text-[14rem] text-primary opacity-5 text-nowrap select-none pointer-events-none"
          style={{ willChange: "transform" }}
        >
          INNOVATION WITH HEART
        </h6>
      </div>
    </section>
  );
}

export default HeroSection;
