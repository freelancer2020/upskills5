import React, { useState, useRef } from "react";
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

export interface Siig {
  [index: string]: boolean;
}

const Input: React.FC<InputProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isValid, setIsValid] = useState<boolean>(true);
  const dispatch = useDispatch<AppDispatch>();
  const inputsValue = useSelector<RootState, Sig>(
    (state) => state.claimData.personalDetailsData
  );

  const incidentValues = useSelector<RootState, Sig>(
    (state) => state.claimData.incidentDetailsData
  );

  const globalValidations = useSelector<RootState, Siig>(
    (state) => state.claimToast.globalValidation
  );

  const storeValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const value = e.target.value;
    const validation = validatorX(value, props.label);
    setIsValid(validation);
    dispatch(claimDataActions.dataHandler({ type: props.label, value: value }));
    dispatch(toastActions.hasNoError(props.label));
  };

  const customValidation = () => {
    inputRef.current?.setCustomValidity(
      `Please provide a valid  ${props.label}`
    );
  };

  return (
    <React.Fragment>
      {props.radiosgroup ? (
        <li className={styles["radio-row"]}>
          <input
            aria-errormessage="travel-purpose"
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
          <label htmlFor={props.id} className={styles["radio-label"]}>
            {props.label}
          </label>
        </li>
      ) : (
        <li className={styles["input-row"]} key={props.id}>
          <div className={styles["label-row"]}>
            <label title={`${props.label} is required`} htmlFor={props.id}>
              {props.label}
            </label>
            <span className={styles["astr"]}>*</span>
          </div>
          <input
            value={
              props.category === "Personal Details"
                ? inputsValue[props.label]
                : incidentValues[props.label]
            }
            onInvalid={customValidation}
            ref={inputRef}
            onChange={(e) => storeValue(e)}
            required={true}
            aria-required={true}
            aria-autocomplete="inline"
            autoComplete="on"
            aria-describedby={`${props.id}_${props.name}`}
            aria-invalid={globalValidations[props.label] ? false : true}
            aria-errormessage={`${props.id}_${props.name}`}
            placeholder={props.placeholder}
            type={props.type}
            name={props.name}
            id={props.id}
            className={styles["personal-input"]}
          />

          <i
            aria-live="polite"
            role="alert"
            id={`${props.id}_${props.name}`}
            className={styles["error-field-msg"]}
          >
            {globalValidations[props.label]
              ? ""
              : `Please provide a valid ${props.label}`}
          </i>
        </li>
      )}
    </React.Fragment>
  );
};

export default Input;
