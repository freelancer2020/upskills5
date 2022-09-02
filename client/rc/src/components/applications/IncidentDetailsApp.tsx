import React from "react";
import Input from "../blocks/Input";
import styles from "./incident-details.module.css";

const radios = [
  {
    name: "tourism",
    type: "radio",
    id: "tourism",
    label: "tourism",
    placeholder: "",
  },
  {
    name: "study",
    type: "radio",
    id: "study",
    label: "study / mental work",
    placeholder: "",
  },
  {
    name: "physical work",
    type: "radio",
    id: "physical",
    label: "physical work",
    placeholder: "",
  },
  {
    name: "high_risk",
    type: "radio",
    id: "high_risk",
    label: "high_risk sport",
    placeholder: "",
  },
];

const IncidentDetailsApp: React.FC = () => {
  return (
    <div className={styles["incident-app-container"]}>
      <div className={styles["radios-container"]}>
        <h2 id="group_label_1">Purpose of Travel</h2>
        <ul
          aria-labelledby="group_label_1"
          tabIndex={0}
          className={styles["radiogroup"]}
        >
          {radios.map((input, index) => (
            <Input
              radiosgroup
              key={index.toString()}
              type={input.type}
              name={input.name}
              label={input.label}
              id={input.id}
              placeholder={input.placeholder}
            />
          ))}
        </ul>
      </div>
      <div className={styles["inputs-container"]}></div>
    </div>
  );
};

export default IncidentDetailsApp;
