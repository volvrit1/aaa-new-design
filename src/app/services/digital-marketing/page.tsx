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
        title=" "
        title1=" "
        title2=" Digital Marketing: Boost Your Online Presence with Expert Strategies"
        colorTitle1="#EE3639"
        colorTitle2="#"
        description="In today's fast-moving digital age, you need more than a website to stand out. Our digital marketing services are engineered to make you visible, connect with your audience, and convert. From SEO to social media, we develop tailored campaigns that drive results and make your brand successful online."
        link={"tel:0411 537 183"}
        breadcrumb={breadcrumbPaths}
      />
      <div className="bg-white">
        <MarketingDevSolutions />
        <AiDevProcess />
        {/* <SaasTech /> */}
        <WeServe />
        <WhyChooseAgency />
        <NewProject />
        <Faq />
        <Contact />
      </div>
    </div>
  );
}
