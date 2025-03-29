import { image } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function OurCrmDevProcess() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4">
      <div className="lg:w-5/6 m-auto mb-10 text-center">
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
          
          <span className="text-gray-800">Streamlined CRM Development: From Concept to Launch</span>
        </h2>
        <p
          className={`text-gray-800 text-sm sm:text-base line-clamp-3 md:line-clamp-none  mt-4`}
        >
          {
            "Our CRM development process ensures that we provide a solution which is ideally suited to your business requirements. Right from consultation to deployment, every step of ours is undertaken with care so as to facilitate a smooth and successful CRM development experience that empowers your business to establish great customer relationships."
          }
        </p>
      </div>
      <div className="grid grid-cols-1">
        {[
          {
            title: "01. Define Goals",

            description:
              "Clearly define business aims and CRM requirements to support an adapted, efficient solution that matches your vision.",
            image: "/assets/crm1.png",
          },
          {
            title: "02. Solution Architecture",
            description:
              "Create a scalable, flexible architecture that meets the needs of your CRM system with high performance and future growth.",
            image: "/assets/crm2.png",
          },
          {
            title: "03. Develop Data Models",
            description:
              "Develop effective, organized data models that maximize data storage, retrieval, and integration for smooth CRM functionality.",
            image: "/assets/crm3.png",
          },
          {
            title: "04. Implement Security",
            description:
              "Incorporate robust security measures to protect sensitive data and ensure compliance with privacy and regulatory standards.",
            image: "/assets/crm4.png",
          },
          {
            title: "05. Test and Validate",
            description:
              "Perform extensive testing to confirm the CRM system is free of bugs, secure, and optimally perfected prior to release.",
            image: "/assets/crm5.png",
          },
        ].map((service, index) => (
          <div
            key={index}
            className={`w-full lg:h-52 font-[poppins] rounded-none border-[#EE3639] lg:px-8 relative flex ${
              index % 2 === 0 ? "" : "flex-row-reverse"
            } items-center gap-4 `}
          >
            <div className="border rounded-full p-2 w-32 h-32 lg:h-44 lg:w-44 flex justify-center items-center">
              <Image
                width={400}
                height={400}
                alt="image"
                src={service?.image}
                className="min-w-24 min-h-24 max-w-24 max-h-24 object-contain mb-4"
              />
            </div>
            <span className="tracking-tight hidden md:block font-xs text-gray-500">
              .........................
            </span>
            <div className="lg:w-5/12 pt-20">
              <h2
                className={`text-gray-900 font-semibold text-2xl font-[poppins] w-full mx-auto ${
                  index % 2 === 0 ? "text-left" : "text-right"
                } mb-2`}
              >
                {service?.title}
              </h2>
              <p
                className={`font-[poppins] tracking-widest text-gray-900  font-light text-sm/5 ${
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
