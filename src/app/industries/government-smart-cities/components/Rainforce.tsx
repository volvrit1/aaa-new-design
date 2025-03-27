import Image from "next/image";
import React from "react";
import { IoCheckmark } from "react-icons/io5";

export default function Rainforce() {
  const data = [
    "Are you experiencing an online marketing lull?",
    "Struggling with diminished lead generation and business inquiries?",
    "Confused about where to begin with your internet marketing efforts?",
    "Current agency’s marketing strategies not achieving the desired outcomes?",
  ];
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16">
      <h2 className="text-3xl font-medium text-black font-[poppins] mb-4">
        Reinforce Your Digital Eminence and Magnify Sales with Our Digital
        Marketing Agency India
      </h2>

      <div className="container max-w-7xl mx-auto flex flex-col lg:flex-row justify-center gap-6">
        <div className="h-fit w-full lg:w-1/2">
          <p className="font-[poppins] tracking-wide mb-6 text-[#7D7D7D]">
            Band together with the finest team who possesses over a decade of
            expertise in crafting responsive online marketing strategies.
          </p>
          {data &&
            data?.map((content: any, index: any) => (
              <div key={index} className="font-[poppins]">
                <p className="font-[cabin] text-base font-thin text-gray-800 mb-4 flex justify-start items-center gap-2 ">
                  <IoCheckmark className="text-[#EE3639] text-2xl " /> {content}
                </p>
              </div>
            ))}
          <h3 className="text-2xl font-medium text-black font-[poppins] mb-4">
            If yes, it’s time to seek assistance from the expert digital
            marketers at All Above Agency.
          </h3>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="/assets/rainforce.png"
            alt="Feature Of Real State"
            width={800}
            height={600}
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
