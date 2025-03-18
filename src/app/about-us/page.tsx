import HeroSection from "@/app/components/common/HeroSection";
import React from "react";
import Achievements2 from "./components/Achievements2";
import Vision from "./components/Vision";
import Partner from "./components/Partner";
import OurCoreValue from "./components/OurCoreValue";
import OurClients from "./components/OurClients";
import Team from "./components/Teem";
import JoinUs from "./components/JoinUs";
import Contact from "@/app/components/common/Contact";

export default function page() {
  return (
    <div>
      <HeroSection
        title="Your Success Is Our Mission Meet The Team At"
        title1=" All Above Agency"
        title2=""
        colorTitle1="#EE3639"
        colorTitle2="#"
        description="A Next-Gen Firm Revolutionizing the Digital Landscape with Seamless, Result-Driven, and Cost-Effective Services and Solutions. We specialize in transforming businesses using cutting-edge technologies, providing tailor-made solutions that meet your unique needs. "
        link={"tel:+91424242424"}
      />
      <Achievements2 />
      <Vision />
      <Partner />
      <OurCoreValue />
      <OurClients />
      <Team />
      <JoinUs />
      <Contact />
    </div>
  );
}
