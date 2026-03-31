"use client";

import React from "react";
import Button from "./ui/button";
import Image from "next/image";
import { Icon } from "@iconify/react";

// ── FortiLogo ─────────────────────────────────────────────────────────────────
function FortiLogo({ className = "w-20 text-white" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 101 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M37.4274 10.4065V8.9637C37.4274 8.85118 37.3374 8.75862 37.2239 8.75862H34.5377C34.426 8.75862 34.3342 8.66788 34.3342 8.55354V6.21779C34.3342 6.10526 34.2441 6.0127 34.1306 6.0127H32.6155C32.511 6.0127 32.4227 6.09256 32.4137 6.19782L32.1885 8.57169C32.1777 8.67695 32.0912 8.75681 31.9867 8.75681H30.3581C30.205 8.74592 27.6846 8.77677 26.5478 9.60073C26.4163 9.69691 26.2307 9.5971 26.2307 9.43194V8.96007C26.2307 8.84755 26.1407 8.75499 26.0272 8.75499H24.2923C24.1806 8.75499 24.0887 8.84573 24.0887 8.96007V19.5281C24.0887 19.6407 24.1788 19.7332 24.2923 19.7332H26.0488C26.1605 19.7332 26.2524 19.6425 26.2524 19.5281V14.2668C26.2524 13.5989 26.3388 13.0399 26.5118 12.5898C26.6847 12.1397 26.9225 11.784 27.2252 11.5227C28.1242 10.7822 29.2303 10.608 30.3383 10.608H31.9687C32.0804 10.608 32.1723 10.6987 32.1723 10.8131V16.2486C32.1723 17.1198 32.3092 17.8094 32.583 18.3176C32.8569 18.8258 33.246 19.1887 33.7505 19.4065C34.2549 19.6243 34.8458 19.7332 35.5232 19.7332H37.114C37.2257 19.7332 37.3176 19.6425 37.3176 19.5281V18.0853C37.3176 17.9728 37.2275 17.8802 37.114 17.8802H36.0637C35.4295 17.8802 34.9827 17.7713 34.7233 17.5535C34.4639 17.3212 34.3342 16.8929 34.3342 16.2686V10.8113C34.3342 10.6987 34.4242 10.6062 34.5377 10.6062H37.2239C37.3356 10.6062 37.4274 10.5154 37.4274 10.4011V10.4065Z"
        fill="currentColor"
      />
      <path
        d="M5.78662 3.4029C5.67492 3.4029 5.58304 3.31216 5.58304 3.19782V0.205082C5.58304 0.092559 5.49296 0 5.37946 0H3.62294C3.51124 0 3.41936 0.0907441 3.41936 0.205082V3.19782C3.41936 3.31034 3.32929 3.4029 3.21579 3.4029H0.203576C0.0918797 3.4029 0 3.49365 0 3.60799V5.3775C0 5.49002 0.0900781 5.58258 0.203576 5.58258H3.22119C3.33289 5.58258 3.42477 5.67332 3.42477 5.78766V8.7804C3.42477 8.89292 3.51485 8.98548 3.62835 8.98548H5.38487C5.49657 8.98548 5.58844 8.89474 5.58844 8.7804V5.78766C5.58844 5.67514 5.67852 5.58258 5.79202 5.58258H8.80964C8.92133 5.58258 9.01321 5.49183 9.01321 5.3775V3.60799C9.01321 3.49546 8.92314 3.4029 8.80964 3.4029H5.78662Z"
        fill="#BACE32"
      />
      <path
        d="M11.0238 10.9583C11.0238 10.8457 10.9337 10.7532 10.8202 10.7532H3.62654C3.51485 10.7532 3.42297 10.8439 3.42297 10.9583V19.5318C3.42297 19.6443 3.51305 19.7368 3.62654 19.7368H5.38307C5.49476 19.7368 5.58664 19.6461 5.58664 19.5318V13.1361C5.58664 13.0236 5.67672 12.931 5.79022 12.931H10.8238C10.9355 12.931 11.0274 12.8403 11.0274 12.726V10.9564L11.0238 10.9583Z"
        fill="currentColor"
      />
      <path
        d="M56.5817 3.4029H47.7864C47.6747 3.4029 47.5829 3.49365 47.5829 3.60799V19.5336C47.5829 19.6461 47.6729 19.7387 47.7864 19.7387H49.543C49.6546 19.7387 49.7465 19.6479 49.7465 19.5336V13.1379C49.7465 13.0254 49.8366 12.9328 49.9501 12.9328H54.9837C55.0954 12.9328 55.1872 12.8421 55.1872 12.7278V10.9583C55.1872 10.8457 55.0972 10.7532 54.9837 10.7532H49.7465V5.78403C49.7465 5.67151 49.8366 5.57895 49.9501 5.57895H56.5835C56.6951 5.57895 56.787 5.4882 56.787 5.37387V3.60436C56.787 3.49183 56.697 3.39927 56.5835 3.39927L56.5817 3.4029Z"
        fill="currentColor"
      />
      <path
        d="M96.7205 19.9982C95.7981 19.9982 94.991 19.8457 94.2992 19.5408C93.6074 19.2359 93.0597 18.8076 92.6561 18.2559C92.2958 17.7622 92.0616 17.1942 91.9535 16.5517C91.9337 16.4283 92.031 16.3176 92.1553 16.3176H93.9659C94.0595 16.3176 94.1388 16.3829 94.1622 16.4737C94.2397 16.7622 94.364 17.029 94.5352 17.2759C94.7513 17.5662 95.0396 17.7985 95.3999 17.9728C95.7746 18.147 96.2142 18.2341 96.7186 18.2341C97.1943 18.2341 97.5834 18.1688 97.8861 18.0381C98.2031 17.8929 98.4337 17.7042 98.5779 17.4719C98.722 17.225 98.7941 16.9637 98.7941 16.6878C98.7941 16.2813 98.6932 15.9764 98.4914 15.7731C98.304 15.5554 98.0158 15.3884 97.6266 15.2722C97.2519 15.1416 96.7979 15.0254 96.2647 14.9238C95.7602 14.8367 95.2702 14.7205 94.7946 14.5753C94.3334 14.4156 93.9154 14.2196 93.5407 13.9873C93.1804 13.755 92.8921 13.4646 92.6759 13.1162C92.4598 12.7532 92.3517 12.3103 92.3517 11.7877C92.3517 11.1633 92.5174 10.6044 92.8489 10.1107C93.1804 9.60254 93.6488 9.21053 94.2541 8.93466C94.8738 8.64428 95.6017 8.49909 96.4376 8.49909C97.6483 8.49909 98.6211 8.78947 99.3561 9.37024C100.034 9.90563 100.455 10.6443 100.617 11.588C100.639 11.7151 100.545 11.8312 100.417 11.8312H98.7292C98.6355 11.8312 98.5508 11.7659 98.531 11.6733C98.4481 11.2559 98.241 10.9328 97.9077 10.6987C97.533 10.4229 97.0357 10.2849 96.416 10.2849C95.7962 10.2849 95.3206 10.4083 94.9892 10.6552C94.6577 10.902 94.4919 11.2287 94.4919 11.6352C94.4919 11.8966 94.5856 12.1289 94.773 12.3321C94.9603 12.5354 95.2342 12.7096 95.5945 12.8548C95.9692 12.9855 96.4232 13.1089 96.9565 13.225C97.7203 13.3702 98.4049 13.5517 99.0102 13.7695C99.6156 13.9873 100.098 14.3067 100.459 14.7278C100.819 15.1488 100.999 15.7514 100.999 16.5354C101.014 17.2178 100.841 17.8203 100.48 18.343C100.134 18.8657 99.6372 19.2722 98.9886 19.5626C98.3545 19.853 97.5978 19.9982 96.7186 19.9982H96.7205Z"
        fill="currentColor"
      />
    </svg>
  );
}

// ── Metric data ───────────────────────────────────────────────────────────────
const metrics = [
  {
    icon: "mdi:timer-outline",
    label: "Prep Time",
    forti: { value: "3 min", sub: null },
    trad: { value: "4+ hrs", sub: null },
  },
  {
    icon: "mdi:fire",
    label: "Fuel Burden",
    forti: { value: "Zero", sub: "Ready-to-heat" },
    trad: { value: "High", sub: "LPG Gas / Firewood" },
  },
  {
    icon: "mdi:water-outline",
    label: "Water Burden",
    forti: { value: "Zero", sub: "No boiling needed" },
    trad: { value: "High", sub: "Logistics for clean water" },
  },
  {
    icon: "mdi:shield-check-outline",
    label: "Reliability",
    forti: { value: "100%", sub: "Unaffected by fuel scarcity" },
    trad: { value: "Unstable", sub: "Vulnerable to price hikes" },
  },
];

// ── Main component ─────────────────────────────────────────────────────────────
function PrepTime() {
  return (
    <section className="w-full bg-primary font-sans overflow-hidden">
      {/* ── Header ── */}
      <div className="border-b border-white/8">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-4 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/30">
                The Benefits
              </span>
              <div className="flex-1 h-px bg-white/8" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black leading-[1.05] tracking-tight text-white">
              Preparation &amp; logistics
              <br />
              <span
                style={{
                  WebkitTextStroke: "1.5px rgba(255,255,255,0.2)",
                  color: "transparent",
                }}
              >
                by the numbers.
              </span>
            </h2>
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSciZNKyJc9lpI3B-uRYUO4XU_iZOQY2lgmNivJP8-c0Xc3hfg/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0"
          >
            <Button className="w-full sm:w-auto">
              Request a Demo
              <Icon
                icon="heroicons-solid:arrow-sm-right"
                width="20"
                height="20"
              />
            </Button>
          </a>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          DESKTOP LAYOUT (md+): side-by-side columns
      ══════════════════════════════════════════ */}
      <div className="hidden md:block">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          {/* Image row */}
          <div className="grid grid-cols-[1fr_96px_1fr] pt-3 pb-2 gap-0">
            {/* Forti image */}
            <div className="pr-8 flex flex-col gap-4">
              <FortiLogo className="w-24 text-white" />
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-white/5">
                <Image
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop"
                  alt="Forti Foods — vacuum-sealed pouch"
                  fill
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <span className="self-start text-[10px] font-semibold tracking-widest uppercase text-white/40 bg-black/30 px-2.5 py-1 rounded-md">
                    Replace with product photo
                  </span>
                  <span className="self-start text-[11px] font-black tracking-widest uppercase text-[#BACE32] bg-[#BACE32]/20 px-3 py-1.5 rounded-lg">
                    Ready-to-heat pouch
                  </span>
                </div>
              </div>
              <p className="text-sm text-white/35 leading-relaxed">
                Vacuum-sealed, fortified meal pouch. No equipment. No expertise
                required.
              </p>
            </div>

            {/* VS center column */}
            <div className="flex flex-col items-center justify-start border-x border-white/8 px-4 pt-3">
              <div className="flex flex-col items-center h-full">
                <div className="w-px flex-1 bg-gradient-to-b from-transparent via-white/12 to-white/12" />
                <div className="w-11 h-11 rounded-full bg-white/6 flex items-center justify-center flex-shrink-0 my-4">
                  <span className="text-[10px] font-black text-white/40 tracking-wider">
                    VS
                  </span>
                </div>
                <div className="w-px flex-1 bg-white/12" />
              </div>
            </div>

            {/* Traditional image */}
            <div className="pl-8 flex flex-col gap-4 items-end">
              <span className="text-base font-black tracking-widest uppercase text-white/40">
                Traditional
              </span>
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-white/5">
                <Image
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop"
                  alt="Traditional cooking — pots and jerrycans"
                  fill
                  className="object-cover opacity-35 grayscale"
                />
                <div className="absolute inset-0 flex flex-col justify-between p-4 items-end">
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-white/40 bg-black/30 px-2.5 py-1 rounded-md">
                    Replace with field photo
                  </span>
                  <span className="text-[11px] font-black tracking-widest uppercase text-red-300 bg-red-500/20 px-3 py-1.5 rounded-lg">
                    Pots &amp; jerrycans
                  </span>
                </div>
              </div>
              <p className="text-sm text-white/25 leading-relaxed text-right">
                Soot-covered pots, water jerrycans, open fire. High logistics
                and constant resupply.
              </p>
            </div>
          </div>

          {/* Metrics table */}
          <div className="border-t border-white/8">
            {metrics.map((m, idx) => (
              <div
                key={idx}
                className="grid grid-cols-[1fr_96px_1fr] border-b border-white/6 last:border-0"
              >
                {/* Forti value */}
                <div className="py-6 pr-8 flex flex-col justify-center gap-1.5">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#BACE32] flex-shrink-0" />
                    <span className="text-xl font-black text-white leading-tight">
                      {m.forti.value}
                    </span>
                  </div>
                  {m.forti.sub && (
                    <p className="text-sm text-[#BACE32]/70 leading-snug pl-5">
                      {m.forti.sub}
                    </p>
                  )}
                </div>

                {/* Center icon + label */}
                <div className="flex flex-col items-center justify-center gap-2 border-x border-white/8 py-6 px-2">
                  <div className="w-9 h-9 rounded-xl bg-white/8 flex items-center justify-center flex-shrink-0">
                    <Icon icon={m.icon} className="w-4 h-4 text-white/50" />
                  </div>
                  <p className="text-[9px] font-bold tracking-[0.15em] uppercase text-white/35 text-center leading-tight">
                    {m.label}
                  </p>
                </div>

                {/* Traditional value */}
                <div className="py-6 pl-8 flex flex-col justify-center items-end gap-1.5">
                  <div className="flex items-center gap-3 flex-row-reverse">
                    <span className="w-2 h-2 rounded-full bg-red-400/50 flex-shrink-0" />
                    <span className="text-xl font-black text-white/45 leading-tight line-through decoration-red-400/30 decoration-2">
                      {m.trad.value}
                    </span>
                  </div>
                  {m.trad.sub && (
                    <p className="text-sm text-white/30 leading-snug pr-5 text-right">
                      {m.trad.sub}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          MOBILE LAYOUT (<md): stacked cards
      ══════════════════════════════════════════ */}
      <div className="md:hidden">
        <div className="px-5 pt-8 pb-6 flex flex-col gap-6">
          {/* Forti card */}
          <div className="flex flex-col gap-4">
            <FortiLogo className="w-20 text-white" />
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white/5">
              <Image
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop"
                alt="Forti Foods — vacuum-sealed pouch"
                fill
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 flex flex-col justify-between p-4">
                <span className="self-start text-[10px] font-semibold tracking-widest uppercase text-white/40 bg-black/30 px-2.5 py-1 rounded-md">
                  Replace with product photo
                </span>
                <span className="self-start text-[11px] font-black tracking-widest uppercase text-[#BACE32] bg-[#BACE32]/20 px-3 py-1.5 rounded-lg">
                  Ready-to-heat pouch
                </span>
              </div>
            </div>
            <p className="text-sm text-white/35 leading-relaxed">
              Vacuum-sealed, fortified meal pouch. No equipment. No expertise
              required.
            </p>
          </div>

          {/* VS divider */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-white/10" />
            <div className="w-10 h-10 rounded-full bg-white/6 flex items-center justify-center flex-shrink-0">
              <span className="text-[10px] font-black text-white/40 tracking-wider">
                VS
              </span>
            </div>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Traditional card */}
          <div className="flex flex-col gap-4">
            <span className="text-sm font-black tracking-widest uppercase text-white/40">
              Traditional Model
            </span>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white/5">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop"
                alt="Traditional cooking — pots and jerrycans"
                fill
                className="object-cover opacity-35 grayscale"
              />
              <div className="absolute inset-0 flex flex-col justify-between p-4">
                <span className="self-start text-[10px] font-semibold tracking-widest uppercase text-white/40 bg-black/30 px-2.5 py-1 rounded-md">
                  Replace with field photo
                </span>
                <span className="self-start text-[11px] font-black tracking-widest uppercase text-red-300 bg-red-500/20 px-3 py-1.5 rounded-lg">
                  Pots &amp; jerrycans
                </span>
              </div>
            </div>
            <p className="text-sm text-white/25 leading-relaxed">
              Soot-covered pots, water jerrycans, open fire. High logistics and
              constant resupply.
            </p>
          </div>

          {/* Mobile metrics — stacked rows */}
          <div className="mt-2 rounded-2xl overflow-hidden border border-white/8">
            {metrics.map((m, idx) => (
              <div key={idx} className="border-b border-white/6 last:border-0">
                {/* Label row */}
                <div className="flex items-center gap-3 px-5 pt-5 pb-3">
                  <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center flex-shrink-0">
                    <Icon icon={m.icon} className="w-4 h-4 text-white/50" />
                  </div>
                  <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/40">
                    {m.label}
                  </p>
                </div>

                {/* Values side by side */}
                <div className="grid grid-cols-2 gap-0 border-t border-white/6">
                  {/* Forti */}
                  <div className="px-5 py-4 flex flex-col gap-1 border-r border-white/6">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#BACE32] flex-shrink-0" />
                      <span className="text-lg font-black text-white leading-tight">
                        {m.forti.value}
                      </span>
                    </div>
                    {m.forti.sub && (
                      <p className="text-xs text-[#BACE32]/70 leading-snug pl-3.5">
                        {m.forti.sub}
                      </p>
                    )}
                  </div>
                  {/* Traditional */}
                  <div className="px-5 py-4 flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400/50 flex-shrink-0" />
                      <span className="text-lg font-black text-white/45 leading-tight line-through decoration-red-400/30 decoration-2">
                        {m.trad.value}
                      </span>
                    </div>
                    {m.trad.sub && (
                      <p className="text-xs text-white/30 leading-snug pl-3.5">
                        {m.trad.sub}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom strip (shared) ── */}
      <div className="border-t border-white/8">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-[#BACE32]/10">
            <span className="w-2 h-2 rounded-full bg-[#BACE32] flex-shrink-0" />
            <span className="text-sm font-semibold text-white/80">
              From kitchen to community — in{" "}
              <span className="text-[#BACE32] font-black">3 minutes</span>, not
              4 hours.
            </span>
          </div>
          <p className="text-xs text-white/25 text-center sm:text-right leading-relaxed">
            Figures are based on operational field data
            <br className="hidden sm:block" /> and illustrative estimates.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PrepTime;
