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

function page() {
  return (
    <main>
      <section id="home">
        <HeroSection />
      </section>
      <OurPartners />
      <section id="solutions">
        <FortiSystem />
        <TheProblem />
      </section>
      <section id="how-it-works">
        <TheSolution />
        <BrandedMarquee />
        <TheMagic />
      </section>
      <section id="use-cases">
        <UseCases />
      </section>
      <section id="forti-box">
        <Fortibox />
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
