import React from "react";

export default function EvolvingOilGas() {
  return (
    <div
      className=" p-4 lg:p-16 object-center bg-cover h-screen"
      style={{
        backgroundImage: "url('/assets/evolving.png')", // Replace with your image URL
      }}
    >
      <div className="container max-w-7xl m-auto p-10 relative bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000] to-[#000000a8] backdrop-blur-lg"></div>
        <h2 className="font-[urbanist] text-[29px] font-semibold mb-4 text-gray-50 relative">
          Sector that Can Benefit From Our Healthcare Software Development
          Service
        </h2>
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-x-6 relative">
          {/* {content.map((item, index) => (
            <div
              key={index}
              className="flex justify-start items-center gap-4 py-4 "
            >
         
              <h2 className="text-sm font-semibold text-gray-50 font-[urbanist]">
                {item}
              </h2>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}
