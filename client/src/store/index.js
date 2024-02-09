import { configureStore } from "@reduxjs/toolkit";

import filterReducers from "../functions/filters";
import uiReducers from "../functions/ui";
import choiceReducers from "../functions/choices";

export const store = configureStore({
  reducer: {
    filters: filterReducers,
    ui: uiReducers,
    choices: choiceReducers,
  },
});
