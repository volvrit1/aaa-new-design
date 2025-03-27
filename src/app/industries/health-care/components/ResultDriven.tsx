import React from "react";

export default function ResultDriven() {
  const data = [
    {
      id: 1,
      title:
        "Are You An Agency Looking for B2B Outsourcing Partnership for your Digital Marketing Services?",
      description:
        "Our digital marketing services team specializes in custom online marketing services that offer a comprehensive solution for B2B outsourcing partnership needs. Our team has a deep understanding of how to grow a following and develop a winning strategy for increasing your presence on social media platforms.",
    },
    {
      id: 2,
      title:
        "Are You Looking For White-Label Digital Marketing Service Partner?",
      description:
        "Get white-label Digital Marketing Services With our experienced marketing experts. Our team offers a full-service approach to online marketing, including strategy development, content creation, production, branding, SEO, and SEM. Our PPC management services at ColorWhistle will help you reach your target audience, increase online visibility, and drive conversions while maximizing your ROI.",
    },
    {
      id: 3,
      title:
        "Looking for a professional Digital Marketing company for your business?",
      description:
        "Get engaged with a team of experts who specialize in utilizing advanced SEO and SEM techniques and utilize the latest tools to deliver outstanding results. Our tailored, proven methods will not only boost your business but also help you save money on ad spend each month. Our online marketing experts follow unique methods to ensure a positive image of your brand is upheld in the eyes of your customers.",
    },
  ];
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16 lg:pb-0">
      <h1 className="text-3xl font-medium text-center text-black font-[poppins] mb-4">
        Result-Driven Digital Marketing Strategies
      </h1>
      <p className="font-[cabin] tracking-wide text-center mb-6 text-[#7D7D7D]">
        Trust us to enhance your brand presence and reach new audiences.
      </p>
      <div className="mt-10">
        {data.map((content, index) => (
          <div
            key={index}
            className="border-[1.5px border-transparent bg-gradient-to-t from-[#242424] to-[#EE3639] bg-clip-border p-[1px] mb-4"
          >
            <div className="bg-gray-50 px-4 py-2">
              <h2 className="text-xl font-[poppins] text-black font-medium mb-2">
                {content?.title}
              </h2>
              <p className="font-[poppins] text-base text-[#7D7D7D]">
                {content?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
