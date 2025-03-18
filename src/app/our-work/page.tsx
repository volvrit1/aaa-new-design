import HeroSection from "@/app/components/common/HeroSection";
import OurLatestWork from "@/app/components/home/OurLatestWork";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineCodeBracketSquare, HiCheckBadge } from "react-icons/hi2";
import { TbUxCircle, TbAlphabetLatin } from "react-icons/tb";

export default function page() {
  const breadcrumbPaths = [
    { label: "Home", href: "/" },
    { label: "Our Work", href: "/our-work" },
  ];
  return (
    <div>
      <HeroSection
        title="Showcasing"
        title1=" Our Expertise"
        title2=": Innovative IT Solutions That Drive Success"
        colorTitle1="#EE3639"
        colorTitle2="#"
        description="A Next-Gen Firm Revolutionizing the Digital Landscape with Seamless, Result-Driven, and Cost-Effective Services and Solutions. We specialize in transforming businesses using cutting-edge technologies, providing tailor-made solutions that meet your unique needs. "
        link={"tel:+91424242424"}
        breadcrumb={breadcrumbPaths}
      />
     <div className="container max-w-7xl mx-auto p-4 lg:p-16 lg:py-28 space-y-4 font-[cabin]">
      <div >
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
            className="w-full lg:h-screen rounded-xl bg-gray-100 p-4 flex flex-col-reverse lg:flex-row justify-center lg:p-18 mb-10"
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
              className="lg:w-3/5  object-contain rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
