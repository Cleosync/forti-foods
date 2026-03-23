import Image from "next/image";

interface PartnerItem {
  alt: string;
  src: string;
  height: number;
}

interface OurPartnersProps {
  partners?: PartnerItem[];
}

const partners = [
  {
    alt: "Ireland Embassy",
    src: "https://ucarecdn.com/bb9e822b-1487-4826-b1b6-540d763869a1/Group890.svg",
    height: 50,
  },
  {
    alt: "Lagos State Government",
    src: "https://ucarecdn.com/6c4c628c-2017-47c6-abf8-1b20a60efbf7/Frame1000003729.svg",
    height: 32,
  },
  {
    alt: "CRS",
    src: "https://ucarecdn.com/bc4cabe8-3328-405e-85e8-15410bd49ee1/pngaaacom4221983.png",
    height: 44,
  },
  {
    alt: "Ministry of Defence",
    src: "https://ucarecdn.com/4f2ebc77-7ea4-47ba-8f78-3aa9c3b299f4/header.png",
    height: 44,
  },
];

function OurPartners() {
  return (
    <section className="mx-2 sm:mx-2 rounded-2xl bg-neutral-100 py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-3 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center gap-2 text-center mb-10 sm:mb-12">
          <span
            className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase"
            style={{ color: "rgba(18,59,61,0.45)" }}
          >
            <span className="w-5 h-px bg-current" />
            Our Clients
            <span className="w-5 h-px bg-current" />
          </span>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-1">
            Trusted by Top Industries
          </h2>
        </div>

        {/* Logo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-neutral-200 rounded-xl overflow-hidden border border-neutral-200">
          {partners.map((partner) => (
            <div
              key={partner.alt}
              className="flex items-center justify-center bg-white group px-6 py-8 sm:py-10 transition-colors hover:bg-white"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className="w-full object-contain grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                style={{ maxHeight: `${partner.height}px`, maxWidth: "140px" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurPartners;
