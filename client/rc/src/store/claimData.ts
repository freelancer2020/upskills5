import { createSlice } from "@reduxjs/toolkit";

export type PersonalDetailsData = {
  ["First name"]: string;
  ["Second name"]: string;
  Birthday: string;
  ["Phone number"]: string;
  Email: string;
  ["Policy number"]: string;
};

export type IncidentDetailsData = {
  travelPurpose: string;
  Country: string;
  Address: string;
  Date: string;
  incidentDesc: string;
};

interface ClaimData {
  personalDetailsData: PersonalDetailsData;
  incidentDetailsData: IncidentDetailsData;
}

const initClaimState: ClaimData = {
  personalDetailsData: {
    "First name": "",
    "Second name": "",
    Birthday: "",
    "Phone number": "",
    Email: "",
    "Policy number": "",
  },
  incidentDetailsData: {
    travelPurpose: "",
    Country: "",
    Address: "",
    Date: "",
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
          state.personalDetailsData["First name"] = value;
          break;
        case "Second name":
          state.personalDetailsData["Second name"] = value;
          break;
        case "Birthday":
          state.personalDetailsData.Birthday = value;
          break;
        case "Phone number":
          state.personalDetailsData["Phone number"] = value;
          break;
        case "Email":
          state.personalDetailsData.Email = value;
          break;
        case "Policy number":
          state.personalDetailsData["Policy number"] = value;
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
          state.incidentDetailsData.Country = value;
          break;
        case "Address":
          state.incidentDetailsData.Address = value;
          break;
        case "Date":
          state.incidentDetailsData.Date = value;
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
