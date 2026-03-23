"use client";

import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { VideoPlayer } from "./ui/video-player";

gsap.registerPlugin(ScrollTrigger);

// ── Default FortiSystem video (fallback if Sanity data not available) ──────────────
const DEFAULT_FORTI_SYSTEM_VIDEO =
  "https://res.cloudinary.com/dmr4fxsg4/video/upload/v1773223336/openart-video_a6d43620_1773222907444_fu9stv.mp4";

interface FortiSystemProps {
  fortiSystemVideoUrl?: string;
}

function FortiSystem({
  fortiSystemVideoUrl = DEFAULT_FORTI_SYSTEM_VIDEO,
}: FortiSystemProps) {
  const sectionRef = useRef(null);
  const subtitleRef = useRef(null);
  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const videoContainerRef = useRef(null);

  useGSAP(
    () => {
      // Animate label, title, and subtitle on scroll into view
      gsap.set([labelRef.current, titleRef.current, subtitleRef.current], {
        autoAlpha: 0,
        y: 20,
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "top 20%",
            scrub: 1,
          },
        })
        .to(
          labelRef.current,
          { autoAlpha: 1, y: 0, ease: "power3.out", duration: 0.4 },
          0,
        )
        .to(
          titleRef.current,
          { autoAlpha: 1, y: 0, ease: "power3.out", duration: 0.4 },
          0.15,
        )
        .to(
          subtitleRef.current,
          { autoAlpha: 1, y: 0, ease: "power3.out", duration: 0.5 },
          0.3,
        );

      // Animate video height reveal on scroll into view
      gsap.set(videoContainerRef.current, { height: 0, autoAlpha: 0 });
      gsap.to(videoContainerRef.current, {
        height: "auto",
        autoAlpha: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: videoContainerRef.current,
          start: "top 85%",
          end: "top 50%",
          scrub: 0.8,
        },
      });
    },
    { scope: sectionRef, dependencies: [] },
  );
  return (
    <section ref={sectionRef} className="w-full pt-16 ">
      <div className="container mx-auto max-w-6xl px-4 ">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center gap-6 mb-12">
          {/* Label */}
          <p
            ref={labelRef}
            className="text-xs lg:text-sm font-semibold text-neutral-600 tracking-widest"
          >
            THE FORTI SYSTEM
          </p>

          {/* Title */}
          <h2
            ref={titleRef}
            className="text-3xl sm:text-5xl  leading-tight font-bold text-center text-neutral-800"
          >
            A Different Model for <br /> Feeding at Scale
          </h2>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-lg sm:text-2xl text-center text-neutral-400 max-w-2xl leading-snug"
          >
            <span className="font-semibold text-neutral-900">
              Forti replaces{" "}
            </span>
            traditional kitchen infrastructure with a shelf-stable, standardised
            feeding system designed for operational reliability.
          </p>
        </div>
      </div>
      {/* Image Section with Play Button Overlay */}
      <div className="relative w-full h-auto">
        {/* Image Container */}
        <div
          ref={videoContainerRef}
          className="relative w-full overflow-hidden "
        >
          <div className="w-full h-96 sm:h-[500px] lg:h-[600px] bg-neutral-300 ">
            <VideoPlayer
              src={fortiSystemVideoUrl}
              className="w-full h-full object-cover"
              fallbackUrl={DEFAULT_FORTI_SYSTEM_VIDEO}
            />
          </div>
          {/* overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20" />
        </div>
      </div>
    </section>
  );
}

export default FortiSystem;
