import ButtonToCall from "@/app/components/home/ButtonToCall";
import Image from "next/image";
import React from "react";

export default function ProjectInMind() {
  return (
    <div className="p-4 lg:px-16 space-y-4 max-w-7xl m-auto">
      <div className="w-full bg-[#F0EFE9] flex flex-col lg:flex-row items-center justify-center px-10">
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-medium text-black font-[poppins] mb-4">
            Have a project in mind?
          </h1>
          <p className="font-[poppins] tracking-wide mb-6 text-[#7D7D7D]">
            Schedule a call, speak directly with our experts, and see how we
            transform your idea into successful social networking app
            development.
          </p>
          <ButtonToCall text={"Talk to Our Expert"} />
        </div>
        <div className="w-full lg:w-1/2 overflow-visible ">
          <Image
            src="/assets/projectinmind.png"
            alt="arrow"
            width={800}
            height={800}
            className="object-cover h-full lg:scale-115 z-10"
          />
        </div>
      </div>
    </div>
  );
}
