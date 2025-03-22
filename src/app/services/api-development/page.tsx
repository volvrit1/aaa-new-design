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
        description="A Next-Gen Firm Revolutionizing the Digital Landscape with Seamless, Result-Driven, and Cost-Effective Services and Solutions. We specialize in transforming businesses using cutting-edge technologies, providing tailor-made solutions that meet your unique needs. "
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
