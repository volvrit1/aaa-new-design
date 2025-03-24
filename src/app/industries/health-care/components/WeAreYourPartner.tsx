import Image from "next/image";
import React from "react";

export default function WeAreYourPartner() {
  const content = [
    {
      title: "HIPAA Compliant Development Service",
      description:
        "The growing popularity of mobile devices and the internet is driving the adoption of fintech applications, as they allow for easy access to financial services.",
    },
    {
      title: "Transparent and Agile Processes",
      description:
        "Fintech applications can be used to facilitate digital payments and e-commerce, which is becoming increasingly popular as more and more people shop online.",
    },
    {
      title: "Innovative Solutions",
      description:
        "Fintech applications can be used to facilitate digital lending, which can help to increase access to credit for individuals and small businesses.",
    },
    {
      title: "Logically Designed Architecture ",
      description:
        "Fintech applications can be used to facilitate transactions and payments using blockchain technology and cryptocurrencies, which can provide a more secure and efficient way of doing transactions.",
    },
    {
      title: "Superior Code Quality ",
      description:
        "The growing popularity of mobile devices and the internet is driving the adoption of fintech applications, as they allow for easy access to financial services.",
    },
    {
      title: "Flexible Engagement Model",
      description:
        "Fintech applications can be used to facilitate digital payments and e-commerce, which is becoming increasingly popular as more and more people shop online.",
    },
  ];

  return (
    <div className="max-w-7xl p-4 lg:p-16 space-y-4">
      <div className="container">
        <h2 className="font-[urbanist] text-[29px] font-semibold mb-3 text-gray-800 relative">
          We Are Your Trusted Partner for Healthcare Software Development
          Service
        </h2>
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-6 relative">
          {content.map((item, index) => (
            <div
              key={index}
              className={`gap-4 p-4 ${
                index === 0 || index === 3 || index === 4
                  ? "bg-[#FFF5F5] border border-[#EE3639]"
                  : ""
              }`}
            >
              <h2 className="text-2xl font-semibold text-gray-800 font-[urbanist] mb-2">
                {item?.title}
              </h2>
              <p className="font-[cabin] text-[15px] text-[#7d7d7d]">
                {item?.description || ""}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
