import { combineReducers } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice";

const rootReducer = combineReducers({
  cart: CartReducer,
});

export default rootReducer;
