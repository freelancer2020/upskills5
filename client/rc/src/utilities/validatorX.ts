const validatorX = (value: string, flag: string) => {
  const nameRegex = /^[a-zA-Z ]{2,30}$/;
  const phoneRegex = /^(\([0-9]{3}\)\s*|[0-9]{3}-)[0-9]{3}-[0-9]{3}$/;
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const numberRegex = /^\d+$/;
  let validation;

  switch (flag) {
    case "First name":
      validation = nameRegex.test(value);
      break;
    case "Second name":
      validation = nameRegex.test(value);
      break;
    case "Birthday":
      validation = (function () {
        return value.length > 0 ? true : false;
      })();
      break;
    case "Phone number":
      return value.length > 0 ? (validation = phoneRegex.test(value)) : false;

    case "Email":
      validation = emailRegex.test(value);
      break;
    case "Policy number":
      validation = numberRegex.test(value);
      break;
    default:
      return false;
  }
  return validation;
};

export default validatorX;
