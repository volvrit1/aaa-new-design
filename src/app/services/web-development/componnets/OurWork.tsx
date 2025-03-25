import ProjectCard from "@/app/components/home/ProjectCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiCheckBadge, HiOutlineCodeBracketSquare } from "react-icons/hi2";
import { TbAlphabetLatin, TbUxCircle } from "react-icons/tb";

export default function OurWork() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4 font-[poppins] tracking-widest">
      <div className="lg:w-5/6 m-auto mt-6 lg:mt-0 mb-10 md:mb-18 text-center">
        <h3
          className={`text sm:text-lg font-semibold tracking-widest 
                 text-gray-500
               mb-3`}
        >
          Our Work
        </h3>
        <h2
          className={`lg:w-5/6 m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-[#EE3639] mb-4 `}
        >
          <span className="text-gray-800"> Tailored </span>
          {" Web Development Solutions "}
          <span className="text-gray-800"> for Your Unique Business Needs</span>
        </h2>
        <p
          className={`text-gray-500 text-sm sm:text-base line-clamp-3 md:line-clamp-none  mt-4`}
        >
          {
            "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices."
          }
        </p>
      </div>
      <div className="">
        {[
          {
            title: "UNIFI CARS",
            image: "/assets/work1.png",
            description:
              "Unifi Cars deals in providing good quality used cars. They have a wide range of pre-owned vehicles, providing customers with dependable and affordable solutions to suit their requirements.",
            link: "/healthcare",
            bgColor: "bg-[#F97316]",
            textColor: "text-[#F97316]",
            tags: ["UX/UI Design Strategy", "Development Process", "Mobile App Development", "API Integration"],
          },
        ].map((work, index) => (
          <React.Fragment key={index}>
            <ProjectCard index={index} work={work} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
