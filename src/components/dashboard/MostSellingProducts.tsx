import { useState } from "react";
import { Select, SelectOptionType } from "../common";
import { NXPlus } from "../../icons";
import Products from "./Products";
import { Link } from "react-router-dom";

function MostSellingProducts() {

    const handleOptionChange = (value: string) => {
      setSelectedOption(value);
    };

    const [selectedOption, setSelectedOption] = useState<string | null>(
      "most-sales"
    );
    const options: SelectOptionType[] = [
      { value: "most-sales", label: "Most sales" },
      { value: "year", label: "Year" },
    ];

  return (
    <section className="mb-10">
      <div className="bg-white rounded-md py-3 px-3 md:px-10">
        <div className="flex flex-col gap-3 md:flex-row items-center justify-between">
          <h1 className="font-nunito font-nunito-h1 text-xl md:text-2xl">
            Most Selling Product
          </h1>
          <div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-base-300">Sort by:</span>
              <Select
                options={options}
                value={selectedOption}
                onChange={handleOptionChange}
                className="w-[110px] font-bold"
              />

              <Link
                to={"/dashboard/products/add-new-product"}
                className="flex items-center gap-1 bg-primary-500 text-white font-lato font-lato-small-bold rounded-md p-2 text-sm"
              >
                <NXPlus className="w-5" /> Add products
              </Link>
            </div>
          </div>
        </div>
        <Products />
      </div>
    </section>
  );
}

export default MostSellingProducts;
