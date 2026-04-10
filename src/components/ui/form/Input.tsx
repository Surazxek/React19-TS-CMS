import React from "react";
import {
  useController,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";

interface ITextInputProps<T extends FieldValues> {
  className?: string;
  name: Path<T>;
  type?: React.HTMLInputTypeAttribute;
  control: Control<T>;
  errMsg?: string;
}

export const TextInput = <T extends FieldValues>({
  className = "",
  name,
  type = "text",
  control,
  errMsg,
}: Readonly<ITextInputProps<T>>) => {
  const { field } = useController({
    name: name,
    control: control,
  });

  return (
    <>
      <input
        className={`w-full p-2 border border-gray-200 shadow-md rounded-md bg-gray-50 ${className}`}
        type={type}
        {...field}
        placeholder={`Enter your ${name}`}
      />
      <span className="text-red-700 text-sm font-light italic">
        {errMsg}
      </span>
    </>
  );
};










// export const TextInput = (
//   { className = "", name, type = "text", handleChange, value }: Readonly<ITextInputProps>) => {
//     //self state manage 

//   return (
//     <input
//       className={`w-full p-2 border border-gray-200 shadow-md rounded-md bg-gray-50 ${className}`}
//       type={type}
//       id={name}
//       name={name}
//       value={value}            
//       onChange={handleChange}
//       placeholder={`Enter your ${name}`}
//     />
//   );
// };