"use client";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import Image from "next/image";
import React from "react";

export default function Achievements2() {
  const clients = [
    {
      value: "15",
      plusIcon: true,
      unit: "Year in Experience",
      image: "/assets/exp.png",
    },
    {
      value: "80",
      plusIcon: true,
      unit: "Team Members",
      image: "/assets/team.png",
    },
    {
      value: "480",
      plusIcon: true,
      unit: "Happy  Clients",
      image: "/assets/client.png",
    },
    {
      value: "450",
      plusIcon: true,
      unit: "Projects Done",
      image: "/assets/project.png",
    },
    {
      value: "95",
      plusIcon: true,
      unit: "Hours Worked",
      image: "/assets/worked.png",
    },
    {
      value: "24/7",
      plusIcon: true,
      unit: "Support Available",
      image: "/assets/247.png",
    },
  ];
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4 font-[cabin] tracking-widest">
      {/* <div className="w-full p-4 lg:p-2 grid grid-cols-1 lg:grid-cols-6 gap-4"> */}
      <div className="relative flex overflow-hidden max-w-screen-xl ml-auto gap-4">
        <motion.div
          className="flex space-x-6 gap-4"
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 35,
          }}
        >
          {[...clients, ...clients, ...clients, ...clients].map(
            (data, index) => (
              <div
                key={index}
                className="w-44 h-44 m-auto rounded-full border-2 border-dashed border-gray-800 p-4 flex flex-col justify-center items-center "
              >
                <h2 className="text-gray-800 text-3xl font-semibold w-4/5 mx-auto text-center">
                  {data?.value}
                  {data?.plusIcon && "+"}
                </h2>
                <h3 className="text-gray-800 text-lg w-4/5 mx-auto text-center">
                  {data?.unit}
                </h3>
              </div>
            )
          )}
        </motion.div>
      </div>
    </div>
  );
}
