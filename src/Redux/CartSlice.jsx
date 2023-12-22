import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// const data = JSON.parse(localStorage.getItem("cart"));
const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

console.log("LocalStorage data", initialState);
const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: initialState },
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
      toast.success("Added successfully");
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    deleteFromCart(state, action) {
      const updatedState = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      toast.success("Deleted successfully");
      // localStorage.setItem("cart", JSON.stringify(state.cart));
      return updatedState;
    },
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
