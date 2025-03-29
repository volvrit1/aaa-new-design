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
        title=""
        title1=""
        title2="Driving Your IT Success with Advanced Solutions at Above All Agency"
        colorTitle1="#EE3639"
        colorTitle2="#"
        description="We don't just deliver services – we make digital success stories. Our team of visionary professionals specializes in providing high-impact, customized solutions to help lift your business to greater heights. Combining creativity with innovative technology, we are your partners in the complexities of the dynamic digital world."
        link={"tel:0411 537 183"}
      />
      <div className="bg-white">
        <Achievements2 />
        <Vision />
        <Partner />
        <OurCoreValue />
        <OurClients />
        {/* <Team /> */}
        <JoinUs />
        <Contact />
      </div>
    </div>
  );
}
