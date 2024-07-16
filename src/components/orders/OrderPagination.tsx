import { useState } from 'react';
import { NXDownArrow } from '../../icons';
import { SelectOptionType } from '../common';
import Pagination from '../Pagination';


function OrderPagination({orders, getOrders}: {orders: any, getOrders: (page:any)=>void}) {
    const [selectedOption, setSelectedOption] = useState("4");
    const options: SelectOptionType[] = [
      { value: "4", label: "4" },
      { value: "10", label: "10" },
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
    <div className="px-10 py-6 flex flex-col justify-center gap-4 ml:flex ml:flex-row ml:items-center ml:justify-between">
      <div className="flex justify-center items-center ml:flex ml:items-center gap-5">
        <span className="text-sm text-base-300">Show result: </span>

        {/* Dropdown button start */}
        <div
          className={`relative rounded-md w-[65px] border border-[#EEEFF2] text-sm`}
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
     <Pagination totalItems={orders?.count} totalPages={orders?.total_pages} itemsPerPage={orders?.results?.length??selectedOption} currentPage={orders?.current_page} onPageChange={getOrders}/>
    </div>
  );
}

export default OrderPagination