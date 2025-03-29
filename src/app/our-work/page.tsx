import React from "react";
import { websites } from "@/data/data";
import ProjectCard from "../components/home/ProjectCard";
import HeroSection from "@/app/components/common/HeroSection";

export default function page() {
  const breadcrumbPaths = [
    { label: "Home", href: "/" },
    { label: "Our Work", href: "/our-work" },
  ];
  return (
    <div>
      <HeroSection
        title=""
        title1=""
        title2="Driving Success with Innovative IT Solutions – Our Proven Impact Across Industries"
        colorTitle1="#EE3639"
        colorTitle2="#"
        description="We specialize in providing innovative IT solutions with measurable success. With a solid track record, we develop custom strategies that equip businesses to grow, innovate, and prosper in the digital world of today."
        link={"tel:0411 537 183"}
        breadcrumb={breadcrumbPaths}
      />
      <div className="bg-white">
        <div className="container max-w-7xl mx-auto p-4 lg:p-16 lg:py-28 space-y-4 font-[poppins] tracking-widest">
          <div className="">
            {websites.map((work, index) => (
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
