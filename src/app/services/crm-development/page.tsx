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
        title=" "
        title1="  "
        title2="Empowering Businesses with Custom CRM Solutions for Better Customer Relationships"
        colorTitle1="#EE3639"
        colorTitle2="#"
        description="We are experts in  developing custom CRM solutions that revolutionize the process of managing customer relationships for businesses. Our secure, innovative, and scalable CRM systems are engineered to maximize customer interaction, simplify operations, and fuel sustainable business expansion. From easy integration to intuitive interfaces, we enable you to thrive in a rapidly customer-oriented world."
        link={"tel:0411 537 183"}
        breadcrumb={breadcrumbPaths}
      />
      <div className="bg-white">
        <CrmDevSolutions />
        <OurCrmDevProcess />
        <WeServe />
        <WhyChooseAgency />
        <NewProject />
        <Faq />
        <Contact />
      </div>
    </div>
  );
}
