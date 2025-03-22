import { image } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function UiUxDevProcess() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4">
      <div className="lg:w-5/6 m-auto mb-18 text-center">
        <h2
          className={`text sm:text-lg font-semibold tracking-widest 
                 text-gray-800
              leading-8 mb-3`}
        >
          We Are Creative Agency
        </h2>
        <h2
          className={`lg:w-5/6 m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold text-[#EE3639] leading-8 mb-4 `}
        >
          <span className="text-gray-900"> Our Proven</span>
          {" UI/UX Design Process "}
          <span className="text-gray-900">
            {" "}
            for Seamless and Engaging Experiences
          </span>
        </h2>
        <p
          className={`text-gray-800 text-sm sm:text-base line-clamp-3 md:line-clamp-none  mt-4 leading-5`}
        >
          {
            "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices."
          }
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-4">
        {[
          {
            title: "Ideation",

            description: "We are a leading web and mobile app development .",
            image: "/assets/ui/uipro1.png",
          },
          {
            title: "UX/UI Design",
            description: "We are a leading web and mobile app development .",
            image: "/assets/ui/uipro2.png",
          },
          {
            title: "Development",
            description: "We are a leading web and mobile app development .",
            image: "/assets/ui/uipro3.png",
          },
          {
            title: "Testing",
            description: "We are a leading web and mobile app development .",
            image: "/assets/ui/uipro4.png",
          },
        ].map((service, index) => (
          <div
            key={index}
            className={`w-full font-[poppins]  px-6 flex flex-col justify-center items-center relative`}
          >
            <Image
              width={400}
              height={400}
              alt="image"
              src={"/assets/ui/uiarrow.png"}
              className={`w-24 h-24 object-contain rounded-xl absolute left-4/5 top-0  ${index===3 && "hidden"}`}
            />
            <Image
              width={400}
              height={400}
              alt="image"
              src={service?.image}
              className="w-28 h-28 object-contain rounded-xl mb-4"
            />
            <h2
              className={`text-gray-900 font-semibold text-2xl font-[poppins] w-full mx-auto text-center mb-2`}
            >
              {service?.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
