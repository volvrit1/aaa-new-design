"use client";

import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { Autoplay, Navigation } from "swiper/modules";
import ProjectCard from "@/app/components/home/ProjectCard";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function HealthCareWork() {
  const swiperRef = useRef<any>(null);

  const websites = [
    {
      title: "Unfazed",
      href: "https://www.unfazed.in",
      image: "/assets/unfazed.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      link: "/healthcare",
      bgColor: "bg-[#EE3639]",
      textColor: "text-gray-50",
      cardBgColor: "bg-[#242424] rounded-2xl p-8",
      pColor: "text-gray-50",
      tags: [
        "UX/UI Design Strategy",
        "Development Process",
        "Testing Phase",
        "Quality Assurance",
      ],
    },
  ];

  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 lg:pb-0 space-y-6">
      <h1 className="font-[poppins] text-2xl font-medium text-black mb-4">
        {"Showcasing our work cutting-edge Healthcare Industry"}
      </h1>

      <p className="font-[poppins] mb-6 text-[#7D7D7D]">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident
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
          {websites.map((work, index) => (
            <SwiperSlide key={index}>
              <ProjectCard index={index} work={work} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        {websites?.length > 1 && (
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
        )}
      </div>
    </div>
  );
}
