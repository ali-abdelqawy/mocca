import React from "react";

export const Button = ({ title, disabled, onClick, style, className }) => {
  return (
    <button
      type="button"
      className={className ? `button ${className}` : "button"}
      disabled={disabled}
      onClick={() => onClick()}
      style={style}
    >
      <span>{title}</span>
    </button>
  );
};
