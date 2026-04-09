import React, { type BaseSyntheticEvent } from "react";

interface ITextInputProps {
  className?: string;
  name: string;
  type?: React.HTMLInputTypeAttribute;
  handleChange: (e: BaseSyntheticEvent) => void;
  value: string;
}

export const TextInput = (
  { className = "", name, type = "text", handleChange, value }: Readonly<ITextInputProps>
) => {
  return (
    <input
      className={`w-full p-2 border border-gray-200 shadow-md rounded-md bg-gray-50 ${className}`}
      type={type}
      id={name}
      name={name}
      value={value}            
      onChange={handleChange}
      placeholder={`Enter your ${name}`}
    />
  );
};