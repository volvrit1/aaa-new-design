import React from "react";
import ButtonToCall from "@/app/components/home/ButtonToCall";

export default function NewProject() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4 font-[poppins] tracking-widest">
      <div className=" m-auto p-18 bg-[#242424] rounded-3xl text-center">
        <h2
          className={`lg:w-5/6 m-auto text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-[poppins] font-bold text-[#EE3639]  mb-4 `}
        >
          <span className="text-gray-50"> Let's Start a </span>
          {" New Project Together "}
        </h2>
        <p
          className={`lg:w-3/5 text-gray-50 text-sm sm:text-base line-clamp-3 md:line-clamp-none font-[poppins] tracking-widest  mt-4 mb-6 m-auto`}
        >
          {
            "Ready to turn your ideas into reality? Let’s collaborate and create something amazing! With our expertise and your vision, we’ll build a solution that drives success and stands out in the digital world."
          }
        </p>
        <ButtonToCall />
      </div>
    </div>
  );
}
