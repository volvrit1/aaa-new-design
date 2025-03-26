import HeroSection from "@/app/components/common/HeroSection";
import OurLatestWork from "@/app/components/home/OurLatestWork";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineCodeBracketSquare, HiCheckBadge } from "react-icons/hi2";
import { TbUxCircle, TbAlphabetLatin } from "react-icons/tb";
import ProjectCard from "../components/home/ProjectCard";

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
        link={"tel:0411 537 183"}
        breadcrumb={breadcrumbPaths}
      />
      <div className="bg-white">
        <div className="container max-w-7xl mx-auto p-4 lg:p-16 lg:py-28 space-y-4 font-[poppins] tracking-widest">
          <div className="">
            {[
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
                image: "/assets/work2.png",
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
                image: "/assets/work3.png",
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
                image: "/assets/work4.png",
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
                image: "/assets/work5.png",
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
                image: "/assets/work6.png",
                description:
                  "Select Insure offers full-range insurance solutions designed to address the varied needs of individuals and enterprises. They provide a variety of options to achieve the right coverage for any given situation.",
                link: "/healthcare",
                bgColor: "bg-[#729855]",
                textColor: "text-[#729855]",
                tags: ["UX/UI Design Strategy", "SAAS Development", "CRM Integration", "API Integration"],
              }
            ]
              .map((work, index) => (
                <React.Fragment key={index}>
                  <ProjectCard index={index} work={work} />
                </React.Fragment>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
