import React from "react";
import Input from "../blocks/Input";
import styles from "./personal-details-app.module.css";

const inputs = [
  {
    label: "First Name",
    type: "text",
    name: "personal_name",
    id: "personal_name",
    placeholder: "First Name",
  },
  {
    label: "Second Name",
    type: "text",
    name: "personal_secound_name",
    id: "personal_secound_name",
    placeholder: "Second Name",
  },
  {
    label: "Birthday",
    type: "date",
    name: "personal_birthday",
    id: "personal_birthday",
    placeholder: "",
  },
  {
    label: "Phone number",
    type: "tel",
    name: "personal_phone_number",
    id: "personal_phone_number",
    placeholder: "123-45-678",
  },
  {
    label: "Email",
    type: "email",
    name: "personal_email",
    id: "personal_email",
    placeholder: "Email",
  },
  {
    label: "Policy number",
    type: "number",
    name: "personal_policy_number",
    id: "personal_policy_number",
    placeholder: "Policy number",
  },
];

const PersonalDetailsApp: React.FC = () => {
  return (
    <div
      className={styles["app-container"]}
      role="group"
      aria-labelledby="personal-details"
    >
      {inputs.map((input, index) => (
        <Input
          key={index.toString()}
          label={input.label}
          type={input.type}
          name={input.name}
          id={input.id}
          placeholder={input.placeholder}
        />
      ))}
    </div>
  );
};

export default PersonalDetailsApp;
