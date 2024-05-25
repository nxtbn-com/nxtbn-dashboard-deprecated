import { useState } from "react";
import { NXImport, NXMail } from "../../icons";
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
    <section className="bg-secondary-50 p-10">
      {/* header button group */}
      <div className="flex justify-between">
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
            Import
          </button>
          <button className="flex items-center gap-3 bg-secondary-50 px-4 py-3 rounded-md text-base-300">
            <NXMail />
            Email segment
          </button>
          <button className="flex items-center gap-3 bg-[#0CAF60] px-7 py-3 rounded-xl text-white font-extrabold font-nunito">
            Add customer
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
        <CustomerTable />
        <CustomerPagination />
      </div>
    </section>
  );
}

export default CustomersMain;
