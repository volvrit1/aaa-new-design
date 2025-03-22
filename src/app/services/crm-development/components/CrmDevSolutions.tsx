import React from "react";

export default function CrmDevSolutions() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4">
      <div className="lg:w-5/6 m-auto mb-18 text-center">
        <h2
          className={`text sm:text-lg font-semibold tracking-widest 
                 text-gray-800
              leading-8 mb-3`}
        >
          We Are Creative Agency
        </h2>
        <h2
          className={`lg:w-5/6 m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold text-[#EE3639] leading-8 mb-4 `}
        >
          <span className="text-gray-800">Comprehensive </span>
          {"  CRM Development Services "}
          <span className="text-gray-800">
            {" "}
            to Streamline Your Business Operations
          </span>
        </h2>
        <p
          className={`text-gray-800 text-sm sm:text-base line-clamp-3 md:line-clamp-none  mt-4 leading-5`}
        >
          {
            "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices."
          }
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-2 gap-4">
        {[
          {
            title: "CRM Consulting Services",

            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices.",
            image: "/assets/ai/ml.png",
          },
          {
            title: "Custom CRM Software Development",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices.",
            image: "/assets/ai/nl.png",
          },
          {
            title: "CRM Mobile App Development",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices.",
            image: "/assets/ai/bi.png",
          },
          {
            title: "Cloud-Based CRM Development",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices.",
            image: "/assets/ai/gi.png",
          },
          {
            title: "CRM Implementation Service",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices.",
            image: "/assets/ai/ca.png",
          },
          {
            title: "CRM Integration Service",
            description:
              "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices.",
            image: "/assets/ai/ai.png",
          },
        ].map((service, index) => (
          <div
            key={index}
            className={`w-full lg:min-h-[55vh] 2xl:min-h-auto font-[poppins] rounded-none border border-black p-8 flex flex-col justify-around items-start `}
          >
            <p className="w-14 h-14 font-medium text-black text-4xl p-2 mb-0 relative">
              {"0"}
              {index + 1}{" "}
            </p>
            <h2 className="text-gray-900 font-semibold text-xl w-full mx-auto text-left mb-6 relative">
              {service?.title}
              <span className="inline-block w-16 h-1 bg-[#EE3639] absolute left-0 bottom-[-5px] rounded-full"></span>
            </h2>
            <p className="font-[poppins] tracking-widest text-gray-800  font-light text-sm/5 w-full mx-auto text-left mb-4">
              {service?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
