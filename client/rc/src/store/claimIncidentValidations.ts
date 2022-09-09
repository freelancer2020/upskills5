import { createSlice } from "@reduxjs/toolkit";

export type ClaimIncidentValidation = {
  [index: string]: boolean;
};

const initIncidentValidation: ClaimIncidentValidation = {
  travelPurpose: true,
  Country: true,
  Address: true,
  Date: true,
  "Incident description": true,
};

export const claimIncidentValidation = createSlice({
  name: "Claim Incident Details Validation",
  initialState: initIncidentValidation,
  reducers: {
    getValidations(state, payload) {
      state.travelPurpose = payload.payload.validateTravelPurpose;
      state["Country"] = payload.payload.validateCountry;
      state["Address"] = payload.payload.validateAddress;
      state["Date"] = payload.payload.date;
      state["Incident description"] = payload.payload.validateIncidentDesc;
    },
  },
});

const incidentlValidationActions = claimIncidentValidation.actions;

export default incidentlValidationActions;
