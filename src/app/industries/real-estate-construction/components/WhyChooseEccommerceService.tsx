import React from "react";

export default function WhyChooseRealStateService() {
  const data = [
    {
      id: 1,
      title: "Mobile App Consultation",
      description:
        "These apps allow users to share and view content, such as photos, videos, and text updates. Examples include Facebook, Instagram, and Twitter.",
    },
    {
      id: 2,
      title: "Real Estate App Development",
      description:
        "These apps allow users to communicate with each other in real-time through text, voice, or video. Examples include WhatsApp, WeChat, and Facebook Messenger.",
    },
    {
      id: 3,
      title: "Enterprise Real Estate App Development",
      description:
        "These apps allow users to upload and view videos. Examples include YouTube, TikTok, and Instagram Reels.",
    },
    {
      id: 4,
      title: "Real Estate Web Application Development",
      description:
        "These apps allow users to connect with potential romantic partners. Examples include Tinder, Bumble, and OkCupid.",
    },
  ];
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16">
      <h1 className="text-3xl font-medium text-black font-[poppins] mb-4">
        Our Full Septum of Real Estate App Development Service
      </h1>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        {data.map((content, index) => (
          <div
            key={index}
            className="border-[1.5px border-transparent bg-gradient-to-t from-[#242424]/70 to-[#EE3639]/70 bg-clip-border p-[1px] mb-4"
          >
            <div className="bg-gray-50 p-4 h-full">
              <h2 className="text-xl font-[poppins] text-black font-medium mb-2">
                {content?.title}
              </h2>
              <p className="font-[cabin] text-base text-[#7D7D7D]">
                {content?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
