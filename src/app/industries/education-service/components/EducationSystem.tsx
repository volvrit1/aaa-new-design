import Image from "next/image";
import React from "react";

export default function EducationSystem() {
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16 lg:h-fit">
      <div className="flex justify-evenly items-center gap-16 bg-[#F0EFE9] p-10">
        <h2 className="font-[poppins] text-3xl text-black font-medium mb-4 w-full lg:w-3/5">
          Transform the Conventional Education System Into a Customised Modern
          Learning Experience of Your Users
        </h2>
        <Image
          src="/assets/education.png"
          alt="Education System"
          width={800}
          height={600}
          className="w-full lg:w-1/5 lg:scale-175"
        />
      </div>
    </div>
  );
}
