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
        title=""
        title1="  "
        title2="Building Scalable, Custom SaaS Solutions for Future-Ready Businesses"
        colorTitle1="#EE3639"
        colorTitle2="#"
        description="We excel at designing durable, scalable SaaS products that drive business efficacy. From ideation to high-volume deployment, we empower companies to innovate and lead innovation, providing customised solutions for frictionless growth and operational excellence."
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
