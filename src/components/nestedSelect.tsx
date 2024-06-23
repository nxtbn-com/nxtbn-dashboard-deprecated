import React, { useState } from 'react';
import Select, { components, GroupBase, OptionProps } from 'react-select';

interface Option {
  value: string;
  label: string;
  parent?: string;
  children?: Option[];
}

const options: Option[] = [
  { value: 'main1', label: 'Main Item 1', children: [
    { value: 'sub1-1', label: 'Sub Item 1-1', children: [
      { value: 'subsub1-1-1', label: 'Sub Sub Item 1-1-1' },
    ]},
    { value: 'sub1-2', label: 'Sub Item 1-2' },
  ]},
  { value: 'main2', label: 'Main Item 2', children: [
    { value: 'sub2-1', label: 'Sub Item 2-1' },
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
        <span>{data.label}</span>
        {data.children && (
          <span onClick={handleToggle} style={{ cursor: 'pointer' }}>
            {isOpen ? '▼' : '▶'}
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

const NestedSelect: React.FC = () => {
  return (
    <Select<Option>
      options={options}
      placeholder="Select an item"
      components={{ Option: CustomOption }}
    />
  );
};

export default NestedSelect;
