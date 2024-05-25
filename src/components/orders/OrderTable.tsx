import { Link } from "react-router-dom";
import {
  NXNarrowArrowUp,
  NXNarrowArrowUpDown
} from "../../icons";
import "./table.css";

const tableHead = [
  {
    name: "Orders",
  },
  {
    name: "Date",
  },
  {
    name: "Customer",
  },
  {
    name: "Payment",
  },
  {
    name: "Status",
  },
  {
    name: "Price",
  },
];

const tableData = [
  {
    id: "238976",
    orders: "Vest Hoodie",
    date: "Apr 24, 2022",
    customer: "Cheiko Chute",
    payment: "Paid",
    status: "Unfullfilled",
    price: "$450",
  },
  {
    id: "238977",
    orders: "Vest Hoodie",
    date: "Apr 24, 2022",
    customer: "Cheiko Chute",
    payment: "Paid",
    status: "Completed",
    price: "$450",
  },
  {
    id: "238978",
    orders: "Vest Hoodie",
    date: "Apr 24, 2022",
    customer: "Cheiko Chute",
    payment: "Unpaid",
    status: "Cancelled",
    price: "$450",
  },
  {
    id: "238979",
    orders: "Vest Hoodie",
    date: "Apr 24, 2022",
    customer: "Cheiko Chute",
    payment: "Paid",
    status: "Shipping",
    price: "$450",
  },
];
function OrderTable() {
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
            <td className="text-start py-3">
              <Link to={row.id}>
                <p>{row.orders}</p>
                <p className="text-sm font-normal text-base-300 mt-1">
                  #ID{row.id}
                </p>
              </Link>
            </td>
            <td className="py-3">{row.date}</td>
            <td className="py-3">{row.customer}</td>
            <td className="py-3">
              <PaymentButton text={row.payment} />
            </td>
            <td className="py-3">
              <StatusButton text={row.status} />
            </td>
            <td className="py-3">{row.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default OrderTable;

const StatusButton = ({ text }: { text: string }) => {
  // Function to determine the className based on the text
  const getClassname = (status: string): string => {
    switch (status.toLowerCase()) {
      case "cancelled":
        return "text-[#FD6A6A] bg-[#FFF0F0]";
      case "unfullfilled":
        return "text-[#FE964A] bg-[#FFF0E6]";
      case "completed":
        return "text-[#0CAF60] bg-[#E7F7EF]";
      case "shipping":
        return "text-[#8C62FF] bg-[#F4F0FF]";
      default:
        return "";
    }
  };

  // Get className based on the text
  const className = getClassname(text);

  return (
    <button className={`px-3 py-1 text-sm rounded-md font-normal ${className}`}>
      {text}
    </button>
  );
};

const PaymentButton = ({ text }: { text: string }) => {
  // Function to determine the className based on the text
  const getClassname = (status: string): string => {
    switch (status.toLowerCase()) {
      case "unpaid":
        return "text-[#8C62FF] bg-[#F4F0FF]";
      case "paid":
        return "text-[#0CAF60] bg-[#E7F7EF]";
      default:
        return "";
    }
  };

  // Get className based on the text
  const className = getClassname(text);

  return (
    <button className={`px-3 py-1 text-sm rounded-md font-normal ${className}`}>
      {text}
    </button>
  );
};
