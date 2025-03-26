import Image from "next/image";
import React from "react";

export default function Benefit({ title, data }: any) {
  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-16 space-y-4">
      <div
        className="container p-10 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/benefit.png')", // Replace with your image URL
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000] to-[#00000063] backdrop-blur-lg"></div>
        <h2 className="font-[poppins] text-[29px] font-semibold mb-4 text-gray-50 relative">
          {title || ""}
        </h2>
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-x-6 relative">
          {data &&
            data.map((item: any, index: any) => (
              <div
                key={index}
                className="flex justify-start items-center gap-4 py-4 "
              >
                <Image
                  src={"/assets/benefitIcon.png"}
                  width={16}
                  height={16}
                  className=""
                  alt=""
                />
                <h2 className="text-sm font-semibold text-gray-50 font-[poppins]">
                  {item}
                </h2>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
