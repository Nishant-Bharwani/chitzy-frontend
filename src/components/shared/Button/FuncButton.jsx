import React from "react";
import styles from "./FuncButton.module.css";

const FuncButton = ({ disableStatus = false, onClick, label }) => {
  return (
    <button
      className={`${styles.funcButtonWrapper} ${
        !disableStatus && styles.disabledButton
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default FuncButton;
