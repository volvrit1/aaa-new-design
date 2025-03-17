import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Services() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4 bg-[#242424]">
      <div className="lg:w-5/6 m-auto mb-18 text-center">
        <h2
          className={`text sm:text-sm md:text-sm lg:text-sm xl:text-sm font-semibold tracking-widest 
                 text-gray-50
              leading-8 mb-3`}
        >
          INTEGRATED SERVICES
        </h2>
        <h2
          className={`lg:w-5/6 m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-[#EE3639] leading-8 mb-4 `}
        >
          <span className="text-gray-50"> Comprehensive</span>
          {" It Solutions "}
          <span className="text-gray-50"> for Seamless Business Growth</span>
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
            title: "Web Development",
            subTitle: "PHP | .NODE  |  LARAVEL  |  NEXT JS",
            description:
              "We specialised in web development, creating responsive, user-friendly, and high-performance websites tailored to meet your business needs. From intuitive front-end designs to robust back-end solutions, we deliver complete.",
            image: "/assets/webdev.png",
            link: "/",
          },
          {
            title: "App Development",
            subTitle: "REACT NATIVE  |  FLUTTER  |  KOTLIN",
            description:
              "We specialised in web development, creating responsive, user-friendly, and high-performance websites tailored to meet your business needs. From intuitive front-end designs to robust back-end solutions, we deliver complete.",
            image: "/assets/appdev.png",
            link: "/",
          },
          {
            title: "Artificial Intelligence",
            subTitle: "PYTHON  |  R  |  JAVA  |  C++",
            description:
              "We specialised in web development, creating responsive, user-friendly, and high-performance websites tailored to meet your business needs. From intuitive front-end designs to robust back-end solutions, we deliver complete.",
            image: "/assets/ai.png",
            link: "/",
          },
          {
            title: "Saas Development",
            subTitle: "JAVA  |  PYTHON  |  RUBY",
            description:
              "We specialised in web development, creating responsive, user-friendly, and high-performance websites tailored to meet your business needs. From intuitive front-end designs to robust back-end solutions, we deliver complete.",
            image: "/assets/saas.png",
            link: "/",
          },
          {
            title: "Blockchain Development",
            subTitle: "PYTHON  |  C++  |  JAVA",
            description:
              "We specialised in web development, creating responsive, user-friendly, and high-performance websites tailored to meet your business needs. From intuitive front-end designs to robust back-end solutions, we deliver complete.",
            image: "/assets/block.png",
            link: "/",
          },
          {
            title: "CRM Development",
            subTitle: "PYTHON   |  JAVA  |  PHP",
            description:
              "We specialised in web development, creating responsive, user-friendly, and high-performance websites tailored to meet your business needs. From intuitive front-end designs to robust back-end solutions, we deliver complete.",
            image: "/assets/crm.png",
            link: "/",
          },
          {
            title: "UX/UI Designing",
            subTitle: "USER EXPERIENCE  |  UI DESIGN  ",
            description:
              "We specialised in web development, creating responsive, user-friendly, and high-performance websites tailored to meet your business needs. From intuitive front-end designs to robust back-end solutions, we deliver complete.",
            image: "/assets/ux.png",
            link: "/",
          },
          {
            title: "Digital Marketing",
            subTitle: "SEO  |  SMO  | CONTENT STRATEGY",
            description:
              "We specialised in web development, creating responsive, user-friendly, and high-performance websites tailored to meet your business needs. From intuitive front-end designs to robust back-end solutions, we deliver complete.",
            image: "/assets/webdev.png",
            link: "/",
          },
          {
            title: "API Development",
            subTitle: "PYTHON | R  |  JAVA  |  C++",
            description:
              "We specialised in web development, creating responsive, user-friendly, and high-performance websites tailored to meet your business needs. From intuitive front-end designs to robust back-end solutions, we deliver complete.",
            image: "/assets/api.png",
            link: "/",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="w-full min-h-[65vh] rounded-none border border-gray-50 p-8 flex flex-col justify-start items-start "
          >
            <Image
              width={400}
              height={400}
              alt="image"
              src={`${service?.image}`}
              className="w-14 h-14 object-contain rounded-xl mb-4"
            />
            <h2 className="text-gray-50 text-xl w-full mx-auto text-left mb-2">
              {/* {serve} */}
            </h2>
            <h3 className="text-gray-100 font-thin text-sm w-full mx-auto text-left mb-3">
              {service?.subTitle}
            </h3>
            <p className="text-gray-100 font-light text-xs/5 tracking-widest w-full mx-auto text-left mb-12">
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
