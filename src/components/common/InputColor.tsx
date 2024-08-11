import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
//   className?: string;
  errorData?: Record<string, string[]>; // errorData as an object with string arrays
}

const InputColor: React.FC<InputProps> = ({ errorData, name, id, defaultValue, onChange }) => {
  const errorMessages = name && errorData && errorData[name] ? errorData[name] : [];

  // Ensure value is a string
  const colorValue = typeof defaultValue === 'string' ? defaultValue : '';
  return (
    <>
        <input
            type="color"
            id={id}
            name={name}
            defaultValue={defaultValue}
            onChange={onChange}
            className="w-12 h-12 border-none rounded-md shadow-sm cursor-pointer"
        />
        <input
            type="text"
            defaultValue={defaultValue}
            onChange={onChange}
            name={name}
            className="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
        
         {errorMessages.length > 0 && (
        <div className="text-red-600 text-sm mt-1">
          {errorMessages.map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </div>
      )}

        <div 
            className="w-12 h-12 rounded-md shadow-sm" 
            style={{ backgroundColor: colorValue }}
        ></div>
    </>
  );
};

export default InputColor;
