import UserManagementPagination from "./UserPagination";
import UserManagementTable from "./UserTable";
import UserManagementToolbar from "./UserToolbar";
import { NXDownArrow, NXPlus } from "../../icons";
import { useState } from "react";
import { SelectOptionType } from "../common";

function UserMain() {
  const [selectedOption, setSelectedOption] = useState("4");
  const options: SelectOptionType[] = [
    { value: "all_user", label: "All User" },
    { value: "admin", label: "Admin" },
    { value: "editor", label: "Editor" },
    { value: "sales", label: "Sales" },
  ];

  // State to track the open/closed state of the dropdown
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
    setIsOpen(!isOpen);
  };
  return (
    <div className="px-[5%] py-10 md:p-10">
      <div className="flex flex-row justify-between mb-8">
        <div className="flex justify-center items-center bg-white rounded-lg p-3 h-[56px]">
          <div className="flex justify-center items-center ml:flex ml:items-center gap-5">
            <span className="text-sm text-base-300">Show: </span>

            {/* Dropdown button start */}
            <div
              className={`relative rounded-md w-[150px] border border-[#EEEFF2] text-sm`}
            >
              <button
                className="flex items-center justify-between w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base-300"
                onClick={toggleDropdown}
              >
                <span className="font-bold">
                  {selectedOption
                    ? options.find((option) => option.value === selectedOption)
                        ?.label
                    : "Select an option"}
                </span>
                <NXDownArrow
                  className={`h-5 transition-transform duration-300 text-base-300 w-4 ${
                    isOpen ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown options */}
              {isOpen && (
                <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
                  {options.map((option, index) => (
                    <button
                      key={index}
                      className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                      onClick={() => handleOptionChange(option.value)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {/* Dropdown button end */}
          </div>
        </div>
        <div className="bg-primary-400 text-white text-base font-nunito font-bold rounded-[16px] p-3 flex justify-center items-center w-[60px] sm:w-[205px] h-[56px]">
          <span className="hidden sm:block">Add User</span><span className="block sm:hidden"><NXPlus/></span>
        </div>
      </div>
      <div className="bg-white rounded-lg">
        <UserManagementToolbar />
        <div className="px-4">
          <UserManagementTable />
        </div>

        <UserManagementPagination />
      </div>
    </div>
  );
}

export default UserMain;
