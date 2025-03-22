import { image } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AppDevSolutions() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4">
      <div className="lg:w-5/6 m-auto mb-18 text-center">
        <h2
          className={`text sm:text-lg font-semibold tracking-widest 
                 text-gray-800
               mb-3`}
        >
          We Are Creative Agency
        </h2>
        <h2
          className={`lg:w-5/6 m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold text-[#EE3639]  mb-4 `}
        >
          <span className="text-gray-800">Tailored</span>
          {"  App Development Solutions "}
          <span className="text-gray-800">for Your Unique Business Needs</span>
        </h2>
        <p
          className={`text-gray-800 text-sm sm:text-base line-clamp-3 md:line-clamp-none  mt-4`}
        >
          {
            "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices."
          }
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3">
        {[
          {
            title: "Android App Development",

            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices.",
            image: "/assets/appdev/android.png",
          },
          {
            title: "IOS App Development",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices.",
            image: "/assets/appdev/ios.png",
          },
          {
            title: "React Native App Development",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices.",
            image: "/assets/appdev/native.png",
          },
          {
            title: "Flutter App Development",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices.",
            image: "/assets/appdev/flutter.png",
          },
          {
            title: "Custom App Development",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices.",
            image: "/assets/appdev/desktop.png",
          },
          {
            title: "Cross Platform Development",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices.",
            image: "/assets/appdev/web.png",
          },
        ].map((service, index) => (
          <div
            key={index}
            className={`w-full lg:min-h-[65vh] 2xl:min-h-auto font-[poppins] rounded-none ${
              index < 3 && "border-b"
            } ${
              (index === 1 || index=== 4) && "border-l border-r"
            } border-black p-8 flex flex-col justify-between items-start `}
          >
            <Image
              width={400}
              height={400}
              alt="image"
              src={service?.image}
              className="w-16 h-16 object-contain rounded-xl mb-4"
            />
            <h2 className="text-gray-900 font-semibold text-xl w-full mx-auto text-left mb-2">
              {service?.title}
            </h2>
            <p className="font-[poppins] tracking-widest text-gray-800  font-light text-sm/5 w-full mx-auto text-left mb-12">
              {service?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
