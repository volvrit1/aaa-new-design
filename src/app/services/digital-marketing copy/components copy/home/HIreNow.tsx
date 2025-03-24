import Link from "next/link";
import React from "react";

export default function HIreNow() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4 font-[poppins] tracking-widest">
      <div className="lg:w-5/6 m-auto mb-18 text-center">
        <h2
          className={`lg:w-5/6 m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-[#EE3639] leading-8 mb-4 `}
        >
          <span className="text-gray-800"> Hire</span>
          {" Dedicated "}
          <span className="text-gray-800"> a Developer</span>
        </h2>
        <p
          className={`text-gray-800 text-sm sm:text-base line-clamp-3 md:line-clamp-none font-[poppins] tracking-widest  mt-4 mb-6 lg:w-4/5 m-auto leading-5`}
        >
          {
            "A Next-Gen Firm Revolutionizing the Digital Landscape with Seamless, Result-Driven, and Cost-Effective Services and Solutions. We specialize in transforming businesses using cutting-edge technologies, providing tailor-made solutions that meet your unique needs. "
          }
        </p>
        <div className="flex justify-center items-center gap-6">
          <Link
            href={"/contact-us"}
            className=" p-3.5 w-44 text-center bg-[#EE3639] text-gray-50 hover:text-[#EE3639] hover:bg-transparent hover:border transition-colors ease-in-out flex justify-center items-center"
          >
            Hire Now
          </Link>
          <Link
            href={"tel:0411 537 183"}
            className=" p-3.5 w-44 text-center hover:bg-[#EE3639] text-gray-[#242424] hover:text-gray-50 border border-[#EE3639] transition-colors ease-in-out flex justify-center items-center"
          >
            Call Us{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
