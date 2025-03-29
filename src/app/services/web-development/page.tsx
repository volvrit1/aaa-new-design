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
        title=""
        title1=""
        title2="Shaping Your Digital Future – Innovative Websites That Drive Success"
        colorTitle1="#EE3639"
        colorTitle2="#"
        description="We are experts in building innovative, high-performance websites that drive business growth. With a user-centric approach with smooth functionality, we design digital solutions that make a difference"
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
