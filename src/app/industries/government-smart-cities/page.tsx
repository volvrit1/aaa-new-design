import Clients from "@/app/components/common/Clinets";
import ContentSection from "@/app/components/common/ContentSection";
import HeroSection from "@/app/components/common/HeroSection";
import React from "react";
import Faq from "@/app/components/common/Faq";
import Contact from "@/app/components/common/Contact";
import Finibus from "./components/Finibus";
import Rainforce from "./components/Rainforce";
import Hr from "./components/Hr";
import MarketingService from "./components/MarketingService";
import Entrust from "./components/Entrust";
import MarketingTools from "./components/MarketingTools";
import ResultDriven from "../health-care/components/ResultDriven";
import EcommerceDevelopment from "../retails-e-commerce/components/EcommerceDevelopment";
import WhyNeeds from "./components/WhyNeeds";

export default function page() {
  const breadcrumbPaths = [
    { label: "Home", href: "/" },
    { label: "Health Care", href: "/industries/health-care" },
  ];

  const benifit = [
    "Hospitals & Clinic",
    "Government Health Department",
    "Pharmaceuticals Companies ",
    "Health tech Startup",
    "Government Health Department",
    "Research Institution",
    "Diagnostic Laboratories ",
    "Home Health Care Provider",
    "Health Care NGOs",
    "Fitness & Wellness Center",
    "Healthcare Insurance Provider",
    "Biotechnology Firms",
    "Rehabilitation Center",
    "Academic Medical Center",
    "Telemedicine Provider",
    "Medical Billing Companies ",
    "Long Terms Care Facilities  ",
    "Population Health Management Optimisation ",
    "Mental Health Facilities",
    "Clinical Research Organizations ",
    "Specialty Care Clinics ",
    "Health Information Exchange ",
    "Hospice Care Providers ",
    "Medical Biotech Companies",
  ];

  const WeAreYourData = {
    title:
      "   We Are Your Trusted Partner for Healthcare Software Development Service",
    content: [
      {
        title: "HIPAA Compliant Development Service",
        description:
          "The growing popularity of mobile devices and the internet is driving the adoption of fintech applications, as they allow for easy access to financial services.",
      },
      {
        title: "Transparent and Agile Processes",
        description:
          "Fintech applications can be used to facilitate digital payments and e-commerce, which is becoming increasingly popular as more and more people shop online.",
      },
      {
        title: "Innovative Solutions",
        description:
          "Fintech applications can be used to facilitate digital lending, which can help to increase access to credit for individuals and small businesses.",
      },
      {
        title: "Logically Designed Architecture ",
        description:
          "Fintech applications can be used to facilitate transactions and payments using blockchain technology and cryptocurrencies, which can provide a more secure and efficient way of doing transactions.",
      },
      {
        title: "Superior Code Quality ",
        description:
          "The growing popularity of mobile devices and the internet is driving the adoption of fintech applications, as they allow for easy access to financial services.",
      },
      {
        title: "Flexible Engagement Model",
        description:
          "Fintech applications can be used to facilitate digital payments and e-commerce, which is becoming increasingly popular as more and more people shop online.",
      },
    ],
  };

  const nextGenContent = {
    title:
      "Get engaged with a team of experts who specialize in utilizing advanced SEO and SEM techniques and utilize the latest tools to deliver outstanding results. ",
    description:
      "Get engaged with a team of experts who specialize in utilizing advanced SEO and SEM techniques and utilize the latest tools to deliver outstanding results. Our tailored, proven methods will not only boost your business but also help you save money on ad spend each month. Our online marketing experts follow unique methods to ensure a positive image of your brand is upheld in the eyes of your customers.",
    data: [
      "Search Engine Optimization",
      "Social Media Marketing",
      "Paid Marketing Campaign",
      "Content Marketing",
      "Online Reputation Management",
      "Conversation Rate Optimization",
      "Influencer Marketing",
      "App Store Optimization",
      "Email Marketing",
    ],
  };
  return (
    <div>
      {" "}
      <HeroSection
        title="Innovative Smart City Applications: Leveraging Cutting-Edge Technology"
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
        <Finibus />
        <Rainforce />
        <Hr />
        <ContentSection
          title={
            "Our Digital Marketing Service Team United with the Pursuit of prowess and Idiosyncrasy to Widen your Business’s Marketing Needs in a Pragmatic, Creative, Passionate, and Secure Way"
          }
          children={[
            "Let us, as a digital marketing services company, join forces and work hand in glove to achieve victory for your business objectives.",
          ]}
        />
        <MarketingService />
        <div className="bg-[#242424]">
          <Entrust />
        </div>
        <MarketingTools />
        <ResultDriven />

        <div className="bg-[#242424]">
          <EcommerceDevelopment
            title={nextGenContent?.title}
            description={nextGenContent?.description}
            data={nextGenContent?.data}
          />
        </div>

       <WhyNeeds />
        <Faq />
        <Contact />
      </div>
    </div>
  );
}
