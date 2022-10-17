import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";

export type GlobalValidations = {
  ["First name"]: boolean;
  ["Second name"]: boolean;
  ["Email"]: boolean;
  ["Birthday"]: boolean;
  ["Phone number"]: boolean;
  ["Policy number"]: boolean;
  ["Country"]: boolean;
  ["Address"]: boolean;
  ["Date"]: boolean;
  ["Incident description"]: boolean;
  ["Purpose of Travel"]: boolean;
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
    Country: true,
    Address: true,
    Date: true,
    "Incident description": true,
    "Purpose of Travel": true,
  },
};

export const toastSlice = createSlice({
  name: "Toast Message",
  initialState: initClaimToast,
  reducers: {
    hasError(state, payload) {
      const validation = payload.payload;
      console.log("Error", validation)
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
      if (!validation["Country"]) {
        state.globalValidation.Country = false;
      } else {
        state.globalValidation.Country = true;
      }
      if (!validation["Address"]) {
        state.globalValidation.Address = false;
      } else {
        state.globalValidation.Address = true;
      }
      if (!validation["Date"]) {
        state.globalValidation.Date = false;
      } else {
        state.globalValidation.Date = true;
      }
      if (!validation["Incident description"]) {
        state.globalValidation["Incident description"] = false;
      } else {
        state.globalValidation["Incident description"] = true;
      }
      if (!validation["travelPurpose"]) {
        state.globalValidation["Purpose of Travel"] = false;
      } else {
        state.globalValidation["Purpose of Travel"] = true;
      }
      if (!validation["Incident description"]) {
        state.globalValidation["Incident description"] = false;
      } else {
        state.globalValidation["Incident description"] = true;
      }
    },
    hasNoError(state, payload) {
      let label = payload.payload;

      if (label === "First name") {
        state.globalValidation["First name"] = true;
      }
      if (label === "Second name") {
        state.globalValidation["Second name"] = true;
      }
      if (label === "Birthday") {
        state.globalValidation.Birthday = true;
      }
      if (label === "Phone number") {
        state.globalValidation["Phone number"] = true;
      }
      if (label === "Email") {
        state.globalValidation.Email = true;
      }
      if (label === "Policy number") {
        state.globalValidation["Policy number"] = true;
      }

      if (label === "Country") {
        state.globalValidation.Country = true;
      }
      if (label === "Address") {
        state.globalValidation.Address = true;
      }
      if (label === "Date") {
        state.globalValidation.Date = true;
      }
      if (label === "Incident description") {
        state.globalValidation["Incident description"] = true;
      }
      if (label === "tourism" || label === "study / mental work" || "physical work" || "high_risk sport") {
        state.globalValidation["Purpose of Travel"] = true;
      }

      state.hasError = false;
    },
  },
});

const toastActions = toastSlice.actions;
export default toastActions;
