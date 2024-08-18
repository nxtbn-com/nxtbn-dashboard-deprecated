import React, {useEffect, useState } from "react";
import useApi from "../../api";

import Card from "./Card";
import useCardGroupItems from "./useCardGroupItems"

import {
  NXNetSale,
  NXTotalOrder,
  NXTotalSales,
  NXTotalVariant,
} from "../../icons";


function CardGroup() {
  const cardGroupItems = useCardGroupItems();
  const [basicStats, setBasicStats] = useState<any>({});

  const api = useApi();

  const fetchSate = () => {
    api.getBasicStats().then((response) => {
      setBasicStats(response);
      console.log(response);
    }, (error) => {
      console.log(error);
    })
  };

  useEffect(() => {
    fetchSate();
  }, []);

  return (
        <section className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-5 py-5">
          <div className="bg-white rounded-lg p-5 w-full h-[156px]">
            <h3 className="border-b border-[#EEEFF2] pb-2 text-base-300">
              Total Sales
            </h3>
            <div className="mt-5 flex gap-5 items-center justify-between">
              <div className="">
                <h6 className="font-nunito font-nunito-h1 text-2xl mb-2">
                  ${basicStats?.sales?.amount}
                </h6>
                <p className="flex gap-1 text-sm">
                  <span
                    className={`${
                      basicStats?.sales?.last_percentage_change < 0 ? "text-red-500" : "text-primary-500"
                    }`}
                  >
                    {basicStats?.sales?.last_percentage_change}%
                  </span>
                  <span className="text-base-300">from last week</span>
                </p>
              </div>
              <div><NXTotalSales /></div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 w-full h-[156px]">
            <h3 className="border-b border-[#EEEFF2] pb-2 text-base-300">
              Total Order
            </h3>
            <div className="mt-5 flex gap-5 items-center justify-between">
              <div className="">
                <h6 className="font-nunito font-nunito-h1 text-2xl mb-2">
                  {basicStats?.orders?.amount}
                </h6>
                <p className="flex gap-1 text-sm">
                  <span
                    className={`${
                      basicStats?.orders?.last_percentage_change < 0 ? "text-red-500" : "text-primary-500"
                    }`}
                  >
                    {basicStats?.orders?.last_percentage_change}%
                  </span>
                  <span className="text-base-300">from last week</span>
                </p>
              </div>
              <div><NXTotalOrder /></div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 w-full h-[156px]">
            <h3 className="border-b border-[#EEEFF2] pb-2 text-base-300">
              Net Sales
            </h3>
            <div className="mt-5 flex gap-5 items-center justify-between">
              <div className="">
                <h6 className="font-nunito font-nunito-h1 text-2xl mb-2">
                  ${basicStats?.net_sales?.amount}
                </h6>
                <p className="flex gap-1 text-sm">
                  <span
                    className={`${
                      basicStats?.net_sales?.last_percentage_change < 0 ? "text-red-500" : "text-primary-500"
                    }`}
                  >
                    {basicStats?.net_sales?.last_percentage_change}%
                  </span>
                  <span className="text-base-300">from last week</span>
                </p>
              </div>
              <div><NXNetSale /></div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 w-full h-[156px]">
            <h3 className="border-b border-[#EEEFF2] pb-2 text-base-300">
              Total Variant
            </h3>
            <div className="mt-5 flex gap-5 items-center justify-between">
              <div className="">
                <h6 className="font-nunito font-nunito-h1 text-2xl mb-2">
                  {basicStats?.variants?.amount}
                </h6>
                {/* <p className="flex gap-1 text-sm">
                  <span
                    className={`${
                      1 < 0 ? "text-red-500" : "text-primary-500"
                    }`}
                  >
                    0%
                  </span>
                  <span className="text-base-300">from last week</span>
                </p> */}
              </div>
              <div><NXTotalVariant/></div>
            </div>
          </div>


      </section>
  );
}

export default CardGroup