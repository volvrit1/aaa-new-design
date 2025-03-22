import HeroSection from "@/app/components/common/HeroSection";
import React from "react";
import AiDevProcess from "./components/SaasDevProcess";
import Contact from "@/app/components/common/Contact";
import Faq from "@/app/components/common/Faq";
import WeServe from "@/app/components/home/WeServe";
import NewProject from "../web-development/componnets/NewProject";
import WhyChooseAgency from "../web-development/componnets/WhyChooseAgency";
import SaasTech from "./components/SaasTech";
import SaasDevSolutions from "./components/SaasDevSolutions";

export default function page() {
  const breadcrumbPaths = [
    { label: "Home", href: "/" },
    { label: "Saas Development", href: "/services/saas-development" },
  ];
  return (
    <div>
      <HeroSection
        title="Scalable & Secure  "
        title1=" SaaS Development "
        title2=" Solutions to Power Your Business"
        colorTitle1="#EE3639"
        colorTitle2="#"
        description="A Next-Gen Firm Revolutionizing the Digital Landscape with Seamless, Result-Driven, and Cost-Effective Services and Solutions. We specialize in transforming businesses using cutting-edge technologies, providing tailor-made solutions that meet your unique needs. "
        link={"tel:0411 537 183"}
        breadcrumb={breadcrumbPaths}
      />
      <div className="bg-white">
        <SaasDevSolutions />
        <AiDevProcess />
        <SaasTech />
        <WeServe />
        <WhyChooseAgency />
        <NewProject />
        <Faq />
        <Contact />
      </div>
    </div>
  );
}
