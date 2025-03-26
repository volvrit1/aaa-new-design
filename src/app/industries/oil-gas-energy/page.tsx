import Clients from "@/app/components/common/Clinets";
import ContentSection from "@/app/components/common/ContentSection";
import HeroSection from "@/app/components/common/HeroSection";
import React from "react";
import Faq from "@/app/components/common/Faq";
import Contact from "@/app/components/common/Contact";
import OilGasServices from "./components/OilGasServices";
import EvolvingOilGas from "./components/EvolvingOilGas";
import BuildNext from "./components/BuildNext";
import AdvancedTechnology from "./components/AdvancedTechnology";

export default function page() {
  const breadcrumbPaths = [
    { label: "Home", href: "/" },
    { label: "Oil & Gas", href: "/industries/oil-gas-agency" },
  ];

  const advancetech = [
    "I.O.T",
    "Data Science ",
    "Blockchain",
    "AI",
    "AR/VR",
    "Metaverse",
  ];
  return (
    <div>
      {" "}
      <HeroSection
        title="Digital Transformation for Oil & Gas: Cutting-Edge Software Solutions"
        title1=""
        title2=""
        colorTitle1="#EE3639"
        colorTitle2="#"
        description="Stop throwing money at marketing that doesn't work. We focus on data-driven strategies that drive tangible results. From increased website traffic to higher conversion rates, we'll help you achieve your business goals. Let's talk about your growth."
        link={"tel:0411 537 183"}
        breadcrumb={breadcrumbPaths}
      />
      <div className="bg-white">
        <Clients />
        <ContentSection
          title={"Oil and Gas Software Development Services We Offer"}
          children={[
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
          ]}
        />
        <OilGasServices />
        <EvolvingOilGas />
        <ContentSection
          title={
            "We Build Next - Gen Software Solutions That Revolutionise the Oil & Gas Industry "
          }
          children={[
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure.",
          ]}
        />
        <BuildNext />
        <AdvancedTechnology
          title={
            "Advanced Technologies for Powering Your Tailored Oil & Gas Software Development Solution"
          }
          data={advancetech}
        />
        <Faq />
        <Contact />
      </div>
    </div>
  );
}
