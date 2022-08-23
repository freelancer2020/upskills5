import { configureStore } from "@reduxjs/toolkit";
import { mobileNavSlice } from "./mobileNavState";
const store = configureStore({
  reducer: {
    mobileNav: mobileNavSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
