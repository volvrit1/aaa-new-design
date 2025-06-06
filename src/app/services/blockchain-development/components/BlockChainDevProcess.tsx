import { image } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlockChainDevProcess() {
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
          className={`lg:w-5/6 m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold text-[#EE3639]  mb-4 `}
        >
          <span className="text-gray-900">
            {" "}
            Streamlined Blockchain Development: From Concept to Launch
          </span>
        </h2>
        <p
          className={`text-gray-800 text-sm sm:text-base line-clamp-3 md:line-clamp-none  mt-4`}
        >
          {
            "Our blockchain development process is designed to deliver high-quality, scalable, and secure solutions. We handle every phase with precision, from the initial concept to full deployment, ensuring that your blockchain project meets your business needs and exceeds expectations."
          }
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-4">
        <span className="w-9/12 h-1 bg-[#242424] rounded-full absolute left-1/2 -translate-x-1/2 "></span>
        {[
          {
            title: "Execution",

            description:
              "Defining: Identifying goals, requirements, and project scope for clarity.",
            image: "/assets/bdpro1.png",
          },
          {
            title: "Designing",
            description:
              "Designing: Crafting wireframes, blueprints, and user-friendly interfaces.",
            image: "/assets/bdpro2.png",
          },
          {
            title: "Development",
            description:
              "Development: Coding, integrating features, and ensuring functionality.",
            image: "/assets/bdpro3.png",
          },
          {
            title: "Defining",
            description:
              "Execution: Implementing, testing, and launching with precision.",
            image: "/assets/bdpro4.png",
          },
        ].map((service, index) => (
          <div
            key={index}
            className={`w-full font-[poppins]  px-6 flex flex-col justify-center items-center`}
          >
            <Image
              width={400}
              height={400}
              alt="image"
              src={'/assets/downArrow.png'}
              className="w-16 h-16 object-contain rounded-xl"
            />
             <Image
              width={400}
              height={400}
              alt="image"
              src={service?.image}
              className="w-16 h-16 object-contain rounded-xl mb-4"
            />
            <h2 className="text-gray-800 font-semibold text-xl w-full mx-auto text-center mb-3 relative">
              {service?.title}
            </h2>
            <p className="font-[poppins] tracking-widest text-gray-800   text-sm/5 w-full mx-auto text-center mb-8">
              {service?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
