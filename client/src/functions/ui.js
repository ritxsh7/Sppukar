import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNavbarOpen: false,
};

const uiReducers = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setNavbarOpen: (state, action) => {
      const prev = state.isNavbarOpen;
      state.isNavbarOpen = !prev;
    },
  },
});

export const { setNavbarOpen } = uiReducers.actions;
export default uiReducers.reducer;
