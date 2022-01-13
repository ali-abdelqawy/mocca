import React from "react";

export const Button = ({ title, disabled, onClick }) => {
  return (
    <button
      type="button"
      className="button"
      disabled={disabled}
      onClick={onClick}
    >
      <span>{title}</span>
    </button>
  );
};
