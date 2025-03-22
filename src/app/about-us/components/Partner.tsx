"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function Partner() {
  const clients = [1, 2, 3, 4, 5];
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 lg:py-10 space-y-4 font-[poppins] tracking-widest">
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
          {[...clients, ...clients, ...clients, ...clients].map(
            (data, index) => (
              <Image
                key={index}
                width={400}
                height={400}
                alt="image"
                src={`/assets/logo/logo-dark.png`}
                className="w-52 h-16 object-fill rounded-xl"
              />
            )
          )}
        </motion.div>
      </div>
    </div>
  );
}
