import { configureStore } from "@reduxjs/toolkit";

import filterReducers from "../functions/filters";

export const store = configureStore({
  reducer: {
    filters: filterReducers,
    // user: userReducers,
  },
});
