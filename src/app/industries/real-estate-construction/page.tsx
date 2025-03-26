import Clients from "@/app/components/common/Clinets";
import ContentSection from "@/app/components/common/ContentSection";
import HeroSection from "@/app/components/common/HeroSection";
import React from "react";
import WhyChooseRealStateService from "./components/WhyChooseEccommerceService";
import FeatureOfRealstate from "./components/FeatureOfRealstate";
import Benefit from "../health-care/components/Benefit";
import StandOut from "./components/StandOut";
import NoMatter from "./components/NoMatter";
import AdvancedTechnologyRealState from "./components/AdvancedTechnologyRealState";
import Contact from "@/app/components/common/Contact";
import Faq from "@/app/components/common/Faq";
import OurWorkCutting from "../retails-e-commerce/components/OurWorkCutting";
import ProjectInMind from "./components/ProjectInMind";

export default function page() {
  const breadcrumbPaths = [
    { label: "Home", href: "/" },
    {
      label: "Real Estate Construction",
      href: "/industries/real-estate-construction",
    },
  ];

  const benifit = [
    "Online Booking Property Solution",
    "Property Management Apps",
    "Home Search Solution",
    "Brokerage Application",
    "Centralised Realtor Solution",
    "Apartment for Rent Application",
  ];

  const advancetech = [
    "AI / ML",
    "AR / VR ",
    "AI",
    "IOT & Data Analytics",
    "Blockchain",
    "Metaverse",
  ];

  const OurWorkData = [
    {
      title: "Makaan Directory",
      href: "https://www.makaandirectory.in",
      image: "/assets/makaan.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      link: "/healthcare",
      bgColor: "bg-[#EE3639]",
      textColor: "text-gray-50",
      cardBgColor: "bg-[#242424] rounded-2xl p-8",
      pColor: "text-gray-50",
      tags: [
        "UX/UI Design Strategy",
        "Development Process",
        "Testing Phase",
        "Quality Assurance",
      ],
    },

    {
      title: "Earth Home",
      href: "https://www.earthhome.com",
      image: "/assets/earthhome.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      link: "/healthcare",
      bgColor: "bg-[#EE3639]",
      textColor: "text-gray-50",
      cardBgColor: "bg-[#242424] rounded-2xl p-8",
      pColor: "text-gray-50",
      tags: [
        "UX/UI Design Strategy",
        "Development Process",
        "Testing Phase",
        "Quality Assurance",
      ],
    },
  ];

  return (
    <div>
      {" "}
      <HeroSection
        title="Advanced Real Estate App Development: Leveraging Emerging Technologies"
        title1=""
        title2=""
        colorTitle1="#EE3639"
        colorTitle2="#"
        description="Tired of the same old social media? We're developing a platform that prioritizes meaningful interactions over fleeting trends. Imagine a space where you connect based on shared passions and build genuine communities. Join us as we redefine social networking."
        link={"tel:0411 537 183"}
        breadcrumb={breadcrumbPaths}
      />
      <div className="bg-white">
        <Clients />
        <ContentSection
          title={"Streamline The Way People Interact Across The Internet"}
          children={[
            "We are a reputed social media app development company with rich experience and expertise in developing interactive social media applications. Our engaging apps help businesses reach their targeted audience and connect them with their brand. Our custom-designed social media apps provide users with interactive conversations and generate high revenues while engaging millions of users.",
            "Our social network app development services help grow your business, improve brand visibility, market reach, and ROI. We strive to empower diverse businesses with feature-rich social media applications that widen your market reach and expansion.Our skilled social media developers develop apps for diverse platforms, including smartphones, tablets, laptops/desktops, or smart TVs, ensuring seamless user experience.",
          ]}
        />

        <WhyChooseRealStateService />
        <FeatureOfRealstate />
        <Benefit
          title={
            "Elevate Your Real Estate Business with Our Custom App Solutions"
          }
          data={benifit}
        />
        <StandOut />
        <NoMatter />
        <AdvancedTechnologyRealState title={""} data={advancetech} />

        <OurWorkCutting
          title={
            "Showcasing our work cutting-edge Real Estate & Construction Industry"
          }
          description={
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"
          }
          data={OurWorkData}
        />
        <ProjectInMind />
        <Faq />
        <Contact />
      </div>
    </div>
  );
}
