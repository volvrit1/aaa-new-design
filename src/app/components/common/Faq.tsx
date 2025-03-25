"use client";

import React, { useState } from "react";
import { BsDash, BsDashCircle } from "react-icons/bs";
import {
  IoIosAdd,
  IoIosAddCircle,
  IoIosAddCircleOutline,
} from "react-icons/io";
import HeaderSection from "./HeaderSection";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number>(0); // First FAQ open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };
  return (
    <div className="container max-w-7xl p-4 mx-auto lg:p-16 space-y-4 ">
      <div className="lg:w-5/6 m-auto mt-6 lg:mt-0 mb-10 md:mb-18 text-center">
        <h2
          className={`text sm:text-lg font-semibold tracking-widest 
              text-gray-800
            mb-3`}
        >
          FAQ's
        </h2>
        <h2
          className={`lg:w-5/6 m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-[#EE3639] mb-4 `}
        >
          {"Frequently Asked Questions:"}{" "}
          <span className="text-gray-800">
            {" "}
            Everything You Need to Know About Our IT Services
          </span>
        </h2>
        <p
          className={`text-gray-700 text-sm sm:text-base line-clamp-3 md:line-clamp-none  mt-4`}
        >
          {
            "We know that selecting the appropriate IT partner is an important decision. To assist you in making a well-informed decision, here are some of the most frequently asked questions we get:"
          }
        </p>
      </div>
      <div className="grid grid-cols-1 place-items-start gap-2 lg:gap-6">
        {[
          {
            question: "What are the services provided by Above All Agency?",
            answer:
              "We offer various IT services such as software development, web development, mobile application development, digital marketing, search engine optimization, and IT consulting.",
          },
          {
            question:
              "Does Above All Agency provide tailored software solutions?",
            answer:
              "Yes, we create custom software solutions just to meet the specific needs of our clients. We work closely with you to determine your business needs and provide customised solutions.",
          },
          {
            question: "Do you provide website design and development services?",
            answer:
              "Yes! We create search engine optimized, mobile optimized, and user optimized websites.",
          },
          {
            question: "What industries does your agency specialize in?",
            answer:
              "Our team is well-versed in many industries with a special interest in healthcare, e-commerce, finance, education, and property.",
          },
          {
            question: "Do you provide SEO and online marketing services?",
            answer:
              "Yes, we are able to provide SEO, social media marketing, content marketing, and pay-per-click (PPC) advertising services to maximize your web presence.",
          },
          {
            question: "Do you provide post-launch maintenance and support?",
            answer:
              "Yes, we do provide post-launch maintenance and support services such as bug fixing, updates, and regular upgrades once your project goes live.",
          },
          {
            question:
              "How does Above All Agency determine its price for services?",
            answer:
              "We have flexible prices that are dependent on the size and complexity of the project. We will provide you with a tailored quote after you provide us with your specifications.",
          },
          {
            question: "Does Above All Agency work on remote projects?",
            answer:
              "Yes, we do work on remote projects and have clients worldwide. You can work with us remotely via video conferencing and make use of various software to stay in touch and work on your project in an effective manner.",
          },
          {
            question: "How long does it take to finish a project?",
            answer:
              "The time it takes to complete a project varies in each project based on the size of the project and the requirements of the project. We give you approximate project timelines and keep you informed at every stage of the project.",
          },
          {
            question: "Do you offer a free consultation?",
            answer:
              "Yes, we provide a complimentary first consultation where we talk about your business needs and recommend to you the most suitable solutions and ways of reaching your objectives.",
          },
        ].map((faq, index) => (
          <div
            key={index}
            className={`w-full p-4 lg:p-6 rounded-lg bg-blue-50 ${openIndex === index ? "" : ""
              }`}
            onClick={() => toggleFAQ(index)}
          >
            <button
              className={`w-full text-left cursor-pointer text-black font-[poppins] flex justify-start items-center gap-4 lg:gap-8`}
            >
              <span className="text-3xl">
                {openIndex === index ? (
                  <BsDash width={16} height={16} />
                ) : (
                  <IoIosAdd width={22} height={22} />
                )}
              </span>
              <span className="font-medium">{faq.question}</span>
            </button>
            <div
              className={`transition-all duration-300 overflow-hidden text-gray-500 ${openIndex === index
                  ? "max-h-40 pt-4 bg-transparent "
                  : "max-h-0 p-0"
                }`}
            >
              {openIndex === index && (
                <p className="font-[poppins] tracking-widest text-sm">
                  {faq.answer}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
