import HeroSection from "@/app/components/common/HeroSection";
import React from "react";

import Contact from "@/app/components/common/Contact";
import Faq from "@/app/components/common/Faq";
import WeServe from "@/app/components/home/WeServe";
import NewProject from "../web-development/componnets/NewProject";
import WhyChooseAgency from "../web-development/componnets/WhyChooseAgency";
import CrmDevSolutions from "./components/CrmDevSolutions";
import OurCrmDevProcess from "./components/OurCrmDevProcess";

export default function page() {
  const breadcrumbPaths = [
    { label: "Home", href: "/" },
    { label: "Crm Development", href: "/services/crm-development" },
  ];
  return (
    <div>
      <HeroSection
        title="Transform Your Business with Powerful and Customizable   "
        title1=" CRM Development Solutions "
        title2=""
        colorTitle1="#EE3639"
        colorTitle2="#"
        description="A Next-Gen Firm Revolutionizing the Digital Landscape with Seamless, Result-Driven, and Cost-Effective Services and Solutions. We specialize in transforming businesses using cutting-edge technologies, providing tailor-made solutions that meet your unique needs. "
        link={"tel:0411 537 183"}
        breadcrumb={breadcrumbPaths}
      />
      <CrmDevSolutions />
      <OurCrmDevProcess />
      <WeServe />
      <WhyChooseAgency />
      <NewProject />
      <Faq />
      <Contact />
    </div>
  );
}
