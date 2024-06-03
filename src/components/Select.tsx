import React, { useState, useCallback } from "react";
import Select from "react-select";

interface Option {
  value: string;
  label: string;
}

interface SelectStyledProps {
  bg?: string;
  border?: boolean;
  accentColor?: string;
  name?: string;
  indicator?: boolean;
  options?: Option[];
  defaultValue?: Option | Option[];
  onChange?: (value: any, actionMeta: any) => void;
  limit?: number;
  isOptionDisabled?: (option: Option) => boolean;
  valueMax?: number;
  isMulti?: boolean;
  customStyles?: any;
}

const defaultOptions: Option[] = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const defaultCustomStyles = {
  control: (provided: any) => ({
    ...provided,
    borderColor: "#ced4da",
    "&:hover": {
      borderColor: "#343a40",
    },
    boxShadow: "none",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#28a745" : "white",
    color: state.isSelected ? "white" : "black",
  }),
};

const getCustomStyles = (
  accentColor: string,
  bg: string,
  border: boolean,
  indicator: boolean,
  customStyles?: any
) => {
  const defaultStyles = {
    dropdownIndicator: () => ({
      display: !indicator && "block",
    }),
    indicatorSeparator: () => ({}),
    option: (provided: any, state: any) => ({
      ...provided,
      color: state.isSelected ? accentColor : "#343a40",
      textAlign: "left",
      fontSize: "16px",
      backgroundColor: bg,
    }),
    control: (provided: any, state: any) => ({
      ...provided,
        border: !border
          ? "none"
          : state.menuIsOpen || state.isFocused
          ? `1px solid ${accentColor} !important`
          : `1px solid #ced4da !important`,
      borderColor: state.isFocused ? "#0CAF60" : "white",

      "&:hover": {
        borderColor: state.isFocused ? "#0CAF60" : "white",
      },

     
      borderRadius: 10,
      padding: "0.25rem 0.5rem",
      width: "100%",
      maxHeight: "80px",
      outline: "none",
      boxShadow: "none",
      textAlign: "left",
      backgroundColor: bg,
      fontSize: "16px",
      whiteSpace: "nowrap",
      overflow: "initial",
      flexWrap: "nowrap",
      background: 'red',
    }),
    menuList: (base: any) => ({
      ...base,
      maxHeight: "200px",
      zIndex: 9999,
    }),
    placeholder: (defaultStyles: any) => ({
      ...defaultStyles,
      color: "#6b6e6f",
      opacity: 0.7,
    }),
  };

  return {
    ...defaultStyles,
    ...defaultCustomStyles,
    ...customStyles,
  };
};

const SelectStyled: React.FC<SelectStyledProps> = ({
  bg = "#fff",
  border = true,
  accentColor = "#28a745",
  name = "item",
  indicator = true,
  options = defaultOptions,
  defaultValue,
  onChange,
  limit,
  isOptionDisabled,
  valueMax = 3,
  isMulti,
  customStyles,
  ...rest
}) => {
  const [isValid, setIsValid] = useState(true);
  const [values, setValues] = useState<Option[]>([]);

  const onChangeWithLimit = useCallback(
    (value: any, actionMeta: any) => {
      if (onChange) {
        if (
          isMulti &&
          actionMeta.action === "select-option" &&
          valueMax &&
          Array.isArray(value) &&
          value.length > valueMax
        ) {
          setIsValid(false);
        } else {
          setIsValid(true);
          setValues(value);
          return onChange(value, actionMeta);
        }
      }
    },
    [limit, onChange, isMulti, valueMax]
  );

  return (
    <>
      {(values.length >= valueMax || !isValid) && (
        <small className="text-danger">
          You can't choose more than {valueMax} items
        </small>
      )}
      <Select
        styles={getCustomStyles(
          accentColor,
          bg,
          border,
          indicator,
          customStyles
        )}
        defaultValue={defaultValue}
        name={name}
        isOptionDisabled={
          values.length ? () => values.length >= valueMax : undefined
        }
        options={options}
        instanceId="inId"
        onChange={onChangeWithLimit}
        required
        isMulti={isMulti}
        {...rest}
      />
    </>
  );
};

export default SelectStyled;
