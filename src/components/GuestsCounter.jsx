import React, { useEffect, useState } from "react";

export const GuestsCounter = ({ guestCounter }) => {
  const [adultsCount, setAdultsCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);

  const incrementAdult = () => {
    setAdultsCount((prev) => prev + 1);
  };
  const decrementAdult = () => {
    if (adultsCount === 0) return;
    setAdultsCount((prev) => prev - 1);
  };
  const incrementChildren = () => {
    setChildrenCount((prev) => prev + 1);
  };
  const decrementChildren = () => {
    if (childrenCount === 0) return;
    setChildrenCount((prev) => prev - 1);
  };
  const count = adultsCount + childrenCount;

  useEffect(() => {
    guestCounter(count);
  }, [count]);

  return (
    <div className="relative flex flex-col mt-9 pl-7 lg:pl-0 lg:left-[370px] xl:left-[460px] lg:mt-12 lg:flex-row lg:flex">
      <div className="flex flex-col gap-[52px] ">
        <div className="text-sm ">
          <p className="font-bold">Adults</p>
          <p className="font-normal text-[#BDBDBD]">Ages 13 or above</p>
          <div className="flex gap-3.5 items-center mt-3">
            <button
              onClick={() => decrementAdult()}
              type="button"
              className="rounded-[4px] border-[#828282] border h-6 w-6"
            >
              -
            </button>
            <span className="text-[#333333] font-bold text-sm">
              {adultsCount}
            </span>
            <button
              onClick={() => incrementAdult()}
              type="button"
              className="rounded-[4px] border-[#828282] border h-6 w-6"
            >
              +
            </button>
          </div>
        </div>
        <div className="text-sm ">
          <p className="font-bold">Children</p>
          <p className="font-normal text-[#BDBDBD]">Ages 2-12</p>
          <div className="flex gap-3.5 items-center mt-3">
            <button
              onClick={decrementChildren}
              type="button"
              className="rounded-[4px] border-[#828282] border h-6 w-6"
            >
              -
            </button>
            <span className="text-[#333333] font-bold text-sm">
              {childrenCount}
            </span>
            <button
              onClick={incrementChildren}
              type="button"
              className="rounded-[4px] border-[#828282] border h-6 w-6"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
