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
        title=""
        title1="  "
        title2="Build Smooth Integration's for Scalable Business Solutions"
        colorTitle1="#EE3639"
        colorTitle2="#"
        description="Our API development solutions build robust, scalable integrations that link your applications, automate workflows, and optimize user experiences. From bespoke APIs to third-party integrations, we craft solutions that enhance efficiency and fuel growth for your business."
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
