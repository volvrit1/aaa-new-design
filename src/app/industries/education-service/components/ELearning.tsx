import React from "react";

export default function ELearning() {
  const data: any = [
    {
      title: "Better Learning",
      description:
        "eLearning app development is providing the world with access to better learning options. In addition, the inclusion of social media has elevated the chances of collaboration, expression, and participation among students. No wonder an elearning app development company has a tremendous role to play in creating such a hassle-free experience. Move your learners from a conventional to an interactive and engaging learning experience while taking the support of our app development company in Dubai and building your own app.",
    },
    {
      title: "Better Communities",
      description:
        "Integration of new learning techniques enables students to get familiar with each other, helping them make friends and form positive communities. New-age platforms developed by an elearning app development company also successfully boost communication between schools, students, and parents while making everything available under one umbrella. Simply take your elearning business above the sky by adding robust and cutting-edge technologies for proven results with the help of a top app development company in UAE and unravel the wonders of community building.",
    },
    {
      title: "Better Retention",
      description:
        "Every business has a thirst for better retention, and what if we tell you that an elearning app can quench it without requiring much effort and energy? Confused? Not anymore. Because when you have a digital solution developed by an elearning app development company, students have more control over the education process. They can track their progress, evaluate their shortcomings, and revisit the training. In addition, an app development company in Dubai makes the complete process more enjoyable, ensuring learners are more proactive and engaged.",
    },
  ];
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16">
      <h2 className="font-[poppins] text-3xl text-gray-800 font-medium mb-4">
        eLearning App Development Company: Digitization of the Education
        Industry
      </h2>
      <div className="">
        {data &&
          data?.map((content: any, index: any) => (
            <div key={index} className="font-[poppins]">
              <div className="">
                <h2 className="font-[poppins] text-xl text-[#EE3639] font-medium mb-2">
                  {content?.title}
                </h2>
                <p className="font-[cabin] text-base font-thin text-gray-500 mb-4">
                  {content?.description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
