import HeroSection from "@/app/components/common/HeroSection";
import React from "react";
import Contact from "@/app/components/common/Contact";
import Faq from "@/app/components/common/Faq";
import WeServe from "@/app/components/home/WeServe";
import NewProject from "../web-development/componnets/NewProject";
import WhyChooseAgency from "../web-development/componnets/WhyChooseAgency";
import UiUxDevSolutions from "./components/UiUxDevSolutions";
import UiUxDevProcess from "./components/UiUxDevProcess";


export default function page() {
  const breadcrumbPaths = [
    { label: "Home", href: "/" },
    { label: "UI/UX Designing", href: "/services/ux-ui-designing" },
  ];
  return (
    <div>
      <HeroSection
        title="Crafting Engaging and "
        title1="  User-Centric UX/UI Designs "
        title2="  for Exceptional Digital Experiences"
        colorTitle1="#EE3639"
        colorTitle2="#"
        description="A Next-Gen Firm Revolutionizing the Digital Landscape with Seamless, Result-Driven, and Cost-Effective Services and Solutions. We specialize in transforming businesses using cutting-edge technologies, providing tailor-made solutions that meet your unique needs. "
        link={"tel:0411 537 183"}
        breadcrumb={breadcrumbPaths}
      />
      <div className="bg-white">
        <UiUxDevSolutions />
        <UiUxDevProcess />
        <WeServe />
        <WhyChooseAgency />
        <NewProject />
        <Faq />
        <Contact />
      </div>
    </div>
  );
}
