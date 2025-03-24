import Clients from "@/app/components/common/Clinets";
import ContentSection from "@/app/components/common/ContentSection";
import HeroSection from "@/app/components/common/HeroSection";
import React from "react";
import Faq from "@/app/components/common/Faq";
import Contact from "@/app/components/common/Contact";
import OilGasServices from "./components/OilGasServices";
import EvolvingOilGas from "./components/EvolvingOilGas";

export default function page() {
  const breadcrumbPaths = [
    { label: "Home", href: "/" },
    { label: "Health Care", href: "/industries/health-care" },
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
      <Clients />
      <ContentSection
        title={"Oil and Gas Software Development Services We Offer"}
        children={[
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
        ]}
      />
      <OilGasServices />
      <EvolvingOilGas />
      <Faq />
      <Contact />
    </div>
  );
}
