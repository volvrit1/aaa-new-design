import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Agency() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4 font-[poppins] tracking-widest">
      <div className="flex py-10 flex-col lg:flex-row justify-between items-center gap-20">
        {[1, 2, 3, 4].map((faq, index) => (
          <div key={index}>
            <Image
              width={400}
              height={400}
              alt="image"
              unoptimized
              priority
              src={`/assets/award${[index + 1]}.png`}
              className="w-full object-fill rounded-xl"
            />
          </div>
        ))}
      </div>
      <div className=" m-auto mb-18 text-center">
        <h3
          className={`text-sm lg:text-lg font-semibold tracking-widest 
                 text-gray-500
               mb-3`}
        >
          We Are Creative Agency
        </h3>
        <h2
          className={`lg:w-5/6 m-auto pb-5 text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-[#EE3639] mb-4 `}
        >
          {" We Are the Pioneers "}
          <span className="text-gray-800">
            in Web & Mobile App Development in Sydney
          </span>
        </h2>
        <p
          className={`text-gray-800 pb-10 text-sm sm:text-base line-clamp-3 md:line-clamp-none  mt-4 mb-10 lg:w-4/5 m-auto`}
        >
          {
            "As a top-ranked mobile and web application development company, we are dedicated to bringing your ideas to life through customized, user-centric digital solutions. Our experienced developers, UI/UX designers, and digital strategists collaborate to craft simple-to-use mobile applications and adaptable websites that offer superior performance and user experience on any device."
          }
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-20">
          <div className="lg:w-3/5 h-80 lg:h-96 rounded-full border-[#EE3639] border ">
            <Image
              width={400}
              height={400}
              alt="image"
              unoptimized
              priority
              src={`/assets/agency.png`}
              className="w-11/12 h-80 lg:h-full m-auto  object-fill rounded-full"
            />
          </div>
          <div className="lg:w-2/5 text-left">
            <h2
              className={` m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-[#EE3639] mb-4 `}
            >
              <span className="text-gray-800">Pushing Boundaries with</span>{" "}
              {" New Technology "}
              <span className="text-gray-800"> and Creative Thinking</span>
            </h2>
            <p
              className={`text-gray-800 text-sm sm:text-base line-clamp-3 md:line-clamp-none  mt-4 mb-6 m-auto`}
            >
              {
                "We combine creative minds with the latest technology to bring future-ready solutions. From designing engaging digital experiences to leveraging the newest technological breakthroughs to build fluid apps, our goal is to help businesses thrive in the rapidly evolving digital age of Sydney."
              }
            </p>
            <Link
              href={"/about-us"}
              className="p-3.5 w-44 text-center hover:bg-[#EE3639] text-red-500 hover:text-gray-50 border border-[#EE3639] transition-colors ease-in-out flex justify-center items-center"
            >
              Know More{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
