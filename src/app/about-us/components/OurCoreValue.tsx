import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function OurCoreValue() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4 bg-[#242424]">
      <div className="lg:w-5/6 m-auto mb-18 text-center">
        <h2
          className={`lg:w-5/6 m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-[#EE3639] leading-8 mb-4 `}
        >
          <span className="text-gray-50"> Our Core Values</span>
        </h2>
        <p
          className={`text-gray-50 text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[14px] line-clamp-3 md:line-clamp-none  mt-4 leading-5`}
        >
          {
            "Web-integrated services encompass a wide range of tools and technologies that allow applications to communicate, share data, and enhance functionality over the internet. Here's a breakdown of key categories."
          }
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-4">
        {[
          {
            title: "Success Secret",

            description:
              "All Above Agency succeeded when our clients got successful. We are driven by innovation and aspiration to provide the first-class solution that assures your success.",
            image: "/assets/core1.png",
            link: "/",
          },
          {
            title: "Innovative Minds",

            description:
              "All Above Agency succeeded when our clients got successful. We are driven by innovation and aspiration to provide the first-class solution that assures your success.",
            image: "/assets/core2.png",
            link: "/",
          },
          {
            title: "Human-First Approach",

            description:
              "All Above Agency succeeded when our clients got successful. We are driven by innovation and aspiration to provide the first-class solution that assures your success.",
            image: "/assets/core3.png",
            link: "/",
          },
          {
            title: "Solid Integrity & Ethics",

            description:
              "All Above Agency succeeded when our clients got successful. We are driven by innovation and aspiration to provide the first-class solution that assures your success.",
            image: "/assets/core4.png",
            link: "/",
          },
          {
            title: "In-House Team",

            description:
              "All Above Agency succeeded when our clients got successful. We are driven by innovation and aspiration to provide the first-class solution that assures your success.",
            image: "/assets/core5.png",
            link: "/",
          },
          {
            title: "Full-Technology Stack",

            description:
              "All Above Agency succeeded when our clients got successful. We are driven by innovation and aspiration to provide the first-class solution that assures your success.",
            image: "/assets/core6.png",
            link: "/",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="w-full min-h-[45vh] lg:min-h-[65vh] 2xl:min-h-auto rounded-none border border-gray-50 p-8 flex flex-col justify-start items-start "
          >
            <Image
              width={400}
              height={400}
              alt="image"
              src={`${service?.image}`}
              className="w-14 h-14 object-contain rounded-xl mb-4"
            />
            <h2 className="text-gray-50 text-xl w-full mx-auto text-left mb-2">
              {service?.title}
            </h2>

            <p className="font-[cabin] tracking-widest text-gray-100 font-light text-xs/5 tracking-widest w-full mx-auto text-left mb-12">
              {service?.description}
            </p>
            <Link
              href={service?.link}
              className="w-full border border-gray-50 p-2 text-gray-50 text-center"
            >
              View Service
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
