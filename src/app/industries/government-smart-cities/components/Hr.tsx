import Image from "next/image";
import React from "react";

export default function Hr() {
  return (
    <div className="max-w-7xl m-auto">
      <Image src="/assets/hr.png" alt="hr" width={1000} height={1000} className="w-full object-cover" />
    </div>
  );
}
