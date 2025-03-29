import { image } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AppDevSolutions() {
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
    
          <span className="text-gray-800">Turning Ideas into Reality with Expertise, Creativity, and Innovation</span>
        </h2>
        <p
          className={`text-gray-800 text-sm sm:text-base line-clamp-3 md:line-clamp-none  mt-4`}
        >
          {
            "As an experienced company we transform your vision into impactful digital solutions. From app development to UI/UX design, we blend innovation and creativity to build apps that stand out in the digital landscape."
          }
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-5">
        {[
          {
            title: "Android App Development",

            description:
              "We offer exceptional Android application development services that are designed to suit your unique business requirements. Our experts leverage the latest technology to deliver intuitive, secure, and scalable Android applications that enable you to interact with customers and enhance productivity",
            image: "/assets/appdev/android.png",
          },
          {
            title: "IOS App Development",
            description:
              "Our iOS application development services are customised to create high-performance, elegant, and intuitive apps that can help increase your brand's visibility on the App Store. We aim to develop solutions that offer smooth user experiences, high security, and scalability for both iPads and iPhones.",
            image: "/assets/appdev/ios.png",
          },
          {
            title: "React Native App Development",
            description:
              "We are experts in React Native app development for companies that need to create apps providing a native feel on iOS and Android. With our cross-platform strategy, development time and expenses are cut, but with the assurance of great performance and outstanding user experience on both platforms.",
            image: "/assets/appdev/native.png",
          },
          {
            title: "Flutter App Development",
            description:
              "With Flutter application development, we help businesses to  build apps that ensure smooth performance on different platforms. Our developers are experts at crafting stunning, efficient, and practical apps that not only improve the user experience but also reduce the development time and overall cost for your business.",
            image: "/assets/appdev/flutter.png",
          },
          {
            title: "Custom App Development",
            description:
              "Our app development services are customized to address the specific needs of your business. Whether you need a mobile application or a web application, we make sure that the application is in sync with your business goals, providing functionality and user experience at its best.",
            image: "/assets/appdev/desktop.png",
          },
          {
            title: "Cross Platform Development",
            description:
              "We provide professional cross-platform app development services that enable you to target a larger audience by developing a single codebase that can run on both iOS and Android. This ensures uniform performance and user experience, enabling you to save time, resources, and development expenses.",
            image: "/assets/appdev/web.png",
          },
        ].map((service, index) => (
          <div
            key={index}
            className={`w-full font-[poppins] rounded-none border-black p-4 lg:p-8 flex flex-col border justify-between items-start `}
          >
            <Image
              width={400}
              height={400}
              alt="image"
              src={service?.image}
              className="w-16 h-16 object-contain rounded-xl mb-4"
            />
            <h2 className="text-gray-900 font-semibold text-xl w-full mx-auto text-left mb-2">
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

// ${
//   index < 3 && "border-b"
// } ${
//   (index === 1 || index=== 4) && "border-l border-r"
