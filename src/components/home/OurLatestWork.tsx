import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiCheckBadge, HiOutlineCodeBracketSquare } from "react-icons/hi2";
import { TbAlphabetLatin, TbUxCircle } from "react-icons/tb";

export default function OurLatestWork() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4 font-[cabin]">
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
          <span className="text-gray-500"> Showcasing</span>
          {" Our Latest Work "}
          <span className="text-gray-500">
            {" "}
            Showcasing Cutting-Edge IT Solutions in Action
          </span>
        </h2>
        <p
          className={`text-gray-500 text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[14px] line-clamp-3 md:line-clamp-none  mt-4 leading-5`}
        >
          {
            "BWD WEB stands out for its innovative solutions, expert team, and commitment to quality. We deliver custom web and mobile applications that combine cutting-edge technology with seamless user experiences. Our focus on creativity, reliability, and client satisfaction makes us a trusted partner for businesses looking to grow and succeed in the digital world."
          }
        </p>
      </div>
      <div className="">
        {[
          {
            title: "UNIFI CARS",
            image: "/assets/work1.png",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            link: "/healthcare",
            bgColor: "bg-[#F97316]",
            textColor: "text-[#F97316]",
          },
          {
            title: "BYD",
            image: "/assets/work1.png",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            link: "/healthcare",
            bgColor: "bg-[#2A2B2C]",
            textColor: "text-[#2A2B2C]",
          },
          {
            title: "DUNLOP",
            image: "/assets/work1.png",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            link: "/healthcare",
            bgColor: "bg-[#F1C602]",
            textColor: "text-[#F1C602]",
          },
          {
            title: "VISAFLOW",
            image: "/assets/work1.png",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            link: "/healthcare",
            bgColor: "bg-[#032167]",
            textColor: "text-[#032167]",
          },
          {
            title: "CAREWORLD",
            image: "/assets/work1.png",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            link: "/healthcare",
            bgColor: "bg-[#519FBD]",
            textColor: "text-[#519FBD]",
          },
          {
            title: "SELECT INSURE",
            image: "/assets/work1.png",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            link: "/healthcare",
            bgColor: "bg-[#729855]",
            textColor: "text-[#729855]",
          },
        ].map((work, index) => (
          <div
            key={index}
            className="w-full h-screen rounded-xl bg-gray-100 p-4 flex flex-col lg:flex-row justify-center lg:p-18 mb-10"
          >
            <div>
              <h2
                className={`${work?.textColor} text-4xl font-semibold mb-4 mx-auto text-left`}
              >
                {work?.title}
              </h2>
              <p className="text-gray-800 text-sm  mr-auto mb-6 text-left">
                {work?.description}
              </p>
              <div className="mb-12">
                <h4 className="mb-8 ">Design & Development</h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 gap-y-8 text-base">
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
                className={`${work?.bgColor} p-3.5 px-12 rounded-lg text-gray-50 inline-block`}
              >
                View Project
              </Link>
            </div>
            <Image
              width={400}
              height={400}
              alt="image"
              src={`/assets/work${[index + 1]}.png`}
              className="w-3/5  object-contain rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
