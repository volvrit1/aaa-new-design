import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Achievements() {
  return (
    <div className="container max-w-7xl mx-auto p-4 lg:p-16 space-y-4 flex flex-col lg:flex-row justify-center items-center bg-[#242424]">
      <div className="w-full lg:w-1/2 p-4 lg:p-8">
        <h2
          className={`text-3xl font-normal mb-4 mx-auto text-gray-50 text-left`}
        >
          Excellence is nothing but a <br />
          <span className="text-[#EE3639]">Client’s Smile. </span>
        </h2>
        <p className="text-gray-50 text-sm  mr-auto mb-6 text-left">
          A Next-Gen Firm Revolutionizing the Digital Landscape with Seamless,
          Result-Driven, and Cost-Effective Services and Solutions. We
          specialize in transforming businesses using cutting-edge technologies,
          providing tailor-made solutions that meet your unique needs.{" "}
        </p>

        <Link
          href={""}
          type="button"
          className={` bg-[#EE3639] border border-[#EE3639] p-3.5 px-12  text-gray-50 inline-block`}
        >
          Let’s starts the conversion
        </Link>
      </div>
      <div className="w-full lg:w-1/2 p-4 lg:p-2 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {[
          { value: "43", unit: "Year in Experience", image: "/assets/exp.png" },
          { value: "43", unit: "Team Members", image: "/assets/team.png" },
          { value: "43", unit: "Happy  Clients", image: "/assets/client.png" },
          { value: "43", unit: "Projects Done", image: "/assets/project.png" },
          { value: "43", unit: "Hours Worked", image: "/assets/worked.png" },
          { value: "43", unit: "Support Available", image: "/assets/247.png" },
        ].map((data, index) => (
          <div
            key={index}
            className="w-full h-48 rounded-xl bg-[#3D3D3D] p-4 flex flex-col justify-center items-center "
          >
            <Image
              width={400}
              height={400}
              alt="image"
              src={`${data?.image}`}
              className="w-12 h-12 object-contain rounded-xl mb-4"
            />
            <h2 className="text-gray-50 text-3xl font-semibold w-4/5 mx-auto text-center">
              {data?.value}+
            </h2>
            <h3 className="text-gray-50 text-xs w-4/5 mx-auto text-center">
              {data?.unit}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
