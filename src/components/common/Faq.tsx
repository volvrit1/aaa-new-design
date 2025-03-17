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
      <div className="lg:w-5/6 m-auto mb-18 text-center">
        <h2
          className={`text sm:text-sm md:text-sm lg:text-sm xl:text-sm font-semibold tracking-widest 
              text-gray-800
           leading-8 mb-3`}
        >FAQ's</h2>
        <h2
          className={`lg:w-5/6 m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-[#EE3639] leading-8 mb-4 `}
        >
          {"Frequently Asked Questions:"}{" "}
          <span className="text-gray-800"> Everything You Need to Know</span>
        </h2>
        <p
          className={`text-gray-700 text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[14px] line-clamp-3 md:line-clamp-none  mt-4 leading-5`}
        >
          {
            "BWD WEB stands out for its innovative solutions, expert team, and commitment to quality. We deliver custom web and mobile applications that combine cutting-edge technology with seamless user experiences. Our focus on creativity, reliability, and client satisfaction makes us a trusted partner for businesses looking to grow and succeed in the digital world."
          }
        </p>
      </div>
      <div className="grid lg:grid-cols-2 place-items-start gap-6">
        {[
          {
            question: "Frequently Asked Questions: Everything You Need to Know",
            answer:
              "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.",
          },
          {
            question: "Everything You Need to Know",
            answer:
              "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.",
          },
          {
            question: "How long until we deliver your first blog post?",
            answer:
              "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.",
          },
          {
            question: "How long until we deliver your first blog post?",
            answer:
              "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.",
          },
          {
            question: "How long until we deliver your first blog post?",
            answer:
              "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.",
          },
        ].map((faq, index) => (
          <div
            key={index}
            className={`w-full p-6 rounded bg-gray-100 ${
              openIndex === index ? "" : "h-22"
            }`}
          >
            <button
              className={`w-full text-left  flex justify-start items-center gap-8`}
              onClick={() => toggleFAQ(index)}
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
              className={`transition-all duration-300 overflow-hidden text-gray-500 ${
                openIndex === index
                  ? "max-h-40 p-4 bg-transparent "
                  : "max-h-0 p-0"
              }`}
            >
              {openIndex === index && <p className="text-sm">{faq.answer}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
