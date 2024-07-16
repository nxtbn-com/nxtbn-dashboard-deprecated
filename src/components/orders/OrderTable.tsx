import { Link } from "react-router-dom";
import { NXNarrowArrowUp, NXNarrowArrowUpDown } from "../../icons";
import "./table.css";
import { formatDate } from "../../utils/dateUtils";

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


function OrderTable({orders}:{orders: any}) {
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
            {tableHead.map((th, index) => (
              <th
                className={`py-5 px-2 font-normal text-base-300`}
                key={th.name}
              >
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
          {orders?.results.map((row:any, index:number) => (
            <tr className="border-b border-[#EEEFF2] font-semibold" key={index}>
              <td className="text-center py-5">
                <input
                  className="form-checkbox rounded-full bg-gray-200 checked:bg-red-600"
                  type="checkbox"
                />
              </td>
              <td className="text-start py-3 px-2">
                <Link to={row.id}>
                  <p>{row.product}</p>
                  <p className="text-sm font-normal text-base-300 mt-1">
                    #ID{row.id}
                  </p>
                </Link>
              </td>
              <td className="py-3 px-2">{formatDate(row.last_modified)}</td>
              <td className="py-3 px-2">{row.user}</td>
              <td className="py-3 px-2">
                <PaymentButton text={row.charge_status} />
              </td>
              <td className="py-3 px-2">
                <StatusButton text={row.status} />
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

const StatusButton = ({ text }: { text: string }) => {
  // Function to determine the className based on the text
  const getClassname = (status: string): string => {
    switch (status.toLowerCase()) {
      case "pending":
        return "text-[#FE964A] bg-[#FFF0E6]";
      case "processing":
        return "text-[#FE964A] bg-[#FFF0E6]";
      case "delivered":
        return "text-[#0CAF60] bg-[#E7F7EF]";
      case "shipped":
        return "text-[#8C62FF] bg-[#F4F0FF]";
      case "cancelled":
        return "text-[#FD6A6A] bg-[#FFF0F0]";
      case "returned":
        return "text-[#FD6A6A] bg-[#FFF0F0]";
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
      case "none":
        return "text-[#8C62FF] bg-[#F4F0FF]";
      case "partial":
        return "text-[#8C62FF] bg-[#F4F0FF]";
      case "paid":
        return "text-[#0CAF60] bg-[#E7F7EF]";
      case "full":
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
