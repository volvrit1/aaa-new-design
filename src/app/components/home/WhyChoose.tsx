import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function WhyChoose() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4">
      <div className="lg:w-5/6 m-auto mb-18 text-center">
        <h2
          className={`text sm:text-sm md:text-sm lg:text-sm xl:text-sm font-semibold tracking-widest 
                 text-gray-800
              leading-8 mb-3`}
        >
          Why choose us{" "}
        </h2>
        <h2
          className={`lg:w-5/6 m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-[#EE3639] leading-8 mb-4 `}
        >
          <span className="text-gray-800">Your </span>
          {"Trusted IT Partner for Custom"}
          <span className="text-gray-800">Web Development and Mobile App Solutions </span>
        </h2>
        <p
          className={`text-gray-800 text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[14px] line-clamp-3 md:line-clamp-none  mt-4 leading-5`}
        >
          {
            "Our dedication to excellence and innovation has established us as one of Sydney's top IT companies. We recognize that each business is different, so we provide customized solutions that are tailored to your unique requirements, keeping you ahead in the digital era."
          }
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-4">
        {[
          {
            title: "Expertise in Advanced Technology",

            description:
              "Our organization continues to lead the pack by using the latest technological advances to provide leading-edge solutions to make your company thrive in today's digital world",
            image: "/assets/pm.png",
            link: "/",
          },
          {
            title: "Customized IT Solutions",
            description:
              "We offer customized IT solutions, allowing us to shape technology to meet your specific business needs, maximizing performance and efficiency",
            image: "/assets/tm.png",
            link: "/",
          },
          {
            title: "Proven Track Record of Success",
            description:
              "With years of experience and a portfolio of quality projects, we deliver reliable, high-quality IT services that enable growth and optimize operational performance.",
            image: "/assets/gm.png",
            link: "/",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="w-full lg:min-h-[65vh] xl:min-h-auto rounded-none border border-[#EE3639] p-8 flex flex-col justify-between items-start "
          >
            <Image
              width={400}
              height={400}
              alt="image"
              src={`${service?.image}`}
              className="w-14 h-14 border border-[#EE3639]  object-contain rounded-full p-2 mb-4"
            />
            <h2 className="text-gray-800 text-xl w-full mx-auto text-left mb-2">
              {service?.title}
            </h2>
            <p className="font-[cabin] tracking-widest text-gray-700  font-light text-xs/5  w-full mx-auto text-left mb-12">
              {service?.description}
            </p>
            <Link
              href={service?.link}
              className="w-full border border-[#EE3639] p-2 text-gray-800 text-center"
            >
              View Service
            </Link>
          </div>
        ))}
      </div>
      <p
        className={`w-full lg:w-4/5 m-auto  text-gray-800 text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[14px] line-clamp-3 md:line-clamp-none  my-10 text-center leading-5`}
      >
        {
          "We have been a trusted player in the web development industry since (2013), delivering high-quality, innovative, and scalable web solutions. With years of experience, we’ve helped businesses of all sizes build responsive, user-friendly websites and web applications that drive success. Our team is dedicated to providing exceptional service, from initial concept to ongoing support, ensuring that every project meets the highest standards of performance, design, and functionality."
        }
      </p>

      <div className="w-full min-h-[45vh] lg:min-h-[60vh] xl:min-h-auto flex flex-col justify-center items-center m-auto text-center bg-[#242424] rounded-3xl p-4 lg:p-8 ">
        <h2
          className={`lg:w-5/6 mx-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-[#EE3639] leading-8 mb-4 `}
        >
          <span className="text-gray-50"> Let's Start a </span>
          {" New Project Together "}
        </h2>
        <p
          className={`text-gray-50 text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[14px] line-clamp-3 md:line-clamp-none  mt-4 mb-6 lg:w-4/5 m-auto leading-5`}
        >
          {
            "Ready to turn your ideas into reality? Let’s collaborate and create something amazing! With our expertise and your vision, we’ll build a solution that drives success and stands out in the digital world."
          }
        </p>
        <div className="flex justify-center items-center gap-6">
          <Link
            href={"/contact-us"}
            className=" p-3.5 w-44 text-center bg-[#EE3639] text-gray-50 hover:text-[#EE3639] hover:bg-transparent hover:border transition-colors ease-in-out flex justify-center items-center"
          >
            Request A Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
