import Image from "next/image";
import React from "react";

export default function NoMatter() {
  const data = [
    {
      id: 1,
      title: "Real Estate Buyer",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, ",
    },
    {
      id: 2,
      title: "Real Estate Companies and Seller",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ",
    },
    {
      id: 3,
      title: "Real Estate Aggregators",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ",
    },
  ];
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16">
      <h1 className="text-3xl font-medium text-black font-[poppins] mb-4">
        No Matter What Your Stakeholder Requirements are We Have Them Coverd
      </h1>
      <p className="font-[poppins] tracking-wide mb-6 text-[#7D7D7D]">
        But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the system, and expound the actual teachings of the great
        explorer of the truth, the master-builder of human happiness.
      </p>
      <div className="container max-w-7xl mx-auto flex flex-col lg:flex-row justify-center gap-6">
        <div className="h-fit w-full lg:w-1/2">
          {data &&
            data?.map((content: any, index: any) => (
              <div key={index} className="font-[poppins]">
                <h2 className="font-[poppins] text-xl text-gray-800 font-medium mb-2">
                  {content?.title}
                </h2>
                <p className="font-[cabin] text-base font-thin text-gray-500 mb-4">
                  {content?.description}
                </p>
                <hr className="border-[1px] border-gray-300 mb-3" />
              </div>
            ))}
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="/assets/nomatter.png"
            alt="Feature Of Real State"
            width={800}
            height={600}
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
