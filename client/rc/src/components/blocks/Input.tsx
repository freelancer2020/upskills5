import React, { useState } from "react";
//validation
import validatorX from "../../utilities/validatorX";

//redux
//@Types
import { AppDispatch, RootState } from "../../store/appStore";
import claimDataActions from "../../store/claimData";
import { useDispatch, useSelector } from "react-redux";
//Actions
import toastActions from "../../store/claimToast";

import styles from "./input.module.css";

interface InputProps {
  value?: string;
  selectValue?: string;
  category: string;
  placeholder: string;
  type: string;
  name: string;
  id: string;
  label: string;
  radiosgroup?: boolean;
  validation: boolean;
  checked?: boolean;
}

interface Sig {
  [index: string]: string;
}

const Input: React.FC<InputProps> = (props) => {
  const [isValid, setIsValid] = useState<boolean>(true);
  const dispatch = useDispatch<AppDispatch>();
  const inputsValue = useSelector<RootState, Sig>(
    (state) => state.claimData.personalDetailsData
  );

  const incidentValues = useSelector<RootState, Sig>(
    (state) => state.claimData.incidentDetailsData
  );

  const storeValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const value = e.target.value;
    const validation = validatorX(value, props.label);
    setIsValid(validation);
    dispatch(claimDataActions.dataHandler({ type: props.label, value: value }));
    dispatch(toastActions.hasNoError());
  };

  return (
    <React.Fragment>
      {props.radiosgroup ? (
        <li className={styles["radio-row"]}>
          <input
            onChange={(e) => storeValue(e)}
            value={props.selectValue}
            checked={
              incidentValues.travelPurpose === props.label ? true : false
            }
            aria-required="true"
            required
            placeholder={props.placeholder}
            type={props.type}
            name="radio-option"
            id={props.id}
            className={styles["radio-input"]}
          />
          <label className={styles["radio-label"]}>{props.label}</label>
        </li>
      ) : (
        <li className={styles["input-row"]} key={props.id}>
          <label htmlFor={props.id}>{props.label}</label>
          <input
            value={
              props.category === "Personal Details"
                ? inputsValue[props.label]
                : incidentValues[props.label]
            }
            style={{ border: isValid ? "" : "2px solid red" }}
            onChange={(e) => storeValue(e)}
            required
            aria-live="polite"
            aria-describedby={props.label}
            aria-invalid={!isValid}
            aria-errormessage={props.label}
            aria-required={true}
            placeholder={props.placeholder}
            type={props.type}
            name={props.name}
            id={props.id}
            className={styles["personal-input"]}
          />

          <i
            role="alert"
            id={props.label}
            className={styles["error-field-msg"]}
          >
            {isValid ? "" : `Please provide a valid ${props.label}`}
          </i>
        </li>
      )}
    </React.Fragment>
  );
};

export default Input;
