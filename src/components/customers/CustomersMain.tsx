import { useState } from "react";
import { NXImport, NXMail, NXPlus } from "../../icons";
import { Select, SelectOptionType } from "../common";
import CustomerToolbar from "./CustomerToolbar";
import CustomerTable from "./CustomerTable";
import CustomerPagination from "./CustomerPagination";
import CustomerFilter from "./CustomerFilter";

function CustomersMain() {
  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  const [selectedOption, setSelectedOption] = useState<string | null>(
    "all-customers"
  );
  const options: SelectOptionType[] = [
    { value: "all-customers", label: "All Customers" },
    { value: "year", label: "Year" },
  ];

  const [filterOpen, setFilterOpen] = useState<boolean>(false);
  return (
    <section className="p-10">
      {/* header button group */}
      <div className="flex flex-col gap-4 sm:flex sm:flex-row sm:justify-between">
        <div className="flex items-center bg-white px-3 py-1 rounded-md">
          <span className="text-base-300">Show:</span>
          <Select
            options={options}
            value={selectedOption}
            onChange={handleOptionChange}
            className="w-[150px] font-extrabold text-"
          />
        </div>

        <div className="flex gap-5">
          <button className="flex items-center gap-3 bg-secondary-50 px-4 py-3 rounded-md text-base-300">
            <NXImport />
            <span className="hidden md:block md:text-sm lg:text-base">Import</span>
          </button>
          <button className="flex items-center gap-3 bg-secondary-50 px-4 py-3 rounded-md text-base-300">
            <NXMail />
            <span className="hidden md:block md:text-sm lg:text-base">Email segment</span>
          </button>
          <button className="flex items-center gap-3 bg-[#0CAF60] px-3 py-1 md:px-7 md:py-3 rounded-xl text-white font-extrabold font-nunito">
            <span className="hidden md:block md:text-sm lg:text-base">Add customer</span> <span className="block md:hidden"><NXPlus/></span>
          </button>
        </div>
      </div>
      {/* table */}
      <div className="bg-white mt-5 rounded-lg">
        <CustomerToolbar
          filterOpen={filterOpen}
          setFilterOpen={setFilterOpen}
        />
        {filterOpen && <CustomerFilter />}
        <div className="px-2">
          <CustomerTable />
        </div>
        <CustomerPagination />
      </div>
    </section>
  );
}

export default CustomersMain;
