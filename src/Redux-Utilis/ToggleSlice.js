import { createSlice } from "@reduxjs/toolkit";

const appslice = createSlice({
  name: "app",
  initialState: {
    togglevent: true,
  },
  reducers: {
    togglemenu: (state) => {
      state.togglevent = !state.togglevent;
    },
  },
});

export const { togglemenu } = appslice.actions;
export default appslice.reducer;
