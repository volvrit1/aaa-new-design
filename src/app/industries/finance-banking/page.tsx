import Clients from "@/app/components/common/Clinets";
import ContentSection from "@/app/components/common/ContentSection";
import HeroSection from "@/app/components/common/HeroSection";
import React from "react";
import Faq from "@/app/components/common/Faq";
import Contact from "@/app/components/common/Contact";
import EcommerceDevelopment from "../retails-e-commerce/components/EcommerceDevelopment";
import OurWorkCutting from "../retails-e-commerce/components/OurWorkCutting";
import WeAreYourPartner from "../health-care/components/WeAreYourPartner";
import OilGasServices from "../oil-gas-energy/components/OilGasServices";
import Benefit from "../health-care/components/Benefit";

export default function page() {
  const breadcrumbPaths = [
    { label: "Home", href: "/" },
    { label: "E-Commerce Development", href: "/industries/retails-e-commerce" },
  ];

  const ecommeceDevContent = {
    title:
      "Top categories of financial platforms by Banking Software app development company",
    description:
      "Here’s what a top-notch Banking Software app development company has got for you:",
    data: [
      "Peer to peer lending and investing",
      "Online banking",
      "Money investment",
      "Financial forecasting",
      "Money management",
      "Book keeping",
    ],
  };

  const nextGenContent = {
    title:
      "Types of financial modules by top Banking Software app development company",
    description:
      "We adopt a rapid and reliable approach with the best E-commerce services for organizations to achieve their business goals. Eager to know what our expertise can contribute to your business? Here we go!",
    data: [
      "Transactions",
      "Accounts management",
      "Mobile app/website",
      "Payment management",
      "Ledger management",
    ],
  };

  const OurWorkData = [
    {
      title: "Esteem Finance",
      href: "https://www.esteemfinance.co.nz",
      image: "/assets/esteem.png",
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
      title: "TJGIRVI",
      href: "https://www.tjgirvi.com",
      image: "/assets/tjgrivi.png",
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

  const benifit = [
    "Strict NDA to protect IP Rights",
    "Certified & Vetted Developers",
    "Long term Support & Maintenance",
    "Flexible Hiring Models",
    "Agile Development",
    "Long term Support & Maintenance",
  ];

  const WeAreYourData = {
    title:
      "There are several factors driving the growth of the fintech market.",
    content: [
      {
        title: "Increasing adoption of mobile and online banking",
        description:
          "The growing popularity of mobile devices and the internet is driving the adoption of fintech applications, as they allow for easy access to financial services.",
      },
      {
        title: "Digital payments and e-commerce",
        description:
          "Fintech applications can be used to facilitate digital payments and e-commerce, which is becoming increasingly popular as more and more people shop online.",
      },
      {
        title: "Digital lending",
        description:
          "Fintech applications can be used to facilitate digital lending, which can help to increase access to credit for individuals and small businesses.",
      },
      {
        title: "Blockchain and Cryptocurrency",
        description:
          "Fintech applications can be used to facilitate transactions and payments using blockchain technology and cryptocurrencies, which can provide a more secure and efficient way of doing transactions.",
      },
    ],
  };

  const FinanceService = [
    {
      title: "Custom Mobile Banking Software Development",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      title: "Custom EVM Software Development",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      title: "Lending Software Development",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      title: "Banking CRM Development",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      title: "Investment Management Software Development",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      title: "Payment Processing Development",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      title: "Wealth Management",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
  ];

  return (
    <div>
      <HeroSection
        title="Revolutionize Your Banking Operations: Next-Gen Software Development"
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
        <EcommerceDevelopment
          title={ecommeceDevContent?.title}
          description={ecommeceDevContent?.description}
          data={ecommeceDevContent?.data}
          textColor={"text-gray-800"}
        />
        <EcommerceDevelopment
          title={nextGenContent?.title}
          description={nextGenContent?.description}
          data={nextGenContent?.data}
          textColor={"text-gray-800"}
        />
        <ContentSection
          title={"Banking Software Development Services We Offer"}
          children={[
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          ]}
        />
        <OilGasServices data={FinanceService} />
        <ContentSection
          title={
            "Automate Finance And Banking With Custom-Built Fintech Application"
          }
          children={[
            "We are a top fintech app development company that revolutionizes how people purchase, pay, and invest. Our IT professionals have the fintech domain knowledge and experience to deliver the best-engineered, highly scalable, and secure fintech solutions.From developing an entirely new customized fintech app or modernizing an existing one, our Fintech software experts do it all with efficacy.",
            "Our automated and customized fintech app development services help businesses secure their business processes and financial transactions using state-of-the-art technologies. By doing so, we will help you make smart business decisions based on real insights.",
          ]}
        />
        <WeAreYourPartner
          title={WeAreYourData?.title}
          data={WeAreYourData?.content || []}
        />
        <ContentSection
          title={""}
          children={[
            "The future of fintech applications looks promising, as more and more financial institutions are expected to adopt fintech solutions to improve their operations and stay competitive. As the market continues to grow, it is likely that we will see more innovation and new fintech applications and features emerge in the coming years.",
          ]}
        />{" "}
        <Benefit
          title={
            "Accelerate Digital Transformation With High-Performing Financial Apps"
          }
          data={benifit}
        />
        <OurWorkCutting
          title={"Showcasing our work cutting-edge Fintech Industry"}
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
