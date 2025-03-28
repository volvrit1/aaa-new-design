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
