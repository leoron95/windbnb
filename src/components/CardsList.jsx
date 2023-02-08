import React from "react";
import data from "@/data.json";
import Card from "./Card";
import { Montserrat } from "@next/font/google";

const montSerrat = Montserrat({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

console.log(data);

const CardsList = () => {
  return (
    <>
      <div
        style={montSerrat.style}
        className="container flex flex-row items-center justify-between px-3 mb-6 md:px-0 md:pr-24 mt-9"
      >
        <h2 className="text-[#333333] font-bold text-lg">Stays in Finland</h2>
        <h2 className="text-[#4F4F4F] font-medium text-sm">
          {data.length}+ stays
        </h2>
      </div>
      <div className="grid justify-between grid-cols-1 px-3 md:px-0 gap-y-8 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default CardsList;
