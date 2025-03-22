import HeroSection from "@/app/components/common/HeroSection";
import React from "react";
import AiDevProcess from "./components/BlockChainDevProcess";
import Contact from "@/app/components/common/Contact";
import Faq from "@/app/components/common/Faq";
import WeServe from "@/app/components/home/WeServe";
import NewProject from "../web-development/componnets/NewProject";
import WhyChooseAgency from "../web-development/componnets/WhyChooseAgency";
import SaasTech from "./components/BlockChainTech";
import BlockChainDevSolutions from "./components/BlockChainDevSolutions";
import BlockChainDevProcess from "./components/BlockChainDevProcess";
import BlockChainTech from "./components/BlockChainTech";


export default function page() {
  const breadcrumbPaths = [
    { label: "Home", href: "/" },
    { label: "Blockchain Development", href: "/services/blockchain-development" },
  ];
  return (
    <div>
      <HeroSection
        title="Secure & Scalable   "
        title1=" Blockchain Development "
        title2=" Solutions for the Future"
        colorTitle1="#EE3639"
        colorTitle2="#"
        description="A Next-Gen Firm Revolutionizing the Digital Landscape with Seamless, Result-Driven, and Cost-Effective Services and Solutions. We specialize in transforming businesses using cutting-edge technologies, providing tailor-made solutions that meet your unique needs. "
        link={"tel:0411 537 183"}
        breadcrumb={breadcrumbPaths}
      />
      <div className="bg-white">
        <BlockChainDevSolutions />
        <BlockChainDevProcess />
        <BlockChainTech />
        <WeServe />
        <WhyChooseAgency />
        <NewProject />
        <Faq />
        <Contact />
      </div>
    </div>
  );
}
