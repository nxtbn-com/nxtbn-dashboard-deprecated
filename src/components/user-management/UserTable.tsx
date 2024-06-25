import { Link } from "react-router-dom";
import {
  NXNarrowArrowUp,
  NXNarrowArrowUpDown,
  NXDots,
  NXDelete,
} from "../../icons";

const tableHead = [
  {
    name: "Username",
  },
  {
    name: "Permission",
  },
  {
    name: "Team",
  },
  {
    name: "Status",
  },
  {
    name: "Action",
  },
];

const tableData = [
  {
    id: "238976",
    img: "https://i.ibb.co/s2jwVVg/Intersect.jpg",
    username: "Chieko Chute",
    permission: [true, true, false],
    team: "Administration",
    status: "Active",
  },
  {
    id: "5343",
    img: 'https://i.ibb.co/yyk3ZfW/Avatar.jpg',
    username: "Annabel Rohan",
    permission: [true, true, false],
    team: "Administration",
    status: "Pending",
  },
  {
    id: "238976",
    img: "https://i.ibb.co/yyk3ZfW/Avatar.jpg",
    username: "Pedro Huard",
    permission: [true, true, false],
    team: "Marketing",
    status: "Active",
  },
  {
    id: "238976",
    img: 'https://i.ibb.co/3sM59N6/Avatar.png',
    username: "Jamel Eusebio",
    permission: [true, true, false],
    team: "Editor",
    status: "Active",
  },
  {
    id: "238976",
    img: 'https://i.ibb.co/QbtzMgD/Avatar-1.png',
    username: "Augustina Midgett",
    permission: [true, true, false],
    team: "Sales",
    status: "Pending",
  },
  {
    id: "238976",
    img: "https://i.ibb.co/XbWmq2D/Avatar-2.png",
    username: "Geoffrey Mott",
    permission: [true, true, false],
    team: "Sales",
    status: "Active",
  },
];

function UserTable() {
  return (
    <div className="relative overflow-x-auto max-w-[500px] min-w-full">
      <table className="w-full table-auto text-sm ml:text-base px-3">
        <thead>
          <tr className="border-b border-[#EEEFF2]">
            <th className="text-center">
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
              <td className="text-start p-3">
                <Link to={row.id} className="flex flex-row items-center gap-3">
                  <img className="h-10 w-10 rounded-full" src={row.img} alt="" />
                  <p>{row?.username}</p>
                  {/* <p className="text-sm font-normal text-base-300 mt-1">
                    #ID{row?.id}
                  </p> */}
                </Link>
              </td>
              <td className="p-3 flex flex-row gap-4 justify-start items-center">
                {row?.permission}
                <div className="flex flex-row justify-center items-center gap-2">
                  <input
                    className="form-checkbox rounded-full bg-gray-200 checked:bg-red-600"
                    type="checkbox"
                    defaultChecked={row.permission[0]}
                  />
                  <span>Read</span>
                </div>
                <div className="flex flex-row justify-center items-center gap-2">
                  <input
                    className="form-checkbox rounded-full bg-gray-200 checked:bg-red-600"
                    type="checkbox"
                    defaultChecked={row.permission[1]}
                  />
                  <span>Write</span>
                </div>
                <div className="flex flex-row justify-center items-center gap-2">
                  <input
                    className="form-checkbox rounded-full bg-gray-200 checked:bg-red-600"
                    type="checkbox"
                    defaultChecked={row.permission[2]}
                  />
                  <span>Edit</span>
                </div>
              </td>
              <td className="p-3">{row?.team}</td>
              <td className="p-3">
                {row?.status === "Active" ? (
                  <span className="text-primary-400">{row?.status}</span>
                ) : (
                  <span className="text-red-400 italic">{row?.status}</span>
                )}
              </td>
              <td className="p-3 text-base-200 font-thin flex flex-row items-center gap-3 h-full">
                <input
                  className="form-checkbox rounded-full bg-gray-200 checked:bg-red-600"
                  type="checkbox"
                />
                |
                <NXDelete />
              </td>
              <td className="p-3">
                <NXDots className="text-base-300" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
