import React from "react";

export default function WhyNeeds() {
  const websites = [
    {
      title: "Support Brand Value",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
    },
    {
      title: "Boost User Relationship",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
    },
    {
      title: "Drive More Traffic",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. ",
    },
    {
      title: "Stay on Top",
      description:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble.",
    },
    {
      title: "Increase in Competition",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    },
    {
      title: "Improve Conversation Rate",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
    },
  ];
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16 lg:pb-0">
      <h2 className="text-3xl font-medium text-center text-black font-[poppins] mb-4">
        Why Your Business Needs Digital Marketing Service?
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {websites.map((work: any, index: any) => (
          <div key={index} className="border p-4 m-1 text-center border-[#7D7D7D]/70 h-60">
            <h2 className="font-[poppins] text-xl font-medium text-black mb-4">
              {work?.title}
            </h2>
            <p className="text-sm font-[poppins] text-[#7D7D7D] line-clamp-6">
              {work?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
