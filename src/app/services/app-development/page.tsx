import HeroSection from "@/app/components/common/HeroSection";
import React from "react";
import AppDevSolutions from "./components/AppDevSolutions";
import OurAppDevProcess from "./components/OurAppDevProcess";
import WeServe from "@/app/components/home/WeServe";
import WhyChooseAgency from "../web-development/componnets/WhyChooseAgency";
import NewProject from "../web-development/componnets/NewProject";
import Faq from "@/app/components/common/Faq";
import Contact from "@/app/components/common/Contact";

export default function page() {
  return (
    <div>
      {" "}
      <HeroSection
        title="Innovative  "
        title1=" App Development Solutions "
        title2=" to Transform Your Business"
        colorTitle1="#EE3639"
        colorTitle2="#"
        description="We specialize in developing customized mobile apps that drive growth and user engagement. With advanced technology and an in-depth knowledge of your business, we deliver unique app solutions that revolutionize user experiences and strengthen your brand."
        link={"tel:0411 537 183"}
      />
      <div className="bg-white">
        <AppDevSolutions />
        <OurAppDevProcess />
        <WeServe />
        <WhyChooseAgency />
        <NewProject />
        <Faq />
        <Contact />
      </div>
    </div>
  );
}
