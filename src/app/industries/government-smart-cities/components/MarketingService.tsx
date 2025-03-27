import React from "react";
import { IoCheckmark } from "react-icons/io5";

export default function MarketingService() {
  const data = [
    "Increased online visibility, traffic, reputation and brand awareness",
    "Personalized marketing strategies",
    "Targeted audience reach and engagement",
    "Personalized marketing strategies",
    "Comprehensive analysis and reporting",
    "Stay ahead of competitors with latest techniques",
    "Strategic planning for long-term success",
    "Measurable results, Cost-effective and ROI",
  ];
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-[#EE3639] p-6">
        {data &&
          data?.map((content: any, index: any) => (
            <div key={index} className="font-[poppins] ">
              <p className="font-[cabin] text-base text-gray-50 flex justify-start items-center gap-2 ">
                <IoCheckmark className="text-gray-50 text-2xl" /> {content}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
