import React, { useState } from "react";
//validation
import validatorX from "../../utilities/validatorX";

//redux
//@Types
import { AppDispatch } from "../../store/appStore";
import claimDataActions from "../../store/claimData";
import { useDispatch } from "react-redux";

import styles from "./input.module.css";

interface InputProps {
  category: string;
  placeholder: string;
  type: string;
  name: string;
  id: string;
  label: string;
  radiosgroup?: boolean;
  validation: string | boolean;
}

const Input: React.FC<InputProps> = (props) => {
  const [isValid, setIsValid] = useState<boolean>(true);
  const dispatch = useDispatch<AppDispatch>();

  const storeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const validation = validatorX(value, props.label);
    setIsValid(validation);
    dispatch(claimDataActions.dataHandler({ type: props.label, value: value }));
  };
  return (
    <React.Fragment>
      {props.radiosgroup ? (
        <li className={styles["radio-row"]}>
          <input
            onChange={(e) => storeValue(e)}
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
        <li className={styles["input-row"]}>
          <label htmlFor={props.id}>{props.label}</label>
          <input
            style={{ border: isValid ? "" : "2px solid red" }}
            onChange={(e) => storeValue(e)}
            required
            aria-required="true"
            placeholder={props.placeholder}
            type={props.type}
            name={props.name}
            id={props.id}
            className={styles["personal-input"]}
          />
        </li>
      )}
    </React.Fragment>
  );
};

export default Input;
