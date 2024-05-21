import { useState } from "react";
import { NXDownArrow } from "../../icons";

export type SelectOptionType = {
  value: string;
  label: string;
};

export type SelectProps = {
  options: SelectOptionType[];
  value: string | null;
  onChange: (value: string) => void;
  className?: string;
};

function Select({ options, value, onChange, className }: SelectProps) {
  // State to track the open/closed state of the dropdown
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle option selection
  const selectOption = (option: SelectOptionType) => {
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <div className={`relative rounded-md ${className}`}>
      {/* Dropdown button */}
      <button
        className="flex items-center justify-between w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base-300"
        onClick={toggleDropdown}
      >
        <span>
          {value
            ? options.find((option) => option.value === value)?.label
            : "Select an option"}
        </span>
        <NXDownArrow
          className={`h-5 w-5 transition-transform duration-300 ${
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
              onClick={() => selectOption(option)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;
