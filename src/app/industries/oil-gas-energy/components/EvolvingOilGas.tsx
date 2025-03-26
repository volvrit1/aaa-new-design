import React from "react";

export default function EvolvingOilGas() {
  return (
    <div
      className=" p-4 lg:p-16 object-center bg-cover relative h-[50%] mb-44"
      style={{
        backgroundImage: "url('/assets/evolving.png')", // Replace with your image URL
      }}
    >
      <div className="container  w-full translate-y-1/6 lg:translate-y-3/5  max-w-7xl m-auto p-4 lg:p-10  bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000] to-[#000000a8] backdrop-blur-lg"></div>
        <h2 className="font-[urbanist] text-3xl font-semibold mb-4 text-gray-50 relative">
          The Evolving Face of the Oil and Gas Sector in the Middle East
        </h2>
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 relative">
          <p className="text-base  text-gray-50 font-[cabin]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatriatur.
          </p>
          <p className="text-base  text-gray-50 font-[cabin]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatriatur.
          </p>
        </div>
      </div>
    </div>
  );
}
