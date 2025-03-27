import Clients from "@/app/components/common/Clinets";
import HeroSection from "@/app/components/common/HeroSection";
import React from "react";
import ELearning from "./components/ELearning";
import EcommerceDevelopment from "../retails-e-commerce/components/EcommerceDevelopment";
import WhyConnect from "./components/WhyConnect";
import OilGasServices from "../oil-gas-energy/components/OilGasServices";
import EducationSystem from "./components/EducationSystem";
import OurWorkCutting from "../retails-e-commerce/components/OurWorkCutting";
import Faq from "@/app/components/common/Faq";
import Contact from "@/app/components/common/Contact";

export default function page() {
  const ELearnContent = {
    title:
      "Get engaged with a team of experts who specialize in utilizing advanced SEO and SEM techniques and utilize the latest tools to deliver outstanding results. ",
    description:
      "Get engaged with a team of experts who specialize in utilizing advanced SEO and SEM techniques and utilize the latest tools to deliver outstanding results. Our tailored, proven methods will not only boost your business but also help you save money on ad spend each month. Our online marketing experts follow unique methods to ensure a positive image of your brand is upheld in the eyes of your customers.",
    data: [
      "Virtual Classrooms",
      "Data Security",
      "Online Progress Assessment",
      "Gamification of Courses",
      "Video Content Streaming",
      "lean & easy UI/UX",
    ],
  };

  const EducationService = [
    {
      title: "Corporate Training Apps",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      title: "Induction and Orientation Apps",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      title: "Employee Engagement Apps",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      title: "Skill Boosting Apps",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      title: "Tuition Apps",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      title: "E2c e-Learning App Development ",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      title: "Virtual Classrooms and Video Confrerencing",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      title: "LMS Development",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
  ];

  const OurWorkData = [
    {
      title: "Hebrew Academy",
      href: "https://www.hebrewacademy.co.nz",
      image: "/assets/heybrew.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      link: "/industry",
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
        title="Custom E-Learning Development: Tailored to Your Unique Needs"
        title1=""
        title2=""
        colorTitle1="#EE3639"
        colorTitle2="#"
        description="Stop throwing money at marketing that doesn't work. We focus on data-driven strategies that drive tangible results. From increased website traffic to higher conversion rates, we'll help you achieve your business goals. Let's talk about your growth."
        link={"tel:0411 537 183"}
      />
      <div className="bg-gray-50">
        <Clients />
        <ELearning />
        <EcommerceDevelopment
          title={ELearnContent?.title}
          description={""}
          data={ELearnContent?.data}
          textColor="text-gray-800"
        />
        <WhyConnect
          title={
            "Why Should You Connect withan eLearning App Development Company?"
          }
          description={
            "While incorporating technologies into mobile apps, our elearning app development company successfully replaces traditional four-walled classrooms with digital ones. To win against the competitive edge and bring a tech revolution, get in touch with our leading elearning app development company and bring the maximum outputs to your digitalized journey. Here are other benefits you will have while collaborating with us."
          }
          data={[
            "Save Time & Resources ",
            "Promotes flexibility",
            "Scalable learning",
            "Mass adoption",
          ]}
        />
        <EcommerceDevelopment
          title={""}
          description={""}
          data={[
            "Subscription",
            "Freemium",
            "Course Fee",
            "In-App Ads",
            "In-App Purchases",
            "Paid Installs",
          ]}
          textColor="text-gray-800"
        />
        <OilGasServices data={EducationService} />
        <EducationSystem />
        <EcommerceDevelopment
          title={"Advanced Features To Include In An eLearning Platform"}
          description={""}
          data={[
            "Voice Command",
            "Real Time Analytics",
            "Multiple Language Support",
            "Discussion Board",
            "LeaderBoard",
            "Quizzes and Assignments",
            "Document Management",
            "Lesson Download",
            "Chat room + Video Streaming",
          ]}
          textColor="text-gray-800"
        />
        <OurWorkCutting
          title={"Showcasing our work cutting-edge Education Industry"}
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
