import React from "react";

export default function HowAppWork() {
  const data = [
    {
      id: 1,
      title: "Registration",
      description:
        "Any app user needs to register and create an account that’ll hold all the consultancy-related information about an individual using the same.",
    },
    {
      id: 2,
      title: "Health Monitoring",
      description:
        "Patients must enter their health-related problems for reaching out to the best suitable professional or consultant.",
    },
    {
      id: 3,
      title: "Picking a Suitable Specialist",
      description:
        "A list of healthcare professionals appears, and users can pick from the same to book an online appointment.",
    },
    {
      id: 4,
      title: "Online Health Consultation",
      description:
        "The healthcare app development connects the user with the medical professionals via audio, video, or text. Also, the payment can be made within the app.",
    },
  ];
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16">
      <h1 className="text-[32px] font-medium font[urbanist] mb-4">
        Here is everything about how the healthcare app works
      </h1>
      <div>
        {data.map((content, index) => (
          <div key={index} className="border-[1.5px border-transparent bg-gradient-to-t from-[#242424] to-[#EE3639] bg-clip-border p-[1px] mb-4">
            <div className="bg-gray-50 px-4 py-2">
              <h2 className="text-xl font-[urbanist] font-semibold mb-2">
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
