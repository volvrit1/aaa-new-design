import HeroSection from "@/app/components/common/HeroSection";
import React from "react";
import AiDevSolutions from "./components/AiDevSolutions";
import AiDevProcess from "./components/AiDevProcess";
import Contact from "@/app/components/common/Contact";
import Faq from "@/app/components/common/Faq";
import WeServe from "@/app/components/home/WeServe";
import NewProject from "../web-development/componnets/NewProject";
import WhyChooseAgency from "../web-development/componnets/WhyChooseAgency";

export default function page() {
  const breadcrumbPaths = [
    { label: "Home", href: "/" },
    { label: "Artificial Intelligence", href: "/services/artificial-intelligence" },
  ];
  return (
    <div>
      <HeroSection
        title=" "
        title1=" "
        title2="The Future of Innovation: Customised AI Solutions for Your Business Growth"
        colorTitle1="#EE3639"
        colorTitle2="#"
        description="We bring advanced AI technologies to life, empowering businesses to unlock smarter, more efficient solutions. Our vision is to harness the power of AI to drive growth and transformation across all industries."
        link={"tel:0411 537 183"}
        breadcrumb={breadcrumbPaths}
      />
      <div className="bg-white">
        <AiDevSolutions />
        <AiDevProcess />
        <WeServe />
        <WhyChooseAgency />
        <NewProject />
        <Faq />
        <Contact />
      </div>
    </div>
  );
}
