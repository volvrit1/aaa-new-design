import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function OurCoreValue() {
  return (
    <div className="p-4 lg:p-16 space-y-4 bg-[#242424]">
      <div className="container max-w-7xl mx-auto">
        <div className="lg:w-5/6 m-auto mt-6 lg:mt-0 mb-10 md:mb-18 text-center">
          <h2
            className={`lg:w-5/6 m-auto text-xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-[#EE3639] mb-4 `}
          >
            <span className="text-gray-50"> Our Core Values</span>
          </h2>
          <p
            className={`text-gray-50 text-sm sm:text-base line-clamp-3 md:line-clamp-none  mt-4`}
          >
            {
              "We operate by a set of core values that characterize our culture and success. These values guide us as we strive towards our aim of delivering excellence and making significant impact for our clients:"
            }
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "Client-Centric Approach",

              description:
                "Your business objectives are at the center of our every move. We invest time in getting to know your specific needs and challenges, guaranteeing that each solution is custom designed to enable you to see measurable results",
              image: "/assets/core1.png",
              link: "/",
            },
            {
              title: "Innovative Minds",

              description:
                "We grow on innovation and creativity, always looking for new ways to leverage technology to address business issues. Whether it's creating innovative apps or integrating  the latest tech trends, we always think outside the box",
              image: "/assets/core2.png",
              link: "/",
            },
            {
              title: "Integrity & Transparency",

              description:
                "We work with the highest integrity levels, establishing trust through honesty and open communication. With us, you can look forward to transparency in all facets of your project – from pricing to timelines",
              image: "/assets/core3.png",
              link: "/",
            },
            {
              title: "Collaboration Over Competition",

              description:
                "We are convinced that success is a team effort. Our in-house team works in perfect harmony to deliver projects that surpass expectations, while we work hand-in-hand with you to bring your vision to life",
              image: "/assets/core4.png",
              link: "/",
            },
            {
              title: "Customer Satisfaction & Support",

              description:
                "We are dedicated to providing exceptional support throughout your journey with us. From the initial consultation to post-launch support, we focus on delivering smooth experiences, ensuring that your business receives the attention they deserves.",
              image: "/assets/core5.png",
              link: "/",
            },
            {
              title: "Full-Technology Stack",

              description:
                "From concept to execution, our full technology stack allows us to provide comprehensive services across web and mobile platforms. Our in-house team handles everything, ensuring consistency, quality, and excellence every step of the way",
              image: "/assets/core6.png",
              link: "/",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="w-full rounded-none border border-gray-50 p-4 lg:p-8 flex flex-col justify-start items-start "
            >
              <Image
                width={400}
                height={400}
                alt="image"
                src={`${service?.image}`}
                className="w-14 h-14 object-contain rounded-xl mb-4"
              />
              <h2 className="text-gray-50 text-xl w-full mx-auto text-left mb-2">
                {service?.title}
              </h2>

              <p className="font-[poppins] tracking-widest text-gray-100 font-light text-xs/5 w-full mx-auto text-left mb-12">
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
    </div>
  );
}
