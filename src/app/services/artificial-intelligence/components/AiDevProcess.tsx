import { image } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AiDevProcess() {
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
          {"  Our AI Development Process: "}
          <span className="text-gray-800">
            {" "}
            From Concept to Completion: A Smooth AI Development Journey
          </span>
        </h2>
        <p
          className={`text-gray-800 text-sm sm:text-base line-clamp-3 md:line-clamp-none  mt-4`}
        >
          {
            "We adhere to a careful, results-oriented process to take your AI project from first discovery through successful delivery, with efficiency, innovation, and alignment with your business objectives."
          }
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-4 gap-4">
        {[
          {
            title: "Discover",

            description:
              "We start with getting to know your business problems and determining areas of opportunity where AI can bring value.",
            image: "/assets/ai/discover.png",
          },
          {
            title: "Design",
            description:
              "We create a custom solution, outlining how AI is going to be incorporated within your business processes to achieve maximum impact.",
            image: "/assets/ai/design.png",
          },
          {
            title: "Proof Of Concept",
            description:
              "A proof of concept is created to confirm the feasibility and effectiveness of the AI solution, ensuring that it will serve your purposes.",
            image: "/assets/ai/proof1.png",
          },
          {
            title: "Proof Of Concept",
            description:
              "We execute the solution once established, integrating it into your processes smoothly and generating measurable outcomes.",
            image: "/assets/ai/proof2.png",
          }
        ].map((service, index) => (
          <div
            key={index}
            className={`w-full font-[poppins] border bg-[#3D3D3D] p-4 lg:p-8 flex flex-col justify-between items-start rounded-xl`}
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
            <p className="font-[poppins] tracking-widest text-gray-50 text-sm/5 w-full mx-auto text-left lg:mb-8">
              {service?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
