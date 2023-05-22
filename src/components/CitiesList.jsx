import { PinIcon } from "./Icons";

export const CitiesList = ({ data }) => {
  const uniqueCities = [
    ...new Map(data.map((item) => [item.city, item])).values(),
  ];
  return (
    <div className="flex flex-col w-full pl-9 mt-9 lg:px-0 lg:ml-9 ">
      <ul className="flex flex-col gap-9">
        {uniqueCities.map(({ title, city, country }) => (
          <li key={title} className="flex flex-row items-center">
            <PinIcon />
            <span className=" ml-2.5 font-normal text-sm text-[#4F4F4F]">
              {city}, {country}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
