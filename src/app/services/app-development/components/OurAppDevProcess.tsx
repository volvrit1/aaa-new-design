import { image } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function OurAppDevProcess() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4">
      <div className="lg:w-5/6 m-auto mt-6 lg:mt-0 mb-10 md:mb-18 text-center">
        <h2
          className={`text sm:text-lg font-semibold tracking-widest 
                 text-gray-800
               mb-3`}
        >
          Our Process{" "}
        </h2>
        <h2
          className={`lg:w-5/6 m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold text-[#EE3639]  mb-4 `}
        >
          <span className="text-gray-800">
            Our App Development Process: From Concept to Creation
          </span>
        </h2>
        <p
          className={`text-gray-800 text-sm sm:text-base line-clamp-3 md:line-clamp-none  mt-4`}
        >
          {
            "Our process ensures that each step of app development is executed with care. From the first ideation to the last launch, we ensure your app provides value, functionality, and an awesome user experience."
          }
        </p>
      </div>
      <div className="grid grid-cols-1 gap-10 lg:gap-0 mb-5">
        {[
          {
            title: "01. Ideation",

            description:
              "We start by discovering your vision and knowing your business objectives to develop a clear roadmap for your app development.",
            image: "/assets/appdev/idea.png",
          },
          {
            title: "02. Market Research",
            description:
              "We research competitors, market trends, and user requirements to make your app relevant and unique in a competitive marketplace.",
            image: "/assets/appdev/market.png",
          },
          {
            title: "03. Technical Analysis",
            description:
              "Our technical experts evaluate the ideal platforms and tools to provide scalable, high-performance solutions that meet your app's needs.",
            image: "/assets/appdev/data.png",
          },
          {
            title: "04. Prototyping",
            description:
              "We build and refine interactive prototypes to visualize the user experience, ensuring the final app matches your expectations.",
            image: "/assets/appdev/graphic.png",
          },
          {
            title: "05. Design & Development",
            description:
              "Our innovative design and development team brings your app to life, with the focus on usability, aesthetics, and functionality.",
            image: "/assets/appdev/launch.png",
          },
          {
            title: "06. Deployment & Maintance",
            description:
              "We ensure smooth deployment and offer ongoing maintenance to keep your app secure and up-to-date.",
            image: "/assets/appdev/prototype.png",
          },
        ].map((service, index) => (
          <div
            key={index}
            className={`w-full lg:h-52 font-[poppins] rounded-none border-[#EE3639] lg:px-8 relative flex ${
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
              <h2 className="text-gray-900 font-semibold text-2xl md:text-3xl w-full mx-auto text-left mb-2">
                {service?.title}
              </h2>
              <p className="font-[poppins] tracking-widest text-gray-900  font-light text-sm/5 text-left lg:mb-12">
                {service?.description}
              </p>
            </div>
            <Image
              width={400}
              height={400}
              alt="image"
              src={
                index % 2 === 0
                  ? "/assets/appdev/rightArrow.png"
                  : "/assets/appdev/leftArrow.png"
              }
              className={`w-32 h-36 hidden md:block absolute bottom-[-4rem] ${
                index % 2 === 0 ? "left-[40%]" : "right-[40%]"
              }  z-[5000]  object-contain rounded-xl mb-4`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
