"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Button from "./ui/button";
import { Map, MapControls } from "@/components/ui/map";
import { Card } from "@/components/ui/card";

interface ContactFeature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const contactFeatures: ContactFeature[] = [
  {
    id: 1,
    icon: "mdi:video-outline",
    title: "Feature one",
    description:
      "Gorgeous, high-quality video sharing on desktop, mobile, tablet",
  },
  {
    id: 2,
    icon: "mdi:moon-waning-crescent",
    title: "Feature two",
    description:
      "Gorgeous, high-quality video sharing on desktop, mobile, tablet",
  },
  {
    id: 3,
    icon: "mdi:palette-outline",
    title: "Feature three",
    description:
      "Gorgeous, high-quality video sharing on desktop, mobile, tablet",
  },
  {
    id: 4,
    icon: "mdi:qrcode",
    title: "Feature four",
    description:
      "Gorgeous, high-quality video sharing on desktop, mobile, tablet",
  },
];

function FortiContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    feedback: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="w-full bg-white font-sans">
      {/* ── Our Reach ── */}
      {/* <div className="py-20 px-6 border-b border-gray-200">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
       
            <div className="flex flex-col gap-7">
          
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gray-400">
                <span className="w-6 h-px bg-gray-300" />
                Global Presence
              </span>

              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-950 leading-[1.1]">
                Our Reach
              </h2>

              <p className="text-base text-gray-500 leading-relaxed max-w-md">
                Separated they live in Bookmarks right at the coast of the
                famous Semantics, large language ocean — reaching teams across
                every continent.
              </p>

            
              <div className="flex gap-8 pt-2">
                {[
                  { value: "120+", label: "Countries" },
                  { value: "40K", label: "Users" },
                  { value: "99.9%", label: "Uptime" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-0.5">
                    <span className="text-2xl font-bold text-gray-950">
                      {stat.value}
                    </span>
                    <span className="text-xs text-gray-400 uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Button variant="primary" size="md">
                  Request a Demo
                </Button>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <Card className="h-[360px] p-0 overflow-hidden w-full rounded-2xl">
                <Map center={[-74.006, 40.7128]} zoom={11}>
                  <MapControls />
                </Map>
              </Card>
            </div>
          </div>
        </div>
      </div> */}

      {/* ── Contact Us ── */}
      <div className="py-20 px-6 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
            {/* Left — Features */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gray-400">
                  <span className="w-6 h-px bg-gray-300" />
                  Get in Touch
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-950 leading-[1.1]">
                  Contact Us
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                  Have a question or want to see what we can do for your team?
                  We'd love to hear from you.
                </p>
              </div>

              {/* 2×2 Feature Grid */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                {contactFeatures.map((feature) => (
                  <div key={feature.id} className="flex flex-col gap-3 group">
                    {/* Icon container */}
                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center transition-shadow group-hover:shadow-md">
                      <Icon
                        icon={feature.icon}
                        className="w-5 h-5 text-gray-800"
                      />
                    </div>

                    <h4 className="text-sm font-semibold text-gray-900">
                      {feature.title}
                    </h4>

                    <p className="text-xs text-gray-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div className="flex items-start">
              <form
                onSubmit={handleSubmit}
                className="w-full bg-white border border-gray-200 rounded-2xl shadow-sm p-8 flex flex-col gap-5"
              >
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Jane Smith"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  />
                </div>

                {/* Company */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Acme Inc."
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  />
                </div>

                {/* Feedback */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="feedback"
                    placeholder="Tell us what's on your mind…"
                    value={formData.feedback}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
                  />
                </div>

                {/* Divider */}
                <div className="border-t border-gray-100" />

                {/* Submit */}
                <Button variant="primary" size="md" fullWidth>
                  Send Message
                </Button>

                <p className="text-center text-xs text-gray-400">
                  We'll get back to you within 1 business day.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FortiContact;
