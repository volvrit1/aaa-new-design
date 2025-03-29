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
        title=""
        title1=""
        title2="UI/UX Design: Crafting Exceptional User Experiences"
        colorTitle1="#EE3639"
        colorTitle2="#"
        description="Our UI/UX design services are focused on creating intuitive, visually stunning, and user-oriented designs that win. By blending creativity and strategic thinking, we craft seamless experiences that leave lasting impressions on users. Let us help you drive customer satisfaction and boost your online presence through designs that are as lovely as they are effective."
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
