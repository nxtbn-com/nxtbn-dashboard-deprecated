import { NXDots, NXNarrowArrowUp, NXNarrowArrowUpDown } from "../../icons";
import "./table.css";

const tableHead = [
  {
    name: "Customer Name",
  },
  {
    name: "Email",
  },
  {
    name: "Location",
  },
  {
    name: "Orders",
  },
  {
    name: "Spent",
  },
];

const tableData = [
  {
    id: "238976",
    customer_name: "Chieko Chute",
    email: "chiekochute@gmail.com",
    location: "Philadelphia, USA",
    orders: 125,
    spent: "101,345.00",
  },
  {
    id: "238977",
    customer_name: "Annabel Rohan",
    email: "chiekochute@gmail.com",
    location: "Philadelphia, USA",
    orders: 11,
    spent: "2400.00",
  },
  {
    id: "238978",
    customer_name: "Pedro Huard",
    email: "chiekochute@gmail.com",
    location: "Philadelphia, USA",
    orders: 98,
    spent: "56,987.00",
  },
  {
    id: "238979",
    customer_name: "Jamel Eusebio",
    email: "chiekochute@gmail.com",
    location: "Philadelphia, Russia",
    orders: 51,
    spent: "12,567.00",
  },
];
function CustomerTable() {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-[#EEEFF2]">
          <th className="text-center w-24">
            <input
              className="form-checkbox rounded-full bg-red-100 border-red-300 text-red-600 focus:ring-red-200"
              type="checkbox"
              name=""
              id=""
            />
          </th>
          {tableHead.map((th, index) => (
            <th className={`py-5 font-normal text-base-300`} key={th.name}>
              <span className={`flex items-center gap-3`}>
                {th.name}
                {!true ? (
                  <NXNarrowArrowUp className="text-primary-500" />
                ) : (
                  <NXNarrowArrowUpDown />
                )}
              </span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr className="border-b border-[#EEEFF2] font-semibold" key={index}>
            <td className="text-center w-24 py-5">
              <input
                className="form-checkbox rounded-full bg-gray-200 checked:bg-red-600"
                type="checkbox"
              />
            </td>
            <td className="text-start py-3 flex items-center gap-5">
              <div className="w-10 aspect-square rounded-full bg-base-400"></div>
              {row.customer_name}
            </td>
            <td className="py-3">{row.email}</td>
            <td className="py-3">{row.location}</td>
            <td className="py-3">{row.orders} orders</td>
            <td className="py-3">${row.spent}</td>
            <td className="py-3">
              <NXDots className="text-base-300" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CustomerTable;
