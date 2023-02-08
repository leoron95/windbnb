import React from "react";
import { Montserrat } from "@next/font/google";
import Image from "next/image";
const montSerrat = Montserrat({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

const Card = ({
  beds,
  city,
  country,
  maxGuests,
  photo,
  rating,
  superHost,
  title,
  type,
}) => {
  return (
    <div className="flex flex-col md:max-w-[395px] ">
      {/* <Image
        src={photo}
        alt=""
        width={350}
        height={240}
        className="rounded-3xl"
        quality={100}
      /> */}
      <div className="flex ">
        <img
          src={photo}
          alt=""
          className="object-cover w-full h-[238px]  rounded-3xl"
        />
      </div>
      <div
        style={montSerrat.style}
        className={`flex flex-row items-center justify-between ${
          superHost ? "mt-3.5" : "mt-5"
        }`}
      >
        {superHost && (
          <span className="px-2 py-1.5 border-solid border-2 rounded-xl items-center uppercase border-[#4F4F4F] text-[10px] font-bold text-[#4F4F4F]">
            super host
          </span>
        )}
        <span className="text-[#828282] font-medium text-xs ">
          {type}
          {beds && <span> . {beds} beds</span>}
        </span>
        <span className="text-[#4F4F4F] text-xs font-medium ">⭐ {rating}</span>
      </div>

      <div className={`${superHost ? "mt-3" : "mt-5"}`}>
        <p
          style={montSerrat.style}
          className="text-[#333333] font-semibold text-sm"
        >
          {title}
        </p>
      </div>
    </div>
  );
};

export default Card;
