"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Clients({ showHeading }: { showHeading?: any }) {
  const clients = [
    { id: 1, name: "Client 1", logo: "/assets/partner/p1.png" },
    { id: 2, name: "Client 2", logo: "/assets/partner/p2.png" },
    { id: 3, name: "Client 3", logo: "/assets/partner/p3.png" },
    { id: 4, name: "Client 4", logo: "/assets/partner/p4.png" },
    { id: 5, name: "Client 5", logo: "/assets/partner/p5.png" },
  ];
  return (
    <div className=" m-auto p-4 lg:py-5 ">
      <div className={`text-left ${showHeading ? "" : "hidden"}`}>
        <h2 className="text-base font-semibold uppercase tracking-wide text-[#4A3AFF] mb-4">
          --- Brands who trust us
        </h2>
        <h2 className="text-2xl font-semibold tracking-widest text-gray-900 mb-4">
          Customer Heading Request
        </h2>
      </div>
      <div className="relative overflow-hidden py-2">
        <div className="relative flex overflow-hidden max-w-screen-xl mx-auto">
          <motion.div
            className="flex space-x-6"
            initial={{ x: "5%" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 35,
            }}
          >
            {/* Map clients to show in pairs */}
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div key={index} className="flex-shrink-0 w-60 h-24 p-4">
                <Image
                  src={client.logo}
                  width={280}
                  height={20}
                  alt={`Client ${index + 1}`}
                  className="w-full h-full object-contain p-2"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
