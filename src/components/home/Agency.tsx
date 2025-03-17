import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Agency() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4 font-[cabin]">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
        {[1, 2, 3, 4].map((faq, index) => (
          <div key={index} className="lg:w-2/12">
            <Image
              width={400}
              height={400}
              alt="image"
              src={`/assets/award${[index + 1]}.png`}
              className="w-full  object-fill rounded-xl"
            />
          </div>
        ))}
      </div>
      <div className=" m-auto mb-18 text-center">
        <h3
          className={`text sm:text-sm md:text-sm lg:text-sm xl:text-sm font-semibold tracking-widest 
                 text-gray-500
              leading-8 mb-3`}
        >
          We Are Creative Agency
        </h3>
        <h2
          className={`lg:w-5/6 m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-[#EE3639] leading-8 mb-4 `}
        >
          {" Top Rated "}
          <span className="text-gray-500">
            Web And Mobile App Development Company
          </span>
        </h2>
        <p
          className={`text-gray-800 text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[14px] line-clamp-3 md:line-clamp-none  mt-4 mb-10 lg:w-4/5 m-auto leading-5`}
        >
          {
            "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices."
          }
        </p>
        <div className="flex justify-center items-center gap-20">
          <div className="lg:w-3/5 h-96 rounded-full border-[#EE3639] border ">
            <Image
              width={400}
              height={400}
              alt="image"
              src={`/assets/agency.png`}
              className="w-11/12 h-full m-auto  object-fill rounded-full"
            />
          </div>
          <div className="lg:w-2/5 text-left">
            <h2
              className={` m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-[#EE3639] leading-8 mb-4 `}
            >
              <span className="text-gray-500">Big Ideas,</span>{" "}
              {" Creative People "}
              <span className="text-gray-500">, new technology.</span>
            </h2>
            <p
              className={`text-gray-800 text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[14px] line-clamp-3 md:line-clamp-none  mt-4 mb-6 m-auto leading-5`}
            >
              {
                "At the heart of everything we do are groundbreaking ideas, a passionate team of creative minds, and the latest technology. We blend innovation with expertise to develop unique solutions that push boundaries and transform visions into reality. Whether it's crafting intuitive apps, designing engaging digital experiences, or leveraging emerging tech, we’re dedicated to helping businesses thrive in a fast-paced digital landscape."
              }
            </p>
            <Link
              href={""}
              className=" p-3.5 w-44 text-center hover:bg-[#EE3639] text-gray-[#242424] hover:text-gray-50 border border-[#EE3639] transition-colors ease-in-out flex justify-center items-center"
            >
              Know More {" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
