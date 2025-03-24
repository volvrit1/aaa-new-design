
import Image from "next/image";
import React from "react";

export default function WeServe() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4 bg-[#242424]">
      <div className="lg:w-5/6 m-auto mb-18 text-center">
        <h2
          className={`text sm:text-lg font-semibold tracking-widest 
                 text-gray-50
              leading-8 mb-3`}
        >
          Industries We Serve
        </h2>
        <h2
          className={`lg:w-5/6 m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-[#EE3639] leading-8 mb-4 `}
        >
          <span className="text-gray-50"> Helping Business In</span>
          {" All Domains"}
        </h2>
        <p
          className={`lg:w-4/5 m-auto text-gray-50 text-sm sm:text-base line-clamp-3 md:line-clamp-none  mt-4 leading-5`}
        >
          {
            "Ready to turn your ideas into reality? Let’s collaborate and create something amazing! With our expertise and your vision, we’ll build a solution that drives success and stands out in the digital world."
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
          "Technology & Innovation",
          "Event & Tickets",
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
