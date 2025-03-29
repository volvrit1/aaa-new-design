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
          <span className="text-gray-800">
            {" "}
            From Concept to Launch: A Smooth SaaS Development Process
          </span>
        </h2>
        <p
          className={`text-gray-800 text-sm sm:text-base line-clamp-3 md:line-clamp-none  mt-4`}
        >
          {
            "Our SaaS development methodology entails every phase with care and expertise. Beginning with discovery and planning, proceeding through design, development, and testing, we deliver quality solutions to your business needs and expectations."
          }
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-4">
        {[
          {
            title: "Discovery & Planning",

            description:
              "We deeply evaluate your business needs, user requirements, and market dynamics to craft a customized SaaS solution strategy.",
            image: "/assets/ai/discover.png",
          },
          {
            title: "Design & Prototyping",
            description:
              "Our designers are keen on developing user-centric, aesthetically pleasing prototypes that actualize your SaaS vision.",
            image: "/assets/ai/design.png",
          },
          {
            title: "Development",
            description:
              "We utilize innovative technologies to create a scalable, secure, and stable SaaS application that accomplishes your business objectives.",
            image: "/assets/ai/proof1.png",
          },
          {
            title: "Testing & Assurance",
            description:
              "Rigorous testing and quality assurance processes ensure that your application is bug-free, secure, and performs optimally before launch.",
            image: "/assets/ai/proof2.png",
          },
        ].map((service, index) => (
          <div
            key={index}
            className={`w-full font-[poppins] lg:p-6 flex flex-col justify-between items-start ${
              index > 0 && "lg:border-l-2 border-[#EE3639]"
            }`}
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
