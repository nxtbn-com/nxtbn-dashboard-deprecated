import { useState } from "react";
import { NXAlertCircle, NXChart, NXRefresh } from "../../icons";
import { Select, SelectOptionType } from "../common";
import SummaryChart from "./SummaryChart";

function TotalOrderOverview({ className }: { className?: string }) {
  const [orderItems] = useState([
    {
      title: "Total Orders",
      value: "128",
      element: <p className="text-[13px]">Last order: April 20, 2022</p>,
    },
    {
      title: "Lifetime spent",
      value: "$ 45,289,00",
      element: (
        <p className="text-[13px]">
          <span className="text-primary-500">+12.0%&nbsp;</span>
          <span className="text-base-300">from last month</span>
        </p>
      ),
    },
    {
      title: "Average orders",
      value: "$ 689,00",
      element: (
        <p className="text-[13px]">
          <span className="text-primary-500">+12.0%&nbsp;</span>
          <span className="text-base-300">from last month</span>
        </p>
      ),
    },
  ]);

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  const [selectedOption, setSelectedOption] = useState<string | null>(
    "all-time"
  );
  const options: SelectOptionType[] = [
    { value: "all-time", label: "All time" },
    { value: "year", label: "Year" },
  ];
  return (
    <div className={`${className} bg-white rounded-lg p-5`}>
      <div className="flex justify-between items-center border-b border-[#EEEFF2] pb-3">
        <div className="flex items-center gap-3">
          <NXChart />
          <h2 className="font-nunito font-nunito-h1 text-xl">
            Total Order Overview
          </h2>
        </div>
        <p className="flex items-center gap-1">
          <span className="text-base-300">Last update:</span>
          <strong>May 12, 2024</strong>
          <NXRefresh />
        </p>
      </div>
      {/* chart section */}
      <div className="flex gap-5 justify-between">
        <div className="w-[30%] flex flex-col gap-5 mt-5">
          {orderItems.map((item, index) => (
            <div
              key={item.title}
              className={`rounded-lg p-3 border border-[#EEEFF2] ${
                index === 0 && "bg-primary-500 text-white"
              }`}
            >
              <div className="flex justify-between font-lato font-[400] text-[13px]">
                <p
                  className={`${index === 0 ? "text-white" : "text-base-300"}`}
                >
                  {item.title}
                </p>
                <NXAlertCircle className="w-4" />
              </div>
              <h5 className="font-nunito font-nunito-h2 text-xl">
                {item.value}
              </h5>
              {item.element}
            </div>
          ))}
        </div>
        <div className="w-[70%] border border-[#EEEFF2] rounded-xl my-5">
          <div className="pt-5 px-3 mb-[-20px] flex justify-between items-center">
            <h4 className="font-nunito font-nunito-h1 text-2xl">Statistics</h4>

            <Select
              options={options}
              value={selectedOption}
              onChange={handleOptionChange}
              className="w-[100px] text-sm text-base-300 bg-secondary-50 border border-[#EEEFF2] shadow-sm"
            />
          </div>
          <SummaryChart />
        </div>
      </div>
    </div>
  );
}

export default TotalOrderOverview;
