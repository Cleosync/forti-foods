"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      document.body.style.cursor = "auto";
      return;
    }

    document.body.style.cursor = "none";

    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    // quickTo creates a single reusable tween per axis — no per-frame tween spam
    const moveCursorX = gsap.quickTo(cursor, "x", {
      duration: 0.5,
      ease: "power3.out",
    });
    const moveCursorY = gsap.quickTo(cursor, "y", {
      duration: 0.5,
      ease: "power3.out",
    });

    const handleMouseMove = (e: MouseEvent) => {
      // Dot: instant via gsap.set (zero-cost, no tween created)
      gsap.set(cursorDot, { x: e.clientX - 4, y: e.clientY - 4 });

      // Ring: smooth trail via quickTo (updates existing tween, no new one)
      moveCursorX(e.clientX - 16);
      moveCursorY(e.clientY - 16);
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.classList.contains("cursor-hover")
      ) {
        gsap.to(cursor, { scale: 1.5, duration: 0.3, overwrite: "auto" });
        gsap.to(cursorDot, { scale: 0.5, duration: 0.3, overwrite: "auto" });
      }
    };

    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.classList.contains("cursor-hover")
      ) {
        gsap.to(cursor, { scale: 1, duration: 0.3, overwrite: "auto" });
        gsap.to(cursorDot, { scale: 1, duration: 0.3, overwrite: "auto" });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const interactiveElements = document.querySelectorAll("a, button");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter as EventListener);
      el.addEventListener("mouseleave", handleMouseLeave as EventListener);
    });

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter as EventListener);
        el.removeEventListener("mouseleave", handleMouseLeave as EventListener);
      });
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Outer ring */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 w-8 h-8 border-2 border-brand-green rounded-full z-[9999]"
        style={{ willChange: "transform" }}
      />

      {/* Inner dot */}
      <div
        ref={cursorDotRef}
        className="pointer-events-none fixed top-0 left-0 w-2 h-2 bg-brand-green rounded-full z-[10000]"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
