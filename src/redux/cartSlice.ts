import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../type";

interface CartState {
  productData: ProductType[];
  userInfo: null | string;
  orderData: [];
}

const initialState: CartState = {
  productData: [],
  userInfo: null,
  orderData: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.productData.findIndex(
        (item) => item.name === action.payload.name
      );
      // -1 only would occur if selected product was not already chosen before
      if (existingProduct !== -1) {
        // created cartQuantity to keep track of each selected product quantity
        state.productData[existingProduct].quantity += 1;
      } else {
        // add w/ cart quantity of 1
        state.productData.push({ ...action.payload, quantity: 1 });
      }
    },
    decreaseFromCart: (state, action) => {
      const existingProduct = state.productData.findIndex(
        (item) => item.name === action.payload.name
      );
      // if there are more than one of product, only subtract one
      if (state.productData[existingProduct].quantity > 1) {
        state.productData[existingProduct].quantity -= 1;
      } else if (state.productData[existingProduct].quantity === 1) {
        // remove from array if only one quantity left
        state.productData = state.productData.filter(
          (item) => item.name !== action.payload.name
        );
      }
    },
    removeFromCart: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item.name !== action.payload.name
      );
    },
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    deleteUser: (state) => {
      state.userInfo = null;
    },
    saveUserCart: (state, action) => {
      state.orderData = action.payload;
    },
    resetCart: (state) => {
      state.productData = [];
    },
  },
});

export const {
  addToCart,
  decreaseFromCart,
  removeFromCart,
  addUser,
  deleteUser,
  saveUserCart,
  resetCart,
} = cartSlice.actions;
export default cartSlice.reducer;
