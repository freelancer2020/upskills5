import { configureStore } from "@reduxjs/toolkit";
import { mobileNavSlice } from "./mobileNavState";
import { navState } from "./navPathState";
const store = configureStore({
  reducer: {
    mobileNav: mobileNavSlice.reducer,
    navState: navState.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
