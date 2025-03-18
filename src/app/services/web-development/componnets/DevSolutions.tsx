import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DevSolutions() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4">
      <div className="lg:w-5/6 m-auto mb-18 text-center">
        <h2
          className={`text sm:text-sm md:text-sm lg:text-sm xl:text-sm font-semibold tracking-widest 
                 text-gray-800
              leading-8 mb-3`}
        >
          We Are Creative Agency
        </h2>
        <h2
          className={`lg:w-5/6 m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-[#EE3639] leading-8 mb-4 `}
        >
          <span className="text-gray-800">
            Tailored Web Development Solutions
          </span>
          {"  Web Development Solutions "}
          <span className="text-gray-800">for Your Unique Business Needs</span>
        </h2>
        <p
          className={`text-gray-800 text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[14px] line-clamp-3 md:line-clamp-none  mt-4 leading-5`}
        >
          {
            "We are a leading web and mobile app development company dedicated to turning your ideas into innovative, high-performing digital solutions. Our team of expert developers, designers, and strategists specialize in creating custom apps tailored to your business needs, ensuring seamless user experiences across all devices."
          }
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-4">
        {[
          {
            title: "Streamlined Project Management",

            description:
              "We simplify project management with clear communication, efficient workflows, and timely delivery. Our structured approach ensures every project stays on track, meets deadlines, and exceeds expectations, while keeping you informed at every step.",
            image: "/assets/pm.png",
            link: "/",
          },
          {
            title: "A Dedicated Team of Experts",
            description:
              "Our team of skilled developers, designers, and strategists is committed to bringing your vision to life. With a focus on innovation and quality, we work collaboratively to deliver tailored solutions that drive results and exceed expectations.",
            image: "/assets/tm.png",
            link: "/",
          },
          {
            title: "Completion of Project in Given Time",
            description:
              "We prioritize efficiency and punctuality, ensuring your project is completed within the agreed timeline without compromising on quality. Our structured processes and dedicated team guarantee timely delivery, every time.",
            image: "/assets/gm.png",
            link: "/",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="w-full lg:min-h-[65vh] rounded-none border border-[#EE3639] p-8 flex flex-col justify-between items-start "
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
            <p className="text-gray-700  font-light text-xs/5 tracking-widest w-full mx-auto text-left mb-12">
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
          "We have been a trusted player in the web development industry since 2013, delivering high-quality, innovative, and scalable web solutions. With years of experience, we’ve helped businesses of all sizes build responsive, user-friendly websites and web applications that drive success. Our team is dedicated to providing exceptional service, from initial concept to ongoing support, ensuring that every project meets the highest standards of performance, design, and functionality."
        }
      </p>

      <div className="w-full h-[45vh] lg:h-[60vh] flex flex-col justify-center items-center m-auto text-center bg-[#242424] rounded-3xl p-4 lg:p-8 ">
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
            href={""}
            className=" p-3.5 w-44 text-center bg-[#EE3639] text-gray-50 hover:text-[#EE3639] hover:bg-transparent hover:border transition-colors ease-in-out flex justify-center items-center"
          >
            Request A Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
