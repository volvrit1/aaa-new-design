
import Image from "next/image";
import React from "react";

export default function WiningAwards() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4 ">
      <div className="lg:w-5/6 m-auto mt-6 lg:mt-0 mb-10 md:mb-18 text-center">
        <h2
          className={`text sm:text-lg font-semibold tracking-widest 
                 text-gray-800
               mb-3`}
        >
          Winning Awards
        </h2>
        <h2
          className={`lg:w-5/6 m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-[#EE3639] mb-4 `}
        >
          <span className="text-gray-800">Honoring</span>
          {" Our Commitment to Excellence"}
          <span className="text-gray-800"> Award-Winning IT Solutions in Sydney</span>
        </h2>
        <p
          className={`text-gray-700 text-sm sm:text-base line-clamp-3 md:line-clamp-none  mt-4`}
        >
          {
            "We are proud to be awarded for our excellence in web and mobile application solution delivery. Our out-of-the-box thinking has brought us a number of awards, making us one of the top IT solutions providers in Sydney. From custom development to smooth  user experience, our team is committed to breaking barriers and delivering real-world impact"
          }
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-20 py-10">
        {[1, 2, 3, 4].map((faq, index) => (
          <div key={index} className="flex justify-center">
            <Image
              width={400}
              height={400}
              alt="image"
              unoptimized
              priority
              src={`/assets/aaa${index + 1}.png`}
              className="w-full object-fill rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
