import Image from "next/image";
import React from "react";
import { IoLogoLinkedin, IoMail } from "react-icons/io5";

export default function Team() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4 font-[poppins] tracking-widest">
      <div className="lg:w-5/6 m-auto mb-14 text-center">
        <h2
          className={`lg:w-5/6 m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-[#EE3639] leading-8 mb-4 `}
        >
          <span className="text-gray-800">Meet The Team</span>
        </h2>
        <p
          className={`text-gray-500 text-sm sm:text-base line-clamp-3 md:line-clamp-none  mt-4 leading-5`}
        >
          {
            "Above All Agency is led by an exceptional team of Industry Veterans who have come with proven experience, expert-level approach to serving the world- Modern Technology Solution."
          }
        </p>
      </div>
      <div className="w-full p-4 lg:p-2 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {[
          {
            name: "Name",
            position: "CEO",
            image: "/assets/teams/team1.png",
          },
          {
            name: "Name",
            position: "CTO",
            image: "/assets/teams/team2.png",
          },
          {
            name: "Name",
            position: "CFO",
            image: "/assets/teams/team3.png",
          },
        ].map((data, index) => (
          <div
            key={index}
            className="w-full p-4 flex flex-col justify-center items-center "
          >
            <Image
              width={400}
              height={400}
              alt="image"
              src={data?.image}
              className="w-full object-contain rounded-xl mb-4"
            />
            <div className="w-full px-4 flex justify-between items-center gap-4">
              <div>
                <h2 className="text-[#EE3639]">{data?.name}</h2>
                <h3>{data?.position}</h3>
              </div>
              <div className="flex justify-center items-center gap-4">
                {" "}
                <span className="rounded-full p-2 border">
                  <IoMail width={16} height={16} />{" "}
                </span>
                <span className="rounded-full p-2 border">
                  <IoLogoLinkedin width={16} height={16} />{" "}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
