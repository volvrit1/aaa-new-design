import React from "react";

export default function OilGasServices() {
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16">
      {[
        {
          title: "Field Service Management Software Development",
          description:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        },
        {
          title: "Oil and Gas Analytic Software Development",
          description:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        },
        {
          title: "Land Management Software Development",
          description:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        },
        {
          title: "Refinery Scheduling Software Development",
          description:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        },
        {
          title: "Reservoir Modelling, Monitoring and Management ",
          description:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        },
        {
          title: "Oil and Gas ERP Software Development",
          description:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        },
        {
          title: "Exploration Software Development",
          description:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        },
      ].map((data,index) => (
        <div key={index} className="flex justify-start items-center gap-4 border-l-[2px] h-72 lg:h-48 border-[#EE3639]">
          <div className="text-4xl w-36 p-4 text-[#EE3639] font-medium font-[poppins] relative">
            0{index+1}
            <span className="w-full h-[2px] bg-[#EE3639] inline-block absolute left-0 bottom-0"></span>
          </div>
          <div className="flex flex-col justify-end h-full">
            <h2 className="text-2xl text-gray-800 font-semibold mb-3">{data?.title}</h2>
            <p className="text-base text-[#7d7d7d] font-[cabin] mb-4">
              {data?.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
