import Image from "next/image";
import React from "react";

export default function AdvancedTechnologyRealState({ title, data }: any) {
  return (
    <div className="p-4 lg:px-16 space-y-4 max-w-7xl m-auto">
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
    </div>
  );
}
