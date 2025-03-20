import { image } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function OurCrmDevProcess() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4">
      <div className="lg:w-5/6 m-auto mb-10 text-center">
        <h2
          className={`text sm:text-sm md:text-sm lg:text-sm xl:text-sm font-semibold tracking-widest 
                 text-gray-800
              leading-8 mb-3`}
        >
          Our Process{" "}
        </h2>
        <h2
          className={`lg:w-5/6 m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-  text-[#EE3639] leading-8 mb-4 `}
        >
          <span className="text-gray-800">Our Streamlined</span>
          {"  CRM Development Process "}
          <span className="text-gray-800">for Seamless Business Growth</span>
        </h2>
        <p
          className={`text-gray-800 text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[14px] line-clamp-3 md:line-clamp-none  mt-4 leading-5`}
        >
          {
            "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices."
          }
        </p>
      </div>
      <div className="grid grid-cols-1">
        {[
          {
            title: "01. Define Goals",

            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. ",
            image: "/assets/crm1.png",
          },
          {
            title: "02. Solution Architecture",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. ",
            image: "/assets/crm2.png",
          },
          {
            title: "03. Develop Data Models",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. ",
            image: "/assets/crm3.png",
          },
          {
            title: "04. Implement Security",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. ",
            image: "/assets/crm4.png",
          },
          {
            title: "05. Test and Validate",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. ",
            image: "/assets/crm5.png",
          },
        ].map((service, index) => (
          <div
            key={index}
            className={`w-full h-52 font-[cabin] rounded-none border-[#EE3639] px-8 relative flex ${
              index % 2 === 0 ? "" : "flex-row-reverse"
            } items-center gap-4 `}
          >
            <div className="border rounded-full p-2 h-44 w-44 flex justify-center items-center">
              <Image
                width={400}
                height={400}
                alt="image"
                src={service?.image}
                className="w-24 h-24 object-contain mb-4"
              />
            </div>
            <span className="tracking-tight font-xs text-gray-500">
              .........................
            </span>
            <div className="lg:w-5/12 pt-20">
              <h2
                className={`text-gray-900 font-semibold text-2xl font-[Urbanist] w-full mx-auto ${
                  index % 2 === 0 ? "text-left" : "text-right"
                } mb-2`}
              >
                {service?.title}
              </h2>
              <p
                className={`font-[cabin] tracking-widest text-gray-900  font-light text-sm/5 ${
                  index % 2 === 0 ? "text-left" : "text-right"
                }`}
              >
                {service?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
