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
        title="   "
        title1="  "
        title2="Building Secure, Scalable, and Future-Ready Blockchain Solutions"
        colorTitle1="#EE3639"
        colorTitle2="#"
        description="We specialize in crafting customized blockchain solutions that empower businesses to unlock new opportunities. From idea to widespread deployment, we drive integration of decentralized technologies in a hassle-free and frictionless way, which helps businesses increase security, transparency, and efficiency in an evolving digital landscape"
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
