import { image } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AiDevSolutions() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4">
      <div className="lg:w-5/6 m-auto mt-6 lg:mt-0 mb-10 md:mb-18 text-center">
        <h2
          className={`text sm:text-lg font-semibold tracking-widest 
                 text-gray-800
               mb-3`}
        >
          We Are Creative Agency
        </h2>
        <h2
          className={`lg:w-5/6 m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold text-[#EE3639]  mb-4 `}
        >
          <span className="text-gray-800">
            Empowering Business Success Through Advanced AI and Creative
            Solutions
          </span>
        </h2>
        <p
          className={`text-gray-800 text-sm sm:text-base line-clamp-3 md:line-clamp-none  mt-4`}
        >
          {
            "At our core, we bring together advanced AI solutions and innovative strategies to reimagine business processes. We are committed to delivering tailored services that yield actual outcomes and foster long-term business growth."
          }
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-2 gap-4">
        {[
          {
            title: "Machine Learning",

            description:
              "Machine learning is changing the manner in which businesses conduct their operations, allowing systems to learn from data and get better automatically over time. We utilize advanced algorithms to improve accuracy and decision-making, driving business performance.",
            image: "/assets/ai/ml.png",
          },
          {
            title: "Natural Language Processing",
            description:
              "Natural Language Processing (NLP) enables machines to read, comprehend, and produce human language. We develop AI-driven solutions that facilitate communication, customer interaction, and automation through sophisticated NLP methodologies.",
            image: "/assets/ai/nl.png",
          },
          {
            title: "Business Intelligence",
            description:
              "Through AI-driven business intelligence, we empower organizations to make raw data insightful. Our products allow for decision-making based on data, thereby opening up strategic advantages that enhance success and productivity.",
            image: "/assets/ai/bi.png",
          },
          {
            title: "Generative AI",
            description:
              "Generative AI uses the power of algorithms to generate new, innovative content and solutions. We use this technology to build tailored, scalable solutions that fit your specific business requirements.",
            image: "/assets/ai/gi.png",
          },
          {
            title: "Chatbot Applications",
            description:
              "Our chatbots are powered by AI, offering personalized customer care, automating processes, and driving user engagement. Our bots improve customer interactions with timely, accurate responses, 24/7.",
            image: "/assets/ai/ca.png",
          },
          {
            title: "AI Powered App Development",
            description:
              "We develop AI-powered apps that improve user experience. From automating to expanding functionality, our apps are designed to integrate into existing systems easily and streamline business processes.",
            image: "/assets/ai/ai.png",
          },
        ].map((service, index) => (
          <div
            key={index}
            className={`w-full font-[poppins] rounded-none border border-black p-4 lg:p-8 flex flex-col justify-between items-start `}
          >
            <Image
              width={400}
              height={400}
              alt="image"
              unoptimized
              priority
              src={service?.image}
              className="w-24 h-24 object-contain rounded-xl mb-4"
            />
            <h2 className="text-gray-900 font-medium text-2xl w-full mx-auto text-left mb-4 relative">
              {service?.title}
              <span className="inline-block w-16 h-1 bg-[#EE3639] absolute left-0 bottom-[-5px] rounded-full"></span>
            </h2>
            <p className="font-[poppins] tracking-widest text-gray-700 mt-3 font-light text-base/5 w-full mx-auto text-left mb-6">
              {service?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
