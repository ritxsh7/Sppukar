import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  branches: [],
  semesters: [],
  courses: [],
};

const filters = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setBranches: (state, { payload }) => {
      state.branches = payload;
    },
    setCourses: (state, { payload }) => {
      state.courses = payload;
    },
    setSemesters: (state, { payload }) => {
      state.semesters = payload;
    },
    clearSemesters: (state) => {
      state.semesters = [];
    },
    clearCourses: (state) => {
      state.courses = [];
    },
  },
});

export default filters.reducer;
export const {
  setBranches,
  setCourses,
  setSemesters,
  clearSemesters,
  clearCourses,
} = filters.actions;
