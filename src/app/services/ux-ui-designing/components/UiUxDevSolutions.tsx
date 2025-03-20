import { image } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function UiUxDevSolutions() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4">
      <div className="lg:w-5/6 m-auto mb-18 text-center">
        <h2
          className={`text sm:text-sm md:text-sm lg:text-sm xl:text-sm font-semibold tracking-widest 
                 text-gray-800
              leading-8 mb-3`}
        >
          We Are Creative Agency
        </h2>
        <h2
          className={`lg:w-5/6 m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-  text-[#EE3639] leading-8 mb-4 `}
        >
          <span className="text-gray-800">Comprehensive </span>
          {"  UX/UI Design Services "}
          <span className="text-gray-800">
            to Elevate User Experience and Engagement
          </span>
        </h2>
        <p
          className={`text-gray-800 text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[14px] line-clamp-3 md:line-clamp-none  mt-4 leading-5`}
        >
          {
            "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices."
          }
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3">
        {[
          {
            title: "UX/UI Design Services",

            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices.",
            image: "/assets/ui/ui1.png",
          },
          {
            title: "UI/UX Design Consulting",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices.",
            image: "/assets/ui/ui2.png",
          },
          {
            title: "Wireframing & Prototyping",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices.",
            image: "/assets/ui/ui3.png",
          },
          {
            title: "Web App UX/UI Design",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices.",
            image: "/assets/ui/ui4.png",
          },
          {
            title: "Mobile App UX/UI Design",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices.",
            image: "/assets/ui/ui5.png",
          },
          {
            title: "Responsive Design",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices.",
            image: "/assets/ui/ui6.png",
          },
        ].map((service, index) => (
          <div
            key={index}
            className={`w-full lg:min-h-[65vh] 2xl:min-h-auto font-[cabin] rounded-none ${
              index < 3 && "border-b"
            } ${
              (index === 1 || index === 4) && "border-l border-r"
            } border-[#EE3639] p-8 flex flex-col justify-between items-start `}
          >
            <Image
              width={400}
              height={400}
              alt="image"
              src={service?.image}
              className="w-16 h-16 object-contain mb-4"
            />
            <h2 className="text-gray-900 font-semibold text-xl w-full mx-auto text-left mb-2 relative">
              {service?.title}
            </h2>
            <p className="font-[cabin] tracking-widest text-gray-800  font-light text-sm/5 w-full mx-auto text-left mb-12">
              {service?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
