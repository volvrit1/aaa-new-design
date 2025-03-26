import React from "react";

export default function Consumer() {
  const content = [
    {
      id: 1,
      title: "Convenience",
      description:
        "Be it you or your customers, we all prefer shopping in just a few clicks using mobile apps that offer the best user experience. <br> If users don’t have time to visit stores due to a hectic lifestyle, it’s time for you to embrace the ideology your customers seek in your business. Thus, get onboard with Techugo, a CMMI-certified and ideal ecommerce app development company in Dubai.",
    },
    {
      id: 1,
      title: "Accessibility",
      description:
        "Shopping from a brick-and-mortar store demands time. Even visiting a nearby mall or store can be exhausting—picking potential outfits, trying them on, and waiting in long queues at the billing counter. In the case of grocery shopping, the checkout process can take up even more time. This has become one of the primary reasons customers prefer online shopping.",
    },
    {
      id: 1,
      title: "Personalization",
      description:
        "As the terms suggest, personalization in ecommerce is all about catering to customers with an experience that is exclusively built for them. With the expansion of technologies like AI and ML, brands can now sell online by presenting smart and personalized recommendations to their customer base based on shopping behavior. Not only this, but your ecommerce app development company can integrate an experience that enables customers to design and create custom products.",
    },
    {
      id: 1,
      title: "Benefits",
      description:
        "All Above Agency, a leading ecommerce mobile app development company suggests that users shop more online to get better deals & brands need to leverage the same. You must have noticed varying product prices in-store and mobile apps. It is because shopping via a business’s app enables customers to earn loyalty points or rewards that can be used towards acquiring discounts while shopping for goods or services.",
    },
  ];
  return (
    <div className="p-4 lg:px-16 space-y-4 max-w-7xl m-auto">
      <h2 className="font-[poppins] text-3xl text-black font-medium mb-4">
        {
          "Advanced Technologies for Powering Your Tailored Oil & Gas Software Development Solution"
        }
      </h2>
      <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {content.map((item, index) => (
          <div
            key={index}
            className="bg-[#F6F6F6] p-4 border-[1.5px] border-gray-300/70 h-full"
          >
            <h2 className="text-2xl font-semibold text-gray-800 font-[urbanist] mb-2">
              {item?.title}
            </h2>
            <p
              className="font-[cabin] text-base text-gray-500 line-clamp-[7] h-44"
              dangerouslySetInnerHTML={{
                __html: item?.description?.replace(/<br>/g, "<br>") || "",
              }}
            ></p>
          </div>
        ))}
      </div>
    </div>
  );
}
