import { createSlice } from "@reduxjs/toolkit";

type ClaimToast = {
  hasError: boolean;
};

const initClaimToast: ClaimToast = {
  hasError: false,
};

export const toastSlice = createSlice({
  name: "Toast Message",
  initialState: initClaimToast,
  reducers: {
    hasError(state, payload) {
      console.log(payload.payload)
      state.hasError = true;
    },
    hasNoError(state) {
      state.hasError = false;
    },
  },
});

const toastActions = toastSlice.actions;
export default toastActions;
