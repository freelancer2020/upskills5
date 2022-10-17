import React, { useEffect } from "react";
//redux
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/appStore";
//@Types
import { ClaimPersonalValidation } from "../../store/claimPersonalValidation";
//Actions
import toastActions from "../../store/claimToast";
import Input from "../blocks/Input";

import styles from "./personal-details-app.module.css";

const inputs = [
  {
    category: "Personal Details",
    label: "First name",
    type: "text",
    name: "personal_name",
    id: "personal_name",
    placeholder: "First Name",
  },
  {
    category: "Personal Details",
    label: "Second name",
    type: "text",
    name: "personal_secound_name",
    id: "personal_secound_name",
    placeholder: "Second Name",
  },
  {
    category: "Personal Details",
    label: "Birthday",
    type: "date",
    name: "personal_birthday",
    id: "personal_birthday",
    placeholder: "",
  },
  {
    category: "Personal Details",
    label: "Phone number",
    type: "tel",
    name: "personal_phone_number",
    id: "personal_phone_number",
    placeholder: "733-825-924",
  },
  {
    category: "Personal Details",
    label: "Email",
    type: "email",
    name: "personal_email",
    id: "personal_email",
    placeholder: "Email",
  },
  {
    category: "Personal Details",
    label: "Policy number",
    type: "text",
    name: "personal_policy_number",
    id: "personal_policy_number",
    placeholder: "Policy number",
  },
];

const PersonalDetailsApp: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const validations = useSelector<RootState, ClaimPersonalValidation>(
    (state) => state.personalValidation
  );

  useEffect(() => {
    dispatch(toastActions.hasNoError(null));
    dispatch(toastActions.clearPErsonalErrors());
  }, [dispatch]);

  return (
    <div
      className={styles["app-container"]}
      role="group"
      aria-labelledby="personal-details"
    >
      <ul style={{ width: "100%" }}>
        {inputs.map((input, index) => (
          <Input
            value={""}
            validation={validations[input.label]}
            category={input.category}
            key={index.toString()}
            label={input.label}
            type={input.type}
            name={input.name}
            id={input.id}
            placeholder={input.placeholder}
          />
        ))}
      </ul>
    </div>
  );
};

export default PersonalDetailsApp;
