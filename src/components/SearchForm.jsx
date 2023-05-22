import React, { useEffect, useRef, useState } from "react";
import { GuestsCounter } from "./GuestsCounter";
import { CloseIcon, SearchIcon } from "./Icons";

import { Mulish } from "@next/font/google";
import { CitiesList } from "./CitiesList";
const muli = Mulish({ weight: ["400", "700", "800"], subsets: ["latin"] });

export const SearchForm = ({ setFilter, setToggleSearch, data }) => {
  const [search, setSearch] = useState({
    location: "",
    guests: "",
  });
  const [toggleList, setToggleList] = useState(true);
  const { location, guests } = search;

  const handleChange = (e) => {
    const searchTerm = e.target.name;
    setSearch((prev) => ({
      ...prev,
      [searchTerm]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilter(search);
    setToggleSearch(false);
  };

  const guestCounter = (guestCounter) => {
    if (guestCounter === 0) {
      setSearch({
        guests: "",
      });
    } else {
      setSearch((prev) => ({
        ...prev,
        guests: guestCounter,
      }));
    }
  };

  const inputElement = useRef(null);

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

  return (
    <>
      <div className="absolute w-full bg-white h-[632px] lg:h-[460px] z-50  ">
        <div
          className={`${muli.className} lg:max-w-7xl lg:container md:mx-auto h-[632px]`}
        >
          <form
            className="container relative h-full mx-auto "
            onSubmit={handleSubmit}
          >
            <div className="flex flex-row items-center justify-between pt-4 pl-5 pr-3 ">
              <h2 className="text-[#333333] text-xs font-bold">
                Edit your search
              </h2>
              <button onClick={() => setToggleSearch(false)}>
                <CloseIcon />
              </button>
            </div>
            <div className="flex flex-col mx-3  mt-4 border divide-y-2 shadow-md  lg:divide-y-0 lg:divide-x-[1px] lg:flex-row rounded-2xl  max-w-[1248px] ">
              <div className=" flex flex-col w-full lg:max-w-[425px] gap-1">
                <label
                  htmlFor="location"
                  className="pt-2.5 absolute  pl-6 text-[9px] font-extrabold uppercase"
                >
                  Location
                </label>
                <input
                  ref={inputElement}
                  onFocus={() => setToggleList(true)}
                  type="text"
                  name="location"
                  id="location"
                  value={location}
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder="Add location"
                  className=" h-14 w-full   pl-6 pt-7 pb-3 placeholder:text-[#BDBDBD] placeholder:font-normal placeholder:text-sm text-sm font-normal rounded-x-2xl rounded-t-2xl md:rounded-2xl "
                />
              </div>
              <div className="flex flex-col w-full lg:max-w-[425px] gap-1">
                <label
                  htmlFor="guests"
                  className="pt-2.5 absolute pl-6 text-[9px] font-extrabold uppercase"
                >
                  Guests
                </label>
                <input
                  onFocus={() => setToggleList(!toggleList)}
                  type="text"
                  name="guests"
                  id="guests"
                  value={guests}
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder="Add guests"
                  className=" h-14 w-full   pl-6 pt-7 pb-3 placeholder:text-[#BDBDBD] placeholder:font-normal placeholder:text-sm text-sm font-normal rounded-x-2xl rounded-b-2xl md:rounded-2xl"
                />
              </div>
              <div className="hidden lg:flex max-w-[395px] w-full items-center justify-center">
                <button
                  className="w-32 h-12  text-sm font-bold text-[#F2F2F2] bg-[#EB5757E5] shadow-md rounded-2xl flex items-center px-6 gap-2.5 "
                  type="submit"
                >
                  <SearchIcon color="white" />
                  Search
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row ">
              {toggleList ? (
                <CitiesList data={data} />
              ) : (
                <GuestsCounter guestCounter={guestCounter} />
              )}
            </div>

            <div className="flex flex-row justify-center">
              <div className="absolute bottom-0 pb-6 lg:hidden">
                <button
                  className="w-32 h-12 text-sm font-bold text-[#F2F2F2] bg-[#EB5757E5] shadow-md rounded-2xl flex items-center justify-center gap-2.5"
                  type="submit"
                >
                  <SearchIcon color="white" />
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
