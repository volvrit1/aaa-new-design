"use client"
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { TbAlphabetLatin, TbUxCircle } from "react-icons/tb";
import { HiCheckBadge, HiOutlineCodeBracketSquare } from "react-icons/hi2";
import Modal from "./Modal";
import GetStartedForm from "./ContactUs";
import ProjectCard from "./ProjectCard";

export default function OurLatestWork() {
  const [showModal, setShowModal] = useState(false);
  const handleIOpenModal = () => { setShowModal(!showModal) }

  useEffect(() => {
    if (showModal) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [showModal])

  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 lg:py-0 space-y-4 font-[poppins] tracking-widest">
      <div className="lg:w-5/6 m-auto mt-6 lg:mt-0 mb-10 md:mb-18 text-center">
        <h3
          className={`text sm:text-lg font-semibold tracking-widest 
                 text-gray-500
               mb-3`}
        >
          Our Latest Work
        </h3>
        <Modal width="w-auto" hidePadding={true} isVisible={showModal} onClose={handleIOpenModal}>
          <GetStartedForm handleClose={handleIOpenModal} />
        </Modal>
        <h2
          className={`lg:w-5/6 m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-[#EE3639] mb-4 `}
        >
          <span className="text-gray-800"> Showcasing</span>
          {" Our Latest Work "}
          <span className="text-gray-800">
            {" "}
            Innovative Solutions in Action
          </span>
        </h2>
        <p
          className={`text-gray-800 text-sm sm:text-base line-clamp-3 md:line-clamp-none  mt-4`}
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
        <div className="flex justify-center items-center">
          <button
            onClick={handleIOpenModal}
            className="px-10 p-4 text-lg font-bold whitespace-nowrap text-center bg-[#EE3639] text-gray-50 hover:text-[#EE3639] hover:bg-transparent border transition-colors ease-in-out flex justify-center items-center"
          >
            Discuss Your Project
          </button>
        </div>
      </div>
    </div>
  );
}
