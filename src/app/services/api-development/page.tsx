import HeroSection from "@/app/components/common/HeroSection";
import React from "react";
import AppDevSolutions from "./components/ApiDevSolutions";
import OurAppDevProcess from "./components/ApiProcess";
import WeServe from "@/app/components/home/WeServe";
import WhyChooseAgency from "../web-development/componnets/WhyChooseAgency";
import NewProject from "../web-development/componnets/NewProject";
import Faq from "@/app/components/common/Faq";
import Contact from "@/app/components/common/Contact";
import ApiDevSolutions from "./components/ApiDevSolutions";
import ApiProcess from "./components/ApiProcess";

export default function page() {
  return (
    <div>
      {" "}
      <HeroSection
        title="Robust and Scalable  "
        title1=" API Development "
        title2=" for Seamless System Integration"
        colorTitle1="#EE3639"
        colorTitle2="#"
        description="A Next-Gen Firm Revolutionizing the Digital Landscape with Seamless, Result-Driven, and Cost-Effective Services and Solutions. We specialize in transforming businesses using cutting-edge technologies, providing tailor-made solutions that meet your unique needs. "
        link={"tel:0411 537 183"}
      />
      <div className="bg-white">
        <ApiDevSolutions />
        <ApiProcess />
        <WeServe />
        <WhyChooseAgency />
        <NewProject />
        <Faq />
        <Contact />
      </div>
    </div>
  );
}
