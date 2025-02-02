import React from "react";
import { cn } from "../util/twMerge";


interface InputProp {
  className?: string;
  labelClassname?: string;
  label?: string|React.ReactNode;
  htmlFor?: string;
  type: string;
  placeholder?: string;
  inputClassName?: any;
  id: string;
  name: string;
  value: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}
const Input = ({
  className,
  labelClassname,
  label,
  htmlFor,
  type,
  placeholder,
  inputClassName,
  id,
  name,
  value,
  required,
  onChange,
  disabled,
}: InputProp) => {
  return (
    <div className={cn("my-[16px]", className)}>
      <label
        className={cn(
          "block text-[#3E3E3E] text-[1rem]  md:[1.3rem]",
          labelClassname
        )}
        htmlFor={htmlFor}
      >
        {label}
      </label>
      <input
        disabled={disabled}
        className={cn(
          "border-b-[3px]  border-[#808080] py-4 rounded-[4px] pl-[10px] pr-[5px] w-full mt-[12px] hj-[28px] text-[1.1rem] outline-0 ",
          inputClassName,
          disabled ? "opacity-60" : ""
        )}
        onChange={onChange}
        type={type}
        required={required}
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
      />
    </div>
  );
};

export default Input;
