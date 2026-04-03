import type { ReactNode } from "react"

interface IButtonProps {
    className?: string;
    children: ReactNode;
    disabled?: boolean;
    type: "submit" | "reset" | "button";
  }
  
  export const FormActionButton = (
    { className = "", children, disabled = false, type }: Readonly<IButtonProps>
  ) => {
    return (
      <button
        disabled={disabled}
        type={type}
        className={`rounded-md cursor-pointer w-full transition p-2 border text-white ${className}
          ${
            type === "reset"
              ? "bg-red-800 hover:bg-red-950"
              : (type === "submit"
              ? "bg-green-800 hover:bg-green-950"
              : "border-gray-200 hover:bg-gray-300 text-gray-950!")
          }`}
      >
        {children}
      </button>
    );
  };


