import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

export const store = configureStore({
  reducer: {
    cart: rootReducer,
  },
  devTools: true,
});
