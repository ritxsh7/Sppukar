import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  branch: [],
  course: [],
  semester: [
    "Sem 1",
    "Sem 2",
    "Sem 3",
    "Sem 4",
    "Sem 5",
    "Sem 6",
    "Sem 7",
    "Sem 8",
  ],
};

const filters = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setBranch: (state, { payload }) => {
      state.branch = payload;
    },
    setCourse: (state, { payload }) => {
      state.course = payload;
    },
    setSemester: (state, { payload }) => {
      state.semester = payload;
    },
  },
});

export default filters.reducer;
export const { setBranch, setCourse, setSemester } = filters.actions;
