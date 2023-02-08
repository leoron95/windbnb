import React from "react";

export const SearchForm = () => {
  return (
    <div className="flex flex-col h-4/5  absolute w-full">
      <div className="container">
        <div className="flex flex-row items-center justify-between pl-5 pr-3 pt-4">
          <h2>Edit your search</h2>
          <i>❌</i>
        </div>
        <div className="flex flex-col rounded-2xl mt-4  mx-3 border border-black divide-y-2">
          {/* <label htmlFor="Location">Location</label> */}
          <input type="text" placeholder="Location" />
          {/* <div className="border border-solid border-[#F2F2F2]"></div> */}
          <input type="text" placeholder="Add guests" />
        </div>
      </div>
    </div>
  );
};
