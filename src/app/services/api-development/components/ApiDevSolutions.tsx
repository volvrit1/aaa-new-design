import { image } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ApiDevSolutions() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4">
      <div className="lg:w-5/6 m-auto mt-6 lg:mt-0 mb-10 md:mb-18 text-center">
        <h2
          className={`text sm:text-lg font-semibold tracking-widest font-[poppins]
                 text-gray-800
               mb-3`}
        >
          We Are Creative Agency
        </h2>
        <h2
          className={`lg:w-5/6 m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold text-[#EE3639]  mb-4 `}
        >
       
          <span className="text-gray-800">
          Developing Customized API Solutions to Drive Business Innovation and Accelerate Growth
          </span>
        </h2>
        <p
          className={`text-gray-800 text-sm sm:text-base line-clamp-3 md:line-clamp-none  mt-4`}
        >
          {
            "We specialize in developing APIs that bridge the gap between your business and technology. Our experts develop creative and secure APIs that integrate flawlessly with your current systems, ensuring smooth connectivity and elevating your operations to the next level."
          }
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-5">
        {[
          {
            title: "Social Networking API Integration",

            description:
              "Integrate popular social websites into your application with simplicity. Our social networking API integration services connect your business to prominent social media websites such as Facebook, Twitter, and Instagram in order to allow social sharing, user authentication, and interaction capability.",
            image: "/assets/appdev/android.png",
          },
          {
            title: "Payment API Integration",
            description:
              "Simplify payments with our secure and efficient payment API integrations. We help you integrate payment gateways like PayPal, Stripe, or local payment options into your system, ensuring a seamless, secure checkout experience for your customers.",
            image: "/assets/appdev/ios.png",
          },
          {
            title: "Shipping API Integration",
            description:
              "Simplify your logistics with frictionless shipping API integration. We integrate your systems to top carriers such as FedEx, UPS, and Australia Post, streamlining shipping rates, tracking, and printing labels to enhance your supply chain effectiveness and customer satisfaction.",
            image: "/assets/appdev/native.png",
          },
        ].map((service, index) => (
          <div
            key={index}
            className={`w-full font-[poppins] rounded-none border p-4 lg:p-8 border-[#EE3639] flex flex-col justify-between items-start `}
          >
            <p className="w-14 h-14 font-medium text-xl text-[#EE3639] flex justify-center items-center border p-2 my-5 lg:my-0 border-[#EE3639] rounded-full">
              {"0"}
              {index + 1}{" "}
            </p>
            <h2 className="text-gray-900 font-semibold text-xl w-full mx-auto text-left mb-2 font-[poppins] ">
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

// ${(index === 1 || index === 4) && "lg:border-l-[1.3px] lg:border-r-[1.3px] border-[#EE3639]"
// }