import React from "react";

export default function ContentSection({ title, children }: any) {
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16 lg:pb-0">
      <h2 className="font-[poppins] text-3xl text-black font-medium mb-4">
        {title ||
          " The Working Mechanism of mHealth Apps as Defined by the Best Healthcare App Development Company"}
      </h2>
      {children &&
        children?.map((data: any, index: any) => (
          <p key={index} className="font-[cabin] tracking-wide mb-6 text-[#7D7D7D]">
            {data}
          </p>
        ))}
    </div>
  );
}
