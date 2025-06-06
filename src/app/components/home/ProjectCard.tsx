import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ work, index }: any) => {
  return (
    <div
      key={index}
      className={`w-full lg:h-screen xl:h-auto flex flex-col-reverse lg:flex-row justify-center mb-10 ${work?.cardBgColor}`}
    >
      <div className="lg:w-1/3">
        <h2
          className={`${work?.textColor} uppercase text-4xl font-semibold mb-4 mx-auto text-left`}
        >
          {work?.title}
        </h2>
        <div className="mb-6 text-sm text-black">
          {/* <h4 className="mb-8 ">Design & Development</h4> */}
          <div className="flex flex-wrap gap-2 text-xs">
            {work?.tags.map((tag: any, index: any) => {
              return (
                <span
                  key={index}
                  className="flex items-center gap-2 bg-gray-200 p-3 rounded-lg"
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
        <p
          className={`font-[poppins] tracking-widest  text-sm mr-auto mb-6 text-left ${work?.pColor ?? "text-gray-800"
            }`}
        >
          {work?.description}
        </p>
        <Link
          href={work.href}
          type="button"
          className={`${work?.bgColor} w-full lg:w-auto text-center p-3.5 px-12 rounded-lg text-gray-50 inline-block`}
        >
          View Project
        </Link>
      </div>
      <Image
        width={400}
        height={400}
        alt="image"
        priority
        unoptimized
        src={work?.image}
        className="lg:w-2/3 hidden lg:block h-fit rounded-xl"
      />
      <Image
        width={400}
        height={400}
        alt="image"
        priority
        unoptimized
        src={work?.mobileimage || work?.image}
        className="lg:hidden h-fit mb-4 rounded-xl"
      />
    </div>
  );
};

export default ProjectCard;
