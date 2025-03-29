import { image } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlockChainDevSolutions() {
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
          Innovative Blockchain Solutions with Precision and Expertise
          </span>
        </h2>
        <p
          className={`text-gray-800 text-sm sm:text-base line-clamp-3 md:line-clamp-none  mt-4`}
        >
          {
            "We combine blockchain technology, design, and business strategy together to develop disruptive solutions. Our experts design customised blockchain platforms that fit your business goals perfectly, providing scalability, efficiency, and competitive edge in the market."
          }
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
        {[
          {
            title: "Blockchain Consulting",

            description:
              "Our blockchain consulting solutions lead companies through the intricacies of blockchain technology. We offer customized guidance on how to implement decentralized systems most effectively, with greater transparency, security, and operational efficiency. Let our experts guide you through the world of blockchain and make informed choices",
            image: "/assets/appdev/android.png",
          },
          {
            title: "Custom Blockchain",
            description:
              "We create custom blockchain solutions that suit your specific business needs. Whether it is private blockchain networks or public and hybrid models, we make your system secure, scalable, and efficient, making your business processes efficient and driving long-term growth.",
            image: "/assets/appdev/ios.png",
          },
          {
            title: "Smart Contract Development",
            description:
              "Smart contracts are the core of modern decentralized applications. We create secure, automated, and self-executing contracts that reduce operational risks, increase efficiency, and remove middlemen, allowing for seamless transactions and operations.",
            image: "/assets/appdev/native.png",
          },
          {
            title: "Decentralized Application (dApp) Development",
            description:
              "We specialize in creating decentralized applications (dApps) that run on blockchain platforms. Harness the power of decentralized systems to create dApps with improved security, transparency, and scalability, and let your business thrive in a blockchain economy.",
            image: "/assets/appdev/flutter.png",
          },
          {
            title: "NFT Platform Development",
            description:
              "Our NFT platform development services enable businesses to become a part of the world of digital assets. Whether you are creating a marketplace or minting rare collectibles, our secure and scalable solutions enable you to open up the growing world of NFTs, offering your customers a great experience.",
            image: "/assets/appdev/desktop.png",
          },
          {
            title: "Cryptocurrency Development",
            description:
              "We offer cryptocurrency development services, helping organizations create their own digital currency and blockchain solutions. Our services include coin development, wallet integration, and blockchain architecture, with a secure and scalable system of cryptocurrency that meets your organization's requirements.",
            image: "/assets/appdev/web.png",
          },
        ].map((service, index) => (
          <div
            key={index}
            className={`w-full font-[poppins] rounded-none border border-[#EE3639] p-4 lg:p-8 flex flex-col justify-between items-start `}
          >
            <p className="w-14 h-14 font-medium text-xl flex justify-center items-center border p-2 mb-0 bg-[#EE3639] rounded-full">
              {"0"}
              {index + 1}{" "}
            </p>
            <h2 className="text-gray-900 font-semibold text-xl w-full mx-auto text-left mb-2 relative">
              {service?.title}
              <span className="bg-[#EE3639] inline-block w-14 absolute bottom-[-10px] left-0 h-1 rounded-full"></span>
            </h2>
            <p className="font-[poppins] tracking-widest text-gray-800  font-light text-sm/5 w-full mx-auto text-left lg:mb-12">
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
//   (index === 1 || index === 4) && "border-l border-r"
// }