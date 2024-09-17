import { configureStore } from "@reduxjs/toolkit";
import appslice from "./ToggleSlice";

const store = configureStore({
  reducer: {
    app: appslice,
  },
});
export default store;
