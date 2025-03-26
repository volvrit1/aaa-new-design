import Image from "next/image";
import React from "react";

export default function EcommerceDevelopment({
  title,
  description,
  data,
}: any) {
  const ecommeceDevContent = {
    title: "Ecommerce Development Services",
    description:
      "We adopt a rapid and reliable approach with the best E-commerce services for organizations to achieve their business goals. Eager to know what our expertise can contribute to your business? Here we go!",
    data: [
      "E-commerce Consulting",
      "Hosting and Infrastructure Management",
      "Manage and Maintain Applications",
      "E-Commerce Audit",
      "Migration and Upgrades",
      "Integration",
    ],
  };
  return (
    <div className="p-4 lg:px-16 space-y-4 max-w-7xl m-auto">
      <h2 className="font-[poppins] text-3xl text-gray-50 font-medium mb-4">
        {title || ""}
      </h2>
      <p className="text-base text-[#969696] font-semibold font-[cabin]">
        {description || ""}
      </p>
      <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 py-6">
        {data &&
          data.map((item: any, index: any) => (
            <div key={index} className="p-4 border-[1.5px] border-gray-300/70">
              <h2 className="text-base font-semibold text-gray-50 font-[urbanist]">
                {item}
              </h2>
            </div>
          ))}
      </div>
    </div>
  );
}
