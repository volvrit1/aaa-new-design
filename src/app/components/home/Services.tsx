import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Services() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4 bg-[#242424]">
      <div className="lg:w-5/6 m-auto mb-18 text-center">
        <h2
          className={`text sm:text-lg tracking-widest 
                 text-gray-50
               mb-3`}
        >
          INTEGRATED SERVICES
        </h2>
        <h2
          className={`lg:w-5/6 m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-[#EE3639] mb-4 `}
        >
          <span className="text-gray-50"> Comprehensive </span>
          {" IT Services "}
          <span className="text-gray-50"> for a Connected and Efficient Future</span>
        </h2>
        <p
          className={`text-gray-50 text-sm sm:text-base line-clamp-3 md:line-clamp-none  mt-4`}
        >
          {
            "Our IT services offer a suite  of tools and technologies that facilitate communication, data exchange, and functionality over the internet. By using the potential of networked applications and advanced web technologies, we build integrated digital ecosystems that deliver operational efficiency and business success."
          }
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-4">
        {[
          {
            title: "Web Development",
            subTitle: "PHP | .NODE  |  LARAVEL  |  NEXT JS",
            description:
              "We build responsive, scalable, and secure websites customised to your business needs. Our web development solutions prioritize user experience, performance, and seamless functionality across all devices.",
            image: "/assets/webdev.png",
            link: "/",
          },
          {
            title: "App Development",
            subTitle: "REACT NATIVE  |  FLUTTER  |  KOTLIN",
            description:
              "Our team of experts create secure mobile application for iOS and Android. We focus on intuitive designs, high performance, and secure coding to ensure your app stands out in the market.",
            image: "/assets/appdev.png",
            link: "/",
          },
          {
            title: "Artificial Intelligence",
            subTitle: "PYTHON  |  R  |  JAVA  |  C++",
            description:
              "Unlock the power of AI with our advanced solutions that drive automation and decision-making. We provide machine learning, natural language processing, and AI models to optimize business operations.",
            image: "/assets/ai.png",
            link: "/",
          },
          {
            title: "Saas Development",
            subTitle: "JAVA  |  PYTHON  |  RUBY",
            description:
              "We create scalable, cloud-based SaaS platforms that simplify business processes. Our solutions provide secure, flexible access to applications, allowing businesses to scale effectively and remain competitive in the digital era.",
            image: "/assets/saas.png",
            link: "/",
          },
          {
            title: "Blockchain Development",
            subTitle: "PYTHON  |  C++  |  JAVA",
            description:
              "Our blockchain development solutions ensure secure and transparent solutions. We develop decentralized applications and smart contracts that add security to the data and improve business processes by using blockchain technology.",
            image: "/assets/block.png",
            link: "/",
          },
          {
            title: "CRM Development",
            subTitle: "PYTHON   |  JAVA  |  PHP",
            description:
              "We design customized CRM solutions that strengthen customer relationships and optimize data management. Our CRM systems integrate with you operations, maximizing sales, marketing, and customer support performance.",
            image: "/assets/crm.png",
            link: "/",
          },
          {
            title: "UX/UI Designing",
            subTitle: "USER EXPERIENCE  |  UI DESIGN  ",
            description:
              "Our UX/UI designing services are designed to provide intuitive, visually appealing user interfaces. We provide smooth interaction and a delightful experience, resulting in maximum user satisfaction and engagement on digital platforms.",
            image: "/assets/ux.png",
            link: "/",
          },
          {
            title: "Digital Marketing",
            subTitle: "SEO  |  SMO  | CONTENT STRATEGY",
            description:
              "Our digital marketing solutions enable you to reach as large an audience as possible online. From SEO to social media advertising, we let you communicate and interact with your audience most effectively.",
            image: "/assets/webdev.png",
            link: "/",
          },
          {
            title: "API Development",
            subTitle: "PYTHON | R  |  JAVA  |  C++",
            description:
              "Our API development solutions provide the ease of combining third-party applications. We build stable, scalable APIs that enhance your platform and enrich interactions between systems. ",
            image: "/assets/api.png",
            link: "/",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="w-full min-h-[45vh]  rounded-none border border-gray-50 p-8 flex flex-col justify-between items-start "
          >
            <Image
              width={400}
              height={400}
              alt="image"
              src={`${service?.image}`}
              className="min-w-14 min-h-14 max-w-14 max-h-14 object-contain rounded-xl mb-4"
            />
            <h2 className="text-white text-xl w-full mx-auto text-left mb-2">
              {service?.title}
            </h2>
            <h3 className="text-white py-3 font-thin text-sm w-full mx-auto text-left mb-3">
              {service?.subTitle}
            </h3>
            <p className="font-[poppins] tracking-widest text-gray-100 font-light text-sm w-full mx-auto text-left mb-12">
              {service?.description}
            </p>
            <Link
              href={service?.link}
              className="w-full border border-gray-50 p-2 text-gray-50 text-center"
            >
              View Service
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
