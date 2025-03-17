import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const HeroSection = ({
  title,
  title1,
  title2,
  colorTitle1,
  colorTitle2,
  description,
  link,
}: {
  title?: string;
  title1?: string;
  title2?: string;
  colorTitle1?: string;
  colorTitle2?: string;
  description?: string;
  link?: any;
}) => {
  return (
    <div className="relative w-full h-[80vh] md:h-screen 2xl:h-[70vh] overflow-hidden">
      <div className="absolute inset-0 bg-[#242424]"></div>

      <div className="absolute top-[-15rem] left-0 inset-0 flex justify-center items-center">
        <div className="w-3/5  h-screen bg-gradient-to-r from-[#242424] via-10% via-[#242424]  to-[#EE3639] opacity-30 rounded-full blur-3xl "></div>
      </div>
    
      <div className="absolute inset-0 font-['urbanist']  flex flex-col items-center justify-end text-center text-white lg:w-3/5 m-auto p-4 lg:p-0 mb-10">
        <h1 className="text-2xl md:text-4xl lg:text-4xl xl:text-[42px]/13 tracking- font-bold">
          {title || ""}
          {colorTitle1 && (
            <span className={`text-[${colorTitle1}]`}>{title1}</span>
          )}{" "}
          {colorTitle2 && (
            <span className={`text-[${colorTitle2}]`}>{title2}</span>
          )}
        </h1>
        <p className="lg:w-4/5 text-sm line-clamp-4 md:line-clamp-none md:text-sm/6 2xl:text-sm mt-4 max-w-2xl left-6 mb-10">
          {description || ""}
        </p>
        <div className="flex justify-between items-center gap-6">
          <Link
            href={link || ""}
            className=" p-3.5 w-44 text-center bg-[#EE3639] text-gray-50 hover:text-[#EE3639] hover:bg-transparent hover:border transition-colors ease-in-out flex justify-center items-center"
          >
            Call Now
          </Link>
          <Link
            href={link || ""}
            className=" p-3.5 w-44 text-center hover:bg-[#EE3639] text-gray-50 hover:text-[#242424] border border-[#EE3639] transition-colors ease-in-out flex justify-center items-center"
          >
            Get Started{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
