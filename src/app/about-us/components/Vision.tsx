import Image from "next/image";
import React from "react";

export default function Vision() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4 font-[poppins] tracking-widest">
      <div className="flex flex-col md:flex-row justify-center items-center gap-20">
        <div className="lg:w-1/2 text-left">
          <h2
            className={` m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-[#EE3639] mb-4 `}
          >
            <span className="text-gray-800">Our Vision</span>{" "}
          </h2>
          <p
            className={`text-gray-500 text-sm sm:text-base line-clamp-3 md:line-clamp-none  mt-4 mb-6 m-auto`}
          >
            {
              "Our Vision is to create innovative technology solutions that simplify and improve the daily lives of individuals and businesses. At MobileCoderz, we strive to be a leader in Application Development and we constantly push the boundaries of what is possible with software development. We value diversity, inclusivity, and sustainability in our operations and culture. We aim to provide excellent customer service and build long-lasting relationships with our clients."
            }
          </p>
          <h2
            className={` m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-[#EE3639] mb-4 `}
          >
            <span className="text-gray-800">Our Mission</span>{" "}
          </h2>
          <p
            className={`text-gray-500 text-sm sm:text-base line-clamp-3 md:line-clamp-none  mt-4 mb-6 m-auto`}
          >
            {
              "Our Vision is to create innovative technology solutions that simplify and improve the daily lives of individuals and businesses. At MobileCoderz, we strive to be a leader in Application Development and we constantly push the boundaries of what is possible with software development. We value diversity, inclusivity, and sustainability in our operations and culture. We aim to provide excellent customer service and build long-lasting relationships with our clients."
            }
          </p>
        </div>
        <div className="lg:w-1/2 relative h-96 rounded-xl  border-[#EE3639] border ">
          <Image
            width={400}
            height={400}
            alt="image"
            src={`/assets/agency.png`}
            className="w-full h-full m-auto rounded-xl  object-fill"
          />
          <div className="w-48 h-48 absolute left-[-2rem] bottom-[-2rem] bg-white rounded-full p-4 flex flex-col justify-center items-center ">
            <Image
              width={400}
              height={400}
              alt="image"
              src={`/assets/logo/logo-dark.png`}
              className="w-full h-full object-contain rounded-xl mb-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
