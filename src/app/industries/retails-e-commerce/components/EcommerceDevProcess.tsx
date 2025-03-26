import Image from "next/image";
import React from "react";

export default function EcommerceDevProcess() {
  const content = [
    {
      id: 1,
      title: "Augmented and Virtual Reality",
      description:
        "Innovative technologies like AR and VR are highly being adopted that help fabricate immersive shopping experiences and incredible methods of showcasing products. Notably, AR and VR have a terrific role in ecommerce apps and present opportunities like virtual try-ons, product visualization, virtual showrooms, training, brand experiences, and more.",
    },
    {
      id: 1,
      title: "Internet of Things",
      description:
        "IoT has presented new shopping methods via ecommerce apps with the help of connected devices, like sensors and cameras. These connected devices collect data in real-time based on consumer behavior and preferences to facilitate a better understanding of the market. <br> Additionally, IoT brings a number of advantages to the table, such as smart logistics and inventory management, personalized shopping, automated customer service, predictive analysis, and connected devices.",
    },
    {
      id: 1,
      title: "Blockchain Technology",
      description:
        "The best ecommerce mobile app development companies integrate blockchain technology as it supports seamless supply chain management. It helps a transparent and secure procedure for product tracking and delivery. Not only this, but the technology offers many more advantages, including the security of payments, loyalty programs, supply chain management, decentralized marketplaces, and smart contracts.",
    },
    {
      id: 1,
      title: "Social Media Integration",
      description:
        "The best ecommerce mobile app development companies integrate blockchain technology as it supports seamless supply chain management. It helps a transparent and secure procedure for product tracking and delivery. Not only this, but the technology offers many more advantages, including the security of payments, loyalty programs, supply chain management, decentralized marketplaces, and smart contracts.",
    },
  ];
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16">
      <h1 className="text-3xl font-medium text-black text-center font-[poppins] mb-4">
        Our E-commerce Development Process
      </h1>
      <div>
        <div className="container  w-full">
          <Image
            src={"/assets/ecommercedevprocess.png"}
            alt=""
            width={900}
            height={900}
            className=" w-full object-cover"
          />
        </div>
      </div>
      <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {content.map((item, index) => (
          <div
            key={index}
            className="bg-[#F6F6F6] p-4 border-[1.5px] border-gray-300/70 h-full"
          >
            <h2 className="text-2xl font-semibold text-gray-800 font-[urbanist] mb-2">
              {item?.title}
            </h2>
            <p
              className="font-[cabin] text-base text-gray-500 line-clamp-[7] h-44"
              dangerouslySetInnerHTML={{
                __html: item?.description?.replace(/<br>/g, "<br>") || "",
              }}
            ></p>
          </div>
        ))}
      </div>
    </div>
  );
}
