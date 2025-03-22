import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function StreamlineProcess() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4 bg-[#242424]">
      <div className="lg:w-5/6 m-auto mb-18 text-center">
        <h2
          className={`text sm:text-lg font-semibold tracking-widest 
                 text-gray-50
              leading-8 mb-3`}
        >
          Our Streamlined Process
        </h2>
        <h2
          className={`lg:w-5/6 m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold text-[#EE3639] leading-8 mb-4 `}
        >
          <span className="text-gray-50">Turning Your Vision into a </span>
          {"  High-Performing Website "}
        </h2>
        <p
          className={`text-gray-50 text-sm sm:text-base line-clamp-3 md:line-clamp-none  mt-4 leading-5`}
        >
          {
            "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices."
          }
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {[
          {
            title: "Requirement Gathering",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative",
          },
          {
            title: "Wireframe and Design",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative",
          },
          {
            title: "Development and Integration",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative",
          },
          {
            title: "Testing and Launch",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovativ",
          },
        ].map((service, index) => (
          <div
            key={index}
            className={`w-full lg:min-h-[40vh]  2xl:min-h-auto font-[poppins] rounded-xl bg-[#3D3D3D] p-8 flex flex-col justify-center gap-y-2 items-center ${
              index % 2 === 0 ? "mb-32" : "mt-32"
            } `}
          >
            <div className="border border-gray-50 h-16 w-16 p-4 m-auto mb-4 rounded-full">
              <Image
                width={400}
                height={400}
                alt="image"
                src={`/assets/process${index + 1}.png`}
                className="w-7 h-7 object-contain m-auto"
              />
            </div>
            <h2 className="text-white text-xl w-full mx-auto text-center">
              {service?.title}
            </h2>
            <p className="font-[poppins] tracking-widest text-gray-50 text-xs/5 mt-2 w-full mx-auto text-center mb-12">
              {service?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
