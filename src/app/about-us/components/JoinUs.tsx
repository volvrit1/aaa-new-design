import Link from "next/link";
import React from "react";

export default function JoinUs() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4 font-[cabin] tracking-widest">
      <div className="p-8 m-auto rounded-xl text-center bg-[#F0EFE9]">
        <h2
          className={`lg:w-5/6 m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-[#EE3639] leading-8 mb-4 `}
        >
          <span className="text-gray-800">
            Wish to Join the All Above Agency Squad?
          </span>
        </h2>
        <p
          className={`text-gray-500 text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[14px] line-clamp-3 md:line-clamp-none  mt-4 mb-6 lg:w-4/5 m-auto leading-5`}
        >
          {
            "We are fond of creativity & dedication and are always open to add an extra pinch of savviness to our team. If you wish to be a part of our All Above Agency Squad, Check-out available positions on our job board or Contact Us at "
          }
          <br />
          <Link
            href={"mailto:hr@allaboveagency.com"}
            className="text-[#EE3639]"
          >
            hr@allaboveagency.com
          </Link>
        </p>
      </div>
    </div>
  );
}
