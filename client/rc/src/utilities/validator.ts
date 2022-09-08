import { PersonalDetailsData, IncidentDetailsData } from "../store/claimData";

interface ValidationObj {
  [index: string]: boolean;
}

const validator = (obj: PersonalDetailsData | IncidentDetailsData) => {
  const nameRegex = /^[a-zA-Z ]{2,30}$/;
  const phoneRegex = /^(\([0-9]{3}\)\s*|[0-9]{3}-)[0-9]{3}-[0-9]{3}$/;
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const numberRegex = /^\d+$/;
  let validation: ValidationObj = {};

  if ("First name" in obj) {
    const keys = [
      "validateFirstName",
      "validateSecondName",
      "validateDate",
      "validatePhoneNumber",
      "validateEmail",
      "validateNumber",
    ];
    const validations = [
      nameRegex.test(obj["First name"]),
      nameRegex.test(obj["Second name"]),
      (function () {
        return obj.Email.length <= 0 ? false : true;
      })(),
      phoneRegex.test(obj["Phone number"]),
      emailRegex.test(obj.Email),
      numberRegex.test(obj["Policy number"]),
    ];

    for (let i = 0; i < keys.length; i++) {
      validation[keys[i]] = validations[i];
    }
  }

  return validation;
};

export default validator;
