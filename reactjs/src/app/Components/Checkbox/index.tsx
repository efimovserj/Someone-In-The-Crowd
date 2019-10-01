import React from "react";

export interface CheckboxType {
  children: React.ReactElement | string;
  isChecked: boolean;
  onChange: (isChecked: boolean) => void;
}

const Checkbox: React.FC<CheckboxType> = ({
  isChecked,
  children,
  onChange
}) => {
  return (
    <label>
      <input
        type="checkbox"
        onChange={() => onChange(!isChecked)}
        checked={isChecked}
      />
      {children}
    </label>
  );
};

export default Checkbox;
