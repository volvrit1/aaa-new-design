import HeroSection from "@/app/components/common/HeroSection";
import React from "react";
import DevSolutions from "./componnets/DevSolutions";

export default function page() {
  return (
    <div>
      <HeroSection
        title="Cutting-Edge "
        title1=" Web Development Solutions "
        title2="to Elevate Your Digital Presence"
        colorTitle1="#EE3639"
        colorTitle2="#"
        description="A Next-Gen Firm Revolutionizing the Digital Landscape with Seamless, Result-Driven, and Cost-Effective Services and Solutions. We specialize in transforming businesses using cutting-edge technologies, providing tailor-made solutions that meet your unique needs. "
        link={"tel:+91424242424"}
      />
      <DevSolutions />
    </div>
  );
}
