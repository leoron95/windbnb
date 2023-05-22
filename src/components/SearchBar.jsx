import React from "react";
import { SearchIcon } from "./Icons";

export const SearchBar = ({ setToggleSearch, filter }) => {
  const { location, guests } = filter;
  return (
    <div className="flex flex-row w-[297px] mx-auto sm:mx-0 divide-x-2 shadow-md  h-14 rounded-2xl">
      <button
        onClick={() => setToggleSearch(true)}
        className={`w-[138px] rounded-l-2xl h-full px-4 bg-white  text-sm ${
          location ? "text-[#333333]" : " text-[#BDBDBD] font-normal"
        }`}
      >
        {!location ? "Add location" : location}
      </button>
      <button
        onClick={() => setToggleSearch(true)}
        className={`w-[138px]  h-full px-4 bg-white text-sm ${
          guests ? "text-[#333333]" : "text-[#BDBDBD] font-normal "
        }`}
      >
        {!guests ? "Add guests" : `${guests} guests`}
      </button>
      <button
        onClick={() => setToggleSearch(true)}
        className="h-full rounded-r-2xl w-14 "
      >
        <div className="flex items-center justify-center">
          <SearchIcon color="#EB5757" />
        </div>
      </button>
    </div>
  );
};
