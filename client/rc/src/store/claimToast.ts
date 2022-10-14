import { createSlice } from "@reduxjs/toolkit";

export type GlobalValidations = {
  ["First name"]: boolean;
  ["Second name"]: boolean;
  ["Email"]: boolean;
  ["Birthday"]: boolean;
  ["Phone number"]: boolean;
  ["Policy number"]: boolean;
};

type ClaimToast = {
  hasError: boolean;
  globalValidation: GlobalValidations;
};

const initClaimToast: ClaimToast = {
  hasError: false,
  globalValidation: {
    "First name": true,
    "Second name": true,
    Email: true,
    Birthday: true,
    "Phone number": true,
    "Policy number": true,
  },
};

export const toastSlice = createSlice({
  name: "Toast Message",
  initialState: initClaimToast,
  reducers: {
    hasError(state, payload) {
      const validation = payload.payload;
      console.log("From redux store", payload.payload);
      state.hasError = true;
      if (!validation.validateDate) {
        state.globalValidation.Birthday = false;
      } else {
        state.globalValidation.Birthday = true;
      }
      if (!validation.validateEmail) {
        state.globalValidation.Email = false;
      } else {
        state.globalValidation.Email = true;
      }
      if (!validation.validateFirstName) {
        state.globalValidation["First name"] = false;
      } else {
        state.globalValidation["First name"] = true;
      }
      if (!validation.validateNumber) {
        state.globalValidation["Policy number"] = false;
      } else {
        state.globalValidation["Policy number"] = true;
      }
      if (!validation.validatePhoneNumber) {
        state.globalValidation["Phone number"] = false;
      } else {
        state.globalValidation["Phone number"] = true;
      }
      if (!validation.validateSecondName) {
        state.globalValidation["Second name"] = false;
      } else {
        state.globalValidation["Second name"] = true;
      }
    },
    hasNoError(state) {
      state.hasError = false;
    },
  },
});

const toastActions = toastSlice.actions;
export default toastActions;
