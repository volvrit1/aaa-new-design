import Image from "next/image";
import React from "react";

export default function SaasTech() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4 ">
      <div className="lg:w-5/6 m-auto mt-6 lg:mt-0 mb-10 md:mb-18 text-center">
        <h2
          className={`text sm:text-lg font-semibold tracking-widest 
                 text-gray-800
               mb-3`}
        >
          Technologies
        </h2>
        <h2
          className={`lg:w-5/6 m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-[#EE3639] mb-4 `}
        >
          <span className="text-gray-800">
            {" "}
            Advanced Technologies for Cutting-Edge SaaS Solutions
          </span>
        </h2>
        <p
          className={`text-gray-800 text-sm sm:text-base line-clamp-3 md:line-clamp-none  mt-4`}
        >
          {
            "We utilize a wide range of technologies to build innovative, scalable, and secure SaaS solutions. From cloud environments like AWS and Azure to microservices, AI, and machine learning, our development process harnesses the newest technologies to make your solution efficient, reliable, and future-proof. We focus on performance, security, and user-friendly experiences to offer you an out-of-the-box experience."
          }
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-y-16">
        {[
          { name: "React.js", image: "/assets/tech/react.png" },
          { name: "JavaScript", image: "/assets/tech/js.png" },
          { name: "Python", image: "/assets/tech/python.png" },
          { name: "Ruby", image: "/assets/tech/ruby.png" },
          { name: "PHP", image: "/assets/tech/php.png" },
          { name: "Node.js", image: "/assets/tech/node.png" },
        ].map((serve, index) => (
          <div
            key={index}
            className="w-full rounded-xl flex flex-col justify-center items-center "
          >
            <Image
              width={400}
              height={400}
              alt="image"
              src={serve?.image}
              className="w-3/4 lg:w-20 lg:h-20 object-contain mb-4"
            />
            <h2 className="text-gray-800 text-base font-semibold w-4/5 mx-auto text-center">
              {serve?.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
