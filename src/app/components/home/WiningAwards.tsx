
import Image from "next/image";
import React from "react";

export default function WiningAwards() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4 ">
      <div className="lg:w-5/6 m-auto mb-18 text-center">
        <h2
          className={`text sm:text-sm md:text-sm lg:text-sm xl:text-sm font-semibold tracking-widest 
                 text-gray-800
              leading-8 mb-3`}
        >
          Winning Awards
        </h2>
        <h2
          className={`lg:w-5/6 m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-[#EE3639] leading-8 mb-4 `}
        >
          <span className="text-gray-800">Honoring</span>
          {" Our Commitment to Excellence"}
          <span className="text-gray-800"> in IT Solutions</span>
        </h2>
        <p
          className={`text-gray-700 text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[14px] line-clamp-3 md:line-clamp-none  mt-4 leading-5`}
        >
          {
            "BWD WEB stands out for its innovative solutions, expert team, and commitment to quality. We deliver custom web and mobile applications that combine cutting-edge technology with seamless user experiences. Our focus on creativity, reliability, and client satisfaction makes us a trusted partner for businesses looking to grow and succeed in the digital world."
          }
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
        {[1, 2, 3, 4].map((faq, index) => (
          <div key={index} className="lg:w-2/12">
            <Image
              width={400}
              height={400}
              alt="image"
              src={`/assets/award${[index+1]}.png`}
              className="w-full  object-fill rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
