import Link from "next/link";
import React from "react";

export default function JoinUs() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4 font-[poppins] tracking-widest">
      <div className="p-8 m-auto rounded-xl text-center bg-[#F0EFE9]">
        <h2
          className={`lg:w-5/6 mt-5 m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-[#EE3639] mb-4 `}
        >
          <span className="text-gray-800">
            Wish to Join the Above All Agency Squad?
          </span>
        </h2>
        <p
          className={`text-gray-500 text-sm sm:text-base line-clamp-3 md:line-clamp-none  mt-4 mb-6 lg:w-4/5 m-auto`}
        >
          {
            "Join our family and become a part of a team where innovation, growth, and success come together. We value talent, creativity, and dedication. Start your journey with us today!"
          }
          <br />
            {/* <Link
              href={"mailto:hr@allaboveagency.com"}
              className="text-[#EE3639]"
            >
              hr@allaboveagency.com.au
            </Link> */}
        </p>
      </div>
    </div>
  );
}
