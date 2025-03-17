
import Image from "next/image";
import React from "react";

export default function WeServe() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4 bg-[#242424]">
      <div className="lg:w-5/6 m-auto mb-18 text-center">
        <h2
          className={`text sm:text-sm md:text-sm lg:text-sm xl:text-sm font-semibold tracking-widest 
                 text-gray-50
              leading-8 mb-3`}
        >
          Industries We Serve
        </h2>
        <h2
          className={`lg:w-5/6 m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-[#EE3639] leading-8 mb-4 `}
        >
          <span className="text-gray-50"> Helping Business In</span>
          {"All Domains"}
        </h2>
        <p
          className={`text-gray-50 text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[14px] line-clamp-3 md:line-clamp-none  mt-4 leading-5`}
        >
          {
            "BWD WEB stands out for its innovative solutions, expert team, and commitment to quality. We deliver custom web and mobile applications that combine cutting-edge technology with seamless user experiences. Our focus on creativity, reliability, and client satisfaction makes us a trusted partner for businesses looking to grow and succeed in the digital world."
          }
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-4 gap-4">
        {[
          "Health Care",
          "Oil & Gas Energy",
          "Retails & E-Commerce",
          "Real Estate & Construction",
          "Finance & Banking",
          "Goverment & Smart Cities",
          "Education Service",
          "Logistic & Transportation",
          "Hospitality & Tourism",
          "Legal & Compliance",
        ].map((serve, index) => (
          <div
            key={index}
            className="w-full h-72 rounded-xl bg-[#3D3D3D] p-4 flex flex-col justify-center items-center "
          >
            <Image
              width={400}
              height={400}
              alt="image"
              src={`/assets/serve${[index + 1]}.png`}
              className="w-24 h-24 object-contain rounded-xl mb-4"
            />
            <h2 className="text-gray-50 text-xl w-4/5 mx-auto text-center">
              {serve}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
