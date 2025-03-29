import { image } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MarketingDevSolutions() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4">
      <div className="lg:w-5/6 m-auto mt-6 lg:mt-0 mb-10 md:mb-18 text-center">
        <h2
          className={`text sm:text-lg font-semibold tracking-widest 
                 text-gray-800
               mb-3`}
        >
          We Are Creative Agency
        </h2>
        <h2
          className={`lg:w-5/6 m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold text-[#EE3639]  mb-4 `}
        >
          <span className="text-gray-800">
          Your Creative Digital Marketing Partner: Elevating Brands to New Heights
          </span>
        </h2>
        <p
          className={`text-gray-800 text-sm sm:text-base line-clamp-3 md:line-clamp-none  mt-4`}
        >
          {
            "Our crew combines imagination with innovative strategies to revolutionize your online marketing. We offer customized services that reflect your brand's tone, resonate with your audience, and bring measurable results. Together, we will break barriers and open new doors for your company."
          }
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-4">
        {[
          {
            title: "Search Engine Optimization (SEO)",

            description:
              "SEO isn't just keywords; it's search engine-optimized everything about your website. Our SEO team keeps your website ahead of the search engine listings with more natural traffic and driving growth for your company through precise content, higher exposure, and better user satisfaction.",
            image: "/assets/ai/ml.png",
          },
          {
            title: "Social Media Marketing",
            description:
              "Social media is the hearbeat of online connection. Our social media marketing efforts build genuine relationships with your audience. We develop engaging content and specific campaigns that drive engagement, strengthen brand loyalty, and generate traffic to your website.",
            image: "/assets/ai/nl.png",
          },
          {
            title: "Search Engine Marketing",
            description:
              "Get seen faster with SEM. Our paid search strategies bring traffic immediately and boost conversions. Targeting the most appropriate keywords and setting up your bids, we ensure that your adverts are seen by the most suitable audience at the right time, creating measurable results for your business.",
            image: "/assets/ai/bi.png",
          },
          {
            title: "Email Marketing",
            description:
              "Email marketing is one of the powerful tools of direct contact. We design special, customized campaigns for lead nurturing, sales drive, and keeping people in the loop. Using right messages, delivered at the appropriate time, we convert the subscriber into the dedicated customer.",
            image: "/assets/ai/gi.png",
          },
          {
            title: "Content Marketing",
            description:
              "Quality content is the starting point for any effective digital strategy. Our content marketing strategy is centered around providing valuable, relevant content that attracts, informs, and engages your audience. By using blogs, videos, and infographics, we establish your brand's authority and improve SEO.",
            image: "/assets/ai/ca.png",
          },
          {
            title: "Paid Advertising (PPC)",
            description:
              "Paid advertising is a fast method of lead generation, but it needs to be accurate. Our PPC campaigns reach the correct audience at the right moment, maximizing your marketing dollars and ensuring each click translates to quantifiable business growth.",
            image: "/assets/ai/ai.png",
          },
        ].map((service, index) => (
          <div
            key={index}
            className={`w-full lg:min-h-[65vh] 2xl:min-h-auto font-[poppins] rounded-none border border-black p-4 lg:p-8 flex flex-col justify-between items-start `}
          >
            <p className="w-14 h-14 text-black font-semibold text-3xl p-2 mb-0 relative">
              {"0"}
              {index + 1}{" "}
              <span className="bg-[#EE3639] inline-block w-14 absolute top-1/2 -translate-y-1/2  left-[3.5rem] h-1.5 rounded-full"></span>
            </p>
            <h2 className="text-gray-900 font-semibold text-xl w-full mx-auto text-left mb-2 relative">
              {service?.title}
            </h2>
            <p className="font-[poppins] tracking-widest text-gray-800  font-light text-sm/5 w-full mx-auto text-left mb-12">
              {service?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
