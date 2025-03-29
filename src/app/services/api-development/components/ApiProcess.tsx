import React from "react";
import Image from "next/image";

export default function ApiProcess() {
  return (
    <div className="p-4 lg:p-16 space-y-4">
      <div className="container max-w-7xl mx-auto">
        <div className="lg:w-5/6 m-auto mt-6 lg:mt-0 mb-10 md:mb-18 text-center">
          <h2
            className={`text sm:text-lg font-semibold tracking-widest 
                 text-gray-800
               mb-3`}
          >
            Our Process
          </h2>
          <h2
            className={`lg:w-5/6 m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold text-[#EE3639]  mb-4 `}
          >
            <span className="text-gray-900">
              Customised API Solutions for Your Unique Business Needs
            </span>
          </h2>
          <p
            className={`text-gray-900 text-sm sm:text-base line-clamp-3 md:line-clamp-none  mt-4`}
          >
            {
              "Our API development process ensures seamless integration from start to finish. We work with you to understand your requirements and provide customized, high-performance APIs that integrate smoothly with your  systems, streamlining your business processe "
            }
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {[
            {
              title: "Design",
              description:
                "We begin by getting to know your business needs and creating an API architecture that meets your objectives. Our design is built on scalability, performance, and user experience, making your API functional and efficient.",
            },
            {
              title: "Development",
              description:
                "Our development team creates scalable and secure APIs with the latest technology. We make your API scalable, maintainable, and integrated with third-party platforms in a seamless manner, creating value for your business.",
            },
            {
              title: "Testing",
              description:
                "We conduct comprehensive testing to get your API completely bug-free, secure, and run at their best. In our testing cycle, we cover load testing, security scanning, and functional testing to ensure perfect integration and good performance.",
            },
            {
              title: "Launch",
              description:
                "Once you've been tested, we prepare your API to be launched. Our professionals integrate the deployment to ensure the integration works flawlessly in your live environment. Our post-launch assistance guarantees smooth performance and quick solutions to any occurrence of issues.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className={`w-full lg:min-h-[40vh]  2xl:min-h-auto font-[poppins] rounded-xl shadow-[0_5px_10px_5px_rgba(0,0,0,0.15)] px-4 lg:px-8 py-4 flex flex-col justify-center items-center ${
                index % 2 === 0 ? "lg:mb-16" : "lg:mt-16"
              } `}
            >
              <div className="h-16 w-16 p-1 mr-auto">
                <Image
                  width={400}
                  height={400}
                  alt="image"
                  src={`/assets/api/api${index + 1}.png`}
                  className="w-12 h-12 object-contain m-auto"
                />
              </div>
              <h2 className="text-gray-900 font-semibold font-[poppins] text-xl w-full mx-auto text-left">
                {service?.title}
              </h2>
              <p className="font-[poppins] tracking-widest text-gray-900 text-sm/5 mt-2 w-full mx-auto text-left lg:mb-12">
                {service?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
