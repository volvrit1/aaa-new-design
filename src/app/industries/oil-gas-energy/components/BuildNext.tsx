import React from "react";

export default function BuildNext() {
  const content = [
    "Upstream Software Solutions",
    "Reservoir Management Software",
    "Oil & Gas Production Software",
    "Oil & Gas Analytic Software",
    "Midstream Software Solution",
    "Pipeline Performance Tracking System",
    "Automation Software Service",
    "Oil & Gas Transportation System",
    "Pipeline Management Solution",
    "Downstream Software Solution",
    "Downstream Supply Chain Management",
    "Energy Trading & Risk Management ",
  ];
  return (
    <div className="p-4 lg:px-16 space-y-4 max-w-7xl m-auto">
      <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {content.map((item, index) => (
          <div key={index} className="bg-white p-4 border-[1.5px] border-gray-300/70">
            <h2 className="text-base font-semibold text-gray-800 font-[urbanist]">
              {item}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
