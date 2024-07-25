import { Link } from "react-router-dom";
import { NXNarrowArrowUp, NXNarrowArrowUpDown, NXRightArrow } from "../../icons";
import PageBodyWrapper from "../../components/PageBodyWrapper";

const tableHead = [
  {
    name: "id",
  },
  {
    name: "name",
  },
  {
    name: "parent",
  },
  {
    name: "",
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
function CategoryTable() {
  return (

    <PageBodyWrapper>
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
            {tableData.map((row, index) => (
                <tr className="border-b border-[#EEEFF2] font-semibold" key={index}>
                <td className="text-center py-5">
                    <input
                    className="form-checkbox rounded-full bg-gray-200 checked:bg-red-600"
                    type="checkbox"
                    />
                </td>
                <td className="text-start py-3 px-2">
                    <Link to={row.id}>
                    <p>{row.orders}</p>
                    <p className="text-sm font-normal text-base-300 mt-1">
                        #ID{row.id}
                    </p>
                    </Link>
                </td>
                <td className="py-3 px-2">{row.date}</td>
                <td className="py-3 px-2">{row.customer}</td>
                <td className="py-3 px-2">
                    <a><NXRightArrow /></a>
                </td>
            
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    </PageBodyWrapper>
  );
}

export default CategoryTable;


