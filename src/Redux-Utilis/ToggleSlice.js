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
    closemenu: (state) => {
      state.togglevent = false;
    },
  },
});

export const { togglemenu, closemenu } = appslice.actions;
export default appslice.reducer;
