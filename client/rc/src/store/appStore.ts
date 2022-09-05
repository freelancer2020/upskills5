import { configureStore } from "@reduxjs/toolkit";
import { mobileNavSlice } from "./mobileNavState";
import { navState } from "./navPathState";
import { claimSlice } from "./claimSteps";
import { claimData } from "./claimData";
import { claimPersonalValidation } from "./claimPersonalValidation";
const store = configureStore({
  reducer: {
    mobileNav: mobileNavSlice.reducer,
    navState: navState.reducer,
    claimState: claimSlice.reducer,
    claimData: claimData.reducer,
    personalValidation: claimPersonalValidation.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
