import { createSlice } from "@reduxjs/toolkit";

export type ClaimPersonalValidation = {
  [index: string]: boolean;
};

const initPersonalValidation: ClaimPersonalValidation = {
  "First name": true,
  "Second name": true,
  Birthday: true,
  "Phone number": true,
  Email: true,
  "Policy number": true,
};

export const claimPersonalValidation = createSlice({
  name: "Claim Perosnal Details Validation",
  initialState: initPersonalValidation,
  reducers: {
    getValidations(state, payload) {
      state["First name"] = payload.payload.validateFirstName;
      state["Second name"] = payload.payload.validateSecondName;
      state.Birthday = payload.payload.validateDate;
      state["Phone number"] = payload.payload.validatePhoneNumber;
      state.Email = payload.payload.validateEmail;
      state["Policy number"] = payload.payload.validateNumber;
    },
  },
});

const personalValidationActions = claimPersonalValidation.actions;

export default personalValidationActions;
