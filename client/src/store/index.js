import { configureStore } from "@reduxjs/toolkit";

import filterReducers from "../functions/filters";
import uiReducers from "../functions/ui";

export const store = configureStore({
  reducer: {
    filters: filterReducers,
    ui: uiReducers,
  },
});
