import React from "react";

export default function CrmDevSolutions() {
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
            {" "}
            Innovative CRM Development with Precision and Expertise
          </span>
        </h2>
        <p
          className={`text-gray-800 text-sm sm:text-base line-clamp-3 md:line-clamp-none  mt-4`}
        >
          {
            "We combine advance technology with design, and business strategy to create CRM solutions that are as unique as your business. Our professionals work hand-in-hand with you to craft CRM systems that are custom-tailored to meet your business goals, enhance customer relationships, increase efficiency, and offer a competitive advantage in the market."
          }
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-2 gap-4">
        {[
          {
            title: "CRM Consulting Services",

            description:
              "Our CRM consulting solutions assist businesses in making effective decisions when implementing or maximizing CRM solutions. From system selection to strategic guidance, we guarantee your CRM solution enhances customer relationships, streamlines business processes, and provides quantifiable outcomes.",
            image: "/assets/ai/ml.png",
          },
          {
            title: "Custom CRM Software Development",
            description:
              "We are experts in creating custom CRM software that exactly meets your business requirements. Our solutions ensure automation of processes, better communication, and actionable insights for making informed decisions. Whether you're interested in cloud-based or on-premise deployments, we build a CRM that grows with your business.",
            image: "/assets/ai/nl.png",
          },
          {
            title: "CRM Mobile App Development",
            description:
              "Remain in touch with your customers anywhere, anytime. We offer CRM mobile app development services that enable companies to maintain customer relationships on the move. With emphasis on functionality and usability, our mobile solutions ensure that your CRM system is easy to use and effective from any device.",
            image: "/assets/ai/bi.png",
          },
          {
            title: "Cloud-Based CRM Development",
            description:
              "Maximize flexibility and scalability with our cloud-based CRM development. Leveraging the power of the cloud, we deliver secure, reliable, and scalable CRM solutions that allow businesses to see customer information in real-time, work seamlessly, and grow easily as your business grows.",
            image: "/assets/ai/gi.png",
          },
          {
            title: "CRM Implementation Service",
            description:
              "Implementation of a new CRM system can be a challenging task, but our CRM implementation services ensure smooth transition. We ensure step-by-step assistance and guidance to make sure that your CRM system is smoothly integrated with your existing processes and maximizes operating efficiency.",
            image: "/assets/ai/ca.png",
          },
          {
            title: "CRM Integration Service",
            description:
              "Our CRM integration solutions ensure your CRM system functions in flawless integration with your business applications such as marketing automation tools, sales suites, and customer service solutions. We ensure that your CRM system is integrated to multiple systems so that the stream of data can be optimized to the maximum while enhancing business functionality",
            image: "/assets/ai/ai.png",
          },
        ].map((service, index) => (
          <div
            key={index}
            className={`w-full font-[poppins] rounded-none border border-black p-4 lg:p-8 flex flex-col justify-around items-start `}
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
