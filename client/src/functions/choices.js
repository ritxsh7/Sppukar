import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  branch: "",
  semester: "",
  course: "",
};

const choices = createSlice({
  initialState,
  name: "choices",
  reducers: {
    setBranch: (state, action) => {
      state.branch = action.payload;
    },
    setCourse: (state, action) => {
      state.course = action.payload;
    },
    setSemester: (state, action) => {
      state.semester = action.payload;
    },
  },
});

export default choices.reducer;
export const { setBranch, setCourse, setSemester } = choices.actions;
