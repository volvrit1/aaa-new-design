import HeroSection from "@/app/components/common/HeroSection";
import React from "react";
import AiDevProcess from "./components/MarketingDevProcess";
import Contact from "@/app/components/common/Contact";
import Faq from "@/app/components/common/Faq";
import WeServe from "@/app/components/home/WeServe";
import NewProject from "../web-development/componnets/NewProject";
import WhyChooseAgency from "../web-development/componnets/WhyChooseAgency";
import MarketingDevSolutions from "./components/MarketingDevSolutions";


export default function page() {
  const breadcrumbPaths = [
    { label: "Home", href: "/" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
  ];
  return (
    <div>
      <HeroSection
        title="Boost Your Brand's Online Presence with Data-Driven "
        title1=" Digital Marketing Solutions "
        title2=" "
        colorTitle1="#EE3639"
        colorTitle2="#"
        description="A Next-Gen Firm Revolutionizing the Digital Landscape with Seamless, Result-Driven, and Cost-Effective Services and Solutions. We specialize in transforming businesses using cutting-edge technologies, providing tailor-made solutions that meet your unique needs. "
        link={"tel:0411 537 183"}
        breadcrumb={breadcrumbPaths}
      />
      <MarketingDevSolutions />
      <AiDevProcess />
      {/* <SaasTech /> */}
      <WeServe />
      <WhyChooseAgency />
      <NewProject />
      <Faq />
      <Contact />
    </div>
  );
}
