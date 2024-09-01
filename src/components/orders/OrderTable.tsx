import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from 'moment';

import { TextBadge } from "../common";

import useApi from "../../api";

import { NXNarrowArrowUp, NXNarrowArrowUpDown } from "../../icons";

import enumChoice, { getEnumLabel } from "../../enum";

function OrderTable({ orders }: any) {
  // const [orders, setOrders] = useState([]);

  const api = useApi();

  
  return (
    <div className="relative overflow-x-auto">
      <table className="min-w-[400px] w-full table-auto text-sm ml:text-base px-3">
        <thead>
          <tr className="border-b border-[#EEEFF2]">
            <th className="text-center ">
              <input
                className="form-checkbox rounded-full bg-red-100 border-red-300 text-red-600 focus:ring-red-200"
                type="checkbox"
                name=""
                id=""
              />
            </th>
            <th className={`py-5 px-2 font-normal text-base-300`}>
                <span className={`flex items-center gap-3`}>
                  Order
                  {!true ? (
                    <NXNarrowArrowUp className="text-primary-500" />
                  ) : (
                    <NXNarrowArrowUpDown />
                  )}
                </span>
            </th>
            <th className={`py-5 px-2 font-normal text-base-300`}>
                <span className={`flex items-center gap-3`}>
                  Date and Time
                  {!true ? (
                    <NXNarrowArrowUp className="text-primary-500" />
                  ) : (
                    <NXNarrowArrowUpDown />
                  )}
                </span>
            </th>
            <th className={`py-5 px-2 font-normal text-base-300`}>
                <span className={`flex items-center gap-3`}>
                  Customer
                  {!true ? (
                    <NXNarrowArrowUp className="text-primary-500" />
                  ) : (
                    <NXNarrowArrowUpDown />
                  )}
                </span>
            </th>
            <th className={`py-5 px-2 font-normal text-base-300`}>
                <span className={`flex items-center gap-3`}>
                  Payment Method
                  {!true ? (
                    <NXNarrowArrowUp className="text-primary-500" />
                  ) : (
                    <NXNarrowArrowUpDown />
                  )}
                </span>
            </th>
            <th className={`py-5 px-2 font-normal text-base-300`}>
                <span className={`flex items-center gap-3`}>
                  Status
                  {!true ? (
                    <NXNarrowArrowUp className="text-primary-500" />
                  ) : (
                    <NXNarrowArrowUpDown />
                  )}
                </span>
            </th>
            <th className={`py-5 px-2 font-normal text-base-300`}>
                <span className={`flex items-center gap-3`}>
                  Price
                  {!true ? (
                    <NXNarrowArrowUp className="text-primary-500" />
                  ) : (
                    <NXNarrowArrowUpDown />
                  )}
                </span>
            </th>

          </tr>
        </thead>
        <tbody>
          {orders.map((row: any, index: number) => (
            <tr className="border-b border-[#EEEFF2] font-semibold" key={index}>
              <td className="text-center py-5">
                <input
                  className="form-checkbox rounded-full bg-gray-200 checked:bg-red-600"
                  type="checkbox"
                />
              </td>
              <td className="text-start py-3 px-2">
                <Link to={row.id}>
                  <p>{row.id}</p>
                  <p className="text-sm font-normal text-base-300 mt-1">
                    #ID{row.id}
                  </p>
                </Link>
              </td>
              <td className="py-3 px-2">{moment(row.created_at).format('MMMM D, YYYY h:mm A')}</td>
              <td className="py-3 px-2">{row.user}</td>
              <td className="py-3 px-2">
                <TextBadge value={row.payment_method} label={getEnumLabel(enumChoice.paymentMethods, row.payment_method)} />
              </td>
              <td className="py-3 px-2">
              <TextBadge value={row.status} label={getEnumLabel(enumChoice.orderStatus, row.status)} />
              </td>
              <td className="py-3 px-2">${row.total_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderTable;
