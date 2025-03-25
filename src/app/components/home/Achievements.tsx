import React from "react";
import Image from "next/image";
import ButtonToCall from "./ButtonToCall";

export default function Achievements() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4 flex flex-col lg:flex-row justify-center items-center bg-[#242424]">
      <div className="w-full lg:w-1/2 lg:p-8">
        <h2
          className={`text-3xl md:text-4xl font-medium md:font-semibold mb-4 mx-auto text-gray-50 text-left`}
        >
          Excellence is nothing but a <br />
          <span className="text-[#EE3639]">Client’s Smile. </span>
        </h2>
        <p className="font-[poppins] text-gray-50 text-sm  mr-auto mb-6 text-left">
          we believe that true excellence lies in the happiness of our clients.
          We focus on creating lasting relationships through providing superior
          services beyond expectations. Your success is ours, and our ultimate
          aim is to see you thrilled with every interaction and solution we
          offer. Whenever we see you smile, we know we have succeeded in our
          mission.
        </p>

        <div className="flex w-full mr-auto">
          <ButtonToCall text="Let’s starts the conversion" />
        </div>
      </div>
      <div className="w-full lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
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
        ].map((data, index) => (
          <div
            key={index}
            className="w-full h-48 rounded-xl bg-[#3D3D3D] p-4 flex flex-col justify-center items-center "
          >
            <Image
              width={400}
              height={400}
              alt="image"
              src={`${data?.image}`}
              className="w-12 h-12 object-contain rounded-xl mb-4"
            />
            <h2 className="text-gray-50 text-3xl font-semibold w-4/5 mx-auto text-center">
              {data?.value}
              {data?.plusIcon && "+"}
            </h2>
            <h3 className="text-gray-50 text-xs w-4/5 mx-auto text-center">
              {data?.unit}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
