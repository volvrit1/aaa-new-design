"use client"
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { TbAlphabetLatin, TbUxCircle } from "react-icons/tb";
import { HiCheckBadge, HiOutlineCodeBracketSquare } from "react-icons/hi2";
import Modal from "./Modal";
import GetStartedForm from "./ContactUs";
import ProjectCard from "./ProjectCard";
import { websites } from "@/data/data";

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
        {websites.map((work, index) => (
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
