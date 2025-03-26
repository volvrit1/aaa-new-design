import Image from "next/image";
import React from "react";

export default function FeatureOfRealstate() {
  const data = [
    {
      id: 1,
      title: "Scalability",
      description:
        "We build powerful and reliable social networking applications that ensures scalability and accelerate your business growth and revenues.",
    },
    {
      id: 2,
      title: "Security",
      description:
        "Our social networking applications are integrated with high security features that engage a massive group of audiences and offer secure and engaging messaging solutions.",
    },
    {
      id: 3,
      title: "User engagement",
      description:
        "We enhance user engagement on multiple social media platforms by providing them a user-friendly and seamless interface where users can connect with one another hassle-free.",
    },
    {
      id: 4,
      title: "Monetization",
      description:
        "We provide seamless multiple payment models free, premium or subscription based. Users can choose the payment model as per their convenience.",
    },
    {
      id: 5,
      title: "User experience",
      description:
        "Our social media applications are user-friendly with secured logins and visually appealing interface that offers seamless user experience to the users.",
    },
  ];
  return (
<div className="p-4 lg:px-16 space-y-4">
      <div className="container max-w-7xl mx-auto flex flex-col lg:flex-row justify-center gap-6">
        <div className="h-fit lg:col-span-7">
          <h2 className="font-[poppins] text-3xl text-black font-medium mb-4">
            {"Features Of Real Estate & Construction Applications"}
          </h2>

          {data &&
            data?.map((content: any, index: any) => (
              <div
                key={index}
                className="flex justify-start items-start gap-2 font-[poppins]"
              >
                <span className="text-xl text-gray-500">0{content?.id}</span>
                <div className="">
                  <h2 className="font-[poppins] text-xl text-black font-medium mb-2">
                    {content?.title}
                  </h2>
                  <p className="font-[cabin] text-base font-thin text-gray-500 mb-4">
                    {content?.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
        <div className="lg:col-span-5">
          <Image
            src="/assets/featureofrealstate.png"
            alt="Feature Of Real State"
            width={800}
            height={600}
            className="h-fit w-full"
          />
        </div>
      </div>
    </div>
  );
}
