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
        title="Revolutionary  "
        title1=" AI Development Solutions "
        title2=" to Drive Innovation & Growth"
        colorTitle1="#EE3639"
        colorTitle2="#"
        description="A Next-Gen Firm Revolutionizing the Digital Landscape with Seamless, Result-Driven, and Cost-Effective Services and Solutions. We specialize in transforming businesses using cutting-edge technologies, providing tailor-made solutions that meet your unique needs. "
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
