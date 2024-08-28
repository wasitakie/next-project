import React from "react";
import { CustomButtonProps } from "types";

const Button = ({ title, buttonStyle }: CustomButtonProps) => {
  return (
    <button
      className={`styleBtn ${buttonStyle}`}
      type="button"
      //   onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
    </button>
  );
};

export default Button;
