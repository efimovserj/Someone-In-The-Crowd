import React from "react";

export interface CheckboxType {
  label: string;
  isChecked?: boolean;
  onChange: (isChecked: boolean) => void;
}

const Checkbox: React.FC<CheckboxType> = props => {
  return (
    <label>
      <input
        type="checkbox"
        onChange={() => props.onChange(!props.isChecked)}
        checked={props.isChecked}
      />
      {props.label}
    </label>
  );
};

Checkbox.defaultProps = {
  label: "",
  isChecked: false
};

export default Checkbox;
