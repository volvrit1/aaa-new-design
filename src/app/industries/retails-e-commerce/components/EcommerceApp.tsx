import Image from "next/image";
import React from "react";

export default function EcommerceApp() {
  return (
    <div className="p-4 lg:px-16 space-y-4 max-w-7xl m-auto">
      <h2 className="font-[poppins] text-3xl text-black font-medium mb-4">
        {"Best Tech To Integrate Into Your eCommerce Mobile App"}
      </h2>
      <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="h-fit">
          <p className="font-[cabin] text-base font-thin text-gray-500 mb-4">
            <span className="mb-4 inline-block">
              Incorporating modern tech and trends has enabled businesses to
              acquire a competitive edge in the market. Customers opt for
              services that are unique and attractive over traditional shopping
              methods.
            </span>
            <br />
            Therefore, Professionals at All Above Agency , a leading eCommerce
            app development company in India, suggest the following tech trends
            integrate during the app development to boost your customers' online
            experience.
          </p>
          <h2 className="font-[poppins] text-3xl text-black font-medium mb-4">
            {"Artificial Intelligence and Machine Learning"}
          </h2>
          <p className="font-[cabin] text-base font-thin text-gray-500 mb-4">
            Undoubtedly, AI and ML have an incredible role to play when it comes
            to the enhancement of customer experience and boosting sales for
            higher revenue generation. The technologies lead to the augmentation
            of online shopping experiences via personalization, chatbot
            services, visual search, fraud detection, and whatnot!
          </p>
          <h2 className="font-[poppins] text-3xl text-black font-medium mb-4">
            {"Logistics and Automated Deliveries"}
          </h2>
          <p className="font-[cabin] text-base font-thin text-gray-500 mb-4">
            The use of technologies in logistics and automating deliveries lead
            to streamlining activities in ecommerce to make overall operations
            easier. Additionally, partnering with the right ecommerce app
            development company will build strategies that lower costs while
            increasing customer satisfaction.
            <br />
            The best tech trends that can be integrated for the automation of
            logistics and delivery services include warehouse management,
            predictive analysis, automated delivery vehicles, real-time
            tracking, and automated returns management.
            <br />
            Fortunately, Techugo- a leading ecommerce app development company,
            serves you all!
          </p>
        </div>
        <div className="min-h-full">
          <Image
            src="/assets/ecommerce.png"
            alt="Ecommerce App Development"
            width={800}
            height={600}
            className="object-cover object-center h-full"
          />
        </div>
      </div>
    </div>
  );
}
