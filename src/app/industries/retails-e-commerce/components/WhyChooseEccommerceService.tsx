import React from "react";

export default function WhyChooseEccommerceService() {
  const data = [
    {
      id: 1,
      title: "Partnerships with Industry leaders",
      description:
        "Backed by strategic partnerships with industry leaders, we ensure that your storefronts experience enhanced security, seamless integration, and advanced technology using the most reliable platforms. ",
    },
    {
      id: 2,
      title: "Omnichannel Integration",
      description:
        "As the best ecommerce website development company, we ensure your brand offers consistent in-store, online, or mobile presence with seamless connectivity for a unified shopping experience.",
    },
    {
      id: 3,
      title: "Proven Track Record",
      description:
        "Scale conversions, boost user experience, and steer business growth with the best ecommerce development company having years of expertise, precise insights, and a proven project portfolio.",
    },
  ];
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16">
      <h1 className="text-3xl font-medium text-black font-[poppins] mb-4">
        Why Choose Us for Ecommerce Development Services?
      </h1>
      <p className="font-[cabin] text-base text-[#7D7D7D]">
        Are you on the verge of choosing a reliable digital partner to trigger
        your ecommerce development process? Let us tell you what makes WAC the
        best ecommerce development company in India, and why you should consider
        choosing us.
      </p>
      <div className="mt-10">
        {data.map((content, index) => (
          <div
            key={index}
            className="border-[1.5px border-transparent bg-gradient-to-t from-[#242424]/70 to-[#EE3639]/70 bg-clip-border p-[1px] mb-4"
          >
            <div className="bg-gray-50 p-4 h-24">
              <h2 className="text-xl font-[poppins] text-black font-medium mb-2">
                {content?.title}
              </h2>
              <p className="font-[cabin] text-base text-[#7D7D7D]">
                {content?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
