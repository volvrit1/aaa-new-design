import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DevSolutions() {
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
          className={`lg:w-5/6 m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold  text-[#EE3639]  mb-4 `}
        >
          
          {/* {"  Web Development Solutions "} */}
          <span className="text-gray-800">Your Digital Success Starts with Our Expert Website Development</span>
        </h2>
        <p
          className={`text-gray-800 text-sm sm:text-base line-clamp-3 md:line-clamp-none  mt-4`}
        >
          {
            "As a top creative website development compay, we provide customized website solutions that meet your individual requirements. Our skilled team specializes in building websites that inspire and engage."
          }
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-4">
        {[
          {
            title: "Front-end Development",

            description:
              "We specialize in designing interactive, responsive, and visually appealing front-end solutions. Our goal is to create seamless user experiences across all devices, enhancing website performance, usability, and aesthetic appeal, ensuring your site engages visitors and reflects your brand effectively.",
          },
          {
            title: "Back-end Development",
            description:
              "Our back-end web development ensures high-performance site capability through combining speedy databases, server logic, and secure API connectivity. Our solutions are extremely scalable with ability to support seamless data handling and smooth site functioning to form the sturdy foundation of your website's structure.",
          },
          {
            title: "Database Setup",
            description:
              "We offer comprehensive database installation services with emphasis on security, scalability, and efficiency. Our professionals design systems that offer seamless data storage, retrieval, and management to maintain seamless operations with performance and reliability remaining intact for your website's long-term performance.",
          },
          {
            title: "Enterprises Software",
            description:
              "Our business solutions are focused on enhancing performance, scalability, and security. We provide personalized digital infrastructure that can support large-scale operations and promote business growth. From cloud services to customized software, our solutions ensure your enterprise thrives in a rapidly changing digital landscape",
          },
          {
            title: "E-Commerce Platforms",
            description:
              "We design bespoke eCommerce websites with responsive, mobile-friendly layouts. Our layouts incorporate secure payment methods, easy transaction processes, and easy-to-use interfaces to ensure your customers have a seamless and enjoyable shopping experience while maximizing your sales potential.",
          },
          {
            title: "UI/UX Design",
            description:
              "Our UI/UX design services aim at developing user-friendly  interfaces. We make sure that your website has an engaging experience for the user, with aesthetically satisfying designs, an easy-to-navigate experience, and one that is designed specifically to fulfill your users' expectations, eventually promoting user satisfaction and retention.",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="w-full font-[poppins] rounded-none border border-black p-4 lg:p-8 flex flex-col justify-between items-start "
          >
            <p className="w-14 h-14 text-black font-semibold text-3xl p-2 mb-0 relative">
              {"0"}
              {index + 1}{" "}
              <span className="bg-[#EE3639] inline-block w-14 absolute top-1/2 -translate-y-1/2  left-[3.5rem] h-1.5 rounded-full"></span>
            </p>
            <h2 className="text-gray-800 font-medium text-2xl w-full mx-auto text-left mb-5">
              {service?.title}
            </h2>
            <p className="font-[poppins] tracking-widest text-gray-800  font-light text-sm/5 w-full mx-auto text-left mb-5">
              {service?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
