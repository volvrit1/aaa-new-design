"use client";

import React, { useRef } from "react";
import ProjectCard from "@/app/components/home/ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Navigation } from "swiper/modules";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function OurWorkCutting({ title, description, data }: any) {
  const swiperRef = useRef<any>(null);

  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16  space-y-4 font-[urbanist]">
      <h2 className="font-[poppins] text-3xl text-gray-800 font-medium mb-4">
        {title || ""}
      </h2>
      <p className="text-base text-[#969696]  font-[cabin]">
        {description || ""}
      </p>

      <div className="relative mt-10">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          navigation={false}
          modules={[Autoplay, Navigation]} // Removed Pagination module
          className="h-full"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {data &&
            data.map((work: any, index: any) => (
              <SwiperSlide key={index}>
                <ProjectCard index={index} work={work} />
              </SwiperSlide>
            ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="p-3 rounded-full bg-[#EE3639] transition"
          >
            <AiOutlineLeft className="text-xl text-white" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="p-3 rounded-full bg-[#EE3639] transition"
          >
            <AiOutlineRight className="text-xl text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
