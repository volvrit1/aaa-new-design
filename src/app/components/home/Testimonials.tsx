"use client";
import Image from "next/image";
import React from "react";
import { IoIosPlay } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John D.",
      position: "CEO",
      description:
        "Above All Agency transformed our website and improved our digital marketing efforts significantly. Their team is professional, responsive, and always ready to offer creative solutions. We’ve seen a noticeable increase in traffic and customer engagement. Highly recommend!",
    },
    {
      name: "Sarah M.",
      position: "Marketing Director",
      description:
        "We’ve worked with Above All Agency on several projects, from app development to SEO services, and they’ve consistently delivered high-quality work. Their attention to detail and commitment to our success has been impressive. We look forward to continuing our partnership.",
    },
    {
      name: "Alex T.",
      position: "Founder",
      description:
        "The Above All Agency team provided us with a seamless and efficient e-commerce platform that perfectly fits our needs. Their expertise in user experience and mobile optimization helped us attract more customers. Their support has been exceptional, and we couldn't be happier with the results.",
    },
    {
      name: "Rachel S.",
      position: "COO",
      description:
        "From the initial consultation to the final product launch, Above All Agency has been a true partner. They developed a custom software solution that streamlines our operations and saves us time and money. The team is highly skilled and always delivers on time.",
    },
    {
      name: "Mike L.",
      position: "Founder",
      description:
        "Above All Agency’s digital marketing strategies helped us improve our online presence and reach more students. Their SEO and social media campaigns brought us fantastic results. The team is professional, knowledgeable, and easy to work with. We are grateful for their services.",
    },
    {
      name: "Emily R.",
      position: "Project Manager",
      description:
        "Above All Agency is a game-changer. They built us a stunning, responsive website and optimized it for local SEO, which has dramatically increased our online leads. The team was proactive, communicative, and quick to address our concerns. A true pleasure to work with!",
    },
    {
      name: "Chris W.",
      position: "CTO",
      description:
        "Working with Above All Agency has been an incredible experience. They delivered top-notch mobile apps and have provided ongoing maintenance support that keeps everything running smoothly. Their team is reliable, innovative, and professional.",
    },
    {
      name: "Diana P.",
      position: "CEO",
      description:
        "Above All Agency’s consulting services helped us rethink our IT infrastructure and streamline our operations. They brought forward innovative solutions that fit our business perfectly. Their expertise in IT solutions is unmatched, and we would highly recommend them to any business.",
    },
    {
      name: "Tom G.",
      position: "Owner",
      description:
        "We needed a new website and app for our fitness brand, and Above All Agency delivered beyond our expectations. They helped us create an amazing user experience, and their SEO strategies have helped us reach a much broader audience. We're really happy with the results!",
    },
    {
      name: "Laura B.",
      position: "Director",
      description:
        "Above All Agency is our go-to partner for all things IT. They’ve developed multiple software solutions for us, and each one has been well-executed and has made a significant impact on our efficiency. They are responsive, knowledgeable, and always offer great value.",
    },
  ];

  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4">
      <div className="lg:w-5/6 m-auto mb-18 text-center">
        <h2
          className={`text sm:text-lg font-semibold tracking-widest 
                  text-gray-800
               leading-8 mb-3`}
        >
          Testimonials
        </h2>
        <h2
          className={`lg:w-full m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-[#EE3639] leading-8 mb-4 `}
        >
          <span className="text-gray-800">What Our Clients Say:</span>
          {" Trusted Testimonials "}
          <span className="text-gray-800">& Success Stories</span>
        </h2>
        <p
          className={`text-gray-800 text-sm sm:text-base line-clamp-3 md:line-clamp-none  mt-4 leading-5`}
        >
          {
            "Our clients' success is our top priority. We've had the privilege of working with businesses across Sydney, delivering customised  web and mobile solutions that drive growth, enhance online presence, and help them achieve long-term digital success in an ever-evolving market."
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
          <div className="absolute bottom-2 w-full left-1 flex justify-start items-center gap-4 ">
            <div className="rounded-full p-1 h-12 w-12 flex justify-center items-center bg-gray-50">
              <IoIosPlay width={35} height={35} className="text-4xl" />
            </div>
            <span className="font-[poppins] tracking-widest text-2xl text-gray-50">
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
          <div className="absolute bottom-2 w-full left-1 flex justify-start items-center gap-4 ">
            <div className="rounded-full p-1 h-12 w-12 flex justify-center items-center bg-gray-50">
              <IoIosPlay width={35} height={35} className="text-4xl" />
            </div>
            <span className="font-[poppins] tracking-widest text-2xl text-gray-50">
              Ms.Suzi
            </span>
          </div>
        </div>
        {/* <div className="lg:col-span-2 flex flex-col justify-center pl-5">
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
              <h2 className="text-lg font-bold font-[poppins] tracking-widest">
                Mathila Burns
              </h2>
              <h3 className="text-xs text-gray-600">Fashion Studio, Dubai</h3>
            </div>
          </div>
        </div> */}
        <div className="col-span-2">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            navigation={false}
            pagination={{ clickable: false }}
            modules={[Autoplay, Navigation, Pagination]}
            className="h-full"
          >
            {testimonials &&
              testimonials.map((data, index) => (
                <SwiperSlide key={index}>
                  <div className="lg:col-span-2 text-black flex flex-col justify-center pl-5">
                    <p>{data?.description}</p>
                    <div className="flex' items-center gap-2 py-4">
                      <Image
                        src="/assets/user.png"
                        width={500}
                        height={500}
                        alt="image"
                        className="w-13 h-13 rounded-full"
                      />
                      <div>
                        <h2 className="text-lg font-bold font-[poppins] tracking-widest">
                          {data?.name}
                        </h2>
                        <h3 className="text-xs text-gray-600">
                          {data?.position}
                        </h3>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
