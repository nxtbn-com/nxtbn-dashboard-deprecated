import React, { useState } from 'react';
import Select, { components, GroupBase, OptionProps } from 'react-select';
import { NXDownArrow, NXRightArrow } from '../icons';

interface Option {
  value: string;
  label: string;
  parent?: string;
  children?: Option[];
}

interface NestedSelectProps {
  options?: Option[];
  defaultValue?: Option | Option[];
  defaultOption?: Option;
  placeholder?: string;
  onChange?: (value: any, actionMeta: any) => void;
  customStyles?: any;
}



const defaultOptions: Option[] = [
  { value: 'flavors', label: 'Flavors', children: [
    { value: 'chocolate', label: 'Chocolate', children: [
      { value: 'dark-chocolate', label: 'Dark Chocolate' },
      { value: 'milk-chocolate', label: 'Milk Chocolate' },
      { value: 'white-chocolate', label: 'White Chocolate' },
    ]},
    { value: 'vanilla', label: 'Vanilla', children: [
      { value: 'french-vanilla', label: 'French Vanilla' },
      { value: 'madagascar-vanilla', label: 'Madagascar Vanilla' },
    ]},
    { value: 'strawberry', label: 'Strawberry', children: [
      { value: 'fresh-strawberry', label: 'Fresh Strawberry' },
      { value: 'strawberry-cheesecake', label: 'Strawberry Cheesecake' },
    ]},
  ]},
  { value: 'toppings', label: 'Toppings', children: [
    { value: 'nuts', label: 'Nuts', children: [
      { value: 'almonds', label: 'Almonds' },
      { value: 'peanuts', label: 'Peanuts' },
      { value: 'walnuts', label: 'Walnuts' },
    ]},
    { value: 'syrups', label: 'Syrups', children: [
      { value: 'chocolate-syrup', label: 'Chocolate Syrup' },
      { value: 'caramel-syrup', label: 'Caramel Syrup' },
      { value: 'strawberry-syrup', label: 'Strawberry Syrup' },
    ]},
    { value: 'fruits', label: 'Fruits', children: [
      { value: 'banana', label: 'Banana' },
      { value: 'cherry', label: 'Cherry' },
      { value: 'blueberry', label: 'Blueberry' },
    ]},
  ]},
];



const CustomOption = (props: OptionProps<Option, false, GroupBase<Option>>) => {
  const { data, innerRef, innerProps, selectOption } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleSelect = (e: React.MouseEvent) => {
    e.stopPropagation();
    selectOption(data);
  };

  return (
    <div ref={innerRef} {...innerProps} onClick={handleSelect}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className='cursor-pointer px-3 py-2 hover:bg-slate-200 w-full'>{data.label}</span>
        {data.children && (
          <span onClick={handleToggle} style={{ cursor: 'pointer' }}>
            {isOpen ? <NXDownArrow className='h-6'/> : <NXRightArrow className='h-6'/> }
          </span>
        )}
      </div>
      {isOpen && data.children && (
        <div style={{ paddingLeft: 20 }}>
          {data.children.map((child) => (
            <CustomOption
              key={child.value}
              {...props}
              data={child}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const NestedSelect: React.FC<NestedSelectProps> = ({
  options = defaultOptions,
  defaultValue,
  defaultOption = { value: '', label: 'Select an option' },
  placeholder = "Select an item",
  onChange,
  customStyles,
  ...rest
}) => {
  const defaultVal = defaultValue || defaultOption;

  return (
    <Select<Option>
      options={options}
      defaultValue={defaultVal}
      placeholder={placeholder}
      components={{ Option: CustomOption }}
      onChange={onChange}
      styles={customStyles}
      {...rest}
    />
  );
};

export default NestedSelect;
