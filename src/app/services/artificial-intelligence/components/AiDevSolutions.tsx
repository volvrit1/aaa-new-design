import { image } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AiDevSolutions() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4">
      <div className="lg:w-5/6 m-auto mb-18 text-center">
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
          <span className="text-gray-800">Cutting-Edge </span>
          {"  AI Development Services "}
          <span className="text-gray-800">for Smarter, Scalable Solutions</span>
        </h2>
        <p
          className={`text-gray-800 text-sm sm:text-base line-clamp-3 md:line-clamp-none  mt-4`}
        >
          {
            "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices."
          }
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-2 gap-4">
        {[
          {
            title: "Machine Learning",

            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices.",
            image: "/assets/ai/ml.png",
          },
          {
            title: "Natural Language Processing",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices.",
            image: "/assets/ai/nl.png",
          },
          {
            title: "Business Intelligence",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices.",
            image: "/assets/ai/bi.png",
          },
          {
            title: "Generative AI",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices.",
            image: "/assets/ai/gi.png",
          },
          {
            title: "Chatbot Applications",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices.",
            image: "/assets/ai/ca.png",
          },
          {
            title: "AI Powered App Development",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices.",
            image: "/assets/ai/ai.png",
          },
        ].map((service, index) => (
          <div
            key={index}
            className={`w-full font-[poppins] rounded-none border border-black p-8 flex flex-col justify-between items-start `}
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
