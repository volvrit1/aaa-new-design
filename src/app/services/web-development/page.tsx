import HeroSection from "@/app/components/common/HeroSection";
import React from "react";
import DevSolutions from "./componnets/DevSolutions";
import StreamlineProcess from "./componnets/StreamlineProcess";
import OurWork from "./componnets/OurWork";
import WeServe from "@/app/components/home/WeServe";
import TechStack from "./componnets/TechStack";
import NewProject from "./componnets/NewProject";
import Faq from "@/app/components/common/Faq";
import Contact from "@/app/components/common/Contact";
import WhyChooseAgency from "./componnets/WhyChooseAgency";
import OurWorkSwiper from "./componnets/OurWorkSwiper";

export default function page() {
  return (
    <div>
      <HeroSection
        title="Cutting-Edge "
        title1=" Web Development Solutions "
        title2="to Elevate Your Digital Presence"
        colorTitle1="#EE3639"
        colorTitle2="#"
        description="A Next-Gen Firm Revolutionizing the Digital Landscape with Seamless, Result-Driven, and Cost-Effective Services and Solutions. We specialize in transforming businesses using cutting-edge technologies, providing tailor-made solutions that meet your unique needs. "
        link={"tel:0411 537 183"}
      />
      <div className="bg-white">
        <DevSolutions />
        <StreamlineProcess />
        <OurWorkSwiper />
        <WeServe />
        <TechStack />
        <NewProject />
        <WhyChooseAgency />
        <Faq />
        <Contact />
      </div>
    </div>
  );
}
