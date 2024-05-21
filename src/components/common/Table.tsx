import { NXCalenderStar, NXDownload, NXFilter, NXNarrowArrowUp, NXNarrowArrowUpDown, NXSearch } from "../../icons";
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
    orders: "Vest Hoodie",
    date: "Apr 24, 2022",
    customer: "Cheiko Chute",
    payment: "Paid",
    status: "Unfullfilled",
    price: "$450",
  },
  {
    orders: "Vest Hoodie",
    date: "Apr 24, 2022",
    customer: "Cheiko Chute",
    payment: "Paid",
    status: "Completed",
    price: "$450",
  },
  {
    orders: "Vest Hoodie",
    date: "Apr 24, 2022",
    customer: "Cheiko Chute",
    payment: "Unpaid",
    status: "Cancelled",
    price: "$450",
  },
  {
    orders: "Vest Hoodie",
    date: "Apr 24, 2022",
    customer: "Cheiko Chute",
    payment: "Paid",
    status: "Shipping",
    price: "$450",
  },
];
function Table() {
  return (
    <div className="">
      <div className="px-10 flex items-center justify-between gap-5 py-5 border-b border-[#EEEFF2]">
        <div className="relative w-[60%]">
          <NXSearch className="absolute top-1/2 left-4 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by ID, product, or others..."
            className="p-[12px] bg-secondary-50 rounded-lg border-none outline-none ps-[3.1rem] w-full"
          />
        </div>
        <button className="flex items-center gap-3 bg-secondary-50 px-4 py-3 rounded-md text-base-300">
          <NXFilter />
          Filters
        </button>
        <button className="flex items-center gap-3 bg-secondary-50 px-4 py-3 rounded-md text-base-300">
          <NXCalenderStar />
          April 11 - April 14
        </button>
        <button className="flex items-center gap-3 bg-secondary-50 px-4 py-3 rounded-md text-base-300">
          <NXDownload />
          Download
        </button>
      </div>
      {/* table */}
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
                <span
                  className={`flex items-center  gap-3 ${
                    index === tableHead.length - 1
                      ? "justify-start"
                      : "justify-center"
                  }`}
                >
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
                  name=""
                  id=""
                />
              </td>
              <td className="text-center py-3">{row.orders}</td>
              <td className="text-center py-3">{row.date}</td>
              <td className="text-center py-3">{row.customer}</td>
              <td className="text-center py-3">
                <PaymentButton text={row.payment} />
              </td>
              <td className="text-center py-3">
                <StatusButton text={row.status} />
              </td>
              <td className="text-start py-3">{row.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* pagination */}
      <div></div>
    </div>
  );
}

export default Table;

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
