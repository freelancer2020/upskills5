import { createSlice } from "@reduxjs/toolkit";

type MobileNavType = {
  toggle: boolean;
};

const mobileNavState: MobileNavType = {
  toggle: false,
};

export const mobileNavSlice = createSlice({
  name: "Mobile Nav",
  initialState: mobileNavState,
  reducers: {
    toggleNavState(state) {
      state.toggle = !state.toggle;
    },
  },
});

const mobileNavAction = mobileNavSlice.actions;

export default mobileNavAction;
