import { image } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AiDevProcess() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4">
      <div className="lg:w-5/6 m-auto mb-18 text-center">
        <h2
          className={`text sm:text-lg font-semibold tracking-widest 
                 text-gray-800
              leading-8 mb-3`}
        >
          Our Process
        </h2>
        <h2
          className={`lg:w-5/6 m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold text-[#EE3639] leading-8 mb-4 `}
        >
          {"  Our AI Development Process: "}
          <span className="text-gray-800">
            {" "}
            Transforming Ideas into Intelligent Solutions
          </span>
        </h2>
        <p
          className={`text-gray-800 text-sm sm:text-base line-clamp-3 md:line-clamp-none  mt-4 leading-5`}
        >
          {
            "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. "
          }
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-4 gap-4">
        {[
          {
            title: "Discover",

            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. ",
            image: "/assets/ai/discover.png",
          },
          {
            title: "Design",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. ",
            image: "/assets/ai/design.png",
          },
          {
            title: "Proof Of Concept",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. ",
            image: "/assets/ai/proof1.png",
          },
          {
            title: "Proof Of Concept",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. ",
            image: "/assets/ai/proof2.png",
          }
        ].map((service, index) => (
          <div
            key={index}
            className={`w-full font-[poppins] border bg-[#3D3D3D] p-8 flex flex-col justify-between items-start rounded-xl`}
          >
            <Image
              width={400}
              height={400}
              alt="image"
              src={service?.image}
              className="w-12 h-12 object-contain rounded-xl mb-4"
            />
            <h2 className="text-gray-50 font-semibold text-lg w-full mx-auto text-left mb-3 relative">
              {service?.title}
            </h2>
            <p className="font-[poppins] tracking-widest text-gray-50   text-sm/5 w-full mx-auto text-left mb-8">
              {service?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
