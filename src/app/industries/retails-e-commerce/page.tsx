import Clients from "@/app/components/common/Clinets";
import ContentSection from "@/app/components/common/ContentSection";
import HeroSection from "@/app/components/common/HeroSection";
import React from "react";
import Consumer from "./components/Consumer";
import EcommerceApp from "./components/EcommerceApp";
import EcommerceDevelopment from "./components/EcommerceDevelopment";
import WhyChooseEccommerceService from "./components/WhyChooseEccommerceService";
import EcommerceDevProcess from "./components/EcommerceDevProcess";
import OurWorkCutting from "./components/OurWorkCutting";
import Faq from "@/app/components/common/Faq";
import Contact from "@/app/components/common/Contact";

export default function page() {
  const breadcrumbPaths = [
    { label: "Home", href: "/" },
    { label: "E-Commerce Development", href: "/industries/retails-e-commerce" },
  ];

  const ecommeceDevContent = {
    title: "Ecommerce Development Services",
    description:
      "We adopt a rapid and reliable approach with the best E-commerce services for organizations to achieve their business goals. Eager to know what our expertise can contribute to your business? Here we go!",
    data: [
      "E-commerce Consulting",
      "Hosting and Infrastructure Management",
      "Manage and Maintain Applications",
      "E-Commerce Audit",
      "Migration and Upgrades",
      "Integration",
    ],
  };

  const nextGenContent = {
    title: "Next-gen Ecommerce Solutions with Al",
    description:
      "We adopt a rapid and reliable approach with the best E-commerce services for organizations to achieve their business goals. Eager to know what our expertise can contribute to your business? Here we go!",
    data: [
      "Advanced Search",
      "Ai Enabled Similar Products ",
      "Visual Merchandising",
      "Personalised Recommendations",
      "Order Management System",
      "Search Insight / Analytics",
    ],
  };

  const OurWorkData = [
    {
      title: "Worksafe",
      href: "https://www.worksafe.com",
      image: "/assets/worksafe.png",
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
      title: "Maskeen",
      href: "https://www.maskeen.com",
      image: "/assets/maskeen.png",
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
      title: "Icon Furniture",
      href: "https://www.iconfurniture.com",
      image: "/assets/iconfurniture.png",
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
      <HeroSection
        title="Elevate Your Online Business with E-commerce App Development Company"
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
          title={
            "Why Choose All Above Agency as a Reliable E-commerce Mobile App Development Company?"
          }
          children={[
            "By catering to the clientele's passion points and attributes, All Above Agency, a leading ecommerce app development company, hears, sees, and helps its partners to resonate with their digital customer base. Within eight years, our brood of ecommerce mobile app developers have crafted 900+ dreams in the form of successful digital businesses. Our high-end channel partnerships in UAE, UK, USA, Canada, Australia, and India enable us to externalize client onboarding & maximize tech support internally to offer you elevated customer experience with minimal additional costs.",
            "All Above Agency, a prominent ecommerce app development company in India, is also pivotal in attaining extraordinary outcomes. With a track record of securing over $869 million for its clients, the company has instilled a deep understanding within its customers about the importance of innovation and the essential need for modern, technology-driven strategies.",
            "The organization is well-known for straining out the best of the best to work on an exceptional idea and turn fantasies into reality. How about partnering with the best team of ecommerce app development companies?",
          ]}
        />
        <Consumer />
        <EcommerceApp />
        <div className="bg-[#242424]">
          <EcommerceDevelopment
            title={ecommeceDevContent?.title}
            description={ecommeceDevContent?.description}
            data={ecommeceDevContent?.data}
          />
        </div>
        <WhyChooseEccommerceService />
        <EcommerceDevProcess />
        <div className="bg-[#242424]">
          <EcommerceDevelopment
            title={nextGenContent?.title}
            description={nextGenContent?.description}
            data={nextGenContent?.data}
          />
        </div>
        <OurWorkCutting
          title={"Showcasing our work cutting-edge E-commerce Industry"}
          description={
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"
          }
          data={OurWorkData}
        />

        <Faq />
        <Contact />
      </div>
    </div>
  );
}
