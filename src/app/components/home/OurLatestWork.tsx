import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiCheckBadge, HiOutlineCodeBracketSquare } from "react-icons/hi2";
import { TbAlphabetLatin, TbUxCircle } from "react-icons/tb";

export default function OurLatestWork() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4 font-[cabin] tracking-widest">
      <div className="lg:w-5/6 m-auto mb-18 text-center">
        <h3
          className={`text sm:text-sm md:text-sm lg:text-sm xl:text-sm font-semibold tracking-widest 
                 text-gray-500
              leading-8 mb-3`}
        >
          Our Latest Work
        </h3>
        <h2
          className={`lg:w-5/6 m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-[#EE3639] leading-8 mb-4 `}
        >
          <span className="text-gray-800"> Showcasing</span>
          {" Our Latest Work "}
          <span className="text-gray-800">
            {" "}
            Showcasing Cutting-Edge IT Solutions in Action
          </span>
        </h2>
        <p
          className={`text-gray-500 text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[14px] line-clamp-3 md:line-clamp-none  mt-4 leading-5`}
        >
          {
            "We’re proud to present our latest projects that reflect our commitment to quality and innovation. From cutting-edge web development to impactful solutions, our work speaks for itself. Explore our portfolio to see how we’re helping clients achieve their goals with precision and excellence."
          }
        </p>
      </div>
      <div className="">
        {[
          {
            title: "UNIFI CARS",
            image: "/assets/work1.png",
            description:
              "Unifi Cars deals in providing good quality used cars. They have a wide range of pre-owned vehicles, providing customers with dependable and affordable solutions to suit their requirements.",
            link: "/healthcare",
            bgColor: "bg-[#F97316]",
            textColor: "text-[#F97316]",
          },
          {
            title: "BYD",
            image: "/assets/work1.png",
            description:
              "BYD is a world leader in electric cars and renewable energy solutions. They are a dominant force in the clean energy and EV industry because of their approach to sustainability.",
            link: "/healthcare",
            bgColor: "bg-[#2A2B2C]",
            textColor: "text-[#2A2B2C]",
          },
          {
            title: "DUNLOP",
            image: "/assets/work1.png",
            description:
              "Dunlop is famous for its long-lasting and high-performance tyres. Having a vast assortment of tyres for cars, trucks, and motorbikes, they focus on safety, performance, and long lifespan in their products.",
            link: "/healthcare",
            bgColor: "bg-[#F1C602]",
            textColor: "text-[#F1C602]",
          },
          {
            title: "VISAFLOW",
            image: "/assets/work1.png",
            description:
              "Visa Flow makes the visa application process easier for individuals and companies. Their platform simplifies the whole process, making visa applications quicker and more efficient.",
            link: "/healthcare",
            bgColor: "bg-[#032167]",
            textColor: "text-[#032167]",
          },
          {
            title: "CAREWORLD",
            image: "/assets/work1.png",
            description:
              "Careworld is committed to offering support and resources for those in need of healthcare and caregiving services. Their site provides vital information to assist in overcoming healthcare issues.",
            link: "/healthcare",
            bgColor: "bg-[#519FBD]",
            textColor: "text-[#519FBD]",
          },
          {
            title: "SELECT INSURE",
            image: "/assets/work1.png",
            description:
              "Select Insure offers full-range insurance solutions designed to address the varied needs of individuals and enterprises. They provide a variety of options to achieve the right coverage for any given situation.",
            link: "/healthcare",
            bgColor: "bg-[#729855]",
            textColor: "text-[#729855]",
          },
        ].map((work, index) => (
          <div
            key={index}
            className="w-full lg:h-screen xl:h-auto rounded-xl bg-gray-100 p-4 flex flex-col-reverse lg:flex-row justify-center lg:p-18 mb-10"
          >
            <div className="lg:w-3/6">
              <h2
                className={`${work?.textColor} text-4xl font-semibold mb-4 mx-auto text-left`}
              >
                {work?.title}
              </h2>
              <p className="font-[cabin] tracking-widest text-gray-800 text-sm  mr-auto mb-6 text-left">
                {work?.description}
              </p>
              <div className="mb-12">
                <h4 className="mb-8 ">Design & Development</h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 gap-y-4 lg:gap-y-8 text-base">
                  <span className="flex items-center gap-2">
                    <TbUxCircle
                      // src={"/assets/ui.png"}
                      // alt="work"
                      width={500}
                      height={500}
                      className={`h-7 w-7 ${work?.textColor}`}
                    />
                    UX/UI Design Strategy
                  </span>
                  <span className="flex items-center gap-2">
                    <HiOutlineCodeBracketSquare
                      width={500}
                      height={500}
                      className={`h-7 w-7 ${work?.textColor}`}
                    />
                    Development Process
                  </span>
                  <span className="flex items-center gap-2">
                    <TbAlphabetLatin
                      width={500}
                      height={500}
                      className={`h-7 w-7 ${work?.textColor}`}
                    />
                    Testing Phase
                  </span>
                  <span className="flex items-center gap-2">
                    <HiCheckBadge
                      width={500}
                      height={500}
                      className={`h-7 w-7 ${work?.textColor}`}
                    />
                    Quality Assurance
                  </span>
                </div>
              </div>
              <Link
                href={""}
                type="button"
                className={`${work?.bgColor} w-full lg:w-auto text-center p-3.5 px-12 rounded-lg text-gray-50 inline-block`}
              >
                View Project
              </Link>
            </div>
            <Image
              width={400}
              height={400}
              alt="image"
              src={`/assets/work${[index + 1]}.png`}
              className="lg:w-3/6  object-contain rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
