import Image from "next/image";
import React from "react";
import { IoIosPlay } from "react-icons/io";

export default function Testimonials() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4">
      <div className="lg:w-5/6 m-auto mb-18 text-center">
        <h2
          className={`text sm:text-sm md:text-sm lg:text-sm xl:text-sm font-semibold tracking-widest 
                  text-gray-800
               leading-8 mb-3`}
        >
          Testimonials
        </h2>
        <h2
          className={`lg:w-5/6 m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-[#EE3639] leading-8 mb-4 `}
        >
          <span className="text-gray-800">
            What Our Clients Say: & Success Stories
          </span>
          {" Trusted Testimonials "}
          <span className="text-gray-800">& Success Stories</span>
        </h2>
        <p
          className={`text-gray-800 text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[14px] line-clamp-3 md:line-clamp-none  mt-4 leading-5`}
        >
          {
            "BWD WEB stands out for its innovative solutions, expert team, and commitment to quality. We deliver custom web and mobile applications that combine cutting-edge technology with seamless user experiences. Our focus on creativity, reliability, and client satisfaction makes us a trusted partner for businesses looking to grow and succeed in the digital world."
          }
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-4  gap-6">
        <div className="relative rounded-t-2xl overflow-hidden">
          {" "}
          <Image
            src={"/assets/testiboy.png"}
            width={500}
            height={500}
            alt="image"
            className="object-fill "
          />
          <div className="absolute bottom-2 w-full left-1 flex justify-center items-center gap-4 ">
            <div className="rounded-full p-4 h-12 w-12 flex justify-center items-center bg-gray-50">
              <IoIosPlay width={35} height={35} className="text-4xl" />
            </div>
            <span className="font-[cabin] text-2xl text-gray-50">
              Mr. Willam
            </span>
          </div>
        </div>
        <div className="rounded-t-2xl relative overflow-hidden">
          {" "}
          <Image
            src={"/assets/testigirl.png"}
            width={500}
            height={500}
            alt="image"
            className="object-fill"
          />
          <div className="absolute bottom-2 w-full left-1 flex justify-center items-center gap-4 ">
            <div className="rounded-full p-4 h-12 w-12 flex justify-center items-center bg-gray-50">
              <IoIosPlay width={35} height={35} className="text-4xl" />
            </div>
            <span className="font-[cabin] text-2xl text-gray-50">Ms.Suzi</span>
          </div>
        </div>
        <div className="col-span-2 flex flex-col justify-center pl-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            libero molestiae dicta quia, mollitia maiores assumenda
            necessitatibus, earum corrupti, ex incidunt. In ipsum alias
            expedita? Repellendus temporibus vel similique molestias!
          </p>
          <div className="flex items-center">
            <Image
              src={"/assets/profile.png"}
              width={500}
              height={500}
              alt="image"
              className="w-13 h-13 rounded-full "
            />
            <div>
              <h2 className="text-lg font-bold font-[cabin]">Mathila Burns</h2>
              <h3 className="text-xs text-gray-600">Fashion Studio, Dubai</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
