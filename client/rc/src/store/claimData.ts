import { createSlice } from "@reduxjs/toolkit";

export type PersonalDetailsData = {
  firstName: string;
  secondName: string;
  birthday: string;
  phoneNumber: string;
  email: string;
  policyNumber: string;
};

export type IncidentDetailsData = {
  travelPurpose: string;
  country: string;
  address: string;
  date: string;
  incidentDesc: string;
};

interface ClaimData {
  personalDetailsData: PersonalDetailsData;
  incidentDetailsData: IncidentDetailsData;
}

const initClaimState: ClaimData = {
  personalDetailsData: {
    firstName: "",
    secondName: "",
    birthday: "",
    phoneNumber: "",
    email: "",
    policyNumber: "",
  },
  incidentDetailsData: {
    travelPurpose: "",
    country: "",
    address: "",
    date: "",
    incidentDesc: "",
  },
};

export const claimData = createSlice({
  name: "claim all data",
  initialState: initClaimState,
  reducers: {
    dataHandler(state, payload) {
      const field = payload.payload.type;
      const value = payload.payload.value;

      switch (field) {
        case "First name":
          state.personalDetailsData.firstName = value;
          break;
        case "Second name":
          state.personalDetailsData.secondName = value;
          break;
        case "Birthday":
          state.personalDetailsData.birthday = value;
          break;
        case "Phone number":
          state.personalDetailsData.phoneNumber = value;
          break;
        case "Email":
          state.personalDetailsData.email = value;
          break;
        case "Policy number":
          state.personalDetailsData.policyNumber = value;
          break;
        case "tourism":
          state.incidentDetailsData.travelPurpose = value;
          break;
        case "study / mental work":
          state.incidentDetailsData.travelPurpose = value;
          break;
        case "physical work":
          state.incidentDetailsData.travelPurpose = value;
          break;
        case "high_risk sport":
          state.incidentDetailsData.travelPurpose = value;
          break;
        case "Country":
          state.incidentDetailsData.country = value;
          break;
        case "Address":
          state.incidentDetailsData.address = value;
          break;
        case "Date":
          state.incidentDetailsData.date = value;
          break;
        case "Incident description":
          state.incidentDetailsData.incidentDesc = value;
          break;
        default:
          return;
      }
    },
  },
});

const claimDataActions = claimData.actions;

export default claimDataActions;
