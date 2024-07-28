import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  errorData?: Record<string, string[]>; // errorData as an object with string arrays
}

const InputField: React.FC<InputProps> = ({ className, errorData, name, ...props }) => {
  const errorMessages = name && errorData && errorData[name] ? errorData[name] : [];
  return (
    <div>
      <input
        {...props}
        name={name}
        className={`${className ? className : 'block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'} ${errorMessages.length > 0 ? 'border-red-500' : ''}`}
      />
      {errorMessages.length > 0 && (
        <div className="text-red-600 text-sm mt-1">
          {errorMessages.map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InputField;
