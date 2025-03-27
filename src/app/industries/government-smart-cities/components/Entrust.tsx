import Image from "next/image";
import React from "react";

export default function Entrust() {
  const data = [
    {
      title: "Travel & Tourism",
      image: "/assets/entrust/entrust1.png",
    },
    {
      title: "Real Estate",
      image: "/assets/entrust/entrust2.png",
    },
    {
      title: "Hospitality & Healthcare",
      image: "/assets/entrust/entrust3.png",
    },
    {
      title: "Hotel & Restaurants",
      image: "/assets/entrust/entrust4.png",
    },
    {
      title: "Online Training & Education",
      image: "/assets/entrust/entrust5.png",
    },
  ];
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16">
      <h2 className="font-[poppins] text-3xl text-gray-50 text-center font-medium mb-4">
        Entrust Us With Your Digital Marketing Services. We’ve got Everything
        You Need Under One Roof – All Above Agency
      </h2>
      <p className="font-[cabin] tracking-wide text-center mb-6 text-[#7D7D7D]">
        Our team of experts is equipped to elevate your digital presence to a
        new stratosphere. Our digital marketing services will assist you in
        making a splash in the digital world and truly showcasing the soul of
        your brand. Whether it’s through a new logo, SEO, SMM, content, PPC,
        website, or marketing campaign, we will work closely with you to create
        a cohesive and effective brand strategy.
      </p>
      <p className="font-[cabin] tracking-wide text-center mb-6 text-[#7D7D7D]">
        Make a lasting impression in your industry with our tailored end-to-end
        solutions for the travel, hotel & restaurant, education, healthcare, and
        real estate sectors. Don’t settle for mediocrity; let’s collaborate and
        make your brand come alive!
      </p>
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-5 gap-y-2">
        {data &&
          data.map((item: any, index: any) => (
            <div
              key={index}
              className={`flex flex-col justify-center items-center gap-4 p-6 border-[1.5px] border-l-[1.5px]  border-gray-50 ${
                index === 4 ? "border-r-[1.5px]" : "lg:border-r-0"
              } `}
            >
              <Image src={item?.image} alt={item} width={40} height={40} />

              <h2 className="text-lg/6 m-auto  text-center w-auto font-semibold text-gray-50 font-[urbanist]">
                {item?.title}
              </h2>
            </div>
          ))}
      </div>
    </div>
  );
}
