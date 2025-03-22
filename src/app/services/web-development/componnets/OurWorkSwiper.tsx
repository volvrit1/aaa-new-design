"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import ProjectCard from "@/app/components/home/ProjectCard";
import { Autoplay, Navigation } from "swiper/modules";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function OurWorkSwiper() {
    const swiperRef = useRef<any>(null);

    const websites = [
        {
            title: "UNIFI CARS",
            href: "https://unificars.com",
            image: "/assets/work1.png",
            description:
                "Unifi Cars deals in providing good quality used cars. They have a wide range of pre-owned vehicles, providing customers with dependable and affordable solutions to suit their requirements.",
            link: "/healthcare",
            bgColor: "bg-[#F97316]",
            textColor: "text-[#F97316]",
            tags: ["UX/UI Design Strategy", "Development Process", "Mobile App Development", "API Integration"],
        },
        {
            title: "BYD Auto",
            href: "https://bydbahrain.com",
            image: "/assets/work1.png",
            description:
                "BYD is a world leader in electric cars and renewable energy solutions. They are a dominant force in the clean energy and EV industry because of their approach to sustainability.",
            link: "/healthcare",
            bgColor: "bg-[#2A2B2C]",
            textColor: "text-[#2A2B2C]",
            tags: ["UX/UI Design Strategy", "Development Process", "Testing Phase", "Quality Assurance"],
        },
        {
            title: "DUNLOP TYRES",
            href: "https://www.dunlopbahrain.com/en-bh/index.html",
            image: "/assets/work1.png",
            description:
                "Dunlop is famous for its long-lasting and high-performance tyres. Having a vast assortment of tyres for cars, trucks, and motorbikes, they focus on safety, performance, and long lifespan in their products.",
            link: "/healthcare",
            bgColor: "bg-[#F1C602]",
            textColor: "text-[#F1C602]",
            tags: ["UX/UI Design Strategy", "SAAS Development", "CRM"],
        },
        {
            title: "VISAFLOW",
            href: "https://visaflow.com.au",
            image: "/assets/work1.png",
            description:
                "Visa Flow makes the visa application process easier for individuals and companies. Their platform simplifies the whole process, making visa applications quicker and more efficient.",
            link: "/healthcare",
            bgColor: "bg-[#032167]",
            textColor: "text-[#032167]",
            tags: ["UX/UI Design Strategy", "Development Process", "Mobile App Development", "Quality Assurance"],
        },
        {
            title: "CAREWORLD",
            href: "https://www.careworld.com.au",
            image: "/assets/work1.png",
            description:
                "Careworld is committed to offering support and resources for those in need of healthcare and caregiving services. Their site provides vital information to assist in overcoming healthcare issues.",
            link: "/healthcare",
            bgColor: "bg-[#519FBD]",
            textColor: "text-[#519FBD]",
            tags: ["UX/UI Design Strategy", "SAAS Development", "LMS", "Mobile App Development"],
        },
        {
            title: "SELECT INSURANCE",
            href: "https://selectinsure.com.au",
            image: "/assets/work1.png",
            description:
                "Select Insure offers full-range insurance solutions designed to address the varied needs of individuals and enterprises. They provide a variety of options to achieve the right coverage for any given situation.",
            link: "/healthcare",
            bgColor: "bg-[#729855]",
            textColor: "text-[#729855]",
            tags: ["UX/UI Design Strategy", "SAAS Development", "CRM Integration", "API Integration"],
        }
    ]

    return (
        <div className="container max-w-7xl mx-auto p-4 lg:py-20 space-y-6">
            <div className="relative">
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
