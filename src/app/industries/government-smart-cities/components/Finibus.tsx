import React from "react";

export default function Finibus() {
  const data = [
    "SEO (Search Engine Optimization)",
    "PPC(Pay-Per-Click)",
    "Search Engine Marketing",
    "Social Media Marketing",
    "AD Campaigns",
    "Content Marketing",
  ];
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16">
      <h2 className="font-[poppins] text-3xl text-black font-medium mb-4">
        Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero
        in 45 BC
      </h2>

      <div className="mx-auto grid grid-cols-1 lg:grid-cols-6 gap-y-2">
        {data &&
          data.map((item: any, index: any) => (
            <div
              key={index}
              className={`flex justify-center items-center gap-4 p-6 border-[1.5px] border-l-[1.5px]  border-[#EE36394D] ${index ===5 ? "border-r-[1.5px]" : "lg:border-r-0"} `}
            >
              <h2 className="text-lg/6 m-auto  text-left w-auto font-semibold text-gray-800 font-[urbanist]">
                {item}
              </h2>
            </div>
          ))}
      </div>
    </div>
  );
}
