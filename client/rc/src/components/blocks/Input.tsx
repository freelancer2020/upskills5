import React from "react";
import styles from "./input.module.css";

interface InputProps {
  placeholder: string;
  type: string;
  name: string;
  id: string;
  label: string;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <div className={styles["form-row"]}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        required
        aria-required="true"
        placeholder={props.placeholder}
        type={props.type}
        name={props.name}
        id={props.id}
      />
    </div>
  );
};

export default Input;
