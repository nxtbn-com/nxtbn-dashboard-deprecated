import React, { useState, useCallback, useRef, useEffect } from "react";
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
  tagAPI?: any;
  onChange?: (selectedTags: MultiValue<Option> | SingleValue<Option>) => void;
  defaultValue?: Option[];
}

const TagSelect: React.FC<TagSelectProps> = ({ errorData, name, isMulti, tagAPI, onChange, defaultValue, ...rest }) => {
  const [options, setOptions] = useState<Option[]>([]);
  const [selectedTags, setSelectedTags] = useState<Option[]>(defaultValue || []);
  const [inputValue, setInputValue] = useState<string>("");

  const api = useApi();

  // Sync selectedTags with defaultValue if defaultValue changes
  useEffect(() => {
    if (defaultValue) {
      setSelectedTags(defaultValue);
    }
  }, [defaultValue]);

  // Handle the addition of new tags
  const handleChange = useCallback(
    (newValue: MultiValue<Option> | SingleValue<Option>, actionMeta: ActionMeta<Option>) => {
      let updatedTags: Option[] = [];
      if (isMulti) {
        updatedTags = Array.isArray(newValue) ? (newValue as Option[]) : [];
      } else {
        updatedTags = newValue ? [newValue as Option] : [];
      }
      setSelectedTags(updatedTags);
      if (onChange) {
        onChange(updatedTags);
      }
    },
    [isMulti, onChange]
  );

  const fetchTagsWithDebounce = useRef(debounce((search: string) => {
    tagAPI({ search }).then((tags: any) => {
      setOptions(makeTagEnumFriendly(tags));
    }).catch((error:any) => {
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
        if (newTag && !options.some((option) => option.value === newTag)) {
          const newOption = { value: newTag, label: newTag };
          setOptions((prevOptions) => [...prevOptions, newOption]);
          const updatedTags = [...selectedTags, newOption];
          setSelectedTags(updatedTags);

          if (onChange) {
            onChange(updatedTags);
          }
        }
        setInputValue(""); // Clear the input field
      }
    },
    [inputValue, options, selectedTags, onChange]
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
