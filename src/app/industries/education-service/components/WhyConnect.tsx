import Image from "next/image";
import React from "react";

export default function WhyConnect({ title, description, data }: any) {
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16">
      {/* Background Image using Next.js Image component */}
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="/assets/elearn.png" // Replace with the actual path to your cover image
            alt="Cover Image"
            layout="fill" // This makes the image fill the container
            objectFit="cover" // Ensures the image covers the entire area without distortion
            quality={100} // Optional: Set image quality to 100 for better sharpness
          />
        </div>

        <div className="relative z-10 w-2/3 p-8">
          <h2 className="font-[poppins] text-3xl text-gray-800 font-medium mb-4">
            {title}
          </h2>
          <p className="font-[cabin] tracking-wide text-left mb-6 text-[#7D7D7D]">
            {description}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {data &&
              data.map((item: any, index: any) => (
                <div
                  key={index}
                  className="flex justify-start items-center gap-4 py-4 "
                >
                  <Image
                    src={"/assets/elearnendarrow.png"}
                    width={16}
                    height={16}
                    className=""
                    alt=""
                  />
                  <h2 className="text-sm font-medium text-gray-800 font-[poppins]">
                    {item}
                  </h2>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
