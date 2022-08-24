import { createSlice } from "@reduxjs/toolkit";

type NavPathState = {
  isOnPath: boolean;
};

const navPathState: NavPathState = {
  isOnPath: false,
};

export const navState = createSlice({
  name: "navigation path state",
  initialState: navPathState,
  reducers: {
    goOnPath(state) {
      state.isOnPath = true;
    },
    backHome(state) {
      state.isOnPath = false;
    },
  },
});

const navStateActions = navState.actions;
export default navStateActions;
