import React, { useState, useCallback, useRef } from "react";
import Select, { ActionMeta, MultiValue, SingleValue } from "react-select";
import useApi from "../api";
import enumChoice, { makeTagEnumFriendly } from "../enum";
import debounce from "lodash/debounce";

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
  const [options, setOptions] = useState<Option[]>([]);
  const [selectedTags, setSelectedTags] = useState<Option[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const api = useApi();

  // Handle the addition of new tags
  const handleChange = useCallback(
    (newValue: MultiValue<Option> | SingleValue<Option>, actionMeta: ActionMeta<Option>) => {
      if (isMulti) {
        const selectedOptions = newValue as MultiValue<Option>;
        setSelectedTags(Array.isArray(selectedOptions) ? selectedOptions : []);
      } else {
        const selectedOption = newValue as SingleValue<Option>;
        setSelectedTags(selectedOption ? [selectedOption] : []);
      }
    },
    [isMulti]
  );

  const fetchTagsWithDebounce = useRef(debounce((search: string) => {
    api.getProductTags({ search }).then((tags: any) => {
      setOptions(makeTagEnumFriendly(tags));
    }).catch((error) => {
      console.error("Failed to fetch tags", error);
    });
  }, 3000)).current;

  // Handle input changes
  const handleInputChange = useCallback((input: string) => {
    setInputValue(input);
    if (input.length > 2) {
      fetchTagsWithDebounce(input);
    }
  }, [api]);

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
