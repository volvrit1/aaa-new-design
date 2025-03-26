import React from "react";

export default function StandOut() {
  const data = [
    {
      id: 1,
      title: "Advanced Search Filter",
      description: "Track compliances, tasks and risk controls",
    },
    {
      id: 2,
      title: "Property Listing App",
      description: "Get real-time legal updates",
    },
    {
      id: 3,
      title: "AR/VR Apps",
      description: "Automate corporate law compliances",
    },
    {
      id: 4,
      title: "Property Comparison",
      description: "Track notices like IT, GST, PT, VAT, ESI etc.",
    },
    {
      id: 5,
      title: "Save Searches",
      description: "Maintain repository of all registrations, licenses",
    },
    {
      id: 5,
      title: "Recommendations Powered by AI",
      description: "Maintain repository of all types of Insurance",
    },
    {
      id: 5,
      title: "Mortgage Calculator",
      description: "Maintain repository of important documents",
    },
    {
      id: 5,
      title: "Property Management",
      description: "Manage tasks and collaborate with teams",
    },
    {
      id: 5,
      title: "User Reviews & Rating",
      description: "Manage end-to-end contract lifecycle",
    },
  ];
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16">
      <h1 className="text-3xl font-medium text-black font-[poppins] mb-4">
        Features That Make Real Estate Apps Stand Out{" "}
      </h1>
      <p className="font-[poppins] tracking-wide mb-6 text-[#7D7D7D]">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. 
      </p>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        {data.map((content, index) => (
          <div key={index} className="border-[1.5px] border-gray-300 mb-4 ">
            <div className="p-4 h-full">
              <h2 className="text-lg font-[poppins] text-black font-medium mb-2">
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
