import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productAction";

const initialState = {
   loading: true,
    error: null,
    products: []
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    signOut: (state, action) => {
    localStorage.clear()
    },
  },
  extraReducers: (builder) => {
    builder 
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { signOut, setProducts } = authSlice.actions;

export default authSlice.reducer;
