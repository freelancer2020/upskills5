import React from "react";
import styles from "./input.module.css";

interface InputProps {
  placeholder: string;
  type: string;
  name: string;
  id: string;
  label: string;
  radiosgroup?: boolean;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <React.Fragment>
      {props.radiosgroup ? (
        <li className={styles["radio-row"]}>
          <input
            value={props.label}
            aria-required="true"
            placeholder={props.placeholder}
            type={props.type}
            name="radio-option"
            id={props.id}
            className={styles["radio-input"]}
          />
          <label className={styles["radio-label"]} htmlFor={props.id}>
            {props.label}
          </label>
        </li>
      ) : (
        <div className={styles["input-row"]}>
          <label htmlFor={props.id}>{props.label}</label>
          <input
            required
            aria-required="true"
            placeholder={props.placeholder}
            type={props.type}
            name={props.name}
            id={props.id}
            className={styles["personal-input"]}
          />
        </div>
      )}
    </React.Fragment>
  );
};

export default Input;
