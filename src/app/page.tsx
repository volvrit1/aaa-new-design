import Contact from "@/app/components/common/Contact";
import Faq from "@/app/components/common/Faq";
import HeroSection from "@/app/components/common/HeroSection";
import Achievements from "@/app/components/home/Achievements";
import Agency from "@/app/components/home/Agency";
import HIreNow from "@/app/components/home/HIreNow";
import OurLatestWork from "@/app/components/home/OurLatestWork";
import Services from "@/app/components/home/Services";
import Testimonials from "@/app/components/home/Testimonials";
import WeServe from "@/app/components/home/WeServe";
import WhyChoose from "@/app/components/home/WhyChoose";
import WiningAwards from "@/app/components/home/WiningAwards";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection
        title="Your "
        title1="IT Partner for"
        title2=" Web Development, Mobile Apps, SaaS, ERP & LMS Solutions in Sydney"
        colorTitle1="#EE3639"
        colorTitle2="#"
        description="A Next-Gen Firm Revolutionizing the Digital Landscape with Seamless, Result-Driven, and Cost-Effective Services and Solutions. We specialize in transforming businesses using cutting-edge technologies, providing tailor-made solutions that meet your unique needs. "
        link={"tel:0411 537 183"}
      />
      <Agency />
      <Services />
      <HIreNow />
      <Achievements />
      <WhyChoose />
      <OurLatestWork />
      <WiningAwards />
      <WeServe />
      <Testimonials />
      <Faq />
      <Contact />
    </div>
  );
}
