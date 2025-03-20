import { image } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SaasDevProcess() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4">
      <div className="lg:w-5/6 m-auto mb-18 text-center">
        <h2
          className={`text sm:text-sm md:text-sm lg:text-sm xl:text-sm font-semibold tracking-widest 
                 text-gray-800
              leading-8 mb-3`}
        >
          Our Process
        </h2>
        <h2
          className={`lg:w-5/6 m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl text-[#EE3639] leading-8 mb-4 `}
        >
          {"  Our SaaS Development Process: "}
          <span className="text-gray-800">
            {" "}
            From Vision to Scalable Success
          </span>
        </h2>
        <p
          className={`text-gray-800 text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[14px] line-clamp-3 md:line-clamp-none  mt-4 leading-5`}
        >
          {
            "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. "
          }
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-4">
        {[
          {
            title: "Discovery & Planning",

            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions.",
            image: "/assets/ai/discover.png",
          },
          {
            title: "Design & Prototyping",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. ",
            image: "/assets/ai/design.png",
          },
          {
            title: "Development",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. ",
            image: "/assets/ai/proof1.png",
          },
          {
            title: "Testing & Assurance",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. ",
            image: "/assets/ai/proof2.png",
          },
        ].map((service, index) => (
          <div
            key={index}
            className={`w-full font-[cabin]  p-6 flex flex-col justify-between items-start ${index>0 && "border-l-2 border-[#EE3639]"}`}
          >
            <p className="w-10 h-10 font-semibold text-base flex justify-center items-center mb-2 text-center rounded-full border ">
              {"0"}
              {index + 1}
            </p>
            <h2 className="text-gray-800 font-semibold text-lg w-full mx-auto text-left mb-3 relative">
              {service?.title}
            </h2>
            <p className="font-[cabin] tracking-widest text-gray-800   text-sm/5 w-full mx-auto text-left mb-8">
              {service?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
