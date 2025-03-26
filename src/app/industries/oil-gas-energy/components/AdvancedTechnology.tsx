import Image from "next/image";
import React from "react";

export default function AdvancedTechnology({ title, data }: any) {
 
  return (
    <div className="p-4 lg:px-16 space-y-4">
      <h2 className="font-[poppins] text-3xl text-black font-medium mb-4">
        {title || ""}
      </h2>
      <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {data &&
          data.map((item: any, index: any) => (
            <div
              key={index}
              className="bg-white p-4 border-[1.5px] border-gray-300/70"
            >
              <h2 className="text-base font-semibold text-gray-800 font-[urbanist]">
                {item}
              </h2>
            </div>
          ))}
      </div>
      <div className="w-full bg-[#F0EFE9] flex flex-col lg:flex-row items-center justify-center px-10 py-6 mt-20">
        <p className="w-full lg:w-3/5 text-3xl text-gray-800 font-semibold font-[urbanist]">
          Ready to Optimize Your Oil & Gas Operations? Explore Our Software
          Solutions
        </p>
        <div className="w-full lg:w-2/5 h-44 overflow-visible ">
          <Image
            src="/assets/techsolution.png"
            alt="arrow"
            width={800}
            height={800}
            className="object-cover h-full z-10"
          />
        </div>
      </div>
    </div>
  );
}
