import Image from "next/image";
import React from "react";

export default function MarketingTools() {
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16">
      <h2 className="font-[poppins] text-3xl text-gray-800 text-center font-medium mb-4">
        Digital Marketing Tools We Use
      </h2>
      <div className="mx-auto">
        <Image
          src="/assets/tools.png"
          alt="Marketing Tools"
          width={1000}
          height={500}
          className="w-full"
        />
      </div>
    </div>
  );
}
