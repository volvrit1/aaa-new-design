import Image from "next/image";
import React from "react";

export default function WeAreYourPartner({ title, data }: any) {


  return (
    <div className="max-w-7xl mx-auto p-4 lg:px-16 space-y-4">
      <div className="container">
        <h2 className="font-[poppins] text-2xl font-medium mb-3 text-gray-800 relative">
          {title}
        </h2>
        <div className="mx-auto grid grid-cols-1 mt-6 lg:grid-cols-2 gap-5 relative">
          {data &&
            data.map((item: any, index: any) => (
              <div
                key={index}
                className={`gap-1 flex flex-col justify-start items-start p-5 ${
                  index === 0 || index === 3 || index === 4
                    ? "lg:bg-[#FFF5F5] lg:border lg:border-[#EE3639]"
                    : ""
                }`}
              >
                <h2 className="text-xl font-medium text-gray-800 font-[poppins] mb-2">
                  {item?.title}
                </h2>
                <p className="font-[poppins] text-sm text-[#7d7d7d]">
                  {item?.description || ""}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
