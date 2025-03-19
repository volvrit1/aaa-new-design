import Link from "next/link";
import React from "react";

export default function NewProject() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4 font-[cabin] tracking-widest">
      <div className=" m-auto p-18 bg-[#242424] rounded-3xl text-center">
        <h2
          className={`lg:w-5/6 m-auto text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-[Urbanist] font-bold text-[#EE3639] leading-8 mb-4 `}
        >
          <span className="text-gray-50"> Let's Start a </span>
          {" New Project Together "}
        </h2>
        <p
          className={`lg:w-3/5 text-gray-50 text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[14px] line-clamp-3 md:line-clamp-none font-[cabin] tracking-widest  mt-4 mb-6 m-auto leading-5`}
        >
          {
            "Ready to turn your ideas into reality? Let’s collaborate and create something amazing! With our expertise and your vision, we’ll build a solution that drives success and stands out in the digital world."
          }
        </p>
        <div className="flex justify-center items-center gap-6">
          <Link
            href={""}
            className="px-10 p-4 w-56 text-sm text-center bg-[#EE3639] text-gray-50 hover:text-[#EE3639] hover:bg-transparent hover:border transition-colors ease-in-out flex justify-center items-center"
          >
            Request A Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
