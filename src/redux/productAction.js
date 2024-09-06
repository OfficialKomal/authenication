import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../api";
import { setProducts } from "./productSlice";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/products");

      if (response?.products?.length) {
        dispatch(setProducts(response.products));
      }
    } catch (error) {
      console.log("Error fetching data is : " + error);
      return rejectWithValue(error.response?.data || "Something went wrong.");
    }
  }
);
