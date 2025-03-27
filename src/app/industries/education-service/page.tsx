import Clients from "@/app/components/common/Clinets";
import HeroSection from "@/app/components/common/HeroSection";
import React from "react";
import ELearning from "./components/ELearning";
import EcommerceDevelopment from "../retails-e-commerce/components/EcommerceDevelopment";
import WhyConnect from "./components/WhyConnect";

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
      </div>
    </div>
  );
}
