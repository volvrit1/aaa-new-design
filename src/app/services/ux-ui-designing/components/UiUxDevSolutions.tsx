import { image } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function UiUxDevSolutions() {
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
          Transforming Innovative Ideas into Stunning, User-Centric Designs That Drive Results
          </span>
        </h2>
        <p
          className={`text-gray-800 text-sm sm:text-base line-clamp-3 md:line-clamp-none  mt-4`}
        >
          {
            "We are UI/UX designers specializing in designs that strike both form and function. Concept to implementation, we work with companies to craft bespoke design solutions that speak to people. Our designs are not only visually arresting but also easy to use and navigate through, ultimately helping your business thrive."
          }
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          {
            title: "UX/UI Design Services",

            description:
              "Our UI/UX design consulting offers professional guidance on enhancing user experiences. We review your current products, determine areas of pain, and provide strategic recommendations on optimizing interfaces to satisfy user requirements and business objectives, making your designs functional and interactive.",
            image: "/assets/UI/ui1.png",
          },
          {
            title: "UI/UX Design Consulting",
            description:
              "We turn your vision into reality through our wireframing & prototyping services. Through the creation of low-fidelity wireframes and interactive prototypes, we facilitate visualization of your digital product prior to development. This enables us to test user flows, gather feedback, and optimize designs to ensure they fulfill user expectations and offer a smooth experience.",
            image: "/assets/UI/ui2.png",
          },
          {
            title: "Wireframing & Prototyping",
            description:
              "Our web app UX/UI design is aimed at developing responsive, intuitive, and user-centric web applications. Through an emphasis on user journeys, we craft seamless interactions that enhance usability so that your web app works seamlessly across various devices and browsers.",
            image: "/assets/UI/ui3.png",
          },
          {
            title: "Web App UX/UI Design",
            description:
              "We specialize in creating mobile app UX/UI that provides a smooth, engaging user experience. Whether iOS or Android, we design intuitive mobiles that are simple to use, enabling users to accomplish tasks easily and have a seamless app experience.",
            image: "/assets/UI/ui4.png",
          },
          {
            title: "Mobile App UX/UI Design",
            description:
              "Our web design services are customized to build visually appealing and interactive websites. We emphasize user-friendly interfaces, providing an unproblematic experience on all devices. If you need an eCommerce website, a business site, or a portfolio, we build designs that make you shine and attract visitors.",
            image: "/assets/UI/ui5.png",
          },
          {
            title: "Responsive Design",
            description:
              "With responsive design, we make sure that your website responds to any screen size, be it desktops or mobile phones. Optimizing layouts, content, and navigation, we make sure that your site delivers a consistent and enjoyable experience for users regardless of how they view it.",
            image: "/assets/UI/ui6.png",
          },
        ].map((service, index) => (
          <div
            key={index}
            className={`w-full font-[poppins] rounded-none border border-black p-4 lg:p-8 flex flex-col justify-between items-start `}
          >
            <Image
              width={400}
              height={400}
              alt="image"
              src={service?.image}
              className="w-16 h-16 object-contain mb-4"
            />
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
// ${index < 3 && "border-b"
// } ${(index === 1 || index === 4) && "border-l border-r"
// }