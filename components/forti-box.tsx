"use client";

import { useRef } from "react";
import image9 from "@/public/images/image9.png";
import image10 from "@/public/images/image10.jpeg";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: 1,
    title: "The Main Event: Forti Meals",
    description:
      "A selection of our signature, shelf-stable local dishes. Authentic flavor and 12 months of safety, ready to eat whenever they are needed.",
    icon: (
      <svg
        className="w-full h-full"
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.6667 5.5H29.3333C30.3058 5.5 31.2384 5.88631 31.9261 6.57394C32.6137 7.26158 33 8.19421 33 9.16667V12.5033C33.0001 13.9264 33.3315 15.3299 33.968 16.6027L35.6987 20.064C36.3352 21.3368 36.6666 22.7403 36.6667 24.1633V34.8333C36.6667 35.8058 36.2804 36.7384 35.5927 37.4261C34.9051 38.1137 33.9725 38.5 33 38.5H11C10.0275 38.5 9.09491 38.1137 8.40728 37.4261C7.71964 36.7384 7.33334 35.8058 7.33334 34.8333V24.1633C7.33343 22.7403 7.66485 21.3368 8.30134 20.064L11 14.6667V9.16667C11 8.19421 11.3863 7.26158 12.0739 6.57394C12.7616 5.88631 13.6942 5.5 14.6667 5.5Z"
          stroke="#124447"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 27.5002C22 28.4726 22.3863 29.4053 23.0739 30.0929C23.7616 30.7805 24.6942 31.1668 25.6667 31.1668C26.6391 31.1668 27.5718 30.7805 28.2594 30.0929C28.947 29.4053 29.3333 28.4726 29.3333 27.5002C29.3333 26.5277 28.947 25.5951 28.2594 24.9074C27.5718 24.2198 26.6391 23.8335 25.6667 23.8335C24.6942 23.8335 23.7616 24.2198 23.0739 24.9074C22.3863 25.5951 22 26.5277 22 27.5002Z"
          fill="#D5E46C"
        />
        <path
          d="M11 38.5002C11.9725 38.5002 12.9051 38.1139 13.5927 37.4262C14.2804 36.7386 14.6667 35.806 14.6667 34.8335V24.1635C14.6666 22.7404 14.3352 21.3369 13.6987 20.0642L11 14.6668M20.1667 12.8335H23.8333M22 27.5002C22 28.4726 22.3863 29.4053 23.0739 30.0929C23.7616 30.7805 24.6942 31.1668 25.6667 31.1668C26.6391 31.1668 27.5718 30.7805 28.2594 30.0929C28.947 29.4053 29.3333 28.4726 29.3333 27.5002C29.3333 26.5277 28.947 25.5951 28.2594 24.9074C27.5718 24.2198 26.6391 23.8335 25.6667 23.8335C24.6942 23.8335 23.7616 24.2198 23.0739 24.9074C22.3863 25.5951 22 26.5277 22 27.5002Z"
          stroke="#124447"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Essential Hygiene",
    description:
      "Carefully selected hygiene essentials to maintain cleanliness and wellbeing in any field condition or remote environment.",
    icon: (
      <svg
        className="w-full h-full"
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_303_13405)">
          <path
            d="M6.875 16.9199H17.8732V14.1699C17.8732 13.4405 17.5834 12.741 17.0677 12.2253C16.552 11.7096 15.8525 11.4199 15.1232 11.4199H12.3732H9.62317C8.89382 11.4199 8.19435 11.7096 7.67862 12.2253C7.1629 12.741 6.87317 13.4405 6.87317 14.1699L6.875 16.9199Z"
            fill="#D5E46C"
          />
          <path
            d="M28.6147 2.33203H31.0512M29.8338 2.33203V7.75137M38.016 5.2177L39.7393 6.94103M38.8777 6.07937L35.002 9.95503M42.625 13.9059V16.3424M42.625 15.125H37.1433M39.7393 23.309L38.016 25.0305M38.8777 24.1689L35.002 20.2932M31.0512 27.9162H28.6147M29.8338 27.9162V22.4345M17.8732 16.9199H6.875M17.8732 16.9199C19.3319 16.9199 20.7308 17.4993 21.7623 18.5308C22.7937 19.5622 23.3732 20.9612 23.3732 22.4199V36.168C23.3732 37.6267 22.7937 39.0257 21.7623 40.0571C20.7308 41.0886 19.3319 41.668 17.8732 41.668H6.875C5.41631 41.668 4.01736 41.0886 2.98591 40.0571C1.95446 39.0257 1.375 37.6267 1.375 36.168V22.4199C1.375 20.9612 1.95446 19.5622 2.98591 18.5308C4.01736 17.4993 5.41631 16.9199 6.875 16.9199M17.8732 16.9199V14.1699C17.8732 13.4405 17.5834 12.741 17.0677 12.2253C16.552 11.7096 15.8525 11.4199 15.1232 11.4199M6.875 16.9199L6.87317 14.1699C6.87317 13.4405 7.1629 12.741 7.67862 12.2253C8.19435 11.7096 8.89382 11.4199 9.62317 11.4199M1.375 8.66987L2.5135 7.53136C3.54471 6.49984 4.94343 5.92018 6.402 5.91986H19.25M9.62317 11.4199H15.1232M9.62317 11.4199H12.3732M15.1232 11.4199H12.3732M12.3732 11.4199V5.91986M12.3732 24.2495V35.2495M6.875 29.7495H17.8732M24.9425 9.5847C25.8324 8.80005 26.8995 8.24304 28.052 7.96147C29.2046 7.6799 30.4082 7.68217 31.5597 7.9681C32.7112 8.25403 33.7761 8.81508 34.663 9.60309C35.55 10.3911 36.2325 11.3826 36.652 12.4924C37.0737 13.6015 37.2167 14.7969 37.0737 15.9757C36.8561 17.7532 35.9956 19.3897 34.6545 20.5765C33.3133 21.7633 31.5843 22.4183 29.7935 22.418"
            stroke="#124447"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_303_13405">
            <rect width="44" height="44" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Daily Toiletries",
    description:
      "Personal care items to preserve dignity and routine — soap, toothbrush, and more — wherever the mission takes you.",
    icon: (
      <svg
        className="w-full h-full"
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_303_13411)">
          <path
            d="M42.3188 14.5127C42.3188 16.2548 41.6268 17.9256 40.3949 19.1575C39.163 20.3894 37.4922 21.0815 35.75 21.0815C34.0078 21.0815 32.337 20.3894 31.1051 19.1575C29.8732 17.9256 29.1812 16.2548 29.1812 14.5127C29.1812 9.5865 35.75 1.375 35.75 1.375C35.75 1.375 42.3188 9.5865 42.3188 14.5127Z"
            fill="#D5E46C"
          />
          <path
            d="M32.6682 26.1268C34.243 29.8577 36.3458 32.4812 32.5142 37.1268H23.6812M42.3188 14.5127C42.3188 16.2548 41.6268 17.9256 40.3949 19.1575C39.163 20.3894 37.4922 21.0815 35.75 21.0815C34.0078 21.0815 32.337 20.3894 31.1051 19.1575C29.8732 17.9256 29.1812 16.2548 29.1812 14.5127C29.1812 9.5865 35.75 1.375 35.75 1.375C35.75 1.375 42.3188 9.5865 42.3188 14.5127ZM12.6812 18.425C6.6055 18.425 1.68117 16.456 1.68117 14.025V38.225C1.68117 40.656 6.6055 42.625 12.6812 42.625C18.7568 42.625 23.6812 40.656 23.6812 38.225V14.025C23.6812 16.456 18.755 18.425 12.6812 18.425Z"
            stroke="#124447"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.6812 9.625C18.7568 9.625 23.6812 11.5958 23.6812 14.025C23.6812 16.4542 18.7568 18.425 12.6812 18.425C6.6055 18.425 1.68117 16.4542 1.68117 14.025C1.68117 11.5958 6.6055 9.625 12.6812 9.625ZM12.6812 9.625H24.5428M11.5812 14.025H13.7812"
            stroke="#124447"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_303_13411">
            <rect width="44" height="44" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Energy & Snacks",
    description:
      "High-calorie snacks and energy supplements to keep teams fuelled between main meals, especially in high-demand environments.",
    icon: (
      <svg
        className="w-full h-full"
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.58831 33.6487L5.57698 19.6475C5.54031 19.5118 5.52014 19.4458 5.51098 19.3908C5.49219 19.2681 5.49854 19.1428 5.52964 19.0226C5.56074 18.9024 5.61594 18.7897 5.69189 18.6915C5.76784 18.5933 5.86295 18.5115 5.97147 18.4511C6.07998 18.3908 6.19962 18.3531 6.32314 18.3403C6.37814 18.333 6.44964 18.333 6.59081 18.333H8.87331C12.2246 18.333 15.1708 20.5147 16.0911 23.6808C16.2745 24.3133 16.8648 24.7497 17.534 24.7497H26.4696C26.7931 24.7505 27.1082 24.6469 27.3682 24.4543C27.6281 24.2618 27.819 23.9905 27.9125 23.6808C28.831 20.5147 31.7771 18.333 35.1285 18.333H37.4091C37.5503 18.333 37.6218 18.333 37.6768 18.3403C37.8005 18.353 37.9203 18.3908 38.029 18.4513C38.1376 18.5118 38.2328 18.5937 38.3088 18.6921C38.3848 18.7906 38.4399 18.9035 38.4709 19.0239C38.5019 19.1443 38.508 19.2698 38.489 19.3927C38.4731 19.4791 38.4511 19.5643 38.423 19.6475L34.4135 33.6487L34.4109 33.6577C33.4904 36.8673 33.03 38.473 31.7826 39.4035C30.5323 40.333 28.831 40.333 25.4301 40.333H18.5698C15.169 40.333 13.4676 40.333 12.2173 39.4035C10.9696 38.4728 10.5093 36.8665 9.58831 33.6533L9.58648 33.6468L9.58831 33.6487Z"
          fill="#D5E46C"
        />
        <path
          d="M34.4135 33.6487L38.423 19.6475C38.4511 19.5643 38.4731 19.4791 38.489 19.3927C38.508 19.2698 38.5019 19.1443 38.4709 19.0239C38.4399 18.9035 38.3848 18.7906 38.3088 18.6921C38.2328 18.5937 38.1376 18.5118 38.029 18.4513C37.9203 18.3908 37.8005 18.353 37.6768 18.3403C37.6218 18.333 37.5503 18.333 37.4091 18.333H35.1285C31.7771 18.333 28.831 20.5147 27.9125 23.6808C27.819 23.9905 27.6281 24.2618 27.3682 24.4543C27.1082 24.6469 26.7931 24.7505 26.4696 24.7497H17.534C16.8648 24.7497 16.2745 24.3133 16.0911 23.6808C15.1708 20.5147 12.2246 18.333 8.87331 18.333H6.59081C6.44964 18.333 6.37814 18.333 6.32314 18.3403C6.19962 18.3531 6.07998 18.3908 5.97147 18.4511C5.86295 18.5115 5.76784 18.5933 5.69189 18.6915C5.61594 18.7897 5.56074 18.9024 5.52964 19.0226C5.49854 19.1428 5.49219 19.2681 5.51098 19.3908C5.52014 19.4458 5.54031 19.5118 5.57698 19.6475L9.58831 33.6487L9.58648 33.6468"
          stroke="#124447"
          strokeWidth="2.1875"
          strokeLinecap="round"
        />
        <path
          d="M22.0138 31.1665H21.9963"
          stroke="#124447"
          strokeWidth="2.91667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.6666 23.8332V6.89317C25.6666 5.3715 25.6666 4.61067 25.1753 4.1395C24.684 3.6665 23.8938 3.6665 22.3153 3.6665H21.6865C20.1061 3.6665 19.316 3.6665 18.8246 4.1395C18.3333 4.61067 18.3333 5.3715 18.3333 6.89317V23.8332"
          stroke="#124447"
          strokeWidth="2.1875"
        />
        <path
          d="M18.3333 14.9121L15.0333 8.19475C14.245 6.58508 13.849 5.78025 13.123 5.55475C12.397 5.33475 11.6416 5.78392 10.131 6.68775L9.7258 6.92975C8.28663 7.78958 7.56796 8.21858 7.37913 8.94825C7.1903 9.67792 7.60463 10.4241 8.43513 11.9128L12.0175 18.3331M25.6666 18.0306L29.2233 11.5901C30.0263 10.1326 30.4296 9.40292 31.1116 9.21225C31.7955 9.01975 32.4921 9.44142 33.8873 10.2829L34.2485 10.5029C35.7261 11.3939 36.465 11.8394 36.6318 12.5929C36.8023 13.3446 36.3293 14.0871 35.3851 15.5721L33.6306 18.3331"
          stroke="#124447"
          strokeWidth="2.1875"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

function Fortibox() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const img5Ref = useRef<HTMLDivElement>(null);
  const insideLblRef = useRef<HTMLDivElement>(null);
  const featureItems = useRef<(HTMLDivElement | null)[]>([]);
  const img6Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // ── 1. Hero text cascade
      gsap.set([labelRef.current, headingRef.current, bodyRef.current], {
        autoAlpha: 0,
        y: 32,
      });
      gsap.set(img5Ref.current, { autoAlpha: 0, x: 40, scale: 0.97 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 88%",
            end: "top 45%",
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
          { autoAlpha: 1, y: 0, ease: "power3.out", duration: 0.4 },
          0.14,
        )
        .to(
          bodyRef.current,
          { autoAlpha: 1, y: 0, ease: "power3.out", duration: 0.4 },
          0.28,
        )
        .to(
          img5Ref.current,
          { autoAlpha: 1, x: 0, scale: 1, ease: "power2.out", duration: 0.5 },
          0.1,
        );

      // ── 2. "What's inside" label
      gsap.fromTo(
        insideLblRef.current,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: insideLblRef.current,
            start: "top 88%",
            end: "top 58%",
            scrub: 0.8,
          },
        },
      );

      // ── 3. Feature cards
      gsap.set(featureItems.current, { autoAlpha: 0, y: 28, scale: 0.95 });
      gsap.to(featureItems.current, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        ease: "back.out(1.2)",
        stagger: 0.08,
        scrollTrigger: {
          trigger: featureItems.current[0],
          start: "top 88%",
          end: "top 50%",
          scrub: 0.9,
        },
      });

      // ── 4. Side image
      gsap.fromTo(
        img6Ref.current,
        { y: 50 },
        {
          autoAlpha: 1,
          y: -20,
          ease: "none",
          scrollTrigger: {
            trigger: img6Ref.current,
            start: "top 88%",
            end: "bottom 15%",
            scrub: 1.5,
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="text-brand-text py-14 sm:py-20 w-full overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ══════════════════════════════════════
            HERO — two-column
        ══════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-14 sm:mb-20">
          {/* Left: text */}
          <div className="flex flex-col gap-5">
            <span
              ref={labelRef}
              className="inline-flex items-center gap-2 font-semibold text-xs sm:text-sm tracking-widest uppercase"
              style={{ color: "rgba(18,59,61,0.5)" }}
            >
              <span className="w-4 h-px bg-current inline-block" />
              My Fortibox
            </span>

            <h2
              ref={headingRef}
              className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight"
              style={{ color: "#123B3D" }}
            >
              A complete kit for <br />
              <span
                style={{
                  WebkitTextStroke: "1.5px #123B3D",
                  color: "transparent",
                  display: "inline",
                }}
              >
                dignity
              </span>{" "}
              &amp; resilience.
            </h2>

            <p
              ref={bodyRef}
              className="text-sm sm:text-base leading-relaxed max-w-lg"
              style={{ color: "rgba(18,59,61,0.55)" }}
            >
              The Forti Box is designed for the moments when life gets
              difficult. It&apos;s a self-contained survival kit that ensures a
              person or family can maintain their health, hygiene, and energy —
              even when far from home or disconnected from the grid.
            </p>

            {/* Inline stat chips */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                { v: "4", l: "Kit categories" },
                { v: "12mo", l: "Shelf life" },
                { v: "100%", l: "Field-ready" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                  style={{
                    background: "rgba(186,206,50,0.12)",
                    border: "1px solid rgba(186,206,50,0.3)",
                  }}
                >
                  <span
                    className="text-sm font-black"
                    style={{ color: "#123B3D" }}
                  >
                    {s.v}
                  </span>
                  <span
                    className="text-[11px] font-medium"
                    style={{ color: "rgba(18,59,61,0.55)" }}
                  >
                    {s.l}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image with floating badge */}
          <div
            ref={img5Ref}
            className="relative w-full rounded-2xl overflow-hidden "
            style={{ willChange: "transform", aspectRatio: "4/3" }}
          >
            <Image src={image9} alt="Fortibox" fill className="object-cover" />
          </div>
        </div>

        {/* ══════════════════════════════════════
            WHAT'S INSIDE
        ══════════════════════════════════════ */}
        <div ref={insideLblRef} className="flex items-center gap-4 mb-8">
          <span
            className="text-[11px] font-bold tracking-[0.22em] uppercase"
            style={{ color: "rgba(18,59,61,0.4)" }}
          >
            What&apos;s inside the box
          </span>
          <div
            className="flex-1 h-px"
            style={{ background: "rgba(18,59,61,0.1)" }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          {/* Feature cards grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  featureItems.current[index] = el;
                }}
                className="group relative w-full p-5 sm:p-6 rounded-2xl flex flex-col gap-3 overflow-hidden transition-shadow duration-300 "
                style={{
                  background: "rgba(18,59,61,0.03)",
                  border: "1px solid rgba(18,59,61,0.08)",
                  willChange: "transform",
                }}
              >
                {/* Number + icon row */}
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 flex items-center justify-center shrink-0 rounded-xl">
                    {item.icon}
                  </div>
                  <span
                    className="font-mono text-[11px] font-bold"
                    style={{ color: "rgba(18,59,61,0.25)" }}
                  >
                    {String(item.id).padStart(2, "0")}
                  </span>
                </div>

                <p
                  className="font-semibold text-sm sm:text-base leading-snug"
                  style={{ color: "#123B3D" }}
                >
                  {item.title}
                </p>
                <p
                  className="text-xs sm:text-sm leading-relaxed"
                  style={{ color: "rgba(18,59,61,0.55)" }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Side image */}
          <div
            className="lg:col-span-4 relative w-full rounded-2xl overflow-hidden"
            style={{ minHeight: "300px", willChange: "transform" }}
          >
            <Image
              src={image10}
              alt="Fortibox contents"
              fill
              className="object-cover"
            />
            {/* Bottom caption */}
            <div
              className="absolute bottom-0 left-0 right-0 p-4"
              style={{
                background:
                  "linear-gradient(to top, rgba(18,59,61,0.75) 40%, transparent 100%)",
              }}
            >
              <p
                className="text-[10px] font-bold uppercase tracking-widest mb-0.5"
                style={{ color: "#BACE32" }}
              >
                Inside every box
              </p>
              <p
                className="text-xs font-medium leading-snug"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                Everything to sustain and restore dignity in the field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fortibox;
