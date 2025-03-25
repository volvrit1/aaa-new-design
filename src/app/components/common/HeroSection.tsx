import React from "react";
import Link from "next/link";
import ButtonToCall from "../home/ButtonToCall";
// import Breadcrumb from "./Breadcrumb";

const HeroSection = ({
  link,
  title,
  title1,
  title2,
  colorTitle1,
  colorTitle2,
  description,
  breadcrumb,
}: {
  link?: any;
  title?: string;
  title1?: string;
  title2?: string;
  breadcrumb?: any;
  colorTitle1?: string;
  colorTitle2?: string;
  description?: string;
}) => {
  return (
    <div className="relative w-full h-[90vh] md:h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[#242424]"></div>

      <div className="absolute left-0 inset-0 flex justify-center items-center">
        <div className="w-3/5 h-screen bg-gradient-to-r from-[#242424] via-10% via-[#242424]  to-[#EE3639] opacity-30 rounded-full blur-3xl "></div>
      </div>

      <div className="absolute inset-0 font-['urbanist'] top-[20%]  flex flex-col items-center justify-center text-center text-white lg:w-3/5 m-auto p-4 lg:p-0 mb-10">
        {/* {breadcrumb && <Breadcrumb paths={breadcrumb} />} */}
        <h2 className="text-3xl md:text-4xl lg:text-4xl tracking- font-bold">
          {title || ""}
          {colorTitle1 && (
            <span className={`text-[${colorTitle1}]`}>{title1}</span>
          )}{" "}
          {colorTitle2 && (
            <span className={`text-[${colorTitle2}]`}>{title2}</span>
          )}
        </h2>
        <p className="font-[poppins] tracking-widest lg:w-4/5 text-sm line-clamp-4 md:line-clamp-none md:text-sm/6 2xl:text-sm mt-8 lg:mt-4 max-w-2xl left-6 mb-10">
          {description || ""}
        </p>
        <div className="flex flex-row justify-between items-center gap-2 lg:gap-6">
          <Link
            href={link || ""}
            className=" p-3.5 px-10 w-fit lg:w-44 text-center bg-[#EE3639] border-[#EE3639] text-gray-50 hover:text-[#EE3639] hover:bg-transparent border transition-colors ease-in-out flex justify-center items-center"
          >
            Call Now
          </Link>
          <ButtonToCall text="Get Started" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
