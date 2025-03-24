import React from "react";

export default function HealthHighlights() {
  const content = [
    "Boosts health monitoring in remote locations",
    "Efficient & secure data management",
    "Hassle-free & real-time communication",
    "Cost-effective",
    "Easier health monitoring",
    "Accurate patient diagnosis",
  ];
  return (
    <div className="p-4 lg:p-16 space-y-4 bg-[#242424]">
      <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {content.map((item, index) => (
          <div key={index} className="bg-white p-4 shadow-md">
            <h2 className="text-base font-semibold text-[#EE3639] font-[urbanist]">{item}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
