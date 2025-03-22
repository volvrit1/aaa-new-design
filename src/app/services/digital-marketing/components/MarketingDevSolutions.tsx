import { image } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MarketingDevSolutions() {
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
          <span className="text-gray-800">Comprehensive </span>
          {"  SaaS Development "}
          <span className="text-gray-800">
            Services for Scalable and Secure Solutions
          </span>
        </h2>
        <p
          className={`text-gray-800 text-sm sm:text-base line-clamp-3 md:line-clamp-none  mt-4`}
        >
          {
            "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices."
          }
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-4">
        {[
          {
            title: "Search Engine Optimization (SEO)",

            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices.",
            image: "/assets/ai/ml.png",
          },
          {
            title: "Social Media Marketing",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices.",
            image: "/assets/ai/nl.png",
          },
          {
            title: "Search Engine Marketing",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices.",
            image: "/assets/ai/bi.png",
          },
          {
            title: "Email Marketing",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices.",
            image: "/assets/ai/gi.png",
          },
          {
            title: "Content Marketing",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices.",
            image: "/assets/ai/ca.png",
          },
          {
            title: "Paid Advertising (PPC)",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices.",
            image: "/assets/ai/ai.png",
          },
        ].map((service, index) => (
          <div
            key={index}
            className={`w-full lg:min-h-[65vh] 2xl:min-h-auto font-[poppins] rounded-none border border-black p-8 flex flex-col justify-between items-start `}
          >
            <p className="w-14 h-14 text-black font-semibold text-3xl p-2 mb-0 relative">
              {"0"}
              {index + 1}{" "}
              <span className="bg-[#EE3639] inline-block w-14 absolute top-1/2 -translate-y-1/2  left-[3.5rem] h-1.5 rounded-full"></span>
            </p>
            <h2 className="text-gray-900 font-semibold text-xl w-full mx-auto text-left mb-2 relative">
              {service?.title}
            </h2>
            <p className="font-[poppins] tracking-widest text-gray-800  font-light text-sm/5 w-full mx-auto text-left mb-12">
              {service?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
