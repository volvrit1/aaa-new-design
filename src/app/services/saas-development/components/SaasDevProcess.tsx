import { image } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SaasDevProcess() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4">
      <div className="lg:w-5/6 m-auto mt-6 lg:mt-0 mb-10 md:mb-18 text-center">
        <h2
          className={`text sm:text-lg font-semibold tracking-widest 
                 text-gray-800
               mb-3`}
        >
          Our Process
        </h2>
        <h2
          className={`lg:w-5/6 m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl font-semibold xl:text-3xl text-[#EE3639]  mb-4 `}
        >
          {"  Our SaaS Development Process: "}
          <span className="text-gray-800">
            {" "}
            From Vision to Scalable Success
          </span>
        </h2>
        <p
          className={`text-gray-800 text-sm sm:text-base line-clamp-3 md:line-clamp-none  mt-4`}
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
            className={`w-full font-[poppins] lg:p-6 flex flex-col justify-between items-start ${index>0 && "lg:border-l-2 border-[#EE3639]"}`}
          >
            <p className="w-14 h-14 font-medium text-black text-2xl flex justify-center items-center mb-2 text-center rounded-full border border-black">
              {"0"}
              {index + 1}
            </p>
            <h2 className="text-gray-800 font-semibold text-xl mt-2 w-full mx-auto text-left mb-3 relative">
              {service?.title}
            </h2>
            <p className="font-[poppins] tracking-widest text-gray-800   text-sm/5 w-full mx-auto text-left mb-8">
              {service?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
