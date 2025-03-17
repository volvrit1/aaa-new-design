import Contact from "@/components/common/Contact";
import Faq from "@/components/common/Faq";
import HeroSection from "@/components/common/HeroSection";
import Achievements from "@/components/home/Achievements";
import Agency from "@/components/home/Agency";
import HIreNow from "@/components/home/HIreNow";
import OurLatestWork from "@/components/home/OurLatestWork";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import WeServe from "@/components/home/WeServe";
import WhyChoose from "@/components/home/WhyChoose";
import WiningAwards from "@/components/home/WiningAwards";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection
        title="Your "
        title1="One-Stop Tech Partner"
        title2="for Web Development, Mobile Apps, SaaS, ERP & LMS customized solution "
        colorTitle1="#EE3639"
        colorTitle2="#"
        description="A Next-Gen Firm Revolutionizing the Digital Landscape with Seamless, Result-Driven, and Cost-Effective Services and Solutions. We specialize in transforming businesses using cutting-edge technologies, providing tailor-made solutions that meet your unique needs. "
        link={"tel:+91424242424"}
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
