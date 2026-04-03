import React from "react";

interface ITextInputProps {
  className?: string;
  name: string;
  type?: React.HTMLInputTypeAttribute;
}

export const TextInput = (
  { className = "", name, type = "text" }: Readonly<ITextInputProps>
) => {
  return (
    <input
      className={`w-full p-2 border border-gray-200 shadow-md rounded-md bg-gray-50 ${className}`}
      type={type}
      id={name}
      name={name}
      placeholder={`Enter your ${name}`}
    />
  );
};