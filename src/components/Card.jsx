import React from "react";
import { StarIcon } from "./Icons";
import Image from "next/image";

const Card = ({ beds, photo, rating, superHost, title, type }) => {
  return (
    <div className="flex flex-col ">
      {/* <img src={photo} alt={title} className=" w-full h-[269px] rounded-3xl" /> */}
      <div className=" w-full h-[269px] relative">
        <Image
          className="rounded-3xl"
          src={photo}
          alt={title}
          fill
          quality={75}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={true}
        />
      </div>
      <div
        className={`flex flex-row items-center justify-between ${
          superHost ? "mt-3.5" : "mt-5"
        }`}
      >
        <div className="flex items-center gap-3 ">
          {superHost && (
            <span className="px-2 py-1.5 border-solid border rounded-xl items-center uppercase border-[#4F4F4F] text-[10px]  lg:text-xs font-bold text-[#4F4F4F] ">
              super host
            </span>
          )}
          <span className="text-[#828282] font-medium text-xs lg:text-sm ">
            {type}
            {beds && <span> . {beds} beds</span>}
          </span>
        </div>

        <div className="text-[#4F4F4F] flex flex-row text-xs lg:text-sm font-medium gap-2 items-center">
          <StarIcon />
          {rating}
        </div>
      </div>

      <div className={`${superHost ? "mt-3" : "mt-5"}`}>
        <p className="text-[#333333] font-semibold text-sm lg:text-base">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Card;
