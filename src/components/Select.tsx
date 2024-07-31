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
  errorData?: any;
}

const defaultOptions: Option[] = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];



const SelectStyled: React.FC<SelectStyledProps> = ({
  options = defaultOptions,
  defaultValue,
  onChange,
  limit,
  isOptionDisabled,
  valueMax = 3,
  isMulti,
  customStyles,
  errorData,
  name,
  ...rest
}) => {
  const [isValid, setIsValid] = useState(true);
  const [values, setValues] = useState<Option[]>([]);

  const errorMessages = name && errorData && errorData[name] ? errorData[name] : [];

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
        defaultValue={defaultValue}
        isOptionDisabled={
          values.length ? () => values.length >= valueMax : undefined
        }
        options={options}
        instanceId="inId"
        onChange={onChangeWithLimit}
        required
        isMulti={isMulti}
        styles={customStyles}
        {...rest}
      />
      {errorMessages.length > 0 && (
        <div className="text-red-600 text-sm mt-1">
          {errorMessages.map((error:any, index:number) => (
            <div key={index}>{error}</div>
          ))}
        </div>
      )}
    </>
  );
};

export default SelectStyled;
