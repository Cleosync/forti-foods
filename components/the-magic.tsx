"use client";

import { useRef } from "react";
import Image from "next/image";
import image3 from "@/public/images/image3.png";
import image4 from "@/public/images/image4.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TheMagicProps {
  magicImages?: {
    step1?: string;
    step2?: string;
    step3?: string;
  };
}

const BENEFITS = [
  {
    label: "No Artificial Coloring",
    img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=120&h=120&q=80&fit=crop",
  },
  {
    label: "Halal",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=120&h=120&q=80&fit=crop",
  },
  {
    label: "Non GMO",
    img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=120&h=120&q=80&fit=crop",
  },
  {
    label: "No Preservatives",
    img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=120&h=120&q=80&fit=crop",
  },
  {
    label: "Balanced Macros",
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=120&h=120&q=80&fit=crop",
  },
];

const REASONS = [
  {
    title: "The Barrier",
    body: 'We seal our freshly cooked meals in high-barrier, food safe pouches. This creates an airtight "Fort Knox" for the food, blocking out the oxygen and light that cause spoilage.',
    step: "01",
    icon: (
      <svg
        width="32"
        height="36"
        viewBox="0 0 45 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.5 21L22.5 14L43.5 21M22.5 0V45.5"
          stroke="#124447"
          strokeWidth="3"
        />
        <path
          d="M38.8333 37.1093C41.547 33.6653 43.5 29.1573 43.5 23.3123V19.6397C43.5 12.1777 43.5 8.44667 42.618 7.19133C41.7383 5.93833 38.2313 4.73667 31.215 2.33567L29.878 1.87833C26.2217 0.625333 24.3947 0 22.5 0C20.6053 0 18.7783 0.625333 15.122 1.87833L13.785 2.33333C6.76867 4.73667 3.26167 5.93833 2.382 7.19133C1.5 8.44667 1.5 12.18 1.5 19.6397V21"
          stroke="#123B3D"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M1.9502 28C3.94986 38.0287 12.1772 43.197 17.5975 45.563C19.2799 46.298 20.1222 46.6667 22.4999 46.6667C24.8799 46.6667 25.7199 46.298 27.4022 45.563C28.7532 44.975 30.2745 44.2097 31.8332 43.2437"
          stroke="#BACE32"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Heat Sterilisation",
    body: "The sealed pouches undergo Retort—a calibrated application of heat and pressure. This high-performance sterilization neutralizes microorganisms inside. It's the same physics used in canning, optimized for modern food quality.",
    step: "02",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M39.8907 23.3334L42.924 26.3667M32.424 30.8001L35.4574 33.8334M24.934 38.2877L27.9697 41.3211M31.0404 11.6667L32.9537 9.75341C33.8264 8.88058 34.8624 8.18818 36.0027 7.71575C37.143 7.24332 38.3651 7.00011 39.5994 7C40.8336 6.99989 42.0558 7.24289 43.1962 7.71512C44.3365 8.18735 45.3727 8.87957 46.2455 9.75225C47.1184 10.6249 47.8108 11.661 48.2832 12.8012C48.7556 13.9415 48.9988 15.1637 48.9989 16.3979C48.999 17.6322 48.7561 18.8544 48.2838 19.9947C47.8116 21.1351 47.1194 22.1712 46.2467 23.0441L25.382 43.9111C24.6345 44.6587 23.7283 45.2284 22.7306 45.5782C21.733 45.928 20.6694 46.0488 19.6187 45.9317L17.752 45.7241C17.0517 45.6459 16.3427 45.7265 15.6778 45.96C15.0128 46.1935 14.4091 46.5738 13.9114 47.0727L13.0177 47.9687C12.6903 48.2962 12.3016 48.5559 11.8738 48.7331C11.446 48.9103 10.9876 49.0014 10.5245 49.0014C10.0615 49.0014 9.60301 48.9103 9.17524 48.7331C8.74746 48.5559 8.35877 48.2962 8.03136 47.9687C7.70395 47.6413 7.44424 47.2526 7.26705 46.8249C7.08986 46.3971 6.99866 45.9386 6.99866 45.4756C6.99866 45.0126 7.08986 44.5541 7.26705 44.1263C7.44424 43.6985 7.70395 43.3098 8.03136 42.9824L8.92736 42.0887C9.4266 41.5908 9.80712 40.9866 10.0406 40.3213C10.2741 39.6559 10.3546 38.9465 10.276 38.2457L10.066 36.3814C9.94923 35.3305 10.0704 34.2668 10.4206 33.2692C10.7708 32.2715 11.341 31.3654 12.089 30.6181L24.0404 18.6667"
          stroke="#124447"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 35.0002L36.1667 19.8335"
          stroke="#BACE32"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "The Pause",
    body: 'With the interior 100% sterile and airtight, the food enters a "biological pause." Our dishes stay exactly as they were the moment they were cooked—fresh, safe, and shelf-stable for 12 months.',
    step: "03",
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 47 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M43.0834 11.7498C43.0834 8.05642 43.0834 6.21167 41.9358 5.06409C40.7882 3.9165 38.9434 3.9165 35.25 3.9165C31.5566 3.9165 29.7119 3.9165 28.5643 5.06409C27.4167 6.21167 27.4167 8.05642 27.4167 11.7498V35.2498C27.4167 38.9433 27.4167 40.788 28.5643 41.9356C29.7119 43.0832 31.5566 43.0832 35.25 43.0832C38.9434 43.0832 40.7882 43.0832 41.9358 41.9356C43.0834 40.788 43.0834 38.9433 43.0834 35.2498V19.5832"
          stroke="#124447"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M3.9165 35.2498C3.9165 38.9433 3.9165 40.788 5.06409 41.9356C6.21167 43.0832 8.05642 43.0832 11.7498 43.0832C15.4433 43.0832 17.288 43.0832 18.4356 41.9356C19.5832 40.788 19.5832 38.9433 19.5832 35.2498V11.7498C19.5832 8.05642 19.5832 6.21167 18.4356 5.06409C17.288 3.9165 15.4433 3.9165 11.7498 3.9165C8.05642 3.9165 6.21167 3.9165 5.06409 5.06409C3.9165 6.21167 3.9165 8.05642 3.9165 11.7498V27.4165"
          stroke="#BACE32"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

function TheMagic({ magicImages }: TheMagicProps = {}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const benefitItems = useRef<(HTMLDivElement | null)[]>([]);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const reasonsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      // Header
      gsap.set([eyebrowRef.current, headingRef.current], {
        autoAlpha: 0,
        y: 24,
      });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            end: "top 55%",
            scrub: 0.8,
          },
        })
        .to(
          eyebrowRef.current,
          { autoAlpha: 1, y: 0, ease: "power3.out", duration: 0.3 },
          0,
        )
        .to(
          headingRef.current,
          { autoAlpha: 1, y: 0, ease: "power3.out", duration: 0.4 },
          0.1,
        );

      // Benefits
      gsap.set(benefitItems.current, { autoAlpha: 0, x: 16 });
      gsap.to(benefitItems.current, {
        autoAlpha: 1,
        x: 0,
        ease: "power3.out",
        stagger: 0.06,
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: "top 90%",
          end: "top 55%",
          scrub: 0.8,
        },
      });

      // Subhead
      gsap.set(subheadRef.current, { autoAlpha: 0, y: 20 });
      gsap.to(subheadRef.current, {
        autoAlpha: 1,
        y: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: subheadRef.current,
          start: "top 90%",
          end: "top 55%",
          scrub: 0.8,
        },
      });

      // Process steps
      reasonsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { autoAlpha: 0, x: i % 2 === 0 ? -40 : 40 },
          {
            autoAlpha: 1,
            x: 0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              end: "top 50%",
              scrub: 0.8,
            },
          },
        );
      });
    },
    { scope: sectionRef, dependencies: [] },
  );

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center text-brand-text overflow-hidden"
    >
      {/* ── HEADER BLOCK ── */}
      <div className="w-full max-w-7xl px-6 sm:px-10 pt-16 pb-10">
        {/* Eyebrow */}
        <div ref={eyebrowRef} className="flex items-center gap-4 mb-5">
          <span className="text-xs lg:text-sm font-semibold text-neutral-600 tracking-widest">
            How it works
          </span>
          <div
            className="flex-1 h-px"
            style={{
              background:
                "linear-gradient(to right, rgba(18,59,61,0.15), transparent)",
            }}
          />
          <span
            className="text-[11px] font-mono tracking-widest"
            style={{ color: "rgba(18,59,61,0.28)" }}
          >
            § 01
          </span>
        </div>

        {/* Heading — max 4xl on desktop */}
        <h3
          ref={headingRef}
          className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight"
          style={{ color: "#123B3D" }}
        >
          The Science <br /> Behind{" "}
          <em
            className="not-italic"
            style={{ WebkitTextStroke: "1.5px #123B3D", color: "transparent" }}
          >
            the Magic.
          </em>
        </h3>

        {/* ── BENEFITS — tight pills, directly under heading ── */}
        <div ref={benefitsRef} className="mt-5 flex flex-wrap gap-2">
          {BENEFITS.map((b, i) => (
            <div
              key={b.label}
              ref={(el) => {
                benefitItems.current[i] = el;
              }}
              className="group flex items-center gap-2 rounded-full overflow-hidden pr-3.5"
              style={{
                height: "34px",
                background: "rgba(18,59,61,0.05)",
                border: "1px solid rgba(18,59,61,0.1)",
              }}
            >
              {/* Tiny circular photo */}
              <div
                className="relative flex-shrink-0 rounded-full overflow-hidden"
                style={{ width: 26, height: 26, marginLeft: 4 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={b.img}
                  alt={b.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <span
                className="text-[11px] font-semibold tracking-wide whitespace-nowrap"
                style={{ color: "#123B3D" }}
              >
                {b.label}
              </span>
            </div>
          ))}
        </div>

        {/* Subhead — after benefits */}
        <p
          ref={subheadRef}
          className="mt-6 text-sm sm:text-base leading-relaxed max-w-xl"
          style={{ color: "rgba(18,59,61,0.55)" }}
        >
          <strong style={{ color: "#123B3D" }}>12 months on the shelf.</strong>{" "}
          Zero refrigeration, no artificial preservatives. Just real food sealed
          with precision and cooked with care.
        </p>

        {/* Divider */}
        <div
          className="mt-10 h-px w-full"
          style={{ background: "rgba(18,59,61,0.08)" }}
        />
      </div>

      {/* ── PROCESS ── */}
      <div className="w-full" style={{ background: "rgba(18,59,61,0.015)" }}>
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 py-14 sm:py-20">
          <div className="flex items-center gap-4 mb-12">
            <span
              className="text-[11px] font-bold tracking-[0.22em] uppercase"
              style={{ color: "rgba(18,59,61,0.35)" }}
            >
              Process
            </span>
            <div
              className="flex-1 h-px"
              style={{ background: "rgba(18,59,61,0.1)" }}
            />
          </div>

          <div className="flex flex-col">
            {REASONS.map((r, i) => (
              <div
                key={r.title}
                ref={(el) => {
                  reasonsRef.current[i] = el;
                }}
                className={`flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12 py-12 relative
                  ${i < REASONS.length - 1 ? "border-b" : ""}
                  ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                style={{ borderColor: "rgba(18,59,61,0.07)" }}
              >
                {/* Ghost number */}
                <div
                  className="flex-shrink-0 select-none flex items-center justify-center absolute lg:relative right-10 top-5"
                  style={{ width: "140px" }}
                >
                  <span
                    className="text-[96px] font-black leading-none"
                    style={{
                      color: "transparent",
                      WebkitTextStroke: "1.5px rgba(18,59,61,0.1)",
                    }}
                  >
                    {r.step}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4 flex-1 max-w-lg">
                  <div
                    className="flex items-center justify-center w-13 h-13 w-12 h-12 rounded-xl"
                    style={{
                      background: "white",
                      border: "1.5px solid rgba(18,59,61,0.1)",
                    }}
                  >
                    {r.icon}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3
                      className="text-xl sm:text-2xl font-bold tracking-tight"
                      style={{ color: "#123B3D" }}
                    >
                      {r.title}
                    </h3>
                    <p
                      className="text-sm sm:text-base leading-relaxed"
                      style={{ color: "rgba(18,59,61,0.55)" }}
                    >
                      {r.body}
                    </p>
                  </div>
                </div>

                {/* Photo */}
                <div className="block relative shrink-0 rounded-2xl overflow-hidden w-full h-[200px] sm:w-[200px] sm:h-[260px] ">
                  {(() => {
                    const stepImages = [
                      magicImages?.step1 || image3,
                      magicImages?.step2 || image4,
                      magicImages?.step3 || image3,
                    ];
                    const stepImg = stepImages[i];
                    const isUrl = typeof stepImg === "string" && stepImg.startsWith("http");

                    return isUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={stepImg}
                        alt={r.title}
                        className="w-full h-full object-cover"
                        style={{ filter: "saturate(0.8)" }}
                      />
                    ) : (
                      <Image
                        src={stepImg}
                        alt={r.title}
                        fill
                        className="object-cover"
                        style={{ filter: "saturate(0.8)" }}
                      />
                    );
                  })()}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        i % 2 === 0
                          ? "linear-gradient(135deg, rgba(186,206,50,0.1) 0%, rgba(18,59,61,0.28) 100%)"
                          : "linear-gradient(225deg, rgba(186,206,50,0.08) 0%, rgba(18,59,61,0.32) 100%)",
                    }}
                  />
                  <span
                    className="absolute bottom-3 right-4 text-4xl font-black select-none leading-none"
                    style={{ color: "rgba(255,255,255,0.1)" }}
                  >
                    {r.step}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TheMagic;
