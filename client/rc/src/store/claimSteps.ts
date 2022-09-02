import { createSlice } from "@reduxjs/toolkit";

type ClaimState = {
  step: number;
  done: boolean;
  isReturn: boolean;
};

const claimState: ClaimState = {
  step: 1,
  done: false,
  isReturn: false,
};

export const claimSlice = createSlice({
  name: "Claim Report Steps",
  initialState: claimState,
  reducers: {
    continue(state) {
      const step = state.step;

      if (step === 1) {
        state.done = false;
        state.step = state.step + 1;
        state.isReturn = true;
      }
      if (step === 2) {
        state.done = true;
        state.step = state.step + 1;
        state.isReturn = true;
      }
      if (step === 3) {
        state.done = true;
        state.isReturn = true;
      }
    },

    returnBtn(state) {
      const step = state.step;
      if (step === 3) {
        state.done = false;
        state.step = state.step - 1;
        state.isReturn = true;
      }
      if (step === 2) {
        state.done = false;
        state.step = state.step - 1;
        state.isReturn = false;
      }
    },
    continueHref(state, payload) {
      state.step = payload.payload;
    },
  },
});

const claimActions = claimSlice.actions;

export default claimActions;
