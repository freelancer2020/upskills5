import React, { useState } from "react";
import Input from "../blocks/Input";
//redux
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store/appStore";

//Actions
import toastActions from "../../store/claimToast";
//@Types
import { ClaimIncidentValidation } from "../../store/claimIncidentValidations";
import claimDataActions from "../../store/claimData";
import { Siig } from "../blocks/Input";

//validator x
import validatorX from "../../utilities/validatorX";

import styles from "./incident-details.module.css";

const radios = [
  {
    category: "Incident Details",
    selectValue: "tourism",
    name: "tourism",
    type: "radio",
    id: "tourism",
    label: "tourism",
    placeholder: "",
    group: "radio",
    checked: true,
  },
  {
    category: "Incident Details",
    selectValue: "study / mental work",
    name: "study",
    type: "radio",
    id: "study",
    label: "study / mental work",
    placeholder: "",
    group: "radio",
  },
  {
    category: "Incident Details",
    selectValue: "physical work",
    name: "physical work",
    type: "radio",
    id: "physical",
    label: "physical work",
    placeholder: "",
    group: "radio",
  },
  {
    category: "Incident Details",
    selectValue: "high_risk sport",
    name: "high_risk",
    type: "radio",
    id: "high_risk",
    label: "high_risk sport",
    placeholder: "",
    group: "radio",
  },
];

const inputsIncident = [
  {
    category: "Incident Details",
    name: "country",
    type: "text",
    id: "country",
    label: "Country",
    placeholder: "Country",
  },
  {
    category: "Incident Details",
    name: "address",
    type: "text",
    id: "address",
    label: "Address",
    placeholder: "street, city",
  },
  {
    category: "Incident Details",
    name: "date",
    type: "date",
    id: "date",
    label: "Date",
    placeholder: "",
  },
];

const IncidentDetailsApp: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isValid, setIsValid] = useState<boolean>(true);
  const validations = useSelector<RootState, ClaimIncidentValidation>(
    (state) => state.incidentValidations
  );

  const incidentDesc = useSelector<RootState, string>(
    (state) => state.claimData.incidentDetailsData.incidentDesc
  );

  const globalValidations = useSelector<RootState, Siig>(
    (state) => state.claimToast.globalValidation
  );

  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    const validation = validatorX(value, "Incident description");
    setIsValid(validation);
    dispatch(
      claimDataActions.dataHandler({
        type: "Incident description",
        value: value,
      })
    );
    dispatch(toastActions.hasNoError("Incident description"));
  };
  return (
    <div className={styles["incident-app-container"]}>
      <div className={styles["radios-container"]}>
        <div className={styles["label-row"]}>
          <h2 className={styles["incident-header"]} id="group_label_1">
            Purpose of Travel
          </h2>
          <span className={styles["astr"]}>*</span>
        </div>
        <ul
          aria-labelledby="group_label_1"
          tabIndex={0}
          className={styles["radiogroup"]}
        >
          <fieldset>
            <legend></legend>
            {radios.map((input, index) => (
              <Input
                selectValue={input.selectValue}
                validation={true}
                category={input.category}
                radiosgroup
                key={index.toString()}
                type={input.type}
                name={input.name}
                label={input.label}
                id={input.id}
                placeholder={input.placeholder}
              />
            ))}
          </fieldset>
          <i
            role="alert"
            aria-live="polite"
            id="travel-purpose"
            className={styles["error-field-msg"]}
          >
            {globalValidations["Purpose of Travel"]
              ? ""
              : `Please select Purpose of Travel`}
          </i>
        </ul>
        <div className={styles["incident-app-container"]}>
          <ul style={{ width: "100%" }}>
            {inputsIncident.map((input) => (
              <Input
                key={input.id}
                value=""
                validation={validations[input.label]}
                category={input.category}
                type={input.type}
                name={input.name}
                label={input.label}
                id={input.id}
                placeholder={input.placeholder}
              />
            ))}
          </ul>
          <div className={styles["text-container"]}>
            <div className={styles["label-row"]}>
              <label htmlFor="text">Incident description</label>
              <span className={styles["astr"]}>*</span>
            </div>
            <textarea
              aria-errormessage="incident-error"
              value={incidentDesc}
              onChange={changeHandler}
              required
              aria-required={true}
              id="text"
              className={styles["text-area"]}
            ></textarea>
            <i
              aria-live="polite"
              role="alert"
              id="incident-error"
              className={styles["error-field-msg"]}
            >
              {globalValidations["Incident description"]
                ? ""
                : "Please provide incident description"}
            </i>
          </div>
        </div>
      </div>
      <div className={styles["inputs-container"]}></div>
    </div>
  );
};

export default IncidentDetailsApp;
