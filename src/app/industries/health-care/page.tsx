import Clients from "@/app/components/common/Clinets";
import ContentSection from "@/app/components/common/ContentSection";
import HeroSection from "@/app/components/common/HeroSection";
import React from "react";
import HowAppWork from "./components/HowAppWork";
import HealthHighlights from "./components/HealthHighlights";
import WeOffer from "./components/WeOffer";
import HealthBenefit from "./components/HealthBenefit";
import WeAreYourPartner from "./components/WeAreYourPartner";
import HealthCareWork from "./components/HealthCareWork";

export default function page() {
  const breadcrumbPaths = [
    { label: "Home", href: "/" },
    { label: "Health Care", href: "/industries/health-care" },
  ];
  return (
    <div>
      {" "}
      <HeroSection
        title="Secure Healthcare Software: Protecting Patient Data and Ensuring Compliance  "
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
        title={
          " The Working Mechanism of mHealth Apps as Defined by the Best Healthcare App Development Company"
        }
        children={[
          " Since the arrival of health apps, the gap between patients and doctors gets minimized. A healthcare app development company ensures there will be no more boundaries between these two pillars of the medical sector. And, yes, they have been making this possible with exciting and robust solutions.",
          "  Since the arrival of health apps, the gap between patients and doctors gets minimized. A healthcare app development company ensures there will be no more boundaries between these two pillars of the medical sector. And, yes, they have been making this possible with exciting and robust solutions.",
        ]}
      />
      <HowAppWork />
      <ContentSection
        title={
          "Why Create a Digital Solution from the Best Healthcare App Development Company?"
        }
        children={[
          "If you belong to the healthcare industry and want to expand your reach online, connecting with a healthcare app development company like Techugo is a perfect way to succeed.",
          "Doctors can have the best use of technology while assisting patients without making them available in front of their eyes. Through video calls, and other technology advancements, healthcare app development turns conventional health-related ventures into personalized digital resources.",
          <span
            dangerouslySetInnerHTML={{
              __html: `Still in doubt about partnering with healthcare app development? <br> Don’t be worried! <br> Here are all the reasons that let you retain your brand growth while associating with the technology specialists.`,
            }}
          />,
        ]}
      />
      <HealthHighlights />
      <WeOffer />
      <HealthBenefit />
      <WeAreYourPartner />
      <HealthCareWork />
    </div>
  );
}
