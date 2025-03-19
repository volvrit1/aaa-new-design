import { image } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function OurAppDevProcess() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4">
      <div className="lg:w-5/6 m-auto mb-18 text-center">
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
          {"  Our App Development Process "}
          <span className="text-gray-800">
            : From Concept to Scalable, High-Performance Apps
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
      <div className="grid grid-cols-1">
        {[
          {
            title: "01. Ideation",

            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. ",
            image: "/assets/appdev/idea.png",
          },
          {
            title: "02. Market Research",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. ",
            image: "/assets/appdev/market.png",
          },
          {
            title: "03. Technical Analysis",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. ",
            image: "/assets/appdev/data.png",
          },
          {
            title: "04. Prototyping",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. ",
            image: "/assets/appdev/graphic.png",
          },
          {
            title: "05. Design & Development",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. ",
            image: "/assets/appdev/launch.png",
          },
          {
            title: "06. Deployment & Maintance",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. ",
            image: "/assets/appdev/prototype.png",
          },
        ].map((service, index) => (
          <div
            key={index}
            className={`w-full h-52 font-[cabin] rounded-none border-[#EE3639] px-8 relative flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            } items-start gap-4 `}
          >
            <Image
              width={400}
              height={400}
              alt="image"
              src={service?.image}
              className="w-24 h-24 object-contain rounded-xl mb-4"
            />
            <div className="lg:w-96">
              <h2 className="text-gray-900 font-semibold text-3xl w-full mx-auto text-left mb-2">
                {service?.title}
              </h2>
              <p className="font-[cabin] tracking-widest text-gray-900  font-light text-sm/5 text-left mb-12">
                {service?.description}
              </p>
            </div>
            <Image
              width={400}
              height={400}
              alt="image"
              src={index%2===0 ? "/assets/appdev/rightArrow.png" : "/assets/appdev/leftArrow.png"}
              className={`w-32 h-36 absolute bottom-[-4rem] ${index%2===0?"left-[40%]":"right-[40%]"}  z-[5000]  object-contain rounded-xl mb-4`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
