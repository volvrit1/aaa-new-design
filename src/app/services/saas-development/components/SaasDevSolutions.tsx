import { image } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SaasDevSolutions() {
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
          Redefining SaaS Solutions with Innovation, Expertise, and Precision
          </span>
        </h2>
        <p
          className={`text-gray-800 text-sm sm:text-base line-clamp-3 md:line-clamp-none  mt-4`}
        >
          {
            "We bring a special combination of technology, design, and business strategy to each SaaS project. Our experts develop tailored solutions that are best suited for your business requirements with the guarantee of growth, productivity, and competitiveness in the marketplace."
          }
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-4">
        {[
          {
            title: "Saas Product Design & UI/UX",

            description:
              "Our strategy development services guide your SaaS product from idea to market launch. We build fact-based strategies centered on user requirements, demand in the market, and scalability for the long term, so your product is ready to succeed.",
            image: "/assets/ai/ml.png",
          },
          {
            title: "Saas Product Strategy Development",
            description:
              "Our strategy development services take your SaaS product from idea to market launch. We build data-driven strategies centered on user needs, market demand, and scalability for the long-term, making your product poised for success.",
            image: "/assets/ai/nl.png",
          },
          {
            title: "Custom Saas Application Development",
            description:
              "We develop custom SaaS applications to meet your business requirements. Our custom development method guarantees that every solution is scalable, secure, and suited to your unique goals, laying the groundwork for your expansion.",
            image: "/assets/ai/bi.png",
          },
          {
            title: "Multi-Tenant Architecture Design",
            description:
              "Our multi-tenant architecture solutions allow you to scale efficiently by hosting several clients from one instance. This solution optimizes resource usage, maintenance, and operational costs.",
            image: "/assets/ai/gi.png",
          },
          {
            title: "Cloud Migration and Integration",
            description:
              "We simplify your move to the cloud, ensuring transparent migration and integration with minimal interruption. Our services enable modernization of your infrastructure, increase accessibility, and enhance data security for maximum performance.",
            image: "/assets/ai/ca.png",
          },
          {
            title: "API Development & Integration",
            description:
              "We offer secure API development services that provide seamless integration with third-party services. Our APIs are flexible, scalable, and easy to use, allowing seamless communication between systems and platforms.",
            image: "/assets/ai/ai.png",
          },
          {
            title: "Saas Performance Optimization",
            description:
              "Our optimization services focus on maximizing the speed, efficiency, and scalability of your SaaS products. We use data-driven insights to identify and address performance bottlenecks, resulting in improved user experiences and high uptime.",
            image: "/assets/ai/ai.png",
          },
          {
            title: "Technology and Third-Party Integration",
            description:
              "We merge innovative technologies and third-party tools to extend the functionality of your SaaS product. Our seamless integration services help your platform stay agile, current, and linked to key tools and services.",
            image: "/assets/ai/ai.png",
          },
          {
            title: "Ongoing Maintenance & Support",
            description:
              "We offer continuous support and maintenance of  your SaaS application so that it runs at its best. Our experts provide regular updates, bug fixes, and 24/7 support to resolve any issues that come up, freeing you to run your business.",
            image: "/assets/ai/ai.png",
          },
        ].map((service, index) => (
          <div
            key={index}
            className={`w-full font-[poppins] rounded-none border border-black p-4 lg:p-8 flex flex-col justify-between items-start `}
          >
            <p className="w-14 h-14 text-black font-semibold text-3xl p-2 mb-0 relative">
              {"0"}
              {index + 1}{" "}
              <span className="bg-[#EE3639] inline-block w-14 absolute top-1/2 -translate-y-1/2  left-[3.5rem] h-1.5 rounded-full"></span>
            </p>
            <h2 className="text-gray-900 font-medium text-2xl w-full mx-auto text-left mb-5 mt-3 relative">
              {service?.title}
            </h2>
            <p className="font-[poppins] tracking-widest text-gray-800  font-light text-sm/5 w-full mx-auto text-left mb-6">
              {service?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
