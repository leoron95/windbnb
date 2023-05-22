import Card from "./Card";
import { Montserrat } from "@next/font/google";

const montSerrat = Montserrat({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

const CardsList = ({ data }) => {
  const staysQuantity = data.length > 12 ? "+12 stays" : `${data.length} stays`;
  return (
    <>
      <div className="container flex flex-col px-3 mx-auto min-[1440px]:px-0">
        <div
          style={montSerrat.style}
          className="flex flex-row items-center justify-between mb-6 mt-9"
        >
          <h2 className="text-[#333333] font-bold text-lg lg:text-2xl">
            Stays in Finland
          </h2>
          <h2 className="text-[#4F4F4F] font-medium text-sm">
            {staysQuantity}
          </h2>
        </div>
        <div className="grid justify-between grid-cols-1 container mx-auto min-[1440px]:px-0 gap-y-8 gap-x-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>

      {data.length === 0 && (
        <div className="flex items-center justify-center h-full">
          <p>No stays found</p>
        </div>
      )}
    </>
  );
};

export default CardsList;
