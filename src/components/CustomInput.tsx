import React, { ReactNode } from "react";

interface CustomInputProps {
  style?: string;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  type?: React.HTMLInputTypeAttribute | undefined;
  mainContainer?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  LeadingComponent?: ReactNode;
  TrailingComponent?: ReactNode;
  value?: string;
}

const CustomInput = ({
  label,
  value,
  placeholder,
  type = "text",
  LeadingComponent,
  TrailingComponent,
  mainContainer,
  disabled,
  onChange,
}: CustomInputProps) => {
  return (
    <div className={`flex flex-col ${mainContainer}`}>
      <label className="text-left mb-[4px] font-satoshi-bold text-sm text-text-secondary">{label}</label>
      <div
        className={
          disabled
            ? `bg-[#F0F2F5] border border-gray-300 rounded-md flex-1 p-[10px] text-sm flex flex-row items-center gap-2`
            : `flex flex-row items-center p-2 border border-gray-300 rounded-lg focus:bg-[#eaeaea]`
        }
      >
        {LeadingComponent}
        <input
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          className={`bg-transparent outline-none flex-1 font-satoshi-regular text-text-primary placeholder:text-[#98A2B3]`}
          value={value}
          onChange={onChange}
        />
        {TrailingComponent}
      </div>
    </div>
  );
};

export default CustomInput;
