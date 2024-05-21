import { useState } from "react";
import { Select, SelectOptionType } from "../common";
import StockDoughnutChart from "./StockDoughnutChart";

export const StockUnit = ({ className }: { className?: string }) => {
  
  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };
  
  const [selectedOption, setSelectedOption] = useState<string | null>("month");
  const options: SelectOptionType[] = [
    { value: "month", label: "Month" },
    { value: "year", label: "Year" },
  ];

  return (
    <div className={`${className} bg-white rounded-lg p-5`}>
      <div className="px-3 mb-[-20px] flex justify-between items-center">
        <h4 className="font-nunito font-nunito-h1 text-2xl">Stock Unit</h4>
        <Select
          options={options}
          value={selectedOption}
          onChange={handleOptionChange}
          className="w-[100px] text-sm text-base-300"
        />
      </div>
      <StockDoughnutChart />
    </div>
  );
};
