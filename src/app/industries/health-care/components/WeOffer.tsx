"use client"
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay } from "swiper/modules";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

export default function WeOffer() {
  const swiperRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(1); // Start from the first slide
  const [chunkSize, setChunkSize] = useState(1); // Default to 1
  const [isClient, setIsClient] = useState(false); // To check if running in the client

  // Handle slide change and update the current slide state
  const handleSlideChange = (swiper: any) => {
    setCurrentSlide(swiper.realIndex + 1); // Swiper uses zero-indexing, so we add 1 to get the correct slide number
  };

  const websites = [
    {
      title: "EMR/EHR Software",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
    },
    {
      title: "Healthcare CRM",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
    },
    {
      title: "Patient Engagement Software",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. ",
    },
    {
      title: "Hospital Management Software ",
      description:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble.",
    },
    {
      title: "Software for Medical Device",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
    },
    {
      title: "Pharmacy Management Software",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
    },
    {
      title: "EMR/EHR Software",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
    },
    {
      title: "Healthcare CRM",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
    },
    {
      title: "Patient Engagement Software",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. ",
    },
    {
      title: "Hospital Management Software ",
      description:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble.",
    },
    {
      title: "Software for Medical Device",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
    },
    {
      title: "Pharmacy Management Software",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
    },
  ];

  const chunkArray = (arr: any, size: any) => {
    return arr.reduce(
      (acc: any, _: any, i: any) =>
        i % size ? acc : [...acc, arr.slice(i, i + size)],
      []
    );
  };

  // Effect hook to check if the code is running on the client-side
  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      if (window.innerWidth <= 1000) {
        setChunkSize(1);
      } else {
        setChunkSize(6);
      }
    };
    handleResize(); // Initialize chunkSize on mount

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Only run chunkArray and render Swiper if we're on the client
  const groupedWebsites = isClient ? chunkArray(websites, chunkSize) : [];

  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16">
      <h1 className="font-[poppins] text-3xl font-medium text-black mb-4">
        {"Suite of Travel Application and Software Solutions We Offer"}
      </h1>

      <p className="font-[poppins] tracking-wide mb-6 text-[#7D7D7D]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim
      </p>
      <div className="relative">
        {/* Custom Navigation Arrows */}
        <div className="flex justify-between space-x-4 mb-4">
          <div className="custom-pagination">
            <span className="text-xl font-semibold text-black">{`0${currentSlide} -`}</span>
            <span className="text-xl font-semibold text-[#7d7d7d]">{` 0${websites.length}`}</span>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="p-1 border transition"
            >
              <IoIosArrowRoundBack className="text-4xl text-gray-800" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="p-1 border transition"
            >
              <IoIosArrowRoundForward className="text-4xl text-gray-800" />
            </button>
          </div>
        </div>
        {isClient && ( // Only render Swiper on client-side
          <Swiper
            spaceBetween={20}
            slidesPerView={1} // Each slide contains 6 items
            loop={true}
            autoplay={{ delay: 3000 }}
            navigation={false}
            modules={[Autoplay]}
            className="h-full"
            onSlideChange={handleSlideChange}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {groupedWebsites.map((group: any, groupIndex: any) => (
              <SwiperSlide key={groupIndex}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {group.map((work: any, index: any) => (
                    <div
                      key={index}
                      className="border p-4 m-1 border-[#7D7D7D]/70 h-60"
                    >
                      <h2 className="font-[poppins] text-xl font-medium text-black mb-4">
                        {work?.title}
                      </h2>
                      <p className="text-sm font-[poppins] text-[#7D7D7D] line-clamp-6">
                        {work?.description}
                      </p>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}
