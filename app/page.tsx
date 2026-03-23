import Fortibox from "@/components/forti-box";
import FortiContact from "@/components/forti-contact";
import FortiInsights from "@/components/forti-insights";
import FortiSystem from "@/components/forti-system";
import HeroSection from "@/components/hero-section";
import OurPartners from "@/components/our-partners";
import PrepTime from "@/components/prep-time";
import BrandedMarquee from "@/components/shared/branded-marquee";
import TheMagic from "@/components/the-magic";
import TheProblem from "@/components/the-problem";
import TheSolution from "@/components/the-solution";
import UseCases from "@/components/use-cases";
import { getLandingPageData } from "@/lib/sanity";

async function page() {
  // Fetch Sanity data
  const landingPageData = await getLandingPageData();

  // Debug logging
  console.log("🎯 Full Landing Page Data:", landingPageData);
  console.log("🎬 Hero Video URL:", landingPageData?.heroSection?.heroVideo);
  console.log(
    "⚙️ Forti System Video URL:",
    landingPageData?.fortiSystemSection?.fortiSystemVideo,
  );

  // Extract video URLs
  const heroVideoUrl = landingPageData?.heroSection?.heroVideo;
  const fortiSystemVideoUrl =
    landingPageData?.fortiSystemSection?.fortiSystemVideo;

  // Build problem data with Sanity images
  const problemData = {
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
            url:
              landingPageData?.problemSection?.problemImage1?.asset?.url ||
              "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=900&auto=format&fit=crop",
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
            url:
              landingPageData?.problemSection?.problemImage2?.asset?.url ||
              "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=900&auto=format&fit=crop",
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
            url:
              landingPageData?.problemSection?.problemImage3?.asset?.url ||
              "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=900&auto=format&fit=crop",
          },
        },
        tag: "Supply Chain",
      },
    ],
  };

  // Build solution data with Sanity image
  const solutionImage =
    landingPageData?.solutionSection?.solutionImage?.asset?.url;

  // Build magic data with Sanity images
  const magicImages = {
    step1: landingPageData?.magicSection?.magicImage1?.asset?.url,
    step2: landingPageData?.magicSection?.magicImage2?.asset?.url,
    step3: landingPageData?.magicSection?.magicImage3?.asset?.url,
  };

  // Build forti box data with Sanity images
  const fortiBoxImages = {
    image1: landingPageData?.fortiBoxSection?.fortiBoxImage1?.asset?.url,
    image2: landingPageData?.fortiBoxSection?.fortiBoxImage2?.asset?.url,
  };

  // Build partners data with Sanity logos - map from Sanity format to component format
  const partnersData =
    landingPageData?.partnersSection?.partnerLogos?.map((partner: any) => ({
      alt: partner.partnerName || "Partner logo",
      src: partner.logo?.asset?.url || "",
      height: 50, // Default height for all partner logos
    })) || [];

  return (
    <main>
      <section id="home">
        <HeroSection heroVideoUrl={heroVideoUrl} />
      </section>
      <OurPartners />
      <section id="solutions">
        <FortiSystem fortiSystemVideoUrl={fortiSystemVideoUrl} />
        <TheProblem data={problemData} />
      </section>
      <section id="how-it-works">
        <TheSolution solutionImageUrl={solutionImage} />
        <BrandedMarquee />
        <TheMagic magicImages={magicImages} />
      </section>
      <section id="use-cases">
        <UseCases />
      </section>
      <section id="forti-box">
        <Fortibox fortiBoxImages={fortiBoxImages} />
        <BrandedMarquee />
      </section>
      <section id="forti-insights">
        <PrepTime />
        <FortiInsights />
      </section>
      <section id="forti-contact">
        <FortiContact />
      </section>
    </main>
  );
}

export default page;
