import { image } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MarketingDevProcess() {
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
          <span className="text-gray-800"> Our Strategic</span>
          {"  Digital Marketing Process "}
          <span className="text-gray-800"> for Maximum Reach and Impact</span>
        </h2>
        <p
          className={`text-gray-800 text-sm sm:text-base line-clamp-3 md:line-clamp-none  mt-4`}
        >
          {
            "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices."
          }
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-2">
        {[
          {
            title: "Requirement Understanding",

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
            title: "Execution",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. ",
            image: "/assets/ai/proof1.png",
          },
          {
            title: "Reporting",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions.",
            image: "/assets/ai/proof2.png",
          },
        ].map((service, index) => (
          <div
            key={index}
            className={`w-full font-[poppins] lg:p-6 flex justify-between items-start `}
          >
            <div className="w-1/3">
              <p className="font-semibold text-6xl lg:text-8xl text-[#EE3639] text-center ">
                {"0"}
                {index + 1}
              </p>
            </div>
            <div className="w-2/3">
              <h2 className="text-gray-800 font-semibold text-lg w-full mx-auto text-left mb-3 relative">
                {service?.title}
              </h2>
              <p className="font-[poppins] tracking-widest text-gray-800   text-sm/5 w-full mx-auto text-left mb-8">
                {service?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
