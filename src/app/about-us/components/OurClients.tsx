"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function OurClients() {
  const clients = [
    {
      image: "/assets/clients/client1.png",
    },
    {
      image: "/assets/clients/client2.png",
    },
    {
      image: "/assets/clients/client3.png",
    },
    {
      image: "/assets/clients/client4.png",
    },
    {
      image: "/assets/clients/client5.png",
    },
    {
      image: "/assets/clients/client6.png",
    },
    {
      image: "/assets/clients/client7.png",
    },
    {
      image: "/assets/clients/client8.png",
    },
    {
      image: "/assets/clients/client9.png",
    },
    {
      image: "/assets/clients/client10.png",
    },
    {
      image: "/assets/clients/client11.png",
    },
    {
      image: "/assets/clients/client12.png",
    },
  ];
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4 font-[cabin]">
      <div className="lg:w-5/6 m-auto mb-14 text-center">
        <h2
          className={`lg:w-5/6 m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-[#EE3639] leading-8 mb-4 `}
        >
          <span className="text-gray-800"> Our Clients</span>
        </h2>
        <p
          className={`text-gray-500 text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[14px] line-clamp-3 md:line-clamp-none  mt-4 leading-5`}
        >
          {
            "All Above Agency feels pride in developing mobile apps for various iconic brands. Throughout our entire journey, we have built loyal relationships with every client and established trust with solid friendships."
          }
        </p>
      </div>
    <div className="relative flex overflow-hidden max-w-screen-xl ml-auto">
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
        {[...clients].map((data, index) => (
          <div
            key={index}
            className="w-44 h-44 bg-white border m-auto  rounded-full p-4 flex flex-col justify-center items-center "
          >
            <Image
              width={400}
              height={400}
              alt="image"
              src={data?.image}
              className="w-full h-full object-contain rounded-xl mb-4"
            />
          </div>
        ))}
      </motion.div>
      </div>
    </div>
  );
}
