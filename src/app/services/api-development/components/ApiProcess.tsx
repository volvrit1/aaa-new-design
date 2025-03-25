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
              Our Seamless for Enhanced Connectivity and Performance{" "}
            </span>
            {"  API Integration Process "}
            <span className="text-gray-900">
              {" "}
              for Enhanced Connectivity and Performance{" "}
            </span>
          </h2>
          <p
            className={`text-gray-900 text-sm sm:text-base line-clamp-3 md:line-clamp-none  mt-4`}
          >
            {
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices."
            }
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {[
            {
              title: "Design",
              description:
                "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. ",
            },
            {
              title: "Development",
              description:
                "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. ",
            },
            {
              title: "Testing",
              description:
                "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. ",
            },
            {
              title: "Launch",
              description:
                "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. ",
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
