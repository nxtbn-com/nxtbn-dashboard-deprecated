import React, { useState, useCallback } from "react";
import Select, { ActionMeta, MultiValue, SingleValue } from "react-select";
import useApi from "../api";

interface Option {
  value: string;
  label: string;
}

interface TagSelectProps {
  errorData?: any;
  name?: string;
  isMulti?: boolean;
}

const TagSelect: React.FC<TagSelectProps> = ({ errorData, name, isMulti, ...rest }) => {
  const [options, setOptions] = useState<Option[]>([
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ]);

  const [selectedTags, setSelectedTags] = useState<Option[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const api = useApi();

  // Handle the addition of new tags
  const handleChange = useCallback(
    (newValue: MultiValue<Option> | SingleValue<Option>, actionMeta: ActionMeta<Option>) => {
      if (isMulti) {
        // Handle multi-select case
        const selectedOptions = newValue as MultiValue<Option>;
        setSelectedTags(Array.isArray(selectedOptions) ? selectedOptions : []);
      } else {
        // Handle single-select case
        const selectedOption = newValue as SingleValue<Option>;
        setSelectedTags(selectedOption ? [selectedOption] : []);
      }
    },
    [isMulti]
  );

  // Handle input changes
  const handleInputChange = useCallback((input: string) => {
    setInputValue(input);
  }, []);

  // Handle keyDown events for tag creation
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "Enter" || event.key === ",") {
        event.preventDefault();
        const newTag = inputValue.trim();
        if (newTag && !options.some(option => option.value === newTag)) {
          const newOption = { value: newTag, label: newTag };
          setOptions(prevOptions => [...prevOptions, newOption]);
          setSelectedTags(prevTags => [...prevTags, newOption]);
        }
        setInputValue(""); // Clear the input field
      }
    },
    [inputValue, options]
  );

  return (
    <div>
      <Select
        isMulti={isMulti}
        options={options}
        value={selectedTags}
        onChange={handleChange}
        onInputChange={handleInputChange}
        inputValue={inputValue}
        onKeyDown={handleKeyDown}
        {...rest}
      />
    </div>
  );
};

export default TagSelect;
