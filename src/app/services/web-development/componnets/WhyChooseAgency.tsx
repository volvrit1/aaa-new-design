import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function WhyChooseAgency() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4">
      <div className="lg:w-5/6 m-auto mb-18 text-center">
        <h2
          className={`text sm:text-sm md:text-sm lg:text-sm xl:text-sm font-semibold tracking-widest 
                 text-gray-800
              leading-8 mb-3`}
        >
          Why choose us{" "}
        </h2>
        <h2
          className={`lg:w-5/6 m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-[#EE3639] leading-8 mb-4 `}
        >
          <span className="text-gray-800"> Why Choose Us As Your  </span>
          {" Web Development Agency "}
        </h2>
        <p
          className={`text-gray-800 text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[14px] line-clamp-3 md:line-clamp-none  mt-4 leading-5`}
        >
          {
            "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices."
          }
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-4 gap-1">
        {[
          {
            value: "15",
            plusIcon: true,
            unit: "Year in Experience",
            image: "/assets/exp.png",
          },
          {
            value: "80",
            plusIcon: true,
            unit: "Team Members",
            image: "/assets/team.png",
          },
          {
            value: "480",
            plusIcon: true,
            unit: "Happy  Clients",
            image: "/assets/client.png",
          },
          {
            value: "450",
            plusIcon: true,
            unit: "Projects Done",
            image: "/assets/project.png",
          },
        ].map((service, index) => (
          <div
            key={index}
            className={`w-full h-64 rounded-none bg-[#F0F0F0] p-8 py-12 flex flex-col items-center ${index===0 && "rounded-l-[5rem]"}  ${index===3 && "rounded-r-[5rem]"}  `}
          >
            <Image
              width={400}
              height={400}
              alt="image"
              src={`${service?.image}`}
              className="w-20 h-20 filter invert  object-contain p-2 mb-4"
            />
            <h2 className="text-gray-800 text-3xl w-full mx-auto text-center mb-2">
              {service?.value}{service?.plusIcon && "+"}
            </h2>
            <p className="font-[cabin] tracking-widest text-gray-800  font-semibold text-sm/5 w-full mx-auto text-center mb-12">
              {service?.unit}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
